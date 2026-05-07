// Module 0xfb3d
// Args: _0x578966, _0x450e0f, _0x49cafe

export default (_0x578966, _0x450e0f, _0x49cafe) => {
                'use strict';
                const _0x254800 = a0_0x6932;
                var _0x4654ea = this && this['__importDefault'] || function(_0x32ff7a) {
                    return _0x32ff7a && _0x32ff7a['__esModule'] ? _0x32ff7a : {
                        'default': _0x32ff7a
                    };
                };
                Object['defineProperty'](_0x450e0f, '__esModule', {
                    'value': !0x0
                }), _0x450e0f['B_Vento2extra'] = void 0x0;
                const _0x7b7e51 = _0x4654ea(_0x49cafe(0xa14d)),
                    _0x298b3c = _0x4654ea(_0x49cafe(0x5f07)),
                    _0x37cade = _0x4654ea(_0x49cafe(0x5103)),
                    _0x39f37a = _0x49cafe(0x18304);
                class _0x44385b extends _0x7b7e51['default'] {
                    constructor(_0x1b7fe6, _0x2e5396, _0x37cfb7, _0x428921, _0x437e9b) {
                        const _0x11a501 = a0_0x6932;
                        super(_0x1b7fe6, _0x2e5396, _0x37cfb7, 'vfx', 'petal5.png', _0x428921, _0x437e9b), this['previousArea'] = 0x0, this['color'] = [0x110011, 0x660066, 0xff0000];
                        const _0x4c0701 = this['anims']['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'petal',
                            'suffix': '.png'
                        });
                        this['anims']['create']({
                            'key': 'strike',
                            'frames': _0x4c0701,
                            'frameRate': 0x1e
                        }), this['setOrigin'](0.5, 0.5), this['setTint'](0x110011), this['ghost1'] = this['scene']['add']['sprite'](_0x2e5396, _0x37cfb7, 'vfx', 'petal5.png')['setOrigin'](0.5, 0.5)['setTint'](0xff0000), this['ghost2'] = this['scene']['add']['sprite'](_0x2e5396, _0x37cfb7, 'vfx', 'petal5.png')['setOrigin'](0.5, 0.5)['setTint'](0x660066)['setBlendMode'](_0x39f37a['BlendModes']['ADD']), this['ghost1']['anims']['create']({
                            'key': 'strike',
                            'frames': _0x4c0701,
                            'frameRate': 0x3c
                        }), this['ghost2']['anims']['create']({
                            'key': 'strike',
                            'frames': _0x4c0701,
                            'frameRate': 0x3c
                        });
                    }
                    get['TrueSpeed']() {
                        const _0x2d8e30 = _0x254800;
                        let _0x521429 = this['weapon']['PSpeed'];
                        return _0x521429 <= 0x1 ? 0x0 : (_0x521429 -= 0x1, _0x521429 * _0x37cade[_0x2d8e30(0xd2c)]['ProjectileSpeed'] * this['_speed']);
                    } ['Init'](_0x191039 = -0x3e8, _0x26e4f6 = -0x3e8) {
                        super['Init'](_0x191039, _0x26e4f6);
                    } ['OnRecycle']() {
                        const _0x44b6a8 = _0x254800;
                        var _0x474c4d, _0x5d6a7d;
                        super['OnRecycle'](), this[_0x44b6a8(0xe71)] = 0.75, this[_0x44b6a8(0x183e)]['play']('strike'), this['body'][_0x44b6a8(0xdf6)](0x18), null === (_0x474c4d = this[_0x44b6a8(0x99a)]) || void 0x0 === _0x474c4d || _0x474c4d['stop'](), this[_0x44b6a8(0x8a2)](0x0), this['tween'] = this[_0x44b6a8(0x6d2)][_0x44b6a8(0x12a1)][_0x44b6a8(0x18bd)]({
                            'targets': this,
                            'scale': 0.7 * this[_0x44b6a8(0x4a1)]['PArea'],
                            'duration': 0xc8,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        }), null === (_0x5d6a7d = this['tween2']) || void 0x0 === _0x5d6a7d || _0x5d6a7d['stop'](), this['tween2'] = this[_0x44b6a8(0x6d2)][_0x44b6a8(0x12a1)][_0x44b6a8(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x190 * this[_0x44b6a8(0x4a1)]['PDuration'],
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), this['flipY'] = this[_0x44b6a8(0x19c4)] % 0x2 == (this['flipX'] ? 0x0 : 0x1);
                        let _0x3194b9 = 0x168 / this['weapon']['PAmount'] * this['indexInWeapon'];
                        var _0x4f0308 = Phaser[_0x44b6a8(0x24f)]['DegToRad'](_0x3194b9);
                        this[_0x44b6a8(0x6d2)][_0x44b6a8(0x1585)]['velocityFromRotation'](_0x4f0308, this['TrueSpeed'], this[_0x44b6a8(0xcf9)][_0x44b6a8(0xf4e)]), this[_0x44b6a8(0x9b5)](_0x3194b9), this['x'] = _0x298b3c['default'][_0x44b6a8(0x1043)]['Player']['x'], this['y'] = _0x298b3c['default'][_0x44b6a8(0x1043)][_0x44b6a8(0x10f6)]['y'], this[_0x44b6a8(0xe39)][_0x44b6a8(0xf8e)](this[_0x44b6a8(0x612)], 0.5), this['ghost2'][_0x44b6a8(0xf8e)](this['originX'], 0.5), this[_0x44b6a8(0xe39)]['angle'] = this[_0x44b6a8(0xc84)][_0x44b6a8(0xd96)] = this['angle'], this['ghost1'][_0x44b6a8(0x4d4)] = this[_0x44b6a8(0xc84)]['flipX'] = this[_0x44b6a8(0x4d4)], this['ghost1'][_0x44b6a8(0x9c0)] = this['ghost2'][_0x44b6a8(0x9c0)] = this[_0x44b6a8(0x9c0)];
                    } ['SetTarget'](_0x3446f4) {
                        super['SetTarget'](_0x3446f4);
                    } ['Update'](_0x337ffe) {
                        const _0x18f421 = _0x254800;
                        this['setDepth'](-0x1), this['ghost1'][_0x18f421(0xb4a)](-0x1), this['ghost2'][_0x18f421(0xb4a)](-0x1), this['ghost1'][_0x18f421(0x8a2)](this[_0x18f421(0x7cb)]), this[_0x18f421(0xc84)]['setScale'](this[_0x18f421(0x7cb)]), this[_0x18f421(0xe39)][_0x18f421(0xff8)](this['x'] + 0x4), this[_0x18f421(0xc84)][_0x18f421(0xff8)](this['x'] - 0x4), this['ghost1'][_0x18f421(0x108a)](this['y'] + 0x2), this['ghost2'][_0x18f421(0x108a)](this['y'] - 0x2), this['ghost1'][_0x18f421(0xe71)] = this[_0x18f421(0xc84)][_0x18f421(0xe71)] = this[_0x18f421(0xe71)];
                    }
                }
                _0x450e0f['B_Vento2extra'] = _0x44385b, _0x450e0f['default'] = _0x44385b;
            };
