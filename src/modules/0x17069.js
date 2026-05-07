// Module 0x17069
// Args: _0x4edfb9, _0x4e1794, _0x4d2002

export default (_0x4edfb9, _0x4e1794, _0x4d2002) => {
                'use strict';
                const _0x70ea0e = a0_0x6932;
                var _0x41b78a = this && this['__importDefault'] || function(_0x3bde95) {
                    const _0x11a066 = _0x70ea0e;
                    return _0x3bde95 && _0x3bde95[_0x11a066(0x16f1)] ? _0x3bde95 : {
                        'default': _0x3bde95
                    };
                };
                Object['defineProperty'](_0x4e1794, '__esModule', {
                    'value': !0x0
                }), _0x4e1794['CollectionArcanaPanel'] = void 0x0;
                const _0x351402 = _0x41b78a(_0x4d2002(0x5103)),
                    _0x1d977c = _0x41b78a(_0x4d2002(0x9b68)),
                    _0x239349 = _0x41b78a(_0x4d2002(0x15866));
                class _0x43c46c extends Phaser['GameObjects']['Container'] {
                    constructor(_0x5b06af, _0x30561a, _0x1ff903, _0x391dc2) {
                        const _0x5a19f3 = _0x70ea0e;
                        super(_0x5b06af, _0x30561a, _0x1ff903), this[_0x5a19f3(0x31f)] = _0x1d977c['default'][_0x5a19f3(0xc5f)], this['powerType'] = 'Arcana', this[_0x5a19f3(0x31f)] = _0x391dc2, this[_0x5a19f3(0x8a2)](_0x351402['default'][_0x5a19f3(0x15db)]), this['myIconBG'] = new Phaser['GameObjects']['Image'](this[_0x5a19f3(0x6d2)], 0x20, 0x20, 'UI', 'frameC.png')[_0x5a19f3(0xf8e)](0.5)[_0x5a19f3(0x8a2)](0x2 * _0x351402[_0x5a19f3(0xd2c)]['PixelScale']), this[_0x5a19f3(0x74e)] = new Phaser['GameObjects'][(_0x5a19f3(0x1951))](this['scene'], 0x20, 0x20, 'randomazzo', '')['setOrigin'](0.5)[_0x5a19f3(0x8a2)](0x2 * _0x351402[_0x5a19f3(0xd2c)][_0x5a19f3(0x15db)]), this['AssignData'](this[_0x5a19f3(0x31f)]), this['add']([this['myIconBG'], this['myWeaponIcon']]);
                    } ['AssignData'](_0x203901) {
                        const _0x560a17 = _0x70ea0e;
                        this[_0x560a17(0x31f)] = _0x203901;
                        var _0x1fd57f = _0x239349[_0x560a17(0xd2c)][this[_0x560a17(0x31f)]];
                        let _0x596e2c = 'frameG.png';
                        _0x1fd57f['unlocked'] ? (this['myWeaponIcon']['setTexture']('items', _0x1fd57f[_0x560a17(0x8e3)])['setScale'](0x2 * _0x351402[_0x560a17(0xd2c)]['PixelScale']), this['myIconBG'][_0x560a17(0xdab)](0x1)[_0x560a17(0x8a2)](0x2 * _0x351402[_0x560a17(0xd2c)]['PixelScale'])['setFrame'](_0x596e2c)) : (this[_0x560a17(0x74e)]['setTexture']('items', 'QuestionMark.png')[_0x560a17(0x8a2)](_0x351402[_0x560a17(0xd2c)]['PixelScale']), this[_0x560a17(0x1a7c)]['setAlpha'](0.5)['setScale'](1.6 * _0x351402['default'][_0x560a17(0x15db)])[_0x560a17(0x381)](_0x596e2c));
                    }
                }
                _0x4e1794['CollectionArcanaPanel'] = _0x43c46c, _0x4e1794['default'] = _0x43c46c;
            };
