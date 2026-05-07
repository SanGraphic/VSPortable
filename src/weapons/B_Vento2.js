// Module 0x5eb8
// Args: _0x991ef8, _0x13118c, _0x57aa6a

export default (_0x991ef8, _0x13118c, _0x57aa6a) => {
                'use strict';
                const _0x36c018 = a0_0x6932;
                var _0x4e65ed = this && this['__importDefault'] || function(_0x2de4ef) {
                    const _0x3343e8 = _0x36c018;
                    return _0x2de4ef && _0x2de4ef[_0x3343e8(0x16f1)] ? _0x2de4ef : {
                        'default': _0x2de4ef
                    };
                };
                Object['defineProperty'](_0x13118c, '__esModule', {
                    'value': !0x0
                }), _0x13118c['B_Vento2'] = void 0x0;
                const _0x3d5ffb = _0x4e65ed(_0x57aa6a(0xa14d)),
                    _0x25a77d = _0x4e65ed(_0x57aa6a(0x5f07)),
                    _0x5dfb26 = _0x4e65ed(_0x57aa6a(0x1fd7)),
                    _0x2b5e6b = _0x4e65ed(_0x57aa6a(0x5103)),
                    _0xd768af = _0x57aa6a(0x18304);
                class _0x53f4c5 extends _0x3d5ffb['default'] {
                    constructor(_0xd013a0, _0x5c3eca, _0x38fb01, _0x3a6d56, _0x3ac530) {
                        const _0x2e35d0 = _0x36c018;
                        super(_0xd013a0, _0x5c3eca, _0x38fb01, 'vfx', 'petal5.png', _0x3a6d56, _0x3ac530), this[_0x2e35d0(0x140c)] = 0x0, this['color'] = [0x110011, 0x660066, 0xff0000];
                        const _0xb8b6cc = this[_0x2e35d0(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'petal',
                            'suffix': '.png'
                        });
                        this[_0x2e35d0(0x183e)]['create']({
                            'key': 'strike',
                            'frames': _0xb8b6cc,
                            'frameRate': 0x3c
                        }), this['setOrigin'](0x0, 0.5), this[_0x2e35d0(0xb34)](0x110011), this[_0x2e35d0(0xe39)] = this['scene'][_0x2e35d0(0x18bd)][_0x2e35d0(0x105b)](_0x5c3eca, _0x38fb01, 'vfx', 'petal5.png')['setOrigin'](0x0, 0.5)['setTint'](0xff0000), this[_0x2e35d0(0xc84)] = this[_0x2e35d0(0x6d2)][_0x2e35d0(0x18bd)][_0x2e35d0(0x105b)](_0x5c3eca, _0x38fb01, 'vfx', 'petal5.png')['setOrigin'](0x0, 0.5)[_0x2e35d0(0xb34)](0x660066)[_0x2e35d0(0x11c7)](_0xd768af['BlendModes']['ADD']), this[_0x2e35d0(0xe39)][_0x2e35d0(0x183e)]['create']({
                            'key': 'strike',
                            'frames': _0xb8b6cc,
                            'frameRate': 0x3c
                        }), this[_0x2e35d0(0xc84)]['anims'][_0x2e35d0(0x6a8)]({
                            'key': 'strike',
                            'frames': _0xb8b6cc,
                            'frameRate': 0x3c
                        });
                    }
                    get['TrueSpeed']() {
                        const _0x4d5512 = _0x36c018;
                        let _0x5a1094 = this[_0x4d5512(0x4a1)]['PSpeed'];
                        return _0x5a1094 <= 0x1 ? 0x0 : (_0x5a1094 -= 0x1, _0x5a1094 * _0x2b5e6b[_0x4d5512(0xd2c)][_0x4d5512(0x5d1)] * this[_0x4d5512(0xb1f)]);
                    } ['Init'](_0x30d8ff = -0x3e8, _0x1c935f = -0x3e8) {
                        const _0x5b748a = _0x36c018;
                        super['Init'](_0x30d8ff, _0x1c935f), this[_0x5b748a(0x8a2)](0x0), this[_0x5b748a(0x140c)] = this['weapon'][_0x5b748a(0x5f5)], this['tween'] = this[_0x5b748a(0x6d2)][_0x5b748a(0x12a1)]['add']({
                            'targets': this,
                            'scale': _0x2b5e6b[_0x5b748a(0xd2c)][_0x5b748a(0x15db)] * this['weapon'][_0x5b748a(0x5f5)],
                            'duration': 0x64,
                            'ease': 'Linear'
                        });
                    } ['OnRecycle']() {
                        const _0x5da6e3 = _0x36c018;
                        var _0x52caa9, _0xec5d42;
                        super['OnRecycle'](), this['alpha'] = 0.5, this[_0x5da6e3(0x183e)][_0x5da6e3(0x902)]('strike'), null === (_0x52caa9 = this[_0x5da6e3(0x99a)]) || void 0x0 === _0x52caa9 || _0x52caa9[_0x5da6e3(0x1a34)](), this['setScale'](0x0), this['tween'] = this[_0x5da6e3(0x6d2)][_0x5da6e3(0x12a1)][_0x5da6e3(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x5da6e3(0x4a1)]['PArea'],
                            'duration': 0xc8,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        }), null === (_0xec5d42 = this[_0x5da6e3(0x15fa)]) || void 0x0 === _0xec5d42 || _0xec5d42[_0x5da6e3(0x1a34)](), this[_0x5da6e3(0x15fa)] = this[_0x5da6e3(0x6d2)][_0x5da6e3(0x12a1)]['add']({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': this['weapon']['PDuration'],
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                const _0x26f77d = _0x5da6e3;
                                this[_0x26f77d(0x14fb)]();
                            }
                        }), this[_0x5da6e3(0x4d4)] = _0x25a77d[_0x5da6e3(0xd2c)][_0x5da6e3(0x1043)][_0x5da6e3(0x10f6)][_0x5da6e3(0x4d4)], _0x25a77d[_0x5da6e3(0xd2c)]['Core'][_0x5da6e3(0x69e)][_0x5da6e3(0x13be)][_0x5da6e3(0x968)]['x'], this['offsetX'] = -0x8 * (_0x25a77d[_0x5da6e3(0xd2c)][_0x5da6e3(0x1043)]['Player']['flipX'] ? 0x1 : -0x1), this['offsetY'] = -0x10, this['originX'] = _0x25a77d['default'][_0x5da6e3(0x1043)][_0x5da6e3(0x10f6)][_0x5da6e3(0x4d4)] ? 0x1 : 0x0, this[_0x5da6e3(0x9c0)] = this[_0x5da6e3(0x19c4)] % 0x2 == (this[_0x5da6e3(0x4d4)] ? 0x0 : 0x1), this['offsetY'] = -0x10 - [0x0, 0x5, -0x5, 1.5, -2.5, 0xa, -0xa, 7.5, -7.5, 0xf, -0xf, 12.5, -12.5][this[_0x5da6e3(0x19c4)] % 0xd], this[_0x5da6e3(0xd96)] = [0x0, 0x5, -0x5, 1.5, -2.5, 0xa, -0xa, 7.5, -7.5, 0xf, -0xf, 12.5, -12.5][this[_0x5da6e3(0x19c4)] % 0x6], this['_speed'] = 0x1, this[_0x5da6e3(0xcf9)][_0x5da6e3(0xf4e)]['x'] = (this['flipX'] ? -0x1 : 0x1) * this[_0x5da6e3(0xfbb)] + _0x25a77d['default'][_0x5da6e3(0x1043)][_0x5da6e3(0x10f6)][_0x5da6e3(0xcf9)][_0x5da6e3(0xf4e)]['x'], this['x'] = _0x25a77d[_0x5da6e3(0xd2c)][_0x5da6e3(0x1043)][_0x5da6e3(0x10f6)]['x'] + this[_0x5da6e3(0x16d4)], this['y'] = _0x25a77d['default'][_0x5da6e3(0x1043)][_0x5da6e3(0x10f6)]['y'] + this[_0x5da6e3(0x154a)], _0x25a77d['default'][_0x5da6e3(0x1267)]['PlaySound'](_0x5dfb26[_0x5da6e3(0xd2c)]['Whip'], {
                            'detune': 0x64 * this['indexInWeapon'],
                            'volume': 0x1,
                            'rate': 0x2
                        }), this[_0x5da6e3(0xe39)][_0x5da6e3(0xf8e)](this['originX'], 0.5), this[_0x5da6e3(0xc84)][_0x5da6e3(0xf8e)](this[_0x5da6e3(0x612)], 0.5), this['ghost1']['angle'] = this[_0x5da6e3(0xc84)]['angle'] = this[_0x5da6e3(0xd96)], this[_0x5da6e3(0xe39)]['flipX'] = this['ghost2']['flipX'] = this['flipX'], this[_0x5da6e3(0xe39)][_0x5da6e3(0x9c0)] = this[_0x5da6e3(0xc84)]['flipY'] = this[_0x5da6e3(0x9c0)];
                    } ['Update'](_0x4b37ec) {
                        const _0x1b725b = _0x36c018;
                        this[_0x1b725b(0xe39)][_0x1b725b(0x8a2)](this[_0x1b725b(0x7cb)]), this['ghost2'][_0x1b725b(0x8a2)](this['scale']), this[_0x1b725b(0xe39)][_0x1b725b(0xff8)](this['x'] + 0x4), this['ghost2'][_0x1b725b(0xff8)](this['x'] - 0x4), this['ghost1'][_0x1b725b(0x108a)](this['y'] + 0x2), this['ghost2']['setY'](this['y'] - 0x2), this[_0x1b725b(0xe39)][_0x1b725b(0xe71)] = this[_0x1b725b(0xc84)][_0x1b725b(0xe71)] = this['alpha'];
                    }
                }
                _0x13118c['B_Vento2'] = _0x53f4c5, _0x13118c['default'] = _0x53f4c5;
            };
