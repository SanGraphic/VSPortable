// Module 0x15b4a
// Args: _0x438275, _0x4996c3, _0x4772f2

export default (_0x438275, _0x4996c3, _0x4772f2) => {
                'use strict';
                const _0x3d5a12 = a0_0x6932;
                Object['defineProperty'](_0x4996c3, '__esModule', {
                    'value': !0x0
                }), _0x4996c3['PrizeIcon'] = void 0x0;
                const _0x5108f5 = _0x4772f2(0x18304);
                class _0x4ce9c5 {
                    constructor(_0x4ff47f, _0x4c38bb, _0x1db926, _0x386526, _0x384131 = 0xd) {
                        const _0xcb5ccc = _0x3d5a12;
                        this[_0xcb5ccc(0xb61)] = !0x1, this[_0xcb5ccc(0x6d2)] = _0x4ff47f, this['x'] = _0x4c38bb, this['y'] = _0x1db926, this[_0xcb5ccc(0x14aa)] = _0x386526, this['bg'] = this['scene'][_0xcb5ccc(0x18bd)][_0xcb5ccc(0x105b)](_0x4c38bb, _0x1db926, 'vfx', 'PrizeBG.png')[_0xcb5ccc(0x8a2)](0x0)[_0xcb5ccc(0xb4a)](_0x384131)[_0xcb5ccc(0xdab)](0.8)[_0xcb5ccc(0x183f)](!0x1), this[_0xcb5ccc(0x14a0)] = this[_0xcb5ccc(0x6d2)][_0xcb5ccc(0x18bd)][_0xcb5ccc(0x105b)](_0x4c38bb, _0x1db926, 'vfx', 'HitStarWhite2.png')[_0xcb5ccc(0x11c7)](_0x5108f5[_0xcb5ccc(0x10fc)]['ADD'])['setScale'](0x6)[_0xcb5ccc(0xdab)](0.7)['setDepth'](_0x384131)[_0xcb5ccc(0x183f)](!0x1), this[_0xcb5ccc(0x5f4)] = this[_0xcb5ccc(0x6d2)][_0xcb5ccc(0x18bd)]['sprite'](_0x4c38bb, _0x1db926, 'vfx', 'HitStarWhite2.png')['setBlendMode'](_0x5108f5[_0xcb5ccc(0x10fc)]['ADD'])[_0xcb5ccc(0x8a2)](0x8)[_0xcb5ccc(0xdab)](0.7)[_0xcb5ccc(0x9b5)](0x2d)[_0xcb5ccc(0xb4a)](_0x384131)['setVisible'](!0x1), this[_0xcb5ccc(0x10a0)] = this[_0xcb5ccc(0x6d2)]['add'][_0xcb5ccc(0x105b)](_0x4c38bb, _0x1db926, 'vfx', 'sPFX_ring_64.png')[_0xcb5ccc(0x11c7)](_0x5108f5['BlendModes']['ADD'])[_0xcb5ccc(0x8a2)](0x8)[_0xcb5ccc(0xdab)](0.5)[_0xcb5ccc(0xb4a)](_0x384131)['setVisible'](!0x1), this['prize'] = this['scene']['add'][_0xcb5ccc(0x105b)](_0x4c38bb, _0x1db926, 'items', _0x386526)['setScale'](0x0)['setDepth'](_0x384131)['setVisible'](!0x1);
                    } ['Play']() {
                        const _0x51c755 = _0x3d5a12;
                        this[_0x51c755(0xb61)] || (this[_0x51c755(0xb61)] = !0x0, this['bg']['setVisible'](!0x0), this[_0x51c755(0x169)][_0x51c755(0x183f)](!0x0), this['ring'][_0x51c755(0x183f)](!0x0), this[_0x51c755(0x5f4)][_0x51c755(0x183f)](!0x0), this[_0x51c755(0x14a0)][_0x51c755(0x183f)](!0x0), this[_0x51c755(0x6d2)]['tweens'][_0x51c755(0x18bd)]({
                            'duration': 0x2710,
                            'targets': [this[_0x51c755(0x14a0)]],
                            'angle': 0x168,
                            'repeat': -0x1
                        }), this[_0x51c755(0x6d2)][_0x51c755(0x12a1)][_0x51c755(0x18bd)]({
                            'duration': 0x1b58,
                            'targets': [this[_0x51c755(0x5f4)]],
                            'angle': 0x195,
                            'repeat': -0x1
                        }), this['scene'][_0x51c755(0x12a1)]['add']({
                            'duration': 0x32,
                            'targets': [this['bg'], this['prize']],
                            'scale': 0x2
                        }), this[_0x51c755(0x6d2)]['tweens'][_0x51c755(0x18bd)]({
                            'duration': 0x64,
                            'targets': this['ring'],
                            'scale': 0x0
                        }), this['scene']['tweens']['add']({
                            'duration': 0x32,
                            'targets': [this['star1'], this[_0x51c755(0x5f4)]],
                            'scale': 0x2,
                            'onComplete': () => {
                                const _0x226a42 = _0x51c755;
                                this['star1']['setFrame']('HitStar2.png'), this['star2']['setFrame']('HitStar2.png'), this[_0x226a42(0x14a0)]['setDepth'](this[_0x226a42(0x14a0)][_0x226a42(0x16c6)] - 0x1), this[_0x226a42(0x5f4)]['setDepth'](this[_0x226a42(0x5f4)]['depth'] - 0x1), this['scene'][_0x226a42(0x12a1)][_0x226a42(0x18bd)]({
                                    'duration': 0x1f4,
                                    'targets': [this[_0x226a42(0x14a0)]],
                                    'scale': 0x4,
                                    'yoyo': !0x0,
                                    'repeat': -0x1
                                }), this['scene']['tweens'][_0x226a42(0x18bd)]({
                                    'duration': 0x258,
                                    'targets': [this[_0x226a42(0x5f4)]],
                                    'scale': 0x4,
                                    'yoyo': !0x0,
                                    'repeat': -0x1
                                });
                            }
                        }));
                    } ['Hide'](_0x36578c = this['x'], _0x4e635c = this['y']) {
                        const _0x750998 = _0x3d5a12;
                        this[_0x750998(0x6d2)][_0x750998(0x12a1)][_0x750998(0x18bd)]({
                            'duration': 0x96,
                            'targets': [this['bg'], this['prize'], this['star1'], this[_0x750998(0x5f4)]],
                            'scale': 0x0,
                            'alpha': 0x0,
                            'x': _0x36578c,
                            'y': _0x4e635c,
                            'ease': 'Sine.easeInOut'
                        });
                    }
                }
                _0x4996c3['PrizeIcon'] = _0x4ce9c5, _0x4996c3['default'] = _0x4ce9c5;
            };
