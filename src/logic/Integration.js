// Module 0x12a38
// Args: _0x45777e, _0x4f8555, _0x37d747

export default (_0x45777e, _0x4f8555, _0x37d747) => {
                'use strict';
                const _0x53718d = a0_0x6932;
                var _0x37c49e = this && this['__importDefault'] || function(_0x4c32f5) {
                    const _0x1465ab = a0_0x6932;
                    return _0x4c32f5 && _0x4c32f5['__esModule'] ? _0x4c32f5 : {
                        'default': _0x4c32f5
                    };
                };
                Object['defineProperty'](_0x4f8555, '__esModule', {
                    'value': !0x0
                }), _0x4f8555['Integration'] = void 0x0;
                const _0x3e58d6 = _0x37d747(0x17fa0),
                    _0x4dc4ee = _0x37d747(0xb412),
                    _0x5d75bd = _0x37d747(0x7813),
                    _0x442bba = _0x37c49e(_0x37d747(0xea40)),
                    _0x4c3b64 = _0x37d747(0xa3cf),
                    _0x439944 = _0x37d747(0x8855),
                    _0x516384 = _0x37d747(0xf9fe),
                    _0xfdd468 = _0x37c49e(_0x37d747(0xc450));
                try {
                    _0x37d747(0x111c6);
                } catch (_0x403b9e) {}
                _0x4f8555['Integration'] = class {
                    static['init'](_0x329dfd, _0xf0ea83) {
                        const _0x17f433 = _0x53718d;
                        try {
                            const {
                                ipcRenderer: _0x48916d
                            } = _0x37d747(0x11a6a);
                            this['electronIPC'] = _0x48916d, this[_0x17f433(0x6b1)]['on']('console_log', (_0x2199af, _0x404aef) => {
                                console['log'](_0x404aef);
                            }), Object['assign'](console, _0x37d747(0x7aa7)['functions']);
                        } catch (_0x339c40) {}
                        let _0x596307 = null;
                        for (let _0x3126d3 in _0x5d75bd[_0x17f433(0x182d)])
                            if (_0x596307 = this[_0x17f433(0x31c)](_0x3126d3), null != _0x596307) break;
                        this[_0x17f433(0xbd9)] = this['createIntegration'](_0x596307), this[_0x17f433(0xbd9)][_0x17f433(0x11bc)](_0x329dfd, _0xf0ea83);
                    }
                    static['getApi'](_0x33fc6c) {
                        const _0x45e1b3 = _0x53718d;
                        try {
                            let _0x4848cd = _0x37d747(0x111c6)[_0x45e1b3(0x6d8)](_0x5d75bd['Platform'][_0x33fc6c]);
                            return _0x4848cd ? {
                                'platform': _0x5d75bd[_0x45e1b3(0x182d)][_0x33fc6c],
                                'api': _0x4848cd
                            } : null;
                        } catch (_0x5e0e09) {
                            return null;
                        }
                    }
                    static['createIntegration'](_0x558a87) {
                        const _0x2f5f76 = _0x53718d;
                        let _0x2f5bd5;
                        switch ((_0x558a87 = null != _0x558a87 ? _0x558a87 : this[_0x2f5f76(0x6b1)] ? {
                                'platform': _0x5d75bd[_0x2f5f76(0x182d)][_0x2f5f76(0x7e6)],
                                'api': null
                            } : {
                                'platform': _0x5d75bd[_0x2f5f76(0x182d)]['WEB'],
                                'api': null
                            })['platform']) {
                            case _0x5d75bd['Platform'][_0x2f5f76(0x1658)]:
                                _0x2f5bd5 = new _0x4c3b64[(_0x2f5f76(0x16f8))]();
                                break;
                            case _0x5d75bd[_0x2f5f76(0x182d)][_0x2f5f76(0x7e6)]:
                                _0x2f5bd5 = new _0x4dc4ee['Standalone']();
                                break;
                            case _0x5d75bd['Platform'][_0x2f5f76(0x361)]:
                                _0x2f5bd5 = new _0x3e58d6['Steam']();
                                break;
                            case _0x5d75bd[_0x2f5f76(0x182d)]['MICROSOFT']:
                                _0x2f5bd5 = new _0x439944['Microsoft']();
                                break;
                            case _0x5d75bd[_0x2f5f76(0x182d)][_0x2f5f76(0xc77)]:
                                _0x2f5bd5 = new _0x516384['Stove']();
                        }
                        return _0x2f5bd5['api'] = _0x558a87['api'], _0x2f5bd5;
                    }
                    static['GetPlatform']() {
                        const _0x509bcc = _0x53718d;
                        return this[_0x509bcc(0xbd9)]['platform'];
                    }
                    static['setResolution'](_0x56df36, _0x44d75d) {
                        const _0x174b00 = _0x53718d;
                        var _0x31a3da;
                        null === (_0x31a3da = this[_0x174b00(0x6b1)]) || void 0x0 === _0x31a3da || _0x31a3da['sendSync']('resolution', _0x56df36 + ' x ' + _0x44d75d);
                    }
                    static['setFullscreen'](_0x4dc677) {
                        const _0x50e722 = _0x53718d;
                        var _0x4fa709;
                        null === (_0x4fa709 = this[_0x50e722(0x6b1)]) || void 0x0 === _0x4fa709 || _0x4fa709[_0x50e722(0x1782)]('fullscreen', _0x4dc677);
                    }
                    static['closeGame']() {
                        const _0x18fb4e = _0x53718d;
                        var _0x3f20bd;
                        this[_0x18fb4e(0xbd9)]['shutdown'](), null === (_0x3f20bd = this['electronIPC']) || void 0x0 === _0x3f20bd || _0x3f20bd['send']('close-me');
                    }
                    static['getUserID']() {
                        const _0x4f8704 = _0x53718d;
                        return this[_0x4f8704(0xbd9)][_0x4f8704(0xd22)]()['id'];
                    }
                    static['getUserName']() {
                        const _0xd21a31 = _0x53718d;
                        return this['integration'][_0xd21a31(0xd22)]()[_0xd21a31(0x15af)];
                    }
                    static['getLanguage']() {
                        const _0x13c293 = _0x53718d;
                        return this[_0x13c293(0xbd9)][_0x13c293(0xa20)]();
                    }
                    static['isDesktop']() {
                        const _0x1fdede = _0x53718d;
                        return !!this[_0x1fdede(0x6b1)];
                    }
                    static['signIn'](_0x47e7b6, _0xc30b03) {
                        this['integration']['login'](_0x47e7b6, _0xc30b03);
                    }
                    static['licenseCheck'](_0x27ef13, _0x5919fa) {
                        const _0xc40bd = _0x53718d;
                        this['integration'][_0xc40bd(0x324)](_0x27ef13, _0x5919fa);
                    }
                    static['initCloudStorage'](_0x343feb, _0x5dd120) {
                        const _0x1c7376 = _0x53718d;
                        this['integration'][_0x1c7376(0xa74)](_0x343feb, _0x5dd120);
                    }
                    static['save'](_0x2b387e, _0x28b4cd) {
                        const _0x2fa7a7 = _0x53718d;
                        this[_0x2fa7a7(0xbd9)][_0x2fa7a7(0x1508)](_0x2b387e, _0x28b4cd);
                    }
                    static['load'](_0x5bc119, _0x231122) {
                        const _0x25bf4d = _0x53718d;
                        this[_0x25bf4d(0xbd9)]['load'](_0x5bc119, _0x231122);
                    }
                    static['showDisclaimer']() {
                        return !0x1;
                    }
                    static['ClearAchievements'](_0x495ba3 = () => {}) {
                        const _0x203ea9 = _0x53718d;
                        var _0x8544bb = 0x0,
                            _0x55445a = 0x0;
                        for (var _0x3066cf in _0x442bba[_0x203ea9(0xd2c)]) _0x55445a++;
                        for (var _0x3066cf in _0x442bba['default']) this[_0x203ea9(0xbd9)][_0x203ea9(0xf67)](_0x442bba[_0x203ea9(0xd2c)][_0x3066cf], () => {
                            ++_0x8544bb == _0x55445a && _0x495ba3();
                        }, () => {
                            ++_0x8544bb == _0x55445a && _0x495ba3();
                        });
                    }
                    static['SyncAchievements'](_0x2c7a59 = () => {}) {
                        const _0x2b3431 = _0x53718d;
                        var _0x1259e6 = Object[_0x2b3431(0x3d4)](_0x442bba[_0x2b3431(0xd2c)]);
                        this['SyncAchievement'](_0x1259e6, 0x0, _0x2c7a59);
                    }
                    static['SyncAchievement'](_0x47329b, _0x4176fb, _0x26554b) {
                        if (_0x4176fb >= _0x47329b['length']) return void _0x26554b();
                        let _0x52ae9c = _0x442bba['default'][_0x47329b[_0x4176fb]];
                        _0x52ae9c && (_0xfdd468['default']['HasUnlockedAchievement'](_0x52ae9c) ? this['integration']['unlockAchievement'](_0x52ae9c, () => {
                            setTimeout(() => {
                                this['SyncAchievement'](_0x47329b, _0x4176fb + 0x1, _0x26554b);
                            }, 0xa);
                        }, () => {
                            this['SyncAchievement'](_0x47329b, _0x4176fb + 0x1, _0x26554b);
                        }) : this['SyncAchievement'](_0x47329b, _0x4176fb + 0x1, _0x26554b));
                    }
                    static['UnlockAchievement'](_0x5b8a11, _0x12259a = () => {}, _0x22cc9f = () => {}) {
                        const _0x286e98 = _0x53718d;
                        this[_0x286e98(0xbd9)]['unlockAchievement'](_0x5b8a11, _0x12259a, _0x22cc9f);
                    }
                    static['UnlockAchievements'](_0xae4b55, _0x114241 = () => {}) {
                        this['SyncAchievement'](_0xae4b55, 0x0, _0x114241);
                    }
                    static['getDLC'](_0x417848) {
                        const _0x55e821 = _0x53718d;
                        this[_0x55e821(0xbd9)][_0x55e821(0x1423)](_0x417848);
                    }
                };
            };
