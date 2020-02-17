import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op23 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.data += 1

    pc.next()
}

function op2b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.data -= 1

    pc.next()
}

function op2e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = rom[pc.get() + 1]
    
    pc.next(2)
}

export {
    op23, 
    op2b, op2e
}