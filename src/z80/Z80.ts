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

            if (opcode === 0xED) {
                console.warn('Extended instruction!');

                this.pc.next();
            } else if (opcode === 0xCB) {
                console.warn('Bit instruction!')

                this.pc.next();
            } else if (opcode === 0xDD) {
                if (this.rom[this.pc.get() + 1] === 0xCB) {
                    console.warn('IX Bit instruction!')
                } else {
                    console.warn('IX Instruction!')
                }

                this.pc.next();
            } else if (opcode === 0xFD) {
                if (this.rom[this.pc.get() + 1] === 0xCB) {
                    console.warn('IY Bit instruction!')
                } else {
                    console.warn('IY Instruction!')
                }

                this.pc.next();
            } else if (this._opcodes.has(opcode.toString(16))) {
                // console.log(`Opcode successful: ${opcode.toString(16)}`)
                const fun = this._opcodes.get(opcode.toString(16)) as OpcodeFunction
                fun(this.registers, this.pc, this.ram, this.rom)
            } else {
                console.log(`Unknown opcode: ${opcode.toString(16)}`)
                this.pc.next();
            }
        }
    }
}

const emu = new Z80();
emu.loadRom('roms/ti86.rom');
emu.execute();

