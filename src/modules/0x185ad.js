// Module 0x185ad
// Args: _0x5cad40, _0x46227e, _0x19836a

export default (_0x5cad40, _0x46227e, _0x19836a) => {
                'use strict';
                const _0x289a92 = a0_0x6932;
                var _0x568ccb = this && this['__importDefault'] || function(_0x53f48a) {
                    return _0x53f48a && _0x53f48a['__esModule'] ? _0x53f48a : {
                        'default': _0x53f48a
                    };
                };
                Object['defineProperty'](_0x46227e, '__esModule', {
                    'value': !0x0
                }), _0x46227e['W_Jubilee'] = void 0x0;
                const _0x1feab4 = _0x568ccb(_0x19836a(0x5f07)),
                    _0x2fdb20 = _0x568ccb(_0x19836a(0x54e3)),
                    _0x4ecf3b = _0x568ccb(_0x19836a(0xe49a)),
                    _0x326da7 = _0x568ccb(_0x19836a(0x1fd7)),
                    _0x125540 = _0x19836a(0x18304);
                class _0x23ac0c extends _0x4ecf3b['default'] {
                    constructor(_0x59a2a7) {
                        const _0x42dc9a = _0x289a92;
                        super(_0x59a2a7), this['jingleIndex'] = 0x0, this[_0x42dc9a(0x1834)] = [_0x326da7[_0x42dc9a(0xd2c)]['Piano'], _0x326da7['default'][_0x42dc9a(0x96a)], _0x326da7['default'][_0x42dc9a(0x16d0)], _0x326da7[_0x42dc9a(0xd2c)]['CFF4'], _0x326da7[_0x42dc9a(0xd2c)]['CFFX']], this[_0x42dc9a(0xdfc)] = _0x2fdb20['default'][_0x42dc9a(0xc08)], this['rays'] = [], this[_0x42dc9a(0x8cf)] = [], this['RaysLevel'] = 0x9, this[_0x42dc9a(0x1653)] = [_0x326da7[_0x42dc9a(0xd2c)][_0x42dc9a(0x148a)], _0x326da7[_0x42dc9a(0xd2c)][_0x42dc9a(0x26f)], _0x326da7[_0x42dc9a(0xd2c)][_0x42dc9a(0x6b6)], _0x326da7['default']['STEP4']], this['makeRaysOnUpdate'] = !0x1, this['canPlaySounds'] = !0x0, this[_0x42dc9a(0x178b)] = 0x0, this['makeRaysOnUpdate'] = !0x1, this[_0x42dc9a(0x193d)] = !0x0, this[_0x42dc9a(0x178b)] = 0x0, this['MakeFireworks']();
                    } ['MakeFireworks']() {
                        const _0x1c99dc = _0x289a92;
                        var _0xcedfd5 = _0x1feab4[_0x1c99dc(0xd2c)]['Core']['scene']['add'][_0x1c99dc(0x1791)]('vfx');
                        this[_0x1c99dc(0x960)] = [];
                        for (let _0x27a1d6 = 0x0; _0x27a1d6 < 0x5; _0x27a1d6++) this['fwEmitters']['push'](_0xcedfd5[_0x1c99dc(0x14c0)]({
                            'frame': ['PfxYellow.png', 'PfxPink.png', 'PfxRed.png', 'PfxGreen.png', 'PfxBlue.png'][_0x27a1d6 % 0x5],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x5dc,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x40,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x40,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }));
                        this[_0x1c99dc(0xc05)] = _0xcedfd5[_0x1c99dc(0x1386)]({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0.5,
                            'epsilon': 0x19,
                            'gravity': 0x64
                        });
                    } ['MakeRays']() {
                        const _0x3fe434 = _0x289a92;
                        if (this['rays'][_0x3fe434(0xed9)] > 0x0) return;
                        this[_0x3fe434(0xa0a)] = new Array(), this[_0x3fe434(0x8cf)] = new Array();
                        let _0x460ff2 = [],
                            _0x25e016 = _0x1feab4['default'][_0x3fe434(0x1043)]['scene'][_0x3fe434(0x12f9)][_0x3fe434(0x173c)] / 0x7;
                        for (let _0x5609e7 = 0x1; _0x5609e7 <= 0x5; _0x5609e7++) _0x460ff2[_0x3fe434(0x1564)](_0x25e016 * _0x5609e7);
                        _0x25e016 = _0x1feab4['default']['Core']['scene']['renderer'][_0x3fe434(0x173c)] / 0x5;
                        for (let _0x39fff0 = 0x1; _0x39fff0 <= 0x3; _0x39fff0++) _0x460ff2[_0x3fe434(0x1564)](_0x25e016 * _0x39fff0);
                        _0x25e016 = _0x1feab4['default'][_0x3fe434(0x1043)]['scene'][_0x3fe434(0x12f9)][_0x3fe434(0x173c)] / 0x4;
                        for (let _0x291ba2 = 0x1; _0x291ba2 <= 0x4; _0x291ba2++) _0x460ff2['push'](_0x25e016 * _0x291ba2);
                        for (let _0x2e5de8 = 0x0; _0x2e5de8 < 0xc; _0x2e5de8++) {
                            let _0x4739e9 = _0x1feab4[_0x3fe434(0xd2c)][_0x3fe434(0x1043)][_0x3fe434(0x6d2)][_0x3fe434(0x18bd)][_0x3fe434(0x105b)](_0x460ff2[_0x2e5de8 % _0x460ff2[_0x3fe434(0xed9)]], _0x1feab4['default'][_0x3fe434(0x1043)][_0x3fe434(0x6d2)][_0x3fe434(0x12f9)]['height'] + 0x50, 'vfx', 'rays.png')['setBlendMode'](_0x125540['BlendModes']['ADD'])[_0x3fe434(0x8a2)](0x0)[_0x3fe434(0xf8e)](0x0, 0x1)[_0x3fe434(0x9b5)](-0x5a)[_0x3fe434(0xb4a)](_0x1feab4['default'][_0x3fe434(0x1043)]['scene']['renderer'][_0x3fe434(0x140e)])[_0x3fe434(0xd87)](0x0);
                            this[_0x3fe434(0xa0a)][_0x3fe434(0x1564)](_0x4739e9);
                            let _0x351a80 = _0x1feab4[_0x3fe434(0xd2c)]['Core']['scene'][_0x3fe434(0x18bd)]['tween']({
                                'targets': _0x4739e9,
                                'scaleX': _0x2e5de8 % 0x2 == 0x0 ? 2.5 : -2.5,
                                'scaleY': 2.5,
                                'duration': 0x1f4
                            });
                            this['raysTween'][_0x3fe434(0x1564)](_0x351a80), _0x351a80 = _0x1feab4[_0x3fe434(0xd2c)]['Core']['scene'][_0x3fe434(0x18bd)][_0x3fe434(0x99a)]({
                                'targets': _0x4739e9,
                                'alpha': 0.25,
                                'yoyo': !0x0,
                                'repeat': -0x1,
                                'duration': 0x1f4 + 0x4b * _0x2e5de8,
                                'ease': 'Sine.easeInOut'
                            }), this[_0x3fe434(0x8cf)]['push'](_0x351a80), _0x351a80 = _0x1feab4[_0x3fe434(0xd2c)][_0x3fe434(0x1043)]['scene'][_0x3fe434(0x18bd)]['tween']({
                                'targets': _0x4739e9,
                                'angle': 0x2d,
                                'yoyo': !0x0,
                                'repeat': -0x1,
                                'duration': 0xbb8 + 0x96 * _0x2e5de8,
                                'ease': 'Sine.easeInOut'
                            }), this['raysTween'][_0x3fe434(0x1564)](_0x351a80);
                        }
                        Phaser[_0x3fe434(0x24f)][_0x3fe434(0x82a)][_0x3fe434(0xeec)](this['rays']), this['rays'][0x0][_0x3fe434(0xb34)](0xff0000), this['rays'][0x1]['setTint'](0xff00), this['rays'][0x2][_0x3fe434(0xb34)](0xff), this['rays'][0x3]['setTint'](0xffff00), this['rays'][0x4][_0x3fe434(0xb34)](0xff00ff), this['rays'][0x5][_0x3fe434(0xb34)](0xffff), this['rays'][0x6][_0x3fe434(0xb34)](0xff0000), this['rays'][0x7][_0x3fe434(0xb34)](0xff00), this[_0x3fe434(0xa0a)][0x8][_0x3fe434(0xb34)](0xff), this[_0x3fe434(0xa0a)][0x9]['setTint'](0xffff00), this[_0x3fe434(0xa0a)][0xa]['setTint'](0xff00ff), this['rays'][0xb][_0x3fe434(0xb34)](0xffff);
                    } ['GetFwEmitters'](_0x5f00ab) {
                        return this['fwEmitters'][_0x5f00ab % this['fwEmitters']['length']];
                    } ['Fire']() {
                        const _0x26b779 = _0x289a92;
                        if (super['Fire'](), this['level'] >= this[_0x26b779(0x11f4)] && (this[_0x26b779(0x155a)](_0x1feab4['default']['Core']['Player']['x'], 0x48, 0x0), this['SpawnExplosionAt'](_0x1feab4[_0x26b779(0xd2c)][_0x26b779(0x1043)][_0x26b779(0x10f6)]['x'], 0x78, 0x1), this['SpawnExplosionAt'](_0x1feab4[_0x26b779(0xd2c)][_0x26b779(0x1043)][_0x26b779(0x10f6)]['x'], 0xa8, 0x2)), Math['random']() < this[_0x26b779(0xd71)] * _0x1feab4[_0x26b779(0xd2c)]['Core'][_0x26b779(0x10f6)]['PLuck'] && _0x1feab4['default']['Core'][_0x26b779(0x10f3)](0.25 * _0x1feab4['default']['Core'][_0x26b779(0x10f6)]['PLuck']), this[_0x26b779(0x193d)]) {
                            this[_0x26b779(0x193d)] = !0x1;
                            let _0x56ce80 = 0x0,
                                _0x2551fc = this['soundArray'][this[_0x26b779(0x178b)] % 0x4];
                            _0x1feab4[_0x26b779(0xd2c)][_0x26b779(0x1267)][_0x26b779(0x7f6)](_0x2551fc, {
                                'detune': 0xc8 * _0x56ce80,
                                'volume': 0.3,
                                'rate': 0x1
                            }, 0x32, 0x5), this[_0x26b779(0x942)] > 0x1 ? this['soundTimer'] = _0x1feab4[_0x26b779(0xd2c)][_0x26b779(0x1043)]['scene'][_0x26b779(0x915)]['addEvent']({
                                'delay': this[_0x26b779(0x7ea)],
                                'repeat': this[_0x26b779(0x942)] - 0x1,
                                'callback': () => {
                                    const _0x594be0 = _0x26b779;
                                    _0x56ce80++, _0x1feab4[_0x594be0(0xd2c)][_0x594be0(0x1267)][_0x594be0(0x7f6)](_0x2551fc, {
                                        'detune': 0xc8 * _0x56ce80,
                                        'volume': 0.3,
                                        'rate': 0x1
                                    }, 0x32, 0x5), 0x0 == this[_0x594be0(0x1af0)][_0x594be0(0x11cf)] && (this['canPlaySounds'] = !0x0);
                                }
                            }) : this['canPlaySounds'] = !0x0, this['soundIndex']++;
                        }
                    } ['Update'](_0x5a75a3) {
                        const _0x29b701 = _0x289a92;
                        super['Update'](_0x5a75a3), this[_0x29b701(0xc05)]['x'] = _0x1feab4[_0x29b701(0xd2c)]['Core'][_0x29b701(0x10f6)]['x'], this[_0x29b701(0xc05)]['y'] = _0x1feab4['default'][_0x29b701(0x1043)][_0x29b701(0x10f6)]['y'], this[_0x29b701(0x12e5)] && (this[_0x29b701(0x12e5)] = !0x1, this['MakeRays']());
                    } ['LevelUp']() {
                        const _0x5be5ee = _0x289a92;
                        let _0x33c677 = super[_0x5be5ee(0x2ab)]();
                        return this[_0x5be5ee(0x5e3)] >= this['RaysLevel'] && (this['makeRaysOnUpdate'] = !0x0), _0x33c677;
                    } ['onSecondaryBulletOverlapsEnemy'](_0x453aa2, _0x5042fc) {
                        const _0x5c58e5 = _0x289a92;
                        var _0x34f105 = _0x5042fc;
                        if (_0x34f105[_0x5c58e5(0xdae)]) return;
                        let _0x52f74d = this[_0x5c58e5(0x433)][this[_0x5c58e5(0x11c9)] % this[_0x5c58e5(0x433)]['length']];
                        this['critIndex']++;
                        let _0x19ae67 = _0x1feab4['default']['Core']['Player'][_0x5c58e5(0x17b9)],
                            _0x1ff0df = _0x52f74d < this['critChance'] * _0x19ae67 ? this[_0x5c58e5(0x891)] * _0x1feab4['default'][_0x5c58e5(0x1043)][_0x5c58e5(0x1884)][_0x5c58e5(0x1a5f)] * _0x19ae67 : 0x1;
                        if (!_0x453aa2['HasAlreadyHitObject'](_0x34f105)) {
                            let _0x59be31 = this['SecondaryPPower'] * _0x1ff0df;
                            _0x34f105[_0x5c58e5(0x1112)](_0x59be31, this[_0x5c58e5(0x347)], this[_0x5c58e5(0x1992)], this['bulletType']), this[_0x5c58e5(0xb3d)] += _0x59be31;
                        }
                    }
                }
                _0x46227e['W_Jubilee'] = _0x23ac0c, _0x46227e['default'] = _0x23ac0c;
            };
