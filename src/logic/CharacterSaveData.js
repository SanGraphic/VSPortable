// Module 0x9f2f
// Args: _0x3bf2c0, _0x17dde4, _0x235539

export default (_0x3bf2c0, _0x17dde4, _0x235539) => {
                'use strict';
                const _0x1c724c = a0_0x6932;
                var _0x4de95e = this && this['__importDefault'] || function(_0x2558bf) {
                    return _0x2558bf && _0x2558bf['__esModule'] ? _0x2558bf : {
                        'default': _0x2558bf
                    };
                };
                Object['defineProperty'](_0x17dde4, '__esModule', {
                    'value': !0x0
                }), _0x17dde4['CharacterSaveManager'] = _0x17dde4['CharacterSaveData'] = void 0x0;
                const _0x487f05 = _0x4de95e(_0x235539(0x15dd)),
                    _0x5a1040 = _0x4de95e(_0x235539(0x5f07));
                class _0x1a72a4 {
                    constructor() {
                        const _0x58673d = _0x1c724c;
                        this['complete'] = 0x0, this[_0x58673d(0x1a57)] = !0x1, this[_0x58673d(0xd9e)] = !0x1, this['inverse'] = !0x1, this[_0x58673d(0xfbe)] = 0x0, this['startedRun'] = 0x0, this[_0x58673d(0x5a3)] = _0x5a1040['default'][_0x58673d(0x1043)][_0x58673d(0x14d8)][_0x58673d(0x1856)];
                    }
                }
                _0x17dde4['CharacterSaveData'] = _0x1a72a4;
                class _0x1f1429 {
                    ['getCharacterStageData']() {
                        const _0x4311cb = _0x1c724c;
                        let _0x6084fa = _0x487f05['default'][_0x5a1040['default']['Core'][_0x4311cb(0x14d8)]['SelectedCharacter']];
                        _0x6084fa && (_0x6084fa = _0x6084fa[0x0]), void 0x0 === _0x6084fa[_0x4311cb(0x164c)] && (_0x6084fa[_0x4311cb(0x164c)] = []);
                        let _0x5ea569 = new _0x1a72a4();
                        return _0x6084fa[_0x4311cb(0x164c)]['find']((_0x3c4168, _0x263590) => {
                            const _0x246609 = _0x4311cb;
                            if (_0x3c4168[_0x246609(0x5a3)] === _0x5a1040['default'][_0x246609(0x1043)]['PlayerOptions']['SelectedStage']) {
                                for (const _0x2fb6d4 in _0x3c4168) _0x5ea569[_0x2fb6d4] = _0x3c4168[_0x2fb6d4];
                                return !0x0;
                            }
                        }), _0x5ea569;
                    } ['setCharacterStageData'](_0x5104cc) {
                        const _0x2a61c3 = _0x1c724c;
                        let _0xd8fbed = _0x487f05[_0x2a61c3(0xd2c)][_0x5a1040[_0x2a61c3(0xd2c)][_0x2a61c3(0x1043)]['PlayerOptions']['SelectedCharacter']];
                        _0xd8fbed && (_0xd8fbed = _0xd8fbed[0x0]), void 0x0 === _0xd8fbed[_0x2a61c3(0x164c)] && (_0xd8fbed['stageData'] = []);
                        let _0x289306 = !0x1;
                        _0xd8fbed['stageData'][_0x2a61c3(0x1e6)]((_0x4ed7ff, _0x21cb89) => {
                            const _0x5cf2ef = _0x2a61c3;
                            if (_0x4ed7ff['type'] === _0x5a1040[_0x5cf2ef(0xd2c)]['Core'][_0x5cf2ef(0x14d8)]['SelectedStage']) {
                                for (const _0x20b0dc in _0x5104cc) _0xd8fbed['stageData'][_0x21cb89][_0x20b0dc] = _0x5104cc[_0x20b0dc];
                                return _0x289306 = !0x0, !0x0;
                            }
                        }), _0x289306 || _0xd8fbed['stageData'][_0x2a61c3(0x1564)](_0x5104cc);
                    }
                }
                _0x17dde4['CharacterSaveManager'] = _0x1f1429, _0x17dde4['default'] = _0x1f1429;
            };
