// Module 0x4e02
// Args: _0x2b5f8c, _0x580458, _0x391ffa

export default (_0x2b5f8c, _0x580458, _0x391ffa) => {
                'use strict';
                const _0x47e95f = a0_0x6932;
                var _0x260140 = this && this['__importDefault'] || function(_0x4906ff) {
                    return _0x4906ff && _0x4906ff['__esModule'] ? _0x4906ff : {
                        'default': _0x4906ff
                    };
                };
                Object['defineProperty'](_0x580458, '__esModule', {
                    'value': !0x0
                }), _0x580458['StageRandomPanelToggle'] = void 0x0;
                const _0x458a08 = _0x260140(_0x391ffa(0x5f07)),
                    _0x729e2e = _0x260140(_0x391ffa(0xc42e)),
                    _0x167543 = _0x260140(_0x391ffa(0x4d17));
                class _0x26e9e9 {
                    constructor(_0x19fb1c, _0x4135d4, _0x2f4264, _0x1ad953, _0x1b49e3 = _0x729e2e['default']['COIN']) {
                        const _0x38d9ea = _0x47e95f;
                        this[_0x38d9ea(0x6d2)] = _0x19fb1c, this['RequiredItem'] = _0x1b49e3, this['LocKey'] = _0x1ad953;
                        let _0x38cf2b = _0x167543[_0x38d9ea(0xd2c)][_0x1b49e3][0x0];
                        _0x38cf2b && _0x38cf2b[_0x38d9ea(0x8e3)], this[_0x38d9ea(0xa03)] = new Phaser[(_0x38d9ea(0xbf2))][(_0x38d9ea(0x1ae9))](this[_0x38d9ea(0x6d2)], _0x4135d4 + 0x18, _0x2f4264 + -0x1a, _0x458a08[_0x38d9ea(0xd2c)][_0x38d9ea(0x1f1)][_0x38d9ea(0xb10)](this[_0x38d9ea(0x1278)]), {
                            'align': 'center'
                        })['setScale'](0x1)['setOrigin'](0.5, 0x1)[_0x38d9ea(0x183f)](!0x0), _0x458a08[_0x38d9ea(0xd2c)][_0x38d9ea(0x1f1)][_0x38d9ea(0x14a8)](this[_0x38d9ea(0xa03)], !0x1, 0xc8), this[_0x38d9ea(0xf76)] = new Phaser[(_0x38d9ea(0xbf2))]['Image'](this['scene'], _0x4135d4, _0x2f4264, 'UI', 'menu_checkbox_24_bg.png')['setOrigin'](0x0, 0.5)[_0x38d9ea(0x8a2)](0x2), this[_0x38d9ea(0x8ad)] = new Phaser[(_0x38d9ea(0xbf2))][(_0x38d9ea(0x1951))](this[_0x38d9ea(0x6d2)], _0x4135d4, _0x2f4264, 'UI', 'yes16.png')['setOrigin'](0x0, 0.5)[_0x38d9ea(0x8a2)](0x2);
                    } ['SetVisible'](_0xae6062) {
                        const _0x48871a = _0x47e95f;
                        this[_0x48871a(0xa03)][_0x48871a(0x183f)](_0xae6062), this['Image_Box'][_0x48871a(0x183f)](_0xae6062), this[_0x48871a(0x8ad)]['setVisible'](_0xae6062 && !!_0x458a08['default']['Core'][_0x48871a(0x14d8)]['SelectedRandomEvents']);
                    } ['Toggle'](_0x47e17a) {
                        this['Image_Toggle']['setVisible'](_0x47e17a);
                    } ['GetDisplayElements']() {
                        const _0xd08ccd = _0x47e95f;
                        return [this[_0xd08ccd(0xa03)], this[_0xd08ccd(0xf76)], this[_0xd08ccd(0x8ad)]];
                    }
                }
                _0x580458['StageRandomPanelToggle'] = _0x26e9e9, _0x580458['default'] = _0x26e9e9;
            };
