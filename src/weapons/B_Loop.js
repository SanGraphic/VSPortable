// Module 0x13075
// Args: _0x4d3605, _0x33d084, _0x51420b

export default (_0x4d3605, _0x33d084, _0x51420b) => {
                'use strict';
                const _0x42f63e = a0_0x6932;
                var _0x5db481 = this && this['__importDefault'] || function(_0x34be8c) {
                    const _0x2225e6 = _0x42f63e;
                    return _0x34be8c && _0x34be8c[_0x2225e6(0x16f1)] ? _0x34be8c : {
                        'default': _0x34be8c
                    };
                };
                Object['defineProperty'](_0x33d084, '__esModule', {
                    'value': !0x0
                }), _0x33d084['B_Loop'] = void 0x0;
                const _0xe070dc = _0x5db481(_0x51420b(0xa14d)),
                    _0x3547ed = _0x5db481(_0x51420b(0x5f07)),
                    _0xbfac4b = _0x5db481(_0x51420b(0x7c1)),
                    _0x18322b = _0x51420b(0x18304),
                    _0x4c1c0d = _0x5db481(_0x51420b(0x1fd7)),
                    _0x2eae01 = _0x5db481(_0x51420b(0x5103));
                class _0x3f96ff extends _0xe070dc['default'] {
                    constructor(_0x68b2b2, _0x307abe, _0xfb61ea, _0x100abf, _0x67cce2) {
                        const _0x447e55 = _0x42f63e;
                        super(_0x68b2b2, _0x307abe, _0xfb61ea, 'vfx', 'HitRed2.png', _0x100abf, _0x67cce2), this['explosionCircle'] = new Phaser['Geom'][(_0x447e55(0xf29))](0x0, 0x0, 0x10), this[_0x447e55(0x3b8)] = new _0xbfac4b[(_0x447e55(0xd2c))](this[_0x447e55(0x6d2)], 0x0, 0x0, 'vfx', 'Lightning3.png', 0x10, !0x0), this[_0x447e55(0x3b8)]['follower'] = this, this[_0x447e55(0x3b8)]['setScale'](0x1), this[_0x447e55(0x3b8)]['setDepth'](Number[_0x447e55(0x1aaa)] - 0x3e8), this['trail'][_0x447e55(0x183f)](!0x1), this['scene']['add'][_0x447e55(0x1a88)](this['trail']), this[_0x447e55(0x183f)](!0x1), this[_0x447e55(0x177d)] = !0x1, this[_0x447e55(0xb1f)] = 0x0, this['graphics'] = _0x68b2b2[_0x447e55(0x6d2)][_0x447e55(0x18bd)]['graphics']()[_0x447e55(0x950)]([0xffff00, 0xff8800, 0xffff88, 0xff8888][_0x67cce2 % 0x4], 0.075)[_0x447e55(0x374)](0x0, 0x0, 0x8)[_0x447e55(0x11c7)](_0x18322b[_0x447e55(0x10fc)][_0x447e55(0x1811)])[_0x447e55(0x183f)](!0x1), this[_0x447e55(0x180)] = _0x68b2b2['scene'][_0x447e55(0x18bd)]['graphics']()[_0x447e55(0x950)]([0xffffff, 0xffffff, 0xffffff, 0xffffff][_0x67cce2 % 0x4], 0.075)[_0x447e55(0x374)](0x0, 0x0, 0x8)[_0x447e55(0x11c7)](_0x18322b[_0x447e55(0x10fc)]['ADD'])[_0x447e55(0x183f)](!0x1), this['PfxEmitterManager'] = this['scene']['add']['particles']('vfx'), this[_0x447e55(0xf12)] = this['PfxEmitterManager'][_0x447e55(0x14c0)]({
                            'frame': ['PfxYellow.png', 'PfxRed.png', 'PfxLine.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0x1
                            },
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x5a,
                                'max': 0x5a
                            },
                            'lifespan': 0x258,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': _0x2eae01['default'][_0x447e55(0x15db)] / 0x2,
                                'end': _0x2eae01[_0x447e55(0xd2c)]['PixelScale']
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionCircle']
                            },
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x5233b9 = _0x42f63e;
                        var _0x5ea761, _0x3c07ba;
                        super[_0x5233b9(0x5ce)](), this['body'][_0x5233b9(0xdf6)](0x10), this[_0x5233b9(0x806)] = new Phaser[(_0x5233b9(0x10d2))][(_0x5233b9(0xf29))](0x0, 0x0, 0x10 * _0x2eae01[_0x5233b9(0xd2c)][_0x5233b9(0x15db)] * 0.5 * this[_0x5233b9(0x4a1)][_0x5233b9(0x5f5)]), this[_0x5233b9(0xf12)][_0x5233b9(0x152)]({
                            'type': 'random',
                            'source': this[_0x5233b9(0x806)]
                        }), null === (_0x5ea761 = this[_0x5233b9(0x32b)]) || void 0x0 === _0x5ea761 || _0x5ea761['stop'](), null === (_0x3c07ba = this['despawnTween']) || void 0x0 === _0x3c07ba || _0x3c07ba[_0x5233b9(0x1a34)](), this[_0x5233b9(0x183f)](!0x1), this[_0x5233b9(0x3b8)]['setVisible'](!0x1);
                        var _0x1aec53 = this['weapon']['ScreenRectangle'],
                            _0x33767b = new Phaser[(_0x5233b9(0x24f))]['Vector2'](_0x3547ed[_0x5233b9(0xd2c)][_0x5233b9(0x1043)]['Player']['x'] - 0.5 * this[_0x5233b9(0x6d2)][_0x5233b9(0x12f9)]['width'], _0x3547ed[_0x5233b9(0xd2c)][_0x5233b9(0x1043)]['Player']['y'] - 0.5 * this['scene']['renderer']['height']);
                        if (this['trail'][_0x5233b9(0x138f)](), this['body'][_0x5233b9(0x543)] = !0x1, this['setScale'](0.5 * _0x2eae01['default'][_0x5233b9(0x15db)] * this['weapon'][_0x5233b9(0x5f5)]), _0x1aec53['x'] = _0x33767b['x'], _0x1aec53['y'] = _0x33767b['y'], this[_0x5233b9(0x18a7)] = this[_0x5233b9(0x12ef)](_0x1aec53), this['target']) {
                            this['x'] = _0x3547ed[_0x5233b9(0xd2c)][_0x5233b9(0x1043)][_0x5233b9(0x10f6)]['x'] + 0.5 * this[_0x5233b9(0x6d2)]['renderer']['width'] * (Math['random']() >= 0.5 ? 0x1 : -0x1), this['y'] = _0x3547ed[_0x5233b9(0xd2c)][_0x5233b9(0x1043)][_0x5233b9(0x10f6)]['y'] - 0.6 * this[_0x5233b9(0x6d2)]['renderer']['height'], this[_0x5233b9(0x3b8)]['resetPoints'](this['x'], this['y']), this[_0x5233b9(0x3b8)]['setVisible'](!0x0);
                            var _0x8108fb = this['target'];
                            this['moveTween'] = this['scene'][_0x5233b9(0x12a1)]['add']({
                                'targets': this,
                                'x': this[_0x5233b9(0x18a7)]['x'],
                                'y': this[_0x5233b9(0x18a7)]['y'],
                                'duration': 0x46,
                                'onComplete': () => {
                                    const _0x455212 = _0x5233b9;
                                    this['objectsHit'] = [], this[_0x455212(0xcf9)]['enable'] = !0x0, _0x3547ed['default'][_0x455212(0x1043)][_0x455212(0x14d8)]['FlashingVFXEnabled'] && _0x8108fb && (this[_0x455212(0x523)]['setPosition'](_0x8108fb['x'], _0x8108fb['y']), this[_0x455212(0x523)][_0x455212(0x183f)](!0x0), this[_0x455212(0x523)]['setScale'](0x0), this[_0x455212(0x523)][_0x455212(0xb4a)](this['y'] - _0x3547ed[_0x455212(0xd2c)]['Core']['Player']['y'] - 0.5 * this[_0x455212(0x6d2)]['renderer'][_0x455212(0x140e)]), this['graphics2']['setPosition'](_0x8108fb['x'], _0x8108fb['y']), this[_0x455212(0x180)][_0x455212(0x183f)](!0x0), this[_0x455212(0x180)][_0x455212(0x8a2)](0x0), this[_0x455212(0x180)][_0x455212(0xb4a)](this['y'] - _0x3547ed['default'][_0x455212(0x1043)][_0x455212(0x10f6)]['y'] - 0.5 * this[_0x455212(0x6d2)][_0x455212(0x12f9)]['height'])), this[_0x455212(0x4a1)][_0x455212(0x1007)] && this[_0x455212(0x4a1)]['SpawnExplosionAt'](this['x'], this['y']), _0x3547ed['default']['Sound'][_0x455212(0x7f6)](_0x4c1c0d[_0x455212(0xd2c)]['Lightning'], {
                                        'detune': 0xc8 * this['indexInWeapon'],
                                        'volume': 0.5,
                                        'rate': 0x1
                                    }, 0xc8, 0x8), this['hitGroundTween'] = this['scene']['tweens'][_0x455212(0x18bd)]({
                                        'targets': [this[_0x455212(0x523)], this[_0x455212(0x180)]],
                                        'scale': _0x2eae01['default'][_0x455212(0x15db)] * this[_0x455212(0x4a1)]['PArea'],
                                        'duration': 0x3c,
                                        'onComplete': () => {
                                            const _0x149de8 = _0x455212;
                                            this['body'][_0x149de8(0x543)] = !0x1, this[_0x149de8(0xe87)] = !0x0, this['chargeTween'] = this[_0x149de8(0x6d2)]['tweens']['add']({
                                                'targets': [this['graphics2']],
                                                'scale': 0x0,
                                                'duration': 0x5dc,
                                                'onComplete': () => {
                                                    this['isGrounded'] = !0x1;
                                                }
                                            }), this['finalScaleGroundTween'] = this[_0x149de8(0x6d2)][_0x149de8(0x12a1)]['add']({
                                                'delay': 0x514,
                                                'duration': 0x3c,
                                                'targets': this[_0x149de8(0x523)],
                                                'scale': 0x0,
                                                'onStart': () => {
                                                    const _0x62bf5c = _0x149de8;
                                                    this['objectsHit'] = [], _0x3547ed['default']['Sound']['PlaySound'](_0x4c1c0d[_0x62bf5c(0xd2c)]['Lightning2'], {
                                                        'detune': -0x64 * this['indexInWeapon'],
                                                        'volume': 0.5,
                                                        'rate': 0x1
                                                    }, 0xc8, 0x8), this['body'][_0x62bf5c(0x543)] = !0x0;
                                                },
                                                'onComplete': () => {
                                                    const _0x12a7d7 = _0x149de8;
                                                    this['body'][_0x12a7d7(0x543)] = !0x1, this[_0x12a7d7(0x1a8b)] = this['scene']['tweens'][_0x12a7d7(0x18bd)]({
                                                        'targets': this,
                                                        'y': this['y'] - 1.5 * this[_0x12a7d7(0x6d2)]['renderer'][_0x12a7d7(0x140e)],
                                                        'duration': 0x5a,
                                                        'onComplete': () => {
                                                            const _0x4c2dad = _0x12a7d7;
                                                            this[_0x4c2dad(0x6b9)] = this['scene']['tweens'][_0x4c2dad(0x18bd)]({
                                                                'targets': [this['graphics'], this['graphics2']],
                                                                'scale': 0x0,
                                                                'duration': 0x3c,
                                                                'onComplete': () => {
                                                                    const _0x234a8c = _0x4c2dad;
                                                                    this['trail']['setVisible'](!0x1), this['graphics'][_0x234a8c(0x183f)](!0x1), this['graphics2']['setVisible'](!0x1), this[_0x234a8c(0x14fb)]();
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        } else this[_0x5233b9(0x14fb)]();
                    } ['Update']() {
                        const _0x29a386 = _0x42f63e;
                        this[_0x29a386(0x3b8)][_0x29a386(0x12fc)](), this[_0x29a386(0xe87)] && this['PfxEmitterManager'][_0x29a386(0x108b)](this['x'], this['y']);
                    }
                }
                _0x33d084['B_Loop'] = _0x3f96ff, _0x33d084['default'] = _0x3f96ff;
            };
