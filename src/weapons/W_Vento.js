// Module 0x11f65
// Args: _0x5a5482, _0x2c5847, _0x229924

export default (_0x5a5482, _0x2c5847, _0x229924) => {
                'use strict';
                const _0x27e9d2 = a0_0x6932;
                var _0x16aba7 = this && this['__importDefault'] || function(_0x2a7b9a) {
                    const _0x3bf621 = _0x27e9d2;
                    return _0x2a7b9a && _0x2a7b9a[_0x3bf621(0x16f1)] ? _0x2a7b9a : {
                        'default': _0x2a7b9a
                    };
                };
                Object['defineProperty'](_0x2c5847, '__esModule', {
                    'value': !0x0
                }), _0x2c5847['W_Vento'] = void 0x0;
                const _0x2c14c9 = _0x229924(0x18304),
                    _0x5a8f9f = _0x16aba7(_0x229924(0x9b68)),
                    _0x1e2831 = _0x16aba7(_0x229924(0x5f07)),
                    _0x52e93d = _0x16aba7(_0x229924(0xe49a));
                class _0x588b6d extends _0x52e93d['default'] {
                    constructor(_0x5228ff) {
                        const _0x2d84fd = _0x27e9d2;
                        super(_0x5228ff), this[_0x2d84fd(0x7c0)] = 0x0, this[_0x2d84fd(0x1359)] = 0x0, this['mul'] = 0x3e8 / 0x6, this[_0x2d84fd(0xb78)] = 0x0, this[_0x2d84fd(0x1150)] = _0x1e2831['default']['Core']['scene']['add'][_0x2d84fd(0x1791)]('vfx'), this[_0x2d84fd(0x125b)] = this['PfxEmitterManager'][_0x2d84fd(0x14c0)]({
                            'frame': ['PfxHoly1.png', 'PfxHoly2.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0xb4
                            },
                            'speed': {
                                'min': 0x19,
                                'max': 0x32
                            },
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'blendMode': _0x2c14c9['BlendModes'][_0x2d84fd(0x1811)],
                            'gravityY': -0x1f4,
                            'on': !0x1
                        }), this[_0x2d84fd(0x1150)]['setDepth'](-0x1);
                    } ['CheckArcanas']() {
                        const _0x5ccab1 = _0x27e9d2;
                        _0x1e2831['default']['Core']['Arcanas'][_0x5ccab1(0x15e7)]['indexOf'](_0x5a8f9f['default'][_0x5ccab1(0x954)]) > -0x1 && (this[_0x5ccab1(0xdda)] = !0x0), super['CheckArcanas']();
                    }
                    get['PPower']() {
                        const _0x174682 = _0x27e9d2;
                        return super['PPower'] + _0x1e2831[_0x174682(0xd2c)][_0x174682(0x1043)][_0x174682(0x1884)][_0x174682(0x1117)];
                    } ['onBulletOverlapsEnemy'](_0x3f0cf1, _0x12921e) {
                        const _0x363434 = _0x27e9d2;
                        return this[_0x363434(0xdda)] ? this['StandardCritical'](_0x3f0cf1, _0x12921e) : super[_0x363434(0xd06)](_0x3f0cf1, _0x12921e);
                    } ['Update'](_0xb0b827) {
                        const _0x370ebd = _0x27e9d2;
                        if (super[_0x370ebd(0xa9f)](_0xb0b827), _0x1e2831[_0x370ebd(0xd2c)][_0x370ebd(0x1043)][_0x370ebd(0x10f6)][_0x370ebd(0x7c0)] <= 0x0) this[_0x370ebd(0x1329)] || (this[_0x370ebd(0x1329)] = _0x1e2831[_0x370ebd(0xd2c)]['Core'][_0x370ebd(0x6d2)]['time']['addEvent']({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x5dfcf3 = _0x370ebd;
                                _0x1e2831['default'][_0x5dfcf3(0x1043)][_0x5dfcf3(0x10f6)][_0x5dfcf3(0x7c0)] <= 0x0 && (this[_0x5dfcf3(0x7c0)] = 0x0, this[_0x5dfcf3(0x1329)] = null, this['pBonus'] = 0x0);
                            }
                        }));
                        else {
                            _0x1e2831['default'][_0x370ebd(0x1043)]['scene'][_0x370ebd(0x915)][_0x370ebd(0x17fb)](this[_0x370ebd(0x1329)]), this[_0x370ebd(0x1329)] = null, this[_0x370ebd(0x7c0)] += _0x1e2831['default']['Core'][_0x370ebd(0x10f6)][_0x370ebd(0x1c3)], this['pBonus'] = Math[_0x370ebd(0x1084)](0.5 * this['level'], this[_0x370ebd(0x7c0)] / 0x30d40), this['PfxEmitter'][_0x370ebd(0x364)](0x64 + 0x28 * this[_0x370ebd(0x1359)]);
                            for (let _0x4839f2 = 0x0; _0x4839f2 < this[_0x370ebd(0x1359)]; _0x4839f2++) this['PfxEmitterManager']['emitParticleAt'](_0x1e2831['default'][_0x370ebd(0x1043)][_0x370ebd(0x10f6)]['x'], _0x1e2831['default'][_0x370ebd(0x1043)][_0x370ebd(0x10f6)]['y'] - 0x18);
                        }
                        this[_0x370ebd(0xb78)] += _0xb0b827, this[_0x370ebd(0xb78)] += _0x1e2831[_0x370ebd(0xd2c)][_0x370ebd(0x1043)][_0x370ebd(0x10f6)]['frameWalk'] * (_0xb0b827 / this[_0x370ebd(0x492)]), this[_0x370ebd(0xb78)] >= this[_0x370ebd(0x170c)] && (this[_0x370ebd(0xb78)] = 0x0, this['Fire']());
                    } ['ResetFiringTimer']() {
                        const _0x3f0ef1 = _0x27e9d2;
                        this[_0x3f0ef1(0x19b7)] && this[_0x3f0ef1(0x19b7)][_0x3f0ef1(0x16ca)]();
                    }
                }
                _0x2c5847['W_Vento'] = _0x588b6d, _0x2c5847['default'] = _0x588b6d;
            };
