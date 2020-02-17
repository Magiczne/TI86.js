import ProgramCounter from '../../src/z80/ProgramCounter'

let counter: ProgramCounter

beforeEach(() => {
    counter = new ProgramCounter()
})

test('counter has init value', () => {
    expect(counter.get()).toBe(0)
})

test('next has default value of 1', () => {
    counter.next()
    expect(counter.get()).toBe(1)
})

test('next increments with specified step', () => {
    counter.next(5)
    expect(counter.get()).toBe(5)
})

test('next throws error on negative value or zero', () => {
    expect(() => { counter.next(-1) }).toThrow()
    expect(() => { counter.next(0) }).toThrow()
})

test('go to sets correct position', () => {
    counter.goTo(5)
    expect(counter.get()).toBe(5)
})

test('go to throws error on negative value', () => {
    expect(() => { counter.goTo(-5) }).toThrow()
    expect(() => { counter.goTo(0) }).not.toThrow()
})

test('reset', () => {
    counter.goTo(150)
    expect(counter.get()).toBe(150)

    counter.reset()
    expect(counter.get()).toBe(0)
})