// Module 0x8cbc
// Args: _0x3a548d, _0x481a9a, _0x341409

export default (_0x3a548d, _0x481a9a, _0x341409) => {
                'use strict';
                const _0x1b2983 = a0_0x6932;
                var _0x58f090 = this && this['__importDefault'] || function(_0x3056ca) {
                    const _0x347825 = _0x1b2983;
                    return _0x3056ca && _0x3056ca[_0x347825(0x16f1)] ? _0x3056ca : {
                        'default': _0x3056ca
                    };
                };
                Object['defineProperty'](_0x481a9a, '__esModule', {
                    'value': !0x0
                }), _0x481a9a['W_Trapano'] = void 0x0;
                const _0x2f179d = _0x341409(0x18304),
                    _0x398731 = _0x58f090(_0x341409(0x9b68)),
                    _0x490579 = _0x58f090(_0x341409(0x54e3)),
                    _0x53bd65 = _0x58f090(_0x341409(0x5f07)),
                    _0x3e8ed2 = _0x58f090(_0x341409(0xe49a));
                class _0x1bf14e extends _0x3e8ed2['default'] {
                    constructor(_0x55247c) {
                        const _0x3dc414 = _0x1b2983;
                        super(_0x55247c), this[_0x3dc414(0xa46)] = _0x490579[_0x3dc414(0xd2c)][_0x3dc414(0x18d1)], this[_0x3dc414(0xb78)] = 0x0, this[_0x3dc414(0x492)] = 0x3e8 / 0x3c, this[_0x3dc414(0x1761)] = _0x53bd65['default']['Core'][_0x3dc414(0x6d2)]['add'][_0x3dc414(0x1791)]('vfx'), this[_0x3dc414(0xb8c)] = this[_0x3dc414(0x1761)]['createEmitter']({
                            'frame': ['PfxPink.png', 'PfxPurple.png'],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x1f4,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xc8,
                                'max': 0xdc
                            },
                            'quantity': 0x64,
                            'scale': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'frequency': 0x4,
                            'blendMode': _0x2f179d['BlendModes']['ADD'],
                            'on': !0x1
                        }), this[_0x3dc414(0x1007)] = !0x1, this['explosionType'] = _0x490579['default']['RAYEXPLOSION'];
                    } ['Init']() {
                        const _0x932a9f = _0x1b2983;
                        super[_0x932a9f(0x658)](), this[_0x932a9f(0xc82)]['isUncapped'] = !0x0;
                    } ['Update'](_0xaf251) {
                        const _0x45ed86 = _0x1b2983;
                        super[_0x45ed86(0xa9f)](_0xaf251), this[_0x45ed86(0xb78)] += _0xaf251, this['totalTime'] += _0x53bd65[_0x45ed86(0xd2c)][_0x45ed86(0x1043)][_0x45ed86(0x10f6)]['frameWalk'] * (_0xaf251 / this[_0x45ed86(0x492)]), this[_0x45ed86(0xb78)] >= this[_0x45ed86(0x170c)] && (this['totalTime'] = 0x0, this['Fire']());
                    } ['ResetFiringTimer']() {
                        const _0x1da255 = _0x1b2983;
                        this[_0x1da255(0x19b7)] && this[_0x1da255(0x19b7)][_0x1da255(0x16ca)]();
                    } ['MakeLevelOne']() {
                        super['MakeLevelOne']();
                    } ['onBulletOverlapsEnemy'](_0x900e9d, _0xc707ad) {
                        const _0x3936ef = _0x1b2983;
                        var _0x1a4005 = _0xc707ad;
                        if (!_0x1a4005[_0x3936ef(0xdae)] && !_0x900e9d[_0x3936ef(0x1738)](_0x1a4005)) {
                            let _0x1ef086 = _0x900e9d[_0x3936ef(0x1a7f)] ? _0x900e9d[_0x3936ef(0xa6d)] / 0x3e8 * this[_0x3936ef(0xaae)] : 0x0,
                                _0x538663 = this['PPower'] + _0x1ef086;
                            _0x1a4005[_0x3936ef(0x1112)](_0x538663, this[_0x3936ef(0x347)], this[_0x3936ef(0x1992)], this['bulletType']), this[_0x3936ef(0xb3d)] += _0x538663;
                        }
                    } ['CheckArcanas']() {
                        const _0x125c41 = _0x1b2983;
                        _0x53bd65[_0x125c41(0xd2c)][_0x125c41(0x1043)]['Arcanas'][_0x125c41(0x15e7)][_0x125c41(0x1303)](_0x398731['default']['T02_TWILIGHT']) > -0x1 && (this[_0x125c41(0x1007)] = !0x0), super[_0x125c41(0x1ce)]();
                    }
                }
                _0x481a9a['W_Trapano'] = _0x1bf14e, _0x481a9a['default'] = _0x1bf14e;
            };
