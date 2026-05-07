// Module 0x119ba
// Args: _0x186664, _0x3da760, _0xe3585d

export default (_0x186664, _0x3da760, _0xe3585d) => {
                'use strict';
                const _0x28b32e = a0_0x6932;
                var _0x3fd0b7 = this && this['__importDefault'] || function(_0x268b85) {
                    const _0x10a327 = _0x28b32e;
                    return _0x268b85 && _0x268b85[_0x10a327(0x16f1)] ? _0x268b85 : {
                        'default': _0x268b85
                    };
                };
                Object['defineProperty'](_0x3da760, '__esModule', {
                    'value': !0x0
                }), _0x3da760['GizmoManager'] = void 0x0;
                const _0x17cd1c = _0x3fd0b7(_0xe3585d(0x5f07)),
                    _0x92355 = _0x3fd0b7(_0xe3585d(0x1fd7)),
                    _0x4ebc20 = _0xe3585d(0x18304);
                class _0x4a6d36 {
                    constructor(_0x5dac22) {
                        const _0x70d792 = _0x28b32e;
                        this[_0x70d792(0x6d2)] = _0x5dac22, this[_0x70d792(0x836)](), this['InitQuickTreasureChest']();
                    } ['InitQuickTreasureChest']() {
                        const _0x4e0917 = _0x28b32e;
                        let _0x4be36a = _0x17cd1c[_0x4e0917(0xd2c)][_0x4e0917(0x1043)][_0x4e0917(0x6d2)][_0x4e0917(0x18bd)][_0x4e0917(0x1791)]('items')[_0x4e0917(0xb4a)](_0x17cd1c[_0x4e0917(0xd2c)][_0x4e0917(0x1043)][_0x4e0917(0x6d2)][_0x4e0917(0x12f9)][_0x4e0917(0x140e)]);
                        this[_0x4e0917(0x15c6)] = _0x4be36a['createEmitter']({
                            'frame': ['MoneyBagGreen.png', 'CoinGold.png', 'CoinGold.png', 'CoinGold.png'],
                            'quantity': 0x14,
                            'lifespan': 0x7d0,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'angle': {
                                'min': 0xf5,
                                'max': 0x127
                            },
                            'speed': {
                                'min': 0x1a9,
                                'max': 0x1db
                            },
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'gravityY': 0x320,
                            'on': !0x1
                        });
                    } ['DisplayQuickTreasureChestAnimation']() {
                        const _0x309788 = _0x28b32e;
                        this[_0x309788(0x15c6)]['emitParticleAt'](_0x17cd1c[_0x309788(0xd2c)]['Core'][_0x309788(0x10f6)]['x'], _0x17cd1c['default'][_0x309788(0x1043)]['Player']['y']), _0x17cd1c[_0x309788(0xd2c)]['Sound']['PlaySound'](_0x92355[_0x309788(0xd2c)][_0x309788(0x10cf)], {
                            'volume': 0.5
                        });
                        for (let _0x48bcb3 = 0x1; _0x48bcb3 <= 0x4; _0x48bcb3++) setTimeout(() => {
                            const _0x46aeef = _0x309788;
                            _0x17cd1c[_0x46aeef(0xd2c)]['Sound']['PlaySound'](_0x92355['default'][_0x46aeef(0x10cf)], {
                                'volume': 0.5 + 0.05 * _0x48bcb3,
                                'detune': 0x32 * _0x48bcb3
                            });
                        }, 0x64 * _0x48bcb3);
                    } ['ShowHighlightAt'](_0x5a1bc3, _0x4847f4) {
                        const _0x3eb65a = _0x28b32e;
                        var _0x449859, _0x9062b0, _0x2db163, _0x5ecf58;
                        _0x17cd1c[_0x3eb65a(0xd2c)][_0x3eb65a(0x1267)][_0x3eb65a(0x7f6)](_0x92355['default']['Lucky'], {}, 0x1f4, 0x1), this[_0x3eb65a(0xc26)] || (this['Highlight'] = this[_0x3eb65a(0x6d2)]['add']['sprite'](_0x5a1bc3, _0x4847f4, 'vfx', 'sPFX_ring_64.png')[_0x3eb65a(0x183f)](!0x1)['setBlendMode'](_0x4ebc20[_0x3eb65a(0x10fc)]['ADD'])['setTint'](0xff00)[_0x3eb65a(0xb4a)](this['scene'][_0x3eb65a(0x12f9)][_0x3eb65a(0x140e)])), this['Rainbow'] || (this[_0x3eb65a(0x86f)] = this[_0x3eb65a(0x6d2)][_0x3eb65a(0x18bd)][_0x3eb65a(0x105b)](_0x5a1bc3, _0x4847f4, 'vfx', 's_pfx_rainbow_64.png')[_0x3eb65a(0x183f)](!0x1)['setBlendMode'](_0x4ebc20[_0x3eb65a(0x10fc)]['ADD'])['setDepth'](this['scene']['renderer'][_0x3eb65a(0x140e)])), this[_0x3eb65a(0xc26)]['x'] = _0x5a1bc3, this[_0x3eb65a(0xc26)]['y'] = _0x4847f4, this[_0x3eb65a(0x86f)]['x'] = _0x5a1bc3, this[_0x3eb65a(0x86f)]['y'] = _0x4847f4, null === (_0x449859 = this[_0x3eb65a(0x5c2)]) || void 0x0 === _0x449859 || _0x449859['stop'](), null === (_0x9062b0 = this[_0x3eb65a(0x1622)]) || void 0x0 === _0x9062b0 || _0x9062b0['stop'](), this[_0x3eb65a(0x5c2)] = this[_0x3eb65a(0x6d2)]['tweens'][_0x3eb65a(0x18bd)]({
                            'targets': this['Highlight'],
                            'duration': 0xfa,
                            'alpha': 0.35,
                            'scale': 4.2,
                            'ease': 'Sine.easeOut',
                            'onStart': () => {
                                const _0x28d706 = _0x3eb65a;
                                this[_0x28d706(0xc26)]['setScale'](0x0), this[_0x28d706(0xc26)]['setAlpha'](0x0), this['Highlight']['setAngle'](0x0), this[_0x28d706(0xc26)]['setVisible'](!0x0);
                            },
                            'onComplete': () => {
                                const _0x207569 = _0x3eb65a;
                                this[_0x207569(0x1622)] = this['scene'][_0x207569(0x12a1)]['add']({
                                    'targets': this['Highlight'],
                                    'duration': 0xfa,
                                    'alpha': 0x0,
                                    'onComplete': () => {
                                        const _0x1f3387 = _0x207569;
                                        this[_0x1f3387(0xc26)]['setVisible'](!0x1);
                                    }
                                });
                            }
                        }), null === (_0x2db163 = this[_0x3eb65a(0x7eb)]) || void 0x0 === _0x2db163 || _0x2db163['stop'](), null === (_0x5ecf58 = this['RainbowTween2']) || void 0x0 === _0x5ecf58 || _0x5ecf58['stop'](), this['RainbowTween'] = this['scene']['tweens'][_0x3eb65a(0x18bd)]({
                            'targets': this[_0x3eb65a(0x86f)],
                            'duration': 0x12c,
                            'alpha': 0.5,
                            'scale': 4.2,
                            'angle': 0x168,
                            'ease': 'Sine.easeOut',
                            'onStart': () => {
                                const _0x41cd55 = _0x3eb65a;
                                this['Rainbow']['setScale'](0x0), this[_0x41cd55(0x86f)][_0x41cd55(0xdab)](0x0), this[_0x41cd55(0x86f)][_0x41cd55(0x9b5)](0x0), this[_0x41cd55(0x86f)][_0x41cd55(0x183f)](!0x0);
                            },
                            'onComplete': () => {
                                const _0xc773d5 = _0x3eb65a;
                                this[_0xc773d5(0xa92)] = this[_0xc773d5(0x6d2)]['tweens'][_0xc773d5(0x18bd)]({
                                    'targets': this['Rainbow'],
                                    'duration': 0xfa,
                                    'alpha': 0x0,
                                    'angle': 0x2d0,
                                    'onComplete': () => {
                                        const _0x1c7423 = _0xc773d5;
                                        this['Rainbow'][_0x1c7423(0x183f)](!0x1);
                                    }
                                });
                            }
                        });
                    } ['InitLevelUp']() {
                        const _0x259f28 = _0x28b32e;
                        this['Angel'] = new Phaser['GameObjects'][(_0x259f28(0xa97))](this[_0x259f28(0x6d2)], 0x0, 0x0, 'angel')['setVisible'](!0x1), this[_0x259f28(0xdca)] = this[_0x259f28(0x189f)]['anims']['generateFrameNames']('angel', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x0,
                            'prefix': 'angel',
                            'suffix': '.png'
                        }), this[_0x259f28(0x189f)]['destroy']();
                        let _0x494fb1 = new Phaser[(_0x259f28(0x10d2))]['Line'](-0x10, 0x0, 0x10, 0x0);
                        this[_0x259f28(0x1761)] = this['scene']['add']['particles']('vfx'), this[_0x259f28(0xb8c)] = this['particlesManager'][_0x259f28(0x14c0)]({
                            'frame': ['PfxLine2.png'],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0xfa,
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
                                'min': 0x3c,
                                'max': 0x5a
                            },
                            'quantity': 0x1,
                            'scaleX': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'scaleY': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0.35,
                                'end': 0x0
                            },
                            'emitZone': {
                                'source': _0x494fb1
                            },
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'on': !0x1
                        });
                    } ['DisplayLimitBreakLevelUp']() {
                        const _0x491e22 = _0x28b32e;
                        this['DisplayAngel'](), this['DisplayLevelUp'](), _0x17cd1c['default'][_0x491e22(0x1267)]['PlaySound'](_0x92355[_0x491e22(0xd2c)]['AutoLB'], {
                            'volume': 0x1
                        }, 0xc8, 0x1);
                    } ['DisplayLevelUp']() {
                        const _0x6a7665 = _0x28b32e;
                        let _0x40d9ac = _0x17cd1c['default'][_0x6a7665(0x1043)]['Player'][_0x6a7665(0x828)] + 0x10,
                            _0x3313fb = this[_0x6a7665(0x6d2)][_0x6a7665(0x18bd)][_0x6a7665(0xcce)](_0x17cd1c[_0x6a7665(0xd2c)][_0x6a7665(0x1043)]['Player']['x'], _0x17cd1c['default'][_0x6a7665(0x1043)]['Player']['y'] - _0x40d9ac, 'titleFont', 'LevelUp!')['setOrigin'](0.5)['setDepth'](0x1)[_0x6a7665(0x183f)](!0x1);
                        this[_0x6a7665(0x6d2)]['tweens'][_0x6a7665(0x18bd)]({
                            'targets': _0x3313fb,
                            'scale': 0x1,
                            'duration': 0x1f4,
                            'ease': 'Sine.easeInOut',
                            'yOffset': 0x40,
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x5f4e58 = _0x6a7665;
                                _0x3313fb['scale'] = 0x0, _0x3313fb['yOffset'] = 0x0, _0x3313fb[_0x5f4e58(0x183f)](!0x0), _0x3313fb['x'] = _0x17cd1c[_0x5f4e58(0xd2c)][_0x5f4e58(0x1043)]['Player']['x'], _0x3313fb['y'] = _0x17cd1c[_0x5f4e58(0xd2c)][_0x5f4e58(0x1043)][_0x5f4e58(0x10f6)]['y'] - _0x40d9ac;
                            },
                            'onUpdate': () => {
                                const _0x47842f = _0x6a7665;
                                _0x3313fb['x'] = _0x17cd1c['default'][_0x47842f(0x1043)][_0x47842f(0x10f6)]['x'], _0x3313fb['y'] = _0x17cd1c[_0x47842f(0xd2c)]['Core']['Player']['y'] - _0x40d9ac - _0x3313fb[_0x47842f(0x969)], this['pfxEmitter'][_0x47842f(0x108b)](_0x17cd1c[_0x47842f(0xd2c)]['Core'][_0x47842f(0x10f6)]['x'], _0x17cd1c['default'][_0x47842f(0x1043)]['Player']['y'] - 0x20, 0x1);
                            },
                            'onComplete': () => {
                                const _0x31d7de = _0x6a7665;
                                this[_0x31d7de(0x6d2)][_0x31d7de(0x3fe)][_0x31d7de(0x393)](_0x3313fb), null == _0x3313fb || _0x3313fb[_0x31d7de(0x16ca)]();
                            },
                            'onStop': () => {
                                const _0x1702e4 = _0x6a7665;
                                this[_0x1702e4(0x6d2)][_0x1702e4(0x3fe)][_0x1702e4(0x393)](_0x3313fb), null == _0x3313fb || _0x3313fb[_0x1702e4(0x16ca)]();
                            }
                        }), this[_0x6a7665(0xd95)](), _0x17cd1c['default']['Sound'][_0x6a7665(0x7f6)](_0x92355['default']['AutoLV'], {
                            'volume': 0x1
                        }, 0xc8, 0x1);
                    } ['DisplayBlur']() {
                        const _0x4ab1d1 = _0x28b32e;
                        let _0x49a539 = this[_0x4ab1d1(0x6d2)][_0x4ab1d1(0x18bd)][_0x4ab1d1(0x105b)](0x0, 0x0, 'vfx', 'blur128.png')['setVisible'](!0x1)[_0x4ab1d1(0xb34)](0x8888ff)['setDepth'](-0x2);
                        this[_0x4ab1d1(0x7a3)] = this[_0x4ab1d1(0x6d2)]['tweens'][_0x4ab1d1(0x18bd)]({
                            'targets': _0x49a539,
                            'alpha': 0x1,
                            'scale': 0x1,
                            'duration': 0x1f4,
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x38178c = _0x4ab1d1;
                                _0x49a539['alpha'] = 0x0, _0x49a539['setScale'](0x0), _0x49a539['setVisible'](!0x0), _0x49a539['x'] = _0x17cd1c[_0x38178c(0xd2c)][_0x38178c(0x1043)]['Player']['x'], _0x49a539['y'] = _0x17cd1c[_0x38178c(0xd2c)]['Core']['Player']['y'] - 0x18;
                            },
                            'onUpdate': () => {
                                const _0x348a28 = _0x4ab1d1;
                                _0x49a539['x'] = _0x17cd1c['default'][_0x348a28(0x1043)][_0x348a28(0x10f6)]['x'], _0x49a539['y'] = _0x17cd1c[_0x348a28(0xd2c)][_0x348a28(0x1043)]['Player']['y'] - 0x18;
                            },
                            'onComplete': () => {
                                const _0x11a7f6 = _0x4ab1d1;
                                _0x49a539['setVisible'](!0x1), this[_0x11a7f6(0x6d2)]['children']['remove'](_0x49a539), _0x49a539[_0x11a7f6(0x16ca)]();
                            },
                            'onStop': () => {
                                const _0x49567a = _0x4ab1d1;
                                _0x49a539['setVisible'](!0x1), this['scene']['children'][_0x49567a(0x393)](_0x49a539), _0x49a539[_0x49567a(0x16ca)]();
                            }
                        });
                    } ['DisplayAngel']() {
                        const _0x1a3789 = _0x28b32e;
                        let _0x18c942 = this['scene'][_0x1a3789(0x18bd)]['sprite'](0x0, 0x0, 'angel')[_0x1a3789(0x183f)](!0x1);
                        _0x18c942['anims'][_0x1a3789(0x6a8)]({
                            'key': 'angel',
                            'frames': this['angelFrameNames'],
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), _0x18c942[_0x1a3789(0xb4a)](-0x1), this[_0x1a3789(0x7a3)] = this['scene']['tweens']['add']({
                            'targets': _0x18c942,
                            'alpha': 0x0,
                            'yOffset': 0x20,
                            'duration': 0x1f4,
                            'onStart': () => {
                                const _0x4308bb = _0x1a3789;
                                _0x18c942[_0x4308bb(0xe71)] = 0x1, _0x18c942['yOffset'] = 0x0, _0x18c942[_0x4308bb(0x183f)](!0x0), _0x18c942[_0x4308bb(0x183e)][_0x4308bb(0x902)]('angel'), _0x18c942['x'] = _0x17cd1c[_0x4308bb(0xd2c)][_0x4308bb(0x1043)][_0x4308bb(0x10f6)]['x'], _0x18c942['y'] = _0x17cd1c[_0x4308bb(0xd2c)]['Core']['Player']['y'] - 0x20;
                            },
                            'onUpdate': () => {
                                const _0xaa4162 = _0x1a3789;
                                _0x18c942['x'] = _0x17cd1c[_0xaa4162(0xd2c)]['Core'][_0xaa4162(0x10f6)]['x'], _0x18c942['y'] = _0x17cd1c['default'][_0xaa4162(0x1043)][_0xaa4162(0x10f6)]['y'] - 0x20 - _0x18c942['yOffset'];
                            },
                            'onComplete': () => {
                                const _0x3f4bcd = _0x1a3789;
                                _0x18c942['setVisible'](!0x1), this['scene']['children'][_0x3f4bcd(0x393)](_0x18c942), _0x18c942[_0x3f4bcd(0x16ca)]();
                            },
                            'onStop': () => {
                                const _0x143370 = _0x1a3789;
                                _0x18c942[_0x143370(0x183f)](!0x1), this[_0x143370(0x6d2)][_0x143370(0x3fe)]['remove'](_0x18c942), _0x18c942['destroy']();
                            }
                        });
                    } ['DisplayIconOverhead'](_0x1da5c1, _0x1de7af, _0x2b7709) {
                        const _0x4389e4 = _0x28b32e;
                        let _0x42d6b5 = _0x17cd1c[_0x4389e4(0xd2c)][_0x4389e4(0x1043)][_0x4389e4(0x10f6)][_0x4389e4(0x828)] + 0x8,
                            _0x46d107 = this[_0x4389e4(0x6d2)][_0x4389e4(0x18bd)][_0x4389e4(0x568)](0x0, 0x0, 'items', _0x1da5c1)['setScale'](0x1)['setDepth'](0x1)[_0x4389e4(0x183f)](!0x1),
                            _0x35002a = this[_0x4389e4(0x6d2)][_0x4389e4(0x18bd)]['text'](0x0, 0x0, (_0x1de7af > 0x0 ? '+' : '') + _0x1de7af, {})[_0x4389e4(0x183f)](!0x1)['setOrigin'](0x0, 0.5)['setScale'](0x1)[_0x4389e4(0xb34)](_0x2b7709 || Phaser['Math']['RND'][_0x4389e4(0x198c)]([0xffff00, 0xff00, 0xffff]))[_0x4389e4(0x1804)](0x2, 0x2, '#000', 0x1, !0x0, !0x0)[_0x4389e4(0xb4a)](0xc1c),
                            _0x6222da = 0.5 * (0x10 + _0x35002a['displayWidth']);
                        this[_0x4389e4(0x6d2)]['tweens']['add']({
                            'targets': [_0x46d107, _0x35002a],
                            'alpha': 0x0,
                            'yOffset': 0x10,
                            'duration': 0x3e8,
                            'onStart': () => {
                                const _0x49b6d8 = _0x4389e4;
                                _0x46d107[_0x49b6d8(0xe71)] = 0x1, _0x46d107[_0x49b6d8(0x969)] = 0x0, _0x46d107['setVisible'](!0x0), _0x35002a['alpha'] = 0x1, _0x35002a[_0x49b6d8(0x969)] = 0x0, _0x35002a[_0x49b6d8(0x183f)](!0x0), _0x46d107['x'] = _0x17cd1c[_0x49b6d8(0xd2c)][_0x49b6d8(0x1043)]['Player']['x'] - _0x6222da, _0x46d107['y'] = _0x17cd1c[_0x49b6d8(0xd2c)][_0x49b6d8(0x1043)][_0x49b6d8(0x10f6)]['y'] - _0x42d6b5, _0x35002a['x'] = _0x17cd1c[_0x49b6d8(0xd2c)][_0x49b6d8(0x1043)]['Player']['x'] - _0x6222da + 0x10, _0x35002a['y'] = _0x17cd1c[_0x49b6d8(0xd2c)]['Core'][_0x49b6d8(0x10f6)]['y'] - _0x42d6b5;
                            },
                            'onUpdate': () => {
                                const _0x54c120 = _0x4389e4;
                                _0x46d107['x'] = _0x17cd1c[_0x54c120(0xd2c)][_0x54c120(0x1043)][_0x54c120(0x10f6)]['x'] - _0x6222da, _0x46d107['y'] = _0x17cd1c['default'][_0x54c120(0x1043)]['Player']['y'] - _0x42d6b5 - _0x46d107['yOffset'], _0x35002a['x'] = _0x17cd1c['default'][_0x54c120(0x1043)][_0x54c120(0x10f6)]['x'] - _0x6222da + 0x10, _0x35002a['y'] = _0x17cd1c[_0x54c120(0xd2c)]['Core']['Player']['y'] - _0x42d6b5 - _0x35002a['yOffset'];
                            },
                            'onComplete': () => {
                                const _0x2f240e = _0x4389e4;
                                this['scene']['children']['remove'](_0x46d107), null == _0x46d107 || _0x46d107[_0x2f240e(0x16ca)](), this[_0x2f240e(0x6d2)][_0x2f240e(0x3fe)][_0x2f240e(0x393)](_0x35002a), null == _0x35002a || _0x35002a['destroy']();
                            },
                            'onStop': () => {
                                const _0x518c59 = _0x4389e4;
                                this[_0x518c59(0x6d2)]['children'][_0x518c59(0x393)](_0x46d107), null == _0x46d107 || _0x46d107[_0x518c59(0x16ca)](), this[_0x518c59(0x6d2)][_0x518c59(0x3fe)]['remove'](_0x35002a), null == _0x35002a || _0x35002a['destroy']();
                            }
                        });
                    } ['Update'](_0x27aafc) {}
                }
                _0x3da760['GizmoManager'] = _0x4a6d36, _0x3da760['default'] = _0x4a6d36;
            };
