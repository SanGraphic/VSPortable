// Module 0x6e60
// Args: _0x5261ed, _0x21e135, _0x5c2177

export default (_0x5261ed, _0x21e135, _0x5c2177) => {
                'use strict';
                const _0x9f1c6a = a0_0x6932;
                Object['defineProperty'](_0x21e135, '__esModule', {
                    'value': !0x0
                }), _0x21e135['LocalStorage'] = void 0x0;
                const _0x218801 = _0x5c2177(0x12a38),
                    _0x4523df = _0x5c2177(0x7813),
                    _0x1eaa09 = _0x5c2177(0xbbe4),
                    _0x217214 = _0x5c2177(0xeea8);
                var _0x3e9409, _0x42fe56, _0x2ec5d7;
                try {
                    _0x3e9409 = _0x5c2177(0x111c6), _0x42fe56 = _0x5c2177(0x11569), _0x2ec5d7 = _0x5c2177(0xdf3b);
                } catch (_0x56c253) {}
                class _0x4cf294 {
                    static['Log'](_0x5a8f03) {
                        const _0x20a98e = _0x9f1c6a;
                        _0x5a8f03 = '[LocalStorage] - ' + _0x5a8f03, console[_0x20a98e(0x1947)](_0x5a8f03);
                    }
                    static['Save'](_0x471ea4, _0x103fbe) {
                        const _0x2583bb = _0x9f1c6a;
                        try {
                            let _0x1c7b7e = _0x103fbe === _0x1eaa09[_0x2583bb(0xdad)][_0x2583bb(0x7ce)] ? this[_0x2583bb(0x1aa3)]() : this[_0x2583bb(0xf0d)]();
                            _0x2ec5d7['existsSync'](_0x1c7b7e) || _0x2ec5d7['mkdirSync'](_0x1c7b7e), _0x2ec5d7[_0x2583bb(0x1162)](_0x42fe56[_0x2583bb(0x136b)](_0x1c7b7e, _0x217214['SaveSystem'][_0x2583bb(0x1003)](_0x103fbe) + '.sav'), _0x471ea4);
                        } catch (_0x5774f1) {
                            this[_0x2583bb(0xba1)](_0x5774f1);
                        }
                    }
                    static['Load'](_0x20bcea, _0x41f8bc) {
                        const _0x342eb3 = _0x9f1c6a;
                        try {
                            let _0x38a9f6 = _0x20bcea === _0x1eaa09['SaveType']['BACKUP'] ? this[_0x342eb3(0x1aa3)]() : this['GetSaveBasePath']();
                            var _0x144576 = _0x2ec5d7['readFileSync'](_0x42fe56[_0x342eb3(0x136b)](_0x38a9f6, _0x217214['SaveSystem'][_0x342eb3(0x1003)](_0x20bcea) + '.sav'));
                            JSON['parse'](_0x144576), _0x41f8bc(_0x144576[_0x342eb3(0xcc6)]());
                        } catch (_0x1b7114) {
                            this[_0x342eb3(0xba1)](_0x1b7114), _0x41f8bc(null);
                        }
                    }
                    static['HasLastRunBackup']() {
                        const _0x5eb3 = _0x9f1c6a;
                        return _0x2ec5d7[_0x5eb3(0x9f8)](_0x42fe56['join'](this['GetLastRunPath'](), _0x217214[_0x5eb3(0x1882)][_0x5eb3(0x1003)](_0x1eaa09[_0x5eb3(0xdad)][_0x5eb3(0x7ce)]) + '.sav'));
                    }
                    static['GetSaveBasePath']() {
                        const _0x2685f4 = _0x9f1c6a;
                        let _0xac033c = _0x3e9409[_0x2685f4(0xbd7)][_0x2685f4(0xca0)]('userData'),
                            _0x3740ea = _0x218801[_0x2685f4(0x116e)]['getUserID']() || '';
                        return _0x218801[_0x2685f4(0x116e)][_0x2685f4(0xbad)]() == _0x4523df[_0x2685f4(0x182d)]['STOVE'] && (_0x3740ea = 'Stove'), '' != _0x3740ea && null != _0x3740ea && _0x3740ea != (-0x1)['toString']() || (_0x3740ea = 'Standalone'), _0xac033c[_0x2685f4(0xa0d)]('Vampire_Survivors', 'Vampire_Survivors_' + _0x3740ea);
                    }
                    static['GetLastRunPath']() {
                        return _0x42fe56['resolve'](__dirname);
                    }
                }
                _0x21e135['LocalStorage'] = _0x4cf294, _0x4cf294['status'] = '';
            };
