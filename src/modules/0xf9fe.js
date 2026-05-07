// Module 0xf9fe
// Args: _0x4d8b0c, _0x3c8f29, _0x15e131

export default (_0x4d8b0c, _0x3c8f29, _0x15e131) => {
                'use strict';
                const _0x5bc38c = a0_0x6932;
                var _0x288bad = this && this['__importDefault'] || function(_0x36699b) {
                    return _0x36699b && _0x36699b['__esModule'] ? _0x36699b : {
                        'default': _0x36699b
                    };
                };
                Object['defineProperty'](_0x3c8f29, '__esModule', {
                    'value': !0x0
                }), _0x3c8f29['Stove'] = void 0x0;
                const _0x370ce3 = _0x15e131(0x7813),
                    _0x4ef07b = _0x15e131(0x6e60),
                    _0x4c4f03 = _0x288bad(_0x15e131(0x5f07));
                _0x3c8f29['Stove'] = class {
                    constructor() {
                        const _0x4b32ad = _0x5bc38c;
                        this[_0x4b32ad(0x1235)] = _0x370ce3['Platform']['STOVE'];
                    } ['Log'](_0x3651e2) {
                        const _0x36944f = _0x5bc38c;
                        _0x3651e2 = '[Stove Integration] - ' + _0x3651e2, console[_0x36944f(0x1947)](_0x3651e2);
                    } ['init'](_0x162487, _0x5e7240) {
                        const _0x161c79 = _0x5bc38c;
                        this[_0x161c79(0xba1)]('Stove init'), this[_0x161c79(0x7d9)][_0x161c79(0x11bc)](_0x341bbe => {
                            const _0x46e565 = _0x161c79;
                            this[_0x46e565(0xba1)]('Stove initiated successfully: ' + _0x341bbe), _0x162487();
                        }, _0x40133f => {
                            const _0x4cc219 = _0x161c79;
                            this[_0x4cc219(0xba1)]('Stove failed to initiate: ' + _0x40133f), _0x5e7240(_0x40133f);
                        });
                    } ['checkLicense'](_0x49309b, _0x92ca0b) {
                        const _0x497467 = _0x5bc38c;
                        this[_0x497467(0xba1)]('Stove license'), this[_0x497467(0x7d9)]['getLicenseCheck'](_0x351466 => {
                            const _0x2d62ac = _0x497467;
                            this[_0x2d62ac(0xba1)]('Stove license successfully checked'), _0x49309b();
                        }, _0x5f5791 => {
                            this['Log']('Stove failed license check'), _0x92ca0b(_0x5f5791);
                        });
                    } ['login'](_0x22c20f, _0x4d77c4) {
                        _0x22c20f();
                    } ['initCloud'](_0x3b847a, _0x57eda4) {
                        _0x3b847a();
                    } ['getUserInfo']() {
                        const _0x2034f4 = _0x5bc38c;
                        try {
                            return {
                                'id': this[_0x2034f4(0x7d9)][_0x2034f4(0x116c)](),
                                'username': this['api'][_0x2034f4(0x1077)]()
                            };
                        } catch (_0x2bb941) {
                            return {
                                'id': null,
                                'username': ''
                            };
                        }
                    } ['getLanguage']() {
                        const _0x3a331c = _0x5bc38c;
                        var _0x969940 = navigator['language'];
                        return -0x1 === _0x4c4f03[_0x3a331c(0xd2c)]['Lang']['langCodeList'][_0x3a331c(0x1303)](_0x969940) && _0x4c4f03[_0x3a331c(0xd2c)]['Lang']['langCodeList'][_0x3a331c(0x1919)](_0x22ed7e => {
                            const _0xa84246 = _0x3a331c;
                            _0x969940 = _0x969940[_0xa84246(0x1303)](_0x22ed7e + '-') > -0x1 ? _0x22ed7e : _0x969940;
                        }), _0x969940;
                    } ['save'](_0x312705, _0xf3c94f) {
                        const _0x26cfe5 = _0x5bc38c;
                        _0x4ef07b[_0x26cfe5(0xe26)][_0x26cfe5(0x3ab)](_0x312705, _0xf3c94f);
                    } ['load'](_0x48a8c9, _0x45e542) {
                        const _0x3657b6 = _0x5bc38c;
                        _0x4ef07b[_0x3657b6(0xe26)][_0x3657b6(0x1960)](_0x48a8c9, _0x45e542);
                    } ['unlockAchievement'](_0x32c4a4, _0x547eef, _0x327b7c) {
                        const _0x254e92 = _0x5bc38c;
                        try {
                            this[_0x254e92(0x7d9)][_0x254e92(0x427)](_0x32c4a4, _0x19cd11 => {
                                const _0x12141f = _0x254e92;
                                this[_0x12141f(0xba1)]('Unlocked achievement successfully: ' + _0x19cd11), _0x547eef();
                            }, _0xd6410b => {
                                this['Log']('Failed to unlock achievement: ' + _0xd6410b), _0x327b7c(_0xd6410b);
                            });
                        } catch (_0x5ca37d) {
                            this['Log']('Failed to unlock achievement: ' + _0x5ca37d), _0x327b7c(_0x5ca37d);
                        }
                    } ['resetAchievement'](_0x4c0707, _0xe5fc5, _0x272c1e) {
                        _0xe5fc5();
                    } ['getAvailableDLC'](_0x14aa73) {
                        _0x14aa73([]);
                    } ['shutdown']() {}
                };
            };
