// Module 0x4103
// Args: _0x25827f, _0x12384f, _0x21bb59

export default (_0x25827f, _0x12384f, _0x21bb59) => {
                'use strict';
                const _0x2fee8d = a0_0x6932;
                var _0x5969b4 = this && this['__importDefault'] || function(_0x2d9c7f) {
                    const _0x29960a = a0_0x6932;
                    return _0x2d9c7f && _0x2d9c7f['__esModule'] ? _0x2d9c7f : {
                        'default': _0x2d9c7f
                    };
                };
                Object['defineProperty'](_0x12384f, '__esModule', {
                    'value': !0x0
                }), _0x12384f['DropDown'] = void 0x0;
                const _0x2935de = _0x5969b4(_0x21bb59(0x5103)),
                    _0x167003 = _0x5969b4(_0x21bb59(0x5f07));
                class _0x51e937 {
                    constructor(_0x4ba6e3, _0x570924, _0x41c2ac, _0x33481f) {
                        const _0x39878d = _0x2fee8d;
                        this['scene'] = _0x4ba6e3, this[_0x39878d(0x17b7)] = _0x570924, this[_0x39878d(0x19ff)] = _0x41c2ac, this['options'] = _0x33481f, this['isOpen'] = !0x1, this[_0x39878d(0x11e2)] = '', this[_0x39878d(0x157c)] = 0x0;
                        let _0x433e7d = this['getMaxTextObjectSize'](_0x33481f);
                        this['dropDownButton'] = this['scene']['rexUI'][_0x39878d(0x18bd)]['label']({
                            'x': this[_0x39878d(0x17b7)],
                            'y': this[_0x39878d(0x19ff)],
                            'background': this['scene'][_0x39878d(0x18bd)]['image'](0x0, 0x0, 'UI', 'whiteDot.png')['setScale'](0x2 * _0x2935de[_0x39878d(0xd2c)][_0x39878d(0x15db)])[_0x39878d(0xf8e)](0x0, 0.5)[_0x39878d(0xb34)](0x1c142a),
                            'text': this['createTextObject']('')['setFixedSize'](_0x433e7d['width'], _0x433e7d[_0x39878d(0x140e)]),
                            'space': {
                                'left': 0x14,
                                'right': 0x14,
                                'top': 0xa,
                                'bottom': 0xa
                            }
                        })[_0x39878d(0x1b0a)]('value', '');
                        let _0x15d3f4 = _0x167003[_0x39878d(0xd2c)][_0x39878d(0x1f1)]['getLangNative']();
                        _0x15d3f4 && (this[_0x39878d(0x16aa)]['setData']('value', _0x15d3f4), this['dropDownButton'][_0x39878d(0x758)] = _0x15d3f4, this[_0x39878d(0x157c)] = 0x0, this['result'] = _0x15d3f4), this[_0x39878d(0x16aa)][_0x39878d(0x10f4)]();
                    } ['onOpenDropDown']() {
                        const _0x14bde6 = _0x2fee8d;
                        this[_0x14bde6(0x16e1)] || (this[_0x14bde6(0x16e1)] = !0x0, this[_0x14bde6(0x178d)] = this['scene'][_0x14bde6(0x454)][_0x14bde6(0x18bd)]['menu']({
                            'x': this[_0x14bde6(0x17b7)] - 0x44,
                            'y': this['posY'] + 0x53,
                            'orientation': 'y',
                            'items': this[_0x14bde6(0x189c)][_0x14bde6(0x1919)](function(_0xe0c5b3) {
                                return {
                                    'label': _0xe0c5b3
                                };
                            } [_0x14bde6(0xf7e)](this)),
                            'createButtonCallback': this['createMenuButton'][_0x14bde6(0xf7e)](this),
                            'easeIn': {
                                'duration': 0x1f4,
                                'orientation': 'y'
                            },
                            'easeOut': {
                                'duration': 0x64,
                                'orientation': 'y'
                            }
                        }));
                    } ['onCloseDropDown']() {
                        const _0x4ec5e7 = _0x2fee8d;
                        this['isOpen'] && (this['isOpen'] = !0x1, this[_0x4ec5e7(0x178d)][_0x4ec5e7(0x900)](), this[_0x4ec5e7(0x178d)] = void 0x0);
                    } ['createMenuButton'](_0x484f26, _0x19ab67, _0x235eae) {
                        const _0x11bac0 = _0x2fee8d;
                        let _0x4b2fa3 = this['scene'][_0x11bac0(0x454)]['add']['label']({
                            'background': this[_0x11bac0(0x6d2)]['add'][_0x11bac0(0x568)](0x0, 0x0, 'UI', 'whiteDot.png')[_0x11bac0(0x8a2)](0x2 * _0x2935de['default'][_0x11bac0(0x15db)])['setOrigin'](0x0, 0.5)[_0x11bac0(0xb34)](0x4b4f74),
                            'text': this[_0x11bac0(0xfeb)](_0x484f26[_0x11bac0(0xbf3)])['setFontFamily']('Courier'),
                            'space': {
                                'left': 0x14,
                                'right': 0x14,
                                'top': 0xa,
                                'bottom': 0xa
                            }
                        });
                        return _0x4b2fa3['index'] = _0x19ab67, _0x4b2fa3;
                    } ['onMenuOver'](_0x5bd313) {
                        const _0x568bc7 = _0x2fee8d;
                        _0x5bd313[_0x568bc7(0xbac)]('background')['tint'] = 0xaa00;
                    } ['onMenuOut'](_0x52c639) {
                        _0x52c639['getElement']('background')['tint'] = 0x4b4f74;
                    } ['onMenuClick'](_0x4e6da1) {
                        const _0x4ae735 = _0x2fee8d;
                        this['dropDownButton'][_0x4ae735(0x1b0a)]('value', _0x4e6da1[_0x4ae735(0x758)]), this['dropDownButton'][_0x4ae735(0x758)] = _0x4e6da1['text'], this[_0x4ae735(0x11e2)] = _0x4e6da1['text'], this[_0x4ae735(0x157c)] = _0x4e6da1['index'], this[_0x4ae735(0x14f5)]();
                    } ['getMaxTextObjectSize'](_0x1cae49) {
                        const _0x7dc5cf = _0x2fee8d;
                        let _0x21bfd4 = this[_0x7dc5cf(0xfeb)]('')[_0x7dc5cf(0x10d8)]('Courier'),
                            _0x51d067 = 0x0,
                            _0x2df882 = 0x0;
                        for (let _0x1fdeb2 = 0x0, _0x3bce0a = _0x1cae49[_0x7dc5cf(0xed9)]; _0x1fdeb2 < _0x3bce0a; _0x1fdeb2++) _0x21bfd4[_0x7dc5cf(0x758)] = _0x1cae49[_0x1fdeb2], _0x51d067 = Math['max'](_0x21bfd4[_0x7dc5cf(0x173c)], _0x51d067), _0x2df882 = Math['max'](_0x21bfd4[_0x7dc5cf(0x140e)], _0x2df882);
                        return _0x21bfd4[_0x7dc5cf(0x16ca)](), {
                            'width': _0x51d067,
                            'height': _0x2df882
                        };
                    } ['createTextObject'](_0x17ec82) {
                        const _0x33de02 = _0x2fee8d;
                        return this[_0x33de02(0x6d2)][_0x33de02(0x18bd)][_0x33de02(0x758)](0x0, 0x0, _0x17ec82, {
                            'fontSize': '20px'
                        });
                    } ['MakeUIGrid']() {
                        const _0x31d0d1 = _0x2fee8d;
                        let _0x22b899 = _0x167003['default']['Core']['SceneManager']['UI_overlayScene'];
                        _0x22b899[_0x31d0d1(0x4ff)](0x1, this['options'][_0x31d0d1(0xed9)] + 0x1, !0x1), _0x22b899['UI_grid']['SetContents'](0x0, 0x0, this[_0x31d0d1(0x16aa)]);
                        for (let _0x56f1e6 = 0x0; _0x56f1e6 < this['dropDownMenu'][_0x31d0d1(0x875)][_0x31d0d1(0xed9)]; _0x56f1e6++) this['dropDownMenu']['buttons'][_0x56f1e6][_0x31d0d1(0x18ef)] = [], this[_0x31d0d1(0x178d)][_0x31d0d1(0x875)][_0x56f1e6][_0x31d0d1(0x76d)](), this[_0x31d0d1(0x178d)][_0x31d0d1(0x875)][_0x56f1e6]['on']('pointerdown', () => {
                            const _0x58d444 = _0x31d0d1;
                            this[_0x58d444(0x178d)] && this[_0x58d444(0x344)](this[_0x58d444(0x178d)]['buttons'][_0x56f1e6]);
                        }), this[_0x31d0d1(0x178d)][_0x31d0d1(0x875)][_0x56f1e6]['on']('pointerover', () => {
                            const _0x1288ef = _0x31d0d1;
                            this[_0x1288ef(0x178d)] && this[_0x1288ef(0xc3d)](this[_0x1288ef(0x178d)][_0x1288ef(0x875)][_0x56f1e6]);
                        }), this['dropDownMenu'][_0x31d0d1(0x875)][_0x56f1e6]['on']('pointerout', () => {
                            const _0x8567bc = _0x31d0d1;
                            this[_0x8567bc(0x178d)] && this[_0x8567bc(0x7ca)](this[_0x8567bc(0x178d)][_0x8567bc(0x875)][_0x56f1e6]);
                        }), _0x22b899[_0x31d0d1(0x8cc)]['SetContents'](0x0, _0x56f1e6 + 0x1, this['dropDownMenu'][_0x31d0d1(0x875)][_0x56f1e6]);
                        _0x22b899['ToggleCursorsVisibility'](!0x0), _0x22b899[_0x31d0d1(0x8cc)][_0x31d0d1(0xb55)](this['dropDownButton']), _0x22b899[_0x31d0d1(0x938)] = this['dropDownButton'], _0x167003[_0x31d0d1(0xd2c)][_0x31d0d1(0x1043)]['SceneManager'][_0x31d0d1(0x6d2)][_0x31d0d1(0x5d8)](_0x22b899), _0x22b899[_0x31d0d1(0x1ad4)] = () => {
                            const _0xf45905 = _0x31d0d1;
                            this[_0xf45905(0x14f5)]();
                        };
                    } ['DestroyUIGrid']() {
                        const _0x4916fc = _0x2fee8d;
                        _0x167003['default'][_0x4916fc(0x1043)][_0x4916fc(0x69e)][_0x4916fc(0x7ec)][_0x4916fc(0x110c)]();
                    } ['setManualValue'](_0x594570, _0xeaa914) {
                        const _0x1a223c = _0x2fee8d;
                        this[_0x1a223c(0x16aa)][_0x1a223c(0x1b0a)]('value', _0x594570), this[_0x1a223c(0x16aa)]['text'] = _0x594570, this[_0x1a223c(0x11e2)] = _0x594570, this[_0x1a223c(0x157c)] = _0xeaa914;
                    }
                }
                _0x12384f['DropDown'] = _0x51e937, _0x12384f['default'] = _0x51e937;
            };
