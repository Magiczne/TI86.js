import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op50 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.upper = registers.bc.upper

    pc.next()
}

function op51 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.upper = registers.bc.lower

    pc.next()
}

function op52 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: ??
    registers.de.upper = registers.de.upper

    pc.next()
}

function op53 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.upper = registers.de.lower

    pc.next()
}

function op54 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.upper = registers.hl.upper

    pc.next()
}

function op55 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.upper = registers.hl.lower

    pc.next()
}

function op57 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.de.upper

    pc.next()
}

function op58 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = registers.bc.upper

    pc.next()
}

function op59 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = registers.bc.lower

    pc.next()
}

function op5a (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = registers.de.upper

    pc.next()
}

function op5b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: ???
    registers.de.lower = registers.de.lower

    pc.next()
}

function op5c (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = registers.hl.upper

    pc.next()
}

function op5d (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = registers.hl.lower

    pc.next()
}

function op5e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = ram[registers.hl.data]

    pc.next()
}

function op5f (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = registers.af.upper

    pc.next()
}

export {
    op50, op51, op52, op53, op54, op55, /*op56,*/ op57, op58, op59,
    op5a, op5b, op5c, op5d, op5e, op5f
}