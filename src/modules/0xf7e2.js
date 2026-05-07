// Module 0xf7e2
// Args: _0x396418, _0x2a5bf8, _0x2ee72d

export default (_0x396418, _0x2a5bf8, _0x2ee72d) => {
                'use strict';
                const _0x24a290 = a0_0x6932;
                var _0x1ec984 = this && this['__importDefault'] || function(_0x552288) {
                    return _0x552288 && _0x552288['__esModule'] ? _0x552288 : {
                        'default': _0x552288
                    };
                };
                Object['defineProperty'](_0x2a5bf8, '__esModule', {
                    'value': !0x0
                });
                const _0x315af9 = _0x1ec984(_0x2ee72d(0x42c9)),
                    _0x5371b2 = _0x1ec984(_0x2ee72d(0xea40)),
                    _0x599d9e = _0x1ec984(_0x2ee72d(0xc42e)),
                    _0xb1fcde = _0x1ec984(_0x2ee72d(0x14442)),
                    _0x3231f9 = _0x1ec984(_0x2ee72d(0x54e3)),
                    _0x8308be = _0x1ec984(_0x2ee72d(0x5f07)),
                    _0x2565b8 = _0x1ec984(_0x2ee72d(0xdb1c));
                class _0x3dc73c extends _0x2565b8['default'] {
                    constructor(_0x2c56ce) {
                        const _0x4a1bb5 = _0x24a290;
                        if (super(_0x2c56ce), this['hasNormalWater'] = !0x0, this[_0x4a1bb5(0x1123)] = !0x0, this[_0x4a1bb5(0x11b7)] = 0x2260, this[_0x4a1bb5(0x1b06)] = 0x680, _0x315af9['default'][_0x5371b2[_0x4a1bb5(0xd2c)]['FOSC10_BreakSeal1']] && _0x315af9['default'][_0x5371b2[_0x4a1bb5(0xd2c)]['FOSC10_BreakSeal1']][_0x4a1bb5(0x1355)] && (this['hasMagicWater'] = !0x1), this[_0x4a1bb5(0x1123)]) this[_0x4a1bb5(0x175)]();
                        else {
                            this[_0x4a1bb5(0x1164)] = this['scene'][_0x4a1bb5(0x18bd)][_0x4a1bb5(0x105b)](0x0, 0x0, 'background_Foscari', 'water1.png')[_0x4a1bb5(0x183f)](!0x1);
                            const _0x5e1300 = this['waterAnim'][_0x4a1bb5(0x183e)][_0x4a1bb5(0x1756)]('background_Foscari', {
                                'start': 0x1,
                                'end': 0x8,
                                'zeroPad': 0x0,
                                'prefix': 'water',
                                'suffix': '.png'
                            });
                            this[_0x4a1bb5(0x1164)][_0x4a1bb5(0x183e)][_0x4a1bb5(0x6a8)]({
                                'key': 'loop',
                                'frames': _0x5e1300,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            }), this[_0x4a1bb5(0x1164)]['anims'][_0x4a1bb5(0x902)]('loop'), this['water'] = this['scene'][_0x4a1bb5(0x18bd)][_0x4a1bb5(0x899)](0.5 * this[_0x4a1bb5(0x6d2)]['renderer'][_0x4a1bb5(0x173c)], 0.5 * this[_0x4a1bb5(0x6d2)][_0x4a1bb5(0x12f9)][_0x4a1bb5(0x140e)], this['scene'][_0x4a1bb5(0x12f9)][_0x4a1bb5(0x173c)], this[_0x4a1bb5(0x6d2)][_0x4a1bb5(0x12f9)][_0x4a1bb5(0x140e)], 'background_Foscari', 'bg_foscari.png')['setScrollFactor'](0x0)[_0x4a1bb5(0xb4a)](-0x2711)[_0x4a1bb5(0x183f)](!0x0);
                        }
                    } ['InitVFX']() {
                        const _0x463c05 = _0x24a290;
                        this[_0x463c05(0xe9a)] = this[_0x463c05(0x6d2)]['add']['shader']('waterFoscari', 0x0, 0x0, 0.5 * this['scene'][_0x463c05(0x12f9)]['width'], 0.5 * this['scene']['renderer']['height']), this[_0x463c05(0xe9a)][_0x463c05(0x1a76)]('rt_waterFoscari'), this['magicWaterImage'] = this[_0x463c05(0x6d2)][_0x463c05(0x18bd)][_0x463c05(0x568)](0.5 * this['scene'][_0x463c05(0x12f9)][_0x463c05(0x173c)], 0.5 * this[_0x463c05(0x6d2)][_0x463c05(0x12f9)]['height'], 'rt_waterFoscari')['setOrigin'](0.5)[_0x463c05(0xd87)](0x0)['setScale'](0x2)[_0x463c05(0xb4a)](-0x2710)['setVisible'](!0x0);
                    } ['Create']() {
                        const _0x5cca82 = _0x24a290;
                        try {
                            _0x8308be['default'][_0x5cca82(0x1043)][_0x5cca82(0x17c7)]['tilingTileset'][_0x5cca82(0x14d1)]['getObjectLayer']('Scripts')[_0x5cca82(0x9c2)]['forEach'](_0x2676dc => {
                                const _0x3237a2 = _0x5cca82;
                                'FS_SEAL1' === _0x2676dc['name'] && (this[_0x3237a2(0x11b7)] = _0x2676dc['x'], this[_0x3237a2(0x1b06)] = _0x2676dc['y']);
                            });
                        } catch (_0x340e5b) {}
                        this[_0x5cca82(0x1123)] ? this[_0x5cca82(0x59a)]() : this[_0x5cca82(0xe99)]();
                    } ['CreateSeal1']() {
                        const _0xb7b1b4 = _0x24a290;
                        _0x8308be[_0xb7b1b4(0xd2c)]['Core']['MakeDestructible'](_0xb1fcde['default']['FOSCARI_SEAL_1'], this[_0xb7b1b4(0x11b7)], this['fs_sealY'])[_0xb7b1b4(0x14cd)] = this['magicWaterImage'];
                    } ['CreateBadge']() {
                        const _0x2e3c13 = _0x24a290;
                        let _0x54d72a = _0x3231f9['default'][_0x2e3c13(0xbec)],
                            _0x3b6333 = this['fs_sealX'],
                            _0xa11e0b = this['fs_sealY'];
                        _0x8308be[_0x2e3c13(0xd2c)][_0x2e3c13(0x1043)][_0x2e3c13(0x13f8)](_0x3b6333, _0xa11e0b, _0x599d9e['default']['WEAPON'], _0x54d72a);
                    } ['Update'](_0x4eeda0) {
                        const _0xe83376 = _0x24a290;
                        this['hasMagicWater'] || (this[_0xe83376(0x99d)]['setFrame'](this[_0xe83376(0x1164)][_0xe83376(0x670)]['name']), this[_0xe83376(0x99d)]['tilePositionX'] = _0x8308be[_0xe83376(0xd2c)]['Core']['Player']['x'], this[_0xe83376(0x99d)][_0xe83376(0x130f)] = _0x8308be['default'][_0xe83376(0x1043)]['Player']['y']);
                    } ['OnInitCompleted']() {
                        const _0x2dee0f = _0x24a290;
                        _0x8308be[_0x2dee0f(0xd2c)][_0x2dee0f(0x1043)]['SetHardBounds'](0x100, 0x100, 0x2700, 0x2700);
                    } ['OnDestroy']() {
                        const _0x494b97 = _0x24a290;
                        _0x8308be['default'][_0x494b97(0x1043)][_0x494b97(0x1463)]();
                    }
                }
                _0x2a5bf8['default'] = _0x3dc73c;
            };
