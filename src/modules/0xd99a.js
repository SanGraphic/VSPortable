// Module 0xd99a
// Args: _0x1764aa, _0x13fb10, _0x1bd311

export default (_0x1764aa, _0x13fb10, _0x1bd311) => {
                'use strict';
                const _0x3bcfb6 = a0_0x6932;
                var _0x213681 = this && this['__importDefault'] || function(_0x4a89d4) {
                    const _0x19f4fb = a0_0x6932;
                    return _0x4a89d4 && _0x4a89d4['__esModule'] ? _0x4a89d4 : {
                        'default': _0x4a89d4
                    };
                };
                Object['defineProperty'](_0x13fb10, '__esModule', {
                    'value': !0x0
                }), _0x13fb10['W_Scythe'] = void 0x0;
                const _0x4809a2 = _0x213681(_0x1bd311(0x9b68)),
                    _0x26a985 = _0x213681(_0x1bd311(0x5f07)),
                    _0x56b6cf = _0x213681(_0x1bd311(0xe49a));
                class _0x4a31cc extends _0x56b6cf['default'] {
                    constructor(_0x52190c) {
                        super(_0x52190c);
                    }
                    get['PArea']() {
                        const _0x2f46d9 = _0x3bcfb6;
                        return _0x26a985['default']['Core']['Player'][_0x2f46d9(0x1ea)] ? Math['min'](0xa, 1.2 * _0x26a985['default']['Core'][_0x2f46d9(0x10f6)]['area'] * _0x26a985[_0x2f46d9(0xd2c)][_0x2f46d9(0x1043)][_0x2f46d9(0x10f6)][_0x2f46d9(0x1ea)][_0x2f46d9(0xb81)]) * this[_0x2f46d9(0x1702)] : Math['min'](0xa, 1.2 * _0x26a985[_0x2f46d9(0xd2c)][_0x2f46d9(0x1043)]['Player'][_0x2f46d9(0x1702)]) * this['area'];
                    } ['CheckArcanas']() {
                        const _0x52300c = _0x3bcfb6;
                        _0x26a985[_0x52300c(0xd2c)][_0x52300c(0x1043)][_0x52300c(0x1884)]['ActiveArcanas'][_0x52300c(0x1303)](_0x4809a2['default'][_0x52300c(0x663)]) > -0x1 && (this['penetrating'] = 0xffff, this['bonusBounces'] = 0x1), _0x26a985[_0x52300c(0xd2c)]['Core'][_0x52300c(0x1884)]['ActiveArcanas'][_0x52300c(0x1303)](_0x4809a2[_0x52300c(0xd2c)][_0x52300c(0x954)]) > -0x1 && (this['canCrit'] = !0x0), super['CheckArcanas']();
                    }
                    get['PBounces']() {
                        const _0x2834cb = _0x3bcfb6;
                        return this[_0x2834cb(0x1985)] + this[_0x2834cb(0x1b4)];
                    } ['onBulletOverlapsEnemy'](_0x518c01, _0x311e41) {
                        const _0x4a2674 = _0x3bcfb6;
                        return this[_0x4a2674(0xdda)] ? this['StandardCritical'](_0x518c01, _0x311e41) : super['onBulletOverlapsEnemy'](_0x518c01, _0x311e41);
                    }
                }
                _0x13fb10['W_Scythe'] = _0x4a31cc, _0x13fb10['default'] = _0x4a31cc;
            };
