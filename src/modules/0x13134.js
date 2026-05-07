// Module 0x13134
// Args: _0x50fc0d, _0x13f686, _0x5976d9

export default (_0x50fc0d, _0x13f686, _0x5976d9) => {
                'use strict';
                const _0x509f74 = a0_0x6932;
                var _0x1a8e2d = this && this['__importDefault'] || function(_0x2e8098) {
                    const _0x29b521 = _0x509f74;
                    return _0x2e8098 && _0x2e8098[_0x29b521(0x16f1)] ? _0x2e8098 : {
                        'default': _0x2e8098
                    };
                };
                Object['defineProperty'](_0x13f686, '__esModule', {
                    'value': !0x0
                }), _0x13f686['B_Blood_Laurel'] = void 0x0;
                const _0x15e84d = _0x1a8e2d(_0x5976d9(0xa14d)),
                    _0x47f89d = _0x1a8e2d(_0x5976d9(0x5f07)),
                    _0x1546f6 = _0x1a8e2d(_0x5976d9(0x1fd7));
                class _0x5f4dd0 extends _0x15e84d['default'] {
                    constructor(_0x5760ed, _0x16c040, _0x3e154d, _0x409cc9, _0x3cd594) {
                        const _0x3b185e = _0x509f74;
                        super(_0x5760ed, _0x16c040, _0x3e154d, 'vfx', 'bloodMin.png', _0x409cc9, _0x3cd594), this[_0x3b185e(0x35a)] = !0x1, this['trueWeapon'] = this[_0x3b185e(0x4a1)], this[_0x3b185e(0xb34)](0xff0000);
                    } ['overrideWeaponData'](_0x1a346e) {
                        const _0x586918 = _0x509f74;
                        var _0x18df3f, _0x579987;
                        this[_0x586918(0xcf9)][_0x586918(0x543)] = !0x0, this[_0x586918(0x183f)](!0x0), this[_0x586918(0xcf9)][_0x586918(0xdf6)](0x40), this[_0x586918(0x177d)] = !0x1, this['alpha'] = 0.2, this['amount'] = Math['min'](0xa, _0x47f89d['default'][_0x586918(0x1043)][_0x586918(0x10f6)][_0x586918(0x9b8)]) + _0x1a346e[_0x586918(0x9b8)], this[_0x586918(0x9b8)] *= this[_0x586918(0x9b8)], this[_0x586918(0x8a2)](0x0), _0x47f89d['default']['Core'][_0x586918(0x6d2)]['time'][_0x586918(0x17fb)](this['ExpireTimer']), this[_0x586918(0x12a3)] = _0x47f89d[_0x586918(0xd2c)][_0x586918(0x1043)][_0x586918(0x6d2)][_0x586918(0x915)][_0x586918(0x12b8)]({
                            'delay': _0x1a346e[_0x586918(0x170c)] + _0x1a346e['PDuration'],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x4c8f4c = _0x586918;
                                _0x47f89d[_0x4c8f4c(0xd2c)]['Core']['scene'][_0x4c8f4c(0x915)][_0x4c8f4c(0x17fb)](this[_0x4c8f4c(0x12a3)]), this[_0x4c8f4c(0x14e3)]();
                            }
                        }), null === (_0x18df3f = this[_0x586918(0x11d1)]) || void 0x0 === _0x18df3f || _0x18df3f[_0x586918(0x1a34)](), this[_0x586918(0x11d1)] = _0x47f89d[_0x586918(0xd2c)][_0x586918(0x1043)][_0x586918(0x6d2)][_0x586918(0x18bd)][_0x586918(0x99a)]({
                            'targets': this,
                            'alpha': 0.5,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'onStart': () => {
                                const _0x33f0f0 = _0x586918;
                                this[_0x33f0f0(0xe71)] = 0.2;
                            }
                        });
                        let _0x5b7e7b = Math[_0x586918(0x1981)](0x1, _0x47f89d['default'][_0x586918(0x1043)]['Magnet'][_0x586918(0x161a)] / 0x40);
                        null === (_0x579987 = this['scaleTween']) || void 0x0 === _0x579987 || _0x579987['stop'](), this[_0x586918(0x660)] = _0x47f89d['default']['Core'][_0x586918(0x6d2)]['add'][_0x586918(0x99a)]({
                            'targets': this,
                            'scale': _0x5b7e7b,
                            'duration': 0x12c,
                            'ease': 'Linear',
                            'onStart': () => {
                                this['setScale'](0x0);
                            }
                        }), this['setDepth'](0.5 * -_0x47f89d[_0x586918(0xd2c)][_0x586918(0x1043)][_0x586918(0x6d2)][_0x586918(0x12f9)][_0x586918(0x140e)]);
                    } ['explode'](_0x273f62 = this['x'], _0x3798c4 = this['y']) {
                        const _0x2a2200 = _0x509f74;
                        _0x47f89d['default'][_0x2a2200(0x1267)][_0x2a2200(0x7f6)](_0x1546f6[_0x2a2200(0xd2c)]['PentagramSFX'], {
                            'volume': 0.4,
                            'rate': 1.5
                        }, 0xc8, 0x3), this[_0x2a2200(0x1234)][_0x2a2200(0x217)][_0x2a2200(0xada)](_0x273f62, _0x3798c4, 0x0, 0xa), this[_0x2a2200(0x9b8)]--, this[_0x2a2200(0x9b8)] <= 0x0 && (this['body']['enable'] = !0x1, this['FadeOut']());
                    } ['FadeOut']() {
                        const _0x419f20 = _0x509f74;
                        var _0x2023b7, _0x26e07e, _0x4c5075;
                        null === (_0x2023b7 = this[_0x419f20(0x660)]) || void 0x0 === _0x2023b7 || _0x2023b7[_0x419f20(0x1a34)](), null === (_0x26e07e = this['imageTween']) || void 0x0 === _0x26e07e || _0x26e07e[_0x419f20(0x1a34)](), null === (_0x4c5075 = this[_0x419f20(0x1322)]) || void 0x0 === _0x4c5075 || _0x4c5075[_0x419f20(0x1a34)](), this[_0x419f20(0x1322)] = _0x47f89d[_0x419f20(0xd2c)][_0x419f20(0x1043)]['scene'][_0x419f20(0x18bd)]['tween']({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0xb957f1 = _0x419f20;
                                this[_0xb957f1(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x636068 = _0x509f74;
                        var _0x33ea4d;
                        super['DeSpawn'](), this[_0x636068(0x183f)](!0x1), _0x47f89d[_0x636068(0xd2c)][_0x636068(0x1043)][_0x636068(0x6d2)][_0x636068(0x915)][_0x636068(0x17fb)](this[_0x636068(0x12a3)]), null === (_0x33ea4d = this['alphaTween']) || void 0x0 === _0x33ea4d || _0x33ea4d[_0x636068(0x1a34)]();
                    }
                }
                _0x13f686['B_Blood_Laurel'] = _0x5f4dd0, _0x13f686['default'] = _0x5f4dd0;
            };
