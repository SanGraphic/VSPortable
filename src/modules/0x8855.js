// Module 0x8855
// Args: _0x525665, _0x2f8e2e, _0x4e0fd6

export default (_0x525665, _0x2f8e2e, _0x4e0fd6) => {
                'use strict';
                const _0x15d38e = a0_0x6932;
                var _0x1531c0 = this && this['__importDefault'] || function(_0x2a4d28) {
                    const _0x1ec8a1 = a0_0x6932;
                    return _0x2a4d28 && _0x2a4d28['__esModule'] ? _0x2a4d28 : {
                        'default': _0x2a4d28
                    };
                };
                Object['defineProperty'](_0x2f8e2e, '__esModule', {
                    'value': !0x0
                }), _0x2f8e2e['Microsoft'] = void 0x0;
                const _0x6ad409 = _0x4e0fd6(0x7813),
                    _0x2df144 = _0x4e0fd6(0xbbe4),
                    _0x3c5b2d = _0x4e0fd6(0xeea8),
                    _0x425b65 = _0x4e0fd6(0x6e60),
                    _0x24e5ed = _0x4e0fd6(0xbacf),
                    _0x5bc60a = _0x1531c0(_0x4e0fd6(0x5f07));
                _0x2f8e2e['Microsoft'] = class {
                    constructor() {
                        this['platform'] = _0x6ad409['Platform']['MICROSOFT'];
                    } ['Log'](_0x40b82b) {
                        _0x40b82b = '[XSAPI Integration] - ' + _0x40b82b, console['log'](_0x40b82b);
                    } ['init'](_0x511f62, _0x19ea27) {
                        const _0x8a8ec6 = _0x15d38e;
                        try {
                            this['api'][_0x8a8ec6(0x183d)]() ? this['api'][_0x8a8ec6(0x12dd)]() || (this['Log']('Init Failed'), _0x19ea27()) : (this['Log']('Runtime Init Failed'), _0x19ea27());
                        } catch (_0x14f8aa) {
                            this['Log'](_0x14f8aa), _0x19ea27();
                        }
                        this[_0x8a8ec6(0xba1)]('Initialised successfully'), _0x511f62();
                    } ['checkLicense'](_0x497868, _0xebc296) {
                        const _0x1e574d = _0x15d38e;
                        this[_0x1e574d(0x7d9)][_0x1e574d(0x1a52)](() => {
                            _0x497868();
                        }, _0x3dca5c => {
                            const _0x3a4916 = _0x1e574d;
                            this[_0x3a4916(0xba1)](_0x3dca5c), _0xebc296(_0x3dca5c);
                        });
                    } ['login'](_0x58fd79, _0x5945bd) {
                        const _0x55b252 = _0x15d38e;
                        this['api'][_0x55b252(0x60b)](() => {
                            _0x58fd79();
                        }, _0xfabd35 => {
                            this['Log'](_0xfabd35), _0x5945bd(_0xfabd35);
                        });
                    } ['initCloud'](_0x59cc3a, _0x5c8839) {
                        const _0x523b26 = _0x15d38e;
                        this[_0x523b26(0x7d9)]['initCloudSave'](() => {
                            _0x59cc3a();
                        }, _0x2949dd => {
                            const _0x35f094 = _0x523b26;
                            this[_0x35f094(0xba1)](_0x2949dd), _0x5c8839(_0x2949dd);
                        });
                    } ['getUserInfo']() {
                        const _0x3b81fa = _0x15d38e;
                        return {
                            'id': this['api'][_0x3b81fa(0x116c)](),
                            'username': this['api'][_0x3b81fa(0x1077)]()
                        };
                    } ['getLanguage']() {
                        const _0x4740dd = _0x15d38e;
                        var _0x2735a0 = navigator[_0x4740dd(0xf49)];
                        return -0x1 === _0x5bc60a[_0x4740dd(0xd2c)]['Lang'][_0x4740dd(0xc15)]['indexOf'](_0x2735a0) && _0x5bc60a[_0x4740dd(0xd2c)]['Lang'][_0x4740dd(0xc15)]['map'](_0x406065 => {
                            const _0x5b9e6b = _0x4740dd;
                            _0x2735a0 = _0x2735a0[_0x5b9e6b(0x1303)](_0x406065 + '-') > -0x1 ? _0x406065 : _0x2735a0;
                        }), _0x2735a0;
                    } ['save'](_0x4fe4b6, _0x85e0d3) {
                        const _0x5ee00a = _0x15d38e;
                        _0x85e0d3 !== _0x2df144['SaveType'][_0x5ee00a(0x7ce)] ? this[_0x5ee00a(0x7d9)][_0x5ee00a(0x1508)]('VampireSurvivors', _0x3c5b2d[_0x5ee00a(0x1882)][_0x5ee00a(0x1003)](_0x85e0d3), _0x4fe4b6) : _0x425b65['LocalStorage'][_0x5ee00a(0x3ab)](_0x4fe4b6, _0x85e0d3);
                    } ['load'](_0x38d59e, _0xd8491a) {
                        const _0x236add = _0x15d38e;
                        if (_0x38d59e !== _0x2df144[_0x236add(0xdad)]['BACKUP']) {
                            var _0x78c541 = this['api']['load']('VampireSurvivors', _0x3c5b2d[_0x236add(0x1882)][_0x236add(0x1003)](_0x38d59e));
                            void 0x0 !== _0x78c541 && '' != _0x78c541 || (_0x78c541 = null), _0xd8491a(_0x78c541);
                        } else _0x425b65['LocalStorage'][_0x236add(0x1960)](_0x38d59e, _0xd8491a);
                    } ['unlockAchievement'](_0x1c5a4b, _0x39f2f7, _0x5c138a) {
                        const _0x303d90 = _0x15d38e;
                        this['api']['unlockAchievement'](_0x24e5ed[_0x303d90(0xf3b)][_0x1c5a4b], () => {
                            _0x39f2f7();
                        }, _0x7f420 => {
                            this['Log'](_0x7f420), _0x5c138a(_0x7f420);
                        });
                    } ['resetAchievement'](_0x10dc12, _0x740f2f, _0x5b555d) {
                        _0x740f2f();
                    } ['getAvailableDLC'](_0x2b62ad) {
                        const _0x31681d = _0x15d38e;
                        this[_0x31681d(0x7d9)][_0x31681d(0x1a9f)](_0x51e4bb => {
                            const _0xd24eb6 = _0x31681d;
                            this[_0xd24eb6(0xba1)](_0x51e4bb), this['validateDLCs'](_0x51e4bb['split'](','), _0xc48741 => {
                                _0x2b62ad(_0xc48741);
                            });
                        }, _0xd11a13 => {
                            this['Log'](_0xd11a13), _0x2b62ad([]);
                        });
                    } ['validateDLCs'](_0x5d297c, _0x127040, _0x358ddd = []) {
                        const _0x17db20 = _0x15d38e;
                        var _0x5cb0a2 = _0x5d297c[0x0];
                        this['Log']('Checking license for DLC (' + _0x5cb0a2 + ')'), this['api'][_0x17db20(0x108d)](_0x5cb0a2, () => {
                            const _0x434c9d = _0x17db20;
                            this['Log']('User has a valid license for DLC (' + _0x5cb0a2 + ')');
                            let _0x3a4ea1 = this[_0x434c9d(0x7d9)]['mountDLC'](_0x5cb0a2);
                            '' != _0x3a4ea1 ? (this['Log']('DLC (' + _0x5cb0a2 + ') mounted at: ' + _0x3a4ea1), _0x358ddd[_0x434c9d(0x1564)](_0x3a4ea1)) : this['Log']('DLC (' + _0x5cb0a2 + ') unable to be mounted. Skipping.'), _0x5d297c[_0x434c9d(0x19c9)](), _0x5d297c[_0x434c9d(0xed9)] > 0x0 ? this[_0x434c9d(0xfe4)](_0x5d297c, _0x127040, _0x358ddd) : _0x127040(_0x358ddd);
                        }, _0x24db6f => {
                            const _0x5a85c7 = _0x17db20;
                            this[_0x5a85c7(0xba1)](_0x24db6f), _0x5d297c[_0x5a85c7(0x19c9)](), _0x5d297c[_0x5a85c7(0xed9)] > 0x0 ? this['validateDLCs'](_0x5d297c, _0x127040, _0x358ddd) : _0x127040(_0x358ddd);
                        });
                    } ['shutdown']() {
                        this['api']['shutdown']();
                    }
                };
            };
