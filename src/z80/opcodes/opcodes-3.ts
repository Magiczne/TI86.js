import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function op33 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.sp.data += 1

    pc.next()
}

function op3b (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.sp.data -= 1

    pc.next()
}

function op3e (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    registers.af.upper = rom[pc.get() + 1]

    pc.next(2)
}

export {
    op33, op3b, op3e
}