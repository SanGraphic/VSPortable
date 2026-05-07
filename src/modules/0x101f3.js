// Module 0x101f3
// Args: _0x5ab26f, _0x402276, _0x4907b9

export default (_0x5ab26f, _0x402276, _0x4907b9) => {
                'use strict';
                const _0x1cdac7 = a0_0x6932;
                var _0x190c66 = this && this['__importDefault'] || function(_0x2a5a8f) {
                    return _0x2a5a8f && _0x2a5a8f['__esModule'] ? _0x2a5a8f : {
                        'default': _0x2a5a8f
                    };
                };
                Object['defineProperty'](_0x402276, '__esModule', {
                    'value': !0x0
                }), _0x402276['W_Vortex'] = void 0x0;
                const _0x3d89a0 = _0x4907b9(0x18304),
                    _0x410d23 = _0x190c66(_0x4907b9(0x9b68)),
                    _0x32896d = _0x190c66(_0x4907b9(0xc42e)),
                    _0x365fa1 = _0x190c66(_0x4907b9(0x5103)),
                    _0x498e37 = _0x190c66(_0x4907b9(0x5f07)),
                    _0x3c7552 = _0x190c66(_0x4907b9(0xe49a));
                class _0x5c4bfd extends _0x3c7552['default'] {
                    constructor(_0x395be5) {
                        const _0x3b4008 = _0x1cdac7;
                        super(_0x395be5), this['recoveredHP'] = 0x0, this[_0x3b4008(0x6ba)] = 0x0, this['lastArea'] = 0x0, this[_0x3b4008(0x1105)] = 0x24 / 0x100, this['totalTime'] = 0x0, this['innerScale'] = 0x0, this['innerDuration'] = 0x0, this[_0x3b4008(0x1ae)] = 0x0, this[_0x3b4008(0x492)] = 0x3e8 / 0x6, this['imageBG'] = _0x498e37['default'][_0x3b4008(0x1043)][_0x3b4008(0x6d2)]['add'][_0x3b4008(0x568)](0x0, 0x0, 'vfx', 'circle.png'), this[_0x3b4008(0x183)][_0x3b4008(0x11c7)](_0x3d89a0[_0x3b4008(0x10fc)][_0x3b4008(0x2b9)]), this[_0x3b4008(0x183)][_0x3b4008(0xdab)](0.6), this['imageBG'][_0x3b4008(0xb34)](0x0), this[_0x3b4008(0x183)][_0x3b4008(0xf01)](_0x498e37[_0x3b4008(0xd2c)][_0x3b4008(0x1043)][_0x3b4008(0x10f6)])[_0x3b4008(0x8a2)](0x2 * _0x365fa1[_0x3b4008(0xd2c)][_0x3b4008(0x15db)] * this['PArea'] * this['imageScale']), this[_0x3b4008(0x568)] = _0x498e37[_0x3b4008(0xd2c)]['Core'][_0x3b4008(0x6d2)][_0x3b4008(0x18bd)][_0x3b4008(0x568)](0x0, 0x0, 'vfx', 'circle.png'), this[_0x3b4008(0x568)]['setBlendMode'](_0x3d89a0[_0x3b4008(0x10fc)]['NORMAL']), this[_0x3b4008(0x568)]['setAlpha'](0.1), this[_0x3b4008(0x568)][_0x3b4008(0xb34)](0x0), this[_0x3b4008(0x568)]['copyPosition'](_0x498e37[_0x3b4008(0xd2c)][_0x3b4008(0x1043)][_0x3b4008(0x10f6)])[_0x3b4008(0x8a2)](0x2 * _0x365fa1['default'][_0x3b4008(0x15db)] * this['PArea'] * this['imageScale']), this[_0x3b4008(0x11d1)] = _0x498e37['default'][_0x3b4008(0x1043)][_0x3b4008(0x6d2)]['add']['tween']({
                            'targets': this['image'],
                            'alpha': 0.6,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x3b4008(0x6ba)] = 0x0, this[_0x3b4008(0x5b9)] = 0x0, _0x498e37[_0x3b4008(0xd2c)]['Core'][_0x3b4008(0x10f6)]['onHPRecoveryCallback'] = _0x5dd689 => {
                            const _0x311f34 = _0x3b4008;
                            this[_0x311f34(0x5b9)] += _0x5dd689;
                        }, this['lastArea'] = this['PArea'], this[_0x3b4008(0x1761)] = _0x498e37[_0x3b4008(0xd2c)]['Core'][_0x3b4008(0x6d2)][_0x3b4008(0x18bd)][_0x3b4008(0x1791)]('vfx'), this['shape1'] = new Phaser[(_0x3b4008(0x10d2))][(_0x3b4008(0xf29))](0x0, 0x0, 0x3c), this[_0x3b4008(0xb8c)] = this[_0x3b4008(0x1761)][_0x3b4008(0x14c0)]({
                            'frame': {
                                'frames': ['PfxColor2.png'],
                                'cycle': !0x0
                            },
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x1f4,
                            'speed': 0x0,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1,
                            'quantity': 0x1,
                            'alpha': 0.2,
                            'blendMode': 'ADD',
                            'rotate': {
                                'start': 0x0,
                                'end': 0x168,
                                'ease': 'Bounce.easeOut'
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x3b4008(0xd1d)]
                            }
                        }), this[_0x3b4008(0xc05)] = this['particlesManager']['createGravityWell']({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0.51,
                            'epsilon': 0x14,
                            'gravity': 0x32
                        }), this['vfxTime'] = 0x0, this[_0x3b4008(0xb78)] = 0x0, this[_0x3b4008(0x1552)] = 0x1770, this['innerScale'] = 0x0;
                    }
                    get['PAmount']() {
                        return 0x1;
                    }
                    get['PPower']() {
                        const _0x5315df = _0x1cdac7;
                        return super[_0x5315df(0xaae)] + this[_0x5315df(0x6ba)];
                    } ['Fire']() {
                        const _0x970b0a = _0x1cdac7;
                        return this[_0x970b0a(0x6ba)] = Math[_0x970b0a(0x1084)](0x6, this['recoveredHP'] / 0x258), _0x498e37['default']['Core'][_0x970b0a(0x1884)]['hasAstronomia'] && _0x498e37[_0x970b0a(0xd2c)]['Core'][_0x970b0a(0x1884)][_0x970b0a(0xb6b)](this), super[_0x970b0a(0x1754)]();
                    } ['VortexUpdate'](_0x3782c8) {
                        const _0xa66d99 = _0x1cdac7;
                        this['image'][_0xa66d99(0xf01)](_0x498e37[_0xa66d99(0xd2c)][_0xa66d99(0x1043)]['Player']), this[_0xa66d99(0x183)][_0xa66d99(0xf01)](_0x498e37[_0xa66d99(0xd2c)]['Core']['Player']), this['image'][_0xa66d99(0xb4a)](_0x498e37['default']['Core'][_0xa66d99(0x10f6)]['depth'] - 0.5 * _0x498e37[_0xa66d99(0xd2c)][_0xa66d99(0x1043)][_0xa66d99(0x6d2)][_0xa66d99(0x12f9)][_0xa66d99(0x140e)]), this[_0xa66d99(0x183)][_0xa66d99(0xb4a)](_0x498e37['default']['Core'][_0xa66d99(0x10f6)]['depth'] - 0.5 * _0x498e37['default']['Core']['scene']['renderer'][_0xa66d99(0x140e)]), this[_0xa66d99(0xb8c)][_0xa66d99(0x108b)](this['image']['x'], this[_0xa66d99(0x568)]['y']), this[_0xa66d99(0xc05)]['x'] = this[_0xa66d99(0x568)]['x'], this['well']['y'] = this[_0xa66d99(0x568)]['y'], this[_0xa66d99(0x183)][_0xa66d99(0x8a2)](0x2 * _0x365fa1[_0xa66d99(0xd2c)][_0xa66d99(0x15db)] * this['PArea'] * this['imageScale']), this[_0xa66d99(0x1ae)] += _0x3782c8, this[_0xa66d99(0x1ae)] > this[_0xa66d99(0x1552)] && (this[_0xa66d99(0x1ae)] = 0x0), this['innerScale'] = this['PArea'] * ((this[_0xa66d99(0x1552)] - this[_0xa66d99(0x1ae)]) / this[_0xa66d99(0x1552)]), this[_0xa66d99(0x568)][_0xa66d99(0x8a2)](0x2 * _0x365fa1['default']['PixelScale'] * this[_0xa66d99(0x95e)] * this[_0xa66d99(0x1105)]), this[_0xa66d99(0xd1d)]['radius'] = 0x10 * this[_0xa66d99(0x5f5)] * 0x2;
                    } ['Update'](_0x5c3497) {
                        const _0x21cc2e = _0x1cdac7;
                        super['Update'](_0x5c3497), this[_0x21cc2e(0xb78)] += _0x5c3497, this['VortexUpdate'](_0x5c3497), this[_0x21cc2e(0x19ea)] && (this[_0x21cc2e(0xb78)] += _0x498e37['default'][_0x21cc2e(0x1043)][_0x21cc2e(0x10f6)][_0x21cc2e(0x1c3)] * (_0x5c3497 / this['mul'])), this['totalTime'] >= this['PInterval'] && (this['totalTime'] -= this['PInterval'], this[_0x21cc2e(0x1754)]());
                    } ['ResetFiringTimer']() {
                        const _0x2fef26 = _0x1cdac7;
                        this[_0x2fef26(0x19b7)] && this[_0x2fef26(0x19b7)][_0x2fef26(0x16ca)]();
                    } ['CleanUp']() {
                        const _0x2176d4 = _0x1cdac7;
                        super[_0x2176d4(0xdb0)](), this[_0x2176d4(0x568)]['setVisible'](!0x1), this[_0x2176d4(0x568)][_0x2176d4(0x111e)](!0x1), this['image'][_0x2176d4(0x16ca)](), this[_0x2176d4(0x11d1)][_0x2176d4(0x1a34)]();
                    } ['onBulletOverlapsEnemy'](_0x17152e, _0x3f236f) {
                        const _0x259ce9 = _0x1cdac7;
                        var _0x4da151 = _0x3f236f;
                        if (!_0x4da151[_0x259ce9(0xdae)] && !_0x17152e[_0x259ce9(0x1738)](_0x4da151) && (_0x4da151['GetDamaged'](this[_0x259ce9(0xaae)], this[_0x259ce9(0x347)], this[_0x259ce9(0x1992)], this['bulletType']), this[_0x259ce9(0xb3d)] += this[_0x259ce9(0xaae)], _0x4da151[_0x259ce9(0xdae)])) {
                            let _0x219eb0 = Math[_0x259ce9(0x9ad)]();
                            if (this['PPower'] / 0x7 * 0.15 > _0x219eb0) {
                                let _0x42d5d3 = 0xa * (_0x219eb0 - 0.5),
                                    _0x2336fe = _0x498e37['default']['Core']['MakePickup'](_0x4da151['x'] + _0x42d5d3, _0x4da151['y'] - _0x42d5d3, _0x32896d['default'][_0x259ce9(0x21b)]);
                                _0x2336fe[_0x259ce9(0x12a8)] = !0x0, _0x2336fe['time'] = 0x1;
                            }
                        }
                    } ['CheckArcanas']() {
                        const _0xb60a64 = _0x1cdac7;
                        _0x498e37['default'][_0xb60a64(0x1043)]['Arcanas'][_0xb60a64(0x15e7)][_0xb60a64(0x1303)](_0x410d23[_0xb60a64(0xd2c)]['T03_TRAGIC']) > -0x1 && (this[_0xb60a64(0x19ea)] = !0x0), super[_0xb60a64(0x1ce)]();
                    }
                }
                _0x402276['W_Vortex'] = _0x5c4bfd, _0x402276['default'] = _0x5c4bfd;
            };
