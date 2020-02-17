import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op00 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    pc.next()
}

function op01 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: Optimize
    registers.bc.upper = rom[pc.get() + 1]
    registers.bc.lower = rom[pc.get() + 2]

    pc.next(3)
}

function op03 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.data += 1

    pc.next()
}

function op04 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: Flags
    registers.bc.upper += 1

    pc.next()
}

function op08 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    [registers.af.data, registers.af2.data] = [registers.af2.data, registers.af.data];

    pc.next()
}

function op0b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.data -= 1

    pc.next()
}

function op0e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = rom[pc.get() + 1]
    
    pc.next(2)
}

export {
    op00, op01, op03, op08, 
    op0b, op0e
}