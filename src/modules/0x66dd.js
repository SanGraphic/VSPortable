// Module 0x66dd
// Args: _0x32467c, _0x65da04, _0x3d41db

export default (_0x32467c, _0x65da04, _0x3d41db) => {
                'use strict';
                const _0x72dc43 = a0_0x6932;
                var _0xfd531 = this && this['__importDefault'] || function(_0x122f3a) {
                    const _0x2b601d = a0_0x6932;
                    return _0x122f3a && _0x122f3a['__esModule'] ? _0x122f3a : {
                        'default': _0x122f3a
                    };
                };
                Object['defineProperty'](_0x65da04, '__esModule', {
                    'value': !0x0
                }), _0x65da04['B_Blood_Pentagram'] = void 0x0;
                const _0x582090 = _0xfd531(_0x3d41db(0xa14d)),
                    _0x35923e = _0xfd531(_0x3d41db(0x5f07)),
                    _0x2a84c9 = _0xfd531(_0x3d41db(0x1fd7));
                class _0x4e4561 extends _0x582090['default'] {
                    constructor(_0xb396df, _0x3aaaa3, _0x1bcad4, _0x459475, _0x59cec5) {
                        const _0x2a94a8 = _0x72dc43;
                        super(_0xb396df, _0x3aaaa3, _0x1bcad4, 'vfx', 'Rings5.png', _0x459475, _0x59cec5), this[_0x2a94a8(0x35a)] = !0x1, this['trueWeapon'] = this[_0x2a94a8(0x4a1)];
                    } ['overrideWeaponData'](_0x2eee2b) {
                        const _0x44ede1 = _0x72dc43;
                        this['body']['enable'] = !0x0, this['setVisible'](!0x0), this[_0x44ede1(0xcf9)][_0x44ede1(0xdf6)](0x10), this[_0x44ede1(0x177d)] = !0x1, this['alpha'] = 0x1, this['amount'] = Math[_0x44ede1(0x1084)](0xa, _0x35923e['default'][_0x44ede1(0x1043)]['Player'][_0x44ede1(0x9b8)]) + _0x2eee2b['amount'], _0x35923e[_0x44ede1(0xd2c)][_0x44ede1(0x1043)][_0x44ede1(0x6d2)]['time']['removeEvent'](this[_0x44ede1(0x12a3)]), this['ExpireTimer'] = _0x35923e[_0x44ede1(0xd2c)]['Core'][_0x44ede1(0x6d2)][_0x44ede1(0x915)][_0x44ede1(0x12b8)]({
                            'delay': _0x2eee2b[_0x44ede1(0x170c)] + _0x2eee2b['PDuration'],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x3ecda4 = _0x44ede1;
                                _0x35923e[_0x3ecda4(0xd2c)]['Core'][_0x3ecda4(0x6d2)]['time'][_0x3ecda4(0x17fb)](this['ExpireTimer']), this[_0x3ecda4(0x14e3)]();
                            }
                        }), this['setDepth'](0.5 * -_0x35923e[_0x44ede1(0xd2c)]['Core']['scene'][_0x44ede1(0x12f9)][_0x44ede1(0x140e)]);
                    } ['explode']() {
                        const _0x597516 = _0x72dc43;
                        _0x35923e[_0x597516(0xd2c)]['Sound'][_0x597516(0x7f6)](_0x2a84c9['default'][_0x597516(0xe18)], {
                            'volume': 0.4,
                            'rate': 1.5
                        }, 0xc8, 0x6), this['trueWeapon'][_0x597516(0x217)]['SpawnAt'](this['x'], this['y'], 0x0, 0xa), this[_0x597516(0x9b8)]--, this[_0x597516(0x9b8)] <= 0x0 && (this['body'][_0x597516(0x543)] = !0x1, this[_0x597516(0x14e3)]());
                    } ['FadeOut']() {
                        const _0xf23ca7 = _0x72dc43;
                        var _0x5d4cde;
                        null === (_0x5d4cde = this[_0xf23ca7(0x1322)]) || void 0x0 === _0x5d4cde || _0x5d4cde[_0xf23ca7(0x1a34)](), this['alphaTween'] = _0x35923e['default'][_0xf23ca7(0x1043)]['scene'][_0xf23ca7(0x18bd)][_0xf23ca7(0x99a)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x11f143 = _0xf23ca7;
                                this[_0x11f143(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x2f38f2 = _0x72dc43;
                        var _0x32eef7;
                        super[_0x2f38f2(0x14fb)](), this['setVisible'](!0x1), _0x35923e[_0x2f38f2(0xd2c)][_0x2f38f2(0x1043)]['scene'][_0x2f38f2(0x915)]['removeEvent'](this['ExpireTimer']), null === (_0x32eef7 = this['alphaTween']) || void 0x0 === _0x32eef7 || _0x32eef7['stop']();
                    }
                }
                _0x65da04['B_Blood_Pentagram'] = _0x4e4561, _0x65da04['default'] = _0x4e4561;
            };
