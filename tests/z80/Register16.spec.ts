import Register from '../../src/z80/Register16'

let register: Register

beforeEach(() => {
    register = new Register()
})

test('register has init value', () => {
    expect(register.data).toBe(0x0000)
})

describe('register operations', () => {
    test('sets upper register data', () => {
        register.upper = 0xCD
    
        expect(register.data).toBe(0xCD00)
        expect(register.upper).toBe(0xCD)
    })

    test('sets upper register data truncates to 8 bits', () => {
        register.upper = 0xCD1

        expect(register.data).toBe(0xD100)
        expect(register.upper).toBe(0xD1)
    })
    
    test('sets lower register data', () => {
        register.lower = 0xCD
    
        expect(register.data).toBe(0x00CD)
        expect(register.lower).toBe(0xCD)
    })

    test('sets lower register data truncates to 8 bits', () => {
        register.lower = 0xCD1

        expect(register.data).toBe(0x00D1)
        expect(register.lower).toBe(0xD1)
    })
    
    test('sets data', () => {
        register.data = 0xBEEF
    
        expect(register.data).toBe(0xBEEF)
    })
    
    test('sets data truncates to 16 bits', () => {
        register.data = 0xBEEF1
    
        expect(register.data).toBe(0xEEF1)
    })
})

describe('bit operations', () => {
    test('invalid bit index', () => {
        expect(() => { register.setBit(22) }).toThrow()
        expect(() => { register.clearBit(-5) }).toThrow()
        expect(() => { register.toggleBit(16) }).toThrow()
    })
    
    test('sets bit', () => {
        register.setBit(3)
    
        expect(register.data).toBe(0x0008)
    })
    
    test('clears bit', () => {
        register.data = 0xFFFF
        register.clearBit(3)
    
        expect(register.data).toBe(0xFFF7)
    })
    
    test('toggles bit', () => {
        register.data = 0x00FF
        register.toggleBit(3)
        register.toggleBit(11)
    
        expect(register.data).toBe(0x08F7)
    })
})