import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op13 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.data += 1

    pc.next()
}

function op1b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.data -= 1

    pc.next()
}

function op1e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = rom[pc.get() + 1]
    
    pc.next(2)
}

export {
    op13, 
    op1b, op1e
}