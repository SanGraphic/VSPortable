// Module 0xe73a
// Args: _0x2c85e8, _0x3f9a07, _0x28d40e

export default (_0x2c85e8, _0x3f9a07, _0x28d40e) => {
                'use strict';
                const _0x199d68 = a0_0x6932;
                var _0x4d11f0 = this && this['__importDefault'] || function(_0x4a9d9a) {
                    const _0x2109c0 = _0x199d68;
                    return _0x4a9d9a && _0x4a9d9a[_0x2109c0(0x16f1)] ? _0x4a9d9a : {
                        'default': _0x4a9d9a
                    };
                };
                Object['defineProperty'](_0x3f9a07, '__esModule', {
                    'value': !0x0
                }), _0x3f9a07['B_Millionaire'] = void 0x0;
                const _0x3d0486 = _0x4d11f0(_0x28d40e(0xa14d)),
                    _0x1e1c6d = _0x28d40e(0x18304),
                    _0x50f2d1 = _0x4d11f0(_0x28d40e(0x5f07)),
                    _0x2ebd0a = _0x4d11f0(_0x28d40e(0x1fd7)),
                    _0x433c1b = _0x4d11f0(_0x28d40e(0x5103));
                class _0x4775fb extends _0x3d0486['default'] {
                    constructor(_0x4f30c8, _0x1b494f, _0x499e21, _0x19a9db, _0x3b45e3) {
                        const _0x1ac532 = _0x199d68;
                        super(_0x4f30c8, _0x1b494f, _0x499e21, 'vfx', '2Arrow3.png', _0x19a9db, _0x3b45e3), this[_0x1ac532(0x161a)] = 0x10, this[_0x1ac532(0x9db)] = 0x8, this[_0x1ac532(0x186d)] = !0x1, this['_currentDirection'] = new Phaser[(_0x1ac532(0x24f))][(_0x1ac532(0x1551))](0x0, 0x0), this[_0x1ac532(0xb1f)] = 0x2, this['explosionCircle'] = new Phaser['Geom'][(_0x1ac532(0xf29))](0x0, 0x0, this['exploRadius']), this['GroundFx'] = this[_0x1ac532(0x6d2)][_0x1ac532(0x18bd)]['circle'](0x0, 0x0, this[_0x1ac532(0x161a)], 0xff)[_0x1ac532(0xf8e)](0.5)[_0x1ac532(0xdab)](0.1)['setVisible'](!0x1)[_0x1ac532(0x11c7)](_0x1e1c6d[_0x1ac532(0x10fc)]['ADD']), this['PfxEmitterManager'] = this['scene']['add'][_0x1ac532(0x1791)]('vfx'), this[_0x1ac532(0xf12)] = this[_0x1ac532(0x1150)]['createEmitter']({
                            'frame': ['PfxYellow.png', 'PfxPurple.png', 'PfxLine.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0x1
                            },
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x5a,
                                'max': 0x5a
                            },
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x2
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionCircle']
                            },
                            'on': !0x1
                        }), this[_0x1ac532(0x15ef)] = this[_0x1ac532(0x1150)][_0x1ac532(0x14c0)]({
                            'frame': ['PfxYellow.png', 'PfxPurple.png', 'PfxLine.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0x1
                            },
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x5a,
                                'max': 0x5a
                            },
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0.2,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0.5
                            },
                            'blendMode': _0x1e1c6d[_0x1ac532(0x10fc)]['ADD'],
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x1ac532(0x806)]
                            },
                            'on': !0x1
                        }), this['PfxEmitterExplosionManager'] = this[_0x1ac532(0x6d2)][_0x1ac532(0x18bd)]['particles']('vfx'), this['PfxEmitterExplosionManager']['createEmitter']({
                            'frame': ['disc.png'],
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0.65,
                                'end': 0.35
                            },
                            'scale': {
                                'start': _0x433c1b[_0x1ac532(0xd2c)]['PixelScale'] / 0x4,
                                'end': 0x2 * _0x433c1b['default']['PixelScale']
                            },
                            'on': !0x1
                        }), this[_0x1ac532(0x178e)][_0x1ac532(0x14c0)]({
                            'frame': ['blurredSharpStar.png'],
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0.35,
                                'end': 0.15
                            },
                            'scale': {
                                'start': _0x433c1b['default']['PixelScale'] / 0x4,
                                'end': _0x433c1b['default'][_0x1ac532(0x15db)]
                            },
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x2980f = _0x199d68;
                        super['OnRecycle'](), this[_0x2980f(0xb1f)] = 0x2, this[_0x2980f(0xcf9)][_0x2980f(0xdf6)](this['radius'], -0.5 * this[_0x2980f(0x161a)], -0.5 * this['radius']), this[_0x2980f(0x8a2)](_0x433c1b[_0x2980f(0xd2c)][_0x2980f(0x15db)]), this[_0x2980f(0x183f)](!0x0), this[_0x2980f(0xb8d)](!0x1), this['isBroken'] = !0x1, this['body'][_0x2980f(0x543)] = !0x1, this['isCullable'] = !0x1, _0x50f2d1['default'][_0x2980f(0x1043)]['scene']['time'][_0x2980f(0x17fb)](this[_0x2980f(0x8b9)]), _0x50f2d1[_0x2980f(0xd2c)]['Core'][_0x2980f(0x6d2)]['time'][_0x2980f(0x17fb)](this[_0x2980f(0x12a3)]);
                        let _0x2cd709 = Phaser[_0x2980f(0x24f)]['RND']['pick']([0xffff00, 0x8800ff]);
                        this[_0x2980f(0x381)](Phaser[_0x2980f(0x24f)][_0x2980f(0x82a)]['pick'](['2Arrow3Y.png', '2Arrow3P.png'])), this[_0x2980f(0x11c7)](_0x1e1c6d[_0x2980f(0x10fc)]['ADD']), this[_0x2980f(0x919)][_0x2980f(0x5d5)](_0x2cd709, 0x1), this['explosionCircle'] = new Phaser['Geom'][(_0x2980f(0xf29))](0x0, 0x0, this['exploRadius'] * this[_0x2980f(0x4a1)][_0x2980f(0x5f5)] * 0x3), this['PfxEmitter1'][_0x2980f(0x152)]({
                            'type': 'random',
                            'source': this[_0x2980f(0x806)]
                        }), this[_0x2980f(0xf12)][_0x2980f(0x1070)](0x1 + Math['floor'](this['weapon']['level'] / 0x3)), this['PfxEmitter2'][_0x2980f(0x152)]({
                            'type': 'random',
                            'source': this[_0x2980f(0x806)]
                        }), this['PfxEmitter2'][_0x2980f(0x1070)](0x1 + Math['floor'](this['weapon'][_0x2980f(0x5e3)] / 0x3)), this['target'] = {
                            'x': this['x'],
                            'y': this['y']
                        }, this['x'] = this[_0x2980f(0x18a7)]['x'] + (Math['random']() - 0.5) * this['scene'][_0x2980f(0x12f9)]['width'] * 0.5, this['y'] = _0x50f2d1[_0x2980f(0xd2c)][_0x2980f(0x1043)]['Player']['y'] - 0.6 * this[_0x2980f(0x6d2)]['renderer']['height'];
                        const _0x28abc0 = Math['random']() * (0x2 * Math['PI']),
                            _0x37cd7f = 0xf0 * Math['random']();
                        this[_0x2980f(0x18a7)]['x'] += Math[_0x2980f(0xd7e)](_0x28abc0) * _0x37cd7f, this[_0x2980f(0x18a7)]['y'] += Math[_0x2980f(0xc80)](_0x28abc0) * _0x37cd7f, this[_0x2980f(0xb4a)](this['y'] - _0x50f2d1[_0x2980f(0xd2c)]['Core'][_0x2980f(0x10f6)]['y'] + this[_0x2980f(0x6d2)][_0x2980f(0x12f9)]['height']), this[_0x2980f(0x183f)](_0x50f2d1['default'][_0x2980f(0x1043)][_0x2980f(0x14d8)]['FlashingVFXEnabled']);
                    } ['setDisplayDirection'](_0x197988) {
                        const _0xf2cfd0 = _0x199d68;
                        let _0x3ac977 = 0.5 * this[_0xf2cfd0(0x6d2)][_0xf2cfd0(0x12f9)][_0xf2cfd0(0x173c)];
                        this['setFlipX'](_0x197988), this['x'] = _0x50f2d1[_0xf2cfd0(0xd2c)][_0xf2cfd0(0x1043)]['Player']['x'] + (_0x197988 ? _0x3ac977 : -_0x3ac977), this['y'] = this[_0xf2cfd0(0x18a7)]['y'] - _0x3ac977, this[_0xf2cfd0(0x50d)] && this[_0xf2cfd0(0x6d2)]['tweens']['remove'](this[_0xf2cfd0(0x50d)]), this['PositionTween'] = this[_0xf2cfd0(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'x': this[_0xf2cfd0(0x18a7)]['x'],
                            'y': this['target']['y'],
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x39a581 = _0xf2cfd0;
                                this[_0x39a581(0xca7)]();
                            }
                        });
                    } ['Break']() {
                        const _0x1e44ed = _0x199d68;
                        this['isBroken'] || (this['isBroken'] = !0x0, this[_0x1e44ed(0x183f)](!0x1), this['setVelocity'](0x0, 0x0), this['objectsHit'] = [], this[_0x1e44ed(0xcf9)][_0x1e44ed(0x543)] = !0x0, this[_0x1e44ed(0x919)][_0x1e44ed(0x726)](this['x'], this['y'])['setScale'](this['weapon']['PArea'])[_0x1e44ed(0xf8e)](0.5)['setVisible'](_0x50f2d1[_0x1e44ed(0xd2c)][_0x1e44ed(0x1043)]['PlayerOptions']['FlashingVFXEnabled']), this['setScale'](this['weapon'][_0x1e44ed(0x5f5)]), this[_0x1e44ed(0x12a3)] = _0x50f2d1['default'][_0x1e44ed(0x1043)][_0x1e44ed(0x6d2)]['time']['addEvent']({
                            'delay': 0x64,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x23ce16 = _0x1e44ed;
                                this['GroundFx']['setVisible'](!0x1), _0x50f2d1[_0x23ce16(0xd2c)]['Core']['scene'][_0x23ce16(0x915)]['removeEvent'](this['HitboxTimer']), _0x50f2d1['default']['Core'][_0x23ce16(0x6d2)][_0x23ce16(0x915)][_0x23ce16(0x17fb)](this[_0x23ce16(0x12a3)]), this['DeSpawn']();
                            }
                        }), this['ExpireTimer'][_0x1e44ed(0x226)] = 'HW Expire', _0x50f2d1[_0x1e44ed(0xd2c)][_0x1e44ed(0x1043)][_0x1e44ed(0x14d8)][_0x1e44ed(0x49c)] && (this[_0x1e44ed(0x178e)][_0x1e44ed(0x108b)](this['x'], this['y']), this[_0x1e44ed(0x1150)]['setDepth'](this['y'] - _0x50f2d1['default'][_0x1e44ed(0x1043)]['Player']['y'] - 0.5 * this['scene']['renderer']['height'])), this[_0x1e44ed(0x919)][_0x1e44ed(0xb4a)](this['y'] - _0x50f2d1[_0x1e44ed(0xd2c)][_0x1e44ed(0x1043)][_0x1e44ed(0x10f6)]['y'] - 0.5 * this['scene'][_0x1e44ed(0x12f9)][_0x1e44ed(0x140e)]), _0x50f2d1['default']['Sound'][_0x1e44ed(0x7f6)](_0x2ebd0a[_0x1e44ed(0xd2c)]['Holywater'], {
                            'detune': -0xc8 - -0x32 * this[_0x1e44ed(0x19c4)],
                            'volume': 0.35,
                            'rate': 0x2
                        }, 0xc8, 0xc));
                    } ['Update']() {
                        this['isBroken'] && this['PfxEmitterManager']['emitParticleAt'](this['x'], this['y']);
                    } ['DeSpawn']() {
                        const _0x5e2957 = _0x199d68;
                        this[_0x5e2957(0x177d)] = !0x0, _0x50f2d1['default'][_0x5e2957(0x1043)][_0x5e2957(0x6d2)][_0x5e2957(0x915)][_0x5e2957(0x17fb)](this['HitboxTimer']), _0x50f2d1[_0x5e2957(0xd2c)]['Core'][_0x5e2957(0x6d2)]['time']['removeEvent'](this[_0x5e2957(0x12a3)]), this[_0x5e2957(0x919)][_0x5e2957(0x183f)](!0x1), super[_0x5e2957(0x14fb)]();
                    }
                }
                _0x3f9a07['B_Millionaire'] = _0x4775fb, _0x3f9a07['default'] = _0x4775fb;
            };
