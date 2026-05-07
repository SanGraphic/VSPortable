// Module 0xeea8
// Args: _0x5dfa08, _0x502bdc, _0x783114

export default (_0x5dfa08, _0x502bdc, _0x783114) => {
                'use strict';
                const _0x5f16d9 = a0_0x6932;
                var _0x337d21 = this && this['__importDefault'] || function(_0x57e007) {
                    const _0x33835c = _0x5f16d9;
                    return _0x57e007 && _0x57e007[_0x33835c(0x16f1)] ? _0x57e007 : {
                        'default': _0x57e007
                    };
                };
                Object['defineProperty'](_0x502bdc, '__esModule', {
                    'value': !0x0
                }), _0x502bdc['SaveSystem'] = void 0x0;
                const _0x67e81b = _0x783114(0x11d28),
                    _0x21c566 = _0x337d21(_0x783114(0x5f07)),
                    _0x6f7d86 = _0x783114(0x7813),
                    _0x398fd1 = _0x783114(0xbbe4),
                    _0x3b2b2c = _0x783114(0x12a38),
                    _0x23add5 = _0x783114(0x6e60);
                _0x502bdc['SaveSystem'] = class {
                    static['GetSaveName'](_0x18f5ed) {
                        const _0x1f87f7 = _0x5f16d9;
                        switch (_0x18f5ed) {
                            case _0x398fd1[_0x1f87f7(0xdad)][_0x1f87f7(0x7bc)]:
                                return 'SaveData';
                            case _0x398fd1[_0x1f87f7(0xdad)]['BACKUP']:
                                return 'LastRunBackup';
                            case _0x398fd1['SaveType'][_0x1f87f7(0x12f1)]:
                                return 'SaveDataStash';
                        }
                    }
                    static['UpdateChecksum']() {
                        const _0x38f0a8 = _0x5f16d9,
                            _0x174b94 = _0x783114(0x17e1);
                        _0x21c566[_0x38f0a8(0xd2c)][_0x38f0a8(0x1043)]['PlayerOptions']['checksum'] = '', _0x21c566['default']['Core'][_0x38f0a8(0x14d8)]['Version'] = _0x67e81b[_0x38f0a8(0x443)];
                        let _0x10cd84 = JSON[_0x38f0a8(0x152b)](_0x21c566['default'][_0x38f0a8(0x1043)]['PlayerOptions']);
                        const _0x2a0030 = _0x174b94['createHash']('sha256', 'DefinitelyNotSaveDataSecretKey')[_0x38f0a8(0x2b3)](_0x10cd84)['digest']('hex');
                        _0x21c566[_0x38f0a8(0xd2c)]['Core'][_0x38f0a8(0x14d8)]['checksum'] = _0x2a0030;
                    }
                    static['IsChecksumValid'](_0xf30caa) {
                        const _0x212e7a = _0x5f16d9;
                        var _0x413ae2 = _0x783114(0x17e1);
                        let _0x2a096c, _0x53a8ad = _0xf30caa['match'](/\"checksum\":\"[a-z0-9]*\"/g);
                        _0x53a8ad['length'] > 0x0 && (_0x2a096c = _0x53a8ad[0x0][_0x212e7a(0xa0d)]('"checksum":"', '')[_0x212e7a(0xa0d)]('"', ''));
                        let _0x2a710e = _0xf30caa[_0x212e7a(0xa0d)](/\"checksum\":\"[a-z0-9]*\"/g, '"checksum":""');
                        return _0x2a096c == _0x413ae2['createHash']('sha256', 'DefinitelyNotSaveDataSecretKey')['update'](_0x2a710e)['digest']('hex') || (console['log']('SaveData is corrupt'), window[_0x212e7a(0x102d)]('SaveData is corrupt'), !0x1);
                    }
                    static['ApplyLoadedSave'](_0x4636a2) {
                        const _0x46da05 = _0x5f16d9;
                        let _0x5ac3b0 = JSON[_0x46da05(0x57d)](_0x4636a2);
                        for (const _0x4351fd in _0x5ac3b0) _0x21c566[_0x46da05(0xd2c)][_0x46da05(0x1043)][_0x46da05(0x14d8)]['hasOwnProperty'](_0x4351fd) && (_0x21c566[_0x46da05(0xd2c)]['Core'][_0x46da05(0x14d8)][_0x4351fd] = _0x5ac3b0[_0x4351fd]);
                        _0x21c566[_0x46da05(0xd2c)]['Core'][_0x46da05(0x14d8)][_0x46da05(0xa5b)]();
                    }
                    static['Save'](_0x4e326f = !0x1) {
                        const _0x26e512 = _0x5f16d9;
                        this[_0x26e512(0x94c)](), _0x3b2b2c[_0x26e512(0x116e)][_0x26e512(0x1508)](JSON[_0x26e512(0x152b)](_0x21c566['default'][_0x26e512(0x1043)][_0x26e512(0x14d8)]), _0x398fd1[_0x26e512(0xdad)][_0x26e512(0x7bc)]), _0x4e326f && _0x23add5[_0x26e512(0xe26)][_0x26e512(0x3ab)](JSON['stringify'](_0x21c566[_0x26e512(0xd2c)][_0x26e512(0x1043)]['PlayerOptions']), _0x398fd1['SaveType'][_0x26e512(0x7bc)]);
                    }
                    static['SaveBackup']() {
                        const _0x574388 = _0x5f16d9;
                        this[_0x574388(0x94c)](), _0x23add5[_0x574388(0xe26)][_0x574388(0x3ab)](JSON['stringify'](_0x21c566['default']['Core']['PlayerOptions']), _0x398fd1['SaveType'][_0x574388(0x7ce)]);
                    }
                    static['SaveStash'](_0xf40d9a) {
                        const _0x1d117f = _0x5f16d9;
                        _0x3b2b2c['Integration'][_0x1d117f(0x1508)](_0xf40d9a, _0x398fd1['SaveType'][_0x1d117f(0x12f1)]);
                    }
                    static['Load'](_0x5686a3) {
                        const _0x186e4a = _0x5f16d9;
                        _0x3b2b2c[_0x186e4a(0x116e)][_0x186e4a(0x1644)](_0x398fd1['SaveType'][_0x186e4a(0x7bc)], _0xb75552 => {
                            null != _0xb75552 && this['IsChecksumValid'](_0xb75552) && this['ApplyLoadedSave'](_0xb75552), _0x5686a3(_0xb75552);
                        });
                    }
                    static['LoadBackup'](_0x34e529) {
                        const _0x4b5b4b = _0x5f16d9;
                        _0x23add5['LocalStorage'][_0x4b5b4b(0x1960)](_0x398fd1['SaveType']['BACKUP'], _0x4bafaf => {
                            null != _0x4bafaf && this['IsChecksumValid'](_0x4bafaf) && this['ApplyLoadedSave'](_0x4bafaf), _0x34e529(_0x4bafaf);
                        });
                    }
                    static['HasBackup']() {
                        const _0x3b3bd9 = _0x5f16d9;
                        return _0x3b2b2c['Integration'][_0x3b3bd9(0xbad)]() !== _0x6f7d86[_0x3b3bd9(0x182d)][_0x3b3bd9(0x1658)] && _0x3b2b2c['Integration']['GetPlatform']() !== _0x6f7d86['Platform'][_0x3b3bd9(0x15ba)] && _0x23add5[_0x3b3bd9(0xe26)][_0x3b3bd9(0xf43)]();
                    }
                    static['RestoreBackup'](_0x4dbf01 = !0x1, _0x1fb71a = !0x1) {
                        this['LoadBackup'](() => {
                            const _0x21e019 = a0_0x6932;
                            this['Save'](_0x1fb71a), !_0x4dbf01 && window['location']['reload']();
                        });
                    }
                    static['LoadStash'](_0x563ff2) {
                        const _0x2353e4 = _0x5f16d9;
                        _0x3b2b2c['Integration'][_0x2353e4(0x1644)](_0x398fd1['SaveType'][_0x2353e4(0x12f1)], _0x563ff2);
                    }
                };
            };
