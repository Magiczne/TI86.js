export default class Register8 {
    private _data: number = 0x00

    get data (): number {
        return this._data
    }

    set data (data: number) {
        this._data = data & 0xFF
    }

    setBit (bit: number) {
        this._validateBitNumber(bit)

        this._data |= (1 << bit)
    }

    clearBit (bit: number) {
        this._validateBitNumber(bit)

        this._data &= ~(1 << bit)
    }

    toggleBit (bit: number) {
        this._validateBitNumber(bit)

        this._data ^= (1 << bit)
    }

    private _validateBitNumber (bit: number) {
        if (bit < 0 || bit > 7) {
            throw new Error('Register has only 8 bits')
        }
    }
}