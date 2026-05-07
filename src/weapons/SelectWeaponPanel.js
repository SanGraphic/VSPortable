// Module 0x15c57
// Args: _0x5323d0, _0x23b225, _0x578019

export default (_0x5323d0, _0x23b225, _0x578019) => {
                'use strict';
                const _0x2e7f3c = a0_0x6932;
                var _0x884afb = this && this['__importDefault'] || function(_0x202d4a) {
                    const _0x37c4d7 = _0x2e7f3c;
                    return _0x202d4a && _0x202d4a[_0x37c4d7(0x16f1)] ? _0x202d4a : {
                        'default': _0x202d4a
                    };
                };
                Object['defineProperty'](_0x23b225, '__esModule', {
                    'value': !0x0
                }), _0x23b225['SelectWeaponPanel'] = void 0x0;
                const _0x562c5b = _0x578019(0x16c14),
                    _0x16a7c0 = _0x884afb(_0x578019(0x54e3)),
                    _0x4641e5 = _0x884afb(_0x578019(0x3107)),
                    _0x1226a6 = _0x884afb(_0x578019(0x5103)),
                    _0xc10a35 = _0x884afb(_0x578019(0x5f07));
                class _0x5949c7 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x396d25, _0x1bbecd, _0x708e94, _0x4fdf66, _0x29944a) {
                        const _0x43a00d = _0x2e7f3c;
                        super(_0x396d25, _0x1bbecd, _0x708e94), this[_0x43a00d(0x8a2)](_0x1226a6[_0x43a00d(0xd2c)][_0x43a00d(0x15db)]), this[_0x43a00d(0x153c)] = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x4fdf66,
                            'height': _0x29944a
                        }, this[_0x43a00d(0x14b7)] = new _0x562c5b[(_0x43a00d(0x1a31))](this[_0x43a00d(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, this['posConfig']), this[_0x43a00d(0x1a7c)] = new Phaser[(_0x43a00d(0xbf2))]['Image'](this[_0x43a00d(0x6d2)], 0.5 * _0x29944a, 0.5 * _0x29944a, 'UI', 'frameB.png')['setOrigin'](0.5)[_0x43a00d(0x8a2)](0x2), this['myIcon'] = new Phaser[(_0x43a00d(0xbf2))]['Image'](this['scene'], 0.5 * _0x29944a, 0.5 * _0x29944a, '', '')[_0x43a00d(0xf8e)](0.5)['setScale'](0x2), this[_0x43a00d(0xc89)] = new Phaser[(_0x43a00d(0xbf2))][(_0x43a00d(0x1ae9))](this['scene'], this['myIcon']['x'] + 0.5 * _0x29944a, 0.5 * _0x29944a, _0xc10a35[_0x43a00d(0xd2c)][_0x43a00d(0x1f1)][_0x43a00d(0xb10)]('weapon_name'), {})[_0x43a00d(0x8a2)](0x1)['setOrigin'](0x0, 0.5)['setWordWrapWidth'](0x78), this[_0x43a00d(0x18bd)]([this[_0x43a00d(0x14b7)], this[_0x43a00d(0x1a7c)], this[_0x43a00d(0xa73)], this[_0x43a00d(0xc89)]]);
                    } ['AssignData'](_0x24248d = _0x16a7c0['default']['VOID']) {
                        const _0x247d7c = _0x2e7f3c;
                        if (!_0x4641e5[_0x247d7c(0xd2c)][_0x24248d] || _0x24248d === _0x16a7c0['default'][_0x247d7c(0xbc4)]) return this['weaponType'] = null, this[_0x247d7c(0xc89)]['text'] = _0xc10a35[_0x247d7c(0xd2c)][_0x247d7c(0x1f1)][_0x247d7c(0xb10)]('levelup_skip'), this[_0x247d7c(0xc89)]['setOrigin'](0.5)[_0x247d7c(0x726)](0.5 * this[_0x247d7c(0x153c)][_0x247d7c(0x173c)], 0.5 * this['posConfig']['height']), this[_0x247d7c(0x14b7)][_0x247d7c(0xb34)](0xff0000), this[_0x247d7c(0xa73)][_0x247d7c(0x183f)](!0x1), void this[_0x247d7c(0x1a7c)]['setVisible'](!0x1);
                        this['weaponType'] = _0x24248d;
                        var _0x209945 = _0x4641e5[_0x247d7c(0xd2c)][_0x24248d][0x0];
                        _0x209945 && (this[_0x247d7c(0xc89)]['text'] = _0x209945[_0x247d7c(0x226)], this['myIcon'][_0x247d7c(0x994)](_0x209945[_0x247d7c(0x174d)], _0x209945[_0x247d7c(0x8e3)]), _0x209945[_0x247d7c(0xdf4)] && this[_0x247d7c(0x14b7)]['setTint'](0xffff88));
                    }
                }
                _0x23b225['SelectWeaponPanel'] = _0x5949c7, _0x23b225['default'] = _0x5949c7;
            };
