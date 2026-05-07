// Module 0x16764
// Args: _0x525e1d, _0x37e544, _0x7716e7

export default (_0x525e1d, _0x37e544, _0x7716e7) => {
                'use strict';
                const _0x24eba6 = a0_0x6932;
                var _0x1f16b9 = this && this['__importDefault'] || function(_0x268a2e) {
                    return _0x268a2e && _0x268a2e['__esModule'] ? _0x268a2e : {
                        'default': _0x268a2e
                    };
                };
                Object['defineProperty'](_0x37e544, '__esModule', {
                    'value': !0x0
                }), _0x37e544['B_Blood_Lancet'] = void 0x0;
                const _0xefd519 = _0x1f16b9(_0x7716e7(0xa14d)),
                    _0xe4ede3 = _0x1f16b9(_0x7716e7(0x5f07));
                class _0x110636 extends _0xefd519['default'] {
                    constructor(_0x57cdf9, _0x52c657, _0x167410, _0x4ca954, _0x1b79d1) {
                        const _0x5db53f = _0x24eba6;
                        super(_0x57cdf9, _0x52c657, _0x167410, 'vfx', 'outer0.png', _0x4ca954, _0x1b79d1), this[_0x5db53f(0xa7f)] = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png', '10.png', '11.png', '12.png'], this[_0x5db53f(0xaee)] = [], this[_0x5db53f(0x35a)] = !0x1, this[_0x5db53f(0x1234)] = this[_0x5db53f(0x4a1)], this[_0x5db53f(0xb34)](0xff0000), this[_0x5db53f(0x8e2)] = [];
                        for (let _0x1e7241 = 0x0; _0x1e7241 < this[_0x5db53f(0xa7f)][_0x5db53f(0xed9)]; _0x1e7241++) {
                            const _0x5ebf60 = this[_0x5db53f(0xa7f)][_0x1e7241];
                            let _0x4d2998 = this[_0x5db53f(0x6d2)][_0x5db53f(0x18bd)][_0x5db53f(0x568)](_0x52c657, _0x167410, 'items', _0x5ebf60)[_0x5db53f(0xb34)](0xff0000)[_0x5db53f(0xdab)](0x0)['setDepth'](0.5 * -this[_0x5db53f(0x6d2)]['renderer']['height']);
                            this['numbers']['push'](_0x4d2998), this[_0x5db53f(0xaee)]['push']({
                                'radius': 0x0
                            });
                        }
                    } ['overrideWeaponData'](_0x446d46) {
                        const _0x4a8bee = _0x24eba6;
                        var _0x57afc4, _0x9b0ac4, _0x5dbe9b, _0x2949ef;
                        this[_0x4a8bee(0xcf9)]['enable'] = !0x0, this['setVisible'](!0x0), this[_0x4a8bee(0xcf9)][_0x4a8bee(0xdf6)](0x40), this[_0x4a8bee(0x177d)] = !0x1, this['alpha'] = 0.5, this['amount'] = Math['min'](0xa, _0xe4ede3['default'][_0x4a8bee(0x1043)][_0x4a8bee(0x10f6)]['amount']) + _0x446d46[_0x4a8bee(0x9b8)], this[_0x4a8bee(0x9b8)] *= this['amount'], this['setScale'](0x0), this[_0x4a8bee(0x6b4)] = _0x446d46['amount'], _0xe4ede3[_0x4a8bee(0xd2c)]['Core']['scene'][_0x4a8bee(0x915)][_0x4a8bee(0x17fb)](this['ExpireTimer']), this[_0x4a8bee(0x12a3)] = _0xe4ede3['default'][_0x4a8bee(0x1043)]['scene'][_0x4a8bee(0x915)][_0x4a8bee(0x12b8)]({
                            'delay': _0x446d46[_0x4a8bee(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x8d4eb6 = _0x4a8bee;
                                _0xe4ede3['default'][_0x8d4eb6(0x1043)][_0x8d4eb6(0x6d2)][_0x8d4eb6(0x915)][_0x8d4eb6(0x17fb)](this['ExpireTimer']), this[_0x8d4eb6(0x14e3)]();
                            }
                        }), null === (_0x57afc4 = this[_0x4a8bee(0x11d1)]) || void 0x0 === _0x57afc4 || _0x57afc4[_0x4a8bee(0x1a34)](), this['imageTween'] = _0xe4ede3[_0x4a8bee(0xd2c)][_0x4a8bee(0x1043)]['scene']['add'][_0x4a8bee(0x99a)]({
                            'targets': this['numbers'],
                            'alpha': 0.8,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': this[_0x4a8bee(0x6d2)][_0x4a8bee(0x12a1)][_0x4a8bee(0x29e)](0x14, {
                                'start': 0x3e8
                            }),
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'onStart': () => {
                                const _0x197229 = _0x4a8bee;
                                this['angle'] = 0x0;
                                for (let _0x35abb1 = 0x0; _0x35abb1 < this['numbers']['length']; _0x35abb1++) this[_0x197229(0x8e2)][_0x35abb1]['alpha'] = 0.5;
                            }
                        }), null === (_0x9b0ac4 = this[_0x4a8bee(0x595)]) || void 0x0 === _0x9b0ac4 || _0x9b0ac4['stop'](), this[_0x4a8bee(0x595)] = _0xe4ede3[_0x4a8bee(0xd2c)]['Core'][_0x4a8bee(0x6d2)][_0x4a8bee(0x18bd)]['tween']({
                            'targets': this,
                            'angle': 0x168,
                            'loop': !0x0,
                            'duration': 0xfa0,
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'onStart': () => {
                                const _0x3062e7 = _0x4a8bee;
                                this[_0x3062e7(0xd96)] = 0x0;
                            }
                        });
                        let _0x39cabe = Math[_0x4a8bee(0x1981)](0x1, _0xe4ede3[_0x4a8bee(0xd2c)]['Core']['Magnet'][_0x4a8bee(0x161a)] / 0x40);
                        null === (_0x5dbe9b = this['scaleTween']) || void 0x0 === _0x5dbe9b || _0x5dbe9b['stop'](), this[_0x4a8bee(0x660)] = _0xe4ede3[_0x4a8bee(0xd2c)][_0x4a8bee(0x1043)]['scene']['add']['tween']({
                            'targets': this,
                            'scale': _0x39cabe,
                            'duration': 0x12c,
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0x4c0eee = _0x4a8bee;
                                this[_0x4c0eee(0x8a2)](0x0);
                            }
                        }), null === (_0x2949ef = this['radiusTween']) || void 0x0 === _0x2949ef || _0x2949ef['stop'](), this[_0x4a8bee(0x144e)] = _0xe4ede3[_0x4a8bee(0xd2c)][_0x4a8bee(0x1043)]['scene'][_0x4a8bee(0x18bd)]['tween']({
                            'targets': this[_0x4a8bee(0xaee)],
                            'radius': _0xe4ede3[_0x4a8bee(0xd2c)][_0x4a8bee(0x1043)]['Magnet']['radius'] - 0xc,
                            'duration': this['scene'][_0x4a8bee(0x12a1)]['stagger'](0x32, {
                                'start': 0x3e8 * _0x39cabe
                            }),
                            'ease': 'Sine.easeInOut',
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'onStart': () => {
                                const _0x264afa = _0x4a8bee;
                                for (let _0x4e3be0 = 0x0; _0x4e3be0 < this['radii'][_0x264afa(0xed9)]; _0x4e3be0++) this['radii'][_0x4e3be0][_0x264afa(0x161a)] = 0xa;
                            }
                        }), this['setDepth'](0.5 * -_0xe4ede3['default']['Core']['scene'][_0x4a8bee(0x12f9)][_0x4a8bee(0x140e)]);
                    } ['explode'](_0x56aed7 = this['x'], _0xbbff3f = this['y']) {
                        const _0x4b06a3 = _0x24eba6;
                        this[_0x4b06a3(0x9b8)]--, this[_0x4b06a3(0x9b8)] <= 0x0 && (this[_0x4b06a3(0xcf9)]['enable'] = !0x1, this['FadeOut']());
                    } ['FadeOut']() {
                        const _0xa7fef = _0x24eba6;
                        var _0x28a09d, _0x5d6e01, _0x1cb1ca, _0x5bee69;
                        null === (_0x28a09d = this['scaleTween']) || void 0x0 === _0x28a09d || _0x28a09d['stop'](), null === (_0x5d6e01 = this[_0xa7fef(0x11d1)]) || void 0x0 === _0x5d6e01 || _0x5d6e01[_0xa7fef(0x1a34)](), null === (_0x1cb1ca = this[_0xa7fef(0x1322)]) || void 0x0 === _0x1cb1ca || _0x1cb1ca[_0xa7fef(0x1a34)](), this['alphaTween'] = _0xe4ede3['default']['Core']['scene']['add'][_0xa7fef(0x99a)]({
                            'targets': this[_0xa7fef(0x8e2)],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x1b6a70 = _0xa7fef;
                                this[_0x1b6a70(0x14fb)]();
                            }
                        }), null === (_0x5bee69 = this['radiusTween']) || void 0x0 === _0x5bee69 || _0x5bee69[_0xa7fef(0x1a34)](), this['radiusTween'] = _0xe4ede3[_0xa7fef(0xd2c)][_0xa7fef(0x1043)][_0xa7fef(0x6d2)][_0xa7fef(0x18bd)][_0xa7fef(0x99a)]({
                            'targets': this,
                            'radius': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x1183da = _0x24eba6;
                        var _0x3aac9a;
                        super[_0x1183da(0x14fb)](), this[_0x1183da(0x183f)](!0x1), _0xe4ede3[_0x1183da(0xd2c)]['Core'][_0x1183da(0x6d2)][_0x1183da(0x915)]['removeEvent'](this[_0x1183da(0x12a3)]), null === (_0x3aac9a = this['alphaTween']) || void 0x0 === _0x3aac9a || _0x3aac9a['stop']();
                    } ['Update'](_0x95a7df) {
                        const _0x617ff5 = _0x24eba6;
                        let _0x2fa9b7 = 0x2 * Math['PI'] / this[_0x617ff5(0x8e2)][_0x617ff5(0xed9)],
                            _0x32e388 = Phaser[_0x617ff5(0x24f)]['DegToRad'](this[_0x617ff5(0xd96)]);
                        for (let _0x3c1246 = 0x0; _0x3c1246 < this['numbers']['length']; _0x3c1246++) {
                            const _0x1da2d4 = this[_0x617ff5(0x8e2)][_0x3c1246];
                            _0x1da2d4['x'] = this['x'] + Math[_0x617ff5(0xd7e)](_0x2fa9b7 * _0x3c1246 + _0x32e388) * this['radii'][_0x3c1246][_0x617ff5(0x161a)], _0x1da2d4['y'] = this['y'] + Math['sin'](_0x2fa9b7 * _0x3c1246 + _0x32e388) * this['radii'][_0x3c1246]['radius'];
                        }
                        super[_0x617ff5(0xa9f)](_0x95a7df);
                    } ['OnHasHitAnObject'](_0x50fa9a) {
                        const _0x3decc5 = _0x24eba6;
                        if (!_0x50fa9a['isDead']) {
                            let _0x979c44 = _0x50fa9a;
                            if (_0x979c44[_0x3decc5(0x8b7)] >= 0x1) return;
                            _0x979c44[_0x3decc5(0x13fb)] > 0.2 && (_0x979c44['slow'] -= 0.01 * this['slowPower']);
                        }
                    }
                }
                _0x37e544['B_Blood_Lancet'] = _0x110636, _0x37e544['default'] = _0x110636;
            };
