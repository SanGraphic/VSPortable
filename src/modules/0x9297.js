// Module 0x9297
// Args: _0x59dcb6, _0x4a7402, _0x3273c1

export default (_0x59dcb6, _0x4a7402, _0x3273c1) => {
                'use strict';
                const _0x582a65 = a0_0x6932;
                var _0x384765 = this && this['__importDefault'] || function(_0x44ba98) {
                    const _0x4836bc = a0_0x6932;
                    return _0x44ba98 && _0x44ba98['__esModule'] ? _0x44ba98 : {
                        'default': _0x44ba98
                    };
                };
                Object['defineProperty'](_0x4a7402, '__esModule', {
                    'value': !0x0
                });
                const _0x534696 = _0x384765(_0x3273c1(0x5f07)),
                    _0x9572f7 = _0x384765(_0x3273c1(0x13fb9)),
                    _0xdb76e5 = _0x384765(_0x3273c1(0x14442)),
                    _0x30d76a = _0x384765(_0x3273c1(0xbca)),
                    _0x3b6631 = _0x384765(_0x3273c1(0x85ba)),
                    _0x2c9489 = _0x384765(_0x3273c1(0x28be)),
                    _0x56fade = _0x384765(_0x3273c1(0x169f6)),
                    _0xab6be5 = _0x384765(_0x3273c1(0xdcc));
                class _0x5494f9 extends Phaser['GameObjects']['Group'] {
                    constructor(_0x5b71a9, _0x3f814b) {
                        const _0x3606df = _0x582a65;
                        super(_0x5b71a9), this[_0x3606df(0x1924)] = new Array(), this[_0x3606df(0x13f4)] = new Array(), this[_0x3606df(0x495)] = _0x3f814b, this[_0x3606df(0x658)]();
                    } ['Init']() {
                        const _0x1208b1 = _0x582a65;
                        this[_0x1208b1(0x6d2)]['add'][_0x1208b1(0x1a88)](this);
                    } ['SpawnAt'](_0x581fed, _0x1117d4, _0x57706c) {
                        const _0x29df05 = this['Spawn'](_0x57706c);
                        return _0x29df05['x'] = _0x581fed, _0x29df05['y'] = _0x1117d4, _0x29df05['OnRecycle'](), _0x29df05;
                    } ['Spawn'](_0x5a648f) {
                        const _0x534b0a = _0x582a65;
                        let _0x42d2ea = this[_0x534b0a(0x1924)][_0x534b0a(0xcfe)]();
                        return _0x42d2ea || (_0x42d2ea = this['Make'](_0x5a648f), _0x42d2ea['Init']()), this[_0x534b0a(0x18bd)](_0x42d2ea, !0x0), this['spawned']['push'](_0x42d2ea), _0x534696[_0x534b0a(0xd2c)][_0x534b0a(0x1043)][_0x534b0a(0xa08)]['push'](_0x42d2ea), _0x42d2ea;
                    } ['Return'](_0x4c60de) {
                        const _0x470385 = _0x582a65;
                        this[_0x470385(0x393)](_0x4c60de, !0x0, !0x1), this[_0x470385(0x13f4)][_0x470385(0x16ea)](this[_0x470385(0x13f4)][_0x470385(0x1303)](_0x4c60de), 0x1), _0x534696[_0x470385(0xd2c)]['Core'][_0x470385(0xa08)][_0x470385(0x16ea)](_0x534696[_0x470385(0xd2c)]['Core'][_0x470385(0xa08)][_0x470385(0x1303)](_0x4c60de), 0x1), this[_0x470385(0x1924)]['push'](_0x4c60de);
                    } ['Make'](_0x50a41c) {
                        const _0x47d029 = _0x582a65;
                        switch (_0x50a41c) {
                            default:
                                return new _0x9572f7[(_0x47d029(0xd2c))](this, 0x0, 0x0, _0x50a41c);
                            case _0xdb76e5[_0x47d029(0xd2c)]['CART']:
                                return new _0x30d76a['default'](this, 0x0, 0x0, _0x50a41c);
                            case _0xdb76e5['default']['WINDOW']:
                                return new _0x3b6631['default'](this, 0x0, 0x0, _0x50a41c);
                            case _0xdb76e5[_0x47d029(0xd2c)][_0x47d029(0x1337)]:
                                return new _0x2c9489['default'](this, 0x0, 0x0, _0x50a41c);
                            case _0xdb76e5[_0x47d029(0xd2c)][_0x47d029(0x1a64)]:
                                return new _0x56fade['default'](this, 0x0, 0x0, _0x50a41c);
                            case _0xdb76e5[_0x47d029(0xd2c)][_0x47d029(0x1a19)]:
                                return new _0xab6be5['default'](this, 0x0, 0x0, _0x50a41c);
                        }
                    }
                }
                _0x4a7402['default'] = _0x5494f9;
            };
