// Module 0x1347
// Args: _0x4560de, _0x2fcd87, _0x498cab

export default (_0x4560de, _0x2fcd87, _0x498cab) => {
                'use strict';
                const _0x489665 = a0_0x6932;
                var _0x1b944f = this && this['__importDefault'] || function(_0x355551) {
                    const _0xe8d25e = a0_0x6932;
                    return _0x355551 && _0x355551['__esModule'] ? _0x355551 : {
                        'default': _0x355551
                    };
                };
                Object['defineProperty'](_0x2fcd87, '__esModule', {
                    'value': !0x0
                }), _0x2fcd87['SpinningRingOfCards'] = void 0x0;
                const _0x5c6f65 = _0x1b944f(_0x498cab(0x6851)),
                    _0x27098a = _0x1b944f(_0x498cab(0x12112));
                class _0x42d594 {
                    constructor(_0x436d48, _0x31670e, _0x193273, _0x5adf5f = 0x1e, _0x2fc08e = 0xfa, _0x187b67 = 0.0002, _0x152ad3 = 1.5, _0x222858 = 0x2710, _0x2ce559 = 0xff00ff) {
                        const _0x597574 = _0x489665;
                        this[_0x597574(0x376)] = [], this['scene'] = _0x436d48, this['x'] = _0x31670e, this['y'] = _0x193273, this[_0x597574(0x9b8)] = _0x5adf5f, this[_0x597574(0x161a)] = _0x2fc08e, this['speed'] = _0x187b67, this[_0x597574(0x7cb)] = _0x152ad3, this[_0x597574(0x5ef)] = _0x222858, this[_0x597574(0x376)] = [], this['container'] = this['scene']['add'][_0x597574(0x1990)](_0x31670e, _0x193273);
                        let _0x364769 = 0x2 * Math['PI'] / this[_0x597574(0x9b8)];
                        for (let _0x141773 = 0x0; _0x141773 < this['amount']; _0x141773++) {
                            let _0x1665d6 = Math[_0x597574(0xd7e)](_0x364769 * _0x141773) * this['radius'],
                                _0x512fd9 = Math[_0x597574(0xc80)](_0x364769 * _0x141773) * this[_0x597574(0x161a)],
                                _0x14c10d = new _0x5c6f65[(_0x597574(0xd2c))](this['scene'], _0x1665d6, _0x512fd9, _0x27098a['default'][_0x597574(0x119a)]());
                            this['sprites'][_0x597574(0x1564)](_0x14c10d), this[_0x597574(0x1990)][_0x597574(0x18bd)](_0x14c10d), this['Flush'](), this[_0x597574(0x6d2)]['time']['addEvent']({
                                'delay': 0x2710,
                                'repeat': -0x1,
                                'callback': () => {
                                    const _0x1da3da = _0x597574;
                                    this[_0x1da3da(0x13ef)]();
                                }
                            });
                        }
                        this['container']['setScale'](0x0), this[_0x597574(0x6d2)][_0x597574(0x12a1)]['add']({
                            'targets': this['container'],
                            'scale': 0x1,
                            'duration': 0x12c,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['Flush']() {
                        const _0x1860b7 = _0x489665;
                        for (let _0x4077cb = 0x0; _0x4077cb < this[_0x1860b7(0x376)][_0x1860b7(0xed9)]; _0x4077cb++) {
                            const _0xa70494 = this[_0x1860b7(0x376)][_0x4077cb];
                            this[_0x1860b7(0x6d2)][_0x1860b7(0x915)][_0x1860b7(0x12b8)]({
                                'delay': 0x64 + 0x64 * _0x4077cb,
                                'callback': () => {
                                    const _0x1fc98c = _0x1860b7;
                                    _0xa70494[_0x1fc98c(0xd6f)](0xc8, 0x1);
                                }
                            });
                        }
                    } ['Update'](_0x360fba) {
                        const _0x2929d6 = _0x489665;
                        Phaser[_0x2929d6(0xbfe)][_0x2929d6(0xa2f)](this['sprites'], {
                            'x': 0x0,
                            'y': 0x0
                        }, this['speed'], this['radius']);
                        for (let _0x1caf77 = 0x0; _0x1caf77 < this[_0x2929d6(0x376)][_0x2929d6(0xed9)]; _0x1caf77++) {
                            const _0xf79407 = this['sprites'][_0x1caf77],
                                _0x34c6da = 0xb4 * Math['atan2'](_0xf79407['y'], _0xf79407['x']) / Math['PI'];
                            _0xf79407['angle'] = _0x34c6da;
                        }
                    }
                }
                _0x2fcd87['SpinningRingOfCards'] = _0x42d594, _0x2fcd87['default'] = _0x42d594;
            };
