// Module 0x620b
// Args: _0x308014, _0x11c18a, _0x218c69

export default (_0x308014, _0x11c18a, _0x218c69) => {
                'use strict';
                const _0x2b45ed = a0_0x6932;
                var _0x554369 = this && this['__importDefault'] || function(_0x5c89a9) {
                    const _0x1fd15d = a0_0x6932;
                    return _0x5c89a9 && _0x5c89a9['__esModule'] ? _0x5c89a9 : {
                        'default': _0x5c89a9
                    };
                };
                Object['defineProperty'](_0x11c18a, '__esModule', {
                    'value': !0x0
                }), _0x11c18a['B_Window'] = void 0x0;
                const _0x1961e2 = _0x554369(_0x218c69(0xa14d)),
                    _0x87a86b = _0x554369(_0x218c69(0x5f07)),
                    _0x5a0217 = _0x218c69(0x18304),
                    _0x2ad162 = _0x554369(_0x218c69(0x1fd7));
                class _0x29bba6 extends _0x1961e2['default'] {
                    constructor(_0x59b01d, _0x3a688b, _0x5cc6a2, _0x15dfb6, _0xde24d2) {
                        const _0x46f004 = _0x2b45ed;
                        super(_0x59b01d, _0x3a688b, _0x5cc6a2, 'vfx', 'blackDot.png', _0x15dfb6, _0xde24d2), this[_0x46f004(0xf8e)](0.5), this[_0x46f004(0x8a2)](0x60, 0x0);
                        const _0x3c463e = this['anims']['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': 0x1d,
                            'zeroPad': 0x0,
                            'prefix': 'window_',
                            'suffix': '.png'
                        });
                        this[_0x46f004(0x10bf)] = this[_0x46f004(0x6d2)][_0x46f004(0x18bd)][_0x46f004(0x105b)](this['x'], this['y'], 'vfx', 'window_0.png')[_0x46f004(0xf8e)](0.5)['setVisible'](!0x1), this['windowVfx'][_0x46f004(0x183e)][_0x46f004(0x6a8)]({
                            'key': 'strike',
                            'frames': _0x3c463e,
                            'frameRate': 0x18
                        }), this['windowVfx'][_0x46f004(0xb4a)](0x2329), this[_0x46f004(0x235)] = this['scene']['add']['sprite'](this['x'], this['y'], 'vfx', 's_pfx_rainbow_64.png')[_0x46f004(0xf8e)](0.5)['setVisible'](!0x1)[_0x46f004(0x11c7)](_0x5a0217[_0x46f004(0x10fc)][_0x46f004(0x1811)]), this['particlesManager'] = this['scene']['add'][_0x46f004(0x1791)]('vfx'), this['pfxEmitter'] = this['particlesManager'][_0x46f004(0x14c0)]({
                            'frame': ['PfxLine2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
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
                            'scaleX': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'scaleY': {
                                'start': 0x4,
                                'end': 0xc
                            },
                            'alpha': {
                                'start': 0.75,
                                'end': 0x0
                            },
                            'tint': {
                                'onEmit': (_0xdceafe, _0x49a878, _0x356a66) => this['onEmitcustomTint'](_0xdceafe, _0x49a878, _0x356a66)
                            },
                            'quantity': 0x1,
                            'frequency': 0x1,
                            'on': !0x1
                        }), this['pfxEmitter2'] = this[_0x46f004(0x1761)]['createEmitter']({
                            'frame': ['PfxLine2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
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
                                'min': 0xa0,
                                'max': 0xc8
                            },
                            'scaleX': {
                                'start': 0x4,
                                'end': 0x6
                            },
                            'scaleY': {
                                'start': 0x4,
                                'end': 0xc
                            },
                            'alpha': {
                                'start': 0.75,
                                'end': 0x0
                            },
                            'tint': {
                                'onEmit': (_0x9b4480, _0x45e439, _0x5a22dc) => this['onEmitcustomTint'](_0x9b4480, _0x45e439, _0x5a22dc)
                            },
                            'quantity': 0x1,
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x46f004(0xc05)] = this[_0x46f004(0x1761)][_0x46f004(0x1386)]({
                            'x': this['x'],
                            'y': this['y'] + 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this[_0x46f004(0x1761)]['setDepth'](0x2328);
                    } ['onEmitcustomTint'](_0x3dd597, _0x4c250d, _0x344ab5) {
                        return Phaser['Math']['RND']['pick']([0xefe70d, 0xefc3ca, 0xe57714, 0xafcb09, 0x9fc4e0, 0x9e58fd]);
                    } ['OnRecycle']() {
                        const _0x13022b = _0x2b45ed;
                        var _0x4642f6, _0x4fa5a1, _0x2f2d1;
                        super['OnRecycle'](), this['windowVfx']['setVisible'](!0x1);
                        let _0x4dbc2d = this[_0x13022b(0x4a1)]['PArea'];
                        this['setScale'](0x60 * _0x4dbc2d, 0x0), this['setAlpha'](0x0);
                        let _0x31258 = 0x3e8 * (Math[_0x13022b(0x9ad)]() - 0.5);
                        _0x87a86b[_0x13022b(0xd2c)][_0x13022b(0x1267)][_0x13022b(0x7f6)](_0x2ad162[_0x13022b(0xd2c)]['Window'], {
                            'volume': 0.5,
                            'detune': _0x31258
                        }, 0x96, 0x6), _0x87a86b[_0x13022b(0xd2c)][_0x13022b(0x1267)][_0x13022b(0x7f6)](_0x2ad162['default']['Window'], {
                            'volume': 0.5,
                            'detune': _0x31258 - 0x190
                        }, 0x96, 0x6), _0x87a86b[_0x13022b(0xd2c)][_0x13022b(0x1267)][_0x13022b(0x7f6)](_0x2ad162[_0x13022b(0xd2c)]['Window'], {
                            'volume': 0.5,
                            'detune': _0x31258 - 0x320
                        }, 0x96, 0x6), this[_0x13022b(0x10bf)]['x'] = this['x'], this['windowVfx']['y'] = this['y'], this[_0x13022b(0x10bf)]['setVisible'](!0x0), this[_0x13022b(0x10bf)][_0x13022b(0x183e)][_0x13022b(0x902)]('strike'), this[_0x13022b(0xc05)]['x'] = this['x'], this[_0x13022b(0xc05)]['y'] = this['y'] - 0x14, this[_0x13022b(0xb8c)]['setPosition'](this['x'], this['y']), this[_0x13022b(0xb8c)][_0x13022b(0x1aa2)](), this['pfxEmitter2'][_0x13022b(0x726)](this['x'], this['y']), this[_0x13022b(0xb0d)][_0x13022b(0x1aa2)](), this[_0x13022b(0xb8c)][_0x13022b(0x1348)]({
                            'start': 0x4,
                            'end': 0xc * _0x4dbc2d
                        }), this[_0x13022b(0xb0d)][_0x13022b(0x1348)]({
                            'start': 0x4,
                            'end': 0xc * _0x4dbc2d
                        }), null === (_0x4642f6 = this[_0x13022b(0x660)]) || void 0x0 === _0x4642f6 || _0x4642f6[_0x13022b(0x1a34)](), this['scaleTween'] = _0x87a86b[_0x13022b(0xd2c)][_0x13022b(0x1043)][_0x13022b(0x6d2)][_0x13022b(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0.5 * this[_0x13022b(0x6d2)][_0x13022b(0x12f9)][_0x13022b(0x140e)] * _0x4dbc2d,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x9a6f4c = _0x13022b;
                                this[_0x9a6f4c(0xb8c)][_0x9a6f4c(0x1a34)](), this['pfxEmitter2']['stop'](), this[_0x9a6f4c(0x14fb)]();
                            }
                        }), _0x87a86b['default'][_0x13022b(0x1043)][_0x13022b(0x14d8)][_0x13022b(0x49c)] && (this['exploSprite']['x'] = this['x'], this[_0x13022b(0x235)]['y'] = this['y'], this[_0x13022b(0x235)][_0x13022b(0x8a2)](0x0), this[_0x13022b(0x235)]['setVisible'](!0x0), this[_0x13022b(0x235)][_0x13022b(0xb4a)](0x2328), null === (_0x4fa5a1 = this['exploTween']) || void 0x0 === _0x4fa5a1 || _0x4fa5a1[_0x13022b(0x1a34)](), this['exploTween'] = _0x87a86b['default']['Core'][_0x13022b(0x6d2)]['tweens'][_0x13022b(0x18bd)]({
                            'targets': this['exploSprite'],
                            'scaleX': 0x60 * _0x4dbc2d / 0x40,
                            'scaleY': 0.5 * this['scene'][_0x13022b(0x12f9)][_0x13022b(0x140e)] * _0x4dbc2d / 0x40,
                            'duration': 0xfa,
                            'onComplete': () => {
                                const _0xd396cf = _0x13022b;
                                this['exploSprite'][_0xd396cf(0x183f)](!0x1);
                            }
                        })), null === (_0x2f2d1 = this['scaleTween2']) || void 0x0 === _0x2f2d1 || _0x2f2d1['stop'](), this[_0x13022b(0x161d)] = _0x87a86b['default'][_0x13022b(0x1043)][_0x13022b(0x6d2)][_0x13022b(0x12a1)]['add']({
                            'targets': this[_0x13022b(0x10bf)],
                            'scale': 1.5,
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x50ba06 = _0x13022b;
                                this['windowVfx'][_0x50ba06(0x183f)](!0x0), this[_0x50ba06(0x10bf)][_0x50ba06(0x8a2)](0x1);
                            }
                        });
                    } ['Update']() {}
                }
                _0x11c18a['B_Window'] = _0x29bba6, _0x11c18a['default'] = _0x29bba6;
            };
