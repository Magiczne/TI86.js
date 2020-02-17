import ProgramCounter from './ProgramCounter'
import Register16 from './Register16'
import Register8 from './Register8'

const fs = require('fs');

class Z80 {
    // Main registers
    private _af = new Register16()
    private _bc = new Register16()
    private _de = new Register16()
    private _hl = new Register16()

    // Alternate registers
    private _af2 = new Register16()
    private _bc2 = new Register16()
    private _de2 = new Register16()
    private _hl2 = new Register16()

    // Index registers
    private _ix = new Register16()
    private _iy = new Register16()
    private _sp = new Register16()

    // Other registers
    private _i = new Register8()
    private _r = new Register8()

    // Program counter
    private _pc = new ProgramCounter()
    
    // Status register
    private _sr = new Register8()

    // RAM
    private _ram: Buffer = new Buffer(32768);

    // ROM
    private _rom: Buffer = new Buffer([0x00]);

    private _opcodes: Map<number, Function> = new Map([
        [ 0x00, () => {
            // Nop. Increment program counter 
            this._pc.next()
         } ],
        [ 0x04, () => {
            // Add one to b
            this._bc.upper += 1
            this._pc.next()
        }] ,
        [ 0x0e, () => {
            // Load data into C
            const data = this._rom[this._pc.get() + 1]
            this._bc.lower = data
            this._pc.next(2)
        } ],
        [ 0x3e, () => {
            // Load data into A
            const data = this._rom[this._pc.get() + 1]
            this._af.upper = data
            this._pc.next(2)
        } ],
        [ 0x57, () => {
            // Load D into A
            this._de = this._af
            this._pc.next()
        } ]
    ]);

    loadRom (rom: string) {
        this._rom = fs.readFileSync(rom);
    }

    execute () {
        // TODO: Check if ROM loaded
    
        while (this._pc.get() < this._rom.length) {
            const opcode = this._rom[this._pc.get()]

            if (opcode === 0xED) {
                console.warn('Extended instruction!');

                this._pc.next();
            } else if (opcode === 0xCB) {
                console.warn('Bit instruction!')

                this._pc.next();
            } else if (opcode === 0xDD) {
                if (this._rom[this._pc.get() + 1] === 0xCB) {
                    console.warn('IX Bit instruction!')
                } else {
                    console.warn('IX Instruction!')
                }

                this._pc.next();
            } else if (opcode === 0xFD) {
                if (this._rom[this._pc.get() + 1] === 0xCB) {
                    console.warn('IY Bit instruction!')
                } else {
                    console.warn('IY Instruction!')
                }

                this._pc.next();
            } else if (this._opcodes.has(opcode)) {
                // console.log(`Opcode successful: ${opcode.toString(16)}`)
                const fun = this._opcodes.get(opcode) as Function
                fun()
            } else {
                console.log(`Unknown opcode: ${opcode.toString(16)}`)
                this._pc.next();
            }
        }
    }
}

// const emu = new Z80();
// emu.loadRom('roms/ti86.rom');
// emu.execute();

