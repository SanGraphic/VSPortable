// Module 0x1665e
// Args: _0x5acb62, _0x19aa44, _0x10c27e

export default (_0x5acb62, _0x19aa44, _0x10c27e) => {
                'use strict';
                const _0x4f8027 = a0_0x6932;
                var _0x1f2ed8 = this && this['__importDefault'] || function(_0x2ada9a) {
                    const _0x51ce31 = _0x4f8027;
                    return _0x2ada9a && _0x2ada9a[_0x51ce31(0x16f1)] ? _0x2ada9a : {
                        'default': _0x2ada9a
                    };
                };
                Object['defineProperty'](_0x19aa44, '__esModule', {
                    'value': !0x0
                }), _0x19aa44['W_Guns3'] = void 0x0;
                const _0x278721 = _0x1f2ed8(_0x10c27e(0x5f07)),
                    _0x405b09 = _0x1f2ed8(_0x10c27e(0x54e3)),
                    _0x212455 = _0x1f2ed8(_0x10c27e(0xe49a)),
                    _0x17d16b = _0x1f2ed8(_0x10c27e(0x1fd7)),
                    _0x443005 = _0x1f2ed8(_0x10c27e(0x9b68));
                class _0xe6b0c0 extends _0x212455['default'] {
                    constructor(_0x15ce3b) {
                        const _0x4a9fe6 = _0x4f8027;
                        super(_0x15ce3b), this['rayAngle'] = 0x0, this['angleUnit'] = 0x0, this[_0x4a9fe6(0xb78)] = 0x0, this[_0x4a9fe6(0x1651)] = 0x0, this[_0x4a9fe6(0x12d4)] = 0x0, this['counterWeaponType1'] = _0x405b09['default'][_0x4a9fe6(0x1231)], this['counterWeaponType2'] = _0x405b09[_0x4a9fe6(0xd2c)][_0x4a9fe6(0xb18)], this[_0x4a9fe6(0x433)] = this['MakeChanceArray'](0x3e8), this['angleUnit'] = Phaser['Math'][_0x4a9fe6(0x54d)](0.5 / 0x10), this[_0x4a9fe6(0xa0a)] = new Array(), this[_0x4a9fe6(0x11ee)] = 0.5 * Math[_0x4a9fe6(0x1541)](_0x278721[_0x4a9fe6(0xd2c)][_0x4a9fe6(0x1043)]['scene'][_0x4a9fe6(0x12f9)]['width'] * _0x278721['default'][_0x4a9fe6(0x1043)][_0x4a9fe6(0x6d2)]['renderer'][_0x4a9fe6(0x173c)] + _0x278721['default']['Core']['scene'][_0x4a9fe6(0x12f9)]['height'] * _0x278721['default'][_0x4a9fe6(0x1043)]['scene'][_0x4a9fe6(0x12f9)][_0x4a9fe6(0x140e)]) / 0xc, this[_0x4a9fe6(0xb78)] = 0x0, this[_0x4a9fe6(0x1651)] = 0x4 * this[_0x4a9fe6(0x7ea)], this[_0x4a9fe6(0x114c)] = null;
                    } ['CheckArcanas']() {
                        const _0x50215a = _0x4f8027;
                        if (_0x278721[_0x50215a(0xd2c)]['Core'][_0x50215a(0x1884)]['ActiveArcanas']['indexOf'](_0x443005[_0x50215a(0xd2c)]['T01_AQUARIUS']) > -0x1) {
                            if (!_0x278721[_0x50215a(0xd2c)]['Core'][_0x50215a(0x164d)][_0x50215a(0x1e6)](_0x3cd74c => _0x3cd74c['bulletType'] === this[_0x50215a(0x19a6)])) {
                                let _0x23a861 = _0x278721['default'][_0x50215a(0x1043)][_0x50215a(0x117d)](this[_0x50215a(0x19a6)]);
                                for (this[_0x50215a(0x63c)] = _0x23a861; _0x23a861[_0x50215a(0x5e3)] < 0x8;) _0x23a861[_0x50215a(0x2ab)]();
                            }
                            if (!_0x278721['default'][_0x50215a(0x1043)][_0x50215a(0x164d)][_0x50215a(0x1e6)](_0x52308b => _0x52308b[_0x50215a(0x14e)] === this[_0x50215a(0xd21)])) {
                                let _0x444638 = _0x278721[_0x50215a(0xd2c)][_0x50215a(0x1043)]['AddHiddenWeapon'](this[_0x50215a(0xd21)]);
                                for (this[_0x50215a(0x139f)] = _0x444638; _0x444638[_0x50215a(0x5e3)] < 0x8;) _0x444638[_0x50215a(0x2ab)]();
                                _0x278721['default']['Core'][_0x50215a(0x6d2)]['time']['addEvent']({
                                    'delay': 0.5 * _0x444638['repeatInterval'],
                                    'callback': () => {
                                        const _0x5bf44 = _0x50215a;
                                        _0x444638[_0x5bf44(0x839)]();
                                    }
                                });
                            }
                        }
                        super['CheckArcanas']();
                    }
                    get['PAmount']() {
                        const _0x3e4d11 = _0x4f8027;
                        return Math['min'](0xa, _0x278721[_0x3e4d11(0xd2c)][_0x3e4d11(0x1043)]['Player'][_0x3e4d11(0x9b8)]) + this[_0x3e4d11(0x9b8)] + Math['min'](0xa, _0x278721[_0x3e4d11(0xd2c)]['Core']['Player'][_0x3e4d11(0x14e0)]);
                    }
                    get['PPower']() {
                        const _0x1de9a8 = _0x4f8027;
                        return Math[_0x1de9a8(0x1084)](0xa, _0x278721[_0x1de9a8(0xd2c)][_0x1de9a8(0x1043)][_0x1de9a8(0x10f6)]['power']) * (this[_0x1de9a8(0x31f)] + 0.1 * Math[_0x1de9a8(0x1084)](0xa, _0x278721[_0x1de9a8(0xd2c)][_0x1de9a8(0x1043)][_0x1de9a8(0x10f6)]['revivals']));
                    }
                    get['PSpeed']() {
                        const _0x1d82ee = _0x4f8027;
                        let _0x2bad39 = Math['min'](0x5, _0x278721[_0x1d82ee(0xd2c)]['Core']['Player'][_0x1d82ee(0x78e)] + 1.5 * (_0x278721[_0x1d82ee(0xd2c)]['Core'][_0x1d82ee(0x10f6)][_0x1d82ee(0x78e)] - 0x1)) * this[_0x1d82ee(0x78e)];
                        return _0x278721['default']['Core'][_0x1d82ee(0x10f6)]['sineSpeed'] && (_0x2bad39 *= _0x278721[_0x1d82ee(0xd2c)]['Core'][_0x1d82ee(0x10f6)][_0x1d82ee(0xa5d)][_0x1d82ee(0xb81)]), _0x2bad39;
                    } ['Fire']() {
                        const _0x4b3525 = _0x4f8027;
                        var _0x5c9947;
                        for (this[_0x4b3525(0x1031)] = Phaser['Math']['DegToRad'](0.5 / 0x20 * this['PSpeed']); this['rays'][_0x4b3525(0xed9)] < this[_0x4b3525(0x942)];) {
                            let _0x4551b0 = new Phaser[(_0x4b3525(0xbf2))]['Image'](_0x278721[_0x4b3525(0xd2c)]['Core'][_0x4b3525(0x6d2)], 0x0, 0x0, 'vfx', 'RaggiBeam.png')['setVisible'](!0x1)[_0x4b3525(0xf8e)](0.5, 0x0)[_0x4b3525(0xdab)](0.25);
                            this['rays'][_0x4b3525(0x1564)](_0x4551b0), _0x278721[_0x4b3525(0xd2c)]['Core'][_0x4b3525(0x6d2)]['add']['existing'](_0x4551b0);
                        }
                        let _0x4c704a = Phaser[_0x4b3525(0x24f)][_0x4b3525(0x54d)](0x168 / this[_0x4b3525(0x942)]);
                        for (let _0x55fe4a = 0x0; _0x55fe4a < this['PAmount']; _0x55fe4a++) {
                            let _0x49f6bb = this['rayAngle'] + _0x4c704a * _0x55fe4a,
                                _0x441e45 = Math['cos'](_0x49f6bb) * this[_0x4b3525(0x11ee)],
                                _0x16a4a6 = Math[_0x4b3525(0xc80)](_0x49f6bb) * this['pxUnit'];
                            this[_0x4b3525(0xa0a)][_0x55fe4a][_0x4b3525(0x183f)](!0x0)[_0x4b3525(0x726)](_0x278721['default'][_0x4b3525(0x1043)][_0x4b3525(0x10f6)]['x'] + _0x441e45, _0x278721['default'][_0x4b3525(0x1043)][_0x4b3525(0x10f6)]['y'] + _0x16a4a6)['setScale'](0.1, 0x1), this[_0x4b3525(0x970)](_0x441e45, _0x16a4a6, 0x0, _0x49f6bb);
                            for (let _0x2bce0e = 0x1; _0x2bce0e <= 0x8; _0x2bce0e++) {
                                let _0x541c9b = this[_0x4b3525(0x7ea)] * _0x2bce0e;
                                this['lastShotTimer'] = _0x278721[_0x4b3525(0xd2c)][_0x4b3525(0x1043)][_0x4b3525(0x6d2)][_0x4b3525(0x915)][_0x4b3525(0x12b8)]({
                                    'delay': _0x541c9b,
                                    'loop': !0x1,
                                    'callback': () => {
                                        const _0x3e663f = _0x4b3525;
                                        this[_0x3e663f(0x970)](_0x278721[_0x3e663f(0xd2c)][_0x3e663f(0x1043)]['Player']['x'] + _0x441e45, _0x278721[_0x3e663f(0xd2c)][_0x3e663f(0x1043)]['Player']['y'] + _0x16a4a6, _0x2bce0e, _0x49f6bb + 1.66 * this['angleUnit'] * _0x541c9b);
                                    }
                                });
                            }
                        }
                        this[_0x4b3525(0x170c)] > 0x8 * this['repeatInterval'] ? (_0x278721[_0x4b3525(0xd2c)]['Sound'][_0x4b3525(0x7f6)](_0x17d16b[_0x4b3525(0xd2c)]['Guns2'], {
                            'detune': -0x64,
                            'volume': 0.5
                        }, 0xc8, 0xa), null === (_0x5c9947 = this[_0x4b3525(0x660)]) || void 0x0 === _0x5c9947 || _0x5c9947[_0x4b3525(0x1a34)](), this[_0x4b3525(0x660)] = _0x278721[_0x4b3525(0xd2c)][_0x4b3525(0x1043)]['scene']['tweens']['add']({
                            'targets': this[_0x4b3525(0xa0a)],
                            'scaleX': 0.5 * this['PArea'],
                            'scaleY': 6.5,
                            'alpha': 0.9,
                            'yoyo': !0x0,
                            'duration': 0x4 * this['repeatInterval'],
                            'ease': 'Sine.easeInOut'
                        })) : (_0x278721['default']['Sound']['PlaySound'](_0x17d16b[_0x4b3525(0xd2c)][_0x4b3525(0x9e4)], {
                            'detune': -0x64,
                            'volume': 0.3
                        }, 0x64, 0x1), this['permaTween'] || (_0x278721[_0x4b3525(0xd2c)]['Sound']['PlaySound'](_0x17d16b['default']['Guns2'], {
                            'detune': -0x64,
                            'volume': 0.5
                        }, 0xc8, 0xa), this[_0x4b3525(0xa25)]())), this['lastFiringInterval'] != this['PInterval'] && (this[_0x4b3525(0x162d)] = this[_0x4b3525(0x170c)], this[_0x4b3525(0x839)]());
                    } ['PermaTween']() {
                        const _0x7d25ae = _0x4f8027;
                        this[_0x7d25ae(0x114c)] = _0x278721['default']['Core'][_0x7d25ae(0x6d2)]['tweens']['add']({
                            'targets': this['rays'],
                            'scaleX': 0.4 * this[_0x7d25ae(0x5f5)],
                            'scaleY': 6.5,
                            'alpha': 0.8,
                            'yoyo': !0x0,
                            'duration': 0x4 * this[_0x7d25ae(0x7ea)],
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x372130 = _0x7d25ae;
                                for (let _0x21c010 = 0x0; _0x21c010 < this[_0x372130(0xa0a)]['length']; _0x21c010++) this[_0x372130(0xa0a)][_0x21c010][_0x372130(0xe71)] = 0x1, this[_0x372130(0xa0a)][_0x21c010]['setScale'](0.5 * this['PArea'], 6.5);
                            },
                            'onComplete': () => {
                                const _0x534252 = _0x7d25ae;
                                this[_0x534252(0xa25)]();
                            }
                        });
                    } ['FireOneBullet'](_0x24e576, _0x2aa030, _0xf0b1db, _0x10901f) {
                        const _0x4a919b = _0x4f8027;
                        var _0x5eebda = this['pool'][_0x4a919b(0xada)](_0x24e576, _0x2aa030, this, _0xf0b1db);
                        return _0x5eebda && _0x5eebda['SetTarget'](_0x10901f), _0x5eebda;
                    } ['Update'](_0x4e364f) {
                        const _0x5298d3 = _0x4f8027;
                        super[_0x5298d3(0xa9f)](_0x4e364f), this['rayAngle'] += this[_0x5298d3(0x1031)] * _0x4e364f;
                        let _0x596fa4 = Phaser[_0x5298d3(0x24f)][_0x5298d3(0x54d)](0x168 / this[_0x5298d3(0x942)]);
                        for (let _0x3eaa66 = 0x0; _0x3eaa66 < this['rays']['length']; _0x3eaa66++) {
                            let _0x5692d0 = this[_0x5298d3(0xa3b)] + _0x596fa4 * _0x3eaa66,
                                _0xd42dec = Math[_0x5298d3(0xd7e)](_0x5692d0) * this['pxUnit'],
                                _0x51c24a = Math[_0x5298d3(0xc80)](_0x5692d0) * this['pxUnit'],
                                _0x220b8e = this[_0x5298d3(0xa0a)][_0x3eaa66];
                            _0x220b8e[_0x5298d3(0x35a)] = !0x0, _0x220b8e['x'] = _0x278721[_0x5298d3(0xd2c)][_0x5298d3(0x1043)]['Player']['x'] + _0xd42dec, _0x220b8e['y'] = _0x278721[_0x5298d3(0xd2c)]['Core'][_0x5298d3(0x10f6)]['y'] + _0x51c24a, _0x220b8e['angle'] = Phaser['Math'][_0x5298d3(0x1470)](_0x5692d0) - 0x5a, _0x220b8e['setDepth'](-_0x278721[_0x5298d3(0xd2c)][_0x5298d3(0x1043)]['scene'][_0x5298d3(0x12f9)][_0x5298d3(0x140e)]);
                        }
                    } ['LevelUp']() {
                        const _0x231c64 = _0x4f8027;
                        let _0x12f590 = super['LevelUp']();
                        return this[_0x231c64(0x63c)] && this[_0x231c64(0x63c)]['LevelUp'](), this[_0x231c64(0x139f)] && this[_0x231c64(0x139f)]['LevelUp'](), _0x12f590;
                    } ['ApplyLimitBreak'](_0x4a546e) {
                        const _0x2f99a1 = _0x4f8027;
                        let _0x3f0165 = super['ApplyLimitBreak'](_0x4a546e);
                        return this['counterWeapon1'] && this[_0x2f99a1(0x63c)]['ApplyLimitBreak'](_0x4a546e), this[_0x2f99a1(0x139f)] && this['counterWeapon2'][_0x2f99a1(0xf2d)](_0x4a546e), _0x3f0165;
                    } ['CleanUp']() {
                        const _0x4bbd4d = _0x4f8027;
                        super[_0x4bbd4d(0xdb0)]();
                        for (let _0x465c58 = 0x0; _0x465c58 < this[_0x4bbd4d(0xa0a)]['length']; _0x465c58++) this['rays'][_0x465c58][_0x4bbd4d(0x183f)](!0x1);
                    }
                }
                _0x19aa44['W_Guns3'] = _0xe6b0c0, _0x19aa44['default'] = _0xe6b0c0;
            };
