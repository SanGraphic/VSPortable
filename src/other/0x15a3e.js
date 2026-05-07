// Module 0x15a3e
// Args: _0x3a4ec0, _0x397415, _0xe2b1ae

export default (_0x3a4ec0, _0x397415, _0xe2b1ae) => {
                'use strict';
                const _0x23cc39 = a0_0x6932;
                var _0x4f0956 = this && this['__importDefault'] || function(_0x58c229) {
                    const _0xa791a4 = a0_0x6932;
                    return _0x58c229 && _0x58c229['__esModule'] ? _0x58c229 : {
                        'default': _0x58c229
                    };
                };
                Object['defineProperty'](_0x397415, '__esModule', {
                    'value': !0x0
                });
                const _0x2a0d54 = _0xe2b1ae(0x18304),
                    _0x5cbc75 = _0x4f0956(_0xe2b1ae(0x15dd)),
                    _0x16e8bf = _0x4f0956(_0xe2b1ae(0xdfbc)),
                    _0x72e4df = _0x4f0956(_0xe2b1ae(0x1fd7)),
                    _0x22111f = _0x4f0956(_0xe2b1ae(0x54e3)),
                    _0x360692 = _0x4f0956(_0xe2b1ae(0x5f07)),
                    _0x1709d3 = _0x4f0956(_0xe2b1ae(0x869f));
                class _0x5edb66 extends _0x1709d3['default'] {
                    constructor() {
                        const _0x30d984 = _0x23cc39;
                        super(...arguments), this[_0x30d984(0x23d)] = !0x1, this[_0x30d984(0x572)] = 0x0, this[_0x30d984(0x1910)] = 0x0, this[_0x30d984(0x1589)] = 0x0, this[_0x30d984(0x8b1)] = 0x0, this[_0x30d984(0x1544)] = 0x7530, this['MorphedTimes'] = 0x0, this['finalMorphedTimes'] = 0x0, this['tresholds'] = [0x1f4, 0x3e8, 0x7d0, 0xbb8, 0x1388, 0x1b58, 0x2710, 0x3a98], this['finalThreshold'] = 0x2710;
                    } ['CalculateTreshold']() {
                        const _0xb7bca9 = _0x23cc39;
                        this[_0xb7bca9(0x181e)] >= this['tresholds'][_0xb7bca9(0xed9)] ? (this[_0xb7bca9(0xc36)] = this['finalMorphedTimes'] * this['finalThreshold'], this[_0xb7bca9(0x17e8)]++) : this[_0xb7bca9(0xc36)] = this[_0xb7bca9(0x3ca)][this[_0xb7bca9(0x181e)]];
                    } ['Update'](_0x56ed8b) {
                        const _0x5c56be = _0x23cc39;
                        super['Update'](_0x56ed8b), _0x360692['default']['Core']['PlayerOptions']['RunEnemies'] > this[_0x5c56be(0xc36)] && this['Morph']();
                    } ['MakeLevelOne']() {
                        const _0x37b5ae = _0x23cc39;
                        super[_0x37b5ae(0xf64)](), this[_0x37b5ae(0x181e)] = 0x0, this['finalMorphedTimes'] = 0x2, this[_0x37b5ae(0x1279)] = !0x1, this[_0x37b5ae(0x23d)] = !0x1, this['MoveBonus'] = 0x0, this['MightBonus'] = 0x0, this['CooldownBonus'] = 0x0, this[_0x37b5ae(0x8b1)] = 0x0, this[_0x37b5ae(0x30b)](), this[_0x37b5ae(0x11aa)] || (this[_0x37b5ae(0x11aa)] = this[_0x37b5ae(0x6d2)][_0x37b5ae(0x18bd)][_0x37b5ae(0x568)](this['x'], this['y'], 'vfx', 'blurredSharpStar.png')[_0x37b5ae(0xdab)](0x0)['setScale'](0x0)['setBlendMode'](_0x2a0d54['BlendModes']['ADD'])[_0x37b5ae(0xb4a)](this[_0x37b5ae(0x6d2)][_0x37b5ae(0x12f9)]['height'])), this[_0x37b5ae(0x8ee)] || (this[_0x37b5ae(0x8ee)] = this[_0x37b5ae(0x6d2)]['add']['image'](this['x'], this['y'], 'vfx', 'disc.png')[_0x37b5ae(0xdab)](0x0)[_0x37b5ae(0x8a2)](0x0)[_0x37b5ae(0x11c7)](_0x2a0d54[_0x37b5ae(0x10fc)][_0x37b5ae(0x1811)])['setDepth'](this['scene']['renderer'][_0x37b5ae(0x140e)])), this[_0x37b5ae(0x105e)] || (this['darkSprite'] = this[_0x37b5ae(0x6d2)][_0x37b5ae(0x18bd)][_0x37b5ae(0x568)](this['x'], this['y'], 'vfx', 'blackDot.png')[_0x37b5ae(0xdab)](0x0)['setOrigin'](0x0)['setScale'](this['scene']['renderer']['width'], this[_0x37b5ae(0x6d2)]['renderer'][_0x37b5ae(0x140e)])['setDepth'](this[_0x37b5ae(0x6d2)][_0x37b5ae(0x12f9)]['height'] - 0x1)[_0x37b5ae(0xd87)](0x0)), this[_0x37b5ae(0x794)] || (this[_0x37b5ae(0x794)] = this['scene'][_0x37b5ae(0x18bd)][_0x37b5ae(0x105b)](0.5 * this[_0x37b5ae(0x6d2)]['renderer']['width'], 0.5 * this[_0x37b5ae(0x6d2)][_0x37b5ae(0x12f9)][_0x37b5ae(0x140e)], 'vfx', 'Burst1.png')[_0x37b5ae(0xdab)](0x0)[_0x37b5ae(0x8a2)](0xa)[_0x37b5ae(0x11c7)](_0x2a0d54[_0x37b5ae(0x10fc)][_0x37b5ae(0x1811)])[_0x37b5ae(0xb4a)](this[_0x37b5ae(0x6d2)][_0x37b5ae(0x12f9)]['height'])[_0x37b5ae(0xd87)](0x0)[_0x37b5ae(0xb34)](0xff00, 0xff, 0xffff00, 0xff0000));
                        const _0x24fbd9 = this[_0x37b5ae(0x183e)][_0x37b5ae(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this[_0x37b5ae(0x794)][_0x37b5ae(0x183e)]['create']({
                            'key': 'enter',
                            'frames': _0x24fbd9,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['OnStop']() {
                        const _0x3bf07e = _0x23cc39;
                        this[_0x3bf07e(0x748)][_0x3bf07e(0x1631)](), this[_0x3bf07e(0x9b5)](0x0);
                    } ['Morph']() {
                        const _0x948fd = _0x23cc39;
                        if (!this[_0x948fd(0x1279)]) {
                            if (_0x360692['default']['Sound'][_0x948fd(0x7f6)](_0x72e4df[_0x948fd(0xd2c)]['Morph'], {
                                    'volume': 0x1,
                                    'rate': 0.5
                                }, 0x7d0, 0x1), _0x360692['default']['Sound'][_0x948fd(0x7f6)](_0x72e4df[_0x948fd(0xd2c)]['Rosary'], {
                                    'volume': 1.5
                                }, 0x7d0, 0x1), this[_0x948fd(0x4e6)](), _0x360692['default'][_0x948fd(0x1043)][_0x948fd(0x1aa8)](!0x1), _0x360692[_0x948fd(0xd2c)]['Core'][_0x948fd(0x117d)](_0x22111f['default']['BOCCE']), this[_0x948fd(0x1279)] = !0x0, this['MorphedTimes']++, this[_0x948fd(0x30b)](), !this[_0x948fd(0x23d)]) {
                                let _0x9af108 = _0x5cbc75['default'][_0x16e8bf[_0x948fd(0xd2c)][_0x948fd(0xf5f)]][0x0];
                                const _0x34fb3d = this['anims'][_0x948fd(0x1756)](_0x9af108['textureName'], {
                                    'start': 0x1,
                                    'end': _0x9af108[_0x948fd(0x3ff)],
                                    'zeroPad': 0x2,
                                    'prefix': _0x9af108[_0x948fd(0x4f0)][_0x948fd(0xa0d)]('01.png', ''),
                                    'suffix': '.png'
                                });
                                this[_0x948fd(0x994)](_0x9af108[_0x948fd(0xacb)], _0x9af108[_0x948fd(0x4f0)]);
                                let _0x478ba5 = _0x9af108[_0x948fd(0xc43)] ? _0x9af108['walkFrameRate'] : 0x8;
                                this[_0x948fd(0x183e)][_0x948fd(0x6a8)]({
                                    'key': 'walk2',
                                    'frames': _0x34fb3d,
                                    'frameRate': _0x478ba5,
                                    'repeat': -0x1
                                }), this['hasSecondAnim'] = !0x0;
                            }
                            this['anims'][_0x948fd(0x902)]('walk2'), this[_0x948fd(0x1589)] = -0.2, this[_0x948fd(0x1910)] = Math[_0x948fd(0x1981)](0x0, 0x2 - this['moveSpeed']), this[_0x948fd(0x572)] = 0x2, this[_0x948fd(0x8b1)] = 0.5, this[_0x948fd(0xe0e)] += this['CooldownBonus'], this['moveSpeed'] += this[_0x948fd(0x1910)], this['power'] += this['MightBonus'], this['curse'] += this[_0x948fd(0x8b1)], this[_0x948fd(0xf90)](this[_0x948fd(0x1544)]), this['restoreTint'](), this['scene'][_0x948fd(0x915)][_0x948fd(0x12b8)]({
                                'delay': this['MorphDuration'],
                                'callback': () => {
                                    const _0x3008ec = _0x948fd;
                                    this[_0x3008ec(0x1949)]();
                                }
                            });
                        }
                    } ['Unmorph']() {
                        const _0x5a26ab = _0x23cc39;
                        this[_0x5a26ab(0xe0e)] -= this[_0x5a26ab(0x1589)], this['moveSpeed'] -= this[_0x5a26ab(0x1910)], this['power'] -= this['MightBonus'], this[_0x5a26ab(0x173f)] -= this[_0x5a26ab(0x8b1)], this[_0x5a26ab(0x183e)][_0x5a26ab(0x902)]('walk'), this['isMorphed'] = !0x1, _0x360692[_0x5a26ab(0xd2c)][_0x5a26ab(0x1043)][_0x5a26ab(0x861)](_0x22111f[_0x5a26ab(0xd2c)]['BOCCE']);
                    } ['PlaySparkle']() {
                        const _0xc429fe = _0x23cc39;
                        var _0x4ac1b0, _0x48ea60, _0xa5d5fa;
                        this[_0xc429fe(0x794)][_0xc429fe(0x183e)]['play']('enter'), this[_0xc429fe(0x794)]['setAlpha'](0x1), null === (_0x4ac1b0 = this[_0xc429fe(0x9b6)]) || void 0x0 === _0x4ac1b0 || _0x4ac1b0[_0xc429fe(0x1a34)](), this['ringTween'] = this[_0xc429fe(0x6d2)][_0xc429fe(0x12a1)][_0xc429fe(0x18bd)]({
                            'targets': this[_0xc429fe(0x8ee)],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.1,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x93220f = _0xc429fe;
                                this[_0x93220f(0x8ee)]['setScale'](0x0), this[_0x93220f(0x8ee)][_0x93220f(0xdab)](0x1);
                            }
                        }), null === (_0x48ea60 = this['darkTween']) || void 0x0 === _0x48ea60 || _0x48ea60['stop'](), this['darkTween'] = this['scene'][_0xc429fe(0x12a1)]['add']({
                            'targets': this['darkSprite'],
                            'alpha': 0.65,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x98e0ec = _0xc429fe;
                                this[_0x98e0ec(0x105e)]['setAlpha'](0x0);
                            }
                        }), null === (_0xa5d5fa = this[_0xc429fe(0xa13)]) || void 0x0 === _0xa5d5fa || _0xa5d5fa[_0xc429fe(0x1a34)](), this['sparkTween'] = this[_0xc429fe(0x6d2)][_0xc429fe(0x12a1)][_0xc429fe(0x18bd)]({
                            'targets': this[_0xc429fe(0x11aa)],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.5,
                            'angle': 0xb4,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x25c283 = _0xc429fe;
                                this['sparkSprite'][_0x25c283(0x8a2)](0x0), this[_0x25c283(0x11aa)]['setAlpha'](0x1), this[_0x25c283(0x11aa)]['setAngle'](0x0);
                            },
                            'onUpdate': () => {
                                const _0x4d09b1 = _0xc429fe;
                                this[_0x4d09b1(0x11aa)]['x'] = this['x'], this['sparkSprite']['y'] = this['y'] - 0x14, this[_0x4d09b1(0x8ee)]['x'] = this['x'], this[_0x4d09b1(0x8ee)]['y'] = this['y'] - 0x14;
                            },
                            'onComplete': () => {
                                const _0x53d0dd = _0xc429fe;
                                this[_0x53d0dd(0x8ee)][_0x53d0dd(0xdab)](0x0), this[_0x53d0dd(0x11aa)][_0x53d0dd(0xdab)](0x0);
                            }
                        });
                    }
                }
                _0x397415['default'] = _0x5edb66;
            };
