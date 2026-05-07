// Module 0xf1f6
// Args: _0x36884c, _0x399dfb, _0x3d2b05

export default (_0x36884c, _0x399dfb, _0x3d2b05) => {
                'use strict';
                const _0x3dcf4c = a0_0x6932;
                var _0x204025 = this && this['__importDefault'] || function(_0x16c797) {
                    const _0x4b1c93 = a0_0x6932;
                    return _0x16c797 && _0x16c797['__esModule'] ? _0x16c797 : {
                        'default': _0x16c797
                    };
                };
                Object['defineProperty'](_0x399dfb, '__esModule', {
                    'value': !0x0
                });
                const _0x190034 = _0x204025(_0x3d2b05(0x5f07)),
                    _0x1e4946 = _0x204025(_0x3d2b05(0x166d5)),
                    _0x4104cc = _0x204025(_0x3d2b05(0xc42e)),
                    _0x413e1c = _0x204025(_0x3d2b05(0x1fd7)),
                    _0x5065fb = _0x204025(_0x3d2b05(0x5103)),
                    _0x54394b = _0x3d2b05(0x18304),
                    _0x41e8af = _0x204025(_0x3d2b05(0xdfbc));
                class _0x4290db extends _0x1e4946['default'] {
                    constructor(_0x268624, _0x3ee0ab, _0x18f585) {
                        const _0x4f041f = _0x3dcf4c;
                        super(_0x268624, _0x3ee0ab, _0x18f585, _0x4104cc[_0x4f041f(0xd2c)][_0x4f041f(0x16e3)]), _0x190034[_0x4f041f(0xd2c)][_0x4f041f(0x1043)]['scene'][_0x4f041f(0x18bd)]['existing'](this), this['setScale'](_0x5065fb[_0x4f041f(0xd2c)]['PixelScale']), this['Cursor'] = this[_0x4f041f(0x6d2)]['add'][_0x4f041f(0x105b)](_0x3ee0ab, _0x18f585, 'UI', 'arrow_01.png'), this[_0x4f041f(0x1abc)]['setDepth'](0x270e), this[_0x4f041f(0x1abc)][_0x4f041f(0x8a2)](0x2), this['Cursor']['setAlpha'](0.75), this[_0x4f041f(0x1abc)]['setBlendMode'](_0x54394b['BlendModes']['ADD']), this[_0x4f041f(0x17a0)] = this['scene'][_0x4f041f(0x18bd)]['sprite'](_0x3ee0ab, _0x18f585, 'items', 'goldenegg.png'), this[_0x4f041f(0x17a0)][_0x4f041f(0xb4a)](0x270f), this['CursorIcon'][_0x4f041f(0x8a2)](0x1), this[_0x4f041f(0x17a0)][_0x4f041f(0xdab)](0x1);
                        const _0xb47bf = this['anims'][_0x4f041f(0x1756)]('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrow_',
                            'suffix': '.png'
                        });
                        this['Cursor']['anims'][_0x4f041f(0x6a8)]({
                            'key': 'idle',
                            'frames': _0xb47bf,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x4f041f(0x1abc)]['play']('idle');
                    } ['Update']() {
                        const _0xd7fe8a = _0x3dcf4c;
                        if (super[_0xd7fe8a(0xa9f)](), this[_0xd7fe8a(0xb4a)](0x9 + this['y'] - _0x190034['default'][_0xd7fe8a(0x1043)]['Player']['y']), Math['abs'](this['x'] - _0x190034[_0xd7fe8a(0xd2c)]['Core'][_0xd7fe8a(0x10f6)]['x']) < 0.5 * this['scene'][_0xd7fe8a(0x12f9)][_0xd7fe8a(0x173c)] && Math[_0xd7fe8a(0x19db)](this['y'] - _0x190034['default'][_0xd7fe8a(0x1043)]['Player']['y']) < 0.5 * this[_0xd7fe8a(0x6d2)]['renderer'][_0xd7fe8a(0x140e)] || !_0x190034['default']['Core'][_0xd7fe8a(0x14d8)][_0xd7fe8a(0xbb8)]) this['Cursor']['setVisible'](!0x1), this[_0xd7fe8a(0x17a0)]['setVisible'](!0x1);
                        else {
                            var _0x5e719c = this[_0xd7fe8a(0xf02)](this);
                            this[_0xd7fe8a(0x1abc)][_0xd7fe8a(0x9b5)](Phaser['Math'][_0xd7fe8a(0x1470)](_0x5e719c)), this['Cursor']['copyPosition'](_0x190034['default'][_0xd7fe8a(0x1043)][_0xd7fe8a(0x10f6)]), this['Cursor']['x'] += 0.45 * Math[_0xd7fe8a(0xd7e)](_0x5e719c) * this[_0xd7fe8a(0x6d2)]['renderer'][_0xd7fe8a(0x173c)], this['Cursor']['y'] += 0.45 * Math[_0xd7fe8a(0xc80)](_0x5e719c) * this[_0xd7fe8a(0x6d2)][_0xd7fe8a(0x12f9)][_0xd7fe8a(0x140e)], this['Cursor']['setAlpha'](0.75), this[_0xd7fe8a(0x1abc)][_0xd7fe8a(0x11c7)](_0x54394b[_0xd7fe8a(0x10fc)]['ADD']), this[_0xd7fe8a(0x1abc)]['setVisible'](!0x0), this[_0xd7fe8a(0x17a0)][_0xd7fe8a(0xf01)](this['Cursor']), this[_0xd7fe8a(0x17a0)]['setVisible'](!0x0);
                        }
                        let _0x2e05b2 = this[_0xd7fe8a(0xeee)](this['x'], this['y']);
                        this['x'] = _0x2e05b2['x'], this['y'] = _0x2e05b2['y'];
                    } ['GetTaken']() {
                        const _0x31ae6d = _0x3dcf4c;
                        if (this[_0x31ae6d(0x210)]) return;
                        if (_0x190034['default']['Core'][_0x31ae6d(0x14d8)][_0x31ae6d(0x1188)] === _0x41e8af[_0x31ae6d(0xd2c)]['SIGMA']) {
                            let _0x2a1afe = this[_0x31ae6d(0x6d2)][_0x31ae6d(0x18bd)][_0x31ae6d(0x568)](0.5 * this['scene']['renderer'][_0x31ae6d(0x173c)], 0.5 * this['scene']['renderer']['height'], 'items', 'goldenegg.png')['setScrollFactor'](0x0)[_0x31ae6d(0xb4a)](0x1);
                            this[_0x31ae6d(0x6d2)][_0x31ae6d(0x12a1)][_0x31ae6d(0x18bd)]({
                                'targets': _0x2a1afe,
                                'x': -0x64,
                                'y': -0x64,
                                'scale': 1.4,
                                'duration': 0x1f4,
                                'angle': 0x2d0,
                                'onComplete': () => {
                                    const _0x5e2703 = _0x31ae6d;
                                    _0x2a1afe[_0x5e2703(0x16ca)]();
                                }
                            });
                            let _0x14f7e3 = _0x190034[_0x31ae6d(0xd2c)]['Core'][_0x31ae6d(0x133f)][_0x31ae6d(0x1303)](this);
                            return _0x14f7e3 > -0x1 && _0x190034[_0x31ae6d(0xd2c)][_0x31ae6d(0x1043)]['StagePickups'][_0x31ae6d(0x16ea)](_0x14f7e3, 0x1), void this['DeSpawn']();
                        }
                        let _0x51960e = _0x190034[_0x31ae6d(0xd2c)][_0x31ae6d(0x1043)][_0x31ae6d(0x1962)][_0x31ae6d(0xfcf)]();
                        _0x190034['default'][_0x31ae6d(0x1043)][_0x31ae6d(0x1962)][_0x31ae6d(0x14d2)](_0x190034['default'][_0x31ae6d(0x1043)]['Player'], _0x51960e, this[_0x31ae6d(0x6d2)]), _0x190034['default']['Core']['PlayerOptions']['RunPickups'][_0x31ae6d(0x1564)](this['itemType']), this[_0x31ae6d(0x102c)](this[_0x31ae6d(0xeb5)]), super['GetTaken'](), _0x190034['default']['Sound'][_0x31ae6d(0x7f6)](_0x413e1c[_0x31ae6d(0xd2c)]['Roast'], {
                            'volume': 0.5,
                            'detune': 0xc8
                        }), _0x190034['default'][_0x31ae6d(0x1267)]['PlaySound'](_0x413e1c[_0x31ae6d(0xd2c)][_0x31ae6d(0x16d1)], {
                            'volume': 0.5,
                            'detune': 0x190
                        }), _0x190034[_0x31ae6d(0xd2c)][_0x31ae6d(0x1267)][_0x31ae6d(0x7f6)](_0x413e1c[_0x31ae6d(0xd2c)][_0x31ae6d(0x16d1)], {
                            'volume': 0.5,
                            'detune': 0x258
                        });
                        let _0x14146b = _0x190034[_0x31ae6d(0xd2c)][_0x31ae6d(0x1043)][_0x31ae6d(0x133f)]['indexOf'](this);
                        _0x14146b > -0x1 && _0x190034['default'][_0x31ae6d(0x1043)][_0x31ae6d(0x133f)]['splice'](_0x14146b, 0x1);
                    } ['DeSpawn']() {
                        const _0x8c0ef3 = _0x3dcf4c;
                        super[_0x8c0ef3(0x14fb)](), this[_0x8c0ef3(0x1abc)]['setVisible'](!0x1), this[_0x8c0ef3(0x17a0)][_0x8c0ef3(0x183f)](!0x1);
                        let _0x411916 = _0x190034['default'][_0x8c0ef3(0x1043)]['StagePickups']['indexOf'](this);
                        _0x411916 > -0x1 && _0x190034[_0x8c0ef3(0xd2c)]['Core'][_0x8c0ef3(0x133f)]['splice'](_0x411916, 0x1);
                    }
                }
                _0x399dfb['default'] = _0x4290db;
            };
