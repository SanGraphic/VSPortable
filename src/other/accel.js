// Module 0x12112
// Args: _0x4225b7, _0x4d1c0e, _0x598161

export default (_0x4225b7, _0x4d1c0e, _0x598161) => {
                'use strict';
                const _0x55c4c8 = a0_0x6932;
                var _0x54a8bd = this && this['__importDefault'] || function(_0x4a7114) {
                    const _0x5e1c62 = _0x55c4c8;
                    return _0x4a7114 && _0x4a7114[_0x5e1c62(0x16f1)] ? _0x4a7114 : {
                        'default': _0x4a7114
                    };
                };
                Object['defineProperty'](_0x4d1c0e, '__esModule', {
                    'value': !0x0
                });
                const _0xb2521b = _0x598161(0x16c14),
                    _0x5c1926 = _0x54a8bd(_0x598161(0xccae)),
                    _0x5edd98 = _0x54a8bd(_0x598161(0x5f07)),
                    _0x2af2c3 = _0x54a8bd(_0x598161(0x169b4)),
                    _0xbd5b81 = _0x54a8bd(_0x598161(0x1fd7)),
                    _0x4f88e1 = _0x54a8bd(_0x598161(0x5103)),
                    _0xed4bb = _0x54a8bd(_0x598161(0x6851)),
                    _0x5ac10c = _0x54a8bd(_0x598161(0x1347)),
                    _0x5eed8a = _0x54a8bd(_0x598161(0x12fcd)),
                    _0x24aa35 = _0x54a8bd(_0x598161(0x9b68)),
                    _0x19319a = _0x54a8bd(_0x598161(0x15866));
                class _0x34fa70 extends Phaser['Scene'] {
                    constructor(_0x4773ae = {
                        'key': _0x2af2c3['default']['UI_arcanaMainScene']
                    }) {
                        super(_0x4773ae), this['particles'] = [];
                    } ['preload']() {
                        const _0x165bc4 = _0x55c4c8;
                        _0x5edd98[_0x165bc4(0xd2c)][_0x165bc4(0x7c2)]();
                    }
                    static['GetRandomArcanaName']() {
                        const _0xc339db = _0x55c4c8;
                        return Phaser['Math']['RND'][_0xc339db(0x6a5)](0x0, 0x15)[_0xc339db(0xcc6)]()[_0xc339db(0x7e1)](0x2, '0') + '.png';
                    } ['GetArcanaFrameName'](_0x30346e = 0x0) {
                        const _0x416d15 = _0x55c4c8;
                        let _0x1dd1ed = _0x30346e['toString']();
                        return _0x1dd1ed = _0x1dd1ed[_0x416d15(0x7e1)](0x2, '0') + '.png', _0x1dd1ed;
                    } ['AddTitleBackground'](_0x55aa41, _0x46a4d8, _0x2170f9, _0x9448ab) {
                        const _0x508e7c = _0x55c4c8;
                        this[_0x508e7c(0x431)] = new _0xb2521b[(_0x508e7c(0x1a31))](this, _0x5c1926['default'][_0x508e7c(0x1acd)], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x2170f9,
                            'height': _0x9448ab
                        }), this[_0x508e7c(0x431)]['setPosition'](_0x55aa41, _0x46a4d8), this['background']['setOrigin'](0.5), this[_0x508e7c(0x431)][_0x508e7c(0x8a2)](_0x4f88e1[_0x508e7c(0xd2c)][_0x508e7c(0x15db)]), this['add'][_0x508e7c(0x1a88)](this[_0x508e7c(0x431)]), this['background'][_0x508e7c(0x8a2)](-0.2, -0.1), this['background'][_0x508e7c(0x9b5)](0xb4), this[_0x508e7c(0xd9b)] = this['tweens'][_0x508e7c(0x18bd)]({
                            'targets': this['background'],
                            'scale': 0x1,
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear'
                        });
                    } ['AddBackground'](_0x5ea0c7, _0x1e04e0) {
                        const _0x25551d = _0x55c4c8;
                        this['background'] = new _0xb2521b['NineSlice'](this, _0x5c1926[_0x25551d(0xd2c)][_0x25551d(0x1acd)], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x5ea0c7,
                            'height': _0x1e04e0
                        }), this['background'][_0x25551d(0x726)](0.5 * this[_0x25551d(0x12f9)]['width'], 0.5 * this['renderer'][_0x25551d(0x140e)]), this['background']['setOrigin'](0.5), this[_0x25551d(0x431)][_0x25551d(0x8a2)](_0x4f88e1[_0x25551d(0xd2c)][_0x25551d(0x15db)]), this['add'][_0x25551d(0x1a88)](this[_0x25551d(0x431)]), this[_0x25551d(0x431)]['setScale'](-0.2, -0.1), this['background']['setAngle'](0xb4), this[_0x25551d(0xd9b)] = this['tweens'][_0x25551d(0x18bd)]({
                            'targets': this['background'],
                            'scale': 0x1,
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear'
                        });
                    } ['AddBackParticles']() {
                        const _0xaa8d1d = _0x55c4c8;
                        this[_0xaa8d1d(0x1e2)] = this['add'][_0xaa8d1d(0x1791)]('randomazzo'), this['pfxEmitter'] = this['ParticlesManager'][_0xaa8d1d(0x14c0)]({
                            'frame': {
                                'frames': ['back.png']
                            },
                            'y': -0x60,
                            'x': {
                                'min': 0x0,
                                'max': this['renderer']['width']
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0xfa0,
                            'speedY': {
                                'min': 0x64,
                                'max': 0xc8
                            },
                            'scale': {
                                'min': 0x1,
                                'max': 0x2,
                                'start': 0x2,
                                'end': 0x0
                            },
                            'quantity': 0x1,
                            'tint': 0x444444
                        }), this[_0xaa8d1d(0xb8c)] = this[_0xaa8d1d(0x1e2)]['createEmitter']({
                            'frame': {
                                'frames': ['back.png']
                            },
                            'y': this[_0xaa8d1d(0x12f9)][_0xaa8d1d(0x140e)] + 0x60,
                            'x': {
                                'min': 0x0,
                                'max': this[_0xaa8d1d(0x12f9)]['width']
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0xfa0,
                            'speedY': {
                                'min': -0x64,
                                'max': -0xc8
                            },
                            'scale': {
                                'min': 0x1,
                                'max': 0x2,
                                'start': 0x2,
                                'end': 0x0
                            },
                            'quantity': 0x1,
                            'tint': 0x444444
                        });
                    } ['MakeRingAt'](_0x115c5b, _0x1e54b3) {
                        const _0x49cdde = _0x55c4c8;
                        this[_0x49cdde(0x1990)] || (this['container'] = this[_0x49cdde(0x18bd)][_0x49cdde(0xe09)]());
                        let _0x52b16a = 0x2 * Math['PI'] / 0x1e;
                        for (let _0x57a308 = 0x0; _0x57a308 < 0x1e; _0x57a308++) {
                            let _0x5c6f03 = _0x115c5b + 0xfa * Math[_0x49cdde(0xd7e)](_0x52b16a * _0x57a308),
                                _0x4ac744 = _0x1e54b3 + 0xfa * Math[_0x49cdde(0xc80)](_0x52b16a * _0x57a308),
                                _0x5b5f92 = this['add'][_0x49cdde(0x568)](_0x5c6f03, _0x4ac744, 'randomazzo', 'deback.png');
                            _0x5b5f92[_0x49cdde(0x19b0)] = 0xff00ff, this[_0x49cdde(0x1990)][_0x49cdde(0x18bd)](_0x5b5f92);
                        }
                        this[_0x49cdde(0x12a1)]['add']({
                            'targets': this[_0x49cdde(0x1990)]['children'][_0x49cdde(0x10c5)],
                            'scale': 0x2,
                            'yoyo': !0x0,
                            'duration': 0x2710,
                            'repeat': !0x0
                        });
                    } ['AddParticles']() {
                        const _0x144412 = _0x55c4c8;
                        this[_0x144412(0x1791)] = [];
                        for (let _0x11bd79 = 0x0; _0x11bd79 < 0x3c; _0x11bd79++) {
                            let _0x219f03 = 0.5 * this['renderer'][_0x144412(0x173c)],
                                _0x366150 = 0.5 * this[_0x144412(0x12f9)]['height'],
                                _0x12e9c0 = new _0xed4bb[(_0x144412(0xd2c))](this, _0x219f03, _0x366150, _0x34fa70[_0x144412(0x119a)]());
                            _0x12e9c0[_0x144412(0xd6f)](0x28 + 0x5 * _0x11bd79, 0xc), this[_0x144412(0x12a1)][_0x144412(0x18bd)]({
                                'targets': _0x12e9c0,
                                'angle': 0x168,
                                'duration': 0xc8 + 0x32 * _0x11bd79,
                                'repeat': -0x1
                            }), _0x12e9c0['x'] = _0x219f03, _0x12e9c0['y'] = _0x366150;
                            var _0x55b5f1 = Math['random'](),
                                _0x3eeef8 = Math[_0x144412(0x9ad)](),
                                _0x10cf6d = Math[_0x144412(0x9ad)](),
                                _0x1fd285 = _0x55b5f1 > 0.5 ? 0x1 : -0x1;
                            _0x12e9c0['accel'] = {
                                'x': 0x0,
                                'y': 0.1
                            }, _0x12e9c0['initialVelocity'] = {
                                'x': 0xa * _0x1fd285 * _0x3eeef8 * _0x3eeef8,
                                'y': -0x3 - 0xa * _0x10cf6d
                            }, _0x12e9c0[_0x144412(0xf4e)] = {
                                'x': _0x12e9c0['initialVelocity']['x'],
                                'y': _0x12e9c0['initialVelocity']['y']
                            }, this['particles'][_0x144412(0x1564)](_0x12e9c0);
                        }
                    } ['AddStrips']() {
                        const _0x2481e0 = _0x55c4c8;
                        for (let _0x181438 = 0x0; _0x181438 < 0x16; _0x181438++) {
                            let _0x544b29 = this[_0x2481e0(0x12f9)]['width'] / 0x16 * _0x181438,
                                _0x453699 = -0x2f,
                                _0x3b04eb = new _0xed4bb['default'](this, _0x544b29, _0x453699, _0x34fa70['GetRandomArcanaName']());
                            this['tweens'][_0x2481e0(0x18bd)]({
                                'targets': _0x3b04eb,
                                'angle': 0x168,
                                'duration': 0x1f4 + 0x32 * _0x181438,
                                'y': this[_0x2481e0(0x12f9)][_0x2481e0(0x140e)] + 0x2f,
                                'repeat': 0x1
                            }), this['time'][_0x2481e0(0x12b8)]({
                                'delay': 0x32 * _0x181438,
                                'callback': () => {
                                    _0x3b04eb['Spin'](0x32, 0xc);
                                }
                            });
                        }
                        for (let _0x119bd4 = 0x0; _0x119bd4 < 0x16; _0x119bd4++) {
                            let _0x31945e = this[_0x2481e0(0x12f9)][_0x2481e0(0x173c)] / 0x16 * _0x119bd4,
                                _0x31ed29 = -0x2f,
                                _0x578cb3 = new _0xed4bb['default'](this, _0x31945e, _0x31ed29, _0x34fa70['GetRandomArcanaName']());
                            this['tweens'][_0x2481e0(0x18bd)]({
                                'targets': _0x578cb3,
                                'angle': 0x168,
                                'duration': 0x1f4 + 0x32 * _0x119bd4,
                                'y': this[_0x2481e0(0x12f9)][_0x2481e0(0x140e)] + 0x2f,
                                'repeat': 0x1
                            }), this[_0x2481e0(0x915)]['addEvent']({
                                'delay': 0x32 * _0x119bd4,
                                'callback': () => {
                                    _0x578cb3['Spin'](0x32, 0xc);
                                }
                            });
                        }
                        for (let _0x1f5d4c = 0x0; _0x1f5d4c < 0x16; _0x1f5d4c++) {
                            let _0x234ed6 = this[_0x2481e0(0x12f9)][_0x2481e0(0x173c)] / 0x16 * (0x16 - _0x1f5d4c),
                                _0x788c23 = -0x2f,
                                _0x4ebc66 = new _0xed4bb[(_0x2481e0(0xd2c))](this, _0x234ed6, _0x788c23, _0x34fa70[_0x2481e0(0x119a)]());
                            this[_0x2481e0(0x12a1)][_0x2481e0(0x18bd)]({
                                'targets': _0x4ebc66,
                                'angle': 0x168,
                                'duration': 0x1f4 + 0x32 * _0x1f5d4c,
                                'y': this['renderer']['height'] + 0x2f,
                                'repeat': 0x1
                            }), this[_0x2481e0(0x915)]['addEvent']({
                                'delay': 0x32 * _0x1f5d4c,
                                'callback': () => {
                                    _0x4ebc66['Spin'](0x32, 0xc);
                                }
                            });
                        }
                    } ['AddAllRings']() {
                        const _0x1279dc = _0x55c4c8;
                        this['rings'] = [];
                        let _0x339aa7 = new _0x5ac10c[(_0x1279dc(0xd2c))](this, 0x0, 0x0, 0x1e, 0xfa, -0.0002, 0x1, 0x2710, 0xff00ff),
                            _0x51a789 = new _0x5ac10c['default'](this, 0x0, 0x0, 0x1e, 0xc8, 0x0, 0x1, 0x2ee0, 0xffff00),
                            _0x148501 = new _0x5ac10c[(_0x1279dc(0xd2c))](this, 0x0, 0x0, 0x1e, 0x96, -0.0002, 0x1, 0x1f40, 0xff00ff),
                            _0x4fe84b = new _0x5ac10c[(_0x1279dc(0xd2c))](this, 0x0, 0x0, 0x10, 0x64, 0x0, 0x1, 0x2710, 0xff00ff),
                            _0x234ee6 = new _0x5ac10c['default'](this, this[_0x1279dc(0x12f9)][_0x1279dc(0x173c)], 0x0, 0x1e, 0xc8, 0.0002, 1.5, 0x2710, 0xff00),
                            _0x36f177 = new _0x5ac10c[(_0x1279dc(0xd2c))](this, 0x0, this[_0x1279dc(0x12f9)][_0x1279dc(0x140e)], 0x1e, 0xc8, 0.0002, 1.5, 0x2710, 0xff00),
                            _0x4510bf = new _0x5ac10c['default'](this, 0x0, this['renderer']['height'], 0x11, 0x64, 0.0003, 1.5, 0x1f40, 0xff00),
                            _0x5d67f2 = new _0x5ac10c[(_0x1279dc(0xd2c))](this, this[_0x1279dc(0x12f9)][_0x1279dc(0x173c)], this[_0x1279dc(0x12f9)]['height'], 0x1e, 0x96, 0.0002, 1.5, 0x2710, 0xff00);
                        this['rings']['push'](_0x339aa7), this[_0x1279dc(0x9af)][_0x1279dc(0x1564)](_0x51a789), this[_0x1279dc(0x9af)][_0x1279dc(0x1564)](_0x148501), this['rings']['push'](_0x4fe84b), this[_0x1279dc(0x9af)][_0x1279dc(0x1564)](_0x234ee6), this['rings']['push'](_0x36f177), this['rings'][_0x1279dc(0x1564)](_0x4510bf), this[_0x1279dc(0x9af)]['push'](_0x5d67f2);
                    } ['AddInfoPanel']() {
                        const _0x2a3437 = _0x55c4c8;
                        this['infoPanel'] = new _0x5eed8a[(_0x2a3437(0xd2c))](this, 0.25 * this['renderer'][_0x2a3437(0x173c)], 0x1f4, 0.5 * this[_0x2a3437(0x12f9)][_0x2a3437(0x173c)], 0xa0), this['infoPanel']['AssignData'](_0x24aa35[_0x2a3437(0xd2c)]['T06_SARABANDE']), this['add'][_0x2a3437(0x1a88)](this[_0x2a3437(0x481)]), this[_0x2a3437(0x481)]['setScale'](0x0);
                    } ['AddBlackFader']() {
                        const _0x1bed37 = _0x55c4c8;
                        this[_0x1bed37(0x1826)] = this[_0x1bed37(0x18bd)][_0x1bed37(0x105b)](0x0, 0x0, 'vfx', 'blackDot.png')[_0x1bed37(0x8a2)](this['renderer']['width'], this[_0x1bed37(0x12f9)][_0x1bed37(0x140e)])['setAlpha'](0x0)[_0x1bed37(0xf8e)](0x0), this['tweens'][_0x1bed37(0x18bd)]({
                            'targets': this[_0x1bed37(0x1826)],
                            'alpha': 0.5,
                            'duration': 0x3e8
                        });
                    } ['AddHeader']() {
                        const _0x4ec212 = _0x55c4c8;
                        this[_0x4ec212(0x1752)] = new Phaser['GameObjects'][(_0x4ec212(0x1ae9))](this, 0.5 * this['renderer']['width'], 0xa0, _0x5edd98[_0x4ec212(0xd2c)]['Lang'][_0x4ec212(0xb10)]('randomazzo_title'), {})[_0x4ec212(0x8a2)](0x2 * _0x4f88e1[_0x4ec212(0xd2c)][_0x4ec212(0x15db)])[_0x4ec212(0xf8e)](0.5)[_0x4ec212(0xb4a)](0xa), _0x5edd98['default'][_0x4ec212(0x1f1)]['scaleToMaxFast'](this['header'], !0x1, 0xb4), this[_0x4ec212(0xb02)] = new Phaser[(_0x4ec212(0xbf2))]['Text'](this, 0.5 * this['renderer'][_0x4ec212(0x173c)], 0xa0, '20/22', {})[_0x4ec212(0x8a2)](0x2 * _0x4f88e1['default'][_0x4ec212(0x15db)])['setOrigin'](0x1, 0.5)['setDepth'](0xa), _0x5edd98[_0x4ec212(0xd2c)]['Lang']['scaleToMaxFast'](this[_0x4ec212(0xb02)], !0x1, 0xc8), this['randoIcon'] = new Phaser[(_0x4ec212(0xbf2))]['Image'](this, 0.5 * this[_0x4ec212(0x12f9)]['width'], 0xa0, 'items', 'Tarots.png')[_0x4ec212(0x8a2)](0x2 * _0x4f88e1[_0x4ec212(0xd2c)]['PixelScale'])['setOrigin'](0x0, 0.5)[_0x4ec212(0xb4a)](0xa), this['add'][_0x4ec212(0x1a88)](this[_0x4ec212(0x1752)]), this['add']['existing'](this[_0x4ec212(0xb02)]), this[_0x4ec212(0x18bd)]['existing'](this[_0x4ec212(0xdf8)]), this[_0x4ec212(0xb02)]['x'] = 0.5 * this[_0x4ec212(0x12f9)]['width'] + 0.5 * this[_0x4ec212(0x358)] - 0x10, this['randoIcon']['x'] = 0.5 * this[_0x4ec212(0x12f9)]['width'] - 0.5 * this[_0x4ec212(0x358)] + 0x10;
                    } ['AddCursor']() {
                        const _0x684358 = _0x55c4c8;
                        this[_0x684358(0x881)] = new _0xb2521b[(_0x684358(0x1a31))](this, _0x5c1926['default'][_0x684358(0xb39)], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': 0x40,
                            'height': 0x58
                        }), this['highlightCursor'][_0x684358(0xf8e)](0x0, 0x0)['setScale'](_0x4f88e1[_0x684358(0xd2c)][_0x684358(0x15db)]), this[_0x684358(0x18bd)]['existing'](this['highlightCursor']), this['highlightCursor']['setVisible'](!0x1);
                    } ['AddAllMajorArcanas']() {
                        const _0x4c3dac = _0x55c4c8;
                        let _0x2ada30 = [];
                        for (const _0x38da7f in _0x19319a[_0x4c3dac(0xd2c)]) _0x19319a[_0x4c3dac(0xd2c)][_0x38da7f]['major'] && _0x2ada30[_0x4c3dac(0x1564)](_0x19319a['default'][_0x38da7f]);
                        let _0x2d0fcd = _0x2ada30[_0x4c3dac(0x9d4)](_0x2f316b => _0x2f316b[_0x4c3dac(0x18d6)] && !_0x2f316b['hidden'])[_0x4c3dac(0xed9)],
                            _0x3db178 = _0x2ada30[_0x4c3dac(0x9d4)](_0x275730 => !_0x275730[_0x4c3dac(0x187)])[_0x4c3dac(0xed9)];
                        this['howMany'][_0x4c3dac(0x758)] = _0x2d0fcd + '/' + _0x3db178, this[_0x4c3dac(0xa10)] = [], this[_0x4c3dac(0x7a7)] = [], this['availableNotObtainedCards'] = [];
                        let _0x5c61a2 = 0x0,
                            _0x70efe9 = 0x0;
                        for (_0x70efe9 = 0x0; _0x70efe9 < _0x2ada30[_0x4c3dac(0xed9)]; _0x70efe9++) {
                            let _0x3dfd4c = 0.5 * this[_0x4c3dac(0x12f9)][_0x4c3dac(0x173c)],
                                _0x107d44 = 0.5 * this['renderer']['height'],
                                _0x38758b = new _0xed4bb[(_0x4c3dac(0xd2c))](this, _0x3dfd4c, _0x107d44, _0x2ada30[_0x70efe9][_0x4c3dac(0x8e3)], _0x2ada30[_0x70efe9]['arcanaType']);
                            _0x38758b['on']('pointerdown', () => {
                                const _0xe068f0 = _0x4c3dac;
                                this[_0xe068f0(0x1090)](_0x38758b);
                            }, this), _0x2ada30[_0x70efe9]['unlocked'] && !_0x2ada30[_0x70efe9]['hidden'] && (this[_0x4c3dac(0x162b)] || (this[_0x4c3dac(0x162b)] = _0x38758b, _0x5c61a2 = _0x70efe9), this[_0x4c3dac(0x915)][_0x4c3dac(0x12b8)]({
                                'delay': _0x70efe9 % 0x8 * 0x1e,
                                'callback': () => {
                                    const _0x46c353 = _0x4c3dac;
                                    _0x38758b[_0x46c353(0x1aeb)](0x64);
                                }
                            }), this['availableCards'][_0x4c3dac(0x1564)](_0x38758b), -0x1 === _0x5edd98[_0x4c3dac(0xd2c)]['Core']['Arcanas'][_0x4c3dac(0x15e7)][_0x4c3dac(0x1303)](_0x2ada30[_0x70efe9]['arcanaType']) && this['availableNotObtainedCards']['push'](_0x38758b)), this['tweens'][_0x4c3dac(0x18bd)]({
                                'targets': _0x38758b,
                                'x': 0.5 * this['cardWidth'] + this[_0x4c3dac(0x5c3)]['x'] + this[_0x4c3dac(0x1163)] * (_0x70efe9 % 0x8) + this['cardPadding'] * (_0x70efe9 % 0x8),
                                'y': 0.5 * this['cardHeight'] + this[_0x4c3dac(0x5c3)]['y'] + this['cardHeight'] * Math[_0x4c3dac(0xe07)](_0x70efe9 / 0x8) + this['cardPadding'] * (_0x70efe9 / 0x8),
                                'duration': 0xf0
                            }), this['cards']['push'](_0x38758b), _0x5edd98['default']['Core'][_0x4c3dac(0x1884)]['ActiveArcanas'][_0x4c3dac(0x1303)](_0x2ada30[_0x70efe9][_0x4c3dac(0x11c2)]) > -0x1 && _0x38758b['setTint'](0x0, 0x222222, 0x444444, 0x888888);
                        }
                        this[_0x4c3dac(0x18d0)] = new _0xb2521b['NineSlice'](this, _0x5c1926[_0x4c3dac(0xd2c)]['OptionsButton'], {
                            'x': 0.5 * this[_0x4c3dac(0x1163)] + this['cardOffset']['x'] + this['cardWidth'] * (_0x70efe9 % 0x8) + this[_0x4c3dac(0x1cb)] * (_0x70efe9 % 0x8),
                            'y': 0.5 * this['cardHeight'] + this['cardOffset']['y'] + this['cardHeight'] * Math[_0x4c3dac(0xe07)](_0x70efe9 / 0x8) + this['cardPadding'] * (_0x70efe9 / 0x8),
                            'width': 0.5 * this[_0x4c3dac(0x1163)],
                            'height': 0.35 * this[_0x4c3dac(0xcad)]
                        })['setScale'](0x2 * _0x4f88e1[_0x4c3dac(0xd2c)][_0x4c3dac(0x15db)])['setOrigin'](0.5), this[_0x4c3dac(0x18bd)][_0x4c3dac(0x1a88)](this['RandomButton']), this[_0x4c3dac(0xff9)] = new Phaser[(_0x4c3dac(0xbf2))]['Text'](this, this[_0x4c3dac(0x18d0)]['x'], this[_0x4c3dac(0x18d0)]['y'], '?', {})['setOrigin'](0.5, 0.5)[_0x4c3dac(0x8a2)](1.5 * _0x4f88e1[_0x4c3dac(0xd2c)]['PixelScale']), _0x5edd98['default'][_0x4c3dac(0x1f1)][_0x4c3dac(0x14a8)](this['RandomText'], !0x1, 0xc8), this[_0x4c3dac(0x18bd)][_0x4c3dac(0x1a88)](this[_0x4c3dac(0xff9)]), _0x70efe9 += 0x1, this['OkButton'] = new _0xb2521b[(_0x4c3dac(0x1a31))](this, _0x5c1926[_0x4c3dac(0xd2c)]['GreenButton'], {
                            'x': 0.5 * this[_0x4c3dac(0x1163)] + this[_0x4c3dac(0x5c3)]['x'] + this[_0x4c3dac(0x1163)] * (_0x70efe9 % 0x8) + this['cardPadding'] * (_0x70efe9 % 0x8),
                            'y': 0.5 * this[_0x4c3dac(0xcad)] + this[_0x4c3dac(0x5c3)]['y'] + this[_0x4c3dac(0xcad)] * Math[_0x4c3dac(0xe07)](_0x70efe9 / 0x8) + this[_0x4c3dac(0x1cb)] * (_0x70efe9 / 0x8),
                            'width': 0.5 * this[_0x4c3dac(0x1163)],
                            'height': 0.35 * this['cardHeight']
                        })[_0x4c3dac(0x8a2)](0x2 * _0x4f88e1[_0x4c3dac(0xd2c)][_0x4c3dac(0x15db)])['setOrigin'](0.5), this[_0x4c3dac(0x18bd)][_0x4c3dac(0x1a88)](this[_0x4c3dac(0xd7d)]), this['OkText'] = new Phaser['GameObjects'][(_0x4c3dac(0x1ae9))](this, this[_0x4c3dac(0xd7d)]['x'], this['OkButton']['y'], _0x5edd98[_0x4c3dac(0xd2c)][_0x4c3dac(0x1f1)][_0x4c3dac(0xb10)]('newItem_get'), {})[_0x4c3dac(0xf8e)](0.5, 0.5)['setScale'](1.5 * _0x4f88e1[_0x4c3dac(0xd2c)][_0x4c3dac(0x15db)]), _0x5edd98['default'][_0x4c3dac(0x1f1)]['scaleToMaxFast'](this['OkText'], !0x1, 0x23), this['add'][_0x4c3dac(0x1a88)](this['OkText']), 0x0 != _0x5c61a2 ? _0x2ada30[_0x5c61a2] && (_0x5edd98[_0x4c3dac(0xd2c)][_0x4c3dac(0x1043)][_0x4c3dac(0x14d8)]['SelectedArcana'] = _0x5c61a2, this['first'] = _0x2ada30[_0x5c61a2]) : this['Highlighted'] = this['first'], 0x0 != _0x5edd98[_0x4c3dac(0xd2c)][_0x4c3dac(0x1043)][_0x4c3dac(0x14d8)]['SelectedArcana'] ? _0x2ada30[_0x5edd98[_0x4c3dac(0xd2c)][_0x4c3dac(0x1043)][_0x4c3dac(0x14d8)][_0x4c3dac(0xd4e)]] && (_0x5c61a2 = _0x5edd98['default'][_0x4c3dac(0x1043)][_0x4c3dac(0x14d8)][_0x4c3dac(0xd4e)], this[_0x4c3dac(0x162b)] = _0x2ada30[_0x5c61a2]) : 0x0 != _0x5c61a2 && _0x2ada30[_0x5c61a2] && (_0x5edd98['default'][_0x4c3dac(0x1043)][_0x4c3dac(0x14d8)]['SelectedArcana'] = _0x5c61a2), _0x2ada30[_0x5c61a2] ? this[_0x4c3dac(0x162b)] = _0x2ada30[_0x5c61a2] : this[_0x4c3dac(0x162b)] = _0x2ada30[0x0], this[_0x4c3dac(0x1779)] = this['first'];
                    } ['StartEnableInputEvent']() {
                        const _0x418d60 = _0x55c4c8;
                        this[_0x418d60(0x915)]['addEvent']({
                            'callback': () => {
                                const _0x3b4119 = _0x418d60;
                                this['OnSelectionChange'](), this[_0x3b4119(0x881)][_0x3b4119(0x183f)](!0x0), this[_0x3b4119(0x481)]['Show'](), this[_0x3b4119(0x13e5)]();
                            },
                            'delay': 0x1f4
                        });
                    } ['InitData']() {
                        const _0x21531c = _0x55c4c8;
                        this[_0x21531c(0x15da)] = new Array(), this[_0x21531c(0x1163)] = 0x43, this[_0x21531c(0xcad)] = 0x60, this[_0x21531c(0x1cb)] = 0x4, this[_0x21531c(0x5c3)] = {
                            'x': 0.5 * (this['renderer'][_0x21531c(0x173c)] - 0x218 - 0x7 * this[_0x21531c(0x1cb)]),
                            'y': 0.5 * (this['renderer']['height'] - 0x120 - 0x2 * this['cardPadding'])
                        }, this[_0x21531c(0x358)] = 0x8 * this[_0x21531c(0x1163)] + 0x9 * this['cardPadding'], this[_0x21531c(0x384)] = 0x3 * this['cardHeight'] + 0x3 * this['cardPadding'];
                    } ['create']() {
                        const _0x2512f0 = _0x55c4c8;
                        _0x5edd98[_0x2512f0(0xd2c)][_0x2512f0(0x1267)][_0x2512f0(0x7f6)](_0xbd5b81['default']['LevelUp'], {
                            'volume': 0.4,
                            'detune': -0x1f4
                        }), _0x5edd98[_0x2512f0(0xd2c)]['Sound'][_0x2512f0(0x7f6)](_0xbd5b81[_0x2512f0(0xd2c)]['LevelUp'], {
                            'volume': 0.4,
                            'detune': -0x190
                        }), _0x5edd98[_0x2512f0(0xd2c)][_0x2512f0(0x1267)][_0x2512f0(0x7f6)](_0xbd5b81[_0x2512f0(0xd2c)][_0x2512f0(0x2ab)], {
                            'volume': 0.4,
                            'detune': -0x190,
                            'rate': 0.7
                        }), this[_0x2512f0(0x5e5)](), this[_0x2512f0(0x1556)](), this[_0x2512f0(0x31e)](), this['AddAllRings'](), this['AddStrips'](), this[_0x2512f0(0x198a)](0.5 * this[_0x2512f0(0x12f9)][_0x2512f0(0x173c)], 0xa0, this['bgWidth'] - 0x8, 0x30), this[_0x2512f0(0xe01)](this[_0x2512f0(0x358)], this['bgHeight']), this['AddInfoPanel'](), this[_0x2512f0(0x7b9)](), this[_0x2512f0(0x1536)](), this[_0x2512f0(0x143c)](), this[_0x2512f0(0x113b)]();
                    } ['update'](_0x485c74, _0x780134) {
                        const _0xcc0544 = _0x55c4c8;
                        for (let _0x3355cd = 0x0; _0x3355cd < this[_0xcc0544(0x9af)][_0xcc0544(0xed9)]; _0x3355cd++) this['rings'][_0x3355cd][_0xcc0544(0xa9f)](_0x780134);
                        _0x5edd98['default'][_0xcc0544(0x1043)][_0xcc0544(0x69e)][_0xcc0544(0x7ec)];
                    } ['enableInput']() {
                        const _0x1454de = _0x55c4c8;
                        this['MakeUIGrid'](), this['OkButton'][_0x1454de(0x76d)](), this[_0x1454de(0xd7d)]['on']('pointerdown', () => this[_0x1454de(0x910)]()), this[_0x1454de(0x18d0)]['setInteractive'](), this['RandomButton']['on']('pointerdown', () => this['OnRandomClicked']());
                        for (let _0x506a1a = 0x0; _0x506a1a < this['cards'][_0x1454de(0xed9)]; _0x506a1a++) this[_0x1454de(0xa10)][_0x506a1a][_0x1454de(0x76d)]();
                    } ['DisableInput']() {
                        const _0x2cfb4a = _0x55c4c8;
                        this['OkButton'][_0x2cfb4a(0xb7c)](), this['OkButton'][_0x2cfb4a(0x596)](), this[_0x2cfb4a(0x18d0)]['removeInteractive'](), this['RandomButton']['removeAllListeners']();
                        for (let _0x10dd81 = 0x0; _0x10dd81 < this[_0x2cfb4a(0xa10)][_0x2cfb4a(0xed9)]; _0x10dd81++) {
                            const _0x1179ed = this[_0x2cfb4a(0xa10)][_0x10dd81];
                            _0x1179ed[_0x2cfb4a(0xb7c)](), _0x1179ed['removeAllListeners']();
                        }
                    } ['OnConfirmClicked']() {
                        const _0x19f558 = _0x55c4c8;
                        if (_0x19319a[_0x19f558(0xd2c)][this[_0x19f558(0x1779)]['arcanaType']][_0x19f558(0x18d6)] && !_0x19319a[_0x19f558(0xd2c)][this[_0x19f558(0x1779)][_0x19f558(0x11c2)]][_0x19f558(0x187)]) {
                            if (_0x5edd98['default']['Core']['Arcanas'][_0x19f558(0x15e7)][_0x19f558(0x1303)](this['Highlighted']['arcanaType']) > -0x1) _0x5edd98[_0x19f558(0xd2c)]['Sound']['PlaySound'](_0xbd5b81[_0x19f558(0xd2c)][_0x19f558(0x1b0f)]);
                            else {
                                var _0x10db86 = this['cards']['find'](_0x3240e6 => _0x3240e6['arcanaType'] === this[_0x19f558(0x1779)]['arcanaType']);
                                _0x5edd98[_0x19f558(0xd2c)]['Core'][_0x19f558(0x14d8)][_0x19f558(0xd4e)] = this['cards']['indexOf'](_0x10db86), this[_0x19f558(0x14cb)](), _0x5edd98['default']['Core'][_0x19f558(0x1884)][_0x19f558(0x15e7)]['push'](this[_0x19f558(0x1779)][_0x19f558(0x11c2)]), _0x5edd98[_0x19f558(0xd2c)]['Core'][_0x19f558(0x1884)]['TriggerArcana'](this[_0x19f558(0x1779)]['arcanaType']), _0x5edd98[_0x19f558(0xd2c)]['Sound'][_0x19f558(0x7f6)](_0xbd5b81[_0x19f558(0xd2c)][_0x19f558(0x2b6)]), _0x5edd98[_0x19f558(0xd2c)]['Core'][_0x19f558(0x10f6)][_0x19f558(0x185c)](0x1f4), _0x5edd98['default'][_0x19f558(0x1043)][_0x19f558(0x69e)][_0x19f558(0x184c)]();
                            }
                        } else _0x5edd98[_0x19f558(0xd2c)]['Sound'][_0x19f558(0x7f6)](_0xbd5b81['default'][_0x19f558(0x1b0f)]);
                    } ['OnRandomClicked']() {
                        const _0x210d2f = _0x55c4c8;
                        this[_0x210d2f(0x14cb)](), _0x5edd98['default']['Sound'][_0x210d2f(0x7f6)](_0xbd5b81[_0x210d2f(0xd2c)]['ClickIn']), this['gridScene']['ToggleCursorsVisibility'](!0x1), this['highlightCursor'][_0x210d2f(0x183f)](!0x1), this[_0x210d2f(0x12a1)][_0x210d2f(0x18bd)]({
                            'targets': [this[_0x210d2f(0xd7d)], this[_0x210d2f(0x15a3)], this[_0x210d2f(0x18d0)], this[_0x210d2f(0xff9)]],
                            'scale': 0x0,
                            'duration': 0xc8
                        });
                        for (let _0x16e90a = 0x0; _0x16e90a < this[_0x210d2f(0xa10)]['length']; _0x16e90a++) {
                            const _0x43d275 = this[_0x210d2f(0xa10)][_0x16e90a];
                            _0x43d275['open'] && _0x43d275['Reveal']();
                        }
                        this[_0x210d2f(0x12a1)]['add']({
                            'targets': this['cards'],
                            'delay': this['tweens'][_0x210d2f(0x29e)](0x14, {
                                'grid': [0x8, 0x3],
                                'from': 'first',
                                'ease': 'cubic.out'
                            }),
                            'x': 0.5 * this['renderer'][_0x210d2f(0x173c)],
                            'y': 0.5 * this['renderer'][_0x210d2f(0x140e)] + 0.5 * this[_0x210d2f(0xcad)],
                            'duration': 0x64,
                            'onComplete': () => {
                                const _0x434f99 = _0x210d2f;
                                this[_0x434f99(0x15a3)]['x'] = this[_0x434f99(0xd7d)]['x'] = this['OkButton']['x'] - 0.5 * this['cardWidth'];
                                let _0x5149fe = Phaser[_0x434f99(0x24f)][_0x434f99(0x82a)][_0x434f99(0x198c)](this['availableNotObtainedCards']);
                                this['Highlighted'] = _0x5149fe, this[_0x434f99(0x481)]['AssignData'](this['Highlighted']['arcanaType']);
                                let _0x1578b8 = [...this[_0x434f99(0xa10)][_0x434f99(0x9d4)](_0x2516b3 => _0x2516b3[_0x434f99(0x11c2)] != _0x5149fe[_0x434f99(0x11c2)])];
                                this['tweens'][_0x434f99(0x18bd)]({
                                    'targets': this[_0x434f99(0xa10)],
                                    'angle': this['tweens'][_0x434f99(0x29e)](0x6, {
                                        'start': -0x42,
                                        'from': 'first',
                                        'ease': 'cubic.out'
                                    }),
                                    'duration': 0xc8,
                                    'onStart': () => {
                                        const _0x5c69d4 = _0x434f99;
                                        for (let _0x3ed808 = 0x0; _0x3ed808 < _0x1578b8[_0x5c69d4(0xed9)]; _0x3ed808++) {
                                            const _0x28d9bb = _0x1578b8[_0x3ed808];
                                            _0x28d9bb[_0x5c69d4(0xf8e)](0.5, 0x1), _0x28d9bb['y'] += 0.5 * this[_0x5c69d4(0xcad)];
                                        }
                                    }
                                }), this['tweens'][_0x434f99(0x18bd)]({
                                    'targets': _0x5149fe,
                                    'angle': 0x0,
                                    'y': _0x5149fe['y'] - this[_0x434f99(0xcad)],
                                    'duration': 0xc8,
                                    'delay': 0xc8,
                                    'onStart': () => {
                                        const _0x1e6fd1 = _0x434f99;
                                        _0x5149fe[_0x1e6fd1(0x1aeb)]();
                                    }
                                }), this[_0x434f99(0x12a1)][_0x434f99(0x18bd)]({
                                    'targets': this[_0x434f99(0xd7d)],
                                    'scale': 0x2,
                                    'duration': 0xc8,
                                    'completeDelay': 0xc8,
                                    'onComplete': () => {
                                        const _0x103fa5 = _0x434f99;
                                        this[_0x103fa5(0x15a3)]['setScale'](1.5), this['OkButton'][_0x103fa5(0x76d)](), this['OkButton']['removeAllListeners'](), this['OkButton']['on']('pointerdown', () => this[_0x103fa5(0x910)]()), this[_0x103fa5(0xa42)]();
                                    }
                                });
                            }
                        });
                    } ['OnCardClicked'](_0x260ccd) {
                        const _0x400de2 = _0x55c4c8;
                        this[_0x400de2(0x1779)] = _0x260ccd, this['infoPanel']['AssignData'](this[_0x400de2(0x1779)][_0x400de2(0x11c2)]), this[_0x400de2(0x849)]();
                    } ['OnSelectionChange']() {
                        const _0x173898 = _0x55c4c8;
                        var _0x11d0eb, _0x53bf0e = this['cards'][_0x173898(0x1e6)](_0x5abd16 => _0x5abd16[_0x173898(0x11c2)] === this[_0x173898(0x1779)]['arcanaType']);
                        _0x53bf0e && this[_0x173898(0x881)][_0x173898(0x726)](_0x53bf0e['x'] - 0.5 * this['highlightCursor'][_0x173898(0xe75)], _0x53bf0e['y'] - 0.5 * this['highlightCursor']['displayHeight']);
                        let _0x128414 = _0x5edd98[_0x173898(0xd2c)]['Core'][_0x173898(0x69e)][_0x173898(0x7ec)];
                        null === (_0x11d0eb = _0x128414['UI_grid']) || void 0x0 === _0x11d0eb || _0x11d0eb['SelectGameObject'](_0x53bf0e), _0x128414[_0x173898(0x938)] = _0x53bf0e, _0x5edd98[_0x173898(0xd2c)]['Core']['SceneManager']['scene'][_0x173898(0x5d8)](_0x128414), this['infoPanel'][_0x173898(0x6e4)](this['Highlighted']['arcanaType']);
                    } ['MakeUIGrid']() {
                        const _0x6094c0 = _0x55c4c8;
                        this[_0x6094c0(0x8ca)] = _0x5edd98[_0x6094c0(0xd2c)]['Core'][_0x6094c0(0x69e)]['UI_overlayScene'], this[_0x6094c0(0x8ca)]['MakeUIGrid'](0x8, 0x3, !0x1);
                        let _0x480258 = 0x0;
                        for (_0x480258 = 0x0; _0x480258 < this['cards'][_0x6094c0(0xed9)]; _0x480258++) {
                            const _0x454fc4 = this[_0x6094c0(0xa10)][_0x480258];
                            this[_0x6094c0(0x8ca)][_0x6094c0(0x8cc)][_0x6094c0(0x16a8)](_0x480258 % 0x8, Math[_0x6094c0(0xe07)](_0x480258 / 0x8), _0x454fc4);
                        }
                        this[_0x6094c0(0x8ca)]['UI_grid']['SetContents'](0x6, 0x2, this['RandomButton']), this[_0x6094c0(0x8ca)]['UI_grid']['SetContents'](0x7, 0x2, this['OkButton']), this[_0x6094c0(0x8ca)][_0x6094c0(0x1475)](!0x0), this[_0x6094c0(0x8ca)]['UI_grid']['SelectGameObject'](this[_0x6094c0(0xd7d)]), this['gridScene'][_0x6094c0(0x938)] = this[_0x6094c0(0xd7d)], _0x5edd98['default']['Core'][_0x6094c0(0x69e)][_0x6094c0(0x6d2)]['bringToTop'](this['gridScene']), this['gridScene'][_0x6094c0(0x1ad4)] = () => {};
                    } ['OkOnlyGrid']() {
                        const _0x3c46d5 = _0x55c4c8;
                        this[_0x3c46d5(0x8ca)][_0x3c46d5(0x110c)](), this['gridScene']['MakeUIGrid'](0x1, 0x1, !0x1), this[_0x3c46d5(0x8ca)][_0x3c46d5(0x8cc)][_0x3c46d5(0x16a8)](0x0, 0x0, this[_0x3c46d5(0xd7d)]), this[_0x3c46d5(0x8ca)]['ToggleCursorsVisibility'](!0x0), this['gridScene'][_0x3c46d5(0x8cc)][_0x3c46d5(0xb55)](this[_0x3c46d5(0xd7d)]), this['gridScene'][_0x3c46d5(0x938)] = this['OkButton'], _0x5edd98[_0x3c46d5(0xd2c)]['Core'][_0x3c46d5(0x69e)][_0x3c46d5(0x6d2)][_0x3c46d5(0x5d8)](this[_0x3c46d5(0x8ca)]), this[_0x3c46d5(0x8ca)][_0x3c46d5(0x1ad4)] = () => {};
                    }
                }
                _0x4d1c0e['default'] = _0x34fa70;
            };
