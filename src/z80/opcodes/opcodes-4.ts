import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op40 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: What
    registers.bc.upper = registers.bc.upper

    pc.next()
}

function op41 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = registers.bc.lower

    pc.next()
}

function op42 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = registers.de.upper

    pc.next()
}

function op43 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = registers.de.lower

    pc.next()
}

function op44 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = registers.hl.upper

    pc.next()
}

function op45 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = registers.hl.lower

    pc.next()
}

function op47 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = registers.af.upper

    pc.next()
}

function op48 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = registers.bc.upper

    pc.next()
}

function op49 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: What
    registers.bc.lower = registers.bc.lower

    pc.next()
}

function op4a (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = registers.de.upper

    pc.next()
}

function op4b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = registers.de.lower

    pc.next()
}

function op4c (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = registers.hl.upper

    pc.next()
}

function op4d (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = registers.hl.lower

    pc.next()
}

function op4e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = ram[registers.hl.data]

    pc.next()
}

function op4f (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = registers.af.upper

    pc.next()
}

export {
    op40, op41, op42, op43, op44, op45, /*op46,*/ op47, op48, op49,
    op4a, op4b, op4c, op4d, op4e, op4f
}