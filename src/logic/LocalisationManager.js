// Module 0x9a15
// Args: _0x3be402, _0x1d7cda, _0x57a3d9

export default (_0x3be402, _0x1d7cda, _0x57a3d9) => {
                'use strict';
                const _0x4b6e56 = a0_0x6932;
                var _0x5dc93f = this && this['__importDefault'] || function(_0x1827c8) {
                    return _0x1827c8 && _0x1827c8['__esModule'] ? _0x1827c8 : {
                        'default': _0x1827c8
                    };
                };
                Object['defineProperty'](_0x1d7cda, '__esModule', {
                    'value': !0x0
                }), _0x1d7cda['LocalisationManager'] = void 0x0;
                const _0x1434f8 = _0x5dc93f(_0x57a3d9(0x42c9)),
                    _0x5ac79c = _0x5dc93f(_0x57a3d9(0x15866)),
                    _0x206ae3 = _0x5dc93f(_0x57a3d9(0x15dd)),
                    _0x7c398e = _0x5dc93f(_0x57a3d9(0x15abc)),
                    _0x2a1280 = _0x5dc93f(_0x57a3d9(0x4d17)),
                    _0x112542 = _0x5dc93f(_0x57a3d9(0xb6a1)),
                    _0x2b485d = _0x5dc93f(_0x57a3d9(0x16800)),
                    _0x96628f = _0x5dc93f(_0x57a3d9(0x14639)),
                    _0x11c372 = _0x5dc93f(_0x57a3d9(0x3107)),
                    _0x794934 = _0x5dc93f(_0x57a3d9(0x5f07)),
                    _0x3f2061 = _0x57a3d9(0x12a38);
                class _0x26bd36 {
                    constructor(_0x4f6d19) {
                        const _0x38908e = _0x4b6e56;
                        this[_0x38908e(0x6d7)] = 'fontANY, Courier, serif, sans-serif', this[_0x38908e(0x1409)] = [], this[_0x38908e(0xc15)] = ['en', 'de', 'fr', 'ko', 'es', 'ja', 'zh-CN'], this[_0x38908e(0x58f)] = 'en', this['langCodeList'] = _0x4f6d19[_0x38908e(0x268)][_0x38908e(0xf31)][_0x38908e(0x544)]('langKeys'), this['langData'] = _0x4f6d19[_0x38908e(0x268)][_0x38908e(0xf31)][_0x38908e(0x544)]('lang'), this['langWeaponData'] = _0x4f6d19['cache'][_0x38908e(0xf31)][_0x38908e(0x544)]('weaponLang'), this['langAchievementData'] = _0x4f6d19['cache'][_0x38908e(0xf31)][_0x38908e(0x544)]('achievementLang'), this[_0x38908e(0x5f8)] = _0x4f6d19[_0x38908e(0x268)][_0x38908e(0xf31)]['get']('itemLang'), this['langPowerupData'] = _0x4f6d19[_0x38908e(0x268)]['json'][_0x38908e(0x544)]('powerUpLang'), this[_0x38908e(0x11c4)] = _0x4f6d19['cache']['json']['get']('stageLang'), this[_0x38908e(0x10a3)] = _0x4f6d19['cache'][_0x38908e(0xf31)]['get']('charLang'), this['langArcanaData'] = _0x4f6d19[_0x38908e(0x268)][_0x38908e(0xf31)][_0x38908e(0x544)]('arcanaLang'), this[_0x38908e(0x70c)] = _0x4f6d19[_0x38908e(0x268)][_0x38908e(0xf31)]['get']('secretLang'), this[_0x38908e(0xee3)] = _0x4f6d19[_0x38908e(0x268)]['json']['get']('enemiesLang');
                    } ['init']() {
                        const _0xa61b36 = _0x4b6e56;
                        let _0x59d321 = _0x3f2061['Integration'][_0xa61b36(0xa20)]();
                        if (_0x59d321) {
                            for (let _0x24bc43 = 0x0; _0x24bc43 < this[_0xa61b36(0xc15)][_0xa61b36(0xed9)]; _0x24bc43++)
                                if (this['langData'][this[_0xa61b36(0xc15)][_0x24bc43]]['api'] == _0x59d321) {
                                    _0x59d321 = this['langCodeList'][_0x24bc43];
                                    break;
                                }
                        }
                        try {
                            this[_0xa61b36(0xf38)](_0x794934[_0xa61b36(0xd2c)][_0xa61b36(0x1043)][_0xa61b36(0x14d8)][_0xa61b36(0x1566)] || _0x59d321 || 'en');
                        } catch (_0x3bb1a9) {
                            window['alert']('localisation error: ' + _0x3bb1a9), console[_0xa61b36(0x1947)](_0x3bb1a9);
                        }
                    } ['setLangCode'](_0x4bbc08) {
                        const _0xd7bbfd = _0x4b6e56;
                        if (this['langCode'] = _0x4bbc08, 'ko' == this[_0xd7bbfd(0x58f)] || 'ja' == this['langCode'] || 'zh-CN' == this[_0xd7bbfd(0x58f)] ? this[_0xd7bbfd(0x6d7)] = 'fontKO, fontANY, Courier, serif, sans-serif' : this[_0xd7bbfd(0x6d7)] = 'Courier, fontANY, serif, sans-serif', this['langWeaponData'][this['langCode']] || (this['langCode'] = 'en'), this['langWeaponData'][this[_0xd7bbfd(0x58f)]] && this[_0xd7bbfd(0x590)][this[_0xd7bbfd(0x58f)]][_0xd7bbfd(0x8ef)]) {
                            this[_0xd7bbfd(0x1409)] = [];
                            for (let _0x5984f8 = 0x0; _0x5984f8 < this['langCodeList']['length']; _0x5984f8++) this[_0xd7bbfd(0x1409)][_0xd7bbfd(0x1564)](this[_0xd7bbfd(0x5e8)][this[_0xd7bbfd(0xc15)][_0x5984f8]][_0xd7bbfd(0x1a1)]);
                            this[_0xd7bbfd(0xf4f)](_0x11c372['default'], this[_0xd7bbfd(0x590)]), this['localiseObject'](_0x112542[_0xd7bbfd(0xd2c)], this['langPowerupData']), this[_0xd7bbfd(0xf4f)](_0x96628f[_0xd7bbfd(0xd2c)], this['langStageData']), this['localiseObject'](_0x1434f8[_0xd7bbfd(0xd2c)], this[_0xd7bbfd(0x2ba)]), this[_0xd7bbfd(0xf4f)](_0x2a1280[_0xd7bbfd(0xd2c)], this[_0xd7bbfd(0x5f8)]), this[_0xd7bbfd(0xf4f)](_0x206ae3['default'], this['langCharacterData']), this['localiseObject'](_0x5ac79c['default'], this[_0xd7bbfd(0xf6f)]), this['localiseObject'](_0x2b485d[_0xd7bbfd(0xd2c)], this[_0xd7bbfd(0x70c)]), this['localiseObject'](_0x7c398e['default'], this[_0xd7bbfd(0xee3)]);
                        }
                        _0x794934['default'][_0xd7bbfd(0x1043)][_0xd7bbfd(0x14d8)][_0xd7bbfd(0x1566)] != this['langCode'] && (_0x794934[_0xd7bbfd(0xd2c)]['Core'][_0xd7bbfd(0x14d8)]['Language'] = this[_0xd7bbfd(0x58f)], _0x794934['default']['Core']['PlayerOptions'][_0xd7bbfd(0x3d6)]());
                    } ['getLangNative']() {
                        const _0x1f99e5 = _0x4b6e56;
                        return this[_0x1f99e5(0x5e8)][this[_0x1f99e5(0x1320)]()]['native'];
                    } ['localiseObject'](_0x92551b, _0x46a63f) {
                        const _0x19455a = _0x4b6e56;
                        for (const _0x5b610f in _0x92551b)
                            if (_0x46a63f && _0x46a63f[this['langCode']] && _0x46a63f[this['langCode']][_0x19455a(0x8ef)] && _0x46a63f[this[_0x19455a(0x58f)]][_0x19455a(0x8ef)][_0x5b610f]) {
                                if (_0x92551b[_0x5b610f]['length']) {
                                    for (const _0xbb9259 in _0x92551b[_0x5b610f][0x0]) _0x46a63f[this['langCode']][_0x19455a(0x8ef)][_0x5b610f][_0xbb9259] && (_0x92551b[_0x5b610f][0x0][_0xbb9259] = _0x46a63f[this['langCode']][_0x19455a(0x8ef)][_0x5b610f][_0xbb9259]);
                                } else {
                                    for (const _0x5d136a in _0x92551b[_0x5b610f]) _0x46a63f[this[_0x19455a(0x58f)]]['translations'][_0x5b610f][_0x5d136a] && (_0x92551b[_0x5b610f][_0x5d136a] = _0x46a63f[this[_0x19455a(0x58f)]][_0x19455a(0x8ef)][_0x5b610f][_0x5d136a]);
                                }
                            }
                    } ['getLang'](_0x42f4e4, _0x474c5f = []) {
                        const _0x1ffe54 = _0x4b6e56;
                        if (this['langData'][this['langCode']] || (this['langCode'] = 'en'), !this[_0x1ffe54(0x5e8)][this['langCode']][_0x1ffe54(0x8ef)]) {
                            if (!this['langData']['en'][_0x1ffe54(0x8ef)]) return '';
                            this[_0x1ffe54(0x58f)] = 'en';
                        }
                        if (!this[_0x1ffe54(0x5e8)][this['langCode']]['translations'][_0x42f4e4]) {
                            if (!this[_0x1ffe54(0x5e8)]['en']['translations'][_0x42f4e4]) return '';
                            this[_0x1ffe54(0x58f)] = 'en';
                        }
                        let _0x2bc13d = this['langData'][this[_0x1ffe54(0x58f)]]['translations'][_0x42f4e4];
                        return this[_0x1ffe54(0xcfc)](_0x2bc13d, _0x474c5f);
                    } ['textSubstitution'](_0x1f9bbd, _0x2348c2 = []) {
                        const _0x2944ab = _0x4b6e56;
                        for (let _0x26395b = 0x0; _0x26395b < _0x2348c2['length']; _0x26395b++) _0x1f9bbd = _0x1f9bbd[_0x2944ab(0xa0d)]('%' + _0x26395b, _0x2348c2[_0x26395b]);
                        return _0x1f9bbd;
                    } ['getLangCode']() {
                        const _0x4827b1 = _0x4b6e56;
                        return this[_0x4827b1(0x58f)];
                    } ['scaleToMaxFast'](_0x54b05c, _0x3e27fc, _0x41ead2, _0xb0bab4) {
                        const _0x314d48 = _0x4b6e56;
                        var _0x502f7e = 'fontSize',
                            _0x592a22 = 'BitmapText' == _0x54b05c[_0x314d48(0x5a3)];
                        if (_0x592a22 && (_0x502f7e = '_fontSize', _0x54b05c['wordWrap'] || (_0x54b05c['maxWidth'] = 0x0)), void 0x0 === _0x54b05c[_0x314d48(0x1a4b)] && (_0x54b05c[_0x314d48(0x1a4b)] = _0x592a22 ? _0x54b05c[_0x502f7e] : _0x54b05c[_0x314d48(0x72b)][_0x502f7e]), _0x54b05c[_0x502f7e] = _0x54b05c[_0x314d48(0x1a4b)], void 0x0 === _0x54b05c['originalScaleX'] && (_0x54b05c['originalScaleX'] = _0x54b05c[_0x314d48(0x3a8)]), void 0x0 === _0x54b05c[_0x314d48(0x17bd)] && (_0x54b05c['originalScaleY'] = _0x54b05c[_0x314d48(0x1721)]), _0x3e27fc) {
                            var _0x280966 = _0x54b05c[_0x314d48(0x3a8)] = _0x54b05c[_0x314d48(0x1745)],
                                _0xf7acd9 = _0x54b05c['scaleY'] = _0x54b05c['originalScaleY'];
                            void 0x0 !== _0x41ead2 && null != _0x41ead2 && 0x0 != _0x41ead2 && _0x54b05c['width'] > _0x41ead2 && (_0x280966 = _0x41ead2 / _0x54b05c['width']), void 0x0 !== _0xb0bab4 && null != _0xb0bab4 && 0x0 != _0xb0bab4 && _0x54b05c[_0x314d48(0x140e)] > _0xb0bab4 && (_0xf7acd9 = _0xb0bab4 / _0x54b05c['height']);
                            var _0x3b67ea = Math['min'](_0x280966, _0xf7acd9, 0x1);
                            _0x54b05c['scaleX'] = _0x54b05c['originalScaleX'] * _0x3b67ea, _0x54b05c['scaleY'] = _0x54b05c[_0x314d48(0x17bd)] * _0x3b67ea;
                        } else {
                            _0x592a22 ? _0x54b05c[_0x502f7e] = _0x54b05c[_0x314d48(0x1a4b)] : (_0x54b05c['style'][_0x314d48(0x9cc)] = _0x54b05c[_0x314d48(0x1a4b)] + ' ' + _0x54b05c[_0x314d48(0x72b)]['fontFamily'], _0x54b05c[_0x314d48(0x72b)][_0x502f7e] = _0x54b05c[_0x314d48(0x1a4b)], _0x54b05c[_0x314d48(0xe83)]());
                            var _0x294bab = _0x54b05c[_0x502f7e] && Number(_0x54b05c[_0x502f7e][_0x314d48(0xcc6)]()['replace']('px', ''));
                            let _0x3a6ed4 = _0x294bab;
                            var _0xa2e3d9 = _0x294bab;
                            if (void 0x0 !== _0x41ead2 && null != _0x41ead2 && 0x0 != _0x41ead2) {
                                if (_0x54b05c['maxWidth'] = _0x41ead2, _0x592a22) {
                                    for (; _0xa2e3d9 > 0x1 && _0x54b05c['width'] > _0x41ead2;) _0xa2e3d9 -= 0x1, _0x54b05c[_0x502f7e] = _0xa2e3d9;
                                } else {
                                    for (; _0xa2e3d9 > 0x1 && _0x54b05c[_0x314d48(0x173c)] > _0x41ead2;) _0xa2e3d9 -= 0x1, _0x54b05c[_0x314d48(0x72b)][_0x314d48(0x9cc)] = _0xa2e3d9 + 'px ' + _0x54b05c[_0x314d48(0x72b)][_0x314d48(0xb8b)], _0x54b05c['style'][_0x502f7e] = _0xa2e3d9 + 'px', _0x54b05c[_0x314d48(0xe83)]();
                                }
                                _0x3a6ed4 = _0xa2e3d9;
                            }
                            if (void 0x0 !== _0xb0bab4 && null != _0xb0bab4 && 0x0 != _0xb0bab4) {
                                if (_0x592a22) {
                                    for (; _0xa2e3d9 > 0x1 && _0x54b05c[_0x314d48(0x140e)] > _0xb0bab4;) _0xa2e3d9 -= 0x1, _0x54b05c[_0x502f7e] = _0xa2e3d9;
                                } else {
                                    for (; _0xa2e3d9 > 0x1 && _0x54b05c['height'] > _0xb0bab4;) _0xa2e3d9 -= 0x1, _0x54b05c['style'][_0x314d48(0x9cc)] = _0xa2e3d9 + 'px ' + _0x54b05c['style']['fontFamily'], _0x54b05c['style'][_0x502f7e] = _0xa2e3d9 + 'px', _0x54b05c['updateText']();
                                }
                                _0x3a6ed4 = _0xa2e3d9;
                            }
                            _0x3a6ed4 < 0x1 && (_0x3a6ed4 = 0x1), _0x592a22 ? _0x54b05c[_0x502f7e] = _0x3a6ed4 : (_0x54b05c[_0x314d48(0x72b)]['_font'] = _0x3a6ed4 + 'px ' + _0x54b05c['style']['fontFamily'], _0x54b05c[_0x314d48(0x72b)][_0x502f7e] = _0x3a6ed4 + 'px', _0x54b05c[_0x314d48(0xe83)]());
                        }
                    }
                }
                _0x1d7cda['LocalisationManager'] = _0x26bd36, _0x1d7cda['default'] = _0x26bd36;
            };
