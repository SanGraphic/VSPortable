// Module 0x50ae
// Args: _0x437924, _0x61252c, _0x2d67a8

export default (_0x437924, _0x61252c, _0x2d67a8) => {
                'use strict';
                const _0x347ba0 = a0_0x6932;
                var _0x15baa4 = this && this['__importDefault'] || function(_0x265de9) {
                    return _0x265de9 && _0x265de9['__esModule'] ? _0x265de9 : {
                        'default': _0x265de9
                    };
                };
                Object['defineProperty'](_0x61252c, '__esModule', {
                    'value': !0x0
                });
                const _0x1583f4 = _0x15baa4(_0x2d67a8(0x5f07)),
                    _0x571294 = _0x15baa4(_0x2d67a8(0x166d5)),
                    _0x4c1603 = _0x15baa4(_0x2d67a8(0xc42e)),
                    _0x4e10a3 = _0x15baa4(_0x2d67a8(0x1fd7)),
                    _0x585b9c = _0x15baa4(_0x2d67a8(0x5103));
                class _0xe8af56 extends _0x571294['default'] {
                    constructor(_0x2c2e96, _0xaa053, _0x5f5151, _0x25641f = 0x0) {
                        const _0x244d58 = _0x347ba0;
                        super(_0x2c2e96, _0xaa053, _0x5f5151, _0x4c1603['default']['GEM']), this[_0x244d58(0x8e3)] = 'GemBlue.png', this[_0x244d58(0x1138)] = {
                            'x': 0x0,
                            'y': 0x0
                        }, this[_0x244d58(0xb81)] = _0x25641f, this[_0x244d58(0x100e)](this['value']), this[_0x244d58(0x8a2)](_0x585b9c['default']['PixelScale']), this['setFrame'](this[_0x244d58(0x8e3)]), _0x1583f4['default'][_0x244d58(0x1043)][_0x244d58(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'time': 0x1,
                            'duration': 0x1f4,
                            'ease': 'Linear'
                        });
                    }
                    static['getDetune']() {
                        const _0x37bcb0 = _0x347ba0;
                        return 0x3c * _0xe8af56[_0x37bcb0(0xdb5)][_0xe8af56[_0x37bcb0(0x1692)]++ % _0xe8af56['detunes'][_0x37bcb0(0xed9)]];
                    } ['SetValue'](_0x27ee91) {
                        const _0x22b3a7 = _0x347ba0;
                        switch (this[_0x22b3a7(0xb81)] = _0x27ee91, this['value']) {
                            case 0x1:
                            case 0x2:
                                this['frameName'] = 'GemBlue.png';
                                break;
                            case 0x3:
                            case 0x4:
                            case 0x5:
                            case 0x6:
                            case 0x7:
                            case 0x8:
                            case 0x9:
                                this[_0x22b3a7(0x8e3)] = 'GemGreen.png';
                                break;
                            default:
                                this[_0x22b3a7(0x8e3)] = 'GemRed.png';
                        }
                        this[_0x22b3a7(0x381)](this[_0x22b3a7(0x8e3)])['setAlpha'](0x1);
                    } ['FollowCurve']() {
                        const _0x24aeec = _0x347ba0;
                        var _0x9eebf6 = new Phaser[(_0x24aeec(0x24f))]['Vector2'](0x0, 0x0);
                        this[_0x24aeec(0xfc8)]['getPoint'](this[_0x24aeec(0x915)], _0x9eebf6), this[_0x24aeec(0x726)](_0x9eebf6['x'], _0x9eebf6['y']);
                    } ['Update']() {
                        const _0x1e738e = _0x347ba0;
                        super['Update'](), this[_0x1e738e(0xb4a)](this['y'] - _0x1583f4[_0x1e738e(0xd2c)][_0x1e738e(0x1043)][_0x1e738e(0x10f6)]['y'] - this[_0x1e738e(0x6d2)][_0x1e738e(0x12f9)][_0x1e738e(0x140e)]);
                    } ['GetTaken']() {
                        const _0x215a0b = _0x347ba0;
                        this[_0x215a0b(0x210)] || (_0x1583f4['default']['Core'][_0x215a0b(0x1884)]['pewpew'] ? (_0x1583f4[_0x215a0b(0xd2c)][_0x215a0b(0x1267)][_0x215a0b(0x7f6)](_0x4e10a3['default']['Gem'], {
                            'volume': 0.1
                        }, 0x1, 0x1), _0x1583f4['default']['Core']['Arcanas'][_0x215a0b(0x3ce)](this['value'] * _0x1583f4[_0x215a0b(0xd2c)][_0x215a0b(0x1043)][_0x215a0b(0x10f6)][_0x215a0b(0x17b0)], this['frame'][_0x215a0b(0x226)]), super['GetTaken']()) : (_0x1583f4['default']['Core'][_0x215a0b(0x10f6)][_0x215a0b(0x7ba)](this['value'] * _0x1583f4['default'][_0x215a0b(0x1043)]['Player'][_0x215a0b(0x17b0)]), _0x1583f4['default']['Sound'][_0x215a0b(0x7f6)](_0x4e10a3['default'][_0x215a0b(0xbe7)], {
                            'volume': 0.1
                        }, 0x1, 0x1), _0x1583f4[_0x215a0b(0xd2c)][_0x215a0b(0x1043)][_0x215a0b(0x141a)]['Update'](), _0x1583f4['default'][_0x215a0b(0x1043)][_0x215a0b(0x7fa)](), super[_0x215a0b(0x437)]()));
                    } ['BlessColor'](_0x1833be, _0x35765e) {
                        const _0x3c64c5 = _0x347ba0;
                        super[_0x3c64c5(0x77d)](_0x1833be), this[_0x3c64c5(0x381)](_0xe8af56['GEMFRAMES'][_0x35765e % 0xb]);
                    }
                }
                _0x61252c['default'] = _0xe8af56, _0xe8af56['GEMFRAMES'] = ['Gem1.png', 'Gem2.png', 'Gem3.png', 'Gem4.png', 'Gem5.png', 'Gem6.png', 'Gem7.png', 'Gem8.png', 'Gem9.png', 'Gem10.png', 'Gem11.png'], _0xe8af56['detunes'] = [0x0, 0x1, 0x2, 0x4, 0x7, 0x8, 0x9, 0xb, 0x2, 0x3, 0x4, 0x6, 0x9, 0xa, 0xb, 0xd, 0x10, 0xd, 0xb, 0xa, 0x9, 0x6, 0x4, 0x2], _0xe8af56['detune'] = 0x0;
            };
