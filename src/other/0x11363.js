// Module 0x11363
// Args: _0x3c158e, _0x4ee2e0, _0x2bff93

export default (_0x3c158e, _0x4ee2e0, _0x2bff93) => {
                'use strict';
                const _0x40db91 = a0_0x6932;
                var _0x7c7895 = this && this['__createBinding'] || (Object['create'] ? function(_0x351340, _0x1b3861, _0x905fac, _0x56a216) {
                        const _0x4df771 = _0x40db91;
                        void 0x0 === _0x56a216 && (_0x56a216 = _0x905fac);
                        var _0x1de7ff = Object['getOwnPropertyDescriptor'](_0x1b3861, _0x905fac);
                        _0x1de7ff && !('get' in _0x1de7ff ? !_0x1b3861['__esModule'] : _0x1de7ff['writable'] || _0x1de7ff[_0x4df771(0xf70)]) || (_0x1de7ff = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x1b3861[_0x905fac];
                            }
                        }), Object[_0x4df771(0x811)](_0x351340, _0x56a216, _0x1de7ff);
                    } : function(_0x5dd88f, _0x30f3a4, _0xa3ca61, _0x238468) {
                        void 0x0 === _0x238468 && (_0x238468 = _0xa3ca61), _0x5dd88f[_0x238468] = _0x30f3a4[_0xa3ca61];
                    }),
                    _0x1f8a68 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x4787f2, _0xb563a4) {
                        Object['defineProperty'](_0x4787f2, 'default', {
                            'enumerable': !0x0,
                            'value': _0xb563a4
                        });
                    } : function(_0x529e7b, _0x2c1d5a) {
                        const _0x28c1ec = _0x40db91;
                        _0x529e7b[_0x28c1ec(0xd2c)] = _0x2c1d5a;
                    }),
                    _0x5df154 = this && this['__importStar'] || function(_0x125e36) {
                        const _0x47c105 = _0x40db91;
                        if (_0x125e36 && _0x125e36[_0x47c105(0x16f1)]) return _0x125e36;
                        var _0x4f8c7e = {};
                        if (null != _0x125e36) {
                            for (var _0x3729c7 in _0x125e36) 'default' !== _0x3729c7 && Object['prototype'][_0x47c105(0x2cf)]['call'](_0x125e36, _0x3729c7) && _0x7c7895(_0x4f8c7e, _0x125e36, _0x3729c7);
                        }
                        return _0x1f8a68(_0x4f8c7e, _0x125e36), _0x4f8c7e;
                    },
                    _0x37a8d9 = this && this['__importDefault'] || function(_0x2bd1e0) {
                        const _0x1b8948 = _0x40db91;
                        return _0x2bd1e0 && _0x2bd1e0[_0x1b8948(0x16f1)] ? _0x2bd1e0 : {
                            'default': _0x2bd1e0
                        };
                    };
                Object['defineProperty'](_0x4ee2e0, '__esModule', {
                    'value': !0x0
                });
                const _0x26d29f = _0x2bff93(0x16c14),
                    _0x7ea051 = _0x37a8d9(_0x2bff93(0xccae)),
                    _0x11a3ee = _0x5df154(_0x2bff93(0x5f07)),
                    _0x10461e = _0x37a8d9(_0x2bff93(0x169b4)),
                    _0x229929 = _0x37a8d9(_0x2bff93(0x1fd7)),
                    _0x4058fb = _0x37a8d9(_0x2bff93(0x1715a)),
                    _0x10c103 = _0x37a8d9(_0x2bff93(0x5103)),
                    _0x5bf7e0 = _0x37a8d9(_0x2bff93(0x3e51)),
                    _0x439d9b = _0x2bff93(0x12a38);
                class _0x5f5960 extends Phaser['Scene'] {
                    constructor() {
                        const _0x19ab65 = _0x40db91;
                        super({
                            'key': _0x10461e[_0x19ab65(0xd2c)][_0x19ab65(0x17eb)]
                        });
                    } ['UpdateCoins']() {
                        const _0xb43479 = _0x40db91;
                        _0x11a3ee['default'][_0xb43479(0x1043)]['PlayerOptions']['Coins'] < 0x989680 ? this[_0xb43479(0x15a)][_0xb43479(0x758)] = _0x11a3ee['default'][_0xb43479(0x1043)]['PlayerOptions']['Coins']['toFixed'](0x0) : this['CoinsText']['text'] = '9999999';
                    } ['preload']() {} ['create']() {
                        const _0x434a80 = _0x40db91,
                            _0x1d64f0 = 0.5 * this['renderer']['width'];
                        this[_0x434a80(0x14b7)] = this[_0x434a80(0x18bd)][_0x434a80(0x568)](0x0, 0x0, 'UI', 'blackDot.png')['setScale'](this[_0x434a80(0x12f9)][_0x434a80(0x173c)], 0x80 * _0x11a3ee['MASTER_SCALE'])[_0x434a80(0xf8e)](0x0)['setAlpha'](0.5), this[_0x434a80(0x1775)] = new _0x26d29f[(_0x434a80(0x1a31))](this, _0x7ea051['default'][_0x434a80(0x1775)], {
                            'x': _0x11a3ee[_0x434a80(0x1e0)]['right'] - 0x6,
                            'y': 0x3,
                            'width': 0x30,
                            'height': 0x1e
                        })['setScale'](0x4 * _0x11a3ee['MASTER_SCALE'])['setOrigin'](0x1, 0x0)[_0x434a80(0xb4a)](Number['MAX_SAFE_INTEGER']), this[_0x434a80(0x18bd)][_0x434a80(0x1a88)](this['BackButton']), this[_0x434a80(0x1608)] = new _0x26d29f[(_0x434a80(0x1a31))](this, _0x7ea051[_0x434a80(0xd2c)][_0x434a80(0x1608)], {
                            'x': _0x11a3ee[_0x434a80(0x1e0)][_0x434a80(0x15d9)] - 0x6,
                            'y': 0x3,
                            'width': 0x30,
                            'height': 0x1e
                        })['setScale'](0x4 * _0x11a3ee[_0x434a80(0x1b10)])['setOrigin'](0x1, 0x0), this[_0x434a80(0x18bd)]['existing'](this['OptionsButton']), this[_0x434a80(0xddd)] = new _0x26d29f[(_0x434a80(0x1a31))](this, _0x7ea051[_0x434a80(0xd2c)]['BackButton'], {
                            'x': _0x11a3ee['SAFEAREA']['left'] + 0x6,
                            'y': 0x3,
                            'width': 0x30,
                            'height': 0x1e
                        })['setScale'](0x4 * _0x11a3ee[_0x434a80(0x1b10)])[_0x434a80(0xf8e)](0x0, 0x0), this['add'][_0x434a80(0x1a88)](this['ExitButton']), this['CoinsBG'] = new _0x26d29f[(_0x434a80(0x1a31))](this, _0x7ea051[_0x434a80(0xd2c)][_0x434a80(0x8c5)], {
                            'x': _0x1d64f0,
                            'y': 0x40 * _0x11a3ee[_0x434a80(0x1b10)],
                            'width': 0x60,
                            'height': 0x1c
                        })[_0x434a80(0x8a2)](0x4 * _0x11a3ee[_0x434a80(0x1b10)])[_0x434a80(0xf8e)](0.5), this[_0x434a80(0x18bd)][_0x434a80(0x1a88)](this[_0x434a80(0x17ff)]), this[_0x434a80(0x1243)] = this[_0x434a80(0x18bd)]['image'](this[_0x434a80(0x17ff)]['x'] - 0.5 * this[_0x434a80(0x17ff)][_0x434a80(0xe75)] + 0x6, this['CoinsBG']['y'], 'UI', 'MoneyPile.png')[_0x434a80(0xf8e)](0x0, 0.5)['setScale'](0x2 * _0x10c103['default']['PixelScale']), this[_0x434a80(0x15a)] = this['add'][_0x434a80(0x758)](this['CoinsBG']['x'] + 0.5 * this[_0x434a80(0x17ff)][_0x434a80(0xe75)] - 0xc, this[_0x434a80(0x17ff)]['y'], '', {
                            'fontSize': '14px',
                            'fontFamily': _0x11a3ee[_0x434a80(0xd2c)][_0x434a80(0x1f1)][_0x434a80(0x6d7)]
                        })[_0x434a80(0xf8e)](0x1, 0.5)[_0x434a80(0x8a2)](0x2 * _0x10c103[_0x434a80(0xd2c)][_0x434a80(0x15db)]), this[_0x434a80(0x44a)] = this['add'][_0x434a80(0x758)](this[_0x434a80(0x1775)]['x'] - 0.5 * this[_0x434a80(0x1775)][_0x434a80(0xe75)], this['BackButton']['y'] + 0.5 * this[_0x434a80(0x1775)]['displayHeight'], _0x11a3ee[_0x434a80(0xd2c)]['Lang'][_0x434a80(0xb10)]('topBar_back'), {
                            'fontFamily': _0x11a3ee[_0x434a80(0xd2c)]['Lang'][_0x434a80(0x6d7)]
                        })['setOrigin'](0.5, 0.5)[_0x434a80(0x8a2)](0x2 * _0x11a3ee[_0x434a80(0x1b10)]), _0x11a3ee['default'][_0x434a80(0x1f1)][_0x434a80(0x14a8)](this[_0x434a80(0x44a)], !0x1, 0x46), this[_0x434a80(0x13ec)] = this['add'][_0x434a80(0x758)](this[_0x434a80(0x1608)]['x'] - 0.5 * this['OptionsButton']['displayWidth'], this[_0x434a80(0x1608)]['y'] + 0.5 * this[_0x434a80(0x1608)][_0x434a80(0x828)], _0x11a3ee[_0x434a80(0xd2c)][_0x434a80(0x1f1)]['getLang']('topBar_options'), {
                            'fontFamily': _0x11a3ee[_0x434a80(0xd2c)][_0x434a80(0x1f1)]['FONTFAMILY']
                        })['setOrigin'](0.5, 0.5)[_0x434a80(0x8a2)](0x2 * _0x11a3ee[_0x434a80(0x1b10)]), _0x11a3ee['default']['Lang'][_0x434a80(0x14a8)](this['OptionsText'], !0x1, 0x46), this['ExitText'] = this[_0x434a80(0x18bd)]['text'](this[_0x434a80(0xddd)]['x'] + 0.5 * this[_0x434a80(0xddd)][_0x434a80(0xe75)], this[_0x434a80(0xddd)]['y'] + 0.5 * this['ExitButton']['displayHeight'], _0x11a3ee[_0x434a80(0xd2c)][_0x434a80(0x1f1)]['getLang']('topBar_quit'), {
                            'fontFamily': _0x11a3ee[_0x434a80(0xd2c)]['Lang']['FONTFAMILY']
                        })[_0x434a80(0xf8e)](0.5, 0.5)['setScale'](0x2 * _0x11a3ee['MASTER_SCALE']), _0x11a3ee['default']['Lang']['scaleToMaxFast'](this['ExitText'], !0x1, 0x46), this[_0x434a80(0x4a4)] = this['add']['text'](this['renderer'][_0x434a80(0x173c)] - 0x14, 0x20, _0x11a3ee[_0x434a80(0xd2c)][_0x434a80(0x1f1)][_0x434a80(0xb10)]('options_twitchEnabled'), {})[_0x434a80(0xf8e)](0x1, 0.5)[_0x434a80(0x8a2)](0x2 * _0x11a3ee['MASTER_SCALE'])['setVisible'](_0x5bf7e0[_0x434a80(0xd2c)]['isTwitchOn']() && _0x5bf7e0['default'][_0x434a80(0x19c7)]()), _0x11a3ee['default'][_0x434a80(0x1f1)][_0x434a80(0x14a8)](this[_0x434a80(0x4a4)], !0x1, 0xc8), this[_0x434a80(0xb05)] = this['add']['text'](0x32, 0x1e, _0x439d9b[_0x434a80(0x116e)]['getUserName'](), {})['setOrigin'](0x0, 0.5)['setScale'](0x2 * _0x11a3ee['MASTER_SCALE']), _0x11a3ee[_0x434a80(0xd2c)][_0x434a80(0x1f1)][_0x434a80(0x14a8)](this[_0x434a80(0xb05)], !0x1, 0xc8), _0x439d9b['Integration'][_0x434a80(0x645)]() || (this[_0x434a80(0xddd)]['setVisible'](!0x1), this[_0x434a80(0xd42)]['setVisible'](!0x1)), this[_0x434a80(0x631)](), this['Hide'](), this['DisableBack']();
                        var _0x2773c8 = this[_0x434a80(0x3fe)]['getAll']();
                        this[_0x434a80(0x3fe)]['removeAll'](), this[_0x434a80(0x1ac3)] = this['add'][_0x434a80(0x1990)](0x0, 0x0, _0x2773c8), this['SceneContainer']['setScale']((0x0, _0x11a3ee[_0x434a80(0x9c7)])()), _0x4058fb[_0x434a80(0xd2c)][_0x434a80(0x8c7)](this['SceneContainer']);
                    } ['Show']() {
                        const _0x60c2e2 = _0x40db91;
                        this[_0x60c2e2(0x6d2)][_0x60c2e2(0x183f)](!0x0, _0x10461e['default'][_0x60c2e2(0x17eb)]), this[_0x60c2e2(0xb29)](() => {
                            const _0x747a42 = _0x60c2e2;
                            _0x11a3ee[_0x747a42(0xd2c)][_0x747a42(0x1043)][_0x747a42(0x69e)][_0x747a42(0x1a22)]();
                        });
                    } ['Hide']() {
                        const _0x232991 = _0x40db91;
                        this[_0x232991(0x6d2)][_0x232991(0x183f)](!0x1, _0x10461e['default'][_0x232991(0x17eb)]);
                    } ['DisableBack']() {
                        const _0x21828b = _0x40db91;
                        this[_0x21828b(0x1775)][_0x21828b(0x183f)](!0x1), this['BackText']['setVisible'](!0x1), this['BackButton']['removeAllListeners']();
                    } ['EnableBack'](_0x2bea66) {
                        const _0x5dac7c = _0x40db91;
                        this[_0x5dac7c(0x1775)]['removeAllListeners'](), this[_0x5dac7c(0x1775)][_0x5dac7c(0x183f)](!0x0), this[_0x5dac7c(0x44a)][_0x5dac7c(0x183f)](!0x0), this[_0x5dac7c(0x1775)]['setInteractive'](), this[_0x5dac7c(0x1775)]['on']('pointerdown', () => {
                            const _0x155ce0 = _0x5dac7c;
                            _0x2bea66(), this[_0x155ce0(0x1775)][_0x155ce0(0x76d)](!0x1), this[_0x155ce0(0x1775)][_0x155ce0(0x596)](), _0x11a3ee[_0x155ce0(0xd2c)][_0x155ce0(0x1267)]['PlaySound'](_0x229929[_0x155ce0(0xd2c)]['ClickOut']), _0x11a3ee['default'][_0x155ce0(0x1043)]['PlayerOptions'][_0x155ce0(0x3ab)]();
                        }), this[_0x5dac7c(0xe57)]();
                    } ['DisableOptions']() {
                        const _0x5b3aad = _0x40db91;
                        this['OptionsButton'][_0x5b3aad(0x183f)](!0x1), this[_0x5b3aad(0x13ec)][_0x5b3aad(0x183f)](!0x1), this[_0x5b3aad(0x1608)]['removeAllListeners'](), this['ExitButton'][_0x5b3aad(0x183f)](!0x1), this[_0x5b3aad(0xd42)]['setVisible'](!0x1), this[_0x5b3aad(0xddd)]['removeAllListeners']();
                    } ['EnableOptions'](_0x3a84cb) {
                        const _0x3cac27 = _0x40db91;
                        this['OptionsButton']['removeAllListeners'](), this[_0x3cac27(0x1608)][_0x3cac27(0x183f)](!0x0), this[_0x3cac27(0x13ec)][_0x3cac27(0x183f)](!0x0), this[_0x3cac27(0x1608)][_0x3cac27(0x76d)](), this['OptionsButton']['on']('pointerdown', () => {
                            const _0x358884 = _0x3cac27;
                            _0x3a84cb(), this['OptionsButton']['setInteractive'](!0x1), this[_0x358884(0x1608)]['removeAllListeners'](), _0x11a3ee['default'][_0x358884(0x1267)]['PlaySound'](_0x229929['default']['ClickOut']);
                        }), this[_0x3cac27(0x18e4)](), _0x439d9b[_0x3cac27(0x116e)]['isDesktop']() && (this['ExitButton']['removeAllListeners'](), this[_0x3cac27(0xddd)]['setVisible'](!0x0), this['ExitText'][_0x3cac27(0x183f)](!0x0), this['ExitButton'][_0x3cac27(0x76d)](), this[_0x3cac27(0xddd)]['on']('pointerdown', () => {
                            const _0x1f2e60 = _0x3cac27;
                            _0x11a3ee['default'][_0x1f2e60(0x1267)]['PlaySound'](_0x229929[_0x1f2e60(0xd2c)]['ClickOut']), _0x439d9b[_0x1f2e60(0x116e)]['closeGame']();
                        }));
                    } ['showTwitchEnabled']() {
                        const _0x259d86 = _0x40db91;
                        this[_0x259d86(0x4a4)][_0x259d86(0x183f)](!0x0);
                    } ['hideTwitchEnabled']() {
                        const _0x50e504 = _0x40db91;
                        this['TwitchModeEnabledText'][_0x50e504(0x183f)](!0x1);
                    } ['showUserName']() {
                        this['UserNameText']['setVisible'](!0x0);
                    } ['hideUserName']() {
                        this['UserNameText']['setVisible'](!0x1);
                    } ['update']() {}
                }
                _0x4ee2e0['default'] = _0x5f5960;
            };
