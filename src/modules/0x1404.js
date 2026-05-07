// Module 0x1404
// Args: _0x281350, _0x36d152, _0x2cdadb

export default (_0x281350, _0x36d152, _0x2cdadb) => {
                'use strict';
                const _0x511028 = a0_0x6932;
                var _0x3f108e = this && this['__importDefault'] || function(_0x1b864a) {
                    return _0x1b864a && _0x1b864a['__esModule'] ? _0x1b864a : {
                        'default': _0x1b864a
                    };
                };
                Object['defineProperty'](_0x36d152, '__esModule', {
                    'value': !0x0
                }), _0x36d152['B_MirageRobe2'] = void 0x0;
                const _0x4d3e6c = _0x3f108e(_0x2cdadb(0x15dd)),
                    _0x149080 = _0x3f108e(_0x2cdadb(0xdfbc)),
                    _0x5dbda3 = _0x3f108e(_0x2cdadb(0x5103)),
                    _0x4bf1fa = _0x3f108e(_0x2cdadb(0x5f07)),
                    _0x267241 = _0x3f108e(_0x2cdadb(0x5246));
                class _0x21b081 extends _0x267241['default'] {
                    constructor(_0x3bfa2b, _0x1ada30, _0x592257, _0x592614, _0x3206be) {
                        const _0xb4a062 = _0x511028;
                        super(_0x3bfa2b, _0x1ada30, _0x592257, _0x592614, _0x3206be), this[_0xb4a062(0xb1f)] = 0.3, this[_0xb4a062(0x51a)] = [
                            [0x444444, 0x4444ff, 0x444444, 0x4444ff],
                            [0xe0e0ff, 0xff, 0xe0e0ff, 0xff],
                            [0xe0e0ff, 0xff00ff, 0xe0e0ff, 0xff00ff],
                            [0xe0e0ff, 0x8800ff, 0xe0e0ff, 0x8800ff]
                        ];
                        let _0xc3994f = _0x4d3e6c['default'][_0x4bf1fa['default']['Core'][_0xb4a062(0x14d8)][_0xb4a062(0x1188)]];
                        _0xc3994f || (_0xc3994f = _0x4d3e6c[_0xb4a062(0xd2c)][_0x149080[_0xb4a062(0xd2c)][_0xb4a062(0x13d8)]]);
                        let _0x5328b7 = _0xc3994f[0x0],
                            _0x17d116 = null;
                        _0x17d116 = _0x5328b7[_0xb4a062(0x5cf)] ? _0x5328b7['skins'][_0x5328b7['currentSkinIndex'] % _0x5328b7[_0xb4a062(0x5cf)]['length']] : _0x5328b7;
                        const _0x410b76 = this['anims'][_0xb4a062(0x1756)](_0x17d116['textureName'], {
                            'start': 0x1,
                            'end': _0x17d116[_0xb4a062(0x3ff)],
                            'zeroPad': 0x2,
                            'prefix': _0x17d116['spriteName'][_0xb4a062(0xa0d)]('01.png', ''),
                            'suffix': '.png'
                        });
                        let _0x3a27b2 = _0x17d116[_0xb4a062(0xc43)] ? _0x17d116[_0xb4a062(0xc43)] : 0x8;
                        this[_0xb4a062(0x183e)][_0xb4a062(0x6a8)]({
                            'key': 'walk',
                            'frames': _0x410b76,
                            'frameRate': _0x3a27b2,
                            'repeat': -0x1
                        }), this[_0xb4a062(0x183e)][_0xb4a062(0x902)]('walk');
                        let _0x114e50 = this[_0xb4a062(0x51a)][this[_0xb4a062(0x19c4)] % this['tints'][_0xb4a062(0xed9)]];
                        this[_0xb4a062(0xb34)](_0x114e50[0x0], _0x114e50[0x1], _0x114e50[0x2], _0x114e50[0x3]);
                    }
                    get['TrueSpeed']() {
                        const _0x37ed4d = _0x511028;
                        let _0x2e568c = _0x5dbda3[_0x37ed4d(0xd2c)][_0x37ed4d(0x1300)] * _0x4bf1fa['default'][_0x37ed4d(0x1043)]['Player'][_0x37ed4d(0x1205)];
                        return this['weapon'][_0x37ed4d(0x712)] * _0x2e568c * this[_0x37ed4d(0xb1f)];
                    } ['OnRecycle']() {
                        const _0x558101 = _0x511028;
                        super[_0x558101(0x5ce)](), _0x4bf1fa['default'][_0x558101(0x1043)][_0x558101(0x1a91)][_0x558101(0x858)](_0x94b164 => {
                            const _0x2ba672 = _0x558101;
                            _0x94b164[_0x2ba672(0x18a7)] === _0x4bf1fa['default'][_0x2ba672(0x1043)][_0x2ba672(0x10f6)] && (_0x94b164[_0x2ba672(0x18a7)] = this);
                        }), this[_0x558101(0x429)](!0x1);
                    } ['OnHasHitAnObject'](_0x78ee59) {
                        const _0x42c4e8 = _0x511028;
                        _0x78ee59['isDead'] || (this[_0x42c4e8(0x3d8)]--, this[_0x42c4e8(0x3d8)] <= 0x0 && this['DeSpawn']());
                    }
                }
                _0x36d152['B_MirageRobe2'] = _0x21b081, _0x36d152['default'] = _0x21b081;
            };
