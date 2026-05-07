// Module 0x59b5
// Args: _0x1aba78, _0x5987e7, _0x2d1375

export default (_0x1aba78, _0x5987e7, _0x2d1375) => {
                'use strict';
                const _0x3ffd01 = a0_0x6932;
                var _0x267f6a = this && this['__createBinding'] || (Object['create'] ? function(_0x20df3f, _0x4cb2c0, _0x2c0677, _0x586938) {
                        const _0x355fa0 = _0x3ffd01;
                        void 0x0 === _0x586938 && (_0x586938 = _0x2c0677);
                        var _0x5ed9d6 = Object[_0x355fa0(0x1687)](_0x4cb2c0, _0x2c0677);
                        _0x5ed9d6 && !('get' in _0x5ed9d6 ? !_0x4cb2c0['__esModule'] : _0x5ed9d6[_0x355fa0(0x11bf)] || _0x5ed9d6[_0x355fa0(0xf70)]) || (_0x5ed9d6 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x4cb2c0[_0x2c0677];
                            }
                        }), Object['defineProperty'](_0x20df3f, _0x586938, _0x5ed9d6);
                    } : function(_0x11fdb3, _0xe0a782, _0x5b1625, _0x2dcdbf) {
                        void 0x0 === _0x2dcdbf && (_0x2dcdbf = _0x5b1625), _0x11fdb3[_0x2dcdbf] = _0xe0a782[_0x5b1625];
                    }),
                    _0x1ea8d2 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x8b8153, _0x25dc63) {
                        Object['defineProperty'](_0x8b8153, 'default', {
                            'enumerable': !0x0,
                            'value': _0x25dc63
                        });
                    } : function(_0x3de30f, _0x4f73bb) {
                        _0x3de30f['default'] = _0x4f73bb;
                    }),
                    _0x25e853 = this && this['__importStar'] || function(_0x564d3f) {
                        const _0x396b1a = _0x3ffd01;
                        if (_0x564d3f && _0x564d3f[_0x396b1a(0x16f1)]) return _0x564d3f;
                        var _0x36bc4b = {};
                        if (null != _0x564d3f) {
                            for (var _0x3873c7 in _0x564d3f) 'default' !== _0x3873c7 && Object[_0x396b1a(0x977)][_0x396b1a(0x2cf)]['call'](_0x564d3f, _0x3873c7) && _0x267f6a(_0x36bc4b, _0x564d3f, _0x3873c7);
                        }
                        return _0x1ea8d2(_0x36bc4b, _0x564d3f), _0x36bc4b;
                    },
                    _0x4a9d37 = this && this['__importDefault'] || function(_0x5be67e) {
                        return _0x5be67e && _0x5be67e['__esModule'] ? _0x5be67e : {
                            'default': _0x5be67e
                        };
                    };
                Object['defineProperty'](_0x5987e7, '__esModule', {
                    'value': !0x0
                });
                const _0xa25521 = _0x2d1375(0x18304),
                    _0x894df9 = _0x2d1375(0x16c14),
                    _0x3f2186 = _0x4a9d37(_0x2d1375(0xccae)),
                    _0x5fc4de = _0x25e853(_0x2d1375(0x5f07)),
                    _0x2c5a19 = _0x4a9d37(_0x2d1375(0x169b4)),
                    _0x43cb6f = _0x4a9d37(_0x2d1375(0x1fd7)),
                    _0x69f586 = _0x4a9d37(_0x2d1375(0x5103)),
                    _0x2b4dc7 = _0x4a9d37(_0x2d1375(0x15dd)),
                    _0x56c861 = _0x4a9d37(_0x2d1375(0xdfbc));
                class _0x595d97 extends Phaser['Scene'] {
                    constructor() {
                        const _0x4f49b2 = _0x3ffd01;
                        super({
                            'key': _0x2c5a19[_0x4f49b2(0xd2c)][_0x4f49b2(0x169a)]
                        }), this[_0x4f49b2(0x842)] = new Phaser[(_0x4f49b2(0x24f))][(_0x4f49b2(0x1551))](0x0, 0x0), this[_0x4f49b2(0x194d)] = !0x1;
                    } ['preload']() {
                        const _0x30d351 = _0x3ffd01;
                        _0x5fc4de[_0x30d351(0xd2c)]['ApplyMenuResolution']();
                    } ['customAngle'](_0x2efe4a, _0x204451, _0x1f99a5) {
                        return _0x2efe4a['angle'] + 0x5;
                    } ['onEmitcustomAngle'](_0x3aab3c, _0x536464, _0x727caa) {
                        const _0x3ff15f = _0x3ffd01;
                        return 0x168 * Math[_0x3ff15f(0x9ad)]();
                    } ['create']() {
                        const _0x25380f = _0x3ffd01;
                        this[_0x25380f(0xa2e)] = _0x2b4dc7[_0x25380f(0xd2c)][_0x5fc4de[_0x25380f(0xd2c)]['Core'][_0x25380f(0x3b3)]][0x0];
                        const _0x1c916c = this['anims'][_0x25380f(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this[_0x25380f(0x15ca)] = this['add']['sprite'](0.5 * this['renderer'][_0x25380f(0x173c)], 0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x140e)], 'vfx', 'Burst1.png'), this[_0x25380f(0x15ca)]['anims']['create']({
                            'key': 'enter',
                            'frames': _0x1c916c,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), this[_0x25380f(0x15ca)]['visible'] = !0x1, this[_0x25380f(0x15ca)][_0x25380f(0x8a2)](0x8), this[_0x25380f(0x15ca)][_0x25380f(0xb4a)](0x3e8), this['OnEnterAnimation']['setTintFill'](0x0), this['BGFader'] = this['add']['image'](0x0, 0x0, 'UI', 'blackDot.png')[_0x25380f(0xf8e)](0x0)[_0x25380f(0xdab)](0x0)[_0x25380f(0x8a2)](this[_0x25380f(0x12f9)]['width'], this[_0x25380f(0x12f9)][_0x25380f(0x140e)])[_0x25380f(0xb4a)](-0xb), this['tweens'][_0x25380f(0x18bd)]({
                            'targets': this[_0x25380f(0x1518)],
                            'alpha': 0.9,
                            'duration': 0x12c
                        }), this['PfxEmitter'] = this[_0x25380f(0x18bd)][_0x25380f(0x1791)]('vfx'), this[_0x25380f(0x125b)]['depth'] = -0xb, this['blackParticles'] = this[_0x25380f(0x125b)]['createEmitter']({
                            'frame': {
                                'frames': ['PfxGreen.png', 'PfxHoly.png', 'PfxBlue.png', 'PfxColor1.png', 'PfxColor2.png']
                            },
                            'y': this[_0x25380f(0x12f9)]['height'],
                            'x': {
                                'min': 0x0,
                                'max': this['renderer'][_0x25380f(0x173c)]
                            },
                            'lifespan': 0x3e8,
                            'speedY': {
                                'min': -0x12c,
                                'max': -0x258
                            },
                            'scale': {
                                'min': 0x2,
                                'max': 0x4,
                                'start': 0x4,
                                'end': 0x0
                            },
                            'quantity': 0x8,
                            'tint': 0x0,
                            'blendMode': _0xa25521['BlendModes'][_0x25380f(0x2b9)],
                            'rotate': {
                                'onEmit': (_0x3abab4, _0x5b37ad, _0x5e5798) => this['onEmitcustomAngle'](_0x3abab4, _0x5b37ad, _0x5e5798),
                                'onUpdate': (_0x34e082, _0x1aaac6, _0x52fcfe) => this[_0x25380f(0x11f8)](_0x34e082, _0x1aaac6, _0x52fcfe)
                            }
                        });
                        var _0x367bfa = 0.8 * _0x5fc4de['SAFEAREA'][_0x25380f(0x173c)],
                            _0x266587 = 0.8 * _0x5fc4de[_0x25380f(0xd6b)];
                        this[_0x25380f(0x431)] = new _0x894df9['NineSlice'](this, _0x3f2186[_0x25380f(0xd2c)]['MenuBackground'], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x367bfa,
                            'height': _0x266587
                        }), this[_0x25380f(0x431)]['setPosition'](0.5 * this[_0x25380f(0x12f9)]['width'], 0.5 * this['renderer']['height']), this['background'][_0x25380f(0xf8e)](0.5), this[_0x25380f(0x431)]['setScale'](_0x69f586[_0x25380f(0xd2c)]['PixelScale']), this['background']['setDepth'](-0xa), this[_0x25380f(0x18bd)][_0x25380f(0x1a88)](this[_0x25380f(0x431)]), this[_0x25380f(0xea5)] = this[_0x25380f(0x18bd)]['image'](0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x173c)], 0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x140e)], 'UI', 'blackDot.png')[_0x25380f(0xf8e)](0.5)['setAlpha'](0.7)['setScale'](_0x367bfa, _0x266587)[_0x25380f(0xb4a)](-0x9), this[_0x25380f(0x16ac)] = new _0x894df9[(_0x25380f(0x1a31))](this, _0x3f2186[_0x25380f(0xd2c)][_0x25380f(0x83a)], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x367bfa / 0x2,
                            'height': _0x266587 / 0x2
                        }), this[_0x25380f(0x16ac)][_0x25380f(0x726)](0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x173c)], 0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x140e)]), this[_0x25380f(0x16ac)]['setOrigin'](0.5), this[_0x25380f(0x16ac)][_0x25380f(0x8a2)](0x2 * _0x69f586[_0x25380f(0xd2c)][_0x25380f(0x15db)]), this['backgroundOverlay']['setAlpha'](0x0), this['backgroundOverlay'][_0x25380f(0x11c7)](_0xa25521[_0x25380f(0x10fc)][_0x25380f(0x1811)]), this[_0x25380f(0x18bd)]['existing'](this[_0x25380f(0x16ac)]), this['TopLeft']['x'] = this[_0x25380f(0x431)]['x'] - 0.5 * this['background'][_0x25380f(0x173c)] * _0x69f586[_0x25380f(0xd2c)]['PixelScale'], this['TopLeft']['y'] = this['background']['y'] - 0.5 * this[_0x25380f(0x431)]['height'] * _0x69f586[_0x25380f(0xd2c)][_0x25380f(0x15db)];
                        var _0x2b9596 = 0.95 * _0x367bfa,
                            _0x571cb7 = 0.2 * _0x266587;
                        let _0x414093 = '';
                        _0x414093 += this[_0x25380f(0xa2e)]['prefix'] ? this[_0x25380f(0xa2e)][_0x25380f(0x1219)] + ' ' : '', _0x414093 += this['foundData']['charName'] ? this[_0x25380f(0xa2e)][_0x25380f(0x18e0)] + ' ' : '', _0x414093 += this[_0x25380f(0xa2e)]['surname'] ? this['foundData']['surname'] : '', this[_0x25380f(0x1752)] = new Phaser[(_0x25380f(0xbf2))]['Text'](this, 0.5 * this['renderer']['width'], this[_0x25380f(0x842)]['y'] + 0x2d, _0x5fc4de['default'][_0x25380f(0x1f1)]['getLang']('charFound_joins', [_0x414093]), {
                            'align': 'center',
                            'color': 'yellow'
                        })[_0x25380f(0x8a2)](1.5 * _0x69f586['default']['PixelScale'])[_0x25380f(0xf8e)](0.5)['setScale'](0x0, 0x1), _0x5fc4de[_0x25380f(0xd2c)]['Lang'][_0x25380f(0x14a8)](this[_0x25380f(0x1752)], !0x1, 0xfa), this['add']['existing'](this['header']);
                        var _0x221888 = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x2b9596,
                            'height': _0x571cb7
                        };
                        this[_0x25380f(0xa4b)] = new Phaser[(_0x25380f(0xbf2))][(_0x25380f(0x11dc))](this, 0x0, 0x0), this['panel'] = new _0x894df9['NineSlice'](this, {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x221888), this[_0x25380f(0x48e)]['x'] = 0x0, this['panel']['y'] = 0.5 * this[_0x25380f(0x12f9)]['height'] + 0.5 * _0x266587 - _0x571cb7 - 0xa;
                        let _0x4d1ecb = _0x2b4dc7[_0x25380f(0xd2c)][_0x5fc4de[_0x25380f(0xd2c)][_0x25380f(0x1043)]['Player'][_0x25380f(0x7fd)]],
                            _0x418302 = '';
                        _0x4d1ecb && (_0x418302 += _0x4d1ecb[0x0]['prefix'] ? _0x4d1ecb[0x0]['prefix'] + ' ' : '', _0x418302 += _0x4d1ecb[0x0][_0x25380f(0x18e0)] ? _0x4d1ecb[0x0]['charName'] + ' ' : '', _0x418302 += _0x4d1ecb[0x0]['surname'] ? _0x4d1ecb[0x0][_0x25380f(0x59d)] : '');
                        let _0x405698 = new Phaser[(_0x25380f(0xbf2))]['Text'](this, this['panel']['x'] + 0xa, this['panel']['y'] + 0xa, _0x5fc4de['default'][_0x25380f(0x1f1)][_0x25380f(0xb10)]('charFound_another', [_0x418302]), {})[_0x25380f(0xb4a)](this['panel']['depth'] + 0x1)[_0x25380f(0x15fb)](_0x2b9596 - 0xa);
                        this[_0x25380f(0xa4b)][_0x25380f(0x18bd)](this[_0x25380f(0x48e)]), this[_0x25380f(0xa4b)][_0x25380f(0x18bd)](_0x405698), this['panelGroup']['setScale'](0x1), this[_0x25380f(0xa4b)]['x'] = -this['TopLeft']['x'] + -0.025 * _0x367bfa - _0x2b9596, this[_0x25380f(0x18bd)][_0x25380f(0x1a88)](this['panelGroup']), this['OkButton'] = new _0x894df9[(_0x25380f(0x1a31))](this, _0x3f2186['default']['OptionsButton'], {
                            'x': this[_0x25380f(0x431)]['x'],
                            'y': this['renderer'][_0x25380f(0x140e)] - 0x40,
                            'width': 0x60,
                            'height': 0x20
                        })[_0x25380f(0xf8e)](0.5)[_0x25380f(0x8a2)](0x0)[_0x25380f(0x9b5)](-0x5a), this['add'][_0x25380f(0x1a88)](this[_0x25380f(0xd7d)]), this['OkText'] = new Phaser[(_0x25380f(0xbf2))][(_0x25380f(0x1ae9))](this, this['OkButton']['x'], this[_0x25380f(0xd7d)]['y'], _0x5fc4de[_0x25380f(0xd2c)]['Lang'][_0x25380f(0xb10)]('charFound_ok'), {})[_0x25380f(0xf8e)](0.5, 0.5)[_0x25380f(0x8a2)](0x0)['setAngle'](-0x5a), _0x5fc4de['default'][_0x25380f(0x1f1)][_0x25380f(0x14a8)](this[_0x25380f(0x15a3)], !0x1, 0x50), this['add'][_0x25380f(0x1a88)](this[_0x25380f(0x15a3)]), this[_0x25380f(0x431)][_0x25380f(0x8a2)](-0.2, -0.1), this['background'][_0x25380f(0x9b5)](0xb4), this[_0x25380f(0xd9b)] = this['tweens']['add']({
                            'targets': this[_0x25380f(0x431)],
                            'scale': _0x69f586['default'][_0x25380f(0x15db)],
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1
                        }), this['IsInitialised'] = !0x0, this[_0x25380f(0x12a1)][_0x25380f(0x18bd)]({
                            'targets': this[_0x25380f(0xa4b)],
                            'x': this[_0x25380f(0x842)]['x'] + 0.025 * _0x367bfa,
                            'duration': 0x96,
                            'scale': 0x1,
                            'ease': 'Linear',
                            'delay': 0xfa0,
                            'onComplete': () => {
                                const _0x35014a = _0x25380f;
                                this[_0x35014a(0x915)][_0x35014a(0x12b8)]({
                                    'delay': 0xdac,
                                    'callback': this['enablePanelsInput'],
                                    'callbackScope': this,
                                    'loop': !0x1
                                });
                            }
                        }), this[_0x25380f(0x164e)] = this[_0x25380f(0x18bd)][_0x25380f(0x105b)](0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x173c)], -0x100, this[_0x25380f(0xa2e)][_0x25380f(0xacb)], this['foundData'][_0x25380f(0x4f0)]), this[_0x25380f(0x164e)]['setScale'](0x4, 0x8), this[_0x25380f(0x164e)]['setTintFill'](0x0), this[_0x25380f(0x164e)][_0x25380f(0xb4a)](this['panel'][_0x25380f(0x16c6)] + 0x3), this[_0x25380f(0xe27)] = this['add']['sprite'](0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x173c)], 0.5 * this[_0x25380f(0x12f9)][_0x25380f(0x140e)], this[_0x25380f(0xa2e)]['textureName'], this['foundData'][_0x25380f(0x4f0)]), this['ColorSprite'][_0x25380f(0x8a2)](0x2), this['ColorSprite']['setDepth'](this[_0x25380f(0x48e)][_0x25380f(0x16c6)] + 0x3), this[_0x25380f(0xe27)][_0x25380f(0xe71)] = 0x0, this['tweens']['add']({
                            'targets': this[_0x25380f(0x164e)],
                            'scale': 0x2,
                            'y': 0.5 * this['renderer']['height'],
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x450a3a = _0x25380f;
                                _0x5fc4de['default'][_0x450a3a(0x1043)][_0x450a3a(0x14d8)][_0x450a3a(0x49c)] ? (this[_0x450a3a(0x15ca)][_0x450a3a(0x183f)](!0x0), this[_0x450a3a(0x15ca)][_0x450a3a(0x902)]('enter')) : this[_0x450a3a(0x15ca)]['setVisible'](!0x1), this['playGhosts']();
                            }
                        });
                    } ['playReveal']() {
                        const _0x21fd26 = _0x3ffd01;
                        this[_0x21fd26(0xe48)](), this[_0x21fd26(0xa0a)] = new Array(), this['raysTween'] = new Array(), this['AddRays'](), this[_0x21fd26(0x915)]['addEvent']({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x327008 = _0x21fd26;
                                this[_0x327008(0x796)]();
                            }
                        }), _0x5fc4de[_0x21fd26(0xd2c)][_0x21fd26(0x1043)][_0x21fd26(0x3b3)] === _0x56c861[_0x21fd26(0xd2c)]['CONCETTA'] ? _0x5fc4de[_0x21fd26(0xd2c)][_0x21fd26(0x1267)][_0x21fd26(0x7f6)](_0x43cb6f[_0x21fd26(0xd2c)]['CFF4'], {
                            'volume': 1.2
                        }) : _0x5fc4de[_0x21fd26(0xd2c)][_0x21fd26(0x1043)][_0x21fd26(0x3b3)] === _0x56c861['default']['GIOVANNA'] && _0x5fc4de['default'][_0x21fd26(0x1267)][_0x21fd26(0x7f6)](_0x43cb6f['default'][_0x21fd26(0x96a)], {
                            'volume': 1.2
                        }), _0x5fc4de['default'][_0x21fd26(0x1043)][_0x21fd26(0x3b3)] === _0x56c861['default']['POPPEA'] ? _0x5fc4de['default'][_0x21fd26(0x1267)][_0x21fd26(0x7f6)](_0x43cb6f['default']['CFF3'], {
                            'volume': 1.2
                        }) : _0x5fc4de[_0x21fd26(0xd2c)]['Sound']['PlaySound'](_0x43cb6f['default'][_0x21fd26(0xf4b)], {
                            'volume': 1.2
                        }), this[_0x21fd26(0x12a1)][_0x21fd26(0x18bd)]({
                            'targets': this[_0x21fd26(0x1518)],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0xbb8,
                            'onStart': () => {
                                const _0xc32589 = _0x21fd26;
                                this['blackParticles'][_0xc32589(0x1a34)](), this['blackParticles'] = this['PfxEmitter'][_0xc32589(0x14c0)]({
                                    'frame': {
                                        'frames': ['PfxGreen.png', 'PfxHoly.png', 'PfxBlue.png', 'PfxColor1.png', 'PfxColor2.png']
                                    },
                                    'y': this[_0xc32589(0x12f9)][_0xc32589(0x140e)],
                                    'x': {
                                        'min': 0x0,
                                        'max': this[_0xc32589(0x12f9)]['width']
                                    },
                                    'lifespan': 0x3e8,
                                    'speedY': {
                                        'min': -0x12c,
                                        'max': -0x258
                                    },
                                    'scale': {
                                        'min': 0x2,
                                        'max': 0x4,
                                        'start': 0x4,
                                        'end': 0x0
                                    },
                                    'quantity': 0x8,
                                    'blendMode': _0xa25521['BlendModes']['ADD'],
                                    'rotate': {
                                        'onEmit': (_0x8c08ad, _0x1e7f05, _0x5e7506) => this[_0xc32589(0x5b0)](_0x8c08ad, _0x1e7f05, _0x5e7506),
                                        'onUpdate': (_0x3cdceb, _0x1aecd1, _0x54c397) => this['customAngle'](_0x3cdceb, _0x1aecd1, _0x54c397)
                                    }
                                });
                                for (let _0x47c4b4 = 0x0; _0x47c4b4 < this[_0xc32589(0xc39)][_0xc32589(0xed9)]; _0x47c4b4++) this[_0xc32589(0xc39)][_0x47c4b4][_0xc32589(0x183f)](!0x1);
                                this['add']['tween']({
                                    'targets': this['CharSprite'],
                                    'alpha': 0x0,
                                    'duration': 0x1f4
                                }), this['add'][_0xc32589(0x99a)]({
                                    'targets': this[_0xc32589(0xe27)],
                                    'alpha': 0x1,
                                    'duration': 0x1f4
                                }), this['add']['tween']({
                                    'targets': this[_0xc32589(0x1752)],
                                    'scale': 1.5,
                                    'duration': 0x1f4
                                }), this[_0xc32589(0x18bd)][_0xc32589(0x99a)]({
                                    'targets': this['BGDarkOverlay'],
                                    'alpha': 0x0,
                                    'duration': 0x1f4
                                });
                            },
                            'onComplete': () => {
                                const _0x33e6b3 = _0x21fd26;
                                this[_0x33e6b3(0x915)][_0x33e6b3(0x12b8)]({
                                    'delay': 0xfa0,
                                    'callback': () => {
                                        this['enableDoneButton']();
                                    }
                                });
                            }
                        });
                    } ['AddRays']() {
                        const _0x556040 = _0x3ffd01;
                        let _0x1f45e0 = new Phaser[(_0x556040(0xbf2))]['Graphics'](this, {
                            'x': 0x0,
                            'y': 0x0
                        });
                        _0x1f45e0[_0x556040(0x11fe)](this['background']['x'] - 0.5 * this['background'][_0x556040(0x173c)], this[_0x556040(0x431)]['y'] - 0.5 * this[_0x556040(0x431)][_0x556040(0x140e)], this[_0x556040(0x431)][_0x556040(0x173c)], this['background'][_0x556040(0x140e)]);
                        let _0x21b0eb = _0x1f45e0['createGeometryMask']();
                        for (let _0x4b030e = 0x0; _0x4b030e < 0x6; _0x4b030e++) {
                            let _0x4b99e4 = this['add']['sprite'](0.5 * this['renderer']['width'] + 0x40 * (Math['random']() - 0.5), this[_0x556040(0x12f9)]['height'] + 0x80, 'vfx', 'rays.png')[_0x556040(0x11c7)](_0xa25521[_0x556040(0x10fc)]['ADD'])[_0x556040(0x8a2)](0x0)['setOrigin'](0x0, 0x1)['setAngle'](-0x5a)[_0x556040(0xb4a)](this[_0x556040(0x431)][_0x556040(0x16c6)] + 0x1);
                            this[_0x556040(0xa0a)][_0x556040(0x1564)](_0x4b99e4), _0x4b99e4['setMask'](_0x21b0eb);
                            let _0x3ef6a6 = this['add']['tween']({
                                'targets': _0x4b99e4,
                                'scaleX': _0x4b030e % 0x2 == 0x0 ? 0x6 : -0x6,
                                'scaleY': 0x6,
                                'duration': 0x3e8
                            });
                            this[_0x556040(0x8cf)]['push'](_0x3ef6a6), _0x3ef6a6 = this[_0x556040(0x18bd)][_0x556040(0x99a)]({
                                'targets': _0x4b99e4,
                                'alpha': 0.25,
                                'yoyo': !0x0,
                                'repeat': -0x1,
                                'duration': 0x1f4 + 0x4b * _0x4b030e,
                                'ease': 'Sine.easeInOut'
                            }), _0x3ef6a6 = this['add'][_0x556040(0x99a)]({
                                'targets': _0x4b99e4,
                                'angle': 0x2d,
                                'yoyo': !0x0,
                                'repeat': -0x1,
                                'duration': 0xbb8 + 0x96 * _0x4b030e,
                                'ease': 'Sine.easeInOut'
                            });
                        }
                        this['rays'][0x0][_0x556040(0xb34)](0xff0000), this['rays'][0x1]['setTint'](0xff00), this['rays'][0x2]['setTint'](0xff), this['rays'][0x3]['setTint'](0xffff00), this[_0x556040(0xa0a)][0x4]['setTint'](0xff00ff), this['rays'][0x5]['setTint'](0xffff);
                    } ['StartFireworks']() {
                        const _0x1b649c = _0x3ffd01;
                        var _0x39a8c1 = this[_0x1b649c(0x18bd)][_0x1b649c(0x1791)]('vfx');
                        this['fwEmitters'] = [];
                        for (let _0x5447c0 = 0x0; _0x5447c0 < 0x7; _0x5447c0++) this['fwEmitters'][_0x1b649c(0x1564)](_0x39a8c1['createEmitter']({
                            'frame': ['PfxYellow.png', 'PfxPink.png', 'PfxRed.png', 'PfxGreen.png'][_0x5447c0 % 0x4],
                            'x': 0.5 * this[_0x1b649c(0x12f9)][_0x1b649c(0x173c)] + (Math['random']() - 0.5) * this[_0x1b649c(0x431)]['width'],
                            'y': 0.5 * this[_0x1b649c(0x12f9)][_0x1b649c(0x140e)] - 0x7d - 0x96 * Math[_0x1b649c(0x9ad)]() / 0x2,
                            'lifespan': 0xbb8,
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
                                'min': 0x64,
                                'max': 0x96 + _0x5447c0 / 0x5 * 0x12c / 0x2
                            },
                            'quantity': 0x20 + _0x5447c0 / 0x5 * 0x20,
                            'scale': {
                                'start': 0x2 + _0x5447c0 / 0x5 * 0x2,
                                'end': 0x0
                            },
                            'frequency': 0x40,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }));
                        _0x39a8c1['createGravityWell']({
                            'x': 0.5 * this[_0x1b649c(0x12f9)][_0x1b649c(0x173c)],
                            'y': 0.5 * this[_0x1b649c(0x12f9)][_0x1b649c(0x140e)],
                            'power': 0x1,
                            'epsilon': 0x19,
                            'gravity': 0x96
                        });
                        const _0x4a1479 = [0x64, 0x12c, 0x1f4, 0x2bc, 0x384, 0x4b0, 0x578];
                        _0x5fc4de['default'][_0x1b649c(0x1043)][_0x1b649c(0x14d8)][_0x1b649c(0x49c)] || this[_0x1b649c(0x16ac)]['setVisible'](!0x1);
                        for (let _0x39efa7 = 0x0; _0x39efa7 < 0x7; _0x39efa7++) this[_0x1b649c(0x915)][_0x1b649c(0x12b8)]({
                            'delay': _0x4a1479[_0x39efa7],
                            'callback': () => {
                                const _0xbc9b0e = _0x1b649c;
                                this[_0xbc9b0e(0x12a1)][_0xbc9b0e(0x18bd)]({
                                    'targets': this[_0xbc9b0e(0x16ac)],
                                    'alpha': 0.4,
                                    'yoyo': !0x0,
                                    'duration': 0x1e,
                                    'onUpdate': () => {
                                        const _0x2c7994 = _0xbc9b0e;
                                        this[_0x2c7994(0x960)][_0x39efa7]['start']();
                                    },
                                    'onComplete': () => {
                                        const _0x50eeda = _0xbc9b0e;
                                        this[_0x50eeda(0x960)][_0x39efa7][_0x50eeda(0x1a34)]();
                                    }
                                });
                            }
                        });
                    } ['playGhosts']() {
                        const _0x34d52e = _0x3ffd01;
                        this['Ghosts'] = new Array();
                        for (let _0x514ee6 = 0x0; _0x514ee6 < 0x4; _0x514ee6++) {
                            let _0x35985a = this['add']['sprite'](0.5 * this[_0x34d52e(0x12f9)][_0x34d52e(0x173c)] - 0x4, 0.5 * this['renderer']['height'], this[_0x34d52e(0xa2e)][_0x34d52e(0xacb)], this['foundData'][_0x34d52e(0x4f0)])[_0x34d52e(0x652)](0x0)[_0x34d52e(0xdab)](0.3)['setScale'](0x2);
                            this['tweens'][_0x34d52e(0x18bd)]({
                                'targets': _0x35985a,
                                'scale': 0x3,
                                'x': 0.5 * this[_0x34d52e(0x12f9)][_0x34d52e(0x173c)] + 0x4,
                                'alpha': 0.1,
                                'yoyo': !0x0,
                                'repeat': -0x1,
                                'delay': 0x64 * _0x514ee6,
                                'duration': 0x3e8 + 0xc8 * _0x514ee6,
                                'ease': 'Sine.easeInOut'
                            }), this[_0x34d52e(0xc39)][_0x34d52e(0x1564)](_0x35985a);
                        }
                    } ['MakeUIGrid']() {
                        const _0x4cf51c = _0x3ffd01;
                        let _0x40917f = _0x5fc4de[_0x4cf51c(0xd2c)][_0x4cf51c(0x1043)]['SceneManager'][_0x4cf51c(0x7ec)];
                        _0x40917f['MakeUIGrid'](0x1, 0x1, !0x0), _0x40917f['ToggleCursorsVisibility'](!0x0), _0x40917f[_0x4cf51c(0x8cc)]['SetContents'](0x0, 0x0, this[_0x4cf51c(0xd7d)]), _0x40917f[_0x4cf51c(0x8cc)][_0x4cf51c(0xb55)](this[_0x4cf51c(0xd7d)]), _0x40917f[_0x4cf51c(0x938)] = this[_0x4cf51c(0xd7d)], _0x5fc4de['default'][_0x4cf51c(0x1043)][_0x4cf51c(0x69e)][_0x4cf51c(0x6d2)][_0x4cf51c(0x5d8)](_0x40917f), _0x40917f['OnCancelCallback'] = () => {};
                    } ['enablePanelsInput']() {
                        const _0x136d9c = _0x3ffd01;
                        this[_0x136d9c(0x12a1)][_0x136d9c(0x18bd)]({
                            'targets': [this[_0x136d9c(0xd7d)], this[_0x136d9c(0x15a3)]],
                            'scale': 0x2 * _0x69f586['default'][_0x136d9c(0x15db)],
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1,
                            'onComplete': () => {
                                const _0x1352e9 = _0x136d9c;
                                this[_0x1352e9(0x4ff)](), this[_0x1352e9(0xd7d)][_0x1352e9(0x596)](), this[_0x1352e9(0xd7d)][_0x1352e9(0x76d)](), this['OkButton'][_0x1352e9(0x3c7)]('pointerdown', () => this[_0x1352e9(0x1636)]());
                            }
                        });
                    } ['OnButtonClicked']() {
                        const _0x309e44 = _0x3ffd01;
                        this[_0x309e44(0xd7d)]['removeAllListeners'](), this['OkButton']['removeInteractive'](), this[_0x309e44(0x52e)](), _0x5fc4de['default']['Sound'][_0x309e44(0x7f6)](_0x43cb6f['default'][_0x309e44(0x2b6)]), _0x5fc4de[_0x309e44(0xd2c)]['Core'][_0x309e44(0x69e)]['UI_overlayScene']['ToggleCursorsVisibility'](!0x1), this[_0x309e44(0x12a1)][_0x309e44(0x18bd)]({
                            'targets': [this['OkButton'], this[_0x309e44(0x15a3)]],
                            'scale': 0x0,
                            'angle': -0xb4,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1
                        }), this['tweens'][_0x309e44(0x18bd)]({
                            'targets': this['panelGroup'],
                            'x': 1.5 * this[_0x309e44(0x12f9)][_0x309e44(0x173c)],
                            'duration': 0x96,
                            'scale': 0x1,
                            'ease': 'Linear'
                        });
                    } ['enableDoneButton']() {
                        const _0x22d5b2 = _0x3ffd01;
                        this[_0x22d5b2(0x15a3)][_0x22d5b2(0x758)] = _0x5fc4de[_0x22d5b2(0xd2c)][_0x22d5b2(0x1f1)]['getLang']('postGame_done'), this[_0x22d5b2(0x12a1)]['add']({
                            'targets': [this[_0x22d5b2(0xd7d)], this['OkText']],
                            'scale': 0x2 * _0x69f586['default'][_0x22d5b2(0x15db)],
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1,
                            'onComplete': () => {
                                const _0x3f4d58 = _0x22d5b2;
                                _0x5fc4de['default']['Core'][_0x3f4d58(0x69e)][_0x3f4d58(0x7ec)][_0x3f4d58(0x1475)](!0x0), this[_0x3f4d58(0xd7d)]['removeAllListeners'](), this['OkButton'][_0x3f4d58(0x76d)](), this['OkButton']['once']('pointerdown', () => this[_0x3f4d58(0x15b0)]());
                            }
                        });
                    } ['OnDoneClicked']() {
                        const _0x565bc9 = _0x3ffd01;
                        this[_0x565bc9(0xd7d)]['removeAllListeners'](), this['OkButton']['setInteractive'](), _0x5fc4de[_0x565bc9(0xd2c)]['Sound'][_0x565bc9(0x7f6)](_0x43cb6f[_0x565bc9(0xd2c)][_0x565bc9(0x2b6)]), this['blackParticles'][_0x565bc9(0x1a34)]();
                        for (let _0x129d8e = 0x0; _0x129d8e < this[_0x565bc9(0x8cf)][_0x565bc9(0xed9)]; _0x129d8e++) {
                            const _0x1edd94 = this[_0x565bc9(0x8cf)][_0x129d8e];
                            null == _0x1edd94 || _0x1edd94['stop']();
                        }
                        this[_0x565bc9(0x12a1)][_0x565bc9(0x18bd)]({
                            'targets': [this[_0x565bc9(0x431)], this[_0x565bc9(0x1752)], this['ColorSprite']]['concat'](this['rays']),
                            'scale': 0x0,
                            'angle': -0xb4,
                            'duration': 0x12c,
                            'onComplete': () => {
                                const _0x3ead89 = _0x565bc9;
                                this[_0x3ead89(0xbd2)]();
                            }
                        });
                    } ['OnExitScene']() {
                        const _0x209bdc = _0x3ffd01; - 0x1 == _0x5fc4de['default'][_0x209bdc(0x1043)][_0x209bdc(0x14d8)]['UnlockedCharacters'][_0x209bdc(0x1303)](_0x5fc4de[_0x209bdc(0xd2c)][_0x209bdc(0x1043)][_0x209bdc(0x3b3)]) && (_0x5fc4de[_0x209bdc(0xd2c)][_0x209bdc(0x1043)][_0x209bdc(0x14d8)]['UnlockedCharacters'][_0x209bdc(0x1564)](_0x5fc4de[_0x209bdc(0xd2c)]['Core'][_0x209bdc(0x3b3)]), _0x5fc4de[_0x209bdc(0xd2c)]['Core'][_0x209bdc(0x14d8)][_0x209bdc(0x3ab)]()), _0x5fc4de[_0x209bdc(0xd2c)]['Core']['SceneManager']['ResumeFromCharScene']();
                    } ['disablePanelsInput']() {
                        const _0x241f79 = _0x3ffd01;
                        this[_0x241f79(0xd7d)][_0x241f79(0xbc7)]();
                    } ['update']() {}
                }
                _0x5987e7['default'] = _0x595d97;
            };
