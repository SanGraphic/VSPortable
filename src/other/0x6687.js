// Module 0x6687
// Args: _0x22115f, _0x3f447b, _0x3b8c35

export default (_0x22115f, _0x3f447b, _0x3b8c35) => {
                'use strict';
                const _0x1fb5db = a0_0x6932;
                var _0x290cf9 = this && this['__importDefault'] || function(_0x30ebaf) {
                    const _0x4ef464 = _0x1fb5db;
                    return _0x30ebaf && _0x30ebaf[_0x4ef464(0x16f1)] ? _0x30ebaf : {
                        'default': _0x30ebaf
                    };
                };
                Object['defineProperty'](_0x3f447b, '__esModule', {
                    'value': !0x0
                });
                const _0x24fb63 = _0x290cf9(_0x3b8c35(0x11163));
                _0x3f447b['default'] = class {
                    constructor(_0x26e489) {
                        const _0xc683dd = _0x1fb5db;
                        this[_0xc683dd(0x1924)] = new Array(), this['spawned'] = new Array(), this[_0xc683dd(0x6d2)] = _0x26e489;
                    } ['SpawnAt'](_0x2d7c07, _0x267819, _0x390757) {
                        const _0x5ab933 = _0x1fb5db;
                        let _0x3b8b7e = 0x12c;
                        if (_0x390757 > 0x0 && this[_0x5ab933(0x13f4)][_0x5ab933(0xed9)] > 0x1f4) _0x3b8b7e = 0x96;
                        else {
                            if (_0x390757 > 0x0 && this['spawned'][_0x5ab933(0xed9)] > 0x3e8) return;
                        }
                        const _0x4c2203 = this[_0x5ab933(0xdfb)]();
                        return _0x4c2203['OnRecycle'](_0x2d7c07, _0x267819, _0x390757, _0x3b8b7e), _0x4c2203;
                    } ['Spawn']() {
                        const _0xc1ca35 = _0x1fb5db;
                        let _0x120463 = this[_0xc1ca35(0x1924)]['pop']();
                        return _0x120463 || (_0x120463 = this[_0xc1ca35(0x18c8)](), _0x120463['Init']()), this['spawned'][_0xc1ca35(0x1564)](_0x120463), _0x120463;
                    } ['Return'](_0x4c8503) {
                        const _0x19aceb = _0x1fb5db;
                        var _0x225f93 = this[_0x19aceb(0x13f4)][_0x19aceb(0x1303)](_0x4c8503);
                        _0x225f93 >= 0x0 ? this['spawned']['splice'](_0x225f93, 0x1) : console[_0x19aceb(0x1947)]('DamageNumber pool error'), this['stored'][_0x19aceb(0x1564)](_0x4c8503);
                    } ['Make']() {
                        const _0x427001 = _0x1fb5db;
                        return new _0x24fb63[(_0x427001(0xd2c))](this, 0x0, 0x0);
                    }
                };
            };
