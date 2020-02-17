import ProgramCounter from './ProgramCounter'
import Register16 from './Register16'
import Register8 from './Register8'
import Registers from './Registers'
import { OpcodeFunction, opcodes } from './opcodes/opcodes'

const fs = require('fs');

class Z80 {
    private registers: Registers = {
        af: new Register16(),
        bc: new Register16(),
        de: new Register16(),
        hl: new Register16(),

        af2: new Register16(),
        bc2: new Register16(),
        de2: new Register16(),
        hl2: new Register16(),

        ix: new Register16(),
        iy: new Register16(),
        sp: new Register16(),

        i: new Register8(),
        r: new Register8(),

        sr: new Register8()
    }
    private pc = new ProgramCounter()
    private ram: Buffer = new Buffer(32768)
    private rom: Buffer = new Buffer([0x00])

    private _opcodes: Map<string, OpcodeFunction> = new Map(opcodes);

    loadRom (rom: string) {
        this.rom = fs.readFileSync(rom);
    }

    execute () {
        // TODO: Check if ROM loaded
    
        while (this.pc.get() < this.rom.length) {
            const opcode = this.rom[this.pc.get()]

            let opcodeString: string

            if (opcode === 0xED) {
                opcodeString = `ed${(this.rom[this.pc.get() + 1]).toString(16)}`
            } else if (opcode === 0xCB) {
                opcodeString = `cb${(this.rom[this.pc.get() + 1]).toString(16)}`
            } else if (opcode === 0xDD) {
                if (this.rom[this.pc.get() + 1] === 0xCB) {
                    opcodeString = `ddcb**${(this.rom[this.pc.get() + 3]).toString(16)}`
                } else {
                    opcodeString = `dd${(this.rom[this.pc.get() + 1]).toString(16)}`
                }
            } else if (opcode === 0xFD) {
                if (this.rom[this.pc.get() + 1] === 0xCB) {
                    opcodeString = `fdcb**${(this.rom[this.pc.get() + 3]).toString(16)}`
                } else {
                    opcodeString = `fd${(this.rom[this.pc.get() + 1]).toString(16)}`
                }
            } else {
                opcodeString = opcode.toString(16)
            }

            if (this._opcodes.has(opcodeString)) {
                const fun = this._opcodes.get(opcodeString) as OpcodeFunction
                fun(this.registers, this.pc, this.ram, this.rom)
            } else {
                console.log(`Unknown opcode: ${opcodeString}`)
                this.pc.next()
            }
        }
    }
}

const emu = new Z80();
emu.loadRom('roms/ti86.rom');
emu.execute();

