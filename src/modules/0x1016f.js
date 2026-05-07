// Module 0x1016f
// Args: _0xdc9880, _0x2244e6, _0x371df1

export default (_0xdc9880, _0x2244e6, _0x371df1) => {
                'use strict';
                const _0x5321a4 = a0_0x6932;
                var _0x52a48a = this && this['__importDefault'] || function(_0x43cdff) {
                    const _0x293b6e = _0x5321a4;
                    return _0x43cdff && _0x43cdff[_0x293b6e(0x16f1)] ? _0x43cdff : {
                        'default': _0x43cdff
                    };
                };
                Object['defineProperty'](_0x2244e6, '__esModule', {
                    'value': !0x0
                });
                const _0x745c5a = _0x52a48a(_0x371df1(0x5f07)),
                    _0x12be7a = _0x52a48a(_0x371df1(0x7010));
                _0x2244e6['default'] = class {
                    constructor(_0x53523f) {
                        const _0x22a8a7 = _0x5321a4;
                        this['explosionDamage'] = 0xf, this[_0x22a8a7(0xace)] = 0x3c, this[_0x22a8a7(0x6d2)] = _0x53523f, this[_0x22a8a7(0x5ff)] = new _0x12be7a[(_0x22a8a7(0xd2c))](_0x53523f);
                    } ['shootOne'](_0x211c3b = 0x1) {
                        const _0x33eb89 = _0x5321a4;
                        let _0x7fa1b1 = _0x745c5a[_0x33eb89(0xd2c)][_0x33eb89(0x1043)][_0x33eb89(0x10f6)]['x'] + (Math['random']() - 0.5) * this[_0x33eb89(0x6d2)]['renderer']['width'] * 0.5 * _0x211c3b,
                            _0x3b684b = _0x745c5a[_0x33eb89(0xd2c)][_0x33eb89(0x1043)][_0x33eb89(0x10f6)]['y'] + (Math[_0x33eb89(0x9ad)]() - 0.5) * this[_0x33eb89(0x6d2)][_0x33eb89(0x12f9)]['height'] * 0.5 * _0x211c3b;
                        this[_0x33eb89(0x19f3)](_0x7fa1b1, _0x3b684b);
                    } ['shootStarAt'](_0x17931d, _0x42fb34) {
                        const _0x216ee3 = _0x5321a4;
                        this[_0x216ee3(0x5ff)][_0x216ee3(0xada)](_0x17931d, _0x42fb34, this['explosionDamage'], this[_0x216ee3(0xace)]);
                    } ['Update'](_0x5ac28e) {
                        const _0x8af48b = _0x5321a4;
                        this[_0x8af48b(0x5ff)][_0x8af48b(0xa9f)](_0x5ac28e);
                    } ['Stop']() {
                        const _0x2d9212 = _0x5321a4;
                        for (let _0x54c1ef = this['explosionEyePool'][_0x2d9212(0x13f4)]['length'] - 0x1; _0x54c1ef >= 0x0; _0x54c1ef--) this[_0x2d9212(0x5ff)]['spawned'][_0x54c1ef]['DeSpawn']();
                    }
                };
            };
