import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op70 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.upper = ram[registers.hl.data]
    
    pc.next()
}

function op71 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.bc.lower = ram[registers.hl.data]
    
    pc.next()
}

function op72 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.upper = ram[registers.hl.data]

    pc.next()
}

function op73 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.de.lower = ram[registers.hl.data]
    
    pc.next()
}

function op74 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = ram[registers.hl.data]
    
    pc.next() 
}

function op75 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = ram[registers.hl.data]

    pc.next()
}

function op77 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = ram[registers.hl.upper]

    pc.next()
}

function op78 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.bc.upper

    pc.next()
}

function op79 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.bc.lower

    pc.next()
}

function op7a (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.de.upper

    pc.next()
}

function op7b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.de.lower

    pc.next()
}

function op7c (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.hl.upper

    pc.next()
}

function op7d (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.hl.lower

    pc.next()
}

function op7e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = ram[registers.hl.data]

    pc.next()
}

function op7f (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = registers.af.upper

    pc.next()
}

export {
    op70, op71, op72, op73, op74, op75, /*op76,*/ op77, op78, op79,
    op7a, op7b, op7c, op7d, op7e, op7f
}