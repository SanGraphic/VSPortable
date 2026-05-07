// Module 0xe4a6
// Args: _0x2fe66e, _0x225d8f, _0x389dad

export default (_0x2fe66e, _0x225d8f, _0x389dad) => {
                'use strict';
                const _0x1cd498 = a0_0x6932;
                var _0x440463 = this && this['__importDefault'] || function(_0x217ae3) {
                    const _0x7da5bb = a0_0x6932;
                    return _0x217ae3 && _0x217ae3['__esModule'] ? _0x217ae3 : {
                        'default': _0x217ae3
                    };
                };
                Object['defineProperty'](_0x225d8f, '__esModule', {
                    'value': !0x0
                }), _0x225d8f['B_Vampirica'] = void 0x0;
                const _0xd858bc = _0x440463(_0x389dad(0xa14d)),
                    _0x531241 = _0x440463(_0x389dad(0x5f07)),
                    _0x4f708d = _0x440463(_0x389dad(0x1fd7)),
                    _0x109339 = _0x440463(_0x389dad(0x5103)),
                    _0x515f5f = _0x389dad(0x18304);
                class _0x5b2f7c extends _0xd858bc['default'] {
                    constructor(_0x32a32a, _0x37713f, _0x484768, _0x196385, _0x37d9b2) {
                        const _0x44ac77 = _0x1cd498;
                        super(_0x32a32a, _0x37713f, _0x484768, 'vfx', 'slash.png', _0x196385, _0x37d9b2), this[_0x44ac77(0x140c)] = 0x0, this['ghost1'] = this['scene']['add']['sprite'](_0x37713f, _0x484768, 'vfx', 'slash.png')[_0x44ac77(0x8a2)](0x0), this[_0x44ac77(0xc84)] = this[_0x44ac77(0x6d2)][_0x44ac77(0x18bd)][_0x44ac77(0x105b)](_0x37713f, _0x484768, 'vfx', 'slash.png')[_0x44ac77(0x8a2)](0x0)[_0x44ac77(0x11c7)](_0x515f5f['BlendModes']['ADD']), this[_0x44ac77(0xb34)](0x110011), this[_0x44ac77(0xc84)][_0x44ac77(0xb34)](0x660066), this[_0x44ac77(0xe39)]['setTint'](0xff0000);
                    } ['Init'](_0x2dd0e4 = -0x3e8, _0x27dab0 = -0x3e8) {
                        const _0x1590f5 = _0x1cd498;
                        super[_0x1590f5(0x658)](_0x2dd0e4, _0x27dab0), this[_0x1590f5(0x8a2)](0x0), this['previousArea'] = this['weapon'][_0x1590f5(0x5f5)], this[_0x1590f5(0x99a)] = this[_0x1590f5(0x6d2)][_0x1590f5(0x12a1)][_0x1590f5(0x18bd)]({
                            'targets': [this, this[_0x1590f5(0xe39)], this[_0x1590f5(0xc84)]],
                            'scale': _0x109339[_0x1590f5(0xd2c)]['PixelScale'] * this['weapon'][_0x1590f5(0x5f5)],
                            'duration': 0x64,
                            'ease': 'Linear'
                        });
                    } ['OnRecycle']() {
                        const _0xc8c787 = _0x1cd498;
                        var _0x2deaca;
                        super['OnRecycle'](), this[_0xc8c787(0xe71)] = 0x1, this[_0xc8c787(0xe39)][_0xc8c787(0xdab)](0x1), this['ghost2'][_0xc8c787(0xdab)](0x1), this[_0xc8c787(0x99a)] && (this[_0xc8c787(0x140c)] != this['weapon'][_0xc8c787(0x5f5)] && (this[_0xc8c787(0x99a)]['stop'](), this['scene']['tweens']['remove'](this['tween']), this['setScale'](0x0), this['tween'] = this[_0xc8c787(0x6d2)]['tweens'][_0xc8c787(0x18bd)]({
                            'targets': [this, this['ghost1'], this[_0xc8c787(0xc84)]],
                            'scale': _0x109339[_0xc8c787(0xd2c)][_0xc8c787(0x15db)] * this[_0xc8c787(0x4a1)]['PArea'],
                            'duration': 0x64,
                            'ease': 'Linear'
                        })), this[_0xc8c787(0x99a)][_0xc8c787(0x1374)]()), null === (_0x2deaca = this[_0xc8c787(0x15fa)]) || void 0x0 === _0x2deaca || _0x2deaca[_0xc8c787(0x1a34)](), this[_0xc8c787(0x15fa)] = this['scene'][_0xc8c787(0x12a1)]['add']({
                            'targets': [this, this['ghost1'], this[_0xc8c787(0xc84)]],
                            'alpha': 0x0,
                            'duration': 0xc8,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                        const _0x2ced2a = _0x531241[_0xc8c787(0xd2c)][_0xc8c787(0x1043)][_0xc8c787(0x10f6)][_0xc8c787(0x4d4)] ? this['indexInWeapon'] % 0x2 != 0x1 : this[_0xc8c787(0x19c4)] % 0x2 == 0x1;
                        this['x'] += _0x2ced2a ? -0x40 : 0x40, this['y'] -= 0x10, this['y'] -= 0x10 * this['indexInWeapon'];
                        let _0x11bf61 = this[_0xc8c787(0x19c4)] % 0x2 == 0x1;
                        this['setFlipY'](_0x11bf61), this['ghost1']['setFlipY'](_0x11bf61), this['ghost2'][_0xc8c787(0x293)](_0x11bf61), this[_0xc8c787(0xb8d)](_0x2ced2a), this[_0xc8c787(0xe39)][_0xc8c787(0xb8d)](_0x2ced2a), this[_0xc8c787(0xc84)]['setFlipX'](_0x2ced2a), this[_0xc8c787(0xe39)][_0xc8c787(0xff8)](this['x'] + 0x4), this['ghost2']['setX'](this['x'] - 0x4), this[_0xc8c787(0xe39)]['setY'](this['y'] + 0x2), this[_0xc8c787(0xc84)][_0xc8c787(0x108a)](this['y'] - 0x2), _0x531241[_0xc8c787(0xd2c)][_0xc8c787(0x1267)]['PlaySound'](_0x4f708d[_0xc8c787(0xd2c)][_0xc8c787(0x1a2c)], {
                            'detune': -0x64 * this[_0xc8c787(0x19c4)],
                            'volume': 1.7,
                            'rate': 0x2
                        });
                    }
                }
                _0x225d8f['B_Vampirica'] = _0x5b2f7c, _0x225d8f['default'] = _0x5b2f7c;
            };
