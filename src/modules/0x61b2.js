// Module 0x61b2
// Args: _0x640b0f, _0x3991a1, _0xc6f9c4

export default (_0x640b0f, _0x3991a1, _0xc6f9c4) => {
                'use strict';
                const _0x5b6b56 = a0_0x6932;
                var _0x3453e8 = this && this['__importDefault'] || function(_0x55ea76) {
                    return _0x55ea76 && _0x55ea76['__esModule'] ? _0x55ea76 : {
                        'default': _0x55ea76
                    };
                };
                Object['defineProperty'](_0x3991a1, '__esModule', {
                    'value': !0x0
                });
                const _0x5a9883 = _0x3453e8(_0xc6f9c4(0x5f07)),
                    _0x388a46 = _0xc6f9c4(0x18304),
                    _0x53e5bc = _0x3453e8(_0xc6f9c4(0x1fd7));
                class _0x532058 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x18b16d, _0x256a59, _0x1f1820) {
                        const _0x2e8456 = _0x5b6b56;
                        super(_0x18b16d[_0x2e8456(0x6d2)], _0x256a59, _0x1f1820, 'vfx', 'WhiteDot.png'), this[_0x2e8456(0x177d)] = !0x1, this['isTeleportOnCull'] = !0x1, this[_0x2e8456(0x161a)] = 0x1, this[_0x2e8456(0x1133)] = 0x1, this[_0x2e8456(0x1732)] = new Phaser[(_0x2e8456(0x10d2))]['Circle'](), this[_0x2e8456(0xc82)] = _0x18b16d, this[_0x2e8456(0x1732)] = new Phaser[(_0x2e8456(0x10d2))][(_0x2e8456(0xf29))](), this['setVisible'](!0x1), this[_0x2e8456(0x1761)] = this[_0x2e8456(0x6d2)][_0x2e8456(0x18bd)]['particles']('vfx'), this['pfxEmitter2'] = this[_0x2e8456(0x1761)][_0x2e8456(0x14c0)]({
                            'frame': ['HitCloud1.png', 'HitCloud2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0xb4,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x64,
                                'max': 0xc8
                            },
                            'quantity': 0x4,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x4,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'on': !0x1,
                            'tint': {
                                'onEmit': (_0x56db85, _0x3077cf, _0x584df5) => this['onEmitcustomTint'](_0x56db85, _0x3077cf, _0x584df5)
                            }
                        }), this[_0x2e8456(0xb8c)] = this[_0x2e8456(0x1761)]['createEmitter']({
                            'frame': ['PfxLine2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x0
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x50,
                                'max': 0x64
                            },
                            'quantity': 0x1,
                            'scaleX': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scaleY': {
                                'start': 0x5,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'tint': 0xdd0000,
                            'on': !0x1
                        }), this['well'] = this[_0x2e8456(0x1761)][_0x2e8456(0x1386)]({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this[_0x2e8456(0x919)] = this[_0x2e8456(0x6d2)][_0x2e8456(0x18bd)]['circle'](0x0, 0x0, 0x1, 0x88ccff)[_0x2e8456(0xf8e)](0.5)[_0x2e8456(0xdab)](0.4)['setVisible'](!0x1)['setBlendMode'](_0x388a46[_0x2e8456(0x10fc)][_0x2e8456(0x1811)]), this['ringSPrite'] = this['scene'][_0x2e8456(0x18bd)]['sprite'](0x0, 0x0, 'vfx', 'sPFX_ring_64.png')['setAlpha'](0x1)[_0x2e8456(0x183f)](!0x1)[_0x2e8456(0x11c7)](_0x388a46[_0x2e8456(0x10fc)][_0x2e8456(0x1811)])['setTint'](0xdd0000);
                    } ['onEmitcustomTint'](_0x3cf935, _0x592831, _0x3409de) {
                        const _0x46407e = _0x5b6b56;
                        return Phaser[_0x46407e(0x24f)][_0x46407e(0x82a)][_0x46407e(0x198c)]([0xff0000, 0xff8800, 0x880000]);
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x6cbaf2) {
                        const _0x4f1fc5 = _0x5b6b56;
                        this['setDepth'](_0x6cbaf2), this[_0x4f1fc5(0x919)]['setDepth'](_0x6cbaf2), this['particlesManager']['setDepth'](_0x6cbaf2);
                    } ['OnRecycle']() {
                        const _0x1ad868 = _0x5b6b56;
                        this['setActive'](!0x0), this[_0x1ad868(0x8a2)](this[_0x1ad868(0x161a)]), this['ringSPrite']['x'] = this['x'], this['ringSPrite']['y'] = this['y'], this[_0x1ad868(0x1412)]['setVisible'](!0x0)[_0x1ad868(0x8a2)](0x4), this[_0x1ad868(0x6d2)][_0x1ad868(0x12a1)]['add']({
                            'targets': this['ringSPrite'],
                            'scale': 0x0,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x1343ac = _0x1ad868;
                                this[_0x1343ac(0x1412)][_0x1343ac(0x183f)](!0x1), this['Explode']();
                            }
                        });
                    } ['Explode']() {
                        const _0x1620a2 = _0x5b6b56;
                        this['circleArea']['x'] = this['x'], this[_0x1620a2(0x1732)]['y'] = this['y'], this[_0x1620a2(0x1732)]['radius'] = this[_0x1620a2(0x161a)], this[_0x1620a2(0x2e9)] = !0x1, this['well']['x'] = this['x'], this[_0x1620a2(0xc05)]['y'] = this['y'] - 0x14, this[_0x1620a2(0xb8c)]['setPosition'](this['x'], this['y']), this['pfxEmitter']['start'](), this[_0x1620a2(0xb0d)][_0x1620a2(0x726)](this['x'], this['y']), this[_0x1620a2(0xb0d)]['start'](), _0x5a9883['default']['Core']['PlayerOptions'][_0x1620a2(0x49c)] && (this[_0x1620a2(0x919)]['setPosition'](this['x'], this['y'])[_0x1620a2(0x183f)](!0x0)['radius'] = 0x1), this['despawnTimer'] && (this[_0x1620a2(0x1581)]['stop'](), this[_0x1620a2(0x1581)] = null), this['despawnTimer'] = this[_0x1620a2(0x6d2)]['tweens']['add']({
                            'targets': this['GroundFx'],
                            'radius': this[_0x1620a2(0x161a)],
                            'duration': 0x78,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), _0x5a9883['default'][_0x1620a2(0x1267)]['PlaySound'](_0x53e5bc[_0x1620a2(0xd2c)][_0x1620a2(0x15f1)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x1620a2(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x11202d = _0x5b6b56;
                        this['setActive'](!0x1), this[_0x11202d(0xb8c)]['stop'](), this[_0x11202d(0xb0d)]['stop'](), this['pool'][_0x11202d(0x4ed)](this), this[_0x11202d(0x1581)] && (this[_0x11202d(0x1581)][_0x11202d(0x1a34)](), this[_0x11202d(0x1581)] = null), this[_0x11202d(0x919)][_0x11202d(0x183f)](!0x1);
                    } ['Init'](_0x5ad0ee = -0x3e8, _0x5c1b5e = -0x3e8) {
                        const _0x3ffe14 = _0x5b6b56;
                        this[_0x3ffe14(0x726)](_0x5ad0ee, _0x5c1b5e), this[_0x3ffe14(0x5ce)]();
                    } ['die']() {
                        const _0x5aee90 = _0x5b6b56;
                        this[_0x5aee90(0x35a)] = !0x1;
                    }
                }
                _0x3991a1['default'] = _0x532058;
            };
