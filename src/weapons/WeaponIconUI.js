// Module 0x18645
// Args: _0x42de54, _0x1c9a13, _0x4b6fce

export default (_0x42de54, _0x1c9a13, _0x4b6fce) => {
                'use strict';
                const _0x121565 = a0_0x6932;
                var _0x1eecc9 = this && this['__createBinding'] || (Object['create'] ? function(_0x49b16b, _0x5c940f, _0x2a4d1f, _0x1d1abf) {
                        const _0x34f1a7 = a0_0x6932;
                        void 0x0 === _0x1d1abf && (_0x1d1abf = _0x2a4d1f);
                        var _0x4bd2c0 = Object['getOwnPropertyDescriptor'](_0x5c940f, _0x2a4d1f);
                        _0x4bd2c0 && !('get' in _0x4bd2c0 ? !_0x5c940f['__esModule'] : _0x4bd2c0['writable'] || _0x4bd2c0['configurable']) || (_0x4bd2c0 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x5c940f[_0x2a4d1f];
                            }
                        }), Object['defineProperty'](_0x49b16b, _0x1d1abf, _0x4bd2c0);
                    } : function(_0x4714aa, _0x98cc75, _0x50e413, _0x339156) {
                        void 0x0 === _0x339156 && (_0x339156 = _0x50e413), _0x4714aa[_0x339156] = _0x98cc75[_0x50e413];
                    }),
                    _0x5c40da = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x250e56, _0x4da656) {
                        Object['defineProperty'](_0x250e56, 'default', {
                            'enumerable': !0x0,
                            'value': _0x4da656
                        });
                    } : function(_0xd9542e, _0x588a0e) {
                        const _0x5dc457 = _0x121565;
                        _0xd9542e[_0x5dc457(0xd2c)] = _0x588a0e;
                    }),
                    _0x199368 = this && this['__importStar'] || function(_0x5e9691) {
                        const _0xddb14 = _0x121565;
                        if (_0x5e9691 && _0x5e9691[_0xddb14(0x16f1)]) return _0x5e9691;
                        var _0x4718f0 = {};
                        if (null != _0x5e9691) {
                            for (var _0x94c4b4 in _0x5e9691) 'default' !== _0x94c4b4 && Object['prototype']['hasOwnProperty'][_0xddb14(0xff0)](_0x5e9691, _0x94c4b4) && _0x1eecc9(_0x4718f0, _0x5e9691, _0x94c4b4);
                        }
                        return _0x5c40da(_0x4718f0, _0x5e9691), _0x4718f0;
                    },
                    _0x51b4da = this && this['__importDefault'] || function(_0x4043f9) {
                        return _0x4043f9 && _0x4043f9['__esModule'] ? _0x4043f9 : {
                            'default': _0x4043f9
                        };
                    };
                Object['defineProperty'](_0x1c9a13, '__esModule', {
                    'value': !0x0
                }), _0x1c9a13['WeaponIconUI'] = void 0x0;
                const _0x557281 = _0x199368(_0x4b6fce(0x5f07)),
                    _0x1336ca = _0x51b4da(_0x4b6fce(0x54e3)),
                    _0x3bfcea = _0x51b4da(_0x4b6fce(0x3107)),
                    _0x468129 = _0x51b4da(_0x4b6fce(0x5103)),
                    _0x2b22ce = _0x51b4da(_0x4b6fce(0xe199)),
                    _0x254f7b = _0x51b4da(_0x4b6fce(0x1715a));
                class _0x17130b {
                    constructor() {
                        this['level'] = 0x0, this['isWeapon'] = !0x0;
                    } ['setVisible'](_0x58d65c) {
                        const _0xc4d536 = _0x121565;
                        this['image'][_0xc4d536(0x183f)](_0x58d65c);
                    }
                }
                _0x1c9a13['WeaponIconUI'] = _0x17130b;
                class _0x3fd9e8 {
                    constructor(_0xcda831) {
                        const _0x12cddc = _0x121565;
                        this[_0x12cddc(0x416)] = new Array(), this['WeaponIcons'] = new Array(), this['PowerUpIcons'] = new Array(), this[_0x12cddc(0xe35)] = new Array(), this[_0x12cddc(0xea4)] = new Array(), this['xIncrease'] = 0x10, this['yOffset'] = 0x12, this[_0x12cddc(0x119e)] = 0x6, this['scene'] = _0xcda831, this[_0x12cddc(0x92b)] = this[_0x12cddc(0x6d2)][_0x12cddc(0x18bd)][_0x12cddc(0x758)](0.5 * this['scene']['renderer'][_0x12cddc(0x173c)], 0x19, '0:00', {
                            'color': 'white',
                            'fontSize': '20px',
                            'fontStyle': 'bold'
                        })[_0x12cddc(0xd87)](0x0)['setOrigin'](0.5, 0x0), this['PlayerLevelText'] = this['scene']['add'][_0x12cddc(0x758)](this[_0x12cddc(0x6d2)]['renderer']['width'] - 0x4, 0x9, 'LV 99', {
                            'color': 'white',
                            'fontSize': '12px',
                            'fontStyle': 'bold'
                        })['setScrollFactor'](0x0)[_0x12cddc(0xf8e)](0x1, 0.5), this['CoinsIcon'] = this['scene']['add'][_0x12cddc(0x568)](this['scene'][_0x12cddc(0x12f9)][_0x12cddc(0x173c)] - 0x4, 0x19, 'UI', 'CoinGold.png')[_0x12cddc(0xd87)](0x0)['setOrigin'](0x1, 0.5)[_0x12cddc(0x8a2)](_0x468129[_0x12cddc(0xd2c)]['PixelScale'])[_0x12cddc(0xb4a)](_0x468129[_0x12cddc(0xd2c)]['ZInGameUI'] - 0x3), this[_0x12cddc(0x12f5)] = this[_0x12cddc(0x6d2)]['add'][_0x12cddc(0x568)](0.85 * this[_0x12cddc(0x6d2)]['renderer'][_0x12cddc(0x173c)] - 0x4, 0x19, 'UI', 'SkullToken.png')[_0x12cddc(0xd87)](0x0)[_0x12cddc(0xf8e)](0x1, 0.5)['setScale'](_0x468129[_0x12cddc(0xd2c)]['PixelScale'])['setDepth'](_0x468129['default'][_0x12cddc(0x55d)] - 0x3), this[_0x12cddc(0x90b)] = this[_0x12cddc(0x6d2)][_0x12cddc(0x18bd)]['text'](this[_0x12cddc(0x12f5)]['x'] - this['KillsIcon'][_0x12cddc(0xe75)] - 0x4, this['KillsIcon']['y'], '9999', {
                            'color': 'white',
                            'fontSize': '12px',
                            'fontStyle': 'bold'
                        })[_0x12cddc(0xd87)](0x0)[_0x12cddc(0xf8e)](0x1, 0.5)['setDepth'](_0x468129[_0x12cddc(0xd2c)]['ZInGameUI'] - 0x3), this['PlayerCoinsText'] = this[_0x12cddc(0x6d2)]['add']['text'](this[_0x12cddc(0x1243)]['x'] - this[_0x12cddc(0x1243)][_0x12cddc(0xe75)] - 0x4, this['CoinsIcon']['y'], '9999', {
                            'color': 'white',
                            'fontSize': '12px',
                            'fontStyle': 'bold'
                        })[_0x12cddc(0xd87)](0x0)[_0x12cddc(0xf8e)](0x1, 0.5)[_0x12cddc(0xb4a)](_0x468129[_0x12cddc(0xd2c)]['ZInGameUI'] - 0x3), this[_0x12cddc(0xac4)] = this['scene'][_0x12cddc(0x18bd)]['image'](0x1, 0x12, 'UI', 'weaponSlots.psd')[_0x12cddc(0xd87)](0x0)[_0x12cddc(0xf8e)](0x0)['setScale'](_0x468129[_0x12cddc(0xd2c)]['PixelScale'])[_0x12cddc(0xb4a)](_0x468129[_0x12cddc(0xd2c)][_0x12cddc(0x55d)] - 0x3), this['BlockedWeaponSlots'] = [];
                        for (let _0x6cb7c0 = 0x1; _0x6cb7c0 < 0x6; _0x6cb7c0++) {
                            let _0x1d67ea = this[_0x12cddc(0x6d2)][_0x12cddc(0x18bd)]['image'](0x9 + this[_0x12cddc(0xa8d)] * _0x6cb7c0, 0x9 + this[_0x12cddc(0x969)], 'UI', 'no16.png')[_0x12cddc(0xdab)](0.5)['setScrollFactor'](0x0)[_0x12cddc(0xf8e)](0.5)[_0x12cddc(0x8a2)](_0x468129[_0x12cddc(0xd2c)]['PixelScale'])[_0x12cddc(0xb4a)](_0x468129['default']['ZInGameUI'] - 0x2)[_0x12cddc(0x183f)](!0x1);
                            this[_0x12cddc(0xea4)][_0x12cddc(0x1564)](_0x1d67ea);
                        }
                        this['BlockedWeaponSlots'][_0x12cddc(0x1394)](), this[_0x12cddc(0xa3e)]['setDepth'](Number['MAX_SAFE_INTEGER']), this[_0x12cddc(0x1243)]['setDepth'](Number[_0x12cddc(0x1aaa)]), this['PlayerLevelText'][_0x12cddc(0xb4a)](Number['MAX_SAFE_INTEGER']), this[_0x12cddc(0x92b)][_0x12cddc(0xb4a)](Number[_0x12cddc(0x1aaa)]), this['KillsIcon'][_0x12cddc(0xb4a)](Number[_0x12cddc(0x1aaa)]), this[_0x12cddc(0x90b)]['setDepth'](Number['MAX_SAFE_INTEGER']), this['StatsPanel'] = new _0x2b22ce[(_0x12cddc(0xd2c))](this['scene'], _0x557281[_0x12cddc(0x1e0)][_0x12cddc(0xf42)], 0x80, 0xc8, 0x122, _0x557281[_0x12cddc(0xd2c)][_0x12cddc(0x1043)][_0x12cddc(0x10f6)][_0x12cddc(0x7fd)]), this['scene'][_0x12cddc(0x18bd)]['existing'](this[_0x12cddc(0x542)]), _0x254f7b['default']['CalculateAndSetContainerSize'](this[_0x12cddc(0x542)]), this[_0x12cddc(0x542)]['x'] = 0x8, this['StatsPanel']['y'] = _0x557281[_0x12cddc(0x4c0)] - this['StatsPanel']['displayHeight'] - 0x8, this[_0x12cddc(0x542)]['AssignPlayer'](_0x557281[_0x12cddc(0xd2c)]['Core'][_0x12cddc(0x10f6)]), this['StatsPanel'][_0x12cddc(0x183f)](!_0x557281[_0x12cddc(0xf04)]), this[_0x12cddc(0x542)][_0x12cddc(0x183f)](!0x1), this[_0x12cddc(0x542)]['setScrollFactor'](0x0), this['StatsPanel'][_0x12cddc(0xb4a)](Number['MAX_SAFE_INTEGER']);
                    } ['ToggleAll'](_0x5348a9) {
                        const _0x2facb8 = _0x121565;
                        this['SurvivedSecondsText']['setVisible'](_0x5348a9), this['PlayerLevelText'][_0x2facb8(0x183f)](_0x5348a9), this[_0x2facb8(0xa3e)][_0x2facb8(0x183f)](_0x5348a9), this[_0x2facb8(0x1243)]['setVisible'](_0x5348a9), this['KillsText'][_0x2facb8(0x183f)](_0x5348a9), this['KillsIcon']['setVisible'](_0x5348a9), this[_0x2facb8(0xac4)]['setVisible'](_0x5348a9), this[_0x2facb8(0x416)][_0x2facb8(0x858)](_0x1659c9 => _0x1659c9['setVisible'](_0x5348a9)), this[_0x2facb8(0xc70)][_0x2facb8(0x858)](_0x4c5ee3 => _0x4c5ee3[_0x2facb8(0x183f)](_0x5348a9)), this['PowerUpIcons']['forEach'](_0x5c43cf => _0x5c43cf[_0x2facb8(0x183f)](_0x5348a9)), this['ExtraIcons'][_0x2facb8(0x858)](_0x210284 => _0x210284[_0x2facb8(0x183f)](_0x5348a9)), this[_0x2facb8(0xea4)][_0x2facb8(0x858)](_0x3f3317 => _0x3f3317[_0x2facb8(0x183f)](_0x5348a9));
                    } ['SetSurvivedSeconds'](_0xf74040) {
                        const _0x201764 = _0x121565;
                        this[_0x201764(0x92b)][_0x201764(0x14d6)](_0x3fd9e8[_0x201764(0x1111)](_0xf74040));
                    } ['UpdateCoins']() {
                        const _0x5b6297 = _0x121565;
                        this['PlayerCoinsText'][_0x5b6297(0x758)] = _0x557281[_0x5b6297(0xd2c)][_0x5b6297(0x1043)]['PlayerOptions'][_0x5b6297(0x3d3)][_0x5b6297(0x1969)](0x0)[_0x5b6297(0xc18)]();
                    } ['UpdateKills']() {
                        const _0x2f9b2a = _0x121565;
                        this[_0x2f9b2a(0x90b)][_0x2f9b2a(0x758)] = _0x557281['default'][_0x2f9b2a(0x1043)]['PlayerOptions'][_0x2f9b2a(0x1347)][_0x2f9b2a(0x1969)](0x0)['toLocaleString']();
                    } ['UpdatePlayerLevel']() {
                        const _0x3e47df = _0x121565;
                        this[_0x3e47df(0xb56)][_0x3e47df(0x758)] = _0x557281['default'][_0x3e47df(0x1f1)][_0x3e47df(0xb10)]('ingame_level', [_0x557281[_0x3e47df(0xd2c)][_0x3e47df(0x1043)]['Player'][_0x3e47df(0x5e3)][_0x3e47df(0xcc6)]()]);
                    }
                    static['FormatTime'](_0x29ffcd) {
                        const _0x475ec6 = _0x121565;
                        return Math[_0x475ec6(0xe07)](_0x29ffcd / 0x3c) + ':' + (_0x29ffcd % 0x3c)['toString']()['padStart'](0x2, '0');
                    } ['AddExtra'](_0x378c0f) {
                        const _0x4a5914 = _0x121565;
                        var _0x101705 = _0x3bfcea['default'][_0x378c0f][0x0],
                            _0x34406d = this['ExtraIcons']['find'](_0x3a2b0c => _0x3a2b0c[_0x4a5914(0x15f6)] == _0x378c0f);
                        if (_0x34406d) _0x34406d['level']++;
                        else {
                            var _0x253ac7 = new _0x17130b();
                            _0x253ac7[_0x4a5914(0x15f6)] = _0x378c0f, _0x253ac7[_0x4a5914(0x5e3)] = 0x1, _0x253ac7[_0x4a5914(0x27c)] = !0x1;
                            var _0xe48bea = this['xIncrease'] * (this[_0x4a5914(0x170a)]['length'] % this[_0x4a5914(0x119e)]),
                                _0x48bff7 = this[_0x4a5914(0x969)] + this[_0x4a5914(0xa8d)] + this['xIncrease'] * Math[_0x4a5914(0xe07)]((this[_0x4a5914(0x170a)][_0x4a5914(0xed9)] + this[_0x4a5914(0xe35)][_0x4a5914(0xed9)]) / this['cols']),
                                _0x226983 = this[_0x4a5914(0x6d2)]['add']['image'](_0xe48bea, _0x48bff7, _0x101705[_0x4a5914(0x174d)], _0x101705['frameName'])[_0x4a5914(0xf8e)](0x0, 0x0)[_0x4a5914(0xd87)](0x0)['setDepth'](_0x468129[_0x4a5914(0xd2c)]['ZInGameUI'] - 0x2);
                            _0x226983['setScale'](0x10 / _0x226983[_0x4a5914(0x173c)]), _0x253ac7['image'] = _0x226983, this[_0x4a5914(0xe35)][_0x4a5914(0x1564)](_0x253ac7);
                        }
                        this['RearrangeIcons']();
                    } ['Add'](_0xe7008f) {
                        const _0x3c1df0 = _0x121565;
                        var _0x524a74 = _0x3bfcea['default'][_0xe7008f][0x0],
                            _0x683819 = _0x524a74[_0x3c1df0(0xc1c)] || this[_0x3c1df0(0xc70)]['length'] >= 0x6 ? this[_0x3c1df0(0x170a)][_0x3c1df0(0x1e6)](_0x12bc72 => _0x12bc72[_0x3c1df0(0x15f6)] == _0xe7008f) : this['WeaponIcons'][_0x3c1df0(0x1e6)](_0x130bd8 => _0x130bd8['weaponType'] == _0xe7008f);
                        if (_0x683819) _0x683819[_0x3c1df0(0x5e3)]++;
                        else {
                            var _0x1fd815 = new _0x17130b();
                            _0x1fd815['weaponType'] = _0xe7008f, _0x1fd815[_0x3c1df0(0x5e3)] = 0x1, _0x1fd815[_0x3c1df0(0x27c)] = !(_0x524a74['isPowerUp'] || this[_0x3c1df0(0xc70)]['length'] >= 0x6);
                            var _0x3518b6 = _0x1fd815[_0x3c1df0(0x27c)] ? this[_0x3c1df0(0xa8d)] * this[_0x3c1df0(0xc70)][_0x3c1df0(0xed9)] : this[_0x3c1df0(0xa8d)] * (this[_0x3c1df0(0x170a)][_0x3c1df0(0xed9)] % this[_0x3c1df0(0x119e)]),
                                _0x8c8a8e = _0x1fd815[_0x3c1df0(0x27c)] ? this[_0x3c1df0(0x969)] : this['yOffset'] + this['xIncrease'] + this['xIncrease'] * Math[_0x3c1df0(0xe07)](this[_0x3c1df0(0x170a)][_0x3c1df0(0xed9)] / this['cols']),
                                _0x252789 = this[_0x3c1df0(0x6d2)][_0x3c1df0(0x18bd)][_0x3c1df0(0x568)](_0x3518b6, _0x8c8a8e, _0x524a74[_0x3c1df0(0x174d)], _0x524a74[_0x3c1df0(0x8e3)])[_0x3c1df0(0xf8e)](0x0, 0x0)['setScrollFactor'](0x0)[_0x3c1df0(0xb4a)](_0x468129['default'][_0x3c1df0(0x55d)] - 0x2);
                            _0x252789[_0x3c1df0(0x8a2)](0x10 / _0x252789['width']), _0x1fd815['image'] = _0x252789, _0x1fd815[_0x3c1df0(0x27c)] ? this['WeaponIcons'][_0x3c1df0(0x1564)](_0x1fd815) : this['PowerUpIcons'][_0x3c1df0(0x1564)](_0x1fd815);
                        }
                        this['RearrangeIcons']();
                    } ['Remove'](_0x1d83c5) {
                        const _0x165589 = _0x121565;
                        var _0x19018a;
                        _0x3bfcea['default'][_0x1d83c5][0x0], (_0x19018a = this['PowerUpIcons'][_0x165589(0x1e6)](_0x5a4aa1 => _0x5a4aa1['weaponType'] == _0x1d83c5)) ? (this['scene']['children'][_0x165589(0x393)](_0x19018a[_0x165589(0x568)]), this['PowerUpIcons']['splice'](this[_0x165589(0x170a)]['indexOf'](_0x19018a), 0x1)) : (_0x19018a = this[_0x165589(0xc70)][_0x165589(0x1e6)](_0x198640 => _0x198640[_0x165589(0x15f6)] == _0x1d83c5)) && (this[_0x165589(0x6d2)][_0x165589(0x3fe)][_0x165589(0x393)](_0x19018a[_0x165589(0x568)]), this['WeaponIcons']['splice'](this['WeaponIcons']['indexOf'](_0x19018a), 0x1)), this[_0x165589(0x8e4)]();
                    } ['RearrangeIcons']() {
                        const _0x58f504 = _0x121565;
                        for (let _0x5b43ea = 0x0; _0x5b43ea < this['WeaponIcons']['length']; _0x5b43ea++) {
                            const _0x2b95c6 = this[_0x58f504(0xc70)][_0x5b43ea]['image'];
                            _0x2b95c6['x'] = this['xIncrease'] * _0x5b43ea, _0x2b95c6['y'] = this['yOffset'];
                        }
                        let _0x340d93 = this[_0x58f504(0x170a)]['find'](_0x3e8009 => _0x3e8009[_0x58f504(0x15f6)] === _0x1336ca['default'][_0x58f504(0x18a8)]),
                            _0x5e80c4 = this[_0x58f504(0x170a)]['find'](_0x4e1e06 => _0x4e1e06['weaponType'] === _0x1336ca[_0x58f504(0xd2c)][_0x58f504(0x7bf)]);
                        if (_0x340d93 && _0x5e80c4) {
                            let _0xf74b79 = this['PowerUpIcons']['indexOf'](_0x5e80c4);
                            if (_0xf74b79 > -0x1) {
                                let _0x487bd4 = this[_0x58f504(0x170a)][_0x58f504(0x16ea)](_0xf74b79, 0x1);
                                this['PowerUpIcons'][_0x58f504(0x2f9)](_0x487bd4[0x0]);
                                let _0xbc3814 = this[_0x58f504(0x170a)][_0x58f504(0x1303)](_0x340d93);
                                if (_0xbc3814 > -0x1) {
                                    let _0x351f0c = this['PowerUpIcons']['splice'](_0xbc3814, 0x1);
                                    this[_0x58f504(0x170a)][_0x58f504(0x2f9)](_0x351f0c[0x0]);
                                }
                            }
                        }
                        let _0x2a76cf = 0x0;
                        for (_0x2a76cf = 0x0; _0x2a76cf < this[_0x58f504(0x170a)][_0x58f504(0xed9)]; _0x2a76cf++) {
                            const _0x43cc5d = this['PowerUpIcons'][_0x2a76cf]['image'];
                            _0x43cc5d['x'] = this[_0x58f504(0xa8d)] * (_0x2a76cf % this['cols']), _0x43cc5d['y'] = this[_0x58f504(0x969)] + this['xIncrease'] + this[_0x58f504(0xa8d)] * Math['floor'](_0x2a76cf / this['cols']);
                        }
                        for (let _0x3eb4c0 = 0x0; _0x3eb4c0 < this['ExtraIcons']['length']; _0x3eb4c0++) {
                            let _0xba40c4 = _0x2a76cf + _0x3eb4c0;
                            const _0x2bdf57 = this[_0x58f504(0xe35)][_0x3eb4c0]['image'];
                            _0x2bdf57['x'] = this['xIncrease'] * (_0xba40c4 % this['cols']), _0x2bdf57['y'] = this['yOffset'] + this[_0x58f504(0xa8d)] + this['xIncrease'] * Math['floor'](_0xba40c4 / this['cols']);
                        }
                    } ['AddWeaponIcon'](_0x3208ea) {
                        this['Add'](_0x3208ea);
                    } ['ShowWeaponBlocks'](_0x858ca6) {
                        const _0x5ee10e = _0x121565;
                        for (let _0x4dcca1 = 0x0; _0x4dcca1 < _0x858ca6; _0x4dcca1++) this[_0x5ee10e(0xea4)][_0x4dcca1] && (this['BlockedWeaponSlots'][_0x4dcca1][_0x5ee10e(0x35a)] = !0x0);
                    }
                }
                _0x1c9a13['default'] = _0x3fd9e8;
            };
