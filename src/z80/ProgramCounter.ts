export default class ProgramCounter {
    private _counter: number = 0

    get (): number {
        return this._counter
    }

    next (step: number = 1) {
        if (step < 1) {
            throw new Error('Step value must be positive')
        }

        this._counter += step
    }

    goTo (position: number) {
        if (position < 0) {
            throw new Error('Program counter value must be positive')
        }

        this._counter = position
    }

    reset () {
        this._counter = 0
    }
}