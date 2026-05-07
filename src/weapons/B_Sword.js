// Module 0x107b3
// Args: _0x8e2064, _0x39fc36, _0x3e1d67

export default (_0x8e2064, _0x39fc36, _0x3e1d67) => {
                'use strict';
                const _0x4fb9ce = a0_0x6932;
                var _0x127b6e = this && this['__importDefault'] || function(_0x9eed94) {
                    const _0x494168 = _0x4fb9ce;
                    return _0x9eed94 && _0x9eed94[_0x494168(0x16f1)] ? _0x9eed94 : {
                        'default': _0x9eed94
                    };
                };
                Object['defineProperty'](_0x39fc36, '__esModule', {
                    'value': !0x0
                }), _0x39fc36['B_Sword'] = void 0x0;
                const _0x3a4e12 = _0x127b6e(_0x3e1d67(0xa14d)),
                    _0x40267f = _0x127b6e(_0x3e1d67(0x5f07)),
                    _0x48fbb8 = _0x127b6e(_0x3e1d67(0x1fd7)),
                    _0x1e5840 = _0x127b6e(_0x3e1d67(0x5103));
                class _0x1d69cf extends _0x3a4e12['default'] {
                    constructor(_0x5404a0, _0x1d887b, _0x304a04, _0x570b68, _0x40ba66) {
                        const _0x51c81b = _0x4fb9ce;
                        super(_0x5404a0, _0x1d887b, _0x304a04, 'vfx', 'slash_sword.png', _0x570b68, _0x40ba66), this['previousArea'] = 0x0, this[_0x51c81b(0x844)] = 0x0;
                    } ['SetDetune'](_0x5cdb37 = 0x0) {
                        this['detuneMul'] = _0x5cdb37;
                    } ['Init'](_0x173f4f = -0x3e8, _0x44e112 = -0x3e8) {
                        const _0x1d8ce7 = _0x4fb9ce;
                        super[_0x1d8ce7(0x658)](_0x173f4f, _0x44e112), this['setScale'](0x0), this[_0x1d8ce7(0x140c)] = this[_0x1d8ce7(0x4a1)][_0x1d8ce7(0x5f5)], this[_0x1d8ce7(0x99a)] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': _0x1e5840[_0x1d8ce7(0xd2c)]['PixelScale'] * this[_0x1d8ce7(0x4a1)]['PArea'],
                            'duration': 0x64,
                            'ease': 'Linear'
                        });
                    } ['OnRecycle']() {
                        const _0x4921a0 = _0x4fb9ce;
                        var _0x32c7b1;
                        super[_0x4921a0(0x5ce)](), this['alpha'] = 0x1, this[_0x4921a0(0x99a)] && (this[_0x4921a0(0x140c)] != this[_0x4921a0(0x4a1)]['PArea'] && (this['tween'][_0x4921a0(0x1a34)](), this[_0x4921a0(0x6d2)][_0x4921a0(0x12a1)]['remove'](this['tween']), this['setScale'](0x0), this['tween'] = this[_0x4921a0(0x6d2)][_0x4921a0(0x12a1)]['add']({
                            'targets': this,
                            'scale': _0x1e5840['default'][_0x4921a0(0x15db)] * this[_0x4921a0(0x4a1)][_0x4921a0(0x5f5)],
                            'duration': 0x64,
                            'ease': 'Linear'
                        })), this['tween'][_0x4921a0(0x1374)]()), null === (_0x32c7b1 = this['tween2']) || void 0x0 === _0x32c7b1 || _0x32c7b1['stop'](), this[_0x4921a0(0x15fa)] = this[_0x4921a0(0x6d2)][_0x4921a0(0x12a1)][_0x4921a0(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                const _0x128a23 = _0x4921a0;
                                this[_0x128a23(0x14fb)]();
                            }
                        });
                        const _0x14af71 = _0x40267f[_0x4921a0(0xd2c)][_0x4921a0(0x1043)]['Player'][_0x4921a0(0x4d4)] ? this['indexInWeapon'] % 0x2 != 0x1 : this['indexInWeapon'] % 0x2 == 0x1;
                        this['x'] += _0x14af71 ? -0x40 : 0x40, this['y'] -= 0x10, this[_0x4921a0(0x293)](this[_0x4921a0(0x19c4)] % 0x2 == 0x1), this['setFlipX'](_0x14af71), _0x40267f[_0x4921a0(0xd2c)]['Sound'][_0x4921a0(0x7f6)](_0x48fbb8['default'][_0x4921a0(0x16b9)], {
                            'detune': -0x64 * this[_0x4921a0(0x19c4)] + 0x190 * this[_0x4921a0(0x844)],
                            'volume': 0x1,
                            'rate': 0x1
                        });
                    }
                }
                _0x39fc36['B_Sword'] = _0x1d69cf, _0x39fc36['default'] = _0x1d69cf;
            };
