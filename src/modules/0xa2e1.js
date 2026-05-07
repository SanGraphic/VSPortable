// Module 0xa2e1
// Args: _0xd9675, _0x256acf, _0x532ac4

export default (_0xd9675, _0x256acf, _0x532ac4) => {
                'use strict';
                const _0x5c6b24 = a0_0x6932;
                var _0xc2bfb6 = this && this['__createBinding'] || (Object['create'] ? function(_0xc1adda, _0x26f6e2, _0x1dc574, _0x1b9178) {
                        const _0x802e41 = _0x5c6b24;
                        void 0x0 === _0x1b9178 && (_0x1b9178 = _0x1dc574);
                        var _0x6bd1bd = Object[_0x802e41(0x1687)](_0x26f6e2, _0x1dc574);
                        _0x6bd1bd && !('get' in _0x6bd1bd ? !_0x26f6e2[_0x802e41(0x16f1)] : _0x6bd1bd[_0x802e41(0x11bf)] || _0x6bd1bd['configurable']) || (_0x6bd1bd = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x26f6e2[_0x1dc574];
                            }
                        }), Object[_0x802e41(0x811)](_0xc1adda, _0x1b9178, _0x6bd1bd);
                    } : function(_0x5b26dd, _0x52b197, _0x260239, _0x17d6c3) {
                        void 0x0 === _0x17d6c3 && (_0x17d6c3 = _0x260239), _0x5b26dd[_0x17d6c3] = _0x52b197[_0x260239];
                    }),
                    _0x5bf8dc = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x1c4026, _0x4fcae1) {
                        const _0x4140d7 = _0x5c6b24;
                        Object[_0x4140d7(0x811)](_0x1c4026, 'default', {
                            'enumerable': !0x0,
                            'value': _0x4fcae1
                        });
                    } : function(_0x504c25, _0x215ab8) {
                        _0x504c25['default'] = _0x215ab8;
                    }),
                    _0x78688e = this && this['__importStar'] || function(_0xe44479) {
                        const _0xf15f2a = _0x5c6b24;
                        if (_0xe44479 && _0xe44479[_0xf15f2a(0x16f1)]) return _0xe44479;
                        var _0x5707dd = {};
                        if (null != _0xe44479) {
                            for (var _0x2a42ca in _0xe44479) 'default' !== _0x2a42ca && Object[_0xf15f2a(0x977)][_0xf15f2a(0x2cf)][_0xf15f2a(0xff0)](_0xe44479, _0x2a42ca) && _0xc2bfb6(_0x5707dd, _0xe44479, _0x2a42ca);
                        }
                        return _0x5bf8dc(_0x5707dd, _0xe44479), _0x5707dd;
                    },
                    _0x1e0174 = this && this['__importDefault'] || function(_0x1749ca) {
                        const _0xb56f5c = _0x5c6b24;
                        return _0x1749ca && _0x1749ca[_0xb56f5c(0x16f1)] ? _0x1749ca : {
                            'default': _0x1749ca
                        };
                    };
                Object['defineProperty'](_0x256acf, '__esModule', {
                    'value': !0x0
                });
                const _0x320c8d = _0x532ac4(0x16c14),
                    _0x340a32 = _0x1e0174(_0x532ac4(0xccae)),
                    _0x1de10d = _0x78688e(_0x532ac4(0x5f07)),
                    _0x47f8f6 = _0x1e0174(_0x532ac4(0x169b4)),
                    _0x9d8f40 = _0x1e0174(_0x532ac4(0x1715a)),
                    _0x2c61fc = _0x1e0174(_0x532ac4(0x5103)),
                    _0x59c504 = _0x1e0174(_0x532ac4(0x1fd7)),
                    _0x51d52f = _0x532ac4(0xeea8);
                class _0x269744 extends Phaser['Scene'] {
                    constructor() {
                        const _0x1060fc = _0x5c6b24;
                        super({
                            'key': _0x47f8f6['default'][_0x1060fc(0x175d)]
                        }), this[_0x1060fc(0x17ac)] = !0x1, this[_0x1060fc(0xf43)] = !0x1, this['LocalBackups'] = [], this[_0x1060fc(0x2f2)] = 0x0;
                    } ['preload']() {} ['create']() {
                        const _0xe11042 = _0x5c6b24;
                        var _0x6459a4 = _0x1de10d['SAFEAREA'][_0xe11042(0x173c)] * _0x2c61fc[_0xe11042(0xd2c)][_0xe11042(0xb53)],
                            _0x36360e = (_0x1de10d['SAFEAREA'][_0xe11042(0x140e)] - 0x40) * _0x2c61fc['default'][_0xe11042(0xb53)],
                            _0x335ef0 = _0x36360e * _0x2c61fc[_0xe11042(0xd2c)][_0xe11042(0x15db)];
                        this[_0xe11042(0x431)] = new _0x320c8d[(_0xe11042(0x1a31))](this, _0x340a32['default']['MenuBackground'], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x6459a4,
                            'height': _0x36360e
                        }), this[_0xe11042(0x431)][_0xe11042(0x726)](_0x1de10d['SAFEAREA']['centerX'], _0x335ef0), this[_0xe11042(0x431)]['setOrigin'](0.5, 0x1), this[_0xe11042(0x431)][_0xe11042(0x8a2)](_0x2c61fc[_0xe11042(0xd2c)]['PixelScale']), this[_0xe11042(0x18bd)]['existing'](this[_0xe11042(0x431)]), this[_0xe11042(0x431)]['setInteractive'](), this[_0xe11042(0x1752)] = this[_0xe11042(0x18bd)][_0xe11042(0x758)](_0x1de10d['SAFEAREA'][_0xe11042(0x1634)], 0x21, _0x1de10d['default'][_0xe11042(0x1f1)][_0xe11042(0xb10)]('options_dataRecovery'), {})[_0xe11042(0x8a2)](0x2 * _0x2c61fc[_0xe11042(0xd2c)]['PixelScale'])['setOrigin'](0.5), _0x1de10d['default'][_0xe11042(0x1f1)][_0xe11042(0x14a8)](this[_0xe11042(0x1752)], !0x1, 0xfa), _0x1de10d[_0xe11042(0x1e0)][_0xe11042(0xf42)];
                        const _0x135fd8 = _0x1de10d['SAFEAREA'][_0xe11042(0x1634)];
                        this['LastRunButton'] = new _0x320c8d[(_0xe11042(0x1a31))](this, _0x340a32[_0xe11042(0xd2c)][_0xe11042(0x146f)], {
                            'x': _0x135fd8,
                            'y': 0x72,
                            'width': 0x78,
                            'height': 0x20
                        })['setScale'](0x2 * _0x2c61fc[_0xe11042(0xd2c)]['PixelScale'])[_0xe11042(0xf8e)](0.5), this[_0xe11042(0x18bd)]['existing'](this[_0xe11042(0x8b5)])[_0xe11042(0x183f)](!0x1), this[_0xe11042(0x922)] = this[_0xe11042(0x18bd)]['text'](this['LastRunButton']['x'], this[_0xe11042(0x8b5)]['y'], _0x1de10d['default'][_0xe11042(0x1f1)][_0xe11042(0xb10)]('options_lastRun'), {
                            'align': 'center'
                        })['setScale'](0x1 * _0x2c61fc[_0xe11042(0xd2c)][_0xe11042(0x15db)])[_0xe11042(0xf8e)](0.5)[_0xe11042(0x183f)](!0x1), _0x1de10d['default'][_0xe11042(0x1f1)]['scaleToMaxFast'](this[_0xe11042(0x922)], !0x1, 0xc8), this['LocalListButton'] = new _0x320c8d[(_0xe11042(0x1a31))](this, _0x340a32[_0xe11042(0xd2c)][_0xe11042(0x1608)], {
                            'x': _0x135fd8,
                            'y': 0xbd,
                            'width': 0x78,
                            'height': 0x20
                        })[_0xe11042(0x8a2)](0x2 * _0x2c61fc[_0xe11042(0xd2c)]['PixelScale'])['setOrigin'](0.5)[_0xe11042(0x183f)](!0x1), this[_0xe11042(0x18bd)][_0xe11042(0x1a88)](this[_0xe11042(0xb79)]), this['LocalListText'] = this['add']['text'](this[_0xe11042(0xb79)]['x'], this[_0xe11042(0xb79)]['y'], _0x1de10d[_0xe11042(0xd2c)][_0xe11042(0x1f1)]['getLang']('options_localBackups'), {
                            'align': 'center'
                        })['setScale'](0x1 * _0x2c61fc['default']['PixelScale'])[_0xe11042(0xf8e)](0.5)['setVisible'](!0x1), _0x1de10d[_0xe11042(0xd2c)][_0xe11042(0x1f1)]['scaleToMaxFast'](this['LocalListText'], !0x1, 0xc8), this[_0xe11042(0xd99)] = new _0x320c8d['NineSlice'](this, _0x340a32[_0xe11042(0xd2c)]['BackButton'], {
                            'x': _0x135fd8,
                            'y': 0x234,
                            'width': 0x78,
                            'height': 0x20
                        })['setScale'](0x2 * _0x2c61fc['default'][_0xe11042(0x15db)])[_0xe11042(0xf8e)](0.5)['setVisible'](!0x1), this[_0xe11042(0x18bd)][_0xe11042(0x1a88)](this[_0xe11042(0xd99)]), this['LocalDBText'] = this[_0xe11042(0x18bd)]['text'](this[_0xe11042(0xd99)]['x'], this['LocalDBButton']['y'], _0x1de10d[_0xe11042(0xd2c)]['Lang']['getLang']('options_localDB'), {
                            'align': 'center'
                        })[_0xe11042(0x8a2)](0x1 * _0x2c61fc[_0xe11042(0xd2c)][_0xe11042(0x15db)])[_0xe11042(0xf8e)](0.5)[_0xe11042(0x183f)](!0x1), _0x1de10d['default'][_0xe11042(0x1f1)][_0xe11042(0x14a8)](this[_0xe11042(0x51e)], !0x1, 0xc8), this[_0xe11042(0x17eb)] = this[_0xe11042(0x6d2)][_0xe11042(0x544)](_0x47f8f6[_0xe11042(0xd2c)][_0xe11042(0x17eb)]), this[_0xe11042(0x1408)] = this['scene']['get'](_0x47f8f6['default'][_0xe11042(0x1408)]);
                        var _0x4a5697 = this[_0xe11042(0x3fe)][_0xe11042(0x13ba)]();
                        this[_0xe11042(0x3fe)][_0xe11042(0x6fd)](), this[_0xe11042(0x1ac3)] = this[_0xe11042(0x18bd)]['container'](0x0, 0x0, _0x4a5697), this['SceneContainer'][_0xe11042(0x8a2)]((0x0, _0x1de10d[_0xe11042(0x9c7)])()), _0x9d8f40['default']['CalculateAndSetContainerSize'](this['SceneContainer']), this['SceneContainer']['y'] = this[_0xe11042(0x12f9)]['height'] - this[_0xe11042(0x1ac3)][_0xe11042(0x828)], this['MakeUIGrid'](this[_0xe11042(0x17eb)]['BackButton']), this[_0xe11042(0xed7)](), this[_0xe11042(0x1703)](), this['DisplayRecoveryForLocalDB'](!0x1);
                    } ['ShowLocalBackups'](_0x1205a5 = 0x0) {
                        const _0x5817ea = _0x5c6b24;
                        let _0x567390 = 0x0,
                            _0x338371 = [];
                        for (let _0x5a4acf = _0x1205a5; _0x5a4acf < this['LocalBackups'][_0x5817ea(0xed9)] && _0x567390 < 0x17; _0x5a4acf++) {
                            let _0x2bef76 = this['LocalBackups'][_0x5a4acf]['name'][_0x5817ea(0xa0d)]('SaveData_', ''),
                                _0x213834 = _0x2bef76['indexOf']('_'),
                                _0x472145 = _0x2bef76['substring'](0x0, _0x213834);
                            _0x472145 = 'v0.' + _0x472145[0x0] + '.' + _0x472145['substring'](0x1, 0x4);
                            let _0x48cfeb = _0x2bef76['substring'](_0x213834 + 0x1, _0x213834 + 0x9),
                                _0x4c1ad2 = _0x48cfeb[_0x5817ea(0xfce)](0x0, 0x4),
                                _0x4ddb96 = _0x48cfeb['substring'](0x4, 0x6),
                                _0x2a6766 = _0x48cfeb[_0x5817ea(0xfce)](0x6, 0x8),
                                _0x356c51 = _0x2bef76['substring'](_0x213834 + 0xa, _0x213834 + 0x10),
                                _0x2cb1f9 = _0x472145 + ' ' + _0x4c1ad2 + '-' + _0x4ddb96 + '-' + _0x2a6766 + ' ' + _0x356c51['substring'](0x0, 0x2) + ':' + _0x356c51[_0x5817ea(0xfce)](0x2, 0x4) + '.' + _0x356c51['substring'](0x4, 0x6),
                                _0x4be08b = this['add'][_0x5817ea(0x568)](_0x1de10d['SAFEAREA']['left'] + 0x8, 0x72 + 0x18 * _0x567390, 'UI', 'blackDot.png')[_0x5817ea(0x8a2)](0.5 * _0x1de10d[_0x5817ea(0x1e0)][_0x5817ea(0x173c)] - 0x10, 0x18)[_0x5817ea(0xf8e)](0x0)[_0x5817ea(0xdab)](_0x567390 % 0x2 == 0x0 ? 0.5 : 0.7),
                                _0x5f21b9 = this[_0x5817ea(0x18bd)][_0x5817ea(0x758)](_0x4be08b['x'] + 0xc, _0x4be08b['y'] + 0xc, _0x2cb1f9, {
                                    'fontSize': '12px',
                                    'color': 'white'
                                })['setOrigin'](0x0, 0.5);
                            _0x4be08b[_0x5817ea(0x76d)]({
                                'cursor': 'pointer'
                            }), _0x4be08b['on']('pointerdown', () => {
                                const _0x44563f = _0x5817ea;
                                for (let _0x4c4f6d = 0x0; _0x4c4f6d < _0x338371[_0x44563f(0xed9)]; _0x4c4f6d++) {
                                    const _0x5c120f = _0x338371[_0x4c4f6d];
                                    _0x5c120f['setVisible'](!0x1), _0x5c120f['setInteractive'](!0x1), _0x5c120f['removeAllListeners'](), this[_0x44563f(0x3fe)][_0x44563f(0x393)](_0x5c120f);
                                }
                                this['children'][_0x44563f(0x393)](this[_0x44563f(0x1619)]);
                                let _0x3856db = this['add']['image'](0x0, 0x0, 'UI', 'blackDot.png')[_0x44563f(0xf8e)](0x0)[_0x44563f(0xdab)](0x0)['setScale'](1.1 * this['renderer']['width'], 1.1 * this[_0x44563f(0x12f9)]['height']);
                                this[_0x44563f(0x12a1)][_0x44563f(0x18bd)]({
                                    'targets': _0x3856db,
                                    'alpha': 0x1,
                                    'duration': 0x12c,
                                    'onComplete': () => {}
                                }), _0x1de10d[_0x44563f(0xd2c)]['Sound']['PlaySound'](_0x59c504[_0x44563f(0xd2c)][_0x44563f(0x2b6)]);
                            }), _0x338371['push'](_0x4be08b), _0x338371[_0x5817ea(0x1564)](_0x5f21b9), _0x567390++;
                        }
                        this['LocalBackups']['length'] > 0x17 && (this[_0x5817ea(0x1619)] = this[_0x5817ea(0x18bd)]['image'](_0x1de10d[_0x5817ea(0x1e0)]['left'] + 0.75 * _0x1de10d[_0x5817ea(0x1e0)]['width'], 0x252, 'UI', 'arrow_01.png')[_0x5817ea(0x8a2)](0x4)[_0x5817ea(0xf8e)](0.5)[_0x5817ea(0x9b5)](0x5a), this[_0x5817ea(0x1619)][_0x5817ea(0x76d)]({
                            'cursor': 'pointer'
                        }), this['downArrow']['on']('pointerdown', () => {
                            const _0x16cfbc = _0x5817ea;
                            this[_0x16cfbc(0x2f2)] + 0x17 > this['LocalBackups'][_0x16cfbc(0xed9)] ? this['currentIndex'] = 0x0 : this[_0x16cfbc(0x2f2)] += 0x17;
                            for (let _0x23633d = 0x0; _0x23633d < _0x338371[_0x16cfbc(0xed9)]; _0x23633d++) {
                                const _0x352ced = _0x338371[_0x23633d];
                                _0x352ced[_0x16cfbc(0x183f)](!0x1), _0x352ced[_0x16cfbc(0x76d)](!0x1), _0x352ced['removeAllListeners'](), this[_0x16cfbc(0x3fe)][_0x16cfbc(0x393)](_0x352ced);
                            }
                            this[_0x16cfbc(0x121e)](this['currentIndex']), _0x1de10d[_0x16cfbc(0xd2c)]['Sound'][_0x16cfbc(0x7f6)](_0x59c504['default'][_0x16cfbc(0x2b6)]);
                        }));
                    } ['DisplayRecoveryForLocalDB'](_0x1c0927) {
                        const _0x229280 = _0x5c6b24;
                        this[_0x229280(0x17ac)] = _0x1c0927, _0x1c0927 && (this[_0x229280(0xd99)][_0x229280(0x183f)](!0x0), this['LocalDBText'][_0x229280(0x183f)](!0x0)), this['EnableInput']();
                    } ['DisplayRecoveryForLastRun']() {
                        const _0x5b0206 = _0x5c6b24;
                        this['HasLastRunBackup'] = _0x51d52f['SaveSystem'][_0x5b0206(0xfb0)](), this['HasLastRunBackup'] && (this[_0x5b0206(0x8b5)][_0x5b0206(0x183f)](!0x0), this[_0x5b0206(0x922)][_0x5b0206(0x183f)](!0x0));
                    } ['DisplayRecoveryList']() {
                        const _0x400c2a = _0x5c6b24;
                        this[_0x400c2a(0x6de)] = [], this['LocalBackups'][_0x400c2a(0xed9)] > 0x0 && (this['LocalListButton'][_0x400c2a(0x183f)](!0x0), this[_0x400c2a(0x1693)][_0x400c2a(0x183f)](!0x0));
                    } ['EnableInput']() {
                        const _0x74fd36 = _0x5c6b24;
                        this['LocalDBButton'][_0x74fd36(0x76d)](), this[_0x74fd36(0xd99)][_0x74fd36(0x3c7)]('pointerdown', () => {
                            const _0x4e5e54 = _0x74fd36;
                            this[_0x4e5e54(0x153e)]();
                        }), this['LocalListButton'][_0x74fd36(0x76d)](), this[_0x74fd36(0xb79)][_0x74fd36(0x3c7)]('pointerdown', () => {
                            const _0x533068 = _0x74fd36;
                            this[_0x533068(0xa99)]();
                        }), this['LastRunButton']['setInteractive'](), this['LastRunButton'][_0x74fd36(0x3c7)]('pointerdown', () => {
                            const _0x53d724 = _0x74fd36;
                            this[_0x53d724(0x17ec)]();
                        });
                    } ['ChangeLocalDBButtonToConfirm']() {
                        const _0x3a7479 = _0x5c6b24;
                        this[_0x3a7479(0xd99)][_0x3a7479(0xb7c)](), this[_0x3a7479(0x51e)]['text'] = _0x1de10d[_0x3a7479(0xd2c)][_0x3a7479(0x1f1)]['getLang']('charConfirm_confirm'), _0x1de10d[_0x3a7479(0xd2c)]['Lang']['scaleToMaxFast'](this['LocalDBText'], !0x1, 0xc8), this['time'][_0x3a7479(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x1b3f8d = _0x3a7479;
                                this[_0x1b3f8d(0xd99)]['setInteractive'](), this['LocalDBButton']['once']('pointerdown', () => {
                                    const _0x1d97b9 = _0x1b3f8d;
                                    this['DisableAll'](), _0x1de10d[_0x1d97b9(0xd2c)][_0x1d97b9(0x1043)]['PlayerOptions']['RestoreLocalDBSave']();
                                });
                            }
                        }), _0x1de10d[_0x3a7479(0xd2c)][_0x3a7479(0x1267)][_0x3a7479(0x7f6)](_0x59c504[_0x3a7479(0xd2c)][_0x3a7479(0x2b6)]);
                    } ['ChangeLastRunButtonToConfirm']() {
                        const _0x161680 = _0x5c6b24;
                        this[_0x161680(0x8b5)][_0x161680(0xb7c)](), this['LastRunText']['text'] = _0x1de10d['default']['Lang']['getLang']('charConfirm_confirm'), _0x1de10d['default'][_0x161680(0x1f1)]['scaleToMaxFast'](this[_0x161680(0x922)], !0x1, 0xc8), this[_0x161680(0x915)][_0x161680(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x4c4f24 = _0x161680;
                                this[_0x4c4f24(0x8b5)][_0x4c4f24(0x76d)](), this['LastRunButton']['on']('pointerdown', () => {
                                    const _0x487ebf = _0x4c4f24;
                                    this[_0x487ebf(0xe95)](), _0x51d52f[_0x487ebf(0x1882)][_0x487ebf(0x1a1a)](), _0x1de10d[_0x487ebf(0xd2c)][_0x487ebf(0x1267)]['PlaySound'](_0x59c504[_0x487ebf(0xd2c)][_0x487ebf(0x2b6)]);
                                });
                            }
                        }), _0x1de10d['default']['Sound'][_0x161680(0x7f6)](_0x59c504[_0x161680(0xd2c)][_0x161680(0x2b6)]);
                    } ['ChangeLocalListButtonToConfirm']() {
                        const _0x36399b = _0x5c6b24;
                        this[_0x36399b(0xb79)][_0x36399b(0xb7c)](), this[_0x36399b(0x1693)][_0x36399b(0x758)] = _0x1de10d[_0x36399b(0xd2c)][_0x36399b(0x1f1)]['getLang']('charConfirm_confirm'), _0x1de10d[_0x36399b(0xd2c)][_0x36399b(0x1f1)][_0x36399b(0x14a8)](this[_0x36399b(0x1693)], !0x1, 0xc8), this[_0x36399b(0x915)]['addEvent']({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x1b0f4a = _0x36399b;
                                this[_0x1b0f4a(0xb79)][_0x1b0f4a(0x76d)](), this[_0x1b0f4a(0xb79)]['once']('pointerdown', () => {
                                    const _0x3f2e70 = _0x1b0f4a;
                                    this[_0x3f2e70(0xe95)](), this['ShowLocalBackups'](), this[_0x3f2e70(0x8b5)][_0x3f2e70(0x183f)](!0x1), this[_0x3f2e70(0x922)][_0x3f2e70(0x183f)](!0x1), this['LocalListButton'][_0x3f2e70(0x183f)](!0x1), this[_0x3f2e70(0x1693)]['setVisible'](!0x1), this['LocalDBButton']['setVisible'](!0x1), this['LocalDBText'][_0x3f2e70(0x183f)](!0x1), _0x1de10d[_0x3f2e70(0xd2c)]['Sound']['PlaySound'](_0x59c504[_0x3f2e70(0xd2c)][_0x3f2e70(0x2b6)]);
                                });
                            }
                        }), _0x1de10d[_0x36399b(0xd2c)]['Sound'][_0x36399b(0x7f6)](_0x59c504[_0x36399b(0xd2c)][_0x36399b(0x2b6)]);
                    } ['MakeUIGrid'](_0x494060) {
                        const _0x3f2e5d = _0x5c6b24;
                        let _0x268ccc = _0x1de10d['default']['Core'][_0x3f2e5d(0x69e)][_0x3f2e5d(0x7ec)];
                        _0x268ccc['MakeUIGrid'](0x0, 0x0, !0x1), _0x268ccc['UI_grid']['SetContents'](0x0, 0x0, this[_0x3f2e5d(0x17eb)]['BackButton']), _0x268ccc[_0x3f2e5d(0x1475)](!0x0), _0x268ccc[_0x3f2e5d(0x8cc)][_0x3f2e5d(0xb55)](_0x494060), _0x268ccc[_0x3f2e5d(0x938)] = _0x494060, _0x1de10d[_0x3f2e5d(0xd2c)][_0x3f2e5d(0x1043)]['SceneManager'][_0x3f2e5d(0x6d2)][_0x3f2e5d(0x5d8)](_0x268ccc), _0x268ccc[_0x3f2e5d(0x1ad4)] = () => {
                            const _0x3e6ced = _0x3f2e5d;
                            var _0x2be45b, _0x5246d1, _0x57e4ca;
                            null === (_0x57e4ca = null === (_0x5246d1 = null === (_0x2be45b = this[_0x3e6ced(0x17eb)][_0x3e6ced(0x1775)]) || void 0x0 === _0x2be45b ? void 0x0 : _0x2be45b['_events']) || void 0x0 === _0x5246d1 ? void 0x0 : _0x5246d1[_0x3e6ced(0x18f7)]) || void 0x0 === _0x57e4ca || _0x57e4ca['fn']();
                        };
                    } ['DisableAll']() {
                        const _0x3063a9 = _0x5c6b24;
                        _0x1de10d[_0x3063a9(0xd2c)][_0x3063a9(0x1043)][_0x3063a9(0x69e)][_0x3063a9(0x7ec)][_0x3063a9(0x110c)](), this['LastRunButton']['disableInteractive'](), this[_0x3063a9(0xb79)][_0x3063a9(0xbc7)](), this['LocalDBButton'][_0x3063a9(0xbc7)](), this[_0x3063a9(0x8b5)][_0x3063a9(0x596)](), this[_0x3063a9(0xb79)][_0x3063a9(0x596)](), this[_0x3063a9(0xd99)][_0x3063a9(0x596)]();
                    } ['DestroyUIGrid']() {
                        const _0x513dff = _0x5c6b24;
                        _0x1de10d[_0x513dff(0xd2c)][_0x513dff(0x1043)][_0x513dff(0x69e)]['UI_overlayScene'][_0x513dff(0x110c)]();
                    }
                }
                _0x256acf['default'] = _0x269744;
            };
