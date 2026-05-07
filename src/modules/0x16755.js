// Module 0x16755
// Args: _0x5b3404, _0x3230c1, _0xa46b48

export default (_0x5b3404, _0x3230c1, _0xa46b48) => {
                'use strict';
                const _0x220a84 = a0_0x6932;
                var _0x58cd92 = this && this['__importDefault'] || function(_0x39dea5) {
                    return _0x39dea5 && _0x39dea5['__esModule'] ? _0x39dea5 : {
                        'default': _0x39dea5
                    };
                };
                Object['defineProperty'](_0x3230c1, '__esModule', {
                    'value': !0x0
                }), _0x3230c1['W_FourSeasons2'] = void 0x0;
                const _0x1e9fb6 = _0x58cd92(_0xa46b48(0x1fd7)),
                    _0x5f21c9 = _0x58cd92(_0xa46b48(0x54e3)),
                    _0x1f858c = _0x58cd92(_0xa46b48(0x5f07)),
                    _0x38f988 = _0x58cd92(_0xa46b48(0xe49a));
                class _0x3c7ebf extends _0x38f988['default'] {
                    constructor(_0x5f18b5) {
                        const _0x2f1637 = _0x220a84;
                        super(_0x5f18b5), this['positions'] = [], this[_0x2f1637(0x1031)] = Math['PI'] / 0x2710, this[_0x2f1637(0xc9f)] = [{
                            'x': 0x0,
                            'y': 0x0
                        }, {
                            'x': 0x0,
                            'y': 0x0
                        }, {
                            'x': 0x0,
                            'y': 0x0
                        }, {
                            'x': 0x0,
                            'y': 0x0
                        }, {
                            'x': 0x0,
                            'y': 0x0
                        }], this['orbs'] = [];
                        for (let _0x338656 = 0x0; _0x338656 < 0x18; _0x338656++) {
                            let _0x549c1b = _0x1f858c['default'][_0x2f1637(0x1043)]['scene']['add'][_0x2f1637(0x105b)](0x0, 0x0, 'vfx', 'bulletFourSeasons.png');
                            _0x549c1b['setScrollFactor'](0x0), this['orbs'][_0x2f1637(0x1564)](_0x549c1b);
                        }
                        this[_0x2f1637(0x19bf)] = new Array(), this['_fireSprite'] = new Array(), this['_waterRT'] = new Array(), this[_0x2f1637(0x41b)] = new Array(), this['_earthRT'] = new Array(), this[_0x2f1637(0xf16)] = new Array(), this[_0x2f1637(0x172b)] = new Array(), this[_0x2f1637(0x1009)] = new Array(), this[_0x2f1637(0x366)] = new Array(), this['_voidSprite'] = new Array();
                        const _0x54b8cc = [0x1e, 0x14, 0x18, 0xe];
                        for (let _0x2ff120 = 0x0; _0x2ff120 < 0x1; _0x2ff120++) {
                            var _0x69bae2 = _0x1f858c[_0x2f1637(0xd2c)][_0x2f1637(0x1043)]['scene']['make'][_0x2f1637(0x752)]({
                                'x': -Number['MAX_SAFE_INTEGER'],
                                'y': -Number[_0x2f1637(0x1aaa)],
                                'width': 0x20,
                                'height': 0x20
                            });
                            _0x69bae2[_0x2f1637(0x3c0)]('godaiFire' + _0x2ff120), this[_0x2f1637(0x19bf)][_0x2f1637(0x1564)](_0x69bae2);
                        }
                        for (let _0x279ae3 = 0x0; _0x279ae3 < 0x1; _0x279ae3++) {
                            var _0x2102d2 = _0x1f858c['default'][_0x2f1637(0x1043)][_0x2f1637(0x6d2)]['make']['renderTexture']({
                                'x': -Number[_0x2f1637(0x1aaa)],
                                'y': -Number['MAX_SAFE_INTEGER'],
                                'width': 0x20,
                                'height': 0x20
                            });
                            _0x2102d2[_0x2f1637(0x3c0)]('godaiWater' + _0x279ae3), this[_0x2f1637(0x307)]['push'](_0x2102d2);
                        }
                        for (let _0x2a2e36 = 0x0; _0x2a2e36 < 0x1; _0x2a2e36++)(_0x1c6924 = _0x1f858c[_0x2f1637(0xd2c)][_0x2f1637(0x1043)][_0x2f1637(0x6d2)][_0x2f1637(0x8f2)][_0x2f1637(0x752)]({
                            'x': -Number[_0x2f1637(0x1aaa)],
                            'y': -Number['MAX_SAFE_INTEGER'],
                            'width': 0x20,
                            'height': 0x20
                        }))['saveTexture']('godaiEarth' + _0x2a2e36), this[_0x2f1637(0x190f)][_0x2f1637(0x1564)](_0x1c6924);
                        for (let _0x1d562b = 0x0; _0x1d562b < 0x1; _0x1d562b++)(_0x1c6924 = _0x1f858c['default'][_0x2f1637(0x1043)][_0x2f1637(0x6d2)]['make']['renderTexture']({
                            'x': -Number[_0x2f1637(0x1aaa)],
                            'y': -Number['MAX_SAFE_INTEGER'],
                            'width': 0x20,
                            'height': 0x20
                        }))[_0x2f1637(0x3c0)]('godaiWind' + _0x1d562b), this[_0x2f1637(0x172b)][_0x2f1637(0x1564)](_0x1c6924);
                        for (let _0xe64c9d = 0x0; _0xe64c9d < 0x1; _0xe64c9d++) {
                            var _0x1c6924;
                            (_0x1c6924 = _0x1f858c['default']['Core']['scene']['make'][_0x2f1637(0x752)]({
                                'x': -Number['MAX_SAFE_INTEGER'],
                                'y': -Number['MAX_SAFE_INTEGER'],
                                'width': 0x20,
                                'height': 0x20
                            }))[_0x2f1637(0x3c0)]('godaiVoid' + _0xe64c9d), this['_voidRT']['push'](_0x1c6924);
                        }
                        var _0x3dabb9 = new Array();
                        for (let _0x195f38 = 0x0; _0x195f38 < 0x19; _0x195f38++) {
                            var _0x3732ec = 'fiamma' + String(_0x195f38)['padStart'](0x4, '0') + '.png';
                            _0x3dabb9['push']({
                                'key': 'vfx',
                                'frame': _0x3732ec
                            });
                        }
                        for (let _0x1f0716 = 0x0; _0x1f0716 < 0x1; _0x1f0716++)(_0x4824f3 = _0x1f858c['default']['Core'][_0x2f1637(0x6d2)]['add'][_0x2f1637(0x105b)](-Number[_0x2f1637(0x1aaa)], -Number['MAX_SAFE_INTEGER'], 'vfx', '')['setOrigin'](0x0))[_0x2f1637(0x183e)]['create']({
                            'key': 'spin',
                            'frames': _0x3dabb9,
                            'frameRate': _0x54b8cc[_0x1f0716 % 0x4],
                            'repeat': -0x1
                        }), _0x4824f3[_0x2f1637(0x183e)]['play']('spin'), this['_fireSprite'][_0x2f1637(0x1564)](_0x4824f3);
                        _0x3dabb9 = new Array();
                        for (let _0x63d2c0 = 0x0; _0x63d2c0 < 0x18; _0x63d2c0++) _0x3732ec = 'icicle' + String(_0x63d2c0)[_0x2f1637(0x7e1)](0x4, '0') + '.png', _0x3dabb9['push']({
                            'key': 'vfx',
                            'frame': _0x3732ec
                        });
                        for (let _0x214ce7 = 0x0; _0x214ce7 < 0x1; _0x214ce7++)(_0x4824f3 = _0x1f858c[_0x2f1637(0xd2c)][_0x2f1637(0x1043)][_0x2f1637(0x6d2)]['add'][_0x2f1637(0x105b)](-Number[_0x2f1637(0x1aaa)], -Number['MAX_SAFE_INTEGER'], 'vfx', '')[_0x2f1637(0xf8e)](0x0))[_0x2f1637(0x183e)][_0x2f1637(0x6a8)]({
                            'key': 'spin',
                            'frames': _0x3dabb9,
                            'frameRate': _0x54b8cc[_0x214ce7 % 0x4],
                            'repeat': -0x1
                        }), _0x4824f3[_0x2f1637(0x183e)]['play']('spin'), this['_waterSprite'][_0x2f1637(0x1564)](_0x4824f3);
                        _0x3dabb9 = new Array();
                        for (let _0x4c81c4 = 0x0; _0x4c81c4 < 0x30; _0x4c81c4++) _0x3732ec = 'rock' + String(_0x4c81c4)[_0x2f1637(0x7e1)](0x4, '0') + '.png', _0x3dabb9[_0x2f1637(0x1564)]({
                            'key': 'vfx',
                            'frame': _0x3732ec
                        });
                        for (let _0x151837 = 0x0; _0x151837 < 0x1; _0x151837++)(_0x4824f3 = _0x1f858c[_0x2f1637(0xd2c)][_0x2f1637(0x1043)]['scene'][_0x2f1637(0x18bd)]['sprite'](-Number['MAX_SAFE_INTEGER'], -Number['MAX_SAFE_INTEGER'], 'vfx', '')['setOrigin'](0x0))[_0x2f1637(0x183e)]['create']({
                            'key': 'spin',
                            'frames': _0x3dabb9,
                            'frameRate': _0x54b8cc[_0x151837 % 0x4],
                            'repeat': -0x1
                        }), _0x4824f3[_0x2f1637(0x183e)]['play']('spin'), this[_0x2f1637(0xf16)]['push'](_0x4824f3);
                        _0x3dabb9 = new Array();
                        for (let _0x24ed10 = 0x0; _0x24ed10 < 0x2c; _0x24ed10++) _0x3732ec = 'spinThick' + String(_0x24ed10)[_0x2f1637(0x7e1)](0x4, '0') + '.png', _0x3dabb9[_0x2f1637(0x1564)]({
                            'key': 'vfx',
                            'frame': _0x3732ec
                        });
                        for (let _0x9baae4 = 0x0; _0x9baae4 < 0x1; _0x9baae4++)(_0x4824f3 = _0x1f858c[_0x2f1637(0xd2c)][_0x2f1637(0x1043)][_0x2f1637(0x6d2)][_0x2f1637(0x18bd)]['sprite'](-Number[_0x2f1637(0x1aaa)], -Number['MAX_SAFE_INTEGER'], 'vfx', '')['setOrigin'](0x0))[_0x2f1637(0x183e)][_0x2f1637(0x6a8)]({
                            'key': 'spin',
                            'frames': _0x3dabb9,
                            'frameRate': _0x54b8cc[_0x9baae4 % 0x4],
                            'repeat': -0x1
                        }), _0x4824f3['anims']['play']('spin'), this[_0x2f1637(0x1009)][_0x2f1637(0x1564)](_0x4824f3);
                        _0x3dabb9 = new Array();
                        for (let _0x56935b = 0x0; _0x56935b < 0x4; _0x56935b++) _0x3732ec = 'lightning' + String(_0x56935b)[_0x2f1637(0x7e1)](0x4, '0') + '.png', _0x3dabb9[_0x2f1637(0x1564)]({
                            'key': 'vfx',
                            'frame': _0x3732ec
                        });
                        for (let _0x2ba68f = 0x0; _0x2ba68f < 0x1; _0x2ba68f++) {
                            var _0x4824f3;
                            (_0x4824f3 = _0x1f858c[_0x2f1637(0xd2c)]['Core'][_0x2f1637(0x6d2)]['add'][_0x2f1637(0x105b)](-Number['MAX_SAFE_INTEGER'], -Number[_0x2f1637(0x1aaa)], 'vfx', '')['setOrigin'](0x0))[_0x2f1637(0x183e)][_0x2f1637(0x6a8)]({
                                'key': 'spin',
                                'frames': _0x3dabb9,
                                'frameRate': _0x54b8cc[_0x2ba68f % 0x4],
                                'repeat': -0x1
                            }), _0x4824f3[_0x2f1637(0x183e)]['play']('spin'), this['_voidSprite'][_0x2f1637(0x1564)](_0x4824f3);
                        }
                        this['explodeOnExpire'] = !0x1, this[_0x2f1637(0xdfc)] = _0x5f21c9[_0x2f1637(0xd2c)][_0x2f1637(0x3e7)];
                    }
                    get['PPower']() {
                        const _0x129890 = _0x220a84;
                        let _0x23fbab = (this[_0x129890(0x31f)] + 0.001 * this[_0x129890(0x16c3)]) * this[_0x129890(0x942)];
                        return _0x1f858c['default'][_0x129890(0x1043)][_0x129890(0x10f6)][_0x129890(0x947)] ? Math[_0x129890(0x1084)](0xa, (_0x1f858c['default'][_0x129890(0x1043)][_0x129890(0x1884)][_0x129890(0x18f8)] + _0x1f858c[_0x129890(0xd2c)][_0x129890(0x1043)][_0x129890(0x10f6)][_0x129890(0x31f)]) * _0x1f858c[_0x129890(0xd2c)]['Core']['Player'][_0x129890(0x947)][_0x129890(0xb81)]) * _0x23fbab + _0x1f858c['default']['Core'][_0x129890(0x1884)][_0x129890(0x1117)] : Math[_0x129890(0x1084)](0xa, _0x1f858c['default'][_0x129890(0x1043)]['Arcanas'][_0x129890(0x18f8)] + _0x1f858c[_0x129890(0xd2c)][_0x129890(0x1043)]['Player'][_0x129890(0x31f)]) * _0x23fbab + _0x1f858c['default'][_0x129890(0x1043)]['Arcanas'][_0x129890(0x1117)];
                    } ['Set5Positions']() {
                        const _0x271d71 = _0x220a84;
                        let _0x4896b2 = 0x40,
                            _0xeeed88 = 0.5 * _0x1f858c[_0x271d71(0xd2c)][_0x271d71(0x1043)][_0x271d71(0x6d2)][_0x271d71(0x12f9)]['width'],
                            _0x52d375 = 0.5 * _0x1f858c[_0x271d71(0xd2c)]['Core'][_0x271d71(0x6d2)][_0x271d71(0x12f9)]['height'];
                        this[_0x271d71(0xc9f)][0x0]['x'] = _0x1f858c[_0x271d71(0xd2c)]['Core'][_0x271d71(0x10f6)]['x'] - _0xeeed88 + _0x4896b2, this[_0x271d71(0xc9f)][0x0]['y'] = _0x1f858c['default'][_0x271d71(0x1043)]['Player']['y'] - _0x52d375 + _0x4896b2, this[_0x271d71(0xc9f)][0x1]['x'] = _0x1f858c[_0x271d71(0xd2c)]['Core'][_0x271d71(0x10f6)]['x'] + _0xeeed88 - _0x4896b2, this[_0x271d71(0xc9f)][0x1]['y'] = _0x1f858c['default']['Core'][_0x271d71(0x10f6)]['y'] - _0x52d375 + _0x4896b2, this[_0x271d71(0xc9f)][0x2]['x'] = _0x1f858c['default'][_0x271d71(0x1043)][_0x271d71(0x10f6)]['x'] - _0xeeed88 + _0x4896b2, this['positions'][0x2]['y'] = _0x1f858c['default']['Core'][_0x271d71(0x10f6)]['y'] + _0x52d375 - _0x4896b2, this[_0x271d71(0xc9f)][0x3]['x'] = _0x1f858c[_0x271d71(0xd2c)][_0x271d71(0x1043)][_0x271d71(0x10f6)]['x'] + _0xeeed88 - _0x4896b2, this[_0x271d71(0xc9f)][0x3]['y'] = _0x1f858c[_0x271d71(0xd2c)]['Core'][_0x271d71(0x10f6)]['y'] + _0x52d375 - _0x4896b2, this[_0x271d71(0xc9f)][0x4]['x'] = _0x1f858c['default'][_0x271d71(0x1043)][_0x271d71(0x10f6)]['x'], this[_0x271d71(0xc9f)][0x4]['y'] = _0x1f858c[_0x271d71(0xd2c)][_0x271d71(0x1043)][_0x271d71(0x10f6)]['y'];
                    } ['MakeLevelOne']() {
                        const _0x1db5cc = _0x220a84;
                        super[_0x1db5cc(0xf64)](), this[_0x1db5cc(0x137c)] = [];
                        for (let _0x12a10b = 0x0; _0x12a10b < this[_0x1db5cc(0x15d8)]['length']; _0x12a10b++) this[_0x1db5cc(0x137c)]['push'](0x2 * Math['PI'] * (_0x12a10b / this['orbs']['length']));
                    } ['Update'](_0x50a68b) {
                        const _0x2e7430 = _0x220a84;
                        super[_0x2e7430(0xa9f)](_0x50a68b), this[_0x2e7430(0xa95)]();
                        for (let _0xa59d60 = 0x0; _0xa59d60 < this[_0x2e7430(0x19bf)]['length']; _0xa59d60++) {
                            const _0x5d6c90 = this['_fireRT'][_0xa59d60];
                            _0x5d6c90['clear'](), _0x5d6c90[_0x2e7430(0x4a6)](this['_fireSprite'][_0xa59d60], 0x0, 0x0);
                        }
                        for (let _0x2069af = 0x0; _0x2069af < this[_0x2e7430(0x307)]['length']; _0x2069af++) {
                            const _0x3d4e7b = this['_waterRT'][_0x2069af];
                            _0x3d4e7b[_0x2e7430(0x159)](), _0x3d4e7b[_0x2e7430(0x4a6)](this[_0x2e7430(0x41b)][_0x2069af], 0x0, 0x0);
                        }
                        for (let _0xc8b1cf = 0x0; _0xc8b1cf < this['_earthRT'][_0x2e7430(0xed9)]; _0xc8b1cf++) {
                            const _0x37f54e = this[_0x2e7430(0x190f)][_0xc8b1cf];
                            _0x37f54e['clear'](), _0x37f54e[_0x2e7430(0x4a6)](this['_earthSprite'][_0xc8b1cf], 0x0, 0x0);
                        }
                        for (let _0x337e1e = 0x0; _0x337e1e < this[_0x2e7430(0x172b)][_0x2e7430(0xed9)]; _0x337e1e++) {
                            const _0x4916bb = this['_windRT'][_0x337e1e];
                            _0x4916bb['clear'](), _0x4916bb['draw'](this['_windSprite'][_0x337e1e], 0x0, 0x0);
                        }
                        for (let _0x331d80 = 0x0; _0x331d80 < this['_voidRT'][_0x2e7430(0xed9)]; _0x331d80++) {
                            const _0x5670b0 = this[_0x2e7430(0x366)][_0x331d80];
                            _0x5670b0['clear'](), _0x5670b0['draw'](this['_voidSprite'][_0x331d80], 0x0, 0x0);
                        }
                        let _0x4efbda = 0.65 * _0x1f858c[_0x2e7430(0xd2c)][_0x2e7430(0x1043)]['scene']['renderer'][_0x2e7430(0x140e)],
                            _0x13e273 = 0.5 * _0x1f858c[_0x2e7430(0xd2c)][_0x2e7430(0x1043)]['scene'][_0x2e7430(0x12f9)]['width'],
                            _0x47c244 = 0.5 * _0x1f858c[_0x2e7430(0xd2c)]['Core'][_0x2e7430(0x6d2)][_0x2e7430(0x12f9)][_0x2e7430(0x140e)];
                        for (let _0x23dcda = 0x0; _0x23dcda < this['angles']['length']; _0x23dcda++) this[_0x2e7430(0x137c)][_0x23dcda] += this['angleUnit'] * _0x50a68b;
                        for (let _0x5e7007 = 0x0; _0x5e7007 < this[_0x2e7430(0x15d8)]['length']; _0x5e7007++) {
                            const _0x3c169d = this['orbs'][_0x5e7007];
                            _0x3c169d['x'] = _0x13e273 + Math['cos'](this[_0x2e7430(0x137c)][_0x5e7007]) * _0x4efbda, _0x3c169d['y'] = _0x47c244 + Math['sin'](this['angles'][_0x5e7007]) * _0x4efbda;
                        }
                    } ['Fire']() {
                        const _0x2b115f = _0x220a84;
                        _0x1f858c['default']['Sound']['PlaySound'](_0x1e9fb6['default']['Seasons1'], {
                            'volume': 0x1
                        }, 0x7d0, 0x1);
                        for (let _0x544f53 = 0x0; _0x544f53 < 0x5; _0x544f53++) this[_0x2b115f(0x7ea)] * _0x544f53 > 0x0 ? this['lastShotTimer'] = _0x1f858c['default']['Core'][_0x2b115f(0x6d2)]['time']['addEvent']({
                            'delay': this[_0x2b115f(0x7ea)] * _0x544f53,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x39bf7c = _0x2b115f;
                                this[_0x39bf7c(0xc82)]['SpawnAt'](this['positions'][_0x544f53]['x'], this[_0x39bf7c(0xc9f)][_0x544f53]['y'], this, _0x544f53);
                            }
                        }) : this[_0x2b115f(0xc82)]['SpawnAt'](this[_0x2b115f(0xc9f)][_0x544f53]['x'], this[_0x2b115f(0xc9f)][_0x544f53]['y'], this, _0x544f53);
                        this[_0x2b115f(0x162d)] != this[_0x2b115f(0x170c)] && (this['lastFiringInterval'] = this['PInterval'], this['ResetFiringTimer']());
                    } ['CleanUp']() {
                        const _0x19e38a = _0x220a84;
                        super['CleanUp']();
                        for (let _0x22b69e = 0x0; _0x22b69e < this[_0x19e38a(0x15d8)][_0x19e38a(0xed9)]; _0x22b69e++) this[_0x19e38a(0x15d8)][_0x22b69e]['destroy']();
                    }
                }
                _0x3230c1['W_FourSeasons2'] = _0x3c7ebf, _0x3230c1['default'] = _0x3c7ebf;
            };
