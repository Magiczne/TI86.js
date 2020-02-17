import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function opeb (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    [registers.de.data, registers.hl.data] = [registers.hl.data, registers.de.data];

    pc.next()
}

export {
    // ope0, ope1, ope2, ope3, ope4, ope5, ope6, ope7, ope8, ope9,
    /*opea,*/ opeb, /*opec, oped, opee, opef*/
}