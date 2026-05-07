// Module 0xbca
// Args: _0x5c66dc, _0x45c9e2, _0x54414c

export default (_0x5c66dc, _0x45c9e2, _0x54414c) => {
                'use strict';
                const _0x480f7b = a0_0x6932;
                var _0x1f90bd = this && this['__importDefault'] || function(_0xaa8133) {
                    return _0xaa8133 && _0xaa8133['__esModule'] ? _0xaa8133 : {
                        'default': _0xaa8133
                    };
                };
                Object['defineProperty'](_0x45c9e2, '__esModule', {
                    'value': !0x0
                }), _0x45c9e2['Prop_Cart'] = void 0x0;
                const _0x1b732d = _0x1f90bd(_0x54414c(0xa05)),
                    _0x37a928 = _0x1f90bd(_0x54414c(0x54e3)),
                    _0x24b753 = _0x1f90bd(_0x54414c(0x5f07)),
                    _0x2869c1 = _0x1f90bd(_0x54414c(0x13fb9));
                class _0x474600 extends _0x2869c1['default'] {
                    ['OnRecycle']() {
                        const _0x3f98e1 = _0x480f7b;
                        super[_0x3f98e1(0x5ce)](), this[_0x3f98e1(0x1232)] = !0x1;
                    } ['OnDestroyed']() {
                        const _0x188f57 = _0x480f7b;
                        var _0x25c136;
                        if (this['hasFired']) return;
                        if (this['hasFired'] = !0x0, !(Math[_0x188f57(0x19db)](this['x'] - _0x24b753[_0x188f57(0xd2c)][_0x188f57(0x1043)][_0x188f57(0x10f6)]['x']) < 0.5 * this['scene'][_0x188f57(0x12f9)][_0x188f57(0x173c)] && Math[_0x188f57(0x19db)](this['y'] - _0x24b753[_0x188f57(0xd2c)][_0x188f57(0x1043)]['Player']['y']) < 0.5 * this[_0x188f57(0x6d2)][_0x188f57(0x12f9)]['height'])) return;
                        _0x1b732d['default'][this['destructibleType']]['destroyedAmount'] += 0x1;
                        let _0xf1b0c9 = _0x24b753['default']['Core']['HiddenWeapons'][_0x188f57(0x1e6)](_0x274053 => _0x274053['bulletType'] === _0x37a928['default']['CART']);
                        _0xf1b0c9 || (_0xf1b0c9 = _0x24b753[_0x188f57(0xd2c)][_0x188f57(0x1043)][_0x188f57(0x117d)](_0x37a928[_0x188f57(0xd2c)]['CART'])), _0xf1b0c9 = _0x24b753['default']['Core']['HiddenWeapons'][_0x188f57(0x1e6)](_0x1d7d75 => _0x1d7d75['bulletType'] === _0x37a928[_0x188f57(0xd2c)]['CART']), _0xf1b0c9[_0x188f57(0xd36)] = {
                            'x': this['x'],
                            'y': this['y']
                        }, _0x474600[_0x188f57(0x1a49)] && (null === (_0x25c136 = _0x474600['timerEvent']) || void 0x0 === _0x25c136 || _0x25c136['destroy']()), _0x474600[_0x188f57(0x1a49)] = _0x24b753[_0x188f57(0xd2c)][_0x188f57(0x1043)]['scene'][_0x188f57(0x915)][_0x188f57(0x12b8)]({
                            'delay': 0x1388,
                            'callback': () => {
                                const _0x2d9799 = _0x188f57;
                                _0x24b753['default'][_0x2d9799(0x1043)]['RemoveHiddenWeapon'](_0x37a928[_0x2d9799(0xd2c)][_0x2d9799(0x137e)]);
                            }
                        }), _0xf1b0c9['Fire']();
                    }
                }
                _0x45c9e2['Prop_Cart'] = _0x474600, _0x45c9e2['default'] = _0x474600;
            };
