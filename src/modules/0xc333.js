// Module 0xc333
// Args: _0x37d08f, _0x4a43bc, _0x5548b0

export default (_0x37d08f, _0x4a43bc, _0x5548b0) => {
                'use strict';
                const _0xf7572a = a0_0x6932;
                var _0x5db3ca = this && this['__importDefault'] || function(_0x3b3b48) {
                    return _0x3b3b48 && _0x3b3b48['__esModule'] ? _0x3b3b48 : {
                        'default': _0x3b3b48
                    };
                };
                Object['defineProperty'](_0x4a43bc, '__esModule', {
                    'value': !0x0
                }), _0x4a43bc['B_SwordFinisher'] = void 0x0;
                const _0x12d795 = _0x5db3ca(_0x5548b0(0xa14d)),
                    _0x25f856 = _0x5db3ca(_0x5548b0(0x5f07)),
                    _0x2b1a3e = _0x5db3ca(_0x5548b0(0x1fd7)),
                    _0x4caea9 = _0x5548b0(0x18304);
                class _0x3219f2 extends _0x12d795['default'] {
                    constructor(_0x4a0982, _0x377782, _0x18939c, _0x677957, _0x3f5435) {
                        const _0x13a3dc = _0xf7572a;
                        super(_0x4a0982, _0x377782, _0x18939c, 'vfx', 'slash_sword.png', _0x677957, _0x3f5435), this[_0x13a3dc(0x140c)] = 0x0, this[_0x13a3dc(0x844)] = 0x1, this[_0x13a3dc(0x471)] = 0x39 / 0x80, this[_0x13a3dc(0xe88)] = this[_0x13a3dc(0x6d2)][_0x13a3dc(0x18bd)]['image'](0x0, 0x0, 'vfx', 'ground.png')[_0x13a3dc(0x183f)](!0x1)['setTint'](0x0), this[_0x13a3dc(0x7f3)] = this[_0x13a3dc(0x6d2)][_0x13a3dc(0x18bd)]['image'](0x0, 0x0, 'vfx', 'ground2.png')[_0x13a3dc(0x183f)](!0x1)[_0x13a3dc(0xb34)](0xff6600)[_0x13a3dc(0x11c7)](_0x4caea9['BlendModes']['ADD']), this[_0x13a3dc(0x1849)] = this[_0x13a3dc(0x6d2)]['add'][_0x13a3dc(0x568)](0x0, 0x0, 'vfx', 'Hit1.png')['setVisible'](!0x1), this[_0x13a3dc(0x131f)] = this['weapon'], this['PfxEmitter'] = this['scene']['add']['particles']('vfx')['createEmitter']({
                            'frame': ['rock0000.png', 'rock0010.png', 'rock0020.png', 'rock0030.png', 'rock0040.png'],
                            'quantity': 0x5,
                            'lifespan': {
                                'min': 0x258,
                                'max': 0x44c
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'min': 0xe1,
                                'max': 0x13b
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x190
                            },
                            'scale': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'gravityY': 0x190,
                            'tint': 0x2c1f16,
                            'bounce': 0.1,
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x4447a0 = _0xf7572a;
                        var _0x1ca57d, _0x2eea94, _0x2eab9d, _0x610238, _0x4fcb98, _0x9d7f6, _0x2c7822, _0x1d6673;
                        super['OnRecycle'](), this[_0x4447a0(0x183f)](!0x1), this[_0x4447a0(0x8a2)](0x0), this[_0x4447a0(0x19c4)] = 0x0, this['body'][_0x4447a0(0x543)] = !0x0;
                        const _0x531b43 = _0x25f856['default']['Core'][_0x4447a0(0x10f6)]['flipX'] ? this[_0x4447a0(0x19c4)] % 0x2 != 0x1 : this[_0x4447a0(0x19c4)] % 0x2 == 0x1;
                        this['x'] += _0x531b43 ? -0x40 : 0x40, this['y'] -= 0x10, this[_0x4447a0(0x7f3)]['copyPosition'](this)[_0x4447a0(0xdab)](0x0), this[_0x4447a0(0xe88)]['copyPosition'](this)[_0x4447a0(0xdab)](0x1), this[_0x4447a0(0x7f3)]['setVisible'](!0x0), this[_0x4447a0(0xe88)]['setVisible'](!0x0), this['highlightSprite']['setDepth'](-this['scene'][_0x4447a0(0x12f9)]['height'] - 0x1), this[_0x4447a0(0xe88)]['setDepth'](-this['scene']['renderer']['height']), this[_0x4447a0(0x7f3)][_0x4447a0(0x8a2)](0x0), this[_0x4447a0(0xe88)][_0x4447a0(0x8a2)](0x0), this[_0x4447a0(0x1849)]['copyPosition'](this), this[_0x4447a0(0x1849)]['setDepth'](0x0), this['impactSprite']['setScale'](0x0), this['impactSprite']['setVisible'](!0x0), this[_0x4447a0(0x125b)][_0x4447a0(0x8a2)]({
                            'start': 0.5 * this[_0x4447a0(0x4a1)][_0x4447a0(0x5f5)],
                            'end': 0x0
                        }), this[_0x4447a0(0x125b)][_0x4447a0(0x726)](this['x'], this['y'] - 0x8), this[_0x4447a0(0x125b)][_0x4447a0(0x1aa2)](), null === (_0x1ca57d = this[_0x4447a0(0x1387)]) || void 0x0 === _0x1ca57d || _0x1ca57d['stop'](), this['damageTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': 0x3 * this[_0x4447a0(0x4a1)][_0x4447a0(0x5f5)],
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x3bccbf = _0x4447a0;
                                this[_0x3bccbf(0x131f)][_0x3bccbf(0x94d)]();
                            }
                        }), null === (_0x2eea94 = this['impactTween']) || void 0x0 === _0x2eea94 || _0x2eea94[_0x4447a0(0x1a34)](), this['impactTween'] = this[_0x4447a0(0x6d2)][_0x4447a0(0x12a1)]['add']({
                            'targets': this[_0x4447a0(0x1849)],
                            'scale': 0x6 * this[_0x4447a0(0x4a1)]['PArea'],
                            'duration': 0x64,
                            'onComplete': () => {
                                const _0x27f0f6 = _0x4447a0;
                                this[_0x27f0f6(0x1849)][_0x27f0f6(0x8a2)](0x0), this[_0x27f0f6(0x1849)][_0x27f0f6(0x183f)](!0x1);
                            }
                        }), null === (_0x2eab9d = this[_0x4447a0(0x15fa)]) || void 0x0 === _0x2eab9d || _0x2eab9d['stop'](), this['tween2'] = this[_0x4447a0(0x6d2)]['tweens'][_0x4447a0(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                const _0x308712 = _0x4447a0;
                                this['body']['enable'] = !0x1, this[_0x308712(0x125b)][_0x308712(0x1a34)]();
                            }
                        });
                        let _0x5b91a7 = 0x3 * this['weapon'][_0x4447a0(0x5f5)] * this[_0x4447a0(0x471)];
                        null === (_0x610238 = this['scaleTween']) || void 0x0 === _0x610238 || _0x610238['stop'](), this[_0x4447a0(0x660)] = this[_0x4447a0(0x6d2)][_0x4447a0(0x12a1)][_0x4447a0(0x18bd)]({
                            'targets': [this[_0x4447a0(0x7f3)], this[_0x4447a0(0xe88)]],
                            'scaleX': 1.05 * _0x5b91a7,
                            'scaleY': 0.95 * _0x5b91a7,
                            'duration': 0x78,
                            'ease': 'Linear'
                        }), null === (_0x4fcb98 = this[_0x4447a0(0x1acf)]) || void 0x0 === _0x4fcb98 || _0x4fcb98[_0x4447a0(0x1a34)](), this['posTween'] = this['scene']['tweens']['add']({
                            'targets': this['highlightSprite'],
                            'y': this['y'] - 0x4,
                            'duration': 0x384,
                            'ease': 'Linear',
                            'delay': 0x64
                        }), null === (_0x9d7f6 = this['alphaTween']) || void 0x0 === _0x9d7f6 || _0x9d7f6['stop'](), this['alphaTween'] = this['scene'][_0x4447a0(0x12a1)][_0x4447a0(0x18bd)]({
                            'targets': this['highlightSprite'],
                            'alpha': 0.65,
                            'duration': 0x1c2,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'yoyo': !0x0
                        }), null === (_0x2c7822 = this['alphaCrackTween']) || void 0x0 === _0x2c7822 || _0x2c7822[_0x4447a0(0x1a34)](), this[_0x4447a0(0x1545)] = this['scene']['tweens'][_0x4447a0(0x18bd)]({
                            'targets': this['crackSprite'],
                            'alpha': 0.65,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'delay': 0x1f4
                        }), null === (_0x1d6673 = this['fadeOutTween']) || void 0x0 === _0x1d6673 || _0x1d6673[_0x4447a0(0x1a34)](), this['fadeOutTween'] = this[_0x4447a0(0x6d2)][_0x4447a0(0x12a1)][_0x4447a0(0x18bd)]({
                            'targets': this[_0x4447a0(0xe88)],
                            'alpha': 0x0,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'delay': 0xbb8,
                            'onComplete': () => {
                                const _0x290db9 = _0x4447a0;
                                this[_0x290db9(0x14fb)]();
                            }
                        }), _0x25f856[_0x4447a0(0xd2c)][_0x4447a0(0x1267)]['PlaySound'](_0x2b1a3e['default']['Attack2'], {
                            'volume': 0x1
                        });
                    }
                }
                _0x4a43bc['B_SwordFinisher'] = _0x3219f2, _0x4a43bc['default'] = _0x3219f2;
            };
