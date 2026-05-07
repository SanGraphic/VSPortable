// Module 0xa6c
// Args: _0x208ac2, _0x1f60f9, _0xb5604d

export default (_0x208ac2, _0x1f60f9, _0xb5604d) => {
                'use strict';
                const _0x4d61a2 = a0_0x6932;
                var _0x4579ce = this && this['__importDefault'] || function(_0x30da52) {
                    const _0x7668b9 = a0_0x6932;
                    return _0x30da52 && _0x30da52['__esModule'] ? _0x30da52 : {
                        'default': _0x30da52
                    };
                };
                Object['defineProperty'](_0x1f60f9, '__esModule', {
                    'value': !0x0
                }), _0x1f60f9['MorphVFX'] = void 0x0;
                const _0x243031 = _0xb5604d(0x18304),
                    _0x43eb4d = _0x4579ce(_0xb5604d(0x5f07));
                class _0x2e0454 {
                    constructor(_0x72c8f2) {
                        const _0xc242d5 = a0_0x6932;
                        this['burstTint'] = [0xff00, 0xff, 0xffff00, 0xff0000], this['sparkName'] = 'blurredSharpStar.png', this['diskName'] = 'disc.png', this['scene'] = _0x72c8f2;
                    } ['Make']() {
                        const _0x11d8dd = _0x4d61a2;
                        this['x'] = 0.5 * this[_0x11d8dd(0x6d2)]['renderer']['width'], this['y'] = 0.5 * this['scene']['renderer'][_0x11d8dd(0x140e)], this[_0x11d8dd(0x11aa)] || (this['sparkSprite'] = this[_0x11d8dd(0x6d2)]['add']['image'](this['x'], this['y'], 'vfx', this['sparkName'])['setAlpha'](0x0)[_0x11d8dd(0x8a2)](0x0)[_0x11d8dd(0x11c7)](_0x243031[_0x11d8dd(0x10fc)][_0x11d8dd(0x1811)])['setDepth'](this['scene']['renderer']['height'])), this[_0x11d8dd(0x8ee)] || (this['ringSprite'] = this[_0x11d8dd(0x6d2)]['add'][_0x11d8dd(0x568)](this['x'], this['y'], 'vfx', this[_0x11d8dd(0x157)])['setAlpha'](0x0)['setScale'](0x0)['setBlendMode'](_0x243031[_0x11d8dd(0x10fc)]['ADD'])[_0x11d8dd(0xb4a)](this['scene'][_0x11d8dd(0x12f9)][_0x11d8dd(0x140e)])), this[_0x11d8dd(0x105e)] || (this[_0x11d8dd(0x105e)] = this['scene'][_0x11d8dd(0x18bd)]['image'](this['x'], this['y'], 'vfx', 'blackDot.png')['setAlpha'](0x0)['setOrigin'](0.5)[_0x11d8dd(0x8a2)](this[_0x11d8dd(0x6d2)]['renderer'][_0x11d8dd(0x173c)], this[_0x11d8dd(0x6d2)][_0x11d8dd(0x12f9)][_0x11d8dd(0x140e)])['setDepth'](this[_0x11d8dd(0x6d2)]['renderer']['height'] - 0x1)['setScrollFactor'](0x0)), this['burstSprite'] || (this['burstSprite'] = this['scene'][_0x11d8dd(0x18bd)][_0x11d8dd(0x105b)](0.5 * this[_0x11d8dd(0x6d2)][_0x11d8dd(0x12f9)][_0x11d8dd(0x173c)], 0.5 * this['scene'][_0x11d8dd(0x12f9)][_0x11d8dd(0x140e)], 'vfx', 'Burst1.png')['setAlpha'](0x0)[_0x11d8dd(0x8a2)](0xa)[_0x11d8dd(0x11c7)](_0x243031['BlendModes'][_0x11d8dd(0x1811)])['setDepth'](this[_0x11d8dd(0x6d2)][_0x11d8dd(0x12f9)]['height'])['setScrollFactor'](0x0)['setTint'](this['burstTint'][0x0], this['burstTint'][0x1], this[_0x11d8dd(0x9c6)][0x2], this[_0x11d8dd(0x9c6)][0x3]));
                        const _0x347865 = this[_0x11d8dd(0x794)][_0x11d8dd(0x183e)][_0x11d8dd(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this['burstSprite'][_0x11d8dd(0x183e)]['create']({
                            'key': 'enter',
                            'frames': _0x347865,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['PlaySparkle']() {
                        const _0x52dada = _0x4d61a2;
                        var _0x3541fe, _0x560960, _0x3b4647;
                        this[_0x52dada(0x794)]['anims']['play']('enter'), this['burstSprite']['setAlpha'](0x1), this['x'] = _0x43eb4d[_0x52dada(0xd2c)][_0x52dada(0x1043)][_0x52dada(0x10f6)]['x'], this['y'] = _0x43eb4d[_0x52dada(0xd2c)]['Core']['Player']['y'], this['ringSprite']['x'] = this['sparkSprite']['x'] = this['x'], this[_0x52dada(0x8ee)]['y'] = this['sparkSprite']['y'] = this['y'], null === (_0x3541fe = this[_0x52dada(0x9b6)]) || void 0x0 === _0x3541fe || _0x3541fe[_0x52dada(0x1a34)](), this['ringTween'] = this[_0x52dada(0x6d2)][_0x52dada(0x12a1)][_0x52dada(0x18bd)]({
                            'targets': this['ringSprite'],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.1,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x41bfb5 = _0x52dada;
                                this[_0x41bfb5(0x8ee)]['setScale'](0x0), this[_0x41bfb5(0x8ee)][_0x41bfb5(0xdab)](0x1);
                            }
                        }), null === (_0x560960 = this[_0x52dada(0x906)]) || void 0x0 === _0x560960 || _0x560960[_0x52dada(0x1a34)](), this[_0x52dada(0x906)] = this[_0x52dada(0x6d2)]['tweens']['add']({
                            'targets': this[_0x52dada(0x105e)],
                            'alpha': 0.65,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'onStart': () => {
                                this['darkSprite']['setAlpha'](0x0);
                            }
                        }), null === (_0x3b4647 = this[_0x52dada(0xa13)]) || void 0x0 === _0x3b4647 || _0x3b4647['stop'](), this[_0x52dada(0xa13)] = this[_0x52dada(0x6d2)][_0x52dada(0x12a1)][_0x52dada(0x18bd)]({
                            'targets': this['sparkSprite'],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.5,
                            'angle': 0xb4,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x548e1f = _0x52dada;
                                this[_0x548e1f(0x11aa)]['setScale'](0x0), this[_0x548e1f(0x11aa)][_0x548e1f(0xdab)](0x1), this['sparkSprite'][_0x548e1f(0x9b5)](0x0);
                            },
                            'onUpdate': () => {
                                const _0x35183e = _0x52dada;
                                this[_0x35183e(0x11aa)]['x'] = this['x'], this['sparkSprite']['y'] = this['y'] - 0x14, this[_0x35183e(0x8ee)]['x'] = this['x'], this[_0x35183e(0x8ee)]['y'] = this['y'] - 0x14;
                            },
                            'onComplete': () => {
                                const _0x46d085 = _0x52dada;
                                this['ringSprite'][_0x46d085(0xdab)](0x0), this['sparkSprite'][_0x46d085(0xdab)](0x0);
                            }
                        });
                    }
                }
                _0x1f60f9['MorphVFX'] = _0x2e0454, _0x1f60f9['default'] = _0x2e0454;
            };
