// Module 0x7d30
// Args: _0x2b8ce7, _0x41b42d, _0x56f008

export default (_0x2b8ce7, _0x41b42d, _0x56f008) => {
                'use strict';
                const _0x1f62ef = a0_0x6932;
                var _0x22b296 = this && this['__importDefault'] || function(_0x32be83) {
                    const _0x1dcfb5 = a0_0x6932;
                    return _0x32be83 && _0x32be83['__esModule'] ? _0x32be83 : {
                        'default': _0x32be83
                    };
                };
                Object['defineProperty'](_0x41b42d, '__esModule', {
                    'value': !0x0
                });
                const _0x4763a3 = _0x22b296(_0x56f008(0x5f07)),
                    _0x9fab9 = _0x56f008(0x18304),
                    _0x42d352 = _0x22b296(_0x56f008(0x1fd7));
                class _0x4b1055 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x3f43c9, _0x58f352, _0x2ed365) {
                        const _0x36c319 = _0x1f62ef;
                        super(_0x3f43c9[_0x36c319(0x6d2)], _0x58f352, _0x2ed365, 'vfx', 'WhiteDot.png'), this[_0x36c319(0x177d)] = !0x1, this[_0x36c319(0x187a)] = !0x1, this[_0x36c319(0x161a)] = 0x1, this['damage'] = 0x1, this[_0x36c319(0x1732)] = new Phaser['Geom']['Circle'](), this[_0x36c319(0x66b)] = !0x1, this[_0x36c319(0xb78)] = 0x0, this[_0x36c319(0x5ef)] = 0x12c, this[_0x36c319(0x617)] = 0x32, this[_0x36c319(0xbaa)] = 0x0, this['arcRadius'] = 0xfa, this[_0x36c319(0x7cd)] = 0xffff00, this[_0x36c319(0xc82)] = _0x3f43c9, this['circleArea'] = new Phaser['Geom'][(_0x36c319(0xf29))](), this['setVisible'](!0x1), this[_0x36c319(0x1761)] = this['scene'][_0x36c319(0x18bd)][_0x36c319(0x1791)]('vfx'), this['pfxEmitter2'] = this[_0x36c319(0x1761)][_0x36c319(0x14c0)]({
                            'frame': ['Blood1.png', 'Blood2.png', 'Blood3.png'],
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
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x2,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x36c319(0xb8c)] = this[_0x36c319(0x1761)][_0x36c319(0x14c0)]({
                            'frame': ['Blood1.png', 'Blood2.png', 'Blood3.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x50,
                                'max': 0x78
                            },
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x2,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x36c319(0xc05)] = this[_0x36c319(0x1761)][_0x36c319(0x1386)]({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this[_0x36c319(0x7cd)] = Phaser[_0x36c319(0x24f)][_0x36c319(0x82a)]['pick']([0xff8800, 0xffff00, 0xff4400]), this[_0x36c319(0x919)] = this['scene'][_0x36c319(0x18bd)][_0x36c319(0x4f6)](0x0, 0x0, 0x1, this['color'])[_0x36c319(0xf8e)](0.5)[_0x36c319(0xdab)](0.4)['setVisible'](!0x1)[_0x36c319(0x11c7)](_0x9fab9[_0x36c319(0x10fc)][_0x36c319(0x1811)]), this[_0x36c319(0x119c)] = this['scene'][_0x36c319(0x18bd)]['image'](0.5 * this[_0x36c319(0x6d2)]['renderer']['width'], 0.5 * this['scene'][_0x36c319(0x12f9)]['height'] - 0x30, 'UI', 'ExclamationMark.png')[_0x36c319(0x8a2)](0x0)['setOrigin'](0.5, 0x1)['setDepth'](0x2328), this['StarSprite'] = this[_0x36c319(0x6d2)][_0x36c319(0x18bd)]['sprite'](0.5 * this['scene']['renderer'][_0x36c319(0x173c)], 0.5 * this[_0x36c319(0x6d2)]['renderer'][_0x36c319(0x140e)] - 0x30, 'enemies2', 'eye_0.png')[_0x36c319(0x8a2)](0x2)[_0x36c319(0xf8e)](0.5, 0x1)[_0x36c319(0xb4a)](0x2328)[_0x36c319(0x9b5)](0xf), this['GroundWarning'] = this[_0x36c319(0x6d2)][_0x36c319(0x18bd)]['circle'](0x0, 0x0, 0x1, this['color'])['setOrigin'](0.5)[_0x36c319(0xdab)](0.4)[_0x36c319(0x183f)](!0x1)[_0x36c319(0x11c7)](_0x9fab9[_0x36c319(0x10fc)][_0x36c319(0x1811)]), this[_0x36c319(0x3b8)] = this[_0x36c319(0x6d2)][_0x36c319(0x18bd)][_0x36c319(0x523)]({
                            'x': 0x0,
                            'y': 0x0,
                            'lineStyle': {
                                'width': 0x1,
                                'color': 0xff0000,
                                'alpha': 0x1
                            },
                            'fillStyle': {
                                'color': 0xff0000,
                                'alpha': 0x1
                            }
                        });
                        let _0x428939 = this['StarSprite'][_0x36c319(0x183e)][_0x36c319(0x1756)]('enemies2', {
                            'start': 0x5,
                            'end': 0x15,
                            'zeroPad': 0x0,
                            'prefix': 'eye_',
                            'suffix': '.png'
                        });
                        this['StarSprite'][_0x36c319(0x183e)][_0x36c319(0x6a8)]({
                            'key': 'explode',
                            'frames': _0x428939,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x19fdbe) {
                        const _0x5c53fa = _0x1f62ef;
                        this['setDepth'](_0x19fdbe), this['GroundFx'][_0x5c53fa(0xb4a)](_0x19fdbe), this[_0x5c53fa(0x1761)][_0x5c53fa(0xb4a)](_0x19fdbe);
                    } ['OnRecycle']() {
                        const _0x5a065e = _0x1f62ef;
                        var _0x56ba5f;
                        this['setFlipX'](!0x0), this['StarSprite'][_0x5a065e(0x183f)](!0x1), this['StarSprite']['setFrame']('eye_0.png'), this[_0x5a065e(0x14bb)] = 0.5 * this[_0x5a065e(0x6d2)][_0x5a065e(0x12f9)][_0x5a065e(0x173c)], this[_0x5a065e(0x66b)] = !0x1, this[_0x5a065e(0xc4b)]['x'] = this['x'], this[_0x5a065e(0xc4b)]['y'] = this['y'], this[_0x5a065e(0x119c)]['x'] = this['x'], this['WarningSprite']['y'] = this['y'] - 0x10, this[_0x5a065e(0x119c)][_0x5a065e(0x8a2)](0x0), this[_0x5a065e(0xc4b)][_0x5a065e(0xe71)] = 0x0, this[_0x5a065e(0xc4b)][_0x5a065e(0x183f)](!0x0), this[_0x5a065e(0x119c)]['setVisible'](!0x0), this[_0x5a065e(0x7cd)] = Phaser['Math'][_0x5a065e(0x82a)][_0x5a065e(0x198c)]([0xff8800, 0xffff00, 0xff4400]), _0x4763a3[_0x5a065e(0xd2c)]['Sound'][_0x5a065e(0x7f6)](_0x42d352[_0x5a065e(0xd2c)][_0x5a065e(0x6cf)], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0x5a065e(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene'][_0x5a065e(0x12a1)][_0x5a065e(0x18bd)]({
                            'targets': this['WarningSprite'],
                            'scale': 0x1,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x24d331 = _0x5a065e;
                                this['scene']['tweens']['add']({
                                    'targets': this[_0x24d331(0x119c)],
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        }), this['scene'][_0x5a065e(0x12a1)][_0x5a065e(0x18bd)]({
                            'targets': this[_0x5a065e(0xc4b)],
                            'alpha': 0.2,
                            'scale': this['radius'],
                            'duration': 0x1f4,
                            'yoyo': !0x0,
                            'repeat': 0x1
                        }), this[_0x5a065e(0xbaa)] = 0xb4, null === (_0x56ba5f = this[_0x5a065e(0x2f0)]) || void 0x0 === _0x56ba5f || _0x56ba5f[_0x5a065e(0x1a34)](), this['arcTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'arcAngle': 0x168,
                            'duration': 0x1f4,
                            'delay': 0x5dc,
                            'onStart': () => {
                                const _0x2cfc51 = _0x5a065e;
                                this[_0x2cfc51(0x3b8)]['setVisible'](!0x0), this['StarSprite']['visible'] = !0x0, this['StarSprite']['x'] = this['x'] - this['arcRadius'] + Math['cos'](Phaser[_0x2cfc51(0x24f)][_0x2cfc51(0x54d)](this[_0x2cfc51(0xbaa)])) * this['arcRadius'], this['StarSprite']['y'] = this['y'] + Math[_0x2cfc51(0xc80)](Phaser['Math'][_0x2cfc51(0x54d)](this[_0x2cfc51(0xbaa)])) * this[_0x2cfc51(0x14bb)];
                            },
                            'onComplete': () => {
                                this['Explode']();
                            }
                        }), this[_0x5a065e(0x3b8)]['x'] = this['x'] - 0x2 * this[_0x5a065e(0x14bb)], this['trail']['y'] = this['y'] - this['arcRadius'], this['trail'][_0x5a065e(0xe71)] = 0x1, this[_0x5a065e(0xe71)] = 0x1, this['trail'][_0x5a065e(0x16c6)] = 0xbb8;
                    } ['Explode']() {
                        const _0x12b79a = _0x1f62ef;
                        this['StarSprite'][_0x12b79a(0x183e)][_0x12b79a(0x1a34)](), this[_0x12b79a(0x10ba)][_0x12b79a(0x183e)]['play']('explode'), this[_0x12b79a(0x66b)] = !0x0, this[_0x12b79a(0x111e)](!0x0), this[_0x12b79a(0x8a2)](this[_0x12b79a(0x161a)]), this['circleArea']['x'] = this['x'], this[_0x12b79a(0x1732)]['y'] = this['y'], this['circleArea']['radius'] = this['radius'], this[_0x12b79a(0x2e9)] = !0x1, this[_0x12b79a(0xc05)]['x'] = this['x'], this[_0x12b79a(0xc05)]['y'] = this['y'] - 0x14, this['pfxEmitter']['setPosition'](this['x'], this['y']), this[_0x12b79a(0xb8c)]['start'](), this[_0x12b79a(0xb0d)][_0x12b79a(0x726)](this['x'], this['y']), this['pfxEmitter2']['start'](), _0x4763a3[_0x12b79a(0xd2c)]['Core'][_0x12b79a(0x14d8)]['FlashingVFXEnabled'] && (this[_0x12b79a(0x919)]['setPosition'](this['x'], this['y'])[_0x12b79a(0x183f)](!0x0)['radius'] = 0x1), this[_0x12b79a(0x1581)] && (this[_0x12b79a(0x1581)][_0x12b79a(0x1a34)](), this['despawnTimer'] = null), this[_0x12b79a(0x1581)] = this[_0x12b79a(0x6d2)]['tweens']['add']({
                            'targets': this[_0x12b79a(0x919)],
                            'radius': this['radius'],
                            'duration': 0x96,
                            'onComplete': () => {
                                const _0x58329a = _0x12b79a;
                                this[_0x58329a(0x14fb)]();
                            }
                        }), this[_0x12b79a(0x6d2)][_0x12b79a(0x12a1)]['add']({
                            'targets': this[_0x12b79a(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x64
                        }), _0x4763a3[_0x12b79a(0xd2c)]['Sound'][_0x12b79a(0x7f6)](_0x42d352[_0x12b79a(0xd2c)][_0x12b79a(0x15f1)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x12b79a(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x478e15 = _0x1f62ef;
                        this['setActive'](!0x1), this[_0x478e15(0x183f)](!0x1), this[_0x478e15(0x10ba)][_0x478e15(0x183f)](!0x1), this[_0x478e15(0x919)][_0x478e15(0x183f)](!0x1), this['WarningSprite'][_0x478e15(0x183f)](!0x1), this[_0x478e15(0xb8c)]['stop'](), this['pfxEmitter2'][_0x478e15(0x1a34)](), this[_0x478e15(0xc82)]['Return'](this), this[_0x478e15(0x66b)] = !0x1, this[_0x478e15(0x3b8)][_0x478e15(0x183f)](!0x1), this[_0x478e15(0x1581)] && (this['despawnTimer'][_0x478e15(0x1a34)](), this[_0x478e15(0x1581)] = null), this[_0x478e15(0x919)]['setVisible'](!0x1), this[_0x478e15(0x3b8)]['clear']();
                    } ['Init'](_0x4bd2a2 = -0x3e8, _0x15d795 = -0x3e8) {
                        this['setPosition'](_0x4bd2a2, _0x15d795), this['OnRecycle']();
                    } ['die']() {
                        this['visible'] = !0x1;
                    } ['Update'](_0x5746b3 = 0x0) {
                        const _0x9cb79 = _0x1f62ef;
                        if (this['hasHit']) return;
                        this[_0x9cb79(0x66b)] && this['circleArea'][_0x9cb79(0x1780)](_0x4763a3[_0x9cb79(0xd2c)]['Core']['Player']['x'], _0x4763a3[_0x9cb79(0xd2c)]['Core'][_0x9cb79(0x10f6)]['y']) && (this['hasHit'] = !0x0, _0x4763a3[_0x9cb79(0xd2c)]['Core']['Player'][_0x9cb79(0x1112)](this[_0x9cb79(0x1133)]));
                        let _0x1a453b = Math[_0x9cb79(0xdeb)](_0x5746b3 / 0x10);
                        for (let _0x17f247 = 0x0; _0x17f247 < _0x1a453b; _0x17f247++) this['trailUpdate']();
                    } ['clearPositions']() {
                        const _0xe6bb73 = _0x1f62ef;
                        this[_0xe6bb73(0xc9f)] = [];
                    } ['trailUpdate']() {
                        const _0xa4eb0b = _0x1f62ef;
                        this[_0xa4eb0b(0x3b8)]['clear'](), this['trail'][_0xa4eb0b(0xfcb)](), this[_0xa4eb0b(0x3b8)][_0xa4eb0b(0x191d)](0x4, this['color'], 0.5), this[_0xa4eb0b(0x3b8)]['arc'](this['arcRadius'], this[_0xa4eb0b(0x14bb)], this[_0xa4eb0b(0x14bb)], Phaser['Math']['DegToRad'](0xb4), Phaser[_0xa4eb0b(0x24f)][_0xa4eb0b(0x54d)](this[_0xa4eb0b(0xbaa)]), !0x1), this['trail'][_0xa4eb0b(0x194f)](), this[_0xa4eb0b(0x3b8)]['beginPath'](), this[_0xa4eb0b(0x3b8)][_0xa4eb0b(0x191d)](0x2, this['color'], 0.8), this[_0xa4eb0b(0x3b8)][_0xa4eb0b(0x167e)](this[_0xa4eb0b(0x14bb)], this['arcRadius'], this['arcRadius'], Phaser['Math']['DegToRad'](0xb4), Phaser[_0xa4eb0b(0x24f)][_0xa4eb0b(0x54d)](this[_0xa4eb0b(0xbaa)]), !0x1), this[_0xa4eb0b(0x3b8)]['strokePath'](), this[_0xa4eb0b(0x3b8)][_0xa4eb0b(0xba4)] = _0x9fab9[_0xa4eb0b(0x10fc)]['ADD'], this[_0xa4eb0b(0x10ba)]['x'] = this['x'] - this[_0xa4eb0b(0x14bb)] + Math['cos'](Phaser[_0xa4eb0b(0x24f)][_0xa4eb0b(0x54d)](this[_0xa4eb0b(0xbaa)])) * this['arcRadius'], this[_0xa4eb0b(0x10ba)]['y'] = this['y'] + Math['sin'](Phaser['Math'][_0xa4eb0b(0x54d)](this['arcAngle'])) * this[_0xa4eb0b(0x14bb)];
                    }
                }
                _0x41b42d['default'] = _0x4b1055;
            };
