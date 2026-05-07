// Module 0xbecb
// Args: _0x3143ff, _0x1f62a1, _0x1a34f9

export default (_0x3143ff, _0x1f62a1, _0x1a34f9) => {
                'use strict';
                const _0x448252 = a0_0x6932;
                var _0x453716 = this && this['__importDefault'] || function(_0xc95cd9) {
                    return _0xc95cd9 && _0xc95cd9['__esModule'] ? _0xc95cd9 : {
                        'default': _0xc95cd9
                    };
                };
                Object['defineProperty'](_0x1f62a1, '__esModule', {
                    'value': !0x0
                }), _0x1f62a1['W_SummonNight'] = void 0x0;
                const _0x3e5284 = _0x453716(_0x1a34f9(0x5f07)),
                    _0x35f054 = _0x453716(_0x1a34f9(0xe49a)),
                    _0x5e0f70 = _0x453716(_0x1a34f9(0x1fd7));
                class _0xb80c50 extends _0x35f054['default'] {
                    ['Fire']() {
                        const _0x4e2017 = _0x448252;
                        _0x3e5284['default'][_0x4e2017(0x1267)]['PlaySound'](_0x5e0f70['default'][_0x4e2017(0x1591)], {
                            'volume': 0.9
                        }, 0x64, 0x8);
                        let _0x48149b = this['PAmount'],
                            _0x518a7f = _0x3e5284['default']['Core']['scene'][_0x4e2017(0x12f9)]['width'] / (0x1 + _0x48149b),
                            _0x37523e = _0x3e5284[_0x4e2017(0xd2c)]['Core']['Player']['x'] - 0.5 * _0x3e5284['default'][_0x4e2017(0x1043)][_0x4e2017(0x6d2)][_0x4e2017(0x12f9)][_0x4e2017(0x173c)],
                            _0x2d42df = _0x3e5284['default'][_0x4e2017(0x1043)][_0x4e2017(0x10f6)]['y'] - 0.5 * _0x3e5284[_0x4e2017(0xd2c)]['Core']['scene']['renderer']['height'];
                        for (let _0x315818 = 0x0; _0x315818 < _0x48149b; _0x315818++) this[_0x4e2017(0x7ea)] * _0x315818 > 0x0 ? (this['lastShotTimer'] = _0x3e5284['default'][_0x4e2017(0x1043)]['scene'][_0x4e2017(0x915)][_0x4e2017(0x12b8)]({
                            'delay': this[_0x4e2017(0x7ea)] * _0x315818,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x37e850 = _0x4e2017;
                                this['FireOneBullet'](_0x37523e + _0x518a7f * (0x1 + _0x315818), _0x2d42df, _0x315818, this[_0x37e850(0x18a7)]);
                            }
                        }), this[_0x4e2017(0x11fa)]['name'] = 'Firing:\x20' + this[_0x4e2017(0x14e)] + '\x20') : this['FireOneBullet'](_0x37523e + _0x518a7f * (0x1 + _0x315818), _0x2d42df, _0x315818, this['target']);
                        this['lastFiringInterval'] != this[_0x4e2017(0x170c)] && (this[_0x4e2017(0x162d)] = this['PInterval'], this[_0x4e2017(0x839)]());
                    }
                }
                _0x1f62a1['W_SummonNight'] = _0xb80c50, _0x1f62a1['default'] = _0xb80c50;
            };
