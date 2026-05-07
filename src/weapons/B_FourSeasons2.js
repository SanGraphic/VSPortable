// Module 0x9a27
// Args: _0x34219b, _0x12b01f, _0x2da292

export default (_0x34219b, _0x12b01f, _0x2da292) => {
                'use strict';
                const _0x577035 = a0_0x6932;
                var _0x28b426 = this && this['__importDefault'] || function(_0x487ac5) {
                    return _0x487ac5 && _0x487ac5['__esModule'] ? _0x487ac5 : {
                        'default': _0x487ac5
                    };
                };
                Object['defineProperty'](_0x12b01f, '__esModule', {
                    'value': !0x0
                }), _0x12b01f['B_FourSeasons2'] = void 0x0;
                const _0x32db79 = _0x28b426(_0x2da292(0xa14d)),
                    _0x519a5d = _0x28b426(_0x2da292(0x5f07)),
                    _0x23a078 = _0x28b426(_0x2da292(0x1fd7)),
                    _0x489d57 = _0x2da292(0x18304);
                class _0x34fcb7 extends _0x32db79['default'] {
                    constructor(_0xae61bc, _0x10a185, _0x5dc3ec, _0x56a665, _0x4e5948) {
                        const _0x548969 = _0x577035;
                        super(_0xae61bc, _0x10a185, _0x5dc3ec, 'vfx', 'blurBlack2.png', _0x56a665, _0x4e5948), this['offsetY'] = 0x0, this[_0x548969(0x16d4)] = 0x0, this['kanjiFrames'] = ['k_earth.png', 'k_wind.png', 'k_fire.png', 'k_water.png', 'k_void.png'], this['trueWeapon'] = this[_0x548969(0x4a1)], this[_0x548969(0x10a0)] = this['scene']['add'][_0x548969(0x105b)](0x0, 0x0, 'vfx', 'sPFX_ring_64.png')[_0x548969(0x183f)](!0x1)['setBlendMode'](_0x489d57[_0x548969(0x10fc)][_0x548969(0x1811)])['setAlpha'](0.65)['setDepth'](this[_0x548969(0x6d2)][_0x548969(0x12f9)][_0x548969(0x140e)] + 0x1), this[_0x548969(0xeb4)] = this[_0x548969(0x6d2)][_0x548969(0x18bd)]['sprite'](0x0, 0x0, 'vfx', 's_pfx_rainbow_64u.png')['setVisible'](!0x1)[_0x548969(0x11c7)](_0x489d57[_0x548969(0x10fc)][_0x548969(0x1811)])['setAlpha'](0.65)['setDepth'](this[_0x548969(0x6d2)]['renderer'][_0x548969(0x140e)] + 0x1), this[_0x548969(0xa0a)] = this[_0x548969(0x6d2)][_0x548969(0x18bd)][_0x548969(0x105b)](0x0, 0x0, 'vfx', 'fuzzA.png')['setVisible'](!0x1)[_0x548969(0x11c7)](_0x489d57[_0x548969(0x10fc)][_0x548969(0x1811)])[_0x548969(0xdab)](0.65)[_0x548969(0xb4a)](this[_0x548969(0x6d2)]['renderer']['height'] + 0x1), this['kanji'] = this['scene'][_0x548969(0x18bd)][_0x548969(0x105b)](0x0, 0x0, 'vfx', 'k_spring.png')['setVisible'](!0x1)[_0x548969(0xb4a)](this['scene'][_0x548969(0x12f9)][_0x548969(0x140e)] + 0x1), this[_0x548969(0x16df)] = this[_0x548969(0x6d2)][_0x548969(0x18bd)][_0x548969(0x105b)](0x0, 0x0, 'vfx', 'Lightning3.png')[_0x548969(0x183f)](!0x1), this['lightning'][_0x548969(0xb4a)](this[_0x548969(0x6d2)][_0x548969(0x12f9)][_0x548969(0x140e)]), this['particles'] = this['scene'][_0x548969(0x18bd)][_0x548969(0x1791)]('vfx'), this['particles']['setDepth'](this[_0x548969(0x6d2)][_0x548969(0x12f9)][_0x548969(0x140e)]), this[_0x548969(0x184f)] = Phaser['Math'][_0x548969(0x82a)]['pick']([0x0, 0x1, 0x2, 0x3, 0x0, 0x1, 0x3, 0x0, 0x1, 0x3]), this[_0x548969(0x8ac)] = [], this['SeasonWells'] = [], this[_0x548969(0x1aad)] = [], this['MakeEmitter_Animated']('godaiEarth0'), this['MakeEmitter_Animated']('godaiWind0'), this[_0x548969(0xe1a)]('godaiFire0'), this[_0x548969(0xe1a)]('godaiWater0'), this[_0x548969(0xe1a)]('godaiVoid0'), this[_0x548969(0x68f)] = this[_0x548969(0x1791)]['createEmitter']({
                            'frame': ['_blur.png', '_blur2.png', '_blur3.png'][_0x4e5948 % 0x3],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x320,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x8
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x10,
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'frequency': 0x10,
                            'blendMode': 'ADD',
                            'on': !0x1
                        });
                        for (let _0x4d7d4f = 0x0; _0x4d7d4f < this['SeasonParticles'][_0x548969(0xed9)]; _0x4d7d4f++) {
                            let _0x4988ba = this[_0x548969(0x8ac)][_0x4d7d4f][_0x548969(0x1386)]({
                                'x': this['x'],
                                'y': this['y'],
                                'power': 0.5,
                                'epsilon': 0x28,
                                'gravity': 0xc8
                            });
                            this[_0x548969(0xc75)][_0x548969(0x1564)](_0x4988ba);
                        }
                    } ['onEmitcustomTint'](_0x101252, _0x29e1a2, _0x32b6a1) {
                        const _0x3216f8 = _0x577035;
                        switch (this['season']) {
                            case 0x0:
                                return Phaser[_0x3216f8(0x24f)]['RND'][_0x3216f8(0x198c)]([0x884400, 0x442200, 0x551100, 0xcc8800]);
                            case 0x1:
                                return Phaser[_0x3216f8(0x24f)][_0x3216f8(0x82a)][_0x3216f8(0x198c)]([0xffff44, 0xff00, 0x88ff00, 0x88ff44]);
                            case 0x2:
                                return Phaser[_0x3216f8(0x24f)]['RND']['pick']([0xff0000, 0xff8800, 0xffcc00, 0xffff00]);
                            case 0x3:
                                return Phaser[_0x3216f8(0x24f)][_0x3216f8(0x82a)]['pick']([0xffffff, 0x4488ff, 0xccccff, 0x8888ff]);
                            case 0x4:
                                return Phaser[_0x3216f8(0x24f)][_0x3216f8(0x82a)][_0x3216f8(0x198c)]([0x2222, 0xffffff, 0x8888, 0xcccc]);
                        }
                    } ['MakeEmitter_Animated'](_0x143d37) {
                        const _0x4d861e = _0x577035;
                        let _0x343d25 = this[_0x4d861e(0x6d2)][_0x4d861e(0x18bd)]['particles'](_0x143d37);
                        _0x343d25[_0x4d861e(0xb4a)](this[_0x4d861e(0x6d2)][_0x4d861e(0x12f9)]['height']);
                        let _0x2fe892 = _0x343d25[_0x4d861e(0x14c0)]({
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0,
                                'ease': 'Expo.easeIn'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x1f
                            },
                            'quantity': 0x50,
                            'scale': {
                                'start': 0x2,
                                'end': 0x1
                            },
                            'frequency': 0x50,
                            'tint': {
                                'onEmit': (_0x17c6e2, _0x2b60e3, _0x45085d) => this['onEmitcustomTint'](_0x17c6e2, _0x2b60e3, _0x45085d)
                            },
                            'on': !0x1
                        });
                        this[_0x4d861e(0x8ac)][_0x4d861e(0x1564)](_0x343d25), this[_0x4d861e(0x1aad)][_0x4d861e(0x1564)](_0x2fe892);
                    } ['MakeEmitter_Frames'](_0xa92300) {
                        const _0x50e402 = _0x577035;
                        let _0xb5e99f = this['scene'][_0x50e402(0x18bd)][_0x50e402(0x1791)]('vfx');
                        _0xb5e99f[_0x50e402(0xb4a)](this[_0x50e402(0x6d2)]['renderer']['height']);
                        let _0x31ac52 = _0xb5e99f[_0x50e402(0x14c0)]({
                            'frame': _0xa92300,
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x4b0,
                            'rotate': {
                                'start': 0x0,
                                'end': 0x708,
                                'ease': 'Sine.easeInOut'
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x1f
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x50,
                            'scale': {
                                'start': 0x4,
                                'end': 0.1
                            },
                            'frequency': 0x50,
                            'tint': {
                                'onEmit': (_0x142209, _0xb0ccd2, _0x5710e1) => this['onEmitcustomTint'](_0x142209, _0xb0ccd2, _0x5710e1)
                            },
                            'on': !0x1
                        });
                        this['SeasonParticles']['push'](_0xb5e99f), this['SeasonEmitters']['push'](_0x31ac52);
                    } ['OnRecycle']() {
                        const _0x136991 = _0x577035;
                        super['OnRecycle'](), this['body'][_0x136991(0xdf6)](0x10), this[_0x136991(0xcf9)]['enable'] = !0x0, this['setVisible'](!0x1), this['season'] = this[_0x136991(0x19c4)] % 0x5, this[_0x136991(0x4db)]['setFrame'](this['kanjiFrames'][this[_0x136991(0x184f)]]), this['setAlpha'](0x1), this['setScale'](this['weapon'][_0x136991(0x5f5)]), this[_0x136991(0x68f)]['setSpeed']({
                            'min': 0x32 * this[_0x136991(0x4a1)]['PArea'],
                            'max': 0x64 * this['weapon']['PArea']
                        }), this[_0x136991(0x1aad)][this[_0x136991(0x184f)]][_0x136991(0xb43)]({
                            'min': 0x5 * this[_0x136991(0x4a1)][_0x136991(0x5f5)],
                            'max': 0xa * this[_0x136991(0x4a1)][_0x136991(0x5f5)]
                        });
                        var _0x3b4e41 = new Phaser[(_0x136991(0x10d2))][(_0x136991(0xf29))](0x0, 0x0, Math['max'](0x20, 0x10 * this[_0x136991(0x4a1)][_0x136991(0x5f5)]));
                        this['SeasonEmitters'][this['season']]['setEmitZone']({
                            'type': 'random',
                            'source': _0x3b4e41
                        }), this['isCullable'] = !0x1, _0x519a5d[_0x136991(0xd2c)][_0x136991(0x1043)][_0x136991(0x6d2)][_0x136991(0x915)][_0x136991(0x17fb)](this[_0x136991(0x12a3)]), this[_0x136991(0x12a3)] = _0x519a5d[_0x136991(0xd2c)]['Core']['scene'][_0x136991(0x915)]['addEvent']({
                            'delay': 0x1f4,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x858976 = _0x136991;
                                _0x519a5d['default'][_0x858976(0x1043)]['scene'][_0x858976(0x915)][_0x858976(0x17fb)](this['ExpireTimer']), this['DeSpawn']();
                            }
                        }), this[_0x136991(0x1630)]();
                    } ['TryDetonate']() {
                        const _0x242034 = _0x577035;
                        var _0x391fd4, _0x2f1b5b, _0x124e7c, _0x5d800b, _0x16df8c;
                        this[_0x242034(0x1aad)][this[_0x242034(0x184f)]][_0x242034(0x108b)](this['x'], this['y']);
                        let _0x4d7d04 = _0x23a078['default'][_0x242034(0xf0a)],
                            _0x15f35c = 0x1f4;
                        switch (this[_0x242034(0x184f)]) {
                            case 0x0:
                                _0x4d7d04 = _0x23a078[_0x242034(0xd2c)][_0x242034(0xf0a)];
                                break;
                            case 0x1:
                                _0x4d7d04 = _0x23a078['default'][_0x242034(0x18c5)], _0x15f35c = 0x1770;
                                break;
                            case 0x2:
                                _0x4d7d04 = _0x23a078['default'][_0x242034(0x1290)];
                                break;
                            case 0x3:
                                _0x4d7d04 = _0x23a078[_0x242034(0xd2c)][_0x242034(0x1944)];
                                break;
                            case 0x4:
                                _0x4d7d04 = _0x23a078[_0x242034(0xd2c)][_0x242034(0xc35)], _0x15f35c = 0x1770;
                        }
                        _0x519a5d[_0x242034(0xd2c)]['Sound'][_0x242034(0x7f6)](_0x4d7d04, {
                            'volume': 0.5
                        }, _0x15f35c, 0x1), _0x519a5d[_0x242034(0xd2c)][_0x242034(0x1043)][_0x242034(0x14d8)][_0x242034(0x49c)] && (null === (_0x391fd4 = this[_0x242034(0x1995)]) || void 0x0 === _0x391fd4 || _0x391fd4[_0x242034(0x1a34)](), this['tween1'] = this['scene'][_0x242034(0x12a1)]['add']({
                            'targets': this[_0x242034(0x10a0)],
                            'scale': this['weapon'][_0x242034(0x5f5)],
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x3f2a72 = _0x242034;
                                this[_0x3f2a72(0x10a0)][_0x3f2a72(0x183f)](!0x0), this[_0x3f2a72(0x10a0)]['setScale'](0x0);
                            },
                            'onComplete': () => {
                                const _0xdcf15d = _0x242034;
                                this[_0xdcf15d(0x10a0)][_0xdcf15d(0x183f)](!0x1);
                            },
                            'onUpdate': () => {
                                const _0x53df46 = _0x242034;
                                this[_0x53df46(0x10a0)]['x'] = this['x'], this[_0x53df46(0x10a0)]['y'] = this['y'];
                            }
                        }), null === (_0x2f1b5b = this[_0x242034(0x15fa)]) || void 0x0 === _0x2f1b5b || _0x2f1b5b['stop'](), this[_0x242034(0x15fa)] = this['scene'][_0x242034(0x12a1)]['add']({
                            'targets': this['rainbow'],
                            'scale': this[_0x242034(0x4a1)]['PArea'],
                            'angle': 0x168,
                            'duration': 0xfa,
                            'onStart': () => {
                                const _0x511354 = _0x242034;
                                this[_0x511354(0xeb4)][_0x511354(0x183f)](!0x0), this[_0x511354(0xeb4)][_0x511354(0x8a2)](0x0), this['rainbow']['setAngle'](0x0);
                            },
                            'onComplete': () => {
                                const _0x2f17ca = _0x242034;
                                this[_0x2f17ca(0xeb4)][_0x2f17ca(0x183f)](!0x1);
                            },
                            'onUpdate': () => {
                                const _0x43f8ed = _0x242034;
                                this[_0x43f8ed(0xeb4)]['x'] = this['x'], this['rainbow']['y'] = this['y'];
                            }
                        }), null === (_0x124e7c = this['tween3']) || void 0x0 === _0x124e7c || _0x124e7c[_0x242034(0x1a34)](), this['tween3'] = this[_0x242034(0x6d2)][_0x242034(0x12a1)]['add']({
                            'targets': this['rays'],
                            'scale': 1.2 * this[_0x242034(0x4a1)][_0x242034(0x5f5)],
                            'duration': 0x3c,
                            'onStart': () => {
                                const _0xb78faa = _0x242034;
                                this[_0xb78faa(0xa0a)][_0xb78faa(0x183f)](!0x0), this['rays'][_0xb78faa(0x8a2)](0x0), this['rays']['setAngle'](0x0);
                            },
                            'onComplete': () => {
                                const _0x52a638 = _0x242034;
                                this[_0x52a638(0xa0a)]['setVisible'](!0x1);
                            },
                            'onUpdate': () => {
                                const _0x2eeec6 = _0x242034;
                                this['rays']['x'] = this['x'], this[_0x2eeec6(0xa0a)]['y'] = this['y'];
                            }
                        })), null === (_0x5d800b = this[_0x242034(0xdf9)]) || void 0x0 === _0x5d800b || _0x5d800b[_0x242034(0x1a34)](), this['tween4'] = this['scene'][_0x242034(0x12a1)][_0x242034(0x18bd)]({
                            'targets': this[_0x242034(0x4db)],
                            'scale': 0x2,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x1837a6 = _0x242034;
                                this[_0x1837a6(0x4db)][_0x1837a6(0x183f)](!0x0), this[_0x1837a6(0x4db)]['setScale'](0x0), this[_0x1837a6(0x4db)][_0x1837a6(0xdab)](0x1), this[_0x1837a6(0x4db)][_0x1837a6(0xb34)](0xffffff);
                            },
                            'onComplete': () => {
                                const _0x3215c2 = _0x242034;
                                var _0x151c49;
                                null === (_0x151c49 = this['tween5']) || void 0x0 === _0x151c49 || _0x151c49['stop'](), this[_0x3215c2(0x1aa6)] = this[_0x3215c2(0x6d2)]['tweens']['add']({
                                    'targets': this['kanji'],
                                    'scale': 0x4,
                                    'duration': 0xc8,
                                    'alpha': 0x0,
                                    'tint': 0x0
                                });
                            },
                            'onUpdate': () => {
                                const _0x253f56 = _0x242034;
                                this[_0x253f56(0x4db)]['x'] = this['x'], this['kanji']['y'] = this['y'];
                            }
                        }), 0x4 === this[_0x242034(0x184f)] && (null === (_0x16df8c = this[_0x242034(0x688)]) || void 0x0 === _0x16df8c || _0x16df8c['stop'](), this[_0x242034(0x688)] = this[_0x242034(0x6d2)]['tweens'][_0x242034(0x18bd)]({
                            'targets': this[_0x242034(0x16df)],
                            'scale': this[_0x242034(0x6d2)]['renderer'][_0x242034(0x173c)] / 0x1e0,
                            'duration': 0x64,
                            'onStart': () => {
                                const _0x21a612 = _0x242034;
                                this['lightning']['setVisible'](!0x0), this[_0x21a612(0x16df)]['setScale'](0x0), this['lightning'][_0x21a612(0xdab)](0x1);
                            },
                            'onComplete': () => {
                                const _0x18d566 = _0x242034;
                                var _0x302916;
                                null === (_0x302916 = this['tweenLightningReturn']) || void 0x0 === _0x302916 || _0x302916['stop'](), this['tweenLightningReturn'] = this[_0x18d566(0x6d2)][_0x18d566(0x12a1)]['add']({
                                    'targets': this[_0x18d566(0x16df)],
                                    'alpha': 0x0,
                                    'tint': 0x0,
                                    'duration': 0x64
                                });
                            },
                            'onUpdate': () => {
                                const _0x302adf = _0x242034;
                                this[_0x302adf(0x16df)]['x'] = this['x'], this['lightning']['y'] = this['y'];
                            }
                        }));
                    } ['Update'](_0x1118e8) {
                        const _0x43ee64 = _0x577035;
                        super[_0x43ee64(0xa9f)](_0x1118e8), this['x'] = this['trueWeapon'][_0x43ee64(0xc9f)][this[_0x43ee64(0x19c4)]]['x'], this['y'] = this[_0x43ee64(0x1234)][_0x43ee64(0xc9f)][this[_0x43ee64(0x19c4)]]['y'], this[_0x43ee64(0xb4a)](-this[_0x43ee64(0x6d2)]['renderer'][_0x43ee64(0x140e)]);
                        for (let _0x4df043 = 0x0; _0x4df043 < this[_0x43ee64(0xc75)]['length']; _0x4df043++) {
                            const _0x445b04 = this[_0x43ee64(0xc75)][_0x4df043];
                            _0x445b04['x'] = this['x'], _0x445b04['y'] = this['y'];
                        }
                    } ['DeSpawn']() {
                        const _0x224248 = _0x577035;
                        this[_0x224248(0x177d)] = !0x0, super[_0x224248(0x14fb)]();
                    }
                }
                _0x12b01f['B_FourSeasons2'] = _0x34fcb7, _0x34fcb7['textureIndex'] = 0x0, _0x12b01f['default'] = _0x34fcb7;
            };
