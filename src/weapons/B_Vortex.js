// Module 0x593
// Args: _0x1caee4, _0x4ba98b, _0x4bafb3

export default (_0x1caee4, _0x4ba98b, _0x4bafb3) => {
                'use strict';
                const _0x15dda1 = a0_0x6932;
                var _0x522bbc = this && this['__importDefault'] || function(_0x312814) {
                    const _0x749f0b = a0_0x6932;
                    return _0x312814 && _0x312814['__esModule'] ? _0x312814 : {
                        'default': _0x312814
                    };
                };
                Object['defineProperty'](_0x4ba98b, '__esModule', {
                    'value': !0x0
                }), _0x4ba98b['B_Vortex'] = void 0x0;
                const _0x2cf912 = _0x522bbc(_0x4bafb3(0xa14d)),
                    _0x15dd96 = _0x522bbc(_0x4bafb3(0x5f07)),
                    _0x4d3570 = _0x522bbc(_0x4bafb3(0x5103));
                class _0x297348 extends _0x2cf912['default'] {
                    constructor(_0x843553, _0x382a29, _0x123114, _0x48de10, _0x3019e4) {
                        const _0x53726a = _0x15dda1;
                        super(_0x843553, _0x382a29, _0x123114, 'vfx', 'Rings3.png', _0x48de10, _0x3019e4), this[_0x53726a(0x161a)] = 0x10, this['copyPosition'](_0x15dd96[_0x53726a(0xd2c)]['Core'][_0x53726a(0x10f6)]);
                    } ['OnRecycle']() {
                        const _0x375eb9 = _0x15dda1;
                        super['OnRecycle'](), this['body'][_0x375eb9(0xdf6)](this[_0x375eb9(0x161a)]), this['setScale'](0x2 * _0x4d3570[_0x375eb9(0xd2c)][_0x375eb9(0x15db)] * this[_0x375eb9(0x4a1)][_0x375eb9(0x5f5)]), this['setVisible'](!0x1), _0x15dd96['default'][_0x375eb9(0x1043)][_0x375eb9(0x6d2)][_0x375eb9(0x915)][_0x375eb9(0x17fb)](this['ExpireTimer']), this[_0x375eb9(0x12a3)] = _0x15dd96[_0x375eb9(0xd2c)][_0x375eb9(0x1043)]['scene'][_0x375eb9(0x915)]['addEvent']({
                            'delay': this['weapon'][_0x375eb9(0x170c)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x2dcf72 = _0x375eb9;
                                _0x15dd96[_0x2dcf72(0xd2c)][_0x2dcf72(0x1043)][_0x2dcf72(0x6d2)][_0x2dcf72(0x915)]['removeEvent'](this[_0x2dcf72(0x12a3)]), this[_0x2dcf72(0x14fb)]();
                            }
                        }), this[_0x375eb9(0x12a3)]['name'] = 'G Expire';
                    } ['Update']() {
                        const _0x3969b9 = _0x15dda1;
                        this[_0x3969b9(0xf01)](_0x15dd96['default'][_0x3969b9(0x1043)][_0x3969b9(0x10f6)]), this[_0x3969b9(0x8a2)](0x2 * _0x4d3570[_0x3969b9(0xd2c)][_0x3969b9(0x15db)] * this[_0x3969b9(0x4a1)][_0x3969b9(0x5f5)]);
                    } ['OnHasHitAnObject'](_0x2f29ec) {
                        const _0x15227c = _0x15dda1;
                        if (!_0x2f29ec[_0x15227c(0xdae)]) {
                            let _0x2115e1 = _0x2f29ec;
                            if (_0x2115e1['res_Debuffs'] >= 0x1) return;
                            _0x2115e1['knockback'] < _0x2115e1['maxKnockback'] && (_0x2115e1[_0x15227c(0x1992)] += 0.3), _0x2115e1[_0x15227c(0x16fb)] > 0x0 && (_0x2115e1['res_Freeze'] -= 0.1);
                        }
                    }
                }
                _0x4ba98b['B_Vortex'] = _0x297348, _0x4ba98b['default'] = _0x297348;
            };
