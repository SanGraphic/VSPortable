// Module 0xa2d9
// Args: _0x259c38, _0x3203e3, _0x54dee7

export default (_0x259c38, _0x3203e3, _0x54dee7) => {
                'use strict';
                const _0x35ca0a = a0_0x6932;
                var _0x3a60ee = this && this['__importDefault'] || function(_0x5ba379) {
                    const _0x2f0f47 = _0x35ca0a;
                    return _0x5ba379 && _0x5ba379[_0x2f0f47(0x16f1)] ? _0x5ba379 : {
                        'default': _0x5ba379
                    };
                };
                Object['defineProperty'](_0x3203e3, '__esModule', {
                    'value': !0x0
                }), _0x3203e3['W_FourSeasons'] = void 0x0;
                const _0x5f5c16 = _0x3a60ee(_0x54dee7(0x1fd7)),
                    _0x1cc890 = _0x3a60ee(_0x54dee7(0x54e3)),
                    _0x1f78ed = _0x3a60ee(_0x54dee7(0x5f07)),
                    _0x1acf92 = _0x3a60ee(_0x54dee7(0xe49a));
                class _0x11d00c extends _0x1acf92['default'] {
                    constructor(_0x3308fc) {
                        const _0x2306b7 = _0x35ca0a;
                        super(_0x3308fc), this['positions'] = [], this[_0x2306b7(0x1722)] = [0xc0, 0xc0, 0xb0, 0xa0, 0x90, 0x80, 0x70, 0x60, 0x40], this['angleUnit'] = Math['PI'] / 0x168, this[_0x2306b7(0xc9f)] = [{
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
                        for (let _0x225b5f = 0x0; _0x225b5f < 0x8; _0x225b5f++) {
                            let _0xfa71fc = _0x1f78ed[_0x2306b7(0xd2c)][_0x2306b7(0x1043)][_0x2306b7(0x6d2)]['add'][_0x2306b7(0x105b)](0x0, 0x0, 'vfx', 'bulletFourSeasons.png');
                            this[_0x2306b7(0x15d8)][_0x2306b7(0x1564)](_0xfa71fc);
                        }
                        this['_leafRT'] = new Array(), this[_0x2306b7(0x1652)] = new Array(), this[_0x2306b7(0x725)] = new Array(), this[_0x2306b7(0x135d)] = new Array();
                        const _0x127cc0 = [0x1e, 0x14, 0x18, 0xe];
                        for (let _0x804871 = 0x0; _0x804871 < 0x1; _0x804871++) {
                            var _0x513dec = _0x1f78ed[_0x2306b7(0xd2c)][_0x2306b7(0x1043)][_0x2306b7(0x6d2)]['make'][_0x2306b7(0x752)]({
                                'x': -Number['MAX_SAFE_INTEGER'],
                                'y': -Number[_0x2306b7(0x1aaa)],
                                'width': 0x10,
                                'height': 0x10
                            });
                            _0x513dec['saveTexture']('fourSeasonLeaf' + _0x804871), this[_0x2306b7(0xd74)][_0x2306b7(0x1564)](_0x513dec);
                        }
                        for (let _0x34658d = 0x0; _0x34658d < 0x1; _0x34658d++) {
                            var _0x3ed9c2 = _0x1f78ed['default'][_0x2306b7(0x1043)]['scene'][_0x2306b7(0x8f2)][_0x2306b7(0x752)]({
                                'x': -Number[_0x2306b7(0x1aaa)],
                                'y': -Number['MAX_SAFE_INTEGER'],
                                'width': 0x10,
                                'height': 0x10
                            });
                            _0x3ed9c2[_0x2306b7(0x3c0)]('fourSeasonSnow' + _0x34658d), this[_0x2306b7(0x725)]['push'](_0x3ed9c2);
                        }
                        var _0x4f397b = new Array();
                        for (let _0x3619fd = 0x0; _0x3619fd < 0x14; _0x3619fd++) {
                            var _0x265d8e = 'leaf' + String(_0x3619fd)['padStart'](0x4, '0') + '.png';
                            _0x4f397b[_0x2306b7(0x1564)]({
                                'key': 'vfx',
                                'frame': _0x265d8e
                            });
                        }
                        for (let _0x2f25aa = 0x0; _0x2f25aa < 0x1; _0x2f25aa++)(_0x460b59 = _0x1f78ed[_0x2306b7(0xd2c)]['Core']['scene'][_0x2306b7(0x18bd)][_0x2306b7(0x105b)](-Number['MAX_SAFE_INTEGER'], -Number[_0x2306b7(0x1aaa)], 'vfx', '')[_0x2306b7(0xf8e)](0x0))[_0x2306b7(0x183e)][_0x2306b7(0x6a8)]({
                            'key': 'spin',
                            'frames': _0x4f397b,
                            'frameRate': _0x127cc0[_0x2f25aa % 0x4],
                            'repeat': -0x1
                        }), _0x460b59['anims']['play']('spin'), this[_0x2306b7(0x1652)]['push'](_0x460b59);
                        _0x4f397b = new Array();
                        for (let _0x294ef3 = 0x0; _0x294ef3 < 0x7; _0x294ef3++) _0x265d8e = 'snowb' + String(_0x294ef3)[_0x2306b7(0x7e1)](0x4, '0') + '.png', _0x4f397b['push']({
                            'key': 'vfx',
                            'frame': _0x265d8e
                        });
                        for (let _0x2b00a2 = 0x0; _0x2b00a2 < 0x1; _0x2b00a2++) {
                            var _0x460b59;
                            (_0x460b59 = _0x1f78ed['default']['Core']['scene']['add']['sprite'](-Number['MAX_SAFE_INTEGER'], -Number['MAX_SAFE_INTEGER'], 'vfx', '')[_0x2306b7(0xf8e)](0x0))[_0x2306b7(0x183e)][_0x2306b7(0x6a8)]({
                                'key': 'spin',
                                'frames': _0x4f397b,
                                'frameRate': _0x127cc0[_0x2b00a2 % 0x4],
                                'repeat': -0x1
                            }), _0x460b59['anims'][_0x2306b7(0x902)]('spin'), this['_snowSprite'][_0x2306b7(0x1564)](_0x460b59);
                        }
                        this['explodeOnExpire'] = !0x1, this[_0x2306b7(0xdfc)] = _0x1cc890[_0x2306b7(0xd2c)]['RAYEXPLOSION'];
                    }
                    get['PPower']() {
                        const _0x28ac21 = _0x35ca0a;
                        let _0xa35701 = (this[_0x28ac21(0x31f)] + 0.001 * this['PDuration']) * this[_0x28ac21(0x942)];
                        return _0x1f78ed[_0x28ac21(0xd2c)]['Core']['Player']['sineMight'] ? Math[_0x28ac21(0x1084)](0xa, (_0x1f78ed['default'][_0x28ac21(0x1043)]['Arcanas'][_0x28ac21(0x18f8)] + _0x1f78ed[_0x28ac21(0xd2c)][_0x28ac21(0x1043)][_0x28ac21(0x10f6)][_0x28ac21(0x31f)]) * _0x1f78ed[_0x28ac21(0xd2c)][_0x28ac21(0x1043)]['Player']['sineMight'][_0x28ac21(0xb81)]) * _0xa35701 + _0x1f78ed['default'][_0x28ac21(0x1043)]['Arcanas'][_0x28ac21(0x1117)] : Math[_0x28ac21(0x1084)](0xa, _0x1f78ed[_0x28ac21(0xd2c)][_0x28ac21(0x1043)][_0x28ac21(0x1884)][_0x28ac21(0x18f8)] + _0x1f78ed['default'][_0x28ac21(0x1043)][_0x28ac21(0x10f6)][_0x28ac21(0x31f)]) * _0xa35701 + _0x1f78ed['default'][_0x28ac21(0x1043)]['Arcanas'][_0x28ac21(0x1117)];
                    } ['Set4Positions']() {
                        const _0x314a01 = _0x35ca0a;
                        let _0x27d2ae = Math[_0x314a01(0x1084)](this['level'], this['cornerOffsets'][_0x314a01(0xed9)] - 0x1),
                            _0x953f5e = this[_0x314a01(0x1722)][_0x27d2ae],
                            _0x519136 = 0.5 * _0x1f78ed['default'][_0x314a01(0x1043)][_0x314a01(0x6d2)][_0x314a01(0x12f9)]['width'],
                            _0xdd6734 = 0.5 * _0x1f78ed[_0x314a01(0xd2c)]['Core']['scene']['renderer']['height'];
                        this[_0x314a01(0xc9f)][0x0]['x'] = _0x1f78ed[_0x314a01(0xd2c)][_0x314a01(0x1043)][_0x314a01(0x10f6)]['x'] - _0x519136 + _0x953f5e, this[_0x314a01(0xc9f)][0x0]['y'] = _0x1f78ed[_0x314a01(0xd2c)][_0x314a01(0x1043)][_0x314a01(0x10f6)]['y'] - _0xdd6734 + _0x953f5e, this[_0x314a01(0xc9f)][0x1]['x'] = _0x1f78ed[_0x314a01(0xd2c)][_0x314a01(0x1043)]['Player']['x'] + _0x519136 - _0x953f5e, this[_0x314a01(0xc9f)][0x1]['y'] = _0x1f78ed[_0x314a01(0xd2c)]['Core']['Player']['y'] - _0xdd6734 + _0x953f5e, this['positions'][0x2]['x'] = _0x1f78ed[_0x314a01(0xd2c)]['Core']['Player']['x'] - _0x519136 + _0x953f5e, this[_0x314a01(0xc9f)][0x2]['y'] = _0x1f78ed['default'][_0x314a01(0x1043)][_0x314a01(0x10f6)]['y'] + _0xdd6734 - _0x953f5e, this['positions'][0x3]['x'] = _0x1f78ed['default']['Core'][_0x314a01(0x10f6)]['x'] + _0x519136 - _0x953f5e, this['positions'][0x3]['y'] = _0x1f78ed[_0x314a01(0xd2c)][_0x314a01(0x1043)][_0x314a01(0x10f6)]['y'] + _0xdd6734 - _0x953f5e;
                    } ['MakeLevelOne']() {
                        const _0x41a55e = _0x35ca0a;
                        super['MakeLevelOne'](), this['angles'] = [], this['angles'][_0x41a55e(0x1564)](0x2 * Math['PI'] * 0x0), this['angles']['push'](0x2 * Math['PI'] * 0.11), this[_0x41a55e(0x137c)]['push'](0x2 * Math['PI'] * 0.22), this[_0x41a55e(0x137c)]['push'](0x2 * Math['PI'] * 0.33), this['angles'][_0x41a55e(0x1564)](0x2 * Math['PI'] * 0.44), this['angles'][_0x41a55e(0x1564)](0x2 * Math['PI'] * 0.55), this['angles'][_0x41a55e(0x1564)](0x2 * Math['PI'] * 0.66), this['angles'][_0x41a55e(0x1564)](0x2 * Math['PI'] * 0.77), this[_0x41a55e(0x137c)]['push'](0x2 * Math['PI'] * 0.88), this[_0x41a55e(0x17f7)] = !0x1, this[_0x41a55e(0x59e)]();
                        for (let _0x570fb6 = 0x0; _0x570fb6 < this['orbs'][_0x41a55e(0xed9)]; _0x570fb6++) {
                            const _0x6bbe40 = this['orbs'][_0x570fb6];
                            _0x6bbe40[_0x41a55e(0x183f)](!0x0), _0x6bbe40['setPosition'](_0x1f78ed[_0x41a55e(0xd2c)][_0x41a55e(0x1043)]['Player']['x'], _0x1f78ed['default'][_0x41a55e(0x1043)]['Player']['y']), _0x1f78ed[_0x41a55e(0xd2c)][_0x41a55e(0x1043)][_0x41a55e(0x6d2)][_0x41a55e(0x12a1)][_0x41a55e(0x18bd)]({
                                'targets': _0x6bbe40,
                                'x': this[_0x41a55e(0xc9f)][_0x570fb6 % 0x4]['x'],
                                'y': this['positions'][_0x570fb6 % 0x4]['y'],
                                'duration': 0x1f4,
                                'onComplete': () => {
                                    const _0x41f80d = _0x41a55e;
                                    this[_0x41f80d(0x17f7)] = !0x0;
                                }
                            });
                        }
                    } ['Update'](_0x3f169d) {
                        const _0x8f5484 = _0x35ca0a;
                        super[_0x8f5484(0xa9f)](_0x3f169d), this['Set4Positions']();
                        for (let _0x3a6902 = 0x0; _0x3a6902 < this['_leafRT']['length']; _0x3a6902++) {
                            const _0x5a9fd8 = this['_leafRT'][_0x3a6902];
                            _0x5a9fd8['clear'](), _0x5a9fd8[_0x8f5484(0x4a6)](this[_0x8f5484(0x1652)][_0x3a6902], 0x0, 0x0);
                        }
                        for (let _0x15f1fd = 0x0; _0x15f1fd < this[_0x8f5484(0x725)]['length']; _0x15f1fd++) {
                            const _0x206990 = this[_0x8f5484(0x725)][_0x15f1fd];
                            _0x206990[_0x8f5484(0x159)](), _0x206990['draw'](this[_0x8f5484(0x135d)][_0x15f1fd], 0x0, 0x0);
                        }
                        if (this['canSpin']) {
                            let _0x466043 = 0x20;
                            for (let _0x41a07c = 0x0; _0x41a07c < this['angles']['length']; _0x41a07c++) this['angles'][_0x41a07c] += this['angleUnit'] * _0x3f169d;
                            for (let _0x1d63d1 = 0x0; _0x1d63d1 < this['orbs']['length']; _0x1d63d1++) {
                                const _0x1aa076 = this[_0x8f5484(0x15d8)][_0x1d63d1];
                                _0x1aa076['x'] = this['positions'][_0x1d63d1 % 0x4]['x'] + Math[_0x8f5484(0xd7e)](this[_0x8f5484(0x137c)][_0x1d63d1]) * _0x466043, _0x1aa076['y'] = this[_0x8f5484(0xc9f)][_0x1d63d1 % 0x4]['y'] + Math['cos'](this[_0x8f5484(0x137c)][_0x1d63d1 + 0x1]) * _0x466043;
                            }
                        }
                    } ['Fire']() {
                        const _0x3a4510 = _0x35ca0a;
                        _0x1f78ed['default'][_0x3a4510(0x1267)]['PlaySound'](_0x5f5c16['default']['Seasons1'], {
                            'volume': 0x1
                        }, 0x7d0, 0x1);
                        for (let _0x4dc9e8 = 0x0; _0x4dc9e8 < 0x4; _0x4dc9e8++) this['repeatInterval'] * _0x4dc9e8 > 0x0 ? this['lastShotTimer'] = _0x1f78ed[_0x3a4510(0xd2c)]['Core'][_0x3a4510(0x6d2)]['time'][_0x3a4510(0x12b8)]({
                            'delay': this['repeatInterval'] * _0x4dc9e8,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x58b767 = _0x3a4510;
                                this[_0x58b767(0xc82)]['SpawnAt'](this[_0x58b767(0xc9f)][_0x4dc9e8]['x'], this[_0x58b767(0xc9f)][_0x4dc9e8]['y'], this, _0x4dc9e8);
                            }
                        }) : this['pool'][_0x3a4510(0xada)](this[_0x3a4510(0xc9f)][_0x4dc9e8]['x'], this['positions'][_0x4dc9e8]['y'], this, _0x4dc9e8);
                        this['lastFiringInterval'] != this[_0x3a4510(0x170c)] && (this['lastFiringInterval'] = this[_0x3a4510(0x170c)], this[_0x3a4510(0x839)]());
                    } ['CleanUp']() {
                        const _0x43b7d6 = _0x35ca0a;
                        super[_0x43b7d6(0xdb0)]();
                        for (let _0x20d778 = 0x0; _0x20d778 < this['orbs']['length']; _0x20d778++) this['orbs'][_0x20d778][_0x43b7d6(0x16ca)]();
                    }
                }
                _0x3203e3['W_FourSeasons'] = _0x11d00c, _0x3203e3['default'] = _0x11d00c;
            };
