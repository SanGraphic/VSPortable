// Module 0x5cfa
// Args: _0x3c2565, _0x563986, _0x50c25d

export default (_0x3c2565, _0x563986, _0x50c25d) => {
                'use strict';
                const _0x14814f = a0_0x6932;
                var _0x434a65 = this && this['__importDefault'] || function(_0xdb918) {
                    const _0x45f65f = _0x14814f;
                    return _0xdb918 && _0xdb918[_0x45f65f(0x16f1)] ? _0xdb918 : {
                        'default': _0xdb918
                    };
                };
                Object['defineProperty'](_0x563986, '__esModule', {
                    'value': !0x0
                });
                const _0x13cdfd = _0x434a65(_0x50c25d(0x136b9)),
                    _0x27cedd = _0x434a65(_0x50c25d(0x1fd7)),
                    _0xfd715c = _0x434a65(_0x50c25d(0x54e3)),
                    _0x2e04e9 = _0x434a65(_0x50c25d(0x5f07)),
                    _0x517cb0 = _0x434a65(_0x50c25d(0x154be));
                class _0x13b912 extends _0x517cb0['default'] {
                    ['Die']() {
                        const _0x2d02f8 = _0x14814f;
                        super[_0x2d02f8(0x14f3)](), this[_0x2d02f8(0x1438)] && this[_0x2d02f8(0x1438)]();
                    } ['OnRecycle']() {
                        const _0x485914 = _0x14814f;
                        super[_0x485914(0x5ce)](), this[_0x485914(0x187a)] = !0x0, this['shieldDamage'] = 0x0, this['hasShield'] = !0x0, this[_0x485914(0x6d2)][_0x485914(0x915)][_0x485914(0x17fb)](this['shieldTimer']), this[_0x485914(0x45a)] = this[_0x485914(0x6d2)][_0x485914(0x915)]['addEvent']({
                            'delay': 0x4e20,
                            'callback': () => {
                                const _0xc20854 = _0x485914;
                                this['hasShield'] = !0x1, this['hp'] -= this[_0xc20854(0xc9e)];
                            }
                        });
                    } ['GetDamaged'](_0x292969 = 0x1, _0x44c563 = _0x13cdfd['default']['DEFAULT'], _0x3e6d9a = 0x1, _0x57340d = _0xfd715c['default']['VOID'], _0x332e9c = !0x0) {
                        const _0x91dd13 = _0x14814f;
                        _0x292969 > 0x0 && _0x2e04e9[_0x91dd13(0xd2c)][_0x91dd13(0x1043)][_0x91dd13(0x14d8)][_0x91dd13(0xf09)] && _0x2e04e9['default'][_0x91dd13(0x1043)]['ShowDamageAt'](this['x'], this['y'], _0x292969), this[_0x91dd13(0x6e1)] ? this[_0x91dd13(0xc9e)] += _0x292969 : this['hp'] -= _0x292969, this['hp'] <= 0x0 ? this['Die']() : this[_0x91dd13(0x25d)] = _0x3e6d9a, _0x2e04e9['default'][_0x91dd13(0x1267)]['PlaySound'](_0x27cedd['default'][_0x91dd13(0xfca)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x91dd13(0x9ad)]() - 0.5)
                        }, 0x96, 0x3), _0x44c563 != _0x13cdfd[_0x91dd13(0xd2c)]['NONE'] && _0x2e04e9['default'][_0x91dd13(0x1043)][_0x91dd13(0x1af4)](this['x'], this['y'], _0x44c563), this['OnGetDamaged'](_0x44c563, _0x332e9c);
                    } ['onDefeat']() {}
                }
                _0x563986['default'] = _0x13b912;
            };
