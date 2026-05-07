// Module 0x9a2e
// Args: _0x376fe0, _0x499d8f, _0x471799

export default (_0x376fe0, _0x499d8f, _0x471799) => {
                'use strict';
                const _0x4ab7a5 = a0_0x6932;
                var _0xfc1592 = this && this['__importDefault'] || function(_0x4b3efa) {
                    return _0x4b3efa && _0x4b3efa['__esModule'] ? _0x4b3efa : {
                        'default': _0x4b3efa
                    };
                };
                Object['defineProperty'](_0x499d8f, '__esModule', {
                    'value': !0x0
                }), _0x499d8f['B_Jubilee_Rays'] = void 0x0;
                const _0x175012 = _0xfc1592(_0x471799(0xa14d)),
                    _0x162b9c = _0xfc1592(_0x471799(0x5f07));
                class _0x5c8d6e extends _0x175012['default'] {
                    constructor(_0x42209d, _0x93ee35, _0x593195, _0x520e93, _0x3f8d1a) {
                        const _0x1e6833 = _0x4ab7a5;
                        super(_0x42209d, _0x93ee35, _0x593195, 'vfx', 'WhiteDot.png', _0x520e93, _0x3f8d1a), this[_0x1e6833(0x1aba)] = 0x30, this[_0x1e6833(0x969)] = 0x0, this['trueWeapon'] = this[_0x1e6833(0x4a1)], this[_0x1e6833(0x183f)](!0x1), this['_speed'] = 0x8;
                    } ['OnRecycle']() {
                        const _0x4c9df6 = _0x4ab7a5;
                        super[_0x4c9df6(0x5ce)](), this['setScale'](0x1), this['body']['setCircle'](0x1, -0.5, -0.5), this[_0x4c9df6(0x8a2)](this['basePixelScale']), this['yOffset'] = this['y'], this['y'] = _0x162b9c['default'][_0x4c9df6(0x1043)][_0x4c9df6(0x10f6)]['y'] + this['yOffset'], this[_0x4c9df6(0x19c8)](this[_0x4c9df6(0xfbb)] * (this[_0x4c9df6(0x19c4)] % 0x2 == 0x0 ? 0x1 : -0x1), 0x0), this['setCollideWorldBounds'](!0x0, 0x1, 0x0), this['body'][_0x4c9df6(0xda7)](_0x162b9c[_0x4c9df6(0xd2c)]['Core'][_0x4c9df6(0x10f6)][_0x4c9df6(0xc00)]), this[_0x4c9df6(0xcf9)][_0x4c9df6(0x940)] = !0x0, this['scene'][_0x4c9df6(0x915)][_0x4c9df6(0x17fb)](this[_0x4c9df6(0x12b7)]), this[_0x4c9df6(0x12b7)] = this['scene'][_0x4c9df6(0x915)][_0x4c9df6(0x12b8)]({
                            'delay': 0xa * this[_0x4c9df6(0x4a1)][_0x4c9df6(0x16c3)],
                            'callback': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['Update'](_0x5a2de2) {
                        const _0x471af4 = _0x4ab7a5;
                        super[_0x471af4(0xa9f)](_0x5a2de2), this['y'] = _0x162b9c[_0x471af4(0xd2c)]['Core']['Player']['y'] + this[_0x471af4(0x969)];
                    }
                }
                _0x499d8f['B_Jubilee_Rays'] = _0x5c8d6e, _0x499d8f['default'] = _0x5c8d6e;
            };
