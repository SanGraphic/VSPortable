// Module 0x6451
// Args: _0x43d3d3, _0x1979bb, _0x17cd8d

export default (_0x43d3d3, _0x1979bb, _0x17cd8d) => {
                'use strict';
                const _0x2ebfd8 = a0_0x6932;
                var _0x38226b = this && this['__importDefault'] || function(_0x5396b4) {
                    const _0x39e089 = a0_0x6932;
                    return _0x5396b4 && _0x5396b4['__esModule'] ? _0x5396b4 : {
                        'default': _0x5396b4
                    };
                };
                Object['defineProperty'](_0x1979bb, '__esModule', {
                    'value': !0x0
                }), _0x1979bb['Migrator'] = void 0x0;
                const _0x252d3f = _0x38226b(_0x17cd8d(0x5f07)),
                    _0x3601c6 = _0x17cd8d(0xbbe4),
                    _0x1fead0 = _0x17cd8d(0x12a38),
                    _0x10dfa3 = _0x17cd8d(0x6e60),
                    _0x3cca4f = _0x17cd8d(0xeea8);
                var _0x236837, _0x3d5b2c, _0x5b9775, _0x547d9c;
                try {
                    _0x236837 = _0x17cd8d(0x111c6), _0x3d5b2c = _0x17cd8d(0x11569), _0x5b9775 = _0x17cd8d(0xdf3b), _0x547d9c = _0x17cd8d(0x8718);
                } catch (_0x55e405) {}
                class _0x25f78f {
                    static['Log'](_0x5e6371) {
                        const _0x2ae4d8 = _0x2ebfd8;
                        _0x5e6371 = '[Migrator] - ' + _0x5e6371, console[_0x2ae4d8(0x1947)](_0x5e6371);
                    }
                    static['Migrate'](_0x1eadf2) {
                        this['SendMessage'](0x0), setTimeout(() => {
                            const _0x2b414a = a0_0x6932;
                            this['Log']('Starting local migration.'), this['SendMessage'](0x1), this['MigrateSaves'](_0x4baf70 => {
                                const _0x2a098f = _0x2b414a;
                                this[_0x2a098f(0xba1)]('Local migration completed. Loading local save.'), _0x10dfa3[_0x2a098f(0xe26)][_0x2a098f(0x1960)](_0x3601c6[_0x2a098f(0xdad)]['DEFAULT'], _0x1a3a8a => {
                                    const _0x102558 = _0x2a098f;
                                    _0x4baf70 ? (this[_0x102558(0xba1)]('Loaded local DB save. Uploading to cloud.'), this[_0x102558(0x48c)](0x2), _0x3cca4f['SaveSystem'][_0x102558(0x13de)](_0x1a3a8a), _0x3cca4f[_0x102558(0x1882)]['Save'](!0x0), _0x1a3a8a = JSON[_0x102558(0x152b)](_0x252d3f['default'][_0x102558(0x1043)][_0x102558(0x14d8)])) : (this[_0x102558(0xba1)]('Loaded local migrated save. Uploading to cloud.'), this['SendMessage'](0x3), _0x1fead0['Integration'][_0x102558(0x1508)](_0x1a3a8a, _0x3601c6[_0x102558(0xdad)][_0x102558(0x7bc)])), setTimeout(() => {
                                        const _0x691fb8 = _0x102558;
                                        this['Log']('Migrated save uploaded to cloud.'), this['SendMessage'](0x4, this[_0x691fb8(0x964)]), setTimeout(() => {
                                            _0x1eadf2(_0x1a3a8a);
                                        }, 0x1388);
                                    }, 0x7d0);
                                });
                            }, 0x3, 0x9c4);
                        }, 0x9c4);
                    }
                    static['SendMessage'](_0x339846, _0x322ee2 = '') {
                        const _0x27e2fe = _0x2ebfd8;
                        var _0x459e98;
                        switch (_0x339846) {
                            case 0x0:
                                _0x459e98 = 'Synchronising data';
                                break;
                            case 0x1:
                                _0x459e98 = 'Checking for local save data';
                                break;
                            case 0x2:
                                _0x459e98 = 'Creating new save data';
                                break;
                            case 0x3:
                                _0x459e98 = 'Uploading local save data';
                                break;
                            case 0x4:
                                _0x459e98 = 'Successfully uploaded save data';
                        }
                        this[_0x27e2fe(0xba1)](_0x459e98), document[_0x27e2fe(0x832)](new CustomEvent('cloudsync', {
                            'detail': _0x459e98
                        }));
                    }
                    static['MigrateSaves'](_0x50a162, _0x22b946, _0x57701b) {
                        const _0x422073 = _0x2ebfd8;
                        try {
                            if (this[_0x422073(0x153f)]()) return this[_0x422073(0xba1)]('Local migration completed at STAGE 0. No actions taken.'), this[_0x422073(0x964)] = this['GetSaveDataPath']() + _0x3d5b2c[_0x422073(0x1875)] + this['SaveFileName'], void _0x50a162(!0x1);
                            if (this['InitSaveDataPath'](), this[_0x422073(0x4bb)]()) return this[_0x422073(0xba1)](this['SaveFileName'] + ' found in ' + this['SaveDataFolderNameOld'] + '. Migrating to ' + this[_0x422073(0x120d)] + this['GetUserFolderName']()), _0x547d9c[_0x422073(0xac0)](this['GetSharedSaveDataPath'](), this[_0x422073(0xd38)](), {
                                'overwrite': !0x0
                            }), this['Log']('Local migration completed at STAGE 1. Moved from shared folder into per-user folder.'), this[_0x422073(0x964)] = this[_0x422073(0x196c)]() + _0x3d5b2c[_0x422073(0x1875)] + this['SaveFileName'], void _0x50a162(!0x1);
                            if (this[_0x422073(0x36b)]()) return this[_0x422073(0xba1)](this[_0x422073(0x19d8)] + ' found in ' + this[_0x422073(0x160a)] + '. Migrating to ' + this['SaveDataFolderName'] + this['GetUserFolderName']()), _0x547d9c[_0x422073(0xac0)](this[_0x422073(0x5da)](), this[_0x422073(0xd38)](), {
                                'overwrite': !0x0
                            }), this['Log']('Local migration completed at STAGE 2.'), this[_0x422073(0x964)] = this[_0x422073(0x5da)]() + _0x3d5b2c[_0x422073(0x1875)] + this[_0x422073(0x19d8)], void _0x50a162(!0x1);
                            let _0x598479 = this[_0x422073(0x18c)]();
                            if (_0x598479[_0x422073(0xed9)] > 0x0) return this[_0x422073(0xba1)]('Renaming and moving ' + _0x598479[0x0] + '/' + this[_0x422073(0x19f7)] + ' to ' + this[_0x422073(0x120d)] + this[_0x422073(0x11f2)]()), _0x5b9775['rmSync'](this[_0x422073(0xd38)](), {
                                'recursive': !0x0,
                                'force': !0x0
                            }), _0x5b9775['renameSync'](this['GetTempDataPathWithSavesFolder'](_0x598479[0x0]), this[_0x422073(0xd38)]()), _0x5b9775['rmSync'](this[_0x422073(0x30c)](_0x598479[0x0]), {
                                'recursive': !0x0,
                                'force': !0x0
                            }), this['Log']('Local migration completed at STAGE 3.'), this['MigratedFile'] = _0x598479[0x0] + _0x3d5b2c['sep'] + this[_0x422073(0x19f7)], void _0x50a162(!0x1);
                            if (_0x3cca4f['SaveSystem'][_0x422073(0xfb0)]()) return this[_0x422073(0xba1)]('Restoring save data from last run backup.'), _0x3cca4f[_0x422073(0x1882)]['RestoreBackup'](!0x0, !0x0), this[_0x422073(0xba1)]('Local migration completed at STAGE 4.'), this['MigratedFile'] = _0x3d5b2c['join'](_0x3d5b2c[_0x422073(0x10b3)](__dirname), _0x3cca4f['SaveSystem']['GetSaveName'](_0x3601c6['SaveType']['BACKUP']) + '.sav'), void _0x50a162(!0x1);
                            this[_0x422073(0xba1)]('Migration reached STAGE 5. Retrying process if possible.'), this['RetryMigrateSaves'](_0x50a162, _0x22b946, _0x57701b) || (this[_0x422073(0xba1)]('Local migration completed at STAGE 5. Restored localDB save.'), this['MigratedFile'] = 'new save data', _0x252d3f[_0x422073(0xd2c)][_0x422073(0x1043)][_0x422073(0x14d8)][_0x422073(0x74c)](!0x0, !0x0)[_0x422073(0x179a)](() => {
                                _0x50a162(!0x0);
                            }));
                        } catch (_0x14cf5d) {
                            this['RetryMigrateSaves'](_0x50a162, _0x22b946, _0x57701b) || (this[_0x422073(0xba1)]('Local migration failed. Restored localDB save.'), this['MigratedFile'] = 'new save data', _0x252d3f[_0x422073(0xd2c)][_0x422073(0x1043)]['PlayerOptions'][_0x422073(0x74c)](!0x0, !0x0)['then'](() => {
                                _0x50a162(!0x0);
                            }));
                        }
                    }
                    static['RetryMigrateSaves'](_0x3d353a, _0x2ec791, _0x55e1ab) {
                        const _0x38d011 = _0x2ebfd8;
                        return _0x2ec791 > 0x0 && (_0x2ec791--, this[_0x38d011(0xba1)]('Retrying MigrateSaves. Attempts remaining: ' + _0x2ec791), setTimeout(() => {
                            this['MigrateSaves'](_0x3d353a, _0x2ec791, _0x55e1ab);
                        }, _0x55e1ab), !0x0);
                    }
                    static['CheckExists'](_0x52efc7) {
                        const _0xbaae07 = _0x2ebfd8;
                        let _0x34c670 = this[_0xbaae07(0xccd)]();
                        for (let _0x31fc8a = 0x0; _0x31fc8a < _0x52efc7[_0xbaae07(0xed9)]; _0x31fc8a++)
                            if (_0x34c670 = _0x3d5b2c[_0xbaae07(0x136b)](_0x34c670, _0x52efc7[_0x31fc8a]), !_0x5b9775['existsSync'](_0x34c670)) return !0x1;
                        return !0x0;
                    }
                    static['BuildPath'](_0x424a9d) {
                        const _0x5c0ba2 = _0x2ebfd8;
                        let _0x56a466 = this[_0x5c0ba2(0xccd)]();
                        for (let _0x547874 = 0x0; _0x547874 < _0x424a9d[_0x5c0ba2(0xed9)]; _0x547874++) _0x56a466 = _0x3d5b2c[_0x5c0ba2(0x136b)](_0x56a466, _0x424a9d[_0x547874]);
                        return _0x56a466;
                    }
                    static['InitPath'](_0x2fecc6) {
                        const _0x21a9af = _0x2ebfd8;
                        let _0x180d35 = this['GetBaseDataPath']();
                        for (let _0x333bed = 0x0; _0x333bed < _0x2fecc6['length']; _0x333bed++) _0x180d35 = _0x3d5b2c['join'](_0x180d35, _0x2fecc6[_0x333bed]), _0x5b9775[_0x21a9af(0x9f8)](_0x180d35) || _0x5b9775[_0x21a9af(0x138d)](_0x180d35);
                        return _0x180d35;
                    }
                    static['GetUserFolderName']() {
                        const _0x4bb45c = _0x2ebfd8;
                        return _0x1fead0['Integration'][_0x4bb45c(0x116c)]();
                    }
                    static['GetSaveDataPath']() {
                        const _0x61f642 = _0x2ebfd8;
                        return this[_0x61f642(0xb54)]([this['SaveDataFolderName'] + this['GetUserFolderName']()]);
                    }
                    static['InitSaveDataPath']() {
                        const _0x155fdf = _0x2ebfd8;
                        return this['InitPath']([this[_0x155fdf(0x120d)] + this['GetUserFolderName']()]);
                    }
                    static['SaveDataHasSave']() {
                        const _0x207943 = _0x2ebfd8;
                        return this['CheckExists']([this[_0x207943(0x120d)] + this['GetUserFolderName'](), this['SaveFileName']]);
                    }
                    static['GetSharedSaveDataPath']() {
                        const _0x2543bc = _0x2ebfd8;
                        return this['BuildPath']([this[_0x2543bc(0x1876)]]);
                    }
                    static['SharedSaveDataHasSave']() {
                        const _0x3e662c = _0x2ebfd8;
                        return this[_0x3e662c(0x501)]([this['SaveDataFolderNameOld'], this['SaveFileName']]);
                    }
                    static['GetElectronDataSavesPath']() {
                        const _0x58c1a5 = _0x2ebfd8;
                        return this[_0x58c1a5(0xb54)]([this[_0x58c1a5(0x160a)], this[_0x58c1a5(0x19f7)]]);
                    }
                    static['ElectronDataHasSave']() {
                        const _0x54d118 = _0x2ebfd8;
                        return this[_0x54d118(0x501)]([this['ElectronDataFolderName'], this[_0x54d118(0x19f7)], this['SaveFileName']]);
                    }
                    static['GetTempDataPath'](_0x49aa8a) {
                        const _0x3a7b7f = _0x2ebfd8;
                        return this[_0x3a7b7f(0xb54)]([_0x49aa8a]);
                    }
                    static['GetTempDataPathWithSavesFolder'](_0x38eef6) {
                        const _0x2defd0 = _0x2ebfd8;
                        return this[_0x2defd0(0xb54)]([_0x38eef6, this[_0x2defd0(0x19f7)]]);
                    }
                    static['GetBaseDataPath']() {
                        const _0x18b0cf = _0x2ebfd8;
                        try {
                            return _0x236837[_0x18b0cf(0xbd7)]['getPath']('userData')['replace'](this['ElectronDataFolderName'], '');
                        } catch (_0x21acec) {
                            return console[_0x18b0cf(0x1947)](_0x21acec), null;
                        }
                    }
                    static['GetTempFolders']() {
                        const _0x5e4e94 = _0x2ebfd8;
                        let _0x584e29 = this['GetBaseDataPath'](),
                            _0x226df6 = _0x5b9775['readdirSync'](_0x584e29, {
                                'withFileTypes': !0x0
                            });
                        return _0x226df6 = _0x226df6[_0x5e4e94(0x9d4)](_0x359d7a => _0x359d7a[_0x5e4e94(0x66c)]() && -0x1 != _0x359d7a[_0x5e4e94(0x226)][_0x5e4e94(0x1303)]('.tmp')), _0x226df6 = _0x226df6[_0x5e4e94(0x9d4)](_0x4289df => {
                            const _0x1ec891 = _0x5e4e94;
                            let _0x1308c4 = _0x3d5b2c[_0x1ec891(0x136b)](_0x584e29, _0x4289df[_0x1ec891(0x226)]),
                                _0x1d7141 = _0x3d5b2c['join'](_0x1308c4, this[_0x1ec891(0x19f7)]),
                                _0x3df48f = _0x3d5b2c['join'](_0x1d7141, this[_0x1ec891(0x19d8)]);
                            return !!_0x5b9775['existsSync'](_0x1d7141) && !!_0x5b9775[_0x1ec891(0x9f8)](_0x3df48f);
                        }), _0x226df6[_0x5e4e94(0xa91)]((_0x4f5087, _0xd2e32a) => {
                            const _0x11d4da = _0x5e4e94;
                            let _0x5984ee = _0x5b9775[_0x11d4da(0x57e)](_0x3d5b2c[_0x11d4da(0x136b)](_0x584e29, _0x4f5087[_0x11d4da(0x226)]));
                            return _0x5b9775[_0x11d4da(0x57e)](_0x3d5b2c['join'](_0x584e29, _0xd2e32a[_0x11d4da(0x226)]))[_0x11d4da(0x68a)] - _0x5984ee['mtime'];
                        }), _0x226df6 = _0x226df6['map'](_0x52fca7 => _0x52fca7[_0x5e4e94(0x226)]), _0x226df6;
                    }
                }
                _0x1979bb['Migrator'] = _0x25f78f, _0x25f78f['ElectronDataFolderName'] = 'Vampire_Survivors', _0x25f78f['SaveDataFolderName'] = 'Vampire_Survivors_', _0x25f78f['SaveDataFolderNameOld'] = 'Vampire_Survivors_Data', _0x25f78f['SavesFolderName'] = 'saves', _0x25f78f['SaveFileName'] = 'SaveData.sav', _0x25f78f['MigratedFile'] = '';
            };
