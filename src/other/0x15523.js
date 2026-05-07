// Module 0x15523
// Args: _0x3d8d93, _0x56621f, _0x1e119e

export default (_0x3d8d93, _0x56621f, _0x1e119e) => {
                'use strict';
                const _0x5e127b = a0_0x6932;
                var _0x26bcb0 = this && this['__createBinding'] || (Object['create'] ? function(_0x7c6576, _0xfc6207, _0x5e6d49, _0x21e830) {
                        const _0x51b791 = a0_0x6932;
                        void 0x0 === _0x21e830 && (_0x21e830 = _0x5e6d49);
                        var _0x4758d7 = Object['getOwnPropertyDescriptor'](_0xfc6207, _0x5e6d49);
                        _0x4758d7 && !('get' in _0x4758d7 ? !_0xfc6207['__esModule'] : _0x4758d7['writable'] || _0x4758d7['configurable']) || (_0x4758d7 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0xfc6207[_0x5e6d49];
                            }
                        }), Object['defineProperty'](_0x7c6576, _0x21e830, _0x4758d7);
                    } : function(_0x320503, _0x52db27, _0x497a21, _0x5386e3) {
                        void 0x0 === _0x5386e3 && (_0x5386e3 = _0x497a21), _0x320503[_0x5386e3] = _0x52db27[_0x497a21];
                    }),
                    _0x569a62 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x53c1ed, _0x3f6873) {
                        const _0x4f2e65 = _0x5e127b;
                        Object[_0x4f2e65(0x811)](_0x53c1ed, 'default', {
                            'enumerable': !0x0,
                            'value': _0x3f6873
                        });
                    } : function(_0x41e6d8, _0x3b8669) {
                        const _0x37c879 = _0x5e127b;
                        _0x41e6d8[_0x37c879(0xd2c)] = _0x3b8669;
                    }),
                    _0x5ab32b = this && this['__importStar'] || function(_0x49887d) {
                        const _0x37cf74 = _0x5e127b;
                        if (_0x49887d && _0x49887d[_0x37cf74(0x16f1)]) return _0x49887d;
                        var _0x4f3de7 = {};
                        if (null != _0x49887d) {
                            for (var _0x53a43f in _0x49887d) 'default' !== _0x53a43f && Object[_0x37cf74(0x977)]['hasOwnProperty'][_0x37cf74(0xff0)](_0x49887d, _0x53a43f) && _0x26bcb0(_0x4f3de7, _0x49887d, _0x53a43f);
                        }
                        return _0x569a62(_0x4f3de7, _0x49887d), _0x4f3de7;
                    },
                    _0x486bda = this && this['__importDefault'] || function(_0x48c60c) {
                        const _0x2c02ca = _0x5e127b;
                        return _0x48c60c && _0x48c60c[_0x2c02ca(0x16f1)] ? _0x48c60c : {
                            'default': _0x48c60c
                        };
                    };
                Object['defineProperty'](_0x56621f, '__esModule', {
                    'value': !0x0
                });
                const _0x177b31 = _0x1e119e(0x16c14),
                    _0x423164 = _0x486bda(_0x1e119e(0x1fd7)),
                    _0x1b7c5a = _0x486bda(_0x1e119e(0x5103)),
                    _0x388dde = _0x486bda(_0x1e119e(0xccae)),
                    _0x3ec389 = _0x5ab32b(_0x1e119e(0x5f07)),
                    _0x2bb9f2 = _0x486bda(_0x1e119e(0x14183)),
                    _0x5ac60a = _0x1e119e(0x4858),
                    _0x1a0e43 = _0x1e119e(0x36e3);
                class _0xf632bc extends Phaser['GameObjects']['Container'] {
                    constructor(_0x290f1b, _0x5c9823) {
                        const _0x281b41 = _0x5e127b;
                        super(_0x290f1b, 0x0, 0x0), this[_0x281b41(0x13a2)] = new Phaser['GameObjects']['Text'](this['scene'], _0x3ec389['SAFEAREA'][_0x281b41(0x1634)], 0x234, _0x5c9823 + ' / 2', {
                            'align': 'left'
                        })['setScale'](1.5 * _0x1b7c5a[_0x281b41(0xd2c)][_0x281b41(0x15db)])[_0x281b41(0xf8e)](0.5, 0.5);
                        const _0xabda2 = _0x290f1b['anims']['generateFrameNames']('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrow_',
                            'suffix': '.png'
                        });
                        this['UI_left'] = new Phaser[(_0x281b41(0xbf2))][(_0x281b41(0xa97))](this['scene'], _0x3ec389['SAFEAREA']['centerX'] - 0x32, 0x234, 'UI', 'arrow_01.png')[_0x281b41(0xdab)](0x1)['setDepth'](Number['MAX_SAFE_INTEGER'])[_0x281b41(0xf8e)](0x1, 0.5)['setScale'](0x2)['setFlipX'](!0x0), this[_0x281b41(0x17da)] = new Phaser[(_0x281b41(0xbf2))][(_0x281b41(0xa97))](this['scene'], _0x3ec389[_0x281b41(0x1e0)][_0x281b41(0x1634)] + 0x32, 0x234, 'UI', 'arrow_01.png')[_0x281b41(0xdab)](0x1)[_0x281b41(0xb4a)](Number[_0x281b41(0x1aaa)])['setOrigin'](0x0, 0.5)['setScale'](0x2), this[_0x281b41(0xed0)][_0x281b41(0x183e)][_0x281b41(0x6a8)]({
                            'key': 'idle',
                            'frames': _0xabda2,
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this[_0x281b41(0x17da)][_0x281b41(0x183e)][_0x281b41(0x6a8)]({
                            'key': 'idle',
                            'frames': _0xabda2,
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this[_0x281b41(0x6d2)]['add']['existing'](this[_0x281b41(0xed0)]), this[_0x281b41(0x6d2)][_0x281b41(0x18bd)]['existing'](this['UI_right']), this[_0x281b41(0xaca)] = new _0x177b31['NineSlice'](this['scene'], _0x388dde[_0x281b41(0xd2c)]['SelectionHighlight'], {
                            'x': this['UI_left']['x'] + 0xa,
                            'y': this['UI_left']['y'],
                            'width': 0x24,
                            'height': 0x24
                        }), this['highlight_left'][_0x281b41(0xf8e)](0x0, 0x0)[_0x281b41(0x8a2)](1.5 * _0x1b7c5a['default']['PixelScale'])['setDepth'](0x3e8)['setVisible'](!0x1)['setOrigin'](0x1, 0.5), this[_0x281b41(0x609)] = new _0x177b31['NineSlice'](this[_0x281b41(0x6d2)], _0x388dde[_0x281b41(0xd2c)]['SelectionHighlight'], {
                            'x': this['UI_right']['x'] - 0xa,
                            'y': this[_0x281b41(0x17da)]['y'],
                            'width': 0x24,
                            'height': 0x24
                        }), this['highlight_right'][_0x281b41(0xf8e)](0x0, 0x0)['setScale'](1.5 * _0x1b7c5a['default']['PixelScale'])['setDepth'](0x3e8)['setVisible'](!0x1)[_0x281b41(0xf8e)](0x0, 0.5), this[_0x281b41(0x18bd)]([this[_0x281b41(0x13a2)], this[_0x281b41(0xed0)], this['UI_right'], this[_0x281b41(0xaca)], this[_0x281b41(0x609)]]);
                    } ['createSlider'](_0x4a485f, _0x449980, _0x1ec1ba, _0x31264c = !0x0) {
                        const _0x41d8f4 = _0x5e127b,
                            _0x5da848 = _0x3ec389[_0x41d8f4(0x1e0)][_0x41d8f4(0xf42)] + 0x1e;
                        let _0x1882f8 = new _0x2bb9f2[(_0x41d8f4(0xd2c))](this['scene']);
                        return _0x1882f8[_0x41d8f4(0x42e)] = new Phaser[(_0x41d8f4(0x10d2))]['Rectangle'](0x24e, 0x0, 0x64, 0x0), _0x1882f8[_0x41d8f4(0x758)] = new Phaser[(_0x41d8f4(0xbf2))]['Text'](this['scene'], _0x5da848, _0x449980, _0x4a485f, {
                            'align': 'left'
                        })['setScale'](1.5 * _0x1b7c5a[_0x41d8f4(0xd2c)]['PixelScale'])['setOrigin'](0x0, 0.5), _0x1882f8['box'] = new Phaser[(_0x41d8f4(0xbf2))][(_0x41d8f4(0x1951))](this['scene'], _0x1882f8['bounds'][_0x41d8f4(0xf42)] + _0x1882f8[_0x41d8f4(0x42e)][_0x41d8f4(0x173c)] * _0x1ec1ba, _0x449980, 'UI', 'menu_square_flat_24.png')[_0x41d8f4(0x8a2)](0x2 * _0x1b7c5a['default']['PixelScale'])['setOrigin'](0x0, 0.5), _0x1882f8['line'] = new Phaser['GameObjects']['Rectangle'](this['scene'], _0x1882f8['bounds']['left'], _0x449980 - 0x2, _0x1882f8['bounds'][_0x41d8f4(0x173c)] + _0x1882f8['box'][_0x41d8f4(0x173c)] * _0x1882f8['box']['scale'], 0x4, 0x0)['setOrigin'](0x0, 0.5), _0x1882f8['value'] = _0x1ec1ba, _0x1882f8[_0x41d8f4(0x758)][_0x41d8f4(0x15fb)](0xa0), _0x31264c && this[_0x41d8f4(0x18bd)]([_0x1882f8[_0x41d8f4(0x758)], _0x1882f8[_0x41d8f4(0x3b7)], _0x1882f8[_0x41d8f4(0xa05)]]), _0x1882f8;
                    } ['createToggle'](_0x20a996, _0x10b772, _0x36a4b1, _0x20e957 = !0x0) {
                        const _0x43e7e7 = _0x5e127b,
                            _0x27c615 = _0x3ec389['SAFEAREA']['left'] + 0x1e,
                            _0x174e73 = _0x3ec389[_0x43e7e7(0x1e0)][_0x43e7e7(0xf42)] + 0x12c;
                        let _0x1be4e2 = new _0x1a0e43[(_0x43e7e7(0x70b))](this[_0x43e7e7(0x6d2)]);
                        return _0x1be4e2['text'] = new Phaser[(_0x43e7e7(0xbf2))][(_0x43e7e7(0x1ae9))](this[_0x43e7e7(0x6d2)], _0x27c615, _0x10b772, _0x20a996, {
                            'align': 'left'
                        })[_0x43e7e7(0x8a2)](1.5 * _0x1b7c5a['default']['PixelScale'])[_0x43e7e7(0xf8e)](0x0, 0.5), _0x1be4e2['box'] = new Phaser[(_0x43e7e7(0xbf2))][(_0x43e7e7(0x1951))](this[_0x43e7e7(0x6d2)], _0x174e73, _0x10b772, 'UI', 'menu_checkbox_24_bg.png')[_0x43e7e7(0x8a2)](0x2 * _0x1b7c5a['default'][_0x43e7e7(0x15db)])['setOrigin'](0x0, 0.5), _0x1be4e2[_0x43e7e7(0x14c3)] = new Phaser['GameObjects']['Image'](this[_0x43e7e7(0x6d2)], _0x174e73, _0x10b772, 'UI', _0x36a4b1 ? 'yes16.png' : 'no16.png')[_0x43e7e7(0x8a2)](0x2 * _0x1b7c5a[_0x43e7e7(0xd2c)][_0x43e7e7(0x15db)])['setOrigin'](0x0, 0.5), _0x1be4e2['value'] = _0x36a4b1, _0x1be4e2['text']['setWordWrapWidth'](0xa0), _0x20e957 && this[_0x43e7e7(0x18bd)]([_0x1be4e2[_0x43e7e7(0x758)], _0x1be4e2[_0x43e7e7(0xa05)], _0x1be4e2[_0x43e7e7(0x14c3)]]), _0x1be4e2;
                    } ['createTextToggle'](_0x136eb6, _0x283657, _0x3384e1, _0x3fc700, _0x552a43, _0x2dba1e = !0x0) {
                        const _0x4b50b7 = _0x5e127b,
                            _0x1200de = _0x3ec389[_0x4b50b7(0x1e0)]['left'] + 0x1e,
                            _0x32cb8e = _0x3ec389[_0x4b50b7(0x1e0)][_0x4b50b7(0xf42)] + 0x12c;
                        let _0x2c2646 = new _0x5ac60a[(_0x4b50b7(0x263))](this[_0x4b50b7(0x6d2)]);
                        return _0x2c2646['text'] = new Phaser[(_0x4b50b7(0xbf2))]['Text'](this['scene'], _0x1200de, _0x283657, _0x136eb6, {
                            'align': 'left'
                        })['setScale'](1.5 * _0x1b7c5a[_0x4b50b7(0xd2c)][_0x4b50b7(0x15db)])['setOrigin'](0x0, 0.5), _0x2c2646[_0x4b50b7(0xa05)] = new Phaser['GameObjects']['Image'](this[_0x4b50b7(0x6d2)], _0x32cb8e, _0x283657, 'UI', 'menu_checkbox_24_bg.png')[_0x4b50b7(0x8a2)](0x2 * _0x1b7c5a[_0x4b50b7(0xd2c)]['PixelScale'])[_0x4b50b7(0xf8e)](0x0, 0.5), _0x2c2646[_0x4b50b7(0x1987)] = new Phaser[(_0x4b50b7(0xbf2))][(_0x4b50b7(0x1ae9))](this[_0x4b50b7(0x6d2)], _0x32cb8e, _0x283657, _0x3384e1 ? _0x3fc700 : _0x552a43, {
                            'align': 'left'
                        })[_0x4b50b7(0x8a2)](1.5 * _0x1b7c5a[_0x4b50b7(0xd2c)]['PixelScale'])[_0x4b50b7(0xf8e)](0x0, 0.5), _0x2c2646[_0x4b50b7(0xb81)] = _0x3384e1, _0x2c2646[_0x4b50b7(0x10e9)] = _0x3fc700, _0x2c2646[_0x4b50b7(0x1d6)] = _0x552a43, _0x2c2646['text']['setWordWrapWidth'](0xa0), _0x2c2646[_0x4b50b7(0x1987)][_0x4b50b7(0x15fb)](0x6e), _0x2c2646['box']['displayWidth'] = _0x2c2646[_0x4b50b7(0x1987)][_0x4b50b7(0xe75)], _0x2c2646['box'][_0x4b50b7(0xdab)](0.0001), _0x2dba1e && this[_0x4b50b7(0x18bd)]([_0x2c2646[_0x4b50b7(0x758)], _0x2c2646['box'], _0x2c2646['toggleTxt']]), _0x2c2646;
                    } ['EnableOptionButtons'](_0x48d07c, _0x315dba, _0x425e8d) {
                        const _0x2a4c55 = _0x5e127b;
                        this[_0x2a4c55(0xed0)]['removeAllListeners'](), this[_0x2a4c55(0xed0)][_0x2a4c55(0x76d)](), this[_0x2a4c55(0xed0)]['on']('pointerdown', () => {
                            _0x48d07c();
                        }), this[_0x2a4c55(0x17da)]['removeAllListeners'](), this['UI_right'][_0x2a4c55(0x76d)](), this['UI_right']['on']('pointerdown', () => {
                            _0x315dba();
                        });
                    } ['DisableOptionButtons']() {
                        this['highlightHide']();
                    } ['resumeClicked']() {
                        const _0x5553e4 = _0x5e127b;
                        _0x3ec389['default']['Core']['SceneManager'][_0x5553e4(0x1898)]();
                    } ['quitClicked']() {
                        const _0x3a9018 = _0x5e127b;
                        try {
                            _0x3ec389[_0x3a9018(0xd2c)][_0x3a9018(0x1043)]['OnPlayerQuit'](), _0x3ec389['default'][_0x3a9018(0x1043)][_0x3a9018(0x69e)][_0x3a9018(0x1a17)](), _0x3ec389['default'][_0x3a9018(0x1267)]['PlaySound'](_0x423164['default'][_0x3a9018(0x1b0f)]);
                        } catch (_0x1235eb) {
                            console['log'](_0x1235eb), _0x3ec389[_0x3a9018(0xd2c)]['Core'][_0x3a9018(0x33c)](), _0x3ec389[_0x3a9018(0xd2c)][_0x3a9018(0x1043)]['SceneManager'][_0x3a9018(0x1a17)]();
                        }
                    } ['MakeUIGrid'](_0x2a49c7) {} ['update']() {
                        const _0x23c2e6 = _0x5e127b;
                        let _0x293c10 = _0x3ec389[_0x23c2e6(0xd2c)][_0x23c2e6(0x1043)]['SceneManager'][_0x23c2e6(0x7ec)];
                        _0x293c10['UI_grid'] && _0x293c10[_0x23c2e6(0x938)] != _0x293c10[_0x23c2e6(0x8cc)]['previousGameObject'] && (_0x293c10['UI_selected'] == this['UI_left'] ? (this[_0x23c2e6(0x513)](), _0x293c10['ToggleCursorsVisibility'](!0x1)) : _0x293c10[_0x23c2e6(0x938)] == this['UI_right'] ? (this['highlightRight'](), _0x293c10[_0x23c2e6(0x1475)](!0x1)) : (this[_0x23c2e6(0xa0c)](), _0x293c10['ToggleCursorsVisibility'](!0x0)), _0x293c10['UI_grid'] && (_0x293c10['UI_grid'][_0x23c2e6(0x8f4)] = _0x293c10[_0x23c2e6(0x938)]));
                    } ['highlightLeft']() {
                        const _0x40eae3 = _0x5e127b;
                        this['highlight_left']['setVisible'](!0x0), this[_0x40eae3(0x609)][_0x40eae3(0x183f)](!0x1);
                    } ['highlightRight']() {
                        const _0x3988f7 = _0x5e127b;
                        this[_0x3988f7(0xaca)]['setVisible'](!0x1), this[_0x3988f7(0x609)][_0x3988f7(0x183f)](!0x0);
                    } ['highlightHide']() {
                        const _0x149404 = _0x5e127b;
                        this['highlight_left']['setVisible'](!0x1), this['highlight_right'][_0x149404(0x183f)](!0x1);
                    } ['UpdateOptionLang'](_0x15ea29) {}
                }
                _0x56621f['default'] = _0xf632bc;
            };
