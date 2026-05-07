// Module 0x30e
// Args: _0x1d3d86, _0x2f4b67, _0x2d0f63

export default (_0x1d3d86, _0x2f4b67, _0x2d0f63) => {
                'use strict';
                const _0x3f13db = a0_0x6932;
                Object['defineProperty'](_0x2f4b67, '__esModule', {
                    'value': !0x0
                });
                const _0x33a28d = _0x2d0f63(0x18304);
                _0x2f4b67['default'] = class {
                    constructor(_0x433d5b, _0xfceb0d, _0x4f14f6, _0x26f003, _0x11323d, _0x20feb3) {
                        const _0x691d32 = _0x3f13db;
                        this['heightAlpha'] = 0x0, this['alpha'] = 0.5, this[_0x691d32(0x57c)] = -0x2710, this[_0x691d32(0x10e0)] = new Phaser['Math']['Vector2'](0x0, 0x0), this['scene'] = _0x433d5b, this['followers'] = this['scene'][_0x691d32(0x18bd)]['group'](), this['Create'](_0xfceb0d, _0x4f14f6, _0x26f003, _0x11323d, _0x20feb3);
                    } ['Create'](_0x2db429, _0x4fe5e3, _0x24e5de = 0x1, _0x2f458c = 0x1, _0x42148c = 0.5) {
                        const _0xc1b3b1 = _0x3f13db;
                        let _0x2d4e40 = this['scene'][_0xc1b3b1(0x12f9)][_0xc1b3b1(0x140e)] / 3.5;
                        this['runeSpline'] = new Phaser['Curves']['Spline']([_0x2db429, 0x4 * _0x2d4e40, _0x2db429 - 0x19 * _0x24e5de, 0x3 * _0x2d4e40, _0x2db429 + 0x32 * _0x24e5de, 0x2 * _0x2d4e40, _0x2db429 - 0x19 * _0x24e5de, _0x2d4e40, _0x2db429, 0x0]);
                        for (var _0x27418f = null, _0x1a0840 = 0x0; _0x1a0840 < 0x5; _0x1a0840++) {
                            var _0x20df05 = this[_0xc1b3b1(0x933)]['create'](0x0, -0x20, 'vfx', '_runes_02.png');
                            _0x27418f || (_0x27418f = _0x20df05['anims'][_0xc1b3b1(0x1756)]('vfx', {
                                'start': 0x2,
                                'end': 0x6,
                                'zeroPad': 0x0,
                                'prefix': '_runes_0',
                                'suffix': '.png'
                            })), _0x20df05[_0xc1b3b1(0x1b0a)]('vector', new Phaser[(_0xc1b3b1(0x24f))][(_0xc1b3b1(0x1551))]()), _0x20df05['anims']['create']({
                                'key': 'idle',
                                'frames': _0x27418f,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            }), _0x20df05[_0xc1b3b1(0x183e)][_0xc1b3b1(0x902)]({
                                'key': 'idle',
                                'startFrame': _0x1a0840
                            }), _0x20df05[_0xc1b3b1(0xd87)](0x0), _0x20df05[_0xc1b3b1(0x9b5)](0xf), _0x20df05[_0xc1b3b1(0x8a2)](0.5), _0x20df05['setBlendMode'](_0x33a28d[_0xc1b3b1(0x10fc)]['ADD']), _0x20df05['setDepth'](-0x1869f), _0x20df05['alpha'] = _0x2f458c, this['scene']['tweens'][_0xc1b3b1(0x18bd)]({
                                'targets': _0x20df05,
                                'z': 0x1,
                                'angle': -0xf,
                                'ease': 'Linear',
                                'duration': _0x4fe5e3,
                                'repeat': -0x1,
                                'delay': _0x1a0840 * (0.04 * _0x4fe5e3)
                            });
                        }
                        this['scene'][_0xc1b3b1(0x12a1)][_0xc1b3b1(0x18bd)]({
                            'targets': this,
                            'alpha': _0x42148c,
                            'ease': 'Sine.easeOut',
                            'duration': 0.25 * _0x4fe5e3,
                            'repeat': -0x1,
                            'yoyo': !0x0
                        });
                    } ['Update'](_0x52b86c, _0x491fb4) {
                        const _0x410000 = _0x3f13db;
                        this['heightAlpha'] = -_0x491fb4;
                        for (var _0x4d76bd = this['followers']['getChildren'](), _0x724930 = 0x0; _0x724930 < _0x4d76bd['length']; _0x724930++) {
                            let _0x126137 = _0x4d76bd[_0x724930];
                            this[_0x410000(0x1853)]['getPoint'](_0x126137['z'], this[_0x410000(0x10e0)]), _0x126137['x'] = this[_0x410000(0x10e0)]['x'], _0x126137['y'] = this['appo']['y'], _0x126137[_0x410000(0xe71)] = this[_0x410000(0xe71)] * this[_0x410000(0x3b4)];
                        }
                    }
                };
            };
