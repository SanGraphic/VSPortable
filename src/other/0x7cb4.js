// Module 0x7cb4
// Args: _0x118d0c, _0x354caf, _0x58773d

export default (_0x118d0c, _0x354caf, _0x58773d) => {
                'use strict';
                const _0x26b8b5 = a0_0x6932;
                var _0x4f773b = this && this['__importDefault'] || function(_0xfa6a9a) {
                    const _0x387abb = a0_0x6932;
                    return _0xfa6a9a && _0xfa6a9a['__esModule'] ? _0xfa6a9a : {
                        'default': _0xfa6a9a
                    };
                };
                Object['defineProperty'](_0x354caf, '__esModule', {
                    'value': !0x0
                });
                const _0x197a27 = _0x4f773b(_0x58773d(0x5f07)),
                    _0x305f29 = _0x4f773b(_0x58773d(0x61b2));
                class _0x49a072 extends Phaser['GameObjects']['Group'] {
                    constructor(_0x398de1) {
                        const _0x1e5577 = a0_0x6932;
                        super(_0x398de1), this['stored'] = new Array(), this['spawned'] = new Array(), this['Init']();
                    } ['Init']() {
                        const _0x5c091c = a0_0x6932;
                        this['scene']['add']['existing'](this);
                    } ['SpawnAt'](_0x4f5781, _0x233edc, _0x40dd15 = 0x1, _0x55b032 = 0x1) {
                        const _0x31bed8 = _0x26b8b5,
                            _0x1a1a45 = this['Spawn']();
                        return _0x1a1a45['x'] = _0x4f5781, _0x1a1a45['y'] = _0x233edc, _0x1a1a45[_0x31bed8(0x1133)] = _0x40dd15, _0x1a1a45[_0x31bed8(0x161a)] = _0x55b032, _0x1a1a45[_0x31bed8(0x62e)](_0x233edc + 0x1 - _0x197a27['default']['Core'][_0x31bed8(0x10f6)]['y']), this['scene'][_0x31bed8(0x3fe)][_0x31bed8(0x18bd)](_0x1a1a45), _0x1a1a45[_0x31bed8(0x5ce)](), _0x1a1a45;
                    } ['Spawn']() {
                        const _0x352f2e = _0x26b8b5;
                        let _0x3bf045 = this['stored'][_0x352f2e(0xcfe)]();
                        return _0x3bf045 || (_0x3bf045 = this['Make'](), _0x3bf045['Init']()), this[_0x352f2e(0x18bd)](_0x3bf045, !0x0), this[_0x352f2e(0x13f4)][_0x352f2e(0x1564)](_0x3bf045), _0x3bf045;
                    } ['Return'](_0xa11ee3) {
                        const _0x35e5ce = _0x26b8b5;
                        this[_0x35e5ce(0x6d2)]['children'][_0x35e5ce(0x393)](_0xa11ee3), this['remove'](_0xa11ee3, !0x0, !0x1), this[_0x35e5ce(0x13f4)][_0x35e5ce(0x16ea)](this['spawned'][_0x35e5ce(0x1303)](_0xa11ee3), 0x1), this['stored']['push'](_0xa11ee3);
                    } ['Make']() {
                        const _0x4eae5b = _0x26b8b5;
                        return new _0x305f29[(_0x4eae5b(0xd2c))](this, -0x186a0, -0x186a0);
                    }
                }
                _0x354caf['default'] = _0x49a072;
            };
