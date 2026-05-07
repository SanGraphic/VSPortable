// Module 0x17b7f
// Args: _0x52e698, _0x2bafa1, _0x36e4a4

export default (_0x52e698, _0x2bafa1, _0x36e4a4) => {
                'use strict';
                const _0x268bf3 = a0_0x6932;
                var _0x19e781 = this && this['__importDefault'] || function(_0xa7ca48) {
                    const _0x5bf53f = a0_0x6932;
                    return _0xa7ca48 && _0xa7ca48['__esModule'] ? _0xa7ca48 : {
                        'default': _0xa7ca48
                    };
                };
                Object['defineProperty'](_0x2bafa1, '__esModule', {
                    'value': !0x0
                });
                const _0x151e61 = _0x19e781(_0x36e4a4(0x15abc)),
                    _0x299385 = _0x19e781(_0x36e4a4(0xdfbc)),
                    _0x425cf4 = _0x19e781(_0x36e4a4(0x1852a)),
                    _0x43f799 = _0x19e781(_0x36e4a4(0x1fd7)),
                    _0x17e0fa = _0x19e781(_0x36e4a4(0xc450)),
                    _0x1cba78 = _0x19e781(_0x36e4a4(0x5f07)),
                    _0x844c4e = _0x19e781(_0x36e4a4(0x1166a));
                class _0x182bba extends _0x844c4e['default'] {
                    constructor() {
                        super(...arguments), this['activated'] = 0x0;
                    } ['OnRecycle']() {
                        const _0x1a374e = _0x268bf3;
                        super[_0x1a374e(0x5ce)](), this['_defaultSpeed'] = _0x151e61['default'][this[_0x1a374e(0xe49)]][0x0]['speed'], this[_0x1a374e(0x177d)] = !0x1, this[_0x1a374e(0x187a)] = !0x1, this[_0x1a374e(0xe89)] = 0x0;
                    } ['Disappear']() {
                        const _0x335101 = _0x268bf3;
                        this[_0x335101(0x177d)] = !0x0, this[_0x335101(0x187a)] = !0x1;
                    } ['Update'](_0x1abfbd) {
                        const _0x5d3788 = _0x268bf3;
                        this[_0x5d3788(0x78e)] = this['_defaultSpeed'] * this['activated'], _0x1cba78[_0x5d3788(0xd2c)]['Core']['Player']['x'] > 0x9800 && (this['activated'] = 0x1), super[_0x5d3788(0xa9f)](_0x1abfbd);
                    } ['GetDamaged'](_0xa06b44, _0x15532c, _0x427691, _0x15a804) {
                        const _0x213bbd = _0x268bf3;
                        this[_0x213bbd(0xe89)] && super[_0x213bbd(0x1112)](_0xa06b44, _0x15532c, _0x427691, _0x15a804);
                    } ['Die']() {
                        const _0x5a0b02 = _0x268bf3;
                        super[_0x5a0b02(0x14f3)]();
                        let _0x53b3b2 = !0x1; - 0x1 === _0x1cba78[_0x5a0b02(0xd2c)][_0x5a0b02(0x1043)][_0x5a0b02(0x14d8)]['UnlockedCharacters'][_0x5a0b02(0x1303)](_0x299385['default'][_0x5a0b02(0xa98)]) && (_0x1cba78['default'][_0x5a0b02(0x1267)][_0x5a0b02(0x7f6)](_0x43f799['default'][_0x5a0b02(0x8d2)], {
                            'volume': 0x1,
                            'detune': -0x3e8,
                            'rate': 0.5
                        }), _0x17e0fa['default']['UnlockSecret'](_0x425cf4[_0x5a0b02(0xd2c)]['HearTheThunder']), _0x53b3b2 = !0x0), _0x1cba78['default']['Sound'][_0x5a0b02(0x7f6)](_0x43f799[_0x5a0b02(0xd2c)][_0x5a0b02(0x15f)], {
                            'volume': 1.5,
                            'detune': -0x258 * Math[_0x5a0b02(0x9ad)]()
                        }), _0x1cba78[_0x5a0b02(0xd2c)][_0x5a0b02(0x1043)]['SceneManager']['FrameFreeze'](), this[_0x5a0b02(0x6d2)][_0x5a0b02(0x12a1)][_0x5a0b02(0x18bd)]({
                            'targets': this[_0x5a0b02(0x6d2)][_0x5a0b02(0x1793)]['main']['followOffset'],
                            'x': 0x2,
                            'duration': 0x10,
                            'yoyo': !0x0,
                            'repeat': 0x6,
                            'onStart': () => {
                                const _0x1c34d4 = _0x5a0b02;
                                this['scene']['cameras']['main'][_0x1c34d4(0x86c)]['x'] = -0x2;
                            },
                            'onComplete': () => {
                                const _0x246d44 = _0x5a0b02;
                                this['scene']['cameras'][_0x246d44(0x4cd)]['setFollowOffset'](0x0, 0x0), _0x53b3b2 && _0x1cba78['default'][_0x246d44(0x1043)][_0x246d44(0x136e)][_0x246d44(0x1564)](_0x299385[_0x246d44(0xd2c)][_0x246d44(0xa98)]);
                            }
                        });
                    }
                }
                _0x2bafa1['default'] = _0x182bba;
            };
