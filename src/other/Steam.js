// Module 0x17fa0
// Args: _0x2f2430, _0x27bbc5, _0x3c0498

export default (_0x2f2430, _0x27bbc5, _0x3c0498) => {
                'use strict';
                const _0x1058ac = a0_0x6932;
                Object['defineProperty'](_0x27bbc5, '__esModule', {
                    'value': !0x0
                }), _0x27bbc5['Steam'] = void 0x0;
                const _0x48bb4b = _0x3c0498(0x7813),
                    _0x30c162 = _0x3c0498(0xbbe4),
                    _0xd5f880 = _0x3c0498(0xeea8),
                    _0x47a125 = _0x3c0498(0x6e60),
                    _0x6e141e = _0x3c0498(0x6451);
                _0x27bbc5['Steam'] = class {
                    constructor() {
                        const _0x8adf89 = _0x1058ac;
                        this[_0x8adf89(0x1235)] = _0x48bb4b[_0x8adf89(0x182d)]['STEAM'];
                    } ['Log'](_0x2ff03c) {
                        const _0x4d915f = _0x1058ac;
                        _0x2ff03c = '[Steam Integration] - ' + _0x2ff03c, console[_0x4d915f(0x1947)](_0x2ff03c);
                    } ['init'](_0x3e0ae8, _0x5d1948) {
                        const _0x12b631 = _0x1058ac;
                        let _0x270157;
                        if (this[_0x12b631(0x7d9)]) try {
                            this['api'][_0x12b631(0x11bc)]() ? (_0x270157 = 'Steam API initialized successfully', this[_0x12b631(0xba1)](_0x270157), _0x3e0ae8(_0x270157)) : (_0x270157 = 'Steam initialization failed. Steam is not running', this['Log'](_0x270157), _0x5d1948(_0x270157));
                        } catch (_0x1e9d9e) {
                            _0x270157 = 'Error on initializing Greenworks API', this['Log'](_0x270157), _0x5d1948(_0x270157);
                        } else _0x270157 = 'Greenworks not supported for this platform', this[_0x12b631(0xba1)](_0x270157), _0x5d1948(_0x270157);
                    } ['checkLicense'](_0xe88d2a, _0x1b891e) {
                        _0xe88d2a();
                    } ['login'](_0xc23a33, _0x15916c) {
                        _0xc23a33();
                    } ['initCloud'](_0x4e795c, _0x23c7d8) {
                        _0x4e795c();
                    } ['getUserInfo']() {
                        const _0x571cb2 = _0x1058ac;
                        return {
                            'id': this[_0x571cb2(0x7d9)][_0x571cb2(0x807)]()[_0x571cb2(0x340)]()['toString'](),
                            'username': this[_0x571cb2(0x7d9)]['getSteamId']()['getPersonaName']()
                        };
                    } ['getLanguage']() {
                        const _0x587708 = _0x1058ac;
                        return this['api'][_0x587708(0x1594)]();
                    } ['save'](_0x20f02e, _0xa156ff) {
                        const _0x3fa518 = _0x1058ac;
                        _0xa156ff !== _0x30c162['SaveType'][_0x3fa518(0x7ce)] ? this[_0x3fa518(0x7d9)]['saveTextToFile'](_0xd5f880['SaveSystem']['GetSaveName'](_0xa156ff), _0x20f02e, () => {
                            const _0x5b9650 = _0x3fa518;
                            this[_0x5b9650(0xba1)]('Cloud save succeeded.');
                        }, _0x2780b2 => {
                            const _0x4a0b60 = _0x3fa518;
                            this[_0x4a0b60(0xba1)]('Cloud save failed: ' + _0x2780b2);
                        }) : _0x47a125[_0x3fa518(0xe26)][_0x3fa518(0x3ab)](_0x20f02e, _0xa156ff);
                    } ['load'](_0x3f13e4, _0x5095d8) {
                        const _0x559720 = _0x1058ac;
                        _0x3f13e4 !== _0x30c162['SaveType'][_0x559720(0x7ce)] ? this[_0x559720(0x7d9)][_0x559720(0x1010)](_0xd5f880['SaveSystem'][_0x559720(0x1003)](_0x3f13e4), _0x9914fb => {
                            const _0x9c7fe = _0x559720;
                            null == _0x9914fb || '' == _0x9914fb ? _0x6e141e[_0x9c7fe(0x52d)][_0x9c7fe(0x1aae)](_0x5095d8) : _0x5095d8(_0x9914fb);
                        }, _0x32be23 => {
                            const _0x14c2c4 = _0x559720;
                            this[_0x14c2c4(0xba1)]('Cloud load failed: ' + _0x32be23), _0x6e141e[_0x14c2c4(0x52d)]['Migrate'](_0x5095d8);
                        }) : _0x47a125['LocalStorage'][_0x559720(0x1960)](_0x3f13e4, _0x5095d8);
                    } ['unlockAchievement'](_0x5f38a5, _0x540d12, _0x2649d5) {
                        const _0x27280a = _0x1058ac;
                        try {
                            this['api'][_0x27280a(0x1923)](_0x5f38a5, () => {
                                this['Log']('Unlocked achievement successfully: ' + _0x5f38a5), _0x540d12();
                            }, _0x58a0dc => {
                                this['Log']('Failed to unlock achievement: ' + _0x58a0dc), _0x2649d5(_0x58a0dc);
                            });
                        } catch (_0x3e5e12) {
                            this['Log']('Failed to unlock achievement: ' + _0x3e5e12), _0x2649d5(_0x3e5e12);
                        }
                    } ['resetAchievement'](_0x3ae3e6, _0x82ff39, _0x12df6a) {
                        const _0x3d2f61 = _0x1058ac;
                        try {
                            this['api'][_0x3d2f61(0xd5b)](_0x3ae3e6, () => {
                                this['Log']('Achievement reset successfully: ' + _0x3ae3e6), _0x82ff39();
                            }, _0x76e379 => {
                                const _0x305fd9 = _0x3d2f61;
                                this[_0x305fd9(0xba1)]('Failed to reset achievement: ' + _0x76e379), _0x12df6a(_0x76e379);
                            });
                        } catch (_0x521108) {
                            this[_0x3d2f61(0xba1)]('Failed to reset achievement: ' + _0x521108), _0x12df6a(_0x521108);
                        }
                    } ['getAvailableDLC'](_0x2cb86a) {
                        const _0x3c97aa = _0x1058ac;
                        var _0x274957 = [],
                            _0x3726bb = this[_0x3c97aa(0x7d9)][_0x3c97aa(0x133c)]();
                        this[_0x3c97aa(0xba1)]('DLC Count: ' + _0x3726bb);
                        for (var _0x44fd26 = 0x0; _0x44fd26 < _0x3726bb; _0x44fd26++) {
                            var _0x4cbf8c = this[_0x3c97aa(0x7d9)]['getDLCDataByIndex'](_0x44fd26);
                            this[_0x3c97aa(0xba1)]('DLC info: ' + _0x4cbf8c[_0x3c97aa(0x226)] + ' (' + _0x4cbf8c[_0x3c97aa(0x664)] + '), isAvailable: ' + _0x4cbf8c['available']);
                            var _0x55a67b = _0x4cbf8c['appId'];
                            if (this[_0x3c97aa(0x7d9)]['isDLCInstalled'](_0x55a67b)) {
                                this[_0x3c97aa(0xba1)]('User owns DLC: ' + _0x4cbf8c['name'] + ' (' + _0x4cbf8c[_0x3c97aa(0x664)] + ')'), this['Log']('INSTAL PATH: ' + this[_0x3c97aa(0x7d9)]['getAppInstallDir'](this[_0x3c97aa(0x7d9)][_0x3c97aa(0x1308)]()));
                                let _0x57ac3c = this[_0x3c97aa(0x7d9)][_0x3c97aa(0xf93)](this[_0x3c97aa(0x7d9)]['getAppId']());
                                _0x57ac3c = _0x57ac3c[_0x3c97aa(0xa0d)]('Vampire Survivors', ''), _0x57ac3c = _0x57ac3c[_0x3c97aa(0xa0d)]('Vampire Survivor', ''), _0x57ac3c += 'Vampire Survivors', this[_0x3c97aa(0xba1)]('INSTAL PATH: ' + _0x57ac3c);
                                var _0x455a7f = _0x57ac3c + '/' + _0x55a67b + '/';
                                this[_0x3c97aa(0xba1)]('DLC path: ' + _0x455a7f), _0x274957[_0x3c97aa(0x1564)](_0x455a7f);
                            }
                        }
                        _0x2cb86a(_0x274957);
                    } ['shutdown']() {}
                };
            };
