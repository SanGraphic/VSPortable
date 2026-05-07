// Module 0x16b3a
// Args: _0x3efdc0, _0x1dabb3, _0x592158

export default (_0x3efdc0, _0x1dabb3, _0x592158) => {
                'use strict';
                const _0xe1cb5e = a0_0x6932;
                var _0x3c8984 = this && this['__importDefault'] || function(_0x1dfbdf) {
                    return _0x1dfbdf && _0x1dfbdf['__esModule'] ? _0x1dfbdf : {
                        'default': _0x1dfbdf
                    };
                };
                Object['defineProperty'](_0x1dabb3, '__esModule', {
                    'value': !0x0
                }), _0x1dabb3['W_Lancet'] = void 0x0;
                const _0x5ad4f1 = _0x3c8984(_0x592158(0x5f07)),
                    _0x8ee04a = _0x3c8984(_0x592158(0xe49a));
                class _0x58fdc7 extends _0x8ee04a['default'] {
                    constructor(_0x4f2424) {
                        const _0x536016 = _0xe1cb5e;
                        super(_0x4f2424), this['ticks'] = 0x8, this[_0x536016(0xa76)] = new Array(), this[_0x536016(0x137c)] = new Array();
                        for (let _0x2cf2bd = 0x0; _0x2cf2bd < 0xc; _0x2cf2bd++) {
                            var _0x193fad = _0x2cf2bd / 0xc * (0x2 * Math['PI']);
                            this[_0x536016(0xa76)][_0x536016(0x1564)]({
                                'x': Math['cos'](_0x193fad),
                                'y': Math[_0x536016(0xc80)](_0x193fad)
                            }), this['angles'][_0x536016(0x1564)](_0x193fad);
                        }
                        this[_0x536016(0x568)] = _0x5ad4f1[_0x536016(0xd2c)]['Core']['scene']['add']['sprite'](0x0, 0x0, 'vfx', 'Pierce1.png'), this['image'][_0x536016(0xf01)](_0x5ad4f1['default'][_0x536016(0x1043)][_0x536016(0x10f6)])[_0x536016(0xf8e)](0x0, 0.5)['setVisible'](!0x1)[_0x536016(0xb34)](0xcceeff)[_0x536016(0x8a2)](0x2, 0x1), this[_0x536016(0x11d1)] = _0x5ad4f1['default'][_0x536016(0x1043)][_0x536016(0x6d2)][_0x536016(0x18bd)][_0x536016(0x99a)]({
                            'targets': this['image'],
                            'alpha': 0x0,
                            'delay': 0xc8,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0x37a7e7 = _0x536016;
                                this['image'][_0x37a7e7(0xe71)] = 0x1;
                            }
                        });
                        const _0x267a47 = this[_0x536016(0x568)][_0x536016(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'Pierce',
                            'suffix': '.png'
                        });
                        this[_0x536016(0x568)][_0x536016(0x183e)][_0x536016(0x6a8)]({
                            'key': 'pierce',
                            'frames': _0x267a47,
                            'frameRate': 0x1e
                        });
                    }
                    get['PAmount']() {
                        return 0x6;
                    } ['Fire']() {
                        const _0x13aec2 = _0xe1cb5e;
                        this['ticks']++, this[_0x13aec2(0x288)] >= 0xc && (this[_0x13aec2(0x288)] = 0x0), this[_0x13aec2(0x18a7)] = this[_0x13aec2(0xa76)][this[_0x13aec2(0x288)]], this[_0x13aec2(0x11d1)][_0x13aec2(0x1374)](), this[_0x13aec2(0x568)][_0x13aec2(0xf01)](_0x5ad4f1['default'][_0x13aec2(0x1043)][_0x13aec2(0x10f6)])[_0x13aec2(0x9b5)](Phaser[_0x13aec2(0x24f)][_0x13aec2(0x1470)](this[_0x13aec2(0x137c)][this['ticks']]))[_0x13aec2(0x183f)](!0x0)[_0x13aec2(0xb4a)](_0x5ad4f1[_0x13aec2(0xd2c)][_0x13aec2(0x1043)]['Player'][_0x13aec2(0x16c6)] + this[_0x13aec2(0x568)][_0x13aec2(0x6d2)][_0x13aec2(0x12f9)][_0x13aec2(0x140e)]), this[_0x13aec2(0x568)][_0x13aec2(0x183e)]['play']('pierce');
                        for (let _0x26c473 = 0x0; _0x26c473 < this[_0x13aec2(0x942)]; _0x26c473++) this[_0x13aec2(0x11ec)](_0x5ad4f1[_0x13aec2(0xd2c)]['Core'][_0x13aec2(0x10f6)]['x'], _0x5ad4f1[_0x13aec2(0xd2c)]['Core'][_0x13aec2(0x10f6)]['y'], _0x26c473, this[_0x13aec2(0x18a7)], this[_0x13aec2(0x137c)][this[_0x13aec2(0x288)]]);
                        this[_0x13aec2(0x162d)] != this['PInterval'] && (this[_0x13aec2(0x162d)] = this['PInterval'], this[_0x13aec2(0x839)]()), _0x5ad4f1[_0x13aec2(0xd2c)][_0x13aec2(0x1043)]['Arcanas'][_0x13aec2(0x1382)] && _0x5ad4f1[_0x13aec2(0xd2c)][_0x13aec2(0x1043)]['Arcanas'][_0x13aec2(0xb6b)](this);
                    } ['FireOneLancet'](_0x49058d, _0x5e4e24, _0x3adbc2, _0x240514, _0x4ad125) {
                        const _0x321d03 = _0xe1cb5e;
                        var _0x4a1cab = super[_0x321d03(0x970)](_0x49058d, _0x5e4e24, _0x3adbc2, _0x240514);
                        null == _0x4a1cab || _0x4a1cab['setAngle'](Phaser[_0x321d03(0x24f)][_0x321d03(0x1470)](_0x4ad125));
                    }
                }
                _0x1dabb3['W_Lancet'] = _0x58fdc7, _0x1dabb3['default'] = _0x58fdc7;
            };
