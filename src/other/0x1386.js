// Module 0x1386
// Args: _0x4d8e0a, _0x1a5445, _0x57e3d9

export default (_0x4d8e0a, _0x1a5445, _0x57e3d9) => {
                'use strict';
                const _0x5b4037 = a0_0x6932;
                var _0x59c835 = this && this['__importDefault'] || function(_0x412d39) {
                    const _0x91b63f = a0_0x6932;
                    return _0x412d39 && _0x412d39['__esModule'] ? _0x412d39 : {
                        'default': _0x412d39
                    };
                };
                Object['defineProperty'](_0x1a5445, '__esModule', {
                    'value': !0x0
                });
                const _0x2247dd = _0x59c835(_0x57e3d9(0x5f07)),
                    _0x274d7a = _0x59c835(_0x57e3d9(0x166d5)),
                    _0x17c29d = _0x59c835(_0x57e3d9(0xc42e)),
                    _0x561b76 = _0x59c835(_0x57e3d9(0x1fd7)),
                    _0x1f1141 = _0x59c835(_0x57e3d9(0x5103));
                class _0x7686c3 extends _0x274d7a['default'] {
                    constructor(_0x3a14a3, _0x282d8a, _0x429e25) {
                        const _0x344661 = _0x5b4037;
                        super(_0x3a14a3, _0x282d8a, _0x429e25, _0x17c29d[_0x344661(0xd2c)]['VACUUM']), _0x2247dd[_0x344661(0xd2c)][_0x344661(0x1043)][_0x344661(0x6d2)]['add'][_0x344661(0x1a88)](this), this[_0x344661(0x8a2)](_0x1f1141['default'][_0x344661(0x15db)]);
                        const _0xb47f5 = this['anims'][_0x344661(0x1756)]('items', {
                            'start': 0x1,
                            'end': 0x3,
                            'zeroPad': 0x0,
                            'prefix': 'Vacuum',
                            'suffix': '.png'
                        });
                        this[_0x344661(0x183e)][_0x344661(0x6a8)]({
                            'key': 'idle',
                            'frames': _0xb47f5,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x5f1190 = _0x5b4037;
                        super['OnRecycle'](), this[_0x5f1190(0x183e)][_0x5f1190(0x902)]('idle');
                    } ['Update']() {
                        const _0x179952 = _0x5b4037;
                        super['Update'](), this['setDepth'](0x9 + this['y'] - _0x2247dd['default'][_0x179952(0x1043)][_0x179952(0x10f6)]['y']);
                    } ['GetTaken']() {
                        const _0x1532e3 = _0x5b4037;
                        this['disableGet'] || (_0x2247dd[_0x1532e3(0xd2c)][_0x1532e3(0x1043)]['TurnOnVacuum'](), _0x2247dd[_0x1532e3(0xd2c)][_0x1532e3(0x1043)][_0x1532e3(0x14d8)][_0x1532e3(0x9f7)]['push'](this['itemType']), this[_0x1532e3(0x102c)](this[_0x1532e3(0xeb5)]), super[_0x1532e3(0x437)](), _0x2247dd[_0x1532e3(0xd2c)]['Sound']['PlaySound'](_0x561b76[_0x1532e3(0xd2c)][_0x1532e3(0x11fc)], {
                            'volume': 0.6,
                            'rate': 0x1
                        }));
                    }
                }
                _0x1a5445['default'] = _0x7686c3;
            };
