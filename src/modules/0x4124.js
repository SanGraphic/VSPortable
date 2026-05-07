// Module 0x4124
// Args: _0xeee430, _0x5200c4, _0x101035

export default (_0xeee430, _0x5200c4, _0x101035) => {
                'use strict';
                const _0x3d9978 = a0_0x6932;
                var _0x360881 = this && this['__importDefault'] || function(_0x3836ca) {
                    const _0x2f0e84 = _0x3d9978;
                    return _0x3836ca && _0x3836ca[_0x2f0e84(0x16f1)] ? _0x3836ca : {
                        'default': _0x3836ca
                    };
                };
                Object['defineProperty'](_0x5200c4, '__esModule', {
                    'value': !0x0
                }), _0x5200c4['B_Spellstrom'] = void 0x0;
                const _0x2102a6 = _0x360881(_0x101035(0xa14d)),
                    _0x386215 = _0x360881(_0x101035(0x5f07));
                class _0x35e163 extends _0x2102a6['default'] {
                    constructor(_0x549bd3, _0x268d8e, _0x5c6422, _0x4b4dab, _0x4e9614) {
                        const _0x316704 = _0x3d9978;
                        super(_0x549bd3, _0x268d8e, _0x5c6422, 'vfx', 'blur128.png', _0x4b4dab, _0x4e9614), this[_0x316704(0x1180)] = {
                            'x': 0x0,
                            'y': 0x0
                        }, this[_0x316704(0xb34)](0x0)['setAlpha'](0.65), this['alreadyRecycled'] = !0x1, this['isCullable'] = !0x1;
                    } ['OnRecycle']() {
                        const _0x1f9f61 = _0x3d9978;
                        super['OnRecycle'](), this[_0x1f9f61(0x771)] || (this[_0x1f9f61(0x183f)](!0x0), this[_0x1f9f61(0x771)] = !0x0, this[_0x1f9f61(0x8a2)](0x1), this[_0x1f9f61(0xcf9)][_0x1f9f61(0xdf6)](0x40, 0x0, 0x0), this[_0x1f9f61(0x18a7)] = null, this['scene'][_0x1f9f61(0x915)][_0x1f9f61(0x17fb)](this['HitboxTimer']), this[_0x1f9f61(0x8b9)] = _0x386215['default'][_0x1f9f61(0x1043)][_0x1f9f61(0x6d2)][_0x1f9f61(0x915)][_0x1f9f61(0x12b8)]({
                            'delay': this['weapon']['hitBoxDelay'],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x9715f4 = _0x1f9f61;
                                this[_0x9715f4(0x990)] = [];
                            }
                        }), this[_0x1f9f61(0xb4a)](-_0x386215['default'][_0x1f9f61(0x1043)][_0x1f9f61(0x6d2)]['renderer'][_0x1f9f61(0x140e)] - 0x1));
                    } ['SetObjectToFollow'](_0x549528) {
                        const _0x52b102 = _0x3d9978;
                        this[_0x52b102(0x1180)] = _0x549528;
                    } ['Update'](_0x5173a3) {
                        const _0x575c21 = _0x3d9978;
                        this['x'] = this['toFollow']['x'], this['y'] = this[_0x575c21(0x1180)]['y'];
                    } ['DeSpawn']() {
                        const _0x55f7fb = _0x3d9978;
                        super['DeSpawn'](), this[_0x55f7fb(0x183f)](!0x1);
                    }
                }
                _0x5200c4['B_Spellstrom'] = _0x35e163, _0x5200c4['default'] = _0x35e163;
            };
