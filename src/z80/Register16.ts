export default class Register16 {
    private _data: number = 0x0000

    get upper (): number {
        return this._data >>> 8
    }

    set upper (data: number) {
        this._data = (this.data & 0x00FF) | ((data & 0xFF) << 8)
    }

    get lower (): number {
        return this._data & 0xFF
    }

    set lower (data: number) {
        this._data |= (data & 0xFF)
    }

    get data (): number {
        return this._data
    }

    set data (data: number) {
        this._data = data & 0xFFFF
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
        if (bit < 0 || bit > 15) {
            throw new Error('Register has only 16 bits')
        }
    }
}