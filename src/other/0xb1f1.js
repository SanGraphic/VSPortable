// Module 0xb1f1
// Args: _0x249192, _0x5c7c7f, _0x353be6

export default (_0x249192, _0x5c7c7f, _0x353be6) => {
                'use strict';
                const _0x2c698f = a0_0x6932;
                var _0x1e6684 = this && this['__importDefault'] || function(_0x790ae2) {
                    const _0x1e8025 = _0x2c698f;
                    return _0x790ae2 && _0x790ae2[_0x1e8025(0x16f1)] ? _0x790ae2 : {
                        'default': _0x790ae2
                    };
                };
                Object['defineProperty'](_0x5c7c7f, '__esModule', {
                    'value': !0x0
                });
                const _0x140f93 = _0x353be6(0x18304),
                    _0x1824ae = _0x1e6684(_0x353be6(0x1fd7)),
                    _0x4870a1 = _0x1e6684(_0x353be6(0x5103)),
                    _0x370fc1 = _0x1e6684(_0x353be6(0x5f07)),
                    _0xb5fb9f = _0x1e6684(_0x353be6(0x869f)),
                    _0x2356d6 = _0x1e6684(_0x353be6(0xa6c));
                class _0x269c1d extends _0xb5fb9f['default'] {
                    constructor() {
                        const _0x7805d2 = _0x2c698f;
                        super(...arguments), this[_0x7805d2(0x285)] = 0x3a98, this[_0x7805d2(0x1a13)] = 0x0;
                    } ['AfterFullInitialization']() {
                        const _0x1f90b9 = _0x2c698f;
                        this['doilies'] = [];
                        let _0x1b3080 = 0.5 * this[_0x1f90b9(0x6d2)]['renderer'][_0x1f90b9(0x173c)],
                            _0x1cb97e = 0.5 * this['scene'][_0x1f90b9(0x12f9)][_0x1f90b9(0x140e)];
                        for (let _0x30f96a = 0x1; _0x30f96a <= 0x9; _0x30f96a++) {
                            let _0x140872 = this[_0x1f90b9(0x6d2)][_0x1f90b9(0x18bd)][_0x1f90b9(0x568)](_0x1b3080, _0x1cb97e, 'vfx', 'doi0' + _0x30f96a + '.png');
                            _0x140872[_0x1f90b9(0xd87)](0x0), _0x140872[_0x1f90b9(0xf8e)](0.5), _0x140872[_0x1f90b9(0x11c7)](_0x140f93[_0x1f90b9(0x10fc)]['ADD']), _0x140872[_0x1f90b9(0xdab)](0x0), _0x140872['setDepth'](0x2710), _0x140872[_0x1f90b9(0xb34)](0xffffff, 0xffffdd, 0xffffff, 0xffddff), this[_0x1f90b9(0x9fd)][_0x1f90b9(0x1564)](_0x140872);
                        }
                        this['MorphVFX'] = new _0x2356d6[(_0x1f90b9(0xd2c))](this['scene']), this[_0x1f90b9(0x39e)]['burstTint'] = [0x1111, 0x111100, 0x110011, 0x111111], this['MorphVFX'][_0x1f90b9(0x793)] = 's_pfx_rainbow_64.png', this['MorphVFX'][_0x1f90b9(0x157)] = 'bubbleSphere.png', this[_0x1f90b9(0x39e)][_0x1f90b9(0x18c8)](), this['fogRays'] = this[_0x1f90b9(0x6d2)][_0x1f90b9(0x18bd)][_0x1f90b9(0x105b)](0x0, 0x0, 'vfx', 'fogRays1.png')[_0x1f90b9(0xf8e)](0x0)[_0x1f90b9(0x8a2)](this[_0x1f90b9(0x6d2)][_0x1f90b9(0x12f9)][_0x1f90b9(0x173c)] / 0xa0, this[_0x1f90b9(0x6d2)][_0x1f90b9(0x12f9)][_0x1f90b9(0x140e)] / 0x64)[_0x1f90b9(0x11c7)](_0x140f93[_0x1f90b9(0x10fc)][_0x1f90b9(0x82f)])[_0x1f90b9(0xdab)](0x0)[_0x1f90b9(0x183f)](!0x1)[_0x1f90b9(0xd87)](0x0)[_0x1f90b9(0xb4a)](_0x4870a1[_0x1f90b9(0xd2c)][_0x1f90b9(0x55d)] - 0x4);
                        const _0xe278cf = this[_0x1f90b9(0x824)]['anims'][_0x1f90b9(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x0,
                            'prefix': 'fogRays',
                            'suffix': '.png'
                        });
                        this[_0x1f90b9(0x824)]['anims'][_0x1f90b9(0x6a8)]({
                            'key': 'loop',
                            'frames': _0xe278cf,
                            'frameRate': 0x18,
                            'repeat': -0x1
                        }), this[_0x1f90b9(0x824)][_0x1f90b9(0x183e)]['play']('loop'), this['timesRevived'] = 0x0;
                    } ['LevelUp']() {
                        const _0x1abe00 = _0x2c698f;
                        super['LevelUp'](), this['scene'][_0x1abe00(0x915)][_0x1abe00(0x12b8)]({
                            'delay': 0x64,
                            'callback': () => {
                                const _0x3db0ce = _0x1abe00;
                                this[_0x3db0ce(0x1aa8)]();
                            }
                        });
                    } ['OnStop']() {
                        const _0x2e6c8e = _0x2c698f;
                        this['wiggleTween'][_0x2e6c8e(0x1631)](), this[_0x2e6c8e(0x9b5)](0x0);
                    } ['Revive'](_0x1c0fb6 = 0x1) {
                        const _0x2fa57c = _0x2c698f;
                        if (super[_0x2fa57c(0x780)](_0x1c0fb6), this['timesRevived'] += 0x1, _0x370fc1[_0x2fa57c(0xd2c)][_0x2fa57c(0x1267)][_0x2fa57c(0x7f6)](_0x1824ae['default'][_0x2fa57c(0x106b)], {
                                'volume': 0x1,
                                'rate': 0.5
                            }, 0x7d0, 0x1), this[_0x2fa57c(0x39e)][_0x2fa57c(0x4e6)](), this[_0x2fa57c(0xf44)] = 0x0, !this['hasBonus']) {
                            this['SetInvulForMilliSecondsNonCumulative'](0xfa0 + 0x7d0 * this['timesRevived']), _0x370fc1[_0x2fa57c(0xd2c)]['Core'][_0x2fa57c(0x14d8)][_0x2fa57c(0x49c)] && (this['fogRays']['setVisible'](!0x0), this[_0x2fa57c(0x824)][_0x2fa57c(0xdab)](0x1)), this['hasBonus'] = !0x0, this[_0x2fa57c(0x572)] = 0x2, this['CooldownBonus'] = -0x1, this['MoveBonus'] = Math['max'](0x0, 0x2 - this['moveSpeed']), this['power'] += this[_0x2fa57c(0x572)], this[_0x2fa57c(0xe0e)] += this[_0x2fa57c(0x1589)], this[_0x2fa57c(0x1205)] += this[_0x2fa57c(0x1910)];
                            for (let _0x3f3bfb = 0x0; _0x3f3bfb < _0x370fc1[_0x2fa57c(0xd2c)][_0x2fa57c(0x1043)]['Weapons']['length']; _0x3f3bfb++) {
                                const _0x3e23bd = _0x370fc1['default'][_0x2fa57c(0x1043)][_0x2fa57c(0x506)][_0x3f3bfb];
                                _0x3e23bd['isPowerUp'] || _0x3e23bd[_0x2fa57c(0x1754)]();
                            }
                        }
                    } ['Update'](_0x8fedc0) {
                        const _0x2d4db6 = _0x2c698f;
                        if (super['Update'](_0x8fedc0), this['hasBonus']) {
                            this[_0x2d4db6(0xf44)] += _0x8fedc0;
                            let _0x33317f = this[_0x2d4db6(0x285)] + 0x7d0 * this[_0x2d4db6(0x1a13)];
                            this[_0x2d4db6(0xf44)] >= _0x33317f - 0x7d0 && (this[_0x2d4db6(0x824)]['alpha'] = 0x1 - (this['ElapsedGFBonusTime'] - (_0x33317f - 0x7d0)) / 0x3e8), this['ElapsedGFBonusTime'] >= _0x33317f && (this[_0x2d4db6(0x824)][_0x2d4db6(0x183f)](!0x1), this[_0x2d4db6(0x1126)]());
                        }
                    } ['RemoveBonus']() {
                        const _0xe10ed0 = _0x2c698f;
                        this[_0xe10ed0(0x1854)] = !0x1, this[_0xe10ed0(0x31f)] -= this['MightBonus'], this[_0xe10ed0(0xe0e)] -= this['CooldownBonus'], this['moveSpeed'] -= this[_0xe10ed0(0x1910)];
                    } ['RosaryDamage']() {
                        const _0x28a062 = _0x2c698f;
                        _0x370fc1[_0x28a062(0xd2c)][_0x28a062(0x1043)][_0x28a062(0x1aa8)](!0x1, 0x0), this[_0x28a062(0x560)]();
                    } ['PlayRosaryAnim']() {
                        const _0x1b4c03 = _0x2c698f;
                        var _0x2aead2;
                        _0x370fc1[_0x1b4c03(0xd2c)][_0x1b4c03(0x1267)][_0x1b4c03(0x7f6)](_0x1824ae[_0x1b4c03(0xd2c)][_0x1b4c03(0x1a0f)], {
                            'volume': 1.8,
                            'rate': 0x2
                        }, 0x1f4, 0x2), _0x370fc1[_0x1b4c03(0xd2c)][_0x1b4c03(0x1043)]['PlayerOptions'][_0x1b4c03(0x49c)] && (null === (_0x2aead2 = this['tween1']) || void 0x0 === _0x2aead2 || _0x2aead2['stop'](), this[_0x1b4c03(0x1995)] = this[_0x1b4c03(0x6d2)][_0x1b4c03(0x12a1)]['add']({
                            'targets': this[_0x1b4c03(0x9fd)],
                            'alpha': this[_0x1b4c03(0x6d2)][_0x1b4c03(0x12a1)][_0x1b4c03(0x29e)](0.05, {
                                'start': 0.35
                            }),
                            'angle': 0x168,
                            'ease': 'Sine.easeInOut',
                            'scale': this['scene'][_0x1b4c03(0x12a1)]['stagger'](0.25, {
                                'start': 0x2
                            }),
                            'delay': this['scene'][_0x1b4c03(0x12a1)][_0x1b4c03(0x29e)](0xa, {}),
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'onStop': () => {
                                const _0xa0eae1 = _0x1b4c03;
                                for (let _0x1957a8 = 0x0; _0x1957a8 < this[_0xa0eae1(0x9fd)]['length']; _0x1957a8++) this[_0xa0eae1(0x9fd)][_0x1957a8]['setScale'](0x0)['setAlpha'](0x0);
                            }
                        }));
                    }
                }
                _0x5c7c7f['default'] = _0x269c1d;
            };
