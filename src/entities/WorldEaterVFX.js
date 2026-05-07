// Module 0x178dc
// Args: _0x1375c3, _0x29c0d2, _0x127d0a

export default (_0x1375c3, _0x29c0d2, _0x127d0a) => {
                'use strict';
                const _0xba73b0 = a0_0x6932;
                var _0x543d28 = this && this['__importDefault'] || function(_0x46a985) {
                    return _0x46a985 && _0x46a985['__esModule'] ? _0x46a985 : {
                        'default': _0x46a985
                    };
                };
                Object['defineProperty'](_0x29c0d2, '__esModule', {
                    'value': !0x0
                }), _0x29c0d2['WorldEaterVFX'] = void 0x0;
                const _0x504907 = _0x127d0a(0x18304),
                    _0x1b4f2d = _0x543d28(_0x127d0a(0x136b9)),
                    _0x27015f = _0x543d28(_0x127d0a(0xc42e)),
                    _0x473b9f = _0x543d28(_0x127d0a(0x1fd7)),
                    _0x5745e2 = _0x543d28(_0x127d0a(0x54e3)),
                    _0x4a6391 = _0x543d28(_0x127d0a(0x5f07));
                class _0x4075dd {
                    constructor(_0x172d23) {
                        const _0x55db54 = a0_0x6932;
                        this['scene'] = _0x172d23;
                        let _0x3f7f60 = 0.5 * this['scene']['renderer']['width'],
                            _0x3e31b6 = 0.5 * this['scene']['renderer']['height'];
                        this['worldEaterImage'] = this['scene']['add']['image'](_0x3f7f60, _0x3e31b6, 'vfx', '2Skull1.png'), this['worldEaterImage']['setScrollFactor'](0x0), this['worldEaterImage']['setOrigin'](0.5), this['worldEaterImage']['setAlpha'](0x0), this['worldEaterImage']['setDepth'](0x2710), this['faderImage'] = this['scene']['add']['image'](0x0, 0x0, 'vfx', 'blackDot.png')['setScrollFactor'](0x0)['setScale'](this['scene']['renderer']['width'], this['scene']['renderer']['height'])['setAlpha'](0x0)['setOrigin'](0x0)['setDepth'](0x270f), this['isPlayingWorldEaterVfx'] = !0x1, this['rays'] = [];
                        for (let _0x116eed = 0x0; _0x116eed < 0xd; _0x116eed++) {
                            let _0x34efce = this['scene']['add']['image'](0.5 * this['scene']['renderer']['width'], 0.5 * this['scene']['renderer']['height'], 'vfx', 'RayRay.png')['setAlpha'](0x1)['setScale'](0x0)['setScrollFactor'](0x0)['setBlendMode'](_0x504907['BlendModes']['ADD'])['setDepth'](0x270e);
                            this['rays']['push'](_0x34efce);
                        }
                    } ['CastSoulSteal'](_0x51421f = null) {
                        const _0x3fcb0c = a0_0x6932;
                        if (this['isPlayingWorldEaterVfx']) this['DoSoulSteal']();
                        else {
                            this['PlayWorldEater'](_0x51421f);
                            for (let _0x48a645 = 0x0; _0x48a645 < this['rays']['length']; _0x48a645++) {
                                let _0x56b821 = this['rays'][_0x48a645];
                                _0x56b821['setAngle'](0x168 * (Math['random']() - 0.5)), this['scene']['tweens']['add']({
                                    'targets': this['rays'][_0x48a645],
                                    'alpha': 0x0,
                                    'scale': this['scene']['tweens']['stagger'](0.2, {
                                        'start': 0x2
                                    }),
                                    'duration': this['scene']['tweens']['stagger'](0x14, {
                                        'start': 0x12c
                                    }),
                                    'angle': 0x2 * this['rays'][_0x48a645]['angle'],
                                    'onStart': () => {
                                        _0x56b821['setAlpha'](0x1), _0x56b821['setScale'](0x0);
                                    }
                                });
                            }
                        }
                    } ['PlayWorldEater'](_0x222724 = null) {
                        const _0x576da0 = _0xba73b0;
                        var _0x25a21a, _0x4525be, _0x42e768;
                        if (this['isPlayingWorldEaterVfx']) return;
                        this[_0x576da0(0x4d0)] = !0x0, _0x4a6391[_0x576da0(0xd2c)][_0x576da0(0x1267)][_0x576da0(0x7f6)](_0x473b9f[_0x576da0(0xd2c)][_0x576da0(0x1161)], {
                            'volume': 0x1
                        }), this[_0x576da0(0x1a4c)][_0x576da0(0x8a2)](0x0), this[_0x576da0(0x1a4c)][_0x576da0(0xdab)](0x0), this['worldEaterImage'][_0x576da0(0x381)]('2Skull1.png');
                        let _0x4bbc2a = this[_0x576da0(0x6d2)][_0x576da0(0x12f9)][_0x576da0(0x140e)] / 0x100;
                        null === (_0x25a21a = this['worldEaterTween1']) || void 0x0 === _0x25a21a || _0x25a21a[_0x576da0(0x1a34)](), this[_0x576da0(0x17e6)] = this[_0x576da0(0x6d2)][_0x576da0(0x12a1)][_0x576da0(0x18bd)]({
                            'targets': this[_0x576da0(0x1a4c)],
                            'scale': _0x4bbc2a,
                            'alpha': 0.75,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0xb45f97 = _0x576da0;
                                this[_0xb45f97(0x474)](), this['ScreenShake'](), _0x4a6391[_0xb45f97(0xd2c)]['Sound'][_0xb45f97(0x7f6)](_0x473b9f[_0xb45f97(0xd2c)]['Attack2'], {
                                    'volume': 0x1,
                                    'rate': 0.5
                                }), this['worldEaterImage'][_0xb45f97(0x381)]('2Skull2.png'), _0x222724 && _0x222724();
                            }
                        }), null === (_0x4525be = this['worldEaterTween2']) || void 0x0 === _0x4525be || _0x4525be[_0x576da0(0x1a34)](), this['worldEaterTween2'] = this[_0x576da0(0x6d2)][_0x576da0(0x12a1)][_0x576da0(0x18bd)]({
                            'targets': this[_0x576da0(0x1a4c)],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0x1f4,
                            'onStart': () => {
                                const _0x4c1897 = _0x576da0;
                                this['worldEaterImage'][_0x4c1897(0xdab)](0x1);
                            },
                            'onComplete': () => {
                                const _0x4c23ea = _0x576da0;
                                this[_0x4c23ea(0x4d0)] = !0x1;
                            }
                        }), null === (_0x42e768 = this['worldEaterTween3']) || void 0x0 === _0x42e768 || _0x42e768[_0x576da0(0x1a34)](), this[_0x576da0(0xb5a)] = this[_0x576da0(0x6d2)]['tweens']['add']({
                            'targets': this[_0x576da0(0x334)],
                            'alpha': 0.35,
                            'duration': 0x1f4,
                            'yoyo': !0x0
                        });
                    } ['DoSoulSteal']() {
                        const _0x23af14 = _0xba73b0;
                        for (let _0x1e2127 = 0x0; _0x1e2127 < _0x4a6391[_0x23af14(0xd2c)]['Core'][_0x23af14(0x1a91)][_0x23af14(0xed9)]; _0x1e2127++) {
                            const _0x4733c1 = _0x4a6391[_0x23af14(0xd2c)][_0x23af14(0x1043)]['Enemies'][_0x1e2127];
                            if (!_0x4733c1[_0x23af14(0x1935)] && _0x4a6391[_0x23af14(0xd2c)][_0x23af14(0x1043)][_0x23af14(0x1554)][_0x23af14(0x185)](_0x4733c1)) {
                                _0x4733c1[_0x23af14(0x1112)](Math[_0x23af14(0x1981)](0x42, _0x4733c1[_0x23af14(0xd2e)]), _0x1b4f2d[_0x23af14(0xd2c)]['NONE'], 0x0, _0x5745e2['default'][_0x23af14(0x13b0)]);
                                let _0x2f2384 = {
                                    'x': _0x4733c1['x'],
                                    'y': _0x4733c1['y']
                                };
                                this['scene'][_0x23af14(0x915)]['addEvent']({
                                    'callback': () => {
                                        const _0x2fb3c1 = _0x23af14;
                                        let _0xdc1c63 = _0x4a6391[_0x2fb3c1(0xd2c)][_0x2fb3c1(0x1043)]['MakePickup'](_0x2f2384['x'], _0x2f2384['y'], _0x27015f[_0x2fb3c1(0xd2c)][_0x2fb3c1(0x21b)]);
                                        _0xdc1c63['goToPlayer'] = !0x0, _0xdc1c63['time'] = 0x1;
                                    },
                                    'delay': 0xa * _0x1e2127
                                });
                            }
                        }
                    } ['ScreenShake']() {
                        const _0x5c7fdf = _0xba73b0;
                        _0x4a6391['default'][_0x5c7fdf(0x1043)][_0x5c7fdf(0x14d8)][_0x5c7fdf(0x10f7)] && _0x4a6391['default']['Core']['scene']['tweens'][_0x5c7fdf(0x18bd)]({
                            'targets': _0x4a6391['default'][_0x5c7fdf(0x1043)][_0x5c7fdf(0x6d2)][_0x5c7fdf(0x1793)][_0x5c7fdf(0x4cd)][_0x5c7fdf(0x86c)],
                            'x': 0x3,
                            'duration': 0x18,
                            'yoyo': !0x0,
                            'repeat': 0xc,
                            'onStart': () => {
                                const _0x27270e = _0x5c7fdf;
                                _0x4a6391['default']['Core'][_0x27270e(0x6d2)][_0x27270e(0x1793)]['main']['followOffset']['x'] = -0x3;
                            },
                            'onComplete': () => {
                                const _0x2f6162 = _0x5c7fdf;
                                _0x4a6391[_0x2f6162(0xd2c)][_0x2f6162(0x1043)][_0x2f6162(0x6d2)][_0x2f6162(0x1793)][_0x2f6162(0x4cd)][_0x2f6162(0x188c)](0x0, 0x0);
                            }
                        });
                    }
                }
                _0x29c0d2['WorldEaterVFX'] = _0x4075dd, _0x29c0d2['default'] = _0x4075dd;
            };
