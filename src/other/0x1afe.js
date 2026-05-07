// Module 0x1afe
// Args: _0x18903e, _0x3719c2, _0x376cab

export default (_0x18903e, _0x3719c2, _0x376cab) => {
                'use strict';
                const _0x317938 = a0_0x6932;
                var _0x3b4b4b = this && this['__importDefault'] || function(_0x351527) {
                    const _0x5371b9 = _0x317938;
                    return _0x351527 && _0x351527[_0x5371b9(0x16f1)] ? _0x351527 : {
                        'default': _0x351527
                    };
                };
                Object['defineProperty'](_0x3719c2, '__esModule', {
                    'value': !0x0
                });
                const _0x3d8d2f = _0x376cab(0x18304),
                    _0x4dd247 = _0x3b4b4b(_0x376cab(0x15dd)),
                    _0x11d1f0 = _0x3b4b4b(_0x376cab(0x15abc)),
                    _0x22e14c = _0x3b4b4b(_0x376cab(0xdfbc)),
                    _0x217d4a = _0x3b4b4b(_0x376cab(0x1fd7)),
                    _0x51b4c8 = _0x3b4b4b(_0x376cab(0x54e3)),
                    _0x1b83c6 = _0x3b4b4b(_0x376cab(0x5f07)),
                    _0xef9262 = _0x3b4b4b(_0x376cab(0x1166a));
                class _0x32e053 extends _0xef9262['default'] {
                    constructor() {
                        const _0x35307a = _0x317938;
                        super(...arguments), this['sineF'] = 0x1, this[_0x35307a(0x657)] = !0x1, this[_0x35307a(0x408)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x4c43c0 = _0x317938;
                        super['OnRecycle'](), this[_0x4c43c0(0xb34)](0xccccff), this['ringSprite'] || (this['ringSprite'] = this['scene']['add'][_0x4c43c0(0x568)](this['x'], this['y'], 'vfx', 'sPFX_ring_64.png')[_0x4c43c0(0x8a2)](0x0)[_0x4c43c0(0x11c7)](_0x3d8d2f[_0x4c43c0(0x10fc)][_0x4c43c0(0x1811)])), this['setScale'](0x0), this['OnEnterTween'] = this[_0x4c43c0(0x6d2)]['tweens'][_0x4c43c0(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x4c43c0(0x17ef)],
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x24c1ee = _0x4c43c0;
                                this[_0x24c1ee(0x8a2)](0x0);
                            }
                        }), this[_0x4c43c0(0x1b1c)] = _0x11d1f0[_0x4c43c0(0xd2c)][this[_0x4c43c0(0xe49)]][0x0][_0x4c43c0(0x78e)], this[_0x4c43c0(0x1838)] = 0x1, this[_0x4c43c0(0x177d)] = !0x1, this['isTeleportOnCull'] = !0x0, this[_0x4c43c0(0xe71)] = 0.8, this[_0x4c43c0(0x657)] = !0x1, this[_0x4c43c0(0x18e8)] ? this[_0x4c43c0(0x18e8)][_0x4c43c0(0x1374)]() : this[_0x4c43c0(0x18e8)] = this['scene'][_0x4c43c0(0x12a1)]['add']({
                            'targets': this,
                            'sineF': 0.1,
                            'alpha': 0.6,
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['MulSpeed'](_0x1ae92c) {
                        const _0x1fd38d = _0x317938;
                        this[_0x1fd38d(0x1b1c)] = _0x11d1f0[_0x1fd38d(0xd2c)][this[_0x1fd38d(0xe49)]][0x0][_0x1fd38d(0x78e)] * _0x1ae92c;
                    } ['Disappear']() {
                        const _0x149134 = _0x317938;
                        var _0x4b1731;
                        null === (_0x4b1731 = this[_0x149134(0x18e8)]) || void 0x0 === _0x4b1731 || _0x4b1731['stop'](), this[_0x149134(0x1838)] = -0x2, this[_0x149134(0x177d)] = !0x0, this['isTeleportOnCull'] = !0x1, this['scene'][_0x149134(0x12a1)][_0x149134(0x18bd)]({
                            'targets': this,
                            'sineF': -0xa,
                            'duration': 0x7d0
                        });
                    } ['DeSpawn']() {
                        const _0x2e0b72 = _0x317938;
                        super['DeSpawn'](), this['spacebar'] = null, this['up'] = null, this[_0x2e0b72(0x8fc)] && this[_0x2e0b72(0x8fc)][_0x2e0b72(0x183f)](!0x1);
                    } ['Update'](_0x174b97) {
                        const _0x4c93b1 = _0x317938;
                        if (this['speed'] = this[_0x4c93b1(0x1b1c)] * this[_0x4c93b1(0x1838)], super[_0x4c93b1(0xa9f)](_0x174b97), this[_0x4c93b1(0x657)]) {
                            if (this['done']) return;
                            if (-0x1 != _0x1b83c6[_0x4c93b1(0xd2c)]['Core'][_0x4c93b1(0x14d8)]['UnlockedCharacters'][_0x4c93b1(0x1303)](_0x22e14c[_0x4c93b1(0xd2c)]['PANINI'])) return; - 0x1 != _0x1b83c6[_0x4c93b1(0xd2c)][_0x4c93b1(0x1043)]['PlayerOptions']['UnlockedCharacters']['indexOf'](_0x22e14c[_0x4c93b1(0xd2c)]['EXDASH']) && (this[_0x4c93b1(0x8fc)] || (this[_0x4c93b1(0x8fc)] = this['scene']['add']['sprite'](this['scene'][_0x4c93b1(0x12f9)][_0x4c93b1(0x173c)], this[_0x4c93b1(0x6d2)][_0x4c93b1(0x12f9)][_0x4c93b1(0x140e)], 'characters', 'uExdash_01.png')['setOrigin'](0.5)['setScale'](0x4)[_0x4c93b1(0x9b5)](-0x2d)[_0x4c93b1(0xd87)](0x0)[_0x4c93b1(0xb4a)](0xce4)[_0x4c93b1(0xdab)](0.8)), this['spritte'][_0x4c93b1(0x183f)](!0x0), _0x1b83c6['default'][_0x4c93b1(0x1267)]['PlaySound'](_0x217d4a[_0x4c93b1(0xd2c)][_0x4c93b1(0xc61)], {
                                'volume': 0x1
                            }, 0x4e20, 0x1), this[_0x4c93b1(0x16c8)] || (this[_0x4c93b1(0x16c8)] = this[_0x4c93b1(0x6d2)][_0x4c93b1(0x1331)]['keyboard'][_0x4c93b1(0x1aac)](Phaser['Input'][_0x4c93b1(0xa19)][_0x4c93b1(0x10f8)]['ENTER'])), this['up'] || (this['up'] = this['scene'][_0x4c93b1(0x1331)][_0x4c93b1(0x1340)][_0x4c93b1(0x1aac)](Phaser['Input'][_0x4c93b1(0xa19)][_0x4c93b1(0x10f8)][_0x4c93b1(0x12b2)])), this[_0x4c93b1(0x16c8)][_0x4c93b1(0x57f)] && this['up'][_0x4c93b1(0x57f)] && (this[_0x4c93b1(0x408)] = !0x0, -0x1 == _0x1b83c6[_0x4c93b1(0xd2c)]['Core']['PlayerOptions'][_0x4c93b1(0x1b12)]['indexOf'](_0x22e14c[_0x4c93b1(0xd2c)][_0x4c93b1(0x613)]) && (_0x1b83c6[_0x4c93b1(0xd2c)][_0x4c93b1(0x1043)][_0x4c93b1(0x14d8)][_0x4c93b1(0x1b12)][_0x4c93b1(0x1564)](_0x22e14c['default'][_0x4c93b1(0x613)]), _0x4dd247[_0x4c93b1(0xd2c)][_0x22e14c[_0x4c93b1(0xd2c)][_0x4c93b1(0x613)]][0x0]['hidden'] = !0x1, _0x4dd247[_0x4c93b1(0xd2c)][_0x22e14c['default']['PANINI']][0x0][_0x4c93b1(0x952)] = !0x0, _0x1b83c6['default'][_0x4c93b1(0x1043)][_0x4c93b1(0x14d8)][_0x4c93b1(0x1b5)][_0x4c93b1(0x1564)](_0x22e14c[_0x4c93b1(0xd2c)]['PANINI']), _0x1b83c6['default'][_0x4c93b1(0x1043)][_0x4c93b1(0x14d8)][_0x4c93b1(0x3ab)](), _0x1b83c6[_0x4c93b1(0xd2c)][_0x4c93b1(0x1267)]['PlaySound'](_0x217d4a[_0x4c93b1(0xd2c)][_0x4c93b1(0x2b6)]), _0x1b83c6[_0x4c93b1(0xd2c)][_0x4c93b1(0x1267)]['PlaySound'](_0x217d4a['default']['ThingFound'], {
                                'volume': 0x1,
                                'detune': -0x3e8,
                                'rate': 0.5
                            }))));
                        }
                    } ['Die']() {
                        const _0x419875 = _0x317938;
                        super['Die'](), _0x1b83c6[_0x419875(0xd2c)][_0x419875(0x1267)][_0x419875(0x7f6)](_0x217d4a['default'][_0x419875(0x82c)], {
                            'volume': 0x4,
                            'detune': 0x0,
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene'][_0x419875(0x12a1)]['add']({
                            'targets': this[_0x419875(0x8ee)],
                            'scale': 0x10,
                            'duration': 0x12c,
                            'repeat': 0x1,
                            'onStart': () => {
                                const _0x26de99 = _0x419875;
                                this['ringSprite']['x'] = this['x'], this[_0x26de99(0x8ee)]['y'] = this['y'];
                            },
                            'onComplete': () => {
                                this['ringSprite']['setVisible'](!0x1);
                            }
                        }), this[_0x419875(0x1438)] && (this[_0x419875(0x1438)](), this[_0x419875(0x1438)] = null);
                    } ['GetDamaged'](_0x238327, _0x2ee609, _0x5907b7, _0x47c45a) {
                        const _0xaa52dd = _0x317938;
                        if (!this[_0xaa52dd(0x657)]) {
                            if (_0x47c45a === _0x51b4c8['default'][_0xaa52dd(0xaa6)] || _0x47c45a === _0x51b4c8[_0xaa52dd(0xd2c)]['ROSARY'] || _0x47c45a === _0x51b4c8[_0xaa52dd(0xd2c)][_0xaa52dd(0xf20)] || _0x47c45a === _0x51b4c8['default']['CORRIDOR'] || _0x47c45a === _0x51b4c8['default']['SHROUD']) return this['Die'](), void(this['hasLostTreasure'] = !0x0);
                            _0x47c45a === _0x51b4c8['default'][_0xaa52dd(0x1812)] && (_0x238327 *= 0xa), super[_0xaa52dd(0x1112)](_0x238327, _0x2ee609, _0x5907b7, _0x47c45a);
                        }
                    }
                }
                _0x3719c2['default'] = _0x32e053;
            };
