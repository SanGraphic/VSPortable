// Module 0x73c5
// Args: _0x88708, _0x495d3a, _0x298d6a

export default (_0x88708, _0x495d3a, _0x298d6a) => {
                'use strict';
                const _0x8b6545 = a0_0x6932;
                var _0x387740 = this && this['__createBinding'] || (Object['create'] ? function(_0x572cbf, _0x3a9945, _0x5bc378, _0x23fba2) {
                        const _0x50077b = _0x8b6545;
                        void 0x0 === _0x23fba2 && (_0x23fba2 = _0x5bc378);
                        var _0xbd0a9a = Object['getOwnPropertyDescriptor'](_0x3a9945, _0x5bc378);
                        _0xbd0a9a && !('get' in _0xbd0a9a ? !_0x3a9945[_0x50077b(0x16f1)] : _0xbd0a9a[_0x50077b(0x11bf)] || _0xbd0a9a[_0x50077b(0xf70)]) || (_0xbd0a9a = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x3a9945[_0x5bc378];
                            }
                        }), Object['defineProperty'](_0x572cbf, _0x23fba2, _0xbd0a9a);
                    } : function(_0x4aa1f1, _0x596b31, _0x416a82, _0x1dd44e) {
                        void 0x0 === _0x1dd44e && (_0x1dd44e = _0x416a82), _0x4aa1f1[_0x1dd44e] = _0x596b31[_0x416a82];
                    }),
                    _0x1415ef = this && this['__setModuleDefault'] || (Object['create'] ? function(_0xd76f2c, _0x20d554) {
                        const _0x394150 = _0x8b6545;
                        Object[_0x394150(0x811)](_0xd76f2c, 'default', {
                            'enumerable': !0x0,
                            'value': _0x20d554
                        });
                    } : function(_0x1c006b, _0x1aa75a) {
                        const _0x8f6edf = _0x8b6545;
                        _0x1c006b[_0x8f6edf(0xd2c)] = _0x1aa75a;
                    }),
                    _0x5c19a3 = this && this['__importStar'] || function(_0x4d7e5f) {
                        const _0x1f0e73 = _0x8b6545;
                        if (_0x4d7e5f && _0x4d7e5f[_0x1f0e73(0x16f1)]) return _0x4d7e5f;
                        var _0x1eb59b = {};
                        if (null != _0x4d7e5f) {
                            for (var _0x30352e in _0x4d7e5f) 'default' !== _0x30352e && Object[_0x1f0e73(0x977)][_0x1f0e73(0x2cf)][_0x1f0e73(0xff0)](_0x4d7e5f, _0x30352e) && _0x387740(_0x1eb59b, _0x4d7e5f, _0x30352e);
                        }
                        return _0x1415ef(_0x1eb59b, _0x4d7e5f), _0x1eb59b;
                    },
                    _0x2a4aaa = this && this['__importDefault'] || function(_0x2ce1a8) {
                        return _0x2ce1a8 && _0x2ce1a8['__esModule'] ? _0x2ce1a8 : {
                            'default': _0x2ce1a8
                        };
                    };
                Object['defineProperty'](_0x495d3a, '__esModule', {
                    'value': !0x0
                });
                const _0x52ba55 = _0x298d6a(0x18304),
                    _0x3e8c2c = _0x298d6a(0x16c14),
                    _0x5c3655 = _0x2a4aaa(_0x298d6a(0xccae)),
                    _0x3120b8 = _0x5c19a3(_0x298d6a(0x5f07)),
                    _0x29d509 = _0x2a4aaa(_0x298d6a(0x169b4)),
                    _0x52378a = _0x2a4aaa(_0x298d6a(0x15db6)),
                    _0x575640 = _0x2a4aaa(_0x298d6a(0x1fd7)),
                    _0x72b84c = _0x2a4aaa(_0x298d6a(0x5103));
                class _0x5c4d3a extends Phaser['Scene'] {
                    constructor() {
                        const _0x6ba7ec = _0x8b6545;
                        super({
                            'key': _0x29d509['default'][_0x6ba7ec(0x70e)]
                        }), this[_0x6ba7ec(0x842)] = new Phaser[(_0x6ba7ec(0x24f))]['Vector2'](0x0, 0x0), this['IsInitialised'] = !0x1;
                    } ['preload']() {
                        _0x3120b8['default']['ApplyMenuResolution']();
                    } ['customAngle'](_0xc2fbcc, _0x19e7ee, _0xa7331a) {
                        const _0x1872cf = _0x8b6545;
                        return _0xc2fbcc[_0x1872cf(0xd96)] + 0x5;
                    } ['onEmitcustomAngle'](_0x8b65f0, _0x13a991, _0x1d3228) {
                        return 0x168 * Math['random']();
                    } ['create']() {
                        const _0x88e76e = _0x8b6545,
                            _0xf2ce1b = this[_0x88e76e(0x183e)][_0x88e76e(0x1756)]('vfx', {
                                'start': 0x1,
                                'end': 0x6,
                                'zeroPad': 0x0,
                                'prefix': 'Burst',
                                'suffix': '.png'
                            });
                        this[_0x88e76e(0x15ca)] = this['add'][_0x88e76e(0x105b)](0.5 * this[_0x88e76e(0x12f9)][_0x88e76e(0x173c)], 0.5 * this['renderer'][_0x88e76e(0x173c)], 'vfx', 'Burst1.png'), this['OnEnterAnimation'][_0x88e76e(0x183e)][_0x88e76e(0x6a8)]({
                            'key': 'enter',
                            'frames': _0xf2ce1b,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), this['OnEnterAnimation'][_0x88e76e(0x35a)] = !0x0, this['OnEnterAnimation'][_0x88e76e(0x8a2)](0x8), this[_0x88e76e(0x15ca)]['setDepth'](0x3e8), this[_0x88e76e(0x15ca)][_0x88e76e(0xba4)] = _0x52ba55[_0x88e76e(0x10fc)][_0x88e76e(0x1811)], this[_0x88e76e(0x125b)] = this[_0x88e76e(0x18bd)][_0x88e76e(0x1791)]('vfx'), this[_0x88e76e(0x125b)][_0x88e76e(0x14c0)]({
                            'frame': {
                                'frames': ['PfxYellow.png', 'PfxRed.png', 'PfxPink.png', 'PfxColor1.png', 'PfxColor2.png']
                            },
                            'y': this[_0x88e76e(0x12f9)][_0x88e76e(0x140e)],
                            'x': {
                                'min': 0x0,
                                'max': this[_0x88e76e(0x12f9)][_0x88e76e(0x173c)]
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
                            'blendMode': _0x52ba55[_0x88e76e(0x10fc)][_0x88e76e(0x1811)],
                            'rotate': {
                                'onEmit': (_0x47d7de, _0x6343e6, _0xd0ded6) => this[_0x88e76e(0x5b0)](_0x47d7de, _0x6343e6, _0xd0ded6),
                                'onUpdate': (_0x5de6be, _0x5a26a6, _0x593ec4) => this[_0x88e76e(0x11f8)](_0x5de6be, _0x5a26a6, _0x593ec4)
                            }
                        });
                        var _0x53b7c2 = 0.8 * _0x3120b8[_0x88e76e(0x1e0)][_0x88e76e(0x173c)],
                            _0x4d6d36 = 0.8 * _0x3120b8[_0x88e76e(0xd6b)];
                        this['background'] = new _0x3e8c2c['NineSlice'](this, _0x5c3655[_0x88e76e(0xd2c)]['MenuBackground'], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x53b7c2,
                            'height': _0x4d6d36
                        }), this[_0x88e76e(0x431)][_0x88e76e(0x726)](0.5 * this[_0x88e76e(0x12f9)][_0x88e76e(0x173c)], 0.5 * this['renderer'][_0x88e76e(0x140e)]), this[_0x88e76e(0x431)]['setOrigin'](0.5), this[_0x88e76e(0x431)][_0x88e76e(0x8a2)](_0x72b84c[_0x88e76e(0xd2c)][_0x88e76e(0x15db)]), this['add']['existing'](this[_0x88e76e(0x431)]), this[_0x88e76e(0x842)]['x'] = this['background']['x'] - 0.5 * this[_0x88e76e(0x431)]['width'] * _0x72b84c['default'][_0x88e76e(0x15db)], this['TopLeft']['y'] = this[_0x88e76e(0x431)]['y'] - 0.5 * this['background'][_0x88e76e(0x140e)] * _0x72b84c[_0x88e76e(0xd2c)]['PixelScale'];
                        var _0xac6a5e = 0.95 * _0x53b7c2,
                            _0x42b242 = 0.2 * _0x4d6d36;
                        this[_0x88e76e(0x1752)] = new Phaser[(_0x88e76e(0xbf2))][(_0x88e76e(0x1ae9))](this, 0.5 * this['renderer']['width'], this[_0x88e76e(0x842)]['y'] + 0x2d, _0x3120b8[_0x88e76e(0xd2c)][_0x88e76e(0x1f1)][_0x88e76e(0xb10)]('newItem_header'), {})['setScale'](0x2 * _0x72b84c['default']['PixelScale'])['setOrigin'](0.5), _0x3120b8[_0x88e76e(0xd2c)]['Lang'][_0x88e76e(0x14a8)](this[_0x88e76e(0x1752)], !0x1, 0xb4), this['add'][_0x88e76e(0x1a88)](this['header']), this[_0x88e76e(0x48e)] = new _0x52378a['default'](this, this[_0x88e76e(0x12f9)][_0x88e76e(0x173c)], this[_0x88e76e(0x842)]['y'] + _0x42b242 - 0.025 * _0x53b7c2, _0xac6a5e, _0x42b242), this['panel']['OnEnterTween'] = this['tweens'][_0x88e76e(0x18bd)]({
                            'targets': this[_0x88e76e(0x48e)],
                            'x': this[_0x88e76e(0x842)]['x'] + 0.025 * _0x53b7c2,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1
                        }), this[_0x88e76e(0x18bd)][_0x88e76e(0x1a88)](this[_0x88e76e(0x48e)]), this['OkButton'] = new _0x3e8c2c[(_0x88e76e(0x1a31))](this, _0x5c3655[_0x88e76e(0xd2c)][_0x88e76e(0x1608)], {
                            'x': this['background']['x'],
                            'y': this['TopLeft']['y'] + 0x3 * _0x42b242 - 0.025 * _0x53b7c2,
                            'width': 0x60,
                            'height': 0x20
                        })[_0x88e76e(0x8a2)](0x2 * _0x72b84c['default'][_0x88e76e(0x15db)])[_0x88e76e(0xf8e)](0.5), this[_0x88e76e(0x18bd)][_0x88e76e(0x1a88)](this[_0x88e76e(0xd7d)]), this[_0x88e76e(0x15a3)] = new Phaser[(_0x88e76e(0xbf2))][(_0x88e76e(0x1ae9))](this, this[_0x88e76e(0xd7d)]['x'], this['OkButton']['y'], _0x3120b8[_0x88e76e(0xd2c)]['Lang'][_0x88e76e(0xb10)]('newItem_get'), {})['setOrigin'](0.5, 0.5)['setScale'](0x2 * _0x72b84c['default'][_0x88e76e(0x15db)]), _0x3120b8[_0x88e76e(0xd2c)][_0x88e76e(0x1f1)]['scaleToMaxFast'](this[_0x88e76e(0x15a3)], !0x1, 0x50), this[_0x88e76e(0x18bd)][_0x88e76e(0x1a88)](this['OkText']), this['CancelButton'] = new _0x3e8c2c['NineSlice'](this, _0x5c3655[_0x88e76e(0xd2c)][_0x88e76e(0x1775)], {
                            'x': this[_0x88e76e(0x431)]['x'],
                            'y': this['TopLeft']['y'] + 0x4 * _0x42b242 - 0.025 * _0x53b7c2,
                            'width': 0x60,
                            'height': 0x20
                        })[_0x88e76e(0x8a2)](0x2 * _0x72b84c[_0x88e76e(0xd2c)]['PixelScale'])['setOrigin'](0.5), this[_0x88e76e(0x18bd)][_0x88e76e(0x1a88)](this[_0x88e76e(0x1770)]), this[_0x88e76e(0x1396)] = new Phaser[(_0x88e76e(0xbf2))][(_0x88e76e(0x1ae9))](this, this['CancelButton']['x'], this[_0x88e76e(0x1770)]['y'], _0x3120b8['default']['Lang']['getLang']('newItem_discard'), {})['setOrigin'](0.5, 0.5)[_0x88e76e(0x8a2)](0x2 * _0x72b84c['default'][_0x88e76e(0x15db)]), _0x3120b8['default']['Lang']['scaleToMaxFast'](this[_0x88e76e(0x1396)], !0x1, 0x50), this['add']['existing'](this[_0x88e76e(0x1396)]), this[_0x88e76e(0x431)]['setScale'](-0.2, -0.1), this['background']['setAngle'](0xb4), this[_0x88e76e(0xd9b)] = this[_0x88e76e(0x12a1)]['add']({
                            'targets': this[_0x88e76e(0x431)],
                            'scale': _0x72b84c[_0x88e76e(0xd2c)][_0x88e76e(0x15db)],
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1
                        }), this[_0x88e76e(0x194d)] = !0x0, this['PickWeapon'](_0x3120b8[_0x88e76e(0xd2c)]['Core'][_0x88e76e(0x1511)]);
                    } ['MakeUIGrid']() {
                        const _0xbe3ca3 = _0x8b6545;
                        let _0x185afc = _0x3120b8['default'][_0xbe3ca3(0x1043)]['SceneManager'][_0xbe3ca3(0x7ec)];
                        _0x185afc['MakeUIGrid'](0x1, 0x2, !0x0), _0x185afc[_0xbe3ca3(0x1475)](!0x0), _0x185afc[_0xbe3ca3(0x8cc)][_0xbe3ca3(0x16a8)](0x0, 0x0, this['OkButton']), _0x185afc['UI_grid']['SetContents'](0x0, 0x1, this[_0xbe3ca3(0x1770)]), _0x185afc[_0xbe3ca3(0x8cc)][_0xbe3ca3(0xb55)](this['OkButton']), _0x185afc['UI_selected'] = this['OkButton'], _0x3120b8['default'][_0xbe3ca3(0x1043)]['SceneManager'][_0xbe3ca3(0x6d2)]['bringToTop'](_0x185afc), _0x185afc[_0xbe3ca3(0x1ad4)] = () => {};
                    } ['OnButtonClicked']() {
                        const _0x349533 = _0x8b6545;
                        this['disablePanelsInput'](), _0x3120b8['default']['Core']['LevelWeaponUp'](_0x3120b8[_0x349533(0xd2c)][_0x349533(0x1043)][_0x349533(0x1511)]), _0x3120b8['default'][_0x349533(0x1043)][_0x349533(0x7a8)]['calculateWeights'](), _0x3120b8[_0x349533(0xd2c)][_0x349533(0x1267)][_0x349533(0x7f6)](_0x575640['default'][_0x349533(0x2b6)]), _0x3120b8[_0x349533(0xd2c)][_0x349533(0x1043)]['SceneManager']['ResumeFromItemFound']();
                    } ['OnCancelClicked']() {
                        const _0x36ce9a = _0x8b6545;
                        this[_0x36ce9a(0x1a7e)](), _0x3120b8[_0x36ce9a(0xd2c)]['Sound'][_0x36ce9a(0x7f6)](_0x575640[_0x36ce9a(0xd2c)][_0x36ce9a(0x1b0f)]), _0x3120b8['default'][_0x36ce9a(0x1043)]['SceneManager']['ResumeFromItemFound']();
                    } ['PickWeapon'](_0x29c65f) {
                        const _0x121910 = _0x8b6545;
                        this[_0x121910(0x48e)][_0x121910(0x14b7)]['removeAllListeners'](), _0x29c65f ? (this[_0x121910(0x48e)]['visible'] = !0x0, this['panel']['AssignData'](_0x29c65f, _0x3120b8[_0x121910(0xd2c)]['Core'][_0x121910(0x3bc)](_0x29c65f)), this[_0x121910(0x48e)][_0x121910(0xd9b)][_0x121910(0x1374)](), _0x3120b8[_0x121910(0xd2c)]['Core']['PlayerOptions'][_0x121910(0x49c)] ? this['OnEnterAnimation']['play']('enter') : this[_0x121910(0x15ca)][_0x121910(0x183f)](!0x1), this['OnEnterTween'][_0x121910(0x1374)](), this['time'][_0x121910(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': this[_0x121910(0x9fe)],
                            'callbackScope': this,
                            'loop': !0x1
                        }), _0x3120b8['default']['Sound']['PlaySound'](_0x575640[_0x121910(0xd2c)][_0x121910(0x2ab)], {
                            'volume': 1.25,
                            'detune': 0x3e8
                        })) : this[_0x121910(0x48e)][_0x121910(0x35a)] = !0x1;
                    } ['enablePanelsInput']() {
                        const _0x4311d = _0x8b6545;
                        this['MakeUIGrid'](), this[_0x4311d(0xd7d)][_0x4311d(0x76d)](), this['OkButton'][_0x4311d(0x3c7)]('pointerdown', () => this[_0x4311d(0x1636)]()), this[_0x4311d(0x1770)]['setInteractive'](), this[_0x4311d(0x1770)]['once']('pointerdown', () => this[_0x4311d(0x9b3)]());
                    } ['disablePanelsInput']() {
                        const _0x40b05d = _0x8b6545;
                        this[_0x40b05d(0xd7d)][_0x40b05d(0xbc7)](), this[_0x40b05d(0x1770)]['disableInteractive']();
                    } ['update']() {}
                }
                _0x495d3a['default'] = _0x5c4d3a;
            };
