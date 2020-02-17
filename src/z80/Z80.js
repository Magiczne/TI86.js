var fs = require('fs');
var Z80 = /** @class */ (function () {
    function Z80() {
        var _this = this;
        // Main registers
        this._af = 0;
        this._bc = 0;
        this._de = 0;
        this._hl = 0;
        // Alternate registers
        this._af2 = 0;
        this._bc2 = 0;
        this._de2 = 0;
        this._hl2 = 0;
        // Index registers
        this._ix = 0;
        this._iy = 0;
        this._sp = 0;
        // Other registers
        this._i = 0;
        this._r = 0;
        // Program counter
        this._pc = 0;
        // Status register
        this._sr = 0;
        // RAM
        this._ram = new Buffer(32768);
        this._opcodes = new Map([
            [0x00, function () { _this._pc++; }],
            [0x04, function () {
                    _this._bc++;
                    _this._pc++;
                }],
            [0x3e, function () {
                    var data = _this._rom[_this._pc];
                    _this._af = data;
                    _this._pc++;
                }],
            [0x57, function () {
                    _this._de = _this._af;
                    _this._pc++;
                }]
        ]);
    }
    Z80.prototype.loadRom = function (rom) {
        this._rom = fs.readFileSync(rom);
    };
    Z80.prototype.execute = function () {
        // TODO: Check if ROM loaded
        while (this._pc < this._rom.length) {
            var opcode = this._rom[this._pc];
            if (opcode === 0xED) {
                console.warn('Extended instruction!');
                this._pc++;
            }
            else if (opcode === 0xCB) {
                console.warn('Bit instruction!');
                this._pc++;
            }
            else if (opcode === 0xDD) {
                if (this._rom[this._pc + 1] === 0xCB) {
                    console.warn('IX Bit instruction!');
                }
                else {
                    console.warn('IX Instruction!');
                }
                this._pc++;
            }
            else if (opcode === 0xFD) {
                if (this._rom[this._pc + 1] === 0xCB) {
                    console.warn('IY Bit instruction!');
                }
                else {
                    console.warn('IY Instruction!');
                }
                this._pc++;
            }
            else if (this._opcodes.has(opcode)) {
                // console.log(`Opcode successful: ${opcode.toString(16)}`)
                this._opcodes.get(opcode)();
            }
            else {
                console.log("Unknown opcode: " + opcode.toString(16));
                this._pc++;
            }
        }
    };
    return Z80;
}());
var emu = new Z80();
emu.loadRom('roms/ti86.rom');
emu.execute();
