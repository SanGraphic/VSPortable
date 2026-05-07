// Module 0x9eb3
// Args: _0x96fe6c, _0x38b45b, _0x4de7f0

export default (_0x96fe6c, _0x38b45b, _0x4de7f0) => {
                'use strict';
                const _0x4a1f1d = a0_0x6932;
                var _0x1b497e = this && this['__importDefault'] || function(_0x554559) {
                    const _0x396e99 = _0x4a1f1d;
                    return _0x554559 && _0x554559[_0x396e99(0x16f1)] ? _0x554559 : {
                        'default': _0x554559
                    };
                };
                Object['defineProperty'](_0x38b45b, '__esModule', {
                    'value': !0x0
                }), _0x38b45b['W_PrismaticMissile'] = void 0x0;
                const _0x265e30 = _0x1b497e(_0x4de7f0(0xe49a)),
                    _0x4a7dfb = _0x1b497e(_0x4de7f0(0x54e3)),
                    _0x5217bd = _0x1b497e(_0x4de7f0(0x5f07)),
                    _0x4c820a = _0x1b497e(_0x4de7f0(0x9b68));
                class _0x31ac72 extends _0x265e30['default'] {
                    constructor(_0x146e20) {
                        const _0x52f220 = _0x4a1f1d;
                        super(_0x146e20), this['currentIndex'] = 0x0, this['firedTimes'] = 0x0, this['firstArcana'] = null, this[_0x52f220(0x2f2)] = 0x0, this[_0x52f220(0xb6f)] = null;
                    } ['Fire']() {
                        const _0x4c4937 = _0x4a1f1d;
                        super['Fire'](), this[_0x4c4937(0x11b0)]++;
                    } ['FireOneBullet'](_0x12aee5, _0x15bfcb, _0x4da240, _0x4e8a60) {
                        const _0x183537 = _0x4a1f1d;
                        this[_0x183537(0x2f2)] = ++this['currentIndex'] % 0x7;
                        var _0x411564 = this[_0x183537(0xc82)]['SpawnAt'](_0x12aee5, _0x15bfcb, this, this['currentIndex']);
                        return _0x4e8a60 && _0x411564 ? _0x411564['SetTarget'](_0x4e8a60) : null == _0x411564 || _0x411564['SetNullTarget'](), _0x411564;
                    } ['CheckArcanas']() {
                        const _0x567a24 = _0x4a1f1d;
                        if (null === this[_0x567a24(0xb6f)])
                            for (let _0x2b6895 = 0x0; _0x2b6895 < _0x5217bd[_0x567a24(0xd2c)][_0x567a24(0x1043)][_0x567a24(0x1884)][_0x567a24(0x15e7)][_0x567a24(0xed9)]; _0x2b6895++) {
                                const _0x1ecf69 = _0x5217bd['default']['Core']['Arcanas'][_0x567a24(0x15e7)][_0x2b6895];
                                _0x1ecf69 === _0x4c820a[_0x567a24(0xd2c)]['T19_FIRE'] ? (this[_0x567a24(0xb6f)] = _0x4c820a[_0x567a24(0xd2c)][_0x567a24(0x299)], this[_0x567a24(0xdfc)] = _0x4a7dfb[_0x567a24(0xd2c)][_0x567a24(0x1167)], _0x5217bd[_0x567a24(0xd2c)]['Core'][_0x567a24(0x1884)]['FireExplosionWeapon'] && (_0x5217bd['default']['Core']['Arcanas'][_0x567a24(0xe86)][_0x567a24(0x31f)] = 0.5 * this[_0x567a24(0x31f)])) : _0x1ecf69 === _0x4c820a['default']['T14_JEWELS'] ? (this['firstArcana'] = _0x4c820a[_0x567a24(0xd2c)]['T14_JEWELS'], this['freezeChance'] = 0.25) : _0x1ecf69 === _0x4c820a[_0x567a24(0xd2c)]['T02_TWILIGHT'] && (this['firstArcana'] = _0x4c820a['default']['T02_TWILIGHT'], this[_0x567a24(0xdfc)] = _0x4a7dfb['default']['RAYEXPLOSION'], this[_0x567a24(0x1007)] = !0x0);
                            }
                        super[_0x567a24(0x1ce)]();
                    }
                }
                _0x38b45b['W_PrismaticMissile'] = _0x31ac72, _0x38b45b['default'] = _0x31ac72;
            };
