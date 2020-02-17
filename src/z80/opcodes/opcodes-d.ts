import Registers from '../Registers'
import ProgramCounter from '../ProgramCounter'

function opd9 (registers: Registers, pc: ProgramCounter, ram: Buffer, rom: Buffer) {
    [registers.bc.data, registers.bc2.data] = [registers.bc2.data, registers.bc.data];
    [registers.de.data, registers.de2.data] = [registers.de2.data, registers.de.data];
    [registers.hl.data, registers.hl2.data] = [registers.hl2.data, registers.hl.data];

    pc.next()
}

export {
    /*opd0, opd1, opd2, opd3, opd4, opd5, opd6, opd7, opd8,*/ opd9,
    // opda, opdb, opdc, opdd, opde, opdf
}