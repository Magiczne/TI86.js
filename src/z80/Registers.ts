import Register8 from './Register8'
import Register16 from './Register16'

type Registers = {
    'af': Register16,
    'bc': Register16,
    'de': Register16,
    'hl': Register16,

    'af2': Register16,
    'bc2': Register16,
    'de2': Register16,
    'hl2': Register16,

    'ix': Register16,
    'iy': Register16,
    'sp': Register16,

    'i': Register8,
    'r': Register8,

    'sr': Register8
}

export default Registers