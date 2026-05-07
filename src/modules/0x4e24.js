// Module 0x4e24
// Args: _0x58f39d, _0xbec683, _0x570eb1

export default (_0x58f39d, _0xbec683, _0x570eb1) => {
                'use strict';
                const _0x84a974 = a0_0x6932;
                var _0x3920db = this && this['__importDefault'] || function(_0x2cfef9) {
                    const _0x30ef8b = _0x84a974;
                    return _0x2cfef9 && _0x2cfef9[_0x30ef8b(0x16f1)] ? _0x2cfef9 : {
                        'default': _0x2cfef9
                    };
                };
                Object['defineProperty'](_0xbec683, '__esModule', {
                    'value': !0x0
                });
                const _0x325fe8 = _0x3920db(_0x570eb1(0x5f07)),
                    _0xe2caca = _0x3920db(_0x570eb1(0x1aef));
                class _0x59ede6 extends _0xe2caca['default'] {
                    ['DeSpawn']() {
                        const _0x8d8b51 = _0x84a974;
                        _0x325fe8['default'][_0x8d8b51(0x1043)]['scene'][_0x8d8b51(0x915)]['removeEvent'](this['leftEvent']), _0x325fe8['default']['Core'][_0x8d8b51(0x6d2)][_0x8d8b51(0x915)][_0x8d8b51(0x17fb)](this[_0x8d8b51(0x1a69)]), this[_0x8d8b51(0xf73)] && this['leftPincer']['Disappear'](), this[_0x8d8b51(0xa51)] && this[_0x8d8b51(0xa51)][_0x8d8b51(0xe00)](), super['DeSpawn']();
                    } ['RegrowLeft']() {
                        const _0x232805 = _0x84a974;
                        this['leftPincer'] = null, this[_0x232805(0x141)] = this[_0x232805(0x6d2)]['time'][_0x232805(0x12b8)]({
                            'delay': this['pincerRespawnDelayL'],
                            'callback': () => {
                                const _0x115924 = _0x232805;
                                this['leftPincer'] && !this[_0x115924(0xf73)][_0x115924(0xdae)] || (this[_0x115924(0xf73)] = this['PincersPool'][_0x115924(0xada)](this['x'], this['y']), this[_0x115924(0xf73)]['flipX'] = !0x1, this[_0x115924(0xf73)][_0x115924(0x351)] = this, this['leftPincer']['OnDead'] = this[_0x115924(0x55e)][_0x115924(0xf7e)](this));
                            }
                        }), this[_0x232805(0x7cb)] = Math[_0x232805(0x1084)](0x5, 1.1 * this['scale']);
                    } ['RegrowRight']() {
                        const _0x248a86 = _0x84a974;
                        this['rightPincer'] = null, this['rightEvent'] = this[_0x248a86(0x6d2)]['time']['addEvent']({
                            'delay': this[_0x248a86(0x316)],
                            'callback': () => {
                                const _0x4ea7ae = _0x248a86;
                                this['rightPincer'] && !this[_0x4ea7ae(0xa51)][_0x4ea7ae(0xdae)] || (this[_0x4ea7ae(0xa51)] = this[_0x4ea7ae(0x11fb)][_0x4ea7ae(0xada)](this['x'], this['y']), this['rightPincer'][_0x4ea7ae(0x4d4)] = !0x0, this[_0x4ea7ae(0xa51)]['owner'] = this, this['rightPincer']['OnDead'] = this[_0x4ea7ae(0x1a86)][_0x4ea7ae(0xf7e)](this));
                            }
                        }), this[_0x248a86(0x7cb)] = Math['min'](0x4, 1.1 * this[_0x248a86(0x7cb)]);
                    } ['SummonDrowner']() {} ['Update'](_0x1cbc9c) {
                        const _0x5f18f6 = _0x84a974;
                        super['Update'](_0x1cbc9c), this['leftPincer'] && (this[_0x5f18f6(0xf73)]['x'] = this['x'] + this['leftOffset']['x'] * this[_0x5f18f6(0x3a8)], this['leftPincer']['y'] = this['y'] + this['leftOffset']['y'] * this[_0x5f18f6(0x1721)], this[_0x5f18f6(0xf73)]['depth'] = this['depth'] + 0x1, this[_0x5f18f6(0xf73)][_0x5f18f6(0xd96)] = this[_0x5f18f6(0xd96)]), this[_0x5f18f6(0xa51)] && (this[_0x5f18f6(0xa51)]['x'] = this['x'] + this[_0x5f18f6(0x14f2)]['x'] * this[_0x5f18f6(0x3a8)], this[_0x5f18f6(0xa51)]['y'] = this['y'] + this[_0x5f18f6(0x14f2)]['y'] * this[_0x5f18f6(0x1721)], this[_0x5f18f6(0xa51)][_0x5f18f6(0x16c6)] = this[_0x5f18f6(0x16c6)] + 0x1, this[_0x5f18f6(0xa51)][_0x5f18f6(0xd96)] = this[_0x5f18f6(0xd96)]);
                    }
                }
                _0xbec683['default'] = _0x59ede6;
            };
