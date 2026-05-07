// Module 0x17685
// Args: _0x373567, _0x197748, _0x2f27de

export default (_0x373567, _0x197748, _0x2f27de) => {
                'use strict';
                const _0x48a394 = a0_0x6932;
                var _0x574588 = this && this['__importDefault'] || function(_0x48a4f5) {
                    const _0x562dd0 = _0x48a394;
                    return _0x48a4f5 && _0x48a4f5[_0x562dd0(0x16f1)] ? _0x48a4f5 : {
                        'default': _0x48a4f5
                    };
                };
                Object['defineProperty'](_0x197748, '__esModule', {
                    'value': !0x0
                }), _0x197748['W_Misspell'] = void 0x0;
                const _0x4126bc = _0x574588(_0x2f27de(0xe49a)),
                    _0x42c1a6 = _0x574588(_0x2f27de(0x54e3)),
                    _0x4dd7bd = _0x574588(_0x2f27de(0x5f07)),
                    _0x4f7ad5 = _0x574588(_0x2f27de(0x9b68));
                class _0x301714 extends _0x4126bc['default'] {
                    constructor(_0xb45655) {
                        const _0x341ccb = _0x48a394;
                        super(_0xb45655), this[_0x341ccb(0xeeb)] = _0x42c1a6['default']['NDUJA_COUNTER'];
                    } ['CheckArcanas']() {
                        const _0x670502 = _0x48a394;
                        if (_0x4dd7bd['default'][_0x670502(0x1043)]['Arcanas']['ActiveArcanas'][_0x670502(0x1303)](_0x4f7ad5['default']['T01_AQUARIUS']) > -0x1) {
                            if (_0x4dd7bd[_0x670502(0xd2c)][_0x670502(0x1043)][_0x670502(0x164d)][_0x670502(0x1e6)](_0x3e9239 => _0x3e9239[_0x670502(0x14e)] === this['counterWeaponType'])) return;
                            let _0x2d4a95 = _0x4dd7bd[_0x670502(0xd2c)]['Core']['AddHiddenWeapon'](this[_0x670502(0xeeb)]);
                            for (this['counterWeapon'] = _0x2d4a95; _0x2d4a95['level'] < this[_0x670502(0x5e3)];) _0x2d4a95[_0x670502(0x2ab)]();
                        }
                        super['CheckArcanas']();
                    } ['Update'](_0x22eae5) {
                        const _0xd7f451 = _0x48a394;
                        if (super[_0xd7f451(0xa9f)](_0x22eae5), this[_0xd7f451(0xb78)] += _0x22eae5, this['totalTime'] > 0x2710 * _0x4dd7bd['default'][_0xd7f451(0x1043)][_0xd7f451(0x10f6)][_0xd7f451(0x5ef)]) {
                            var _0x123a4d = _0x4dd7bd['default']['Core']['HiddenWeapons']['indexOf'](this);
                            _0x123a4d > -0x1 && _0x4dd7bd['default']['Core'][_0xd7f451(0x164d)][_0xd7f451(0x16ea)](_0x123a4d, 0x1), this['CleanUp'](), this['firingTimer'] && this['firingTimer']['destroy']();
                        }
                    }
                }
                _0x197748['W_Misspell'] = _0x301714, _0x197748['default'] = _0x301714;
            };
