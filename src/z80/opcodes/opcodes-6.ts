import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op60 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = registers.bc.upper
    
    pc.next()
}

function op61 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = registers.bc.lower
    
    pc.next()
}

function op62 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = registers.de.upper

    pc.next()
}

function op63 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = registers.de.lower
    
    pc.next()
}

function op64 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    // TODO: What
    registers.hl.upper = registers.hl.upper
    
    pc.next() 
}

function op65 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = registers.hl.lower

    pc.next()
}

function op67 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.upper = registers.af.upper

    pc.next()
}

function op68 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.bc.upper

    pc.next()
}

function op69 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.bc.lower

    pc.next()
}

function op6a (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.de.upper

    pc.next()
}

function op6b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.de.lower

    pc.next()
}

function op6c (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.hl.upper

    pc.next()
}

function op6d (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.hl.lower

    pc.next()
}

function op6e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = ram[registers.hl.data]

    pc.next()
}

function op6f (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.hl.lower = registers.af.upper

    pc.next()
}

export {
    op60, op61, op62, op63, op64, op65, /*op66,*/ op67, op68, op69,
    op6a, op6b, op6c, op6d, op6e, op6f
}