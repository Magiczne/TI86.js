import Register from '../../src/z80/Register8'

let register: Register

beforeEach(() => {
    register = new Register()
})

test('register has init value', () => {
    expect(register.data).toBe(0x00)
})

describe('register operations', () => {
    test('sets data', () => {
        register.data = 0xCD

        expect(register.data).toBe(0xCD)
    })

    test('sets data truncates to 8 bits', () => {
        register.data = 0xCD1

        expect(register.data).toBe(0xD1)
    })
})

describe('bit operations', () => {
    test('invalid bit index', () => {
        expect(() => { register.setBit(15) }).toThrow()
        expect(() => { register.clearBit(-1) }).toThrow()
        expect(() => { register.toggleBit(8) }).toThrow()
    })

    test('sets bit', () => {
        register.setBit(3)

        expect(register.data).toBe(0x08)
    })

    test('clears bit', () => {
        register.data = 0xFFFF
        register.clearBit(3)

        expect(register.data).toBe(0xF7)
    })

    test('toggles bit', () => {
        register.data = 0x0F
        register.toggleBit(3)
        register.toggleBit(5)

        expect(register.data).toBe(0x27)
    })
})