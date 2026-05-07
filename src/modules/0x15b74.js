// Module 0x15b74
// Args: _0x2f39c6, _0x2dbbb5, _0x50d0c3

export default (_0x2f39c6, _0x2dbbb5, _0x50d0c3) => {
                'use strict';
                const _0x173f86 = a0_0x6932;
                var _0x189070 = this && this['__importDefault'] || function(_0x4230d9) {
                    const _0x3512c7 = _0x173f86;
                    return _0x4230d9 && _0x4230d9[_0x3512c7(0x16f1)] ? _0x4230d9 : {
                        'default': _0x4230d9
                    };
                };
                Object['defineProperty'](_0x2dbbb5, '__esModule', {
                    'value': !0x0
                }), _0x2dbbb5['B_Sarabande'] = void 0x0;
                const _0x3233c9 = _0x189070(_0x50d0c3(0xa14d)),
                    _0x2caefe = _0x189070(_0x50d0c3(0x5f07)),
                    _0x5326a5 = _0x50d0c3(0x18304),
                    _0x38b98a = _0x189070(_0x50d0c3(0x5103));
                class _0x458acf extends _0x3233c9['default'] {
                    constructor(_0x3e109f, _0x53bee1, _0x556c9c, _0x203c90, _0x26ff08) {
                        const _0x45fcd0 = _0x173f86;
                        super(_0x3e109f, _0x53bee1, _0x556c9c, 'vfx', 'Rings4.png', _0x203c90, _0x26ff08), this['radius'] = 0x10, this['copyPosition'](_0x2caefe[_0x45fcd0(0xd2c)]['Core'][_0x45fcd0(0x10f6)]);
                    } ['OnRecycle']() {
                        const _0x5d3e46 = _0x173f86;
                        var _0x53943c;
                        super['OnRecycle'](), this['body']['setCircle'](this[_0x5d3e46(0x161a)]), this[_0x5d3e46(0x8a2)](0x0), this[_0x5d3e46(0xdab)](0.2), this[_0x5d3e46(0x183f)](!0x0), this[_0x5d3e46(0x11c7)](_0x5326a5[_0x5d3e46(0x10fc)]['ADD']), _0x2caefe[_0x5d3e46(0xd2c)][_0x5d3e46(0x1043)][_0x5d3e46(0x6d2)]['time'][_0x5d3e46(0x17fb)](this[_0x5d3e46(0x12a3)]), null === (_0x53943c = this[_0x5d3e46(0x660)]) || void 0x0 === _0x53943c || _0x53943c[_0x5d3e46(0x1a34)](), this['scaleTween'] = _0x2caefe[_0x5d3e46(0xd2c)][_0x5d3e46(0x1043)]['scene']['tweens'][_0x5d3e46(0x18bd)]({
                            'targets': this,
                            'scale': 0x2 * _0x38b98a[_0x5d3e46(0xd2c)][_0x5d3e46(0x15db)] * this[_0x5d3e46(0x4a1)][_0x5d3e46(0x5f5)],
                            'alpha': 0x0,
                            'duration': 0x12c,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['Update']() {
                        const _0x1f599b = _0x173f86;
                        this[_0x1f599b(0xf01)](_0x2caefe['default'][_0x1f599b(0x1043)]['Player']);
                    }
                }
                _0x2dbbb5['B_Sarabande'] = _0x458acf, _0x2dbbb5['default'] = _0x458acf;
            };
