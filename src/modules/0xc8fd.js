// Module 0xc8fd
// Args: _0x422abf, _0x50c333, _0x147215

export default (_0x422abf, _0x50c333, _0x147215) => {
                'use strict';
                const _0x1956a8 = a0_0x6932;
                var _0x5a0e82 = this && this['__importDefault'] || function(_0x19c237) {
                    return _0x19c237 && _0x19c237['__esModule'] ? _0x19c237 : {
                        'default': _0x19c237
                    };
                };
                Object['defineProperty'](_0x50c333, '__esModule', {
                    'value': !0x0
                });
                const _0xca26bc = _0x5a0e82(_0x147215(0x5f07)),
                    _0x4ed333 = _0x5a0e82(_0x147215(0x10924));
                _0x50c333['default'] = class {
                    constructor(_0x1cf175, _0x504a7b) {
                        const _0x5b868d = _0x1956a8;
                        this[_0x5b868d(0x1adb)] = 0x1e, this['explosionRadius'] = 0x3c, this[_0x5b868d(0x6d2)] = _0x1cf175, this['stage'] = _0x504a7b, this['explosionStarPool'] = new _0x4ed333['default'](_0x1cf175);
                    } ['AimRandom'](_0x188e40 = 0x1, _0x489881 = 0x64, _0x342501 = 0x1) {
                        const _0x5f40b1 = _0x1956a8;
                        for (let _0x459c23 = 0x0; _0x459c23 < _0x188e40; _0x459c23++) this[_0x5f40b1(0x6d2)][_0x5f40b1(0x915)][_0x5f40b1(0x12b8)]({
                            'delay': _0x489881 * _0x459c23,
                            'callback': () => {
                                this['shootOne'](_0x342501);
                            }
                        });
                    } ['shootOne'](_0x4bdca7 = 0x1) {
                        const _0x5765ed = _0x1956a8;
                        let _0x305100 = _0xca26bc[_0x5765ed(0xd2c)]['Core']['Player']['x'] + (Math['random']() - 0.5) * this['scene'][_0x5765ed(0x12f9)]['width'] * 0.5 * _0x4bdca7,
                            _0x59236e = _0xca26bc['default'][_0x5765ed(0x1043)][_0x5765ed(0x10f6)]['y'] + (Math[_0x5765ed(0x9ad)]() - 0.5) * this[_0x5765ed(0x6d2)][_0x5765ed(0x12f9)][_0x5765ed(0x140e)] * 0.5 * _0x4bdca7;
                        this['shootStarAt'](_0x305100, _0x59236e);
                    } ['shootStarAt'](_0x585ba9, _0x37a94d) {
                        const _0x3e6908 = _0x1956a8;
                        this['explosionStarPool']['SpawnAt'](_0x585ba9, _0x37a94d, this[_0x3e6908(0x1adb)], this['explosionRadius']);
                    } ['Update'](_0x567460) {
                        const _0x5e6f5c = _0x1956a8;
                        this[_0x5e6f5c(0x11ab)][_0x5e6f5c(0xa9f)](_0x567460);
                    }
                };
            };
