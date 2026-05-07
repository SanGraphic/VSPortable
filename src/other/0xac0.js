// Module 0xac0
// Args: _0x3b4a18, _0x56f559, _0xdf3d32

export default (_0x3b4a18, _0x56f559, _0xdf3d32) => {
                'use strict';
                const _0x4f91d1 = a0_0x6932;
                var _0x3301a3 = this && this['__importDefault'] || function(_0x515f6c) {
                    return _0x515f6c && _0x515f6c['__esModule'] ? _0x515f6c : {
                        'default': _0x515f6c
                    };
                };
                Object['defineProperty'](_0x56f559, '__esModule', {
                    'value': !0x0
                });
                const _0x5e6e9e = _0xdf3d32(0x18304),
                    _0x19267c = _0x3301a3(_0xdf3d32(0x15dd)),
                    _0x264283 = _0x3301a3(_0xdf3d32(0xdfbc)),
                    _0x5d1b4a = _0x3301a3(_0xdf3d32(0x9bda)),
                    _0x4c63aa = _0x3301a3(_0xdf3d32(0x1fd7)),
                    _0x4f0df4 = _0x3301a3(_0xdf3d32(0x5f07)),
                    _0x228d61 = _0x3301a3(_0xdf3d32(0xd1a1)),
                    _0x3d0451 = _0x3301a3(_0xdf3d32(0xdb1c));
                class _0x10e437 extends _0x3d0451['default'] {
                    constructor(_0x20c78b) {
                        super(_0x20c78b);
                    } ['OnInitCompleted']() {
                        const _0x386e88 = _0x4f91d1;
                        _0x4f0df4[_0x386e88(0xd2c)]['Core']['PlayerOptions']['SelectedInverse'] && _0x4f0df4['default'][_0x386e88(0x1043)][_0x386e88(0x1157)][_0x386e88(0x1649)](0xff2200);
                    } ['Create']() {
                        const _0x53cf38 = _0x4f91d1;
                        if (this['enemyPool'] = new _0x228d61['default'](this['scene'], _0x5d1b4a['default']['SKETAMARI']), this[_0x53cf38(0x1565)][_0x53cf38(0xada)](-0x1400, 0x2800), _0x4f0df4['default'][_0x53cf38(0x1043)][_0x53cf38(0x14d8)][_0x53cf38(0x1b12)][_0x53cf38(0x1303)](_0x264283[_0x53cf38(0xd2c)]['BOROS']) > -0x1) return;
                        this[_0x53cf38(0x554)] = 0x0, this[_0x53cf38(0x1943)] = 0x0;
                        let _0xbcab0b = -0x5000;
                        this['fixedCircle'] = new Phaser[(_0x53cf38(0x10d2))][(_0x53cf38(0xf29))](0x0, _0xbcab0b, 0xc8);
                        const _0x292141 = new Phaser['Geom'][(_0x53cf38(0xf29))](0x0, _0xbcab0b, 0xc8);
                        this[_0x53cf38(0xe09)] = this[_0x53cf38(0x6d2)][_0x53cf38(0x18bd)][_0x53cf38(0xe09)](), this[_0x53cf38(0x8b8)] = this['scene'][_0x53cf38(0x18bd)][_0x53cf38(0xe09)]();
                        let _0x30fc26 = [];
                        for (let _0x14cbdd = 0x0; _0x14cbdd <= 0x58; _0x14cbdd++) {
                            const _0x167459 = _0x14cbdd[_0x53cf38(0xcc6)]();
                            _0x30fc26[_0x53cf38(0x1564)]('fl' + _0x167459['padStart'](0x2, '0') + '.png');
                        }
                        for (let _0x2f91b6 = 0x0; _0x2f91b6 < 0x18; _0x2f91b6++) {
                            let _0x1cf779 = this['scene']['add']['image'](0x0, _0xbcab0b, 'vfx', Phaser['Math'][_0x53cf38(0x82a)][_0x53cf38(0x198c)](_0x30fc26));
                            this['group']['add'](_0x1cf779);
                        }
                        for (let _0x45fe66 = 0x0; _0x45fe66 < 0x18; _0x45fe66++) {
                            let _0x39af7f = this['scene'][_0x53cf38(0x18bd)]['image'](0x0, _0xbcab0b, 'vfx', Phaser[_0x53cf38(0x24f)]['RND'][_0x53cf38(0x198c)](_0x30fc26));
                            this[_0x53cf38(0x8b8)]['add'](_0x39af7f);
                        }
                        Phaser[_0x53cf38(0xbfe)]['PlaceOnCircle'](this[_0x53cf38(0xe09)][_0x53cf38(0x1a39)](), _0x292141), this[_0x53cf38(0x99a)] = this['scene']['tweens'][_0x53cf38(0x3a0)]({
                            'from': 0xc8,
                            'to': 0x0,
                            'duration': 0xbb8,
                            'delay': 0x7d0,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'onUpdate': () => {
                                const _0x2d03bf = _0x53cf38;
                                var _0x2eb701;
                                Phaser[_0x2d03bf(0xbfe)][_0x2d03bf(0xa2f)](this[_0x2d03bf(0xe09)][_0x2d03bf(0x1a39)](), {
                                    'x': 0x0,
                                    'y': _0xbcab0b
                                }, 0.02, null === (_0x2eb701 = this[_0x2d03bf(0x99a)]) || void 0x0 === _0x2eb701 ? void 0x0 : _0x2eb701['getValue']());
                            }
                        }), Phaser[_0x53cf38(0xbfe)][_0x53cf38(0x1a8d)](this[_0x53cf38(0x8b8)][_0x53cf38(0x1a39)](), _0x292141), this[_0x53cf38(0x15fa)] = this[_0x53cf38(0x6d2)]['tweens'][_0x53cf38(0x3a0)]({
                            'from': 0x96,
                            'to': 0x32,
                            'duration': 0xbb8,
                            'delay': 0x7d0,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'onUpdate': () => {
                                const _0x50c28e = _0x53cf38;
                                var _0x1134d9;
                                Phaser[_0x50c28e(0xbfe)][_0x50c28e(0xa2f)](this['group2']['getChildren'](), {
                                    'x': 0x0,
                                    'y': _0xbcab0b
                                }, 0.02, null === (_0x1134d9 = this['tween2']) || void 0x0 === _0x1134d9 ? void 0x0 : _0x1134d9[_0x50c28e(0x170f)]());
                            }
                        }), this[_0x53cf38(0x919)] = this['scene']['add'][_0x53cf38(0x4f6)](0x0, _0xbcab0b, 0xc8, 0xff00)['setOrigin'](0.5)['setAlpha'](0.1)['setVisible'](!0x0)[_0x53cf38(0x11c7)](_0x5e6e9e[_0x53cf38(0x10fc)]['ADD']), this[_0x53cf38(0x94a)] = this['scene']['tweens'][_0x53cf38(0x18bd)]({
                            'targets': this['GroundFx'],
                            'alpha': 0.05,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['Update'](_0x41dadc) {
                        const _0x1e96f5 = _0x4f91d1;
                        var _0x225234, _0x5a3d2c, _0x45cf92;
                        this[_0x1e96f5(0xe09)] && this['fixedCircle'] && (this[_0x1e96f5(0xb4c)][_0x1e96f5(0x1780)](_0x4f0df4[_0x1e96f5(0xd2c)][_0x1e96f5(0x1043)][_0x1e96f5(0x10f6)]['x'], _0x4f0df4['default'][_0x1e96f5(0x1043)][_0x1e96f5(0x10f6)]['y']) ? (this[_0x1e96f5(0x554)] += _0x41dadc, this['elapsedTime2'] += _0x41dadc, this[_0x1e96f5(0x1943)] >= 0x1f4 && (_0x4f0df4[_0x1e96f5(0xd2c)]['Core']['Player'][_0x1e96f5(0x7b2)](0x8, !0x0), this['elapsedTime2'] = 0x0), this[_0x1e96f5(0x554)] >= 0x2710 && (_0x19267c[_0x1e96f5(0xd2c)][_0x264283[_0x1e96f5(0xd2c)][_0x1e96f5(0x8ff)]][0x0][_0x1e96f5(0x187)] = !0x1, -0x1 == _0x4f0df4[_0x1e96f5(0xd2c)]['Core']['PlayerOptions'][_0x1e96f5(0x1b12)]['indexOf'](_0x264283['default'][_0x1e96f5(0x8ff)]) && (_0x4f0df4[_0x1e96f5(0xd2c)][_0x1e96f5(0x1043)][_0x1e96f5(0x14d8)]['UnlockedCharacters']['push'](_0x264283[_0x1e96f5(0xd2c)][_0x1e96f5(0x8ff)]), _0x4f0df4['default'][_0x1e96f5(0x1043)][_0x1e96f5(0x14d8)][_0x1e96f5(0x3ab)](), _0x4f0df4[_0x1e96f5(0xd2c)]['Sound']['PlaySound'](_0x4c63aa[_0x1e96f5(0xd2c)][_0x1e96f5(0x8d2)], {
                            'volume': 0x1,
                            'detune': -0x3e8,
                            'rate': 0.5
                        }), null === (_0x225234 = this[_0x1e96f5(0x99a)]) || void 0x0 === _0x225234 || _0x225234['stop'](), this['group'][_0x1e96f5(0x16ca)](!0x0, !0x0), null === (_0x5a3d2c = this[_0x1e96f5(0x15fa)]) || void 0x0 === _0x5a3d2c || _0x5a3d2c['stop'](), this[_0x1e96f5(0x8b8)][_0x1e96f5(0x16ca)](!0x0, !0x0), null === (_0x45cf92 = this['tween3']) || void 0x0 === _0x45cf92 || _0x45cf92[_0x1e96f5(0x1a34)](), this[_0x1e96f5(0x919)]['destroy']()))) : this[_0x1e96f5(0x554)] = 0x0);
                    } ['OnDestroy']() {}
                }
                _0x56f559['default'] = _0x10e437;
            };
