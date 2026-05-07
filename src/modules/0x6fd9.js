// Module 0x6fd9
// Args: _0x5e974a, _0xc17ca3, _0x56fd9c

export default (_0x5e974a, _0xc17ca3, _0x56fd9c) => {
                'use strict';
                const _0x40f1b5 = a0_0x6932;
                var _0x1bb19e = this && this['__importDefault'] || function(_0xfd4a6d) {
                    return _0xfd4a6d && _0xfd4a6d['__esModule'] ? _0xfd4a6d : {
                        'default': _0xfd4a6d
                    };
                };
                Object['defineProperty'](_0xc17ca3, '__esModule', {
                    'value': !0x0
                }), _0xc17ca3['B_Garlic'] = void 0x0;
                const _0x5163bc = _0x1bb19e(_0x56fd9c(0xa14d)),
                    _0x414f68 = _0x1bb19e(_0x56fd9c(0x5f07)),
                    _0x4c9672 = _0x1bb19e(_0x56fd9c(0x5103));
                class _0x22bda5 extends _0x5163bc['default'] {
                    constructor(_0x5a931e, _0x199c7c, _0x59f8d4, _0x5c98ac, _0x267021) {
                        const _0x2aff20 = _0x40f1b5;
                        super(_0x5a931e, _0x199c7c, _0x59f8d4, 'vfx', 'Rings3.png', _0x5c98ac, _0x267021), this['radius'] = 0x10, this[_0x2aff20(0xf01)](_0x414f68[_0x2aff20(0xd2c)][_0x2aff20(0x1043)][_0x2aff20(0x10f6)]);
                    } ['OnRecycle']() {
                        const _0x870dce = _0x40f1b5;
                        super['OnRecycle'](), this['body'][_0x870dce(0xdf6)](this[_0x870dce(0x161a)]), this[_0x870dce(0x8a2)](0x2 * _0x4c9672['default'][_0x870dce(0x15db)] * this[_0x870dce(0x4a1)]['PArea']), this['setVisible'](!0x1), _0x414f68[_0x870dce(0xd2c)]['Core']['scene'][_0x870dce(0x915)][_0x870dce(0x17fb)](this[_0x870dce(0x12a3)]), this[_0x870dce(0x12a3)] = _0x414f68['default'][_0x870dce(0x1043)]['scene']['time'][_0x870dce(0x12b8)]({
                            'delay': this[_0x870dce(0x4a1)][_0x870dce(0x170c)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x51b3bf = _0x870dce;
                                _0x414f68[_0x51b3bf(0xd2c)][_0x51b3bf(0x1043)][_0x51b3bf(0x6d2)][_0x51b3bf(0x915)][_0x51b3bf(0x17fb)](this[_0x51b3bf(0x12a3)]), this['DeSpawn']();
                            }
                        }), this['ExpireTimer']['name'] = 'G Expire';
                    } ['Update']() {
                        const _0x5ce011 = _0x40f1b5;
                        this[_0x5ce011(0xf01)](_0x414f68[_0x5ce011(0xd2c)]['Core'][_0x5ce011(0x10f6)]), this[_0x5ce011(0x8a2)](0x2 * _0x4c9672[_0x5ce011(0xd2c)][_0x5ce011(0x15db)] * this[_0x5ce011(0x4a1)][_0x5ce011(0x5f5)]);
                    } ['Approach'](_0x251348, _0x28f0e1, _0x236322) {
                        const _0xd6696e = _0x40f1b5;
                        return _0x251348 < _0x28f0e1 ? Math[_0xd6696e(0x1084)](_0x251348 + _0x236322, _0x28f0e1) : Math[_0xd6696e(0x1981)](_0x251348 - _0x236322, _0x28f0e1);
                    } ['OnHasHitAnObject'](_0x67a7c0) {
                        const _0x30dc62 = _0x40f1b5;
                        if (!_0x67a7c0[_0x30dc62(0xdae)]) {
                            let _0x40eac9 = _0x67a7c0;
                            if (_0x40eac9[_0x30dc62(0x8b7)] >= 0x1) return;
                            _0x40eac9[_0x30dc62(0x1992)] < _0x40eac9['maxKnockback'] && (_0x40eac9[_0x30dc62(0x1992)] += 0.3), _0x40eac9[_0x30dc62(0x16fb)] > 0x0 && (_0x40eac9[_0x30dc62(0x16fb)] -= 0.1);
                        }
                    }
                }
                _0xc17ca3['B_Garlic'] = _0x22bda5, _0xc17ca3['default'] = _0x22bda5;
            };
