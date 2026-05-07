// Module 0x10079
// Args: _0x4fbc23, _0x14a23d, _0x52dad8

export default (_0x4fbc23, _0x14a23d, _0x52dad8) => {
                'use strict';
                const _0x55c70e = a0_0x6932;
                var _0x39d297 = this && this['__importDefault'] || function(_0x29efbe) {
                    const _0x363d0c = a0_0x6932;
                    return _0x29efbe && _0x29efbe['__esModule'] ? _0x29efbe : {
                        'default': _0x29efbe
                    };
                };
                Object['defineProperty'](_0x14a23d, '__esModule', {
                    'value': !0x0
                }), _0x14a23d['B_Jubilee'] = void 0x0;
                const _0x3cdf1a = _0x39d297(_0x52dad8(0xa14d)),
                    _0x46608a = _0x39d297(_0x52dad8(0x5f07));
                class _0x52eb10 extends _0x3cdf1a['default'] {
                    constructor(_0x5c9a51, _0x40a73f, _0x94e677, _0x4f0661, _0x19ac96) {
                        const _0x5a6a4a = _0x55c70e;
                        super(_0x5c9a51, _0x40a73f, _0x94e677, 'vfx', 'WhiteDot.png', _0x4f0661, _0x19ac96), this[_0x5a6a4a(0x1aba)] = 0x30, this[_0x5a6a4a(0x1234)] = this['weapon'], this[_0x5a6a4a(0x183f)](!0x1);
                    } ['OnRecycle']() {
                        const _0xa2485d = _0x55c70e;
                        var _0x4a6cf7, _0x341444;
                        super[_0xa2485d(0x5ce)](), this[_0xa2485d(0x8a2)](0x1), this[_0xa2485d(0xcf9)][_0xa2485d(0xdf6)](0x1, -0.5, -0.5), this[_0xa2485d(0x8a2)](0x0);
                        let _0x21b423, _0x239592, _0x5184af = this[_0xa2485d(0x1234)]['GetFwEmitters'](this[_0xa2485d(0x19c4)]);
                        if (_0x5184af) {
                            if (this[_0xa2485d(0x4a1)][_0xa2485d(0x942)] < 0x4 && 0x0 == this[_0xa2485d(0x19c4)]) {
                                var _0x267865 = this['scene']['physics']['closest'](_0x46608a['default'][_0xa2485d(0x1043)]['Player'], _0x46608a[_0xa2485d(0xd2c)][_0xa2485d(0x1043)][_0xa2485d(0x1a91)]);
                                _0x267865 && (_0x21b423 = _0x267865['x'], _0x239592 = _0x267865['y']);
                            } else _0x21b423 = this['x'] + (Math['random']() - 0.5) * (0.75 * this[_0xa2485d(0x6d2)][_0xa2485d(0x12f9)]['width']), _0x239592 = this['y'] - 0x40 - 0x80 * Math[_0xa2485d(0x9ad)]();
                            this['x'] = _0x21b423, this['y'] = _0x239592, null === (_0x4a6cf7 = this[_0xa2485d(0x660)]) || void 0x0 === _0x4a6cf7 || _0x4a6cf7[_0xa2485d(0x1a34)](), this['scaleTween'] = this[_0xa2485d(0x6d2)]['tweens'][_0xa2485d(0x18bd)]({
                                'targets': this,
                                'scale': this[_0xa2485d(0x1aba)] * this[_0xa2485d(0x4a1)][_0xa2485d(0x5f5)],
                                'duration': this[_0xa2485d(0x4a1)][_0xa2485d(0x16c3)],
                                'yoyo': !0x0,
                                'onComplete': () => {
                                    this['DeSpawn']();
                                }
                            }), null === (_0x341444 = this[_0xa2485d(0xa1f)]) || void 0x0 === _0x341444 || _0x341444[_0xa2485d(0x1a34)](), this['emitterCounter'] = this[_0xa2485d(0x6d2)]['tweens'][_0xa2485d(0x3a0)]({
                                'from': 0x0,
                                'to': 0x1,
                                'duration': 0.3 * this[_0xa2485d(0x4a1)][_0xa2485d(0x16c3)],
                                'onStart': () => {
                                    const _0x2c2ece = _0xa2485d;
                                    _0x5184af[_0x2c2ece(0x8a2)]({
                                        'start': Math['min'](0x4, this['weapon'][_0x2c2ece(0x5f5)]),
                                        'end': 0x0
                                    }), _0x5184af['setQuantity'](0x40), _0x5184af[_0x2c2ece(0x726)](_0x21b423, _0x239592), _0x5184af['start']();
                                },
                                'onStop': () => {
                                    const _0x304ddd = _0xa2485d;
                                    _0x5184af[_0x304ddd(0x1a34)]();
                                },
                                'onComplete': () => {
                                    const _0x1b34bc = _0xa2485d;
                                    _0x5184af[_0x1b34bc(0x1a34)]();
                                }
                            });
                        } else console[_0xa2485d(0x1947)]('No emitter');
                    }
                }
                _0x14a23d['B_Jubilee'] = _0x52eb10, _0x14a23d['default'] = _0x52eb10;
            };
