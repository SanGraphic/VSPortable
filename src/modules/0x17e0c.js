// Module 0x17e0c
// Args: _0x5938fa, _0x14797b, _0x55e653

export default (_0x5938fa, _0x14797b, _0x55e653) => {
                'use strict';
                const _0x57333b = a0_0x6932;
                var _0x3c100d = this && this['__importDefault'] || function(_0x1c2c9d) {
                    return _0x1c2c9d && _0x1c2c9d['__esModule'] ? _0x1c2c9d : {
                        'default': _0x1c2c9d
                    };
                };
                Object['defineProperty'](_0x14797b, '__esModule', {
                    'value': !0x0
                }), _0x14797b['DirecterManager'] = void 0x0;
                const _0x4b9a39 = _0x3c100d(_0x55e653(0x148f5)),
                    _0x48b8f6 = _0x3c100d(_0x55e653(0x5f07));
                class _0x31d115 {
                    constructor(_0x547f71) {
                        const _0x160286 = _0x57333b;
                        this[_0x160286(0x178b)] = 0x1, this['currentPhase'] = 0x1, this['bgmTimers'] = [], this['delays'] = [
                            [],
                            [0x22ef, 0x45de, 0x68ad, 0x8b95],
                            [0x45bc, 0x8ba0, 0xae8a],
                            [0x28b0, 0x5162, 0xa752],
                            [0x8ba0],
                            []
                        ], this['soundKeys'] = [_0x4b9a39['default'][_0x160286(0xcba)], _0x4b9a39[_0x160286(0xd2c)]['Phase1'], _0x4b9a39[_0x160286(0xd2c)]['Phase2'], _0x4b9a39[_0x160286(0xd2c)][_0x160286(0x17f8)], _0x4b9a39['default'][_0x160286(0x16e6)], _0x4b9a39['default']['Phase5']], this[_0x160286(0x1221)] = !0x1, this[_0x160286(0x101e)] = !0x1, this[_0x160286(0x223)] = !0x1, this[_0x160286(0x16f)] = !0x1, this[_0x160286(0x104a)] = !0x1, this[_0x160286(0x1768)] = 0x0, this['TresholdPhase1'] = 0x7530, this[_0x160286(0xb3a)] = 0xea60, this['TresholdPhase3'] = 0xea60, this[_0x160286(0xeb0)] = 0xafc8, this[_0x160286(0x6d2)] = _0x547f71, this['OmniScene'] = _0x48b8f6['default'][_0x160286(0x1043)][_0x160286(0x69e)][_0x160286(0xdee)], this[_0x160286(0x707)] = _0x48b8f6[_0x160286(0xd2c)][_0x160286(0x1043)][_0x160286(0x17c7)], this['BG'] = _0x48b8f6[_0x160286(0xd2c)][_0x160286(0x1043)]['Stage'][_0x160286(0x12ed)], this[_0x160286(0x1378)] = Math[_0x160286(0x1981)](0.7 * _0x48b8f6['default']['Core'][_0x160286(0x14d8)][_0x160286(0xd93)], 0.7);
                    } ['CheckTime1'](_0xe27cdd, _0x2f34b6, _0x50820f = !0x0) {
                        const _0x436d00 = _0x57333b;
                        let _0x507eef = this[_0x436d00(0xe0a)][_0xe27cdd],
                            _0x18918e = this['soundKeys'][_0xe27cdd],
                            _0x4b5f03 = this[_0x436d00(0xdee)]['sound'][_0x436d00(0x18bd)](_0x18918e);
                        if (_0x4b5f03[_0x436d00(0x902)]({
                                'loop': _0xe27cdd < 0x5,
                                'volume': this[_0x436d00(0x1378)]
                            }), this['CurrentBGM'] = _0x4b5f03, _0x50820f && _0xe27cdd < 0x5 && this['OmniScene'][_0x436d00(0x12a1)][_0x436d00(0x18bd)]({
                                'targets': _0x4b5f03,
                                'volume': this['volume'],
                                'duration': 0x352,
                                'ease': 'Circ.easeIn',
                                'onStart': () => {
                                    const _0x4672e3 = _0x436d00;
                                    _0x4b5f03[_0x4672e3(0x1378)] = 0x0;
                                }
                            }), _0xe27cdd >= 0x5) return;
                        let _0x265df5 = 0x0;
                        for (_0x265df5 = 0x0; _0x265df5 < _0x507eef['length'] - 0x1; _0x265df5++) {
                            let _0x108065 = setTimeout(() => {
                                const _0x32e0f1 = _0x436d00;
                                this[_0x32e0f1(0x626)] >= _0x2f34b6 && (this[_0x32e0f1(0xecf)](), this[_0x32e0f1(0xdee)][_0x32e0f1(0x12a1)][_0x32e0f1(0x18bd)]({
                                    'targets': _0x4b5f03,
                                    'volume': 0x0,
                                    'duration': 0x4b0,
                                    'ease': 'Circ.easeIn',
                                    'onComplete': () => {
                                        const _0x29e36e = _0x32e0f1;
                                        _0x4b5f03[_0x29e36e(0x1a34)](), _0x4b5f03['destroy']();
                                    },
                                    'onStart': () => {
                                        const _0x531273 = _0x32e0f1;
                                        this['ChangePhase'](), this[_0x531273(0x1185)](_0xe27cdd + 0x1, _0x2f34b6 + 0x1);
                                    }
                                }));
                            }, _0x507eef[_0x265df5]);
                            this[_0x436d00(0xe3c)][_0x436d00(0x1564)](_0x108065);
                        }
                        if (_0x507eef[_0x436d00(0xed9)] > 0x0) {
                            let _0x3f2abc = setTimeout(() => {
                                const _0x4015e9 = _0x436d00;
                                this[_0x4015e9(0x626)] >= _0x2f34b6 ? (this[_0x4015e9(0xecf)](), this[_0x4015e9(0xdee)][_0x4015e9(0x12a1)][_0x4015e9(0x18bd)]({
                                    'targets': _0x4b5f03,
                                    'volume': 0x0,
                                    'duration': 0x352,
                                    'onComplete': () => {
                                        const _0x2a028d = _0x4015e9;
                                        _0x4b5f03[_0x2a028d(0x1a34)](), _0x4b5f03['destroy']();
                                    },
                                    'onStart': () => {
                                        const _0x1ca641 = _0x4015e9;
                                        this[_0x1ca641(0x1185)](_0xe27cdd + 0x1, _0x2f34b6 + 0x1), this[_0x1ca641(0x9c5)]();
                                    }
                                })) : (this['RemoveTimers'](), this['OmniScene']['tweens']['add']({
                                    'targets': _0x4b5f03,
                                    'volume': 0x0,
                                    'duration': 0x352,
                                    'onComplete': () => {
                                        _0x4b5f03['stop'](), _0x4b5f03['destroy']();
                                    },
                                    'onStart': () => {
                                        const _0x5ef57e = _0x4015e9;
                                        this[_0x5ef57e(0x1185)](_0xe27cdd, _0x2f34b6, !0x1);
                                    }
                                }));
                            }, _0x507eef[_0x265df5]);
                            this['bgmTimers'][_0x436d00(0x1564)](_0x3f2abc);
                        }
                    } ['RemoveTimers']() {
                        const _0x495dd8 = _0x57333b;
                        for (let _0x17ec2a = 0x0; _0x17ec2a < this[_0x495dd8(0xe3c)][_0x495dd8(0xed9)]; _0x17ec2a++) clearTimeout(this[_0x495dd8(0xe3c)][_0x17ec2a]);
                        this[_0x495dd8(0x1501)] && clearTimeout(this[_0x495dd8(0x1501)]), this[_0x495dd8(0xe3c)] = [];
                    } ['StartPhase0']() {
                        const _0x12f4bc = _0x57333b;
                        if (this['combatTimer'] = 0x0, _0x48b8f6['default'][_0x12f4bc(0x1267)]['StopMusic'](_0x48b8f6['default'][_0x12f4bc(0x1043)]['CurrentBGM']), this['BG'][_0x12f4bc(0x1568)](), this['quickDebug']) this[_0x12f4bc(0x626)] = 0x1, this[_0x12f4bc(0x1185)](0x1, 0x2);
                        else {
                            this['currentPhase'] = 0x0;
                            var _0x25a23b = this[_0x12f4bc(0xdee)]['sound'][_0x12f4bc(0x18bd)](_0x4b9a39[_0x12f4bc(0xd2c)]['Phase0']);
                            _0x25a23b[_0x12f4bc(0x902)]({
                                'volume': this[_0x12f4bc(0x1378)]
                            }), this['CurrentBGM'] = _0x25a23b, this[_0x12f4bc(0x1501)] = setTimeout(() => {
                                const _0xcc4f9d = _0x12f4bc;
                                this[_0xcc4f9d(0x6d2)]['tweens'][_0xcc4f9d(0x18bd)]({
                                    'targets': _0x25a23b,
                                    'volume': 0x0,
                                    'duration': 0x44c,
                                    'onComplete': () => {
                                        const _0x3f7de0 = _0xcc4f9d;
                                        _0x25a23b[_0x3f7de0(0x1a34)](), _0x25a23b['destroy']();
                                    },
                                    'onStart': () => {
                                        const _0x479fbf = _0xcc4f9d;
                                        this[_0x479fbf(0x14fc)]();
                                    }
                                });
                            }, 0x7a4b);
                        }
                    } ['ChangePhase']() {
                        const _0x5aa6a0 = _0x57333b;
                        this['currentPhase'] >= 0x2 && (this[_0x5aa6a0(0x101e)] || (this['startedPhase2'] = !0x0, this[_0x5aa6a0(0x1132)]())), this[_0x5aa6a0(0x626)] >= 0x3 && (this[_0x5aa6a0(0x16f)] || (this[_0x5aa6a0(0x16f)] = !0x0, this[_0x5aa6a0(0x1729)]())), this['currentPhase'] >= 0x4 && (this['startedPhase4'] || (this[_0x5aa6a0(0x223)] = !0x0, this[_0x5aa6a0(0x527)]())), this['currentPhase'] >= 0x5 && (this['startedPhase5'] || (this[_0x5aa6a0(0x104a)] = !0x0, this[_0x5aa6a0(0xced)]()));
                    } ['DebugPhases'](_0x1dbe87) {
                        const _0x379970 = _0x57333b;
                        this[_0x379970(0xdee)][_0x379970(0x915)]['addEvent']({
                            'delay': _0x1dbe87,
                            'callback': () => {
                                this['currentPhase']++;
                            },
                            'repeat': 0x3
                        });
                    } ['StartPhase1']() {
                        const _0x3796fc = _0x57333b;
                        this['BG']['OnPhase1'](), this['combatTimer'] = 0x0, this['currentPhase'] = 0x1, this[_0x3796fc(0x1185)](0x1, 0x2);
                    } ['StartPhase2']() {
                        const _0x553af9 = _0x57333b;
                        this['BG']['OnPhase2'](), this[_0x553af9(0xdee)]['tweens']['add']({
                            'targets': _0x48b8f6['default']['Core'],
                            'SFXVolumeFactor': 0.9,
                            'duration': 0x1388
                        }), this['BG'][_0x553af9(0xe2e)](), this['BG']['ZoomOverStages'](), this['BG'][_0x553af9(0xbe8)]['setAlpha']({
                            'start': 0.9,
                            'end': 0x0
                        }), this['scene'][_0x553af9(0x915)][_0x553af9(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x3ffd07 = _0x553af9;
                                this['BG'][_0x3ffd07(0x118f)]();
                            }
                        }), this[_0x553af9(0x6d2)]['time'][_0x553af9(0x12b8)]({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0xcb434 = _0x553af9;
                                this['BG']['pfxFire1']['stop'](), this['BG'][_0xcb434(0xd2d)]['stop'](), this['BG']['pfxFire1']['forEachAlive'](_0x15fb3e => {
                                    _0x15fb3e['velocityY'] = -0x258;
                                }, this), this['BG']['pfxFire2'][_0xcb434(0x1988)](_0x294a8a => {
                                    _0x294a8a['velocityY'] = -0x258;
                                }, this);
                            }
                        }), this['BG']['pfxFire1'][_0x553af9(0x1a34)](), this['BG']['pfxFire2'][_0x553af9(0x1a34)](), this['BG']['pfxFire1'][_0x553af9(0x1988)](_0x11222f => {
                            const _0x14d4f2 = _0x553af9;
                            _0x11222f[_0x14d4f2(0x15c1)] *= 0x3;
                        }, this), this['BG']['pfxFire2'][_0x553af9(0x1988)](_0xf4c215 => {
                            _0xf4c215['accelerationY'] *= 0x3;
                        }, this);
                    } ['StartPhase3']() {
                        const _0x26dc35 = _0x57333b;
                        this['BG']['OnPhase3'](), _0x48b8f6['default'][_0x26dc35(0x1043)]['EraseEnemies'](!0x1), this[_0x26dc35(0xdee)][_0x26dc35(0x12a1)][_0x26dc35(0x18bd)]({
                            'targets': _0x48b8f6[_0x26dc35(0xd2c)][_0x26dc35(0x1043)],
                            'SFXVolumeFactor': 0.8,
                            'duration': 0x1388
                        }), this['BG']['TurnBGToFire']();
                    } ['StartPhase4']() {
                        const _0x4c7df6 = _0x57333b;
                        this['BG'][_0x4c7df6(0x3ee)](), _0x48b8f6['default']['Core'][_0x4c7df6(0x28b)](!0x1), _0x48b8f6[_0x4c7df6(0xd2c)]['Core'][_0x4c7df6(0x10f6)][_0x4c7df6(0xfb6)] = !0x0, _0x48b8f6[_0x4c7df6(0xd2c)][_0x4c7df6(0x1043)][_0x4c7df6(0x10f6)][_0x4c7df6(0x8d0)] = 0x0, this['OmniScene']['tweens'][_0x4c7df6(0x18bd)]({
                            'targets': _0x48b8f6[_0x4c7df6(0xd2c)][_0x4c7df6(0x1043)],
                            'SFXVolumeFactor': 0.3,
                            'duration': 0x61a8
                        }), this['BG'][_0x4c7df6(0x292)]();
                    } ['StartPhase5']() {
                        const _0x5eb42b = _0x57333b;
                        this[_0x5eb42b(0xdee)][_0x5eb42b(0x12a1)][_0x5eb42b(0x18bd)]({
                            'targets': _0x48b8f6[_0x5eb42b(0xd2c)][_0x5eb42b(0x1043)],
                            'SFXVolumeFactor': 0.65,
                            'duration': 0x2710
                        }), this['BG']['OnPhase5'](), _0x48b8f6[_0x5eb42b(0xd2c)][_0x5eb42b(0x1043)][_0x5eb42b(0x28b)](!0x1), this['BG'][_0x5eb42b(0xfd2)](), this['BG'][_0x5eb42b(0x1030)](), this['BG'][_0x5eb42b(0x18e2)](), this['BG'][_0x5eb42b(0x1a0c)](), this['BG'][_0x5eb42b(0x2a9)](), this['BG']['PlayVideos'](), this['BG']['StartGifts'](), this['BG'][_0x5eb42b(0xcb9)](), this['BG']['StartZoomingOut']();
                    } ['Phase1TransitionCheck'](_0x450a79) {
                        const _0x1d8686 = _0x57333b;
                        if (0x1 == this[_0x1d8686(0x626)]) _0x450a79[_0x1d8686(0x3c7)]('complete', () => {
                            this['Phase1TransitionCheck'](_0x450a79);
                        }, this), this[_0x1d8686(0x178b)]++, this[_0x1d8686(0x178b)] > 0x4 && (this[_0x1d8686(0x178b)] = 0x1, this['currentPhase'] = 0x2), _0x450a79['play']('part' + this[_0x1d8686(0x178b)]);
                        else {
                            this['soundIndex'] = 0x0;
                            var _0x2bf35b = this[_0x1d8686(0xdee)]['sound'][_0x1d8686(0xd0b)](_0x4b9a39['default']['Phase2']);
                            this['Phase2TransitionCheck'](_0x2bf35b);
                        }
                    } ['Phase2TransitionCheck'](_0x3385db) {
                        const _0x470a5b = _0x57333b;
                        0x2 == this['currentPhase'] && (_0x3385db[_0x470a5b(0x3c7)]('complete', () => {
                            const _0x87eb0b = _0x470a5b;
                            this[_0x87eb0b(0x18b9)](_0x3385db);
                        }, this), this['soundIndex']++, this['soundIndex'] > 0x3 && (this[_0x470a5b(0x178b)] = 0x1), _0x3385db['play']('part' + this['soundIndex']));
                    } ['Cleanup']() {
                        const _0x2e397b = _0x57333b;
                        var _0x11c6c1;
                        null === (_0x11c6c1 = this[_0x2e397b(0x1239)]) || void 0x0 === _0x11c6c1 || _0x11c6c1['stop'](), this['RemoveTimers']();
                    } ['Update'](_0x22a32a) {
                        const _0x1353fd = _0x57333b;
                        this[_0x1353fd(0x1768)] += _0x22a32a, 0x1 === this[_0x1353fd(0x626)] && _0x48b8f6['default']['Core']['Player'][_0x1353fd(0x5e3)] >= 0x7 && this[_0x1353fd(0x1768)] >= this['TresholdPhase1'] && (this['currentPhase'] = 0x2, this['combatTimer'] = 0x0), 0x2 === this[_0x1353fd(0x626)] && _0x48b8f6['default'][_0x1353fd(0x1043)][_0x1353fd(0x10f6)][_0x1353fd(0x5e3)] >= 0xe && this[_0x1353fd(0x1768)] >= this[_0x1353fd(0xb3a)] && (0x0 === this['BG']['Directer']['BrokenMasks'] && this['BG']['Directer'][_0x1353fd(0x16c)](), this['BG'][_0x1353fd(0x150c)]['BrokenMasks'] >= 0x7 && (this[_0x1353fd(0x626)] = 0x3, this[_0x1353fd(0x1768)] = 0x0, this['BG']['Directer'][_0x1353fd(0x121a)] = 0x0, this['BG']['Directer'][_0x1353fd(0xe7f)] = !0x1)), 0x3 === this['currentPhase'] && _0x48b8f6[_0x1353fd(0xd2c)][_0x1353fd(0x1043)]['Player'][_0x1353fd(0x14e0)] < 0x1 && _0x48b8f6[_0x1353fd(0xd2c)]['Core'][_0x1353fd(0x10f6)][_0x1353fd(0x5e3)] >= 0x13 && this['combatTimer'] >= this[_0x1353fd(0x602)] && (this['BG'][_0x1353fd(0x150c)]['MakeMasksBreakable'](), this['BG']['Directer']['BrokenMasks'] >= 0x7 && (this['currentPhase'] = 0x4, this[_0x1353fd(0x1768)] = 0x0, this['BG'][_0x1353fd(0x150c)]['BrokenMasks'] = 0x0, this['BG'][_0x1353fd(0x150c)][_0x1353fd(0xe7f)] = !0x1)), 0x4 === this['currentPhase'] && _0x48b8f6[_0x1353fd(0xd2c)]['Core'][_0x1353fd(0x10f6)][_0x1353fd(0x5e3)] >= 0x16 && this['combatTimer'] >= this['TresholdPhase4'] && (this['BG'][_0x1353fd(0x150c)][_0x1353fd(0x16c)](), this['BG']['Directer'][_0x1353fd(0x121a)] >= 0x7 && (this['currentPhase'] = 0x5, this[_0x1353fd(0x1768)] = 0x0, _0x48b8f6['default'][_0x1353fd(0x1043)][_0x1353fd(0x10f6)]['growth'] = 0x0, _0x48b8f6[_0x1353fd(0xd2c)]['Core'][_0x1353fd(0x378)] = !0x1, _0x48b8f6['default'][_0x1353fd(0x1043)][_0x1353fd(0x106c)] = !0x1, this['BG'][_0x1353fd(0x150c)]['BrokenMasks'] = 0x0, this['BG']['Directer'][_0x1353fd(0xe7f)] = !0x1, this[_0x1353fd(0xdee)]['tweens'][_0x1353fd(0x18bd)]({
                            'targets': _0x48b8f6['default'][_0x1353fd(0x1043)],
                            'SFXVolumeFactor': 0.3,
                            'duration': 0x1388
                        })));
                    }
                }
                _0x14797b['DirecterManager'] = _0x31d115, _0x14797b['default'] = _0x31d115;
            };
