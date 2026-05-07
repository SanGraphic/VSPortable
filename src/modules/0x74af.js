// Module 0x74af
// Args: _0x3bb08d, _0x501788, _0x288c80

export default (_0x3bb08d, _0x501788, _0x288c80) => {
                'use strict';
                const _0x5bc71e = a0_0x6932;
                var _0x31d8a8 = this && this['__importDefault'] || function(_0x5c5c91) {
                    const _0x557427 = _0x5bc71e;
                    return _0x5c5c91 && _0x5c5c91[_0x557427(0x16f1)] ? _0x5c5c91 : {
                        'default': _0x5c5c91
                    };
                };
                Object['defineProperty'](_0x501788, '__esModule', {
                    'value': !0x0
                }), _0x501788['B_CarnageExplosion'] = void 0x0;
                const _0x38f16d = _0x31d8a8(_0x288c80(0xa14d)),
                    _0x3dcfd4 = _0x31d8a8(_0x288c80(0x5f07)),
                    _0x41c1e0 = _0x288c80(0x18304);
                class _0x2fbab4 extends _0x38f16d['default'] {
                    constructor(_0x44000f, _0x466e9d, _0x26ce43, _0x2b65da, _0x10edb6) {
                        const _0x1e84e0 = _0x5bc71e;
                        super(_0x44000f, _0x466e9d, _0x26ce43, 'vfx', 'round2.png', _0x2b65da, _0x10edb6), this['totalTime'] = 0x0, this[_0x1e84e0(0x1761)] = this['scene'][_0x1e84e0(0x18bd)][_0x1e84e0(0x1791)]('vfx'), this['pfxEmitter'] = this[_0x1e84e0(0x1761)][_0x1e84e0(0x14c0)]({
                            'frame': ['PfxPink.png', 'PfxPurple.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xc8,
                                'max': 0xdc
                            },
                            'quantity': 0x64,
                            'scale': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'frequency': 0x4,
                            'blendMode': _0x41c1e0[_0x1e84e0(0x10fc)][_0x1e84e0(0x1811)],
                            'on': !0x1
                        }), this[_0x1e84e0(0xb0d)] = this['particlesManager']['createEmitter']({
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
                            'quantity': 0x1,
                            'scaleX': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scaleY': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'tint': 0xff88ff,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this['well'] = this['particlesManager']['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x14,
                            'gravity': 0xc8
                        }), this[_0x1e84e0(0x18eb)] = this[_0x1e84e0(0x6d2)][_0x1e84e0(0x18bd)]['sprite'](0x0, 0x0, 'vfx', 'Screen.png')[_0x1e84e0(0x183f)](!0x1)['setAlpha'](0.5);
                        let _0x45ab0e = this[_0x1e84e0(0x18eb)][_0x1e84e0(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': 0x1d,
                            'zeroPad': 0x0,
                            'prefix': 'Screeno_',
                            'suffix': '.png'
                        });
                        this['screenSprite'][_0x1e84e0(0x183e)]['create']({
                            'key': 'screen',
                            'frames': _0x45ab0e,
                            'frameRate': 0x3c,
                            'repeat': 0x0
                        }), this['setTint'](0xddff);
                    } ['OnRecycle']() {
                        const _0x1e8881 = _0x5bc71e;
                        super[_0x1e8881(0x5ce)](), this['scaleX'] = 0x1, this[_0x1e8881(0x1721)] = 0x1, this[_0x1e8881(0xcf9)][_0x1e8881(0xdf6)](0xa), this[_0x1e8881(0xcf9)][_0x1e8881(0x543)] = !0x0, this[_0x1e8881(0x18eb)][_0x1e8881(0x8a2)](this[_0x1e8881(0x4a1)]['PArea']), this['Explode']();
                    } ['Explode']() {
                        const _0x2628e0 = _0x5bc71e;
                        var _0x2aa174, _0xc28c95;
                        this['scaleX'] = 0x0, this[_0x2628e0(0x1721)] = 0x0, this[_0x2628e0(0xe71)] = 0x1, this[_0x2628e0(0x18eb)]['x'] = this['x'], this[_0x2628e0(0x18eb)]['y'] = this['y'], this[_0x2628e0(0x18eb)][_0x2628e0(0x35a)] = !0x0, this[_0x2628e0(0x18eb)][_0x2628e0(0xe71)] = 0x0, this['screenSprite'][_0x2628e0(0x183e)]['play']('screen'), null === (_0x2aa174 = this['alphaTween']) || void 0x0 === _0x2aa174 || _0x2aa174[_0x2628e0(0x1a34)](), this['alphaTween'] = this['scene'][_0x2628e0(0x12a1)]['add']({
                            'targets': this['screenSprite'],
                            'alpha': 0.5,
                            'yoyo': !0x0,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x492a68 = _0x2628e0;
                                this[_0x492a68(0x14fb)]();
                            }
                        }), null === (_0xc28c95 = this[_0x2628e0(0x10e7)]) || void 0x0 === _0xc28c95 || _0xc28c95['stop'](), this[_0x2628e0(0x10e7)] = this['scene'][_0x2628e0(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x5 * this['weapon'][_0x2628e0(0x5f5)],
                            'alpha': 0x0,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x3b2b31 = _0x2628e0;
                                this[_0x3b2b31(0xcf9)][_0x3b2b31(0x543)] = !0x1;
                            }
                        }), this['pfxEmitter']['emitParticleAt'](this['x'], this['y']), this['pfxEmitter2'][_0x2628e0(0x108b)](this['x'], this['y']);
                    } ['Update'](_0x45bf8a) {
                        const _0x56828b = _0x5bc71e;
                        this[_0x56828b(0xb78)] += _0x45bf8a, this['well']['x'] = _0x3dcfd4[_0x56828b(0xd2c)][_0x56828b(0x1043)][_0x56828b(0x10f6)]['x'] + 0xfa * Math['sin'](this[_0x56828b(0xb78)]), this['well']['y'] = _0x3dcfd4[_0x56828b(0xd2c)]['Core']['Player']['y'] + 0xfa * Math[_0x56828b(0xd7e)](this[_0x56828b(0xb78)]);
                    }
                }
                _0x501788['B_CarnageExplosion'] = _0x2fbab4, _0x501788['default'] = _0x2fbab4;
            };
