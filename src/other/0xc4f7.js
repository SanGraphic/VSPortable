// Module 0xc4f7
// Args: _0x5222f7, _0x31d660, _0xf9dbff

export default (_0x5222f7, _0x31d660, _0xf9dbff) => {
                'use strict';
                const _0xa18925 = a0_0x6932;
                var _0x76f1ab = this && this['__importDefault'] || function(_0x174646) {
                    return _0x174646 && _0x174646['__esModule'] ? _0x174646 : {
                        'default': _0x174646
                    };
                };
                Object['defineProperty'](_0x31d660, '__esModule', {
                    'value': !0x0
                });
                const _0x46653f = _0x76f1ab(_0xf9dbff(0xdfbc)),
                    _0xc5411f = _0x76f1ab(_0xf9dbff(0x136b9)),
                    _0x104e00 = _0x76f1ab(_0xf9dbff(0x1852a)),
                    _0x461a05 = _0x76f1ab(_0xf9dbff(0x1fd7)),
                    _0x500a92 = _0x76f1ab(_0xf9dbff(0xc450)),
                    _0x293e3d = _0x76f1ab(_0xf9dbff(0x5f07)),
                    _0x5ae069 = _0x76f1ab(_0xf9dbff(0x1166a));
                class _0x2e8eb4 extends _0x5ae069['default'] {
                    ['OnRecycle']() {
                        const _0x31c3f2 = _0xa18925;
                        super['OnRecycle'](), this[_0x31c3f2(0x177d)] = !0x1, this[_0x31c3f2(0x7cb)] = 0x0, this['OnEnterTween'] = this['scene'][_0x31c3f2(0x12a1)][_0x31c3f2(0x18bd)]({
                            'targets': this,
                            'scale': 0x2,
                            'duration': 0x1f4
                        });
                    } ['GetDamaged'](_0x175e2b, _0x3b18a3, _0x35b23e, _0x35d846) {
                        const _0x168c90 = _0xa18925;
                        super['GetDamaged'](_0x175e2b, _0xc5411f['default'][_0x168c90(0xa8c)], _0x35b23e, _0x35d846);
                    } ['Die']() {
                        const _0xb02736 = _0xa18925;
                        if (this[_0xb02736(0xdae)]) return;
                        let _0x1877a4 = !0x1; - 0x1 === _0x293e3d[_0xb02736(0xd2c)][_0xb02736(0x1043)][_0xb02736(0x14d8)][_0xb02736(0x1b12)]['indexOf'](_0x46653f['default']['AVATAR']) && (_0x293e3d['default'][_0xb02736(0x1267)][_0xb02736(0x7f6)](_0x461a05['default'][_0xb02736(0x8d2)], {
                            'volume': 0x1,
                            'detune': -0x3e8,
                            'rate': 0.5
                        }), _0x500a92['default']['UnlockSecret'](_0x104e00['default'][_0xb02736(0x1a8c)]), _0x1877a4 = !0x0), _0x293e3d[_0xb02736(0xd2c)][_0xb02736(0x1267)][_0xb02736(0x7f6)](_0x461a05[_0xb02736(0xd2c)][_0xb02736(0x15f)], {
                            'volume': 1.5,
                            'detune': -0x258 * Math['random']()
                        }), _0x293e3d[_0xb02736(0xd2c)]['Core'][_0xb02736(0x69e)][_0xb02736(0x35f)](), this[_0xb02736(0x6d2)][_0xb02736(0x12a1)][_0xb02736(0x18bd)]({
                            'targets': this[_0xb02736(0x6d2)][_0xb02736(0x1793)][_0xb02736(0x4cd)]['followOffset'],
                            'x': 0x2,
                            'duration': 0x10,
                            'yoyo': !0x0,
                            'repeat': 0x6,
                            'onStart': () => {
                                const _0x32426d = _0xb02736;
                                this[_0x32426d(0x6d2)][_0x32426d(0x1793)][_0x32426d(0x4cd)][_0x32426d(0x86c)]['x'] = -0x2;
                            },
                            'onComplete': () => {
                                const _0x369787 = _0xb02736;
                                this[_0x369787(0x6d2)][_0x369787(0x1793)][_0x369787(0x4cd)][_0x369787(0x188c)](0x0, 0x0), _0x1877a4 && _0x293e3d[_0x369787(0xd2c)]['Core']['CharQueue']['push'](_0x46653f['default'][_0x369787(0x1060)]);
                            }
                        }), this['scene'][_0xb02736(0x915)][_0xb02736(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x138ccb = _0xb02736;
                                _0x293e3d[_0x138ccb(0xd2c)]['Core']['WhiteHandManager']['SummonWhiteHand']();
                            }
                        }), this['BlockInput'](), super[_0xb02736(0x14f3)]();
                    } ['Disappear']() {} ['BlockInput']() {
                        const _0x51e4fe = _0xa18925;
                        for (_0x293e3d['default'][_0x51e4fe(0x1043)]['canPause'] = !0x1, _0x293e3d[_0x51e4fe(0xd2c)][_0x51e4fe(0x1043)][_0x51e4fe(0x10f6)][_0x51e4fe(0xf90)](0x7530), _0x293e3d[_0x51e4fe(0xd2c)]['Core']['Player'][_0x51e4fe(0xc83)](), this['scene']['time'][_0x51e4fe(0x12b8)]({
                                'delay': 0x64,
                                'callback': () => {
                                    const _0x124bf2 = _0x51e4fe;
                                    _0x293e3d[_0x124bf2(0xd2c)][_0x124bf2(0x1043)][_0x124bf2(0x10f6)]['restoreTint']();
                                }
                            }); _0x293e3d['default']['Core'][_0x51e4fe(0x506)][_0x51e4fe(0xed9)] > 0x0;) _0x293e3d[_0x51e4fe(0xd2c)]['Core']['Weapons']['pop']()[_0x51e4fe(0xdb0)]();
                        for (; _0x293e3d[_0x51e4fe(0xd2c)]['Core'][_0x51e4fe(0x164d)][_0x51e4fe(0xed9)] > 0x0;) _0x293e3d['default']['Core'][_0x51e4fe(0x164d)][_0x51e4fe(0xcfe)]()[_0x51e4fe(0xdb0)]();
                    }
                }
                _0x31d660['default'] = _0x2e8eb4;
            };
