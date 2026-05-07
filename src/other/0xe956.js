// Module 0xe956
// Args: _0x149967, _0x9cf964, _0x5ce021

export default (_0x149967, _0x9cf964, _0x5ce021) => {
                'use strict';
                const _0x2d910f = a0_0x6932;
                var _0x2cb031 = this && this['__importDefault'] || function(_0xa177a2) {
                    return _0xa177a2 && _0xa177a2['__esModule'] ? _0xa177a2 : {
                        'default': _0xa177a2
                    };
                };
                Object['defineProperty'](_0x9cf964, '__esModule', {
                    'value': !0x0
                });
                const _0x1ff043 = _0x2cb031(_0x5ce021(0x5f07)),
                    _0x28b862 = _0x2cb031(_0x5ce021(0x7680));
                _0x9cf964['default'] = class {
                    constructor(_0x193be8, _0x29a861) {
                        const _0x2ff674 = _0x2d910f;
                        this[_0x2ff674(0x1adb)] = 0x1e, this['explosionRadius'] = 0x3c, this[_0x2ff674(0x6d2)] = _0x193be8, this[_0x2ff674(0x707)] = _0x29a861, this['explosionStarPool'] = new _0x28b862[(_0x2ff674(0xd2c))](_0x193be8);
                    } ['AimRandom'](_0xc1d5b2 = 0x1, _0x188c1b = 0x64, _0x1717cf = 0x1) {
                        const _0x138a51 = _0x2d910f;
                        for (let _0x4d222e = 0x0; _0x4d222e < _0xc1d5b2; _0x4d222e++) this['scene'][_0x138a51(0x915)][_0x138a51(0x12b8)]({
                            'delay': _0x188c1b * _0x4d222e,
                            'callback': () => {
                                const _0x202789 = _0x138a51;
                                this[_0x202789(0x400)](_0x1717cf);
                            }
                        });
                    } ['shootOne'](_0x319741 = 0x1) {
                        const _0x28e157 = _0x2d910f;
                        let _0x3a62b1 = _0x1ff043[_0x28e157(0xd2c)]['Core']['Player']['x'] + (Math[_0x28e157(0x9ad)]() - 0.5) * this['scene'][_0x28e157(0x12f9)]['width'] * 0.5 * _0x319741,
                            _0x21ef23 = _0x1ff043['default'][_0x28e157(0x1043)][_0x28e157(0x10f6)]['y'] + (Math['random']() - 0.5) * this[_0x28e157(0x6d2)]['renderer']['height'] * 0.5 * _0x319741;
                        this[_0x28e157(0x19f3)](_0x3a62b1, _0x21ef23);
                    } ['shootStarAt'](_0xc13d69, _0x2a8e33) {
                        const _0x4ba263 = _0x2d910f;
                        this[_0x4ba263(0x11ab)][_0x4ba263(0xada)](_0xc13d69, _0x2a8e33, this[_0x4ba263(0x1adb)], this['explosionRadius']);
                    } ['Update'](_0x48f56d) {
                        const _0x501b37 = _0x2d910f;
                        this[_0x501b37(0x11ab)][_0x501b37(0xa9f)](_0x48f56d);
                    }
                };
            };
