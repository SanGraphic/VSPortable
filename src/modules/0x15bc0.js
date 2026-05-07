// Module 0x15bc0
// Args: _0x3d7027, _0x4d31b1, _0x125768

export default (_0x3d7027, _0x4d31b1, _0x125768) => {
                'use strict';
                const _0x597dde = a0_0x6932;
                var _0x1306b0 = this && this['__createBinding'] || (Object['create'] ? function(_0x59638b, _0x30e818, _0x16cceb, _0x457484) {
                        const _0x1965a8 = _0x597dde;
                        void 0x0 === _0x457484 && (_0x457484 = _0x16cceb);
                        var _0x24bbf0 = Object[_0x1965a8(0x1687)](_0x30e818, _0x16cceb);
                        _0x24bbf0 && !('get' in _0x24bbf0 ? !_0x30e818[_0x1965a8(0x16f1)] : _0x24bbf0['writable'] || _0x24bbf0['configurable']) || (_0x24bbf0 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x30e818[_0x16cceb];
                            }
                        }), Object[_0x1965a8(0x811)](_0x59638b, _0x457484, _0x24bbf0);
                    } : function(_0x3a8004, _0x4456e0, _0x2dfbdf, _0x7dbcb3) {
                        void 0x0 === _0x7dbcb3 && (_0x7dbcb3 = _0x2dfbdf), _0x3a8004[_0x7dbcb3] = _0x4456e0[_0x2dfbdf];
                    }),
                    _0x13af4e = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x15382c, _0x2a7a59) {
                        const _0xbb13d4 = _0x597dde;
                        Object[_0xbb13d4(0x811)](_0x15382c, 'default', {
                            'enumerable': !0x0,
                            'value': _0x2a7a59
                        });
                    } : function(_0x38b0b5, _0x57bbff) {
                        const _0x5519ca = _0x597dde;
                        _0x38b0b5[_0x5519ca(0xd2c)] = _0x57bbff;
                    }),
                    _0x1741e0 = this && this['__importStar'] || function(_0x526fda) {
                        const _0x21ecce = _0x597dde;
                        if (_0x526fda && _0x526fda[_0x21ecce(0x16f1)]) return _0x526fda;
                        var _0x431418 = {};
                        if (null != _0x526fda) {
                            for (var _0x49c75c in _0x526fda) 'default' !== _0x49c75c && Object['prototype'][_0x21ecce(0x2cf)][_0x21ecce(0xff0)](_0x526fda, _0x49c75c) && _0x1306b0(_0x431418, _0x526fda, _0x49c75c);
                        }
                        return _0x13af4e(_0x431418, _0x526fda), _0x431418;
                    },
                    _0x44dfc8 = this && this['__importDefault'] || function(_0x18844a) {
                        const _0x1e2358 = _0x597dde;
                        return _0x18844a && _0x18844a[_0x1e2358(0x16f1)] ? _0x18844a : {
                            'default': _0x18844a
                        };
                    };
                Object['defineProperty'](_0x4d31b1, '__esModule', {
                    'value': !0x0
                }), _0x4d31b1['GospelManager'] = void 0x0;
                const _0x57590d = _0x44dfc8(_0x125768(0x1fd7)),
                    _0x4bb7b7 = _0x1741e0(_0x125768(0x5f07));
                class _0x2c73e8 {
                    constructor(_0x339e51) {
                        const _0x28ea04 = _0x597dde;
                        this[_0x28ea04(0x6d2)] = _0x339e51, this['maxClaps'] = 0x7, this[_0x28ea04(0x18ea)] = 0x0, this['clap'] = this[_0x28ea04(0x6d2)]['add']['sprite'](0x0, 0x0, 'backgroundX', 'clap01.png');
                        const _0x5a4414 = this[_0x28ea04(0x5a7)]['anims'][_0x28ea04(0x1756)]('backgroundX', {
                                'start': 0x1,
                                'end': 0x6,
                                'zeroPad': 0x2,
                                'prefix': 'clap',
                                'suffix': '.png'
                            }),
                            _0x245c58 = this[_0x28ea04(0x5a7)][_0x28ea04(0x183e)]['generateFrameNames']('backgroundX', {
                                'start': 0x6,
                                'end': 0xb,
                                'zeroPad': 0x2,
                                'prefix': 'clap',
                                'suffix': '.png'
                            });
                        this['clap'][_0x28ea04(0x183e)][_0x28ea04(0x6a8)]({
                            'key': 'clapIn',
                            'frames': _0x5a4414,
                            'frameRate': 0x3c
                        }), this[_0x28ea04(0x5a7)]['anims'][_0x28ea04(0x6a8)]({
                            'key': 'clapOut',
                            'frames': _0x245c58,
                            'frameRate': 0x3c
                        }), this[_0x28ea04(0x5a7)][_0x28ea04(0xd87)](0x0), this['clap'][_0x28ea04(0xf8e)](0.5, 0x1), this[_0x28ea04(0x5a7)]['x'] = 0.5 * this[_0x28ea04(0x6d2)]['renderer']['width'], this['clap']['y'] = this[_0x28ea04(0x6d2)][_0x28ea04(0x12f9)][_0x28ea04(0x140e)], this[_0x28ea04(0x5a7)][_0x28ea04(0x8a2)](1.5);
                    } ['Start'](_0x5f4329) {
                        const _0x4ed0f0 = _0x597dde;
                        this['panel'] = _0x5f4329, this[_0x4ed0f0(0x16a7)](), this[_0x4ed0f0(0xe48)](), _0x4bb7b7['default'][_0x4ed0f0(0x1267)]['StopMusic'](_0x4bb7b7['default']['Core'][_0x4ed0f0(0x1239)]), _0x4bb7b7['default']['Sound'][_0x4ed0f0(0x7f6)](_0x57590d[_0x4ed0f0(0xd2c)]['Piano'], {
                            'volume': 0.5
                        }), _0x4bb7b7[_0x4ed0f0(0xd2c)][_0x4ed0f0(0x1267)][_0x4ed0f0(0x7f6)](_0x57590d['default'][_0x4ed0f0(0x583)], {
                            'volume': 0.5
                        }), _0x4bb7b7[_0x4ed0f0(0xd2c)]['Core'][_0x4ed0f0(0x69e)]['UI_overlayScene'][_0x4ed0f0(0x110c)]();
                    } ['Clap']() {
                        const _0x592fd7 = _0x597dde;
                        this[_0x592fd7(0x5a7)]['setVisible'](!0x0), this[_0x592fd7(0x5a7)]['anims'][_0x592fd7(0x902)]('clapIn'), this['clap'][_0x592fd7(0x3c7)]('animationcomplete', () => {
                            const _0x3914f7 = _0x592fd7;
                            _0x4bb7b7[_0x3914f7(0xd2c)][_0x3914f7(0x1267)][_0x3914f7(0x7f6)](_0x57590d['default'][_0x3914f7(0x16a7)], {
                                'volume': 0x2,
                                'detune': 0x64 * Math['random']()
                            }), this[_0x3914f7(0x5a7)][_0x3914f7(0x183e)]['play']('clapOut'), this['clap']['once']('animationcomplete', () => {
                                const _0x59aca1 = _0x3914f7;
                                this[_0x59aca1(0x18ea)]++, this[_0x59aca1(0x18ea)] < this[_0x59aca1(0x4b9)] ? this['Clap']() : (this[_0x59aca1(0x5a7)][_0x59aca1(0x183f)](!0x1), this[_0x59aca1(0x6d2)][_0x59aca1(0x915)][_0x59aca1(0x12b8)]({
                                    'delay': 0xbb8,
                                    'callback': () => {
                                        const _0x1e842a = _0x59aca1;
                                        this[_0x1e842a(0x118d)] && (this['onComplete'](), this['onComplete'] = null);
                                    }
                                }));
                            });
                        });
                    } ['Reset']() {} ['StartFireworks']() {
                        const _0x2f9d47 = _0x597dde;
                        var _0x12e66f = this['scene'][_0x2f9d47(0x18bd)][_0x2f9d47(0x1791)]('vfx');
                        this[_0x2f9d47(0x960)] = [];
                        for (let _0x5057ea = 0x0; _0x5057ea < 0x7; _0x5057ea++) this[_0x2f9d47(0x960)]['push'](_0x12e66f[_0x2f9d47(0x14c0)]({
                            'frame': ['PfxYellow.png', 'PfxPink.png', 'PfxRed.png', 'PfxGreen.png'][_0x5057ea % 0x4],
                            'x': 0.5 * this[_0x2f9d47(0x6d2)][_0x2f9d47(0x12f9)]['width'] + (Math['random']() - 0.5) * _0x4bb7b7[_0x2f9d47(0x1e0)][_0x2f9d47(0x173c)],
                            'y': 0.5 * this['scene']['renderer'][_0x2f9d47(0x140e)] - 0x7d - 0x96 * Math['random']() / 0x2,
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
                                'max': 0x96 + _0x5057ea / 0x5 * 0x12c / 0x2
                            },
                            'quantity': 0x20 + _0x5057ea / 0x5 * 0x20,
                            'scale': {
                                'start': 0x2 + _0x5057ea / 0x5 * 0x2,
                                'end': 0x0
                            },
                            'frequency': 0x40,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }));
                        _0x12e66f[_0x2f9d47(0x1386)]({
                            'x': 0.5 * this[_0x2f9d47(0x6d2)][_0x2f9d47(0x12f9)][_0x2f9d47(0x173c)],
                            'y': 0.5 * this[_0x2f9d47(0x6d2)]['renderer'][_0x2f9d47(0x140e)],
                            'power': 0x1,
                            'epsilon': 0x19,
                            'gravity': 0x96
                        });
                        const _0x301bfe = [0x64, 0x12c, 0x1f4, 0x2bc, 0x384, 0x4b0, 0x578];
                        _0x4bb7b7[_0x2f9d47(0xd2c)][_0x2f9d47(0x1043)][_0x2f9d47(0x14d8)]['FlashingVFXEnabled'];
                        for (let _0x5dbbbb = 0x0; _0x5dbbbb < 0x7; _0x5dbbbb++) this['scene'][_0x2f9d47(0x915)][_0x2f9d47(0x12b8)]({
                            'delay': _0x301bfe[_0x5dbbbb],
                            'callback': () => {
                                const _0x222e7f = _0x2f9d47;
                                this['scene']['tweens'][_0x222e7f(0x18bd)]({
                                    'targets': this,
                                    'alpha': 0.4,
                                    'yoyo': !0x0,
                                    'duration': 0x1e,
                                    'onUpdate': () => {
                                        const _0x31acd7 = _0x222e7f;
                                        this[_0x31acd7(0x960)][_0x5dbbbb][_0x31acd7(0x1aa2)]();
                                    },
                                    'onComplete': () => {
                                        const _0x36a15b = _0x222e7f;
                                        this['fwEmitters'][_0x5dbbbb][_0x36a15b(0x1a34)]();
                                    }
                                });
                            }
                        });
                    }
                }
                _0x4d31b1['GospelManager'] = _0x2c73e8, _0x4d31b1['default'] = _0x2c73e8;
            };
