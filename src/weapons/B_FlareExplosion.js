// Module 0x8355
// Args: _0x3bae45, _0x50623a, _0x145099

export default (_0x3bae45, _0x50623a, _0x145099) => {
                'use strict';
                const _0x4ed4ba = a0_0x6932;
                var _0x34379e = this && this['__importDefault'] || function(_0x5d35fa) {
                    const _0x4aee21 = _0x4ed4ba;
                    return _0x5d35fa && _0x5d35fa[_0x4aee21(0x16f1)] ? _0x5d35fa : {
                        'default': _0x5d35fa
                    };
                };
                Object['defineProperty'](_0x50623a, '__esModule', {
                    'value': !0x0
                }), _0x50623a['B_FlareExplosion'] = void 0x0;
                const _0x3c4f67 = _0x34379e(_0x145099(0xa14d)),
                    _0x22a404 = _0x34379e(_0x145099(0x5f07)),
                    _0x509a85 = _0x145099(0x18304),
                    _0x4374ad = _0x34379e(_0x145099(0x1fd7)),
                    _0x19ae97 = _0x34379e(_0x145099(0x54e3));
                class _0x40f5f0 extends _0x3c4f67['default'] {
                    constructor(_0x4a6a06, _0x4f85b7, _0x386540, _0x1a99f3, _0x6e9faf) {
                        const _0x34fcc2 = _0x4ed4ba;
                        super(_0x4a6a06, _0x4f85b7, _0x386540, 'vfx', 'WhiteDot.png', _0x1a99f3, _0x6e9faf), this[_0x34fcc2(0x154c)] = !0x0, this['sideNames'] = ['FlareSide1.png', 'FlareSide2.png', 'FlareCircle1.png', 'FlareCircle2.png', 'FlareCircle3.png'], this[_0x34fcc2(0x253)] = ['FlareStar1.png', 'FlareStar2.png', 'FlareStar3.png', 'FlareStar4.png', 'FlareStar5.png', 'FlareStar6.png'], this[_0x34fcc2(0x18f9)] = ['FlareFlat1.png', 'FlareFlat2.png', 'FlareFlat3.png', 'FlareFlat4.png', 'FlareFlat5.png'], this[_0x34fcc2(0x144f)] = [_0x19ae97[_0x34fcc2(0xd2c)]['VESPERS'], _0x19ae97[_0x34fcc2(0xd2c)][_0x34fcc2(0x77f)], _0x19ae97['default'][_0x34fcc2(0x1426)], _0x19ae97['default'][_0x34fcc2(0xd55)], _0x19ae97[_0x34fcc2(0xd2c)][_0x34fcc2(0x1464)]], this[_0x34fcc2(0x3f6)] = this['scene']['add'][_0x34fcc2(0x568)](this['x'], this['y'], 'vfx', 'FlareStar1.png')[_0x34fcc2(0x183f)](!0x1)['setBlendMode'](_0x509a85['BlendModes']['ADD'])['setScale'](0.5)[_0x34fcc2(0xf8e)](0.5, 0.5), this[_0x34fcc2(0x128a)] = this[_0x34fcc2(0x6d2)][_0x34fcc2(0x18bd)][_0x34fcc2(0x568)](this['x'], this['y'], 'vfx', 'FlareSide1.png')['setVisible'](!0x1)[_0x34fcc2(0x11c7)](_0x509a85['BlendModes'][_0x34fcc2(0x1811)])['setScale'](0.5)[_0x34fcc2(0xf8e)](0x1, 0.5), this['flatSprite'] = this[_0x34fcc2(0x6d2)][_0x34fcc2(0x18bd)]['image'](this['x'], this['y'], 'vfx', 'FlareFlat1.png')[_0x34fcc2(0x183f)](!0x1)[_0x34fcc2(0x11c7)](_0x509a85['BlendModes'][_0x34fcc2(0x1811)])[_0x34fcc2(0x8a2)](0.5)['setOrigin'](0.5, 0.5), this['exploSprite'] = this[_0x34fcc2(0x6d2)]['add']['sprite'](this['x'], this['y'], 'vfx', 's_pfx_rainbow_64w.png')[_0x34fcc2(0xf8e)](0.5)[_0x34fcc2(0x183f)](!0x1)['setBlendMode'](_0x509a85[_0x34fcc2(0x10fc)][_0x34fcc2(0x1811)])[_0x34fcc2(0xdab)](0.25)[_0x34fcc2(0x9b5)](0x5a), this['isLight'] = -0x1 === this['darkWeapons']['indexOf'](this[_0x34fcc2(0x4a1)]['bulletType']), this['starSprite']['setTint'](this[_0x34fcc2(0x154c)] ? 0xffffff : 0xff8888), this['sideSprite'][_0x34fcc2(0xb34)](this[_0x34fcc2(0x154c)] ? 0xffffff : 0xff8888), this['isLight'] || this['flatSprite'][_0x34fcc2(0x652)](0x220022), this['exploSprite'][_0x34fcc2(0x381)](this[_0x34fcc2(0x154c)] ? 's_pfx_rainbow_64w.png' : 's_pfx_rainbow_64u.png'), this[_0x34fcc2(0x652)](this[_0x34fcc2(0x154c)] ? 0xffffff : 0x220022), this['particlesManager'] = this[_0x34fcc2(0x6d2)][_0x34fcc2(0x18bd)][_0x34fcc2(0x1791)]('vfx'), this[_0x34fcc2(0x125b)] = this['particlesManager']['createEmitter']({
                            'frame': ['WhiteDot.png'],
                            'quantity': 0xa,
                            'lifespan': 0xfa,
                            'alpha': {
                                'start': 0.7,
                                'end': 0x0
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x2
                            },
                            'speed': {
                                'min': 0xc8,
                                'max': 0x190
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'tint': this['isLight'] ? 0xffffff : 0x220022,
                            'on': !0x1
                        }), this['setVisible'](!0x1);
                    } ['OnRecycle']() {
                        const _0x1dd259 = _0x4ed4ba;
                        super[_0x1dd259(0x5ce)](), this[_0x1dd259(0xcf9)][_0x1dd259(0x543)] = !0x0, this['body'][_0x1dd259(0x18dc)](0x1, 0x20), this[_0x1dd259(0x183f)](!0x1), this['starSprite'][_0x1dd259(0x381)](Phaser[_0x1dd259(0x24f)][_0x1dd259(0x82a)][_0x1dd259(0x198c)](this[_0x1dd259(0x253)])), this['sideSprite']['setFrame'](Phaser['Math'][_0x1dd259(0x82a)]['pick'](this[_0x1dd259(0x110e)])), this['flatSprite']['setFrame'](Phaser[_0x1dd259(0x24f)]['RND'][_0x1dd259(0x198c)](this[_0x1dd259(0x18f9)])), this['starSprite']['x'] = this['x'], this[_0x1dd259(0x128a)]['x'] = this['x'], this['flatSprite']['x'] = this['x'], this['exploSprite']['x'] = this['x'], this[_0x1dd259(0x3f6)]['y'] = this['y'], this['sideSprite']['y'] = this['y'], this['flatSprite']['y'] = this['y'], this[_0x1dd259(0x235)]['y'] = this['y'], this['starSprite']['setScale'](0.5 * this[_0x1dd259(0x4a1)]['PArea']), this[_0x1dd259(0x128a)][_0x1dd259(0x8a2)](0.5 * this[_0x1dd259(0x4a1)][_0x1dd259(0x5f5)]), this['flatSprite'][_0x1dd259(0x8a2)](0.5 * this[_0x1dd259(0x4a1)][_0x1dd259(0x5f5)]), this['PfxEmitter'][_0x1dd259(0x726)](this['x'], this['y'])[_0x1dd259(0xb43)]({
                            'min': 0xc8 * this[_0x1dd259(0x4a1)][_0x1dd259(0x5f5)],
                            'max': 0x190 * this['weapon']['PArea']
                        }), this['Explode']();
                    } ['Explode']() {
                        const _0x3385dd = _0x4ed4ba;
                        var _0x5bce34, _0x56582a, _0x56aee1, _0x4a9a29, _0xb4dcc4;
                        this['PfxEmitter'][_0x3385dd(0x1aa2)]();
                        let _0x5c36fa = 0x100 * this['weapon'][_0x3385dd(0x5f5)];
                        null === (_0x5bce34 = this[_0x3385dd(0x660)]) || void 0x0 === _0x5bce34 || _0x5bce34['stop'](), this['scaleTween'] = this[_0x3385dd(0x6d2)][_0x3385dd(0x12a1)][_0x3385dd(0x18bd)]({
                            'targets': this,
                            'scaleX': _0x5c36fa,
                            'duration': 0x96,
                            'onStart': () => {
                                this['setScale'](0x1, 0x1);
                            },
                            'onComplete': () => {
                                const _0x14d560 = _0x3385dd;
                                this[_0x14d560(0xcf9)][_0x14d560(0x543)] = !0x1, this['FadeOut']();
                            }
                        }), _0x22a404['default'][_0x3385dd(0x1043)]['PlayerOptions'][_0x3385dd(0x49c)] && (null === (_0x56582a = this['flatTween']) || void 0x0 === _0x56582a || _0x56582a[_0x3385dd(0x1a34)](), this[_0x3385dd(0x3eb)] = this[_0x3385dd(0x6d2)][_0x3385dd(0x12a1)]['add']({
                            'targets': this[_0x3385dd(0x1776)],
                            'alpha': 0x1,
                            'scale': 0.7 * this[_0x3385dd(0x4a1)]['PArea'],
                            'yoyo': !0x0,
                            'duration': 0x96,
                            'onStart': () => {
                                const _0x3b9cbe = _0x3385dd;
                                this[_0x3b9cbe(0x1776)]['setScale'](0.5 * this[_0x3b9cbe(0x4a1)][_0x3b9cbe(0x5f5)]), this[_0x3b9cbe(0x1776)][_0x3b9cbe(0xdab)](0x0), this['flatSprite']['setVisible'](!0x0);
                            }
                        }), null === (_0x56aee1 = this[_0x3385dd(0x18ca)]) || void 0x0 === _0x56aee1 || _0x56aee1['stop'](), this[_0x3385dd(0x18ca)] = this[_0x3385dd(0x6d2)]['tweens']['add']({
                            'targets': this[_0x3385dd(0x128a)],
                            'alpha': 0x1,
                            'x': this['x'] + 0x20 * this['weapon'][_0x3385dd(0x5f5)],
                            'yoyo': !0x0,
                            'duration': 0x96,
                            'onStart': () => {
                                const _0xba2a27 = _0x3385dd;
                                this[_0xba2a27(0x128a)][_0xba2a27(0xdab)](0x0), this['sideSprite'][_0xba2a27(0x183f)](!0x0);
                            }
                        }), null === (_0x4a9a29 = this['starTween']) || void 0x0 === _0x4a9a29 || _0x4a9a29[_0x3385dd(0x1a34)](), this[_0x3385dd(0x13ab)] = this[_0x3385dd(0x6d2)]['tweens']['add']({
                            'targets': this[_0x3385dd(0x3f6)],
                            'alpha': 0x1,
                            'angle': 0x168,
                            'x': this['x'] - 0x10 * this['weapon'][_0x3385dd(0x5f5)],
                            'yoyo': !0x0,
                            'duration': 0x96,
                            'onStart': () => {
                                const _0x3dc488 = _0x3385dd;
                                this['starSprite'][_0x3dc488(0x8a2)](0.5 * this['weapon'][_0x3dc488(0x5f5)]), this[_0x3dc488(0x3f6)][_0x3dc488(0xdab)](0x0), this[_0x3dc488(0x3f6)][_0x3dc488(0x9b5)](0x0), this['starSprite'][_0x3dc488(0x183f)](!0x0);
                            }
                        })), null === (_0xb4dcc4 = this[_0x3385dd(0x10e7)]) || void 0x0 === _0xb4dcc4 || _0xb4dcc4[_0x3385dd(0x1a34)](), this['exploTween'] = _0x22a404['default'][_0x3385dd(0x1043)][_0x3385dd(0x6d2)][_0x3385dd(0x12a1)][_0x3385dd(0x18bd)]({
                            'targets': this['exploSprite'],
                            'scaleY': _0x5c36fa / 0x34,
                            'scaleX': 0x1,
                            'duration': 0x96,
                            'onStart': () => {
                                const _0x5d4bfd = _0x3385dd;
                                this['exploSprite']['setScale'](0x1, 0x0), this[_0x5d4bfd(0x235)][_0x5d4bfd(0x183f)](!0x0);
                            },
                            'onComplete': () => {
                                this['exploSprite']['setVisible'](!0x1);
                            }
                        }), _0x22a404['default']['Sound']['PlaySound'](_0x4374ad['default'][_0x3385dd(0xfae)], {
                            'detune': -0x64 * this[_0x3385dd(0x19c4)],
                            'volume': 0.8
                        }, 0xc8, 0x1);
                    } ['FadeOut']() {
                        const _0x204af6 = _0x4ed4ba;
                        this[_0x204af6(0x125b)]['stop'](), this['fadeoutTween'] = this[_0x204af6(0x6d2)][_0x204af6(0x12a1)][_0x204af6(0x18bd)]({
                            'targets': [this],
                            'alpha': 0x0,
                            'duration': 0x12c,
                            'onComplete': () => {
                                const _0x64621e = _0x204af6;
                                this[_0x64621e(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        var _0x20d816;
                        super['DeSpawn'](), null === (_0x20d816 = this['fadeoutTween']) || void 0x0 === _0x20d816 || _0x20d816['stop']();
                    }
                }
                _0x50623a['B_FlareExplosion'] = _0x40f5f0, _0x50623a['default'] = _0x40f5f0;
            };
