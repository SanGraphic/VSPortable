// Module 0x7419
// Args: _0x411544, _0x123757, _0x54548a

export default (_0x411544, _0x123757, _0x54548a) => {
                'use strict';
                const _0x323548 = a0_0x6932;
                var _0x4ff0dc = this && this['__importDefault'] || function(_0x2d1ece) {
                    const _0x3c7d55 = _0x323548;
                    return _0x2d1ece && _0x2d1ece[_0x3c7d55(0x16f1)] ? _0x2d1ece : {
                        'default': _0x2d1ece
                    };
                };
                Object['defineProperty'](_0x123757, '__esModule', {
                    'value': !0x0
                }), _0x123757['WhiteHandManager'] = void 0x0;
                const _0x3946c1 = _0x4ff0dc(_0x54548a(0x1fd7)),
                    _0x5cb986 = _0x4ff0dc(_0x54548a(0x5f07));
                class _0x48b6c2 {
                    constructor(_0xbed2aa) {
                        const _0x2ebe9b = _0x323548;
                        this['triggered'] = !0x1, this[_0x2ebe9b(0x773)] = 0x1, this[_0x2ebe9b(0x6d2)] = _0xbed2aa, this[_0x2ebe9b(0x1b2)] = !0x1, this[_0x2ebe9b(0x773)] = 0x1;
                    } ['SummonWhiteHand']() {
                        const _0x13c98d = _0x323548;
                        this['triggered'] || (this['triggered'] = !0x0, _0x5cb986[_0x13c98d(0xd2c)][_0x13c98d(0x1267)][_0x13c98d(0x1099)](_0x5cb986[_0x13c98d(0xd2c)][_0x13c98d(0x1043)]['CurrentBGM'], 0x0, 0x3e8), _0x5cb986[_0x13c98d(0xd2c)]['Sound'][_0x13c98d(0x7f6)](_0x3946c1['default'][_0x13c98d(0x9f2)], {
                            'volume': 0.9,
                            'rate': 1.5
                        }), this[_0x13c98d(0x1802)] = this[_0x13c98d(0x6d2)][_0x13c98d(0x12a1)]['add']({
                            'targets': this,
                            'bellTime': 0x0,
                            'repeat': 0xb,
                            'repeatDelay': 0x3e8,
                            'duration': 0x3e8,
                            'onRepeat': _0x3f36be => {
                                const _0x21d970 = _0x13c98d;
                                _0x5cb986['default'][_0x21d970(0x1267)]['PlaySound'](_0x3946c1[_0x21d970(0xd2c)][_0x21d970(0x9f2)], {
                                    'volume': 0.9,
                                    'rate': 1.5
                                }), this[_0x21d970(0x249)](), _0x5cb986[_0x21d970(0xd2c)]['Sound']['StopMusic'](_0x5cb986[_0x21d970(0xd2c)][_0x21d970(0x1043)][_0x21d970(0x1239)]);
                            },
                            'onComplete': () => {
                                const _0x3396c6 = _0x13c98d;
                                this[_0x3396c6(0x18f0)]();
                            }
                        }));
                    } ['ZoomOnPlayer']() {
                        const _0x234667 = _0x323548;
                        this['scene']['tweens'][_0x234667(0x18bd)]({
                            'targets': this[_0x234667(0x6d2)]['cameras'][_0x234667(0x4cd)],
                            'zoom': this[_0x234667(0x6d2)][_0x234667(0x1793)][_0x234667(0x4cd)][_0x234667(0x1933)] + 0.06,
                            'duration': 0x384,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['SpawnWhiteHand']() {
                        const _0x16340d = _0x323548;
                        let _0x19d8af = this[_0x16340d(0x6d2)][_0x16340d(0x18bd)][_0x16340d(0x105b)](-0x20, 0.5 * this[_0x16340d(0x6d2)][_0x16340d(0x12f9)][_0x16340d(0x140e)], 'enemies3', 'WhiteHand_i01.png');
                        const _0x539311 = _0x19d8af[_0x16340d(0x183e)]['generateFrameNames']('enemies3', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x0,
                            'prefix': 'WhiteHand_i0',
                            'suffix': '.png'
                        });
                        _0x19d8af['anims']['create']({
                            'key': 'idle',
                            'frames': _0x539311,
                            'frameRate': 0x3c,
                            'repeat': -0x1
                        }), _0x19d8af['anims']['play']('idle'), _0x19d8af['setOrigin'](0.5, 0x1), _0x19d8af['flipX'] = !0x0, _0x19d8af['setScrollFactor'](0x0), _0x19d8af['setDepth'](0x2710), this[_0x16340d(0x6d2)]['tweens'][_0x16340d(0x18bd)]({
                            'targets': _0x19d8af,
                            'x': 0.5 * this['scene'][_0x16340d(0x12f9)]['width'],
                            'duration': 0x2710,
                            'onComplete': () => {
                                const _0x378692 = _0x16340d;
                                this[_0x378692(0x1b2)] = !0x0;
                            }
                        });
                    } ['Update'](_0xa377cb) {
                        const _0x87b768 = _0x323548;
                        this['kill'] && !_0x5cb986[_0x87b768(0xd2c)][_0x87b768(0x1043)][_0x87b768(0x10f6)]['isDead'] && (_0x5cb986['default'][_0x87b768(0x1043)][_0x87b768(0x10f6)]['hp'] = 0x0, _0x5cb986['default']['Core'][_0x87b768(0x10f6)][_0x87b768(0x14f3)](), _0x5cb986[_0x87b768(0xd2c)][_0x87b768(0x1043)][_0x87b768(0x92a)]());
                    }
                }
                _0x123757['WhiteHandManager'] = _0x48b6c2, _0x123757['default'] = _0x48b6c2;
            };
