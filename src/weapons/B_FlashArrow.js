// Module 0xb048
// Args: _0x29bfb3, _0x5234aa, _0x4a117f

export default (_0x29bfb3, _0x5234aa, _0x4a117f) => {
                'use strict';
                const _0x42143e = a0_0x6932;
                var _0x2f0974 = this && this['__importDefault'] || function(_0x371b25) {
                    const _0x162fe1 = _0x42143e;
                    return _0x371b25 && _0x371b25[_0x162fe1(0x16f1)] ? _0x371b25 : {
                        'default': _0x371b25
                    };
                };
                Object['defineProperty'](_0x5234aa, '__esModule', {
                    'value': !0x0
                }), _0x5234aa['B_FlashArrow'] = void 0x0;
                const _0x4150b2 = _0x2f0974(_0x4a117f(0xa14d)),
                    _0x4a9c62 = _0x2f0974(_0x4a117f(0x5f07)),
                    _0x2f81b7 = _0x2f0974(_0x4a117f(0x1fd7)),
                    _0x491df5 = _0x2f0974(_0x4a117f(0x5103)),
                    _0x296dc3 = _0x4a117f(0x18304);
                class _0x2477dc extends _0x4150b2['default'] {
                    constructor(_0x404f3b, _0xa494e1, _0x24dcbe, _0xb719a0, _0x4260b9) {
                        const _0x5b88d3 = _0x42143e;
                        super(_0x404f3b, _0xa494e1, _0x24dcbe, 'vfx', '2Arrow.png', _0xb719a0, _0x4260b9), this[_0x5b88d3(0xbd8)] = !0x1, this[_0x5b88d3(0x8a2)](_0x491df5[_0x5b88d3(0xd2c)][_0x5b88d3(0x15db)] * this['weapon']['PArea']), this['setAngle'](-0x5a), this[_0x5b88d3(0x125b)] = this['scene'][_0x5b88d3(0x18bd)]['particles']('vfx'), this['PfxEmitter']['createEmitter']({
                            'frame': ['WhiteDot.png'],
                            'angle': 0x0,
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x5b88d3(0x152c)] = this[_0x5b88d3(0x6d2)]['add']['image'](0x0, 0x0, 'vfx', 'disc.png')[_0x5b88d3(0x183f)](!0x1)[_0x5b88d3(0x11c7)](_0x296dc3['BlendModes'][_0x5b88d3(0x1811)]), this[_0x5b88d3(0x1730)] = this[_0x5b88d3(0x6d2)][_0x5b88d3(0x18bd)][_0x5b88d3(0x568)](0x0, 0x0, 'vfx', 'WhiteLineH.png')['setVisible'](!0x1)['setBlendMode'](_0x296dc3[_0x5b88d3(0x10fc)][_0x5b88d3(0x1811)]), this[_0x5b88d3(0x9cd)] = this[_0x5b88d3(0x6d2)]['add']['image'](0x0, 0x0, 'vfx', 'blurredSharpStar.png')[_0x5b88d3(0x183f)](!0x1)['setBlendMode'](_0x296dc3[_0x5b88d3(0x10fc)]['ADD']), this['TrueWeapon'] = this[_0x5b88d3(0x4a1)], this[_0x5b88d3(0x1139)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x130c81 = _0x42143e;
                        super['OnRecycle'](), this[_0x130c81(0xcf9)]['setCircle'](0x8), this['_speed'] = 0x2, this[_0x130c81(0x8a2)](this['weapon'][_0x130c81(0x5f5)]), this['y'] -= 0x16, this[_0x130c81(0x429)](), this['hasHitFirstEnemy'] = !0x1;
                        let _0x5a531b = this[_0x130c81(0x4a1)][_0x130c81(0x1378)] ? this[_0x130c81(0x4a1)][_0x130c81(0x1378)] : 0.4;
                        _0x4a9c62[_0x130c81(0xd2c)][_0x130c81(0x1267)][_0x130c81(0x7f6)](_0x2f81b7[_0x130c81(0xd2c)][_0x130c81(0xfcc)], {
                            'detune': -0x64 * this[_0x130c81(0x19c4)],
                            'volume': _0x5a531b
                        }, 0xc8, 0xa), this[_0x130c81(0x4a1)][_0x130c81(0xb2a)] && !this[_0x130c81(0x1139)] && (this[_0x130c81(0x1139)] = !0x0, this['scene'][_0x130c81(0x1585)]['world']['on']('worldbounds', this['Bounce'], this), this[_0x130c81(0x193c)](!0x0, -0x1, -0x1), this['body'][_0x130c81(0xda7)](_0x4a9c62[_0x130c81(0xd2c)]['Core'][_0x130c81(0x10f6)]['WorldBoxCollider']), this['body']['onWorldBounds'] = !0x0), this['bounceActivated'] && this[_0x130c81(0x193c)](!0x0, -0x1, -0x1);
                    } ['Bounce'](_0x37dc37) {
                        const _0xf7366a = _0x42143e;
                        this[_0xf7366a(0xcf9)] === _0x37dc37 && (this[_0xf7366a(0x1b4)] > 0x0 ? (this['bounces']--, this['body'][_0xf7366a(0xf4e)]['x'] *= -0x1, this[_0xf7366a(0xcf9)][_0xf7366a(0xf4e)]['y'] *= -0x1, this[_0xf7366a(0x990)] = []) : this[_0xf7366a(0x193c)](!0x1, 0x1, 0x1));
                    } ['DeSpawn']() {
                        const _0x47f005 = _0x42143e;
                        super[_0x47f005(0x14fb)]();
                    } ['OnHasHitAnObject'](_0x2b9651) {
                        const _0x346fb2 = _0x42143e;
                        _0x2b9651[_0x346fb2(0xdae)] || this[_0x346fb2(0xbd8)] || (this[_0x346fb2(0xbd8)] = !0x0, _0x4a9c62[_0x346fb2(0xd2c)][_0x346fb2(0x1043)][_0x346fb2(0x14d8)]['FlashingVFXEnabled'] && this['PlayUselessVFX'](), this[_0x346fb2(0x19c8)](0x2 * this[_0x346fb2(0xcf9)][_0x346fb2(0xf4e)]['x'], 0x2 * this['body']['velocity']['y']), this[_0x346fb2(0x131f)][_0x346fb2(0x1392)](this['x'], this['y'], this['angle']));
                    } ['Update']() {
                        const _0x4dcc04 = _0x42143e;
                        this[_0x4dcc04(0x125b)][_0x4dcc04(0x108b)](this['x'], this['y']);
                    } ['PlayUselessVFX']() {
                        const _0x482627 = _0x42143e;
                        this['DiscSprite']['setAngle'](this[_0x482627(0xd96)] + 0x5a), this['DiscSprite'][_0x482627(0x8a2)](0x1)['setAlpha'](0x1)['setVisible'](!0x0)['setPosition'](this['x'], this['y']), this[_0x482627(0x1730)][_0x482627(0x9b5)](this[_0x482627(0xd96)] + 0x5a), this['LineSprite'][_0x482627(0x8a2)](0x1)[_0x482627(0xdab)](0x1)['setVisible'](!0x0)[_0x482627(0x726)](this['x'], this['y']), this['FlashSprite']['setScale'](0x0)['setAlpha'](0x1)['setVisible'](!0x0)[_0x482627(0x726)](this['x'], this['y']), this['LineTween'] = this[_0x482627(0x6d2)][_0x482627(0x12a1)]['add']({
                            'targets': [this['LineSprite'], this[_0x482627(0x152c)]],
                            'alpha': 0x0,
                            'scaleX': 0x5,
                            'duration': 0x64
                        }), this['FlashTween'] = this[_0x482627(0x6d2)]['tweens'][_0x482627(0x18bd)]({
                            'targets': this[_0x482627(0x9cd)],
                            'alpha': 0x0,
                            'angle': 0x2d0,
                            'scale': 0x2,
                            'duration': 0xc8
                        });
                    }
                }
                _0x5234aa['B_FlashArrow'] = _0x2477dc, _0x5234aa['default'] = _0x2477dc;
            };
