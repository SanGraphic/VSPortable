// Module 0x11e22
// Args: _0x36184a, _0x4a4c78, _0x33434e

export default (_0x36184a, _0x4a4c78, _0x33434e) => {
                'use strict';
                const _0x56e604 = a0_0x6932;
                var _0x562221 = this && this['__importDefault'] || function(_0x4fe04c) {
                    const _0x8e9a29 = _0x56e604;
                    return _0x4fe04c && _0x4fe04c[_0x8e9a29(0x16f1)] ? _0x4fe04c : {
                        'default': _0x4fe04c
                    };
                };
                Object['defineProperty'](_0x4a4c78, '__esModule', {
                    'value': !0x0
                });
                const _0x2ce979 = _0x562221(_0x33434e(0x15abc)),
                    _0x19c94c = _0x562221(_0x33434e(0x136b9)),
                    _0x1def9a = _0x562221(_0x33434e(0x1fd7)),
                    _0x20e4b4 = _0x562221(_0x33434e(0x54e3)),
                    _0x592470 = _0x562221(_0x33434e(0x5f07)),
                    _0x3bf31b = _0x562221(_0x33434e(0x1166a));
                class _0x30804c extends _0x3bf31b['default'] {
                    ['OnRecycle']() {
                        const _0x2cc7c6 = _0x56e604;
                        super[_0x2cc7c6(0x5ce)]();
                        let _0x9c76b3 = _0x2ce979[_0x2cc7c6(0xd2c)][this['enemyType']][0x0][_0x2cc7c6(0x15fd)];
                        this['shieldDuration'] = _0x9c76b3 || 0x7d0, this[_0x2cc7c6(0xc9e)] = 0x0, this[_0x2cc7c6(0x6e1)] = !0x0, this['scene']['time'][_0x2cc7c6(0x17fb)](this['shieldTimer']), this[_0x2cc7c6(0x45a)] = this['scene'][_0x2cc7c6(0x915)][_0x2cc7c6(0x12b8)]({
                            'delay': this['shieldDuration'],
                            'callback': () => {
                                const _0x57571d = _0x2cc7c6;
                                this[_0x57571d(0x6e1)] = !0x1, this['hp'] -= this['shieldDamage'];
                            }
                        });
                    } ['GetDamaged'](_0x440074 = 0x1, _0x242d22 = _0x19c94c['default']['DEFAULT'], _0x556ee9 = 0x1, _0x233c2f = _0x20e4b4['default']['VOID'], _0x474265 = !0x0) {
                        const _0x22a0b2 = _0x56e604;
                        _0x440074 > 0x0 && _0x592470[_0x22a0b2(0xd2c)][_0x22a0b2(0x1043)]['PlayerOptions'][_0x22a0b2(0xf09)] && _0x592470['default'][_0x22a0b2(0x1043)][_0x22a0b2(0x989)](this['x'], this['y'], _0x440074), this[_0x22a0b2(0x6e1)] ? this[_0x22a0b2(0xc9e)] += _0x440074 : this['hp'] -= _0x440074, this['hp'] <= 0x0 ? this['Die']() : this['damageKB'] = _0x556ee9, _0x592470['default'][_0x22a0b2(0x1267)][_0x22a0b2(0x7f6)](_0x1def9a[_0x22a0b2(0xd2c)][_0x22a0b2(0xfca)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x22a0b2(0x9ad)]() - 0.5)
                        }, 0x96, 0x3), _0x242d22 != _0x19c94c[_0x22a0b2(0xd2c)]['NONE'] && _0x592470[_0x22a0b2(0xd2c)][_0x22a0b2(0x1043)][_0x22a0b2(0x1af4)](this['x'], this['y'], _0x242d22), this['OnGetDamaged'](_0x242d22, _0x474265);
                    } ['Update'](_0x400914) {
                        const _0x16c484 = _0x56e604;
                        super[_0x16c484(0xa9f)](_0x400914), this['SnakeUpdate']();
                    } ['ConditionalUpdate'](_0x1fa7e7) {
                        const _0x20ba31 = _0x56e604;
                        super[_0x20ba31(0x1904)](_0x1fa7e7), this['SnakeUpdate']();
                    } ['SnakeUpdate']() {
                        const _0x2f6288 = _0x56e604;
                        var _0x276dc5 = Phaser[_0x2f6288(0x24f)]['Vector2']['RIGHT'];
                        this[_0x2f6288(0xd96)] = -0x5a + Phaser['Math'][_0x2f6288(0x1470)](Math['atan2'](this[_0x2f6288(0xcf9)]['velocity']['y'] - _0x276dc5['y'], this[_0x2f6288(0xcf9)]['velocity']['x'] - _0x276dc5['x']));
                    }
                }
                _0x4a4c78['default'] = _0x30804c;
            };
