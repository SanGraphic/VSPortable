// Module 0x17737
// Args: _0x2f899e, _0xb52689, _0x1d7f61

export default (_0x2f899e, _0xb52689, _0x1d7f61) => {
                'use strict';
                const _0x199929 = a0_0x6932;
                var _0x1b77e8 = this && this['__importDefault'] || function(_0x437447) {
                    return _0x437447 && _0x437447['__esModule'] ? _0x437447 : {
                        'default': _0x437447
                    };
                };
                Object['defineProperty'](_0xb52689, '__esModule', {
                    'value': !0x0
                });
                const _0x418e4a = _0x1b77e8(_0x1d7f61(0x169b4)),
                    _0x3282c5 = _0x1b77e8(_0x1d7f61(0xf6b5));
                class _0x12c4d1 extends Phaser['Scene'] {
                    constructor() {
                        const _0x1ec3fd = _0x199929;
                        super({
                            'key': _0x418e4a['default'][_0x1ec3fd(0x7ec)]
                        }), this['inputDelay'] = 0xfa, this[_0x1ec3fd(0xfa6)] = 0xc8, this['timeDown'] = new Array(), this[_0x1ec3fd(0x61b)] = !0x1, this['blockWASD'] = !0x1;
                    } ['preload']() {
                        const _0x2c546a = _0x199929;
                        this[_0x2c546a(0xcf2)] = null, this[_0x2c546a(0x5b2)] = null, this[_0x2c546a(0x938)] = null, this['EnterKey'] = this['input'][_0x2c546a(0x1340)][_0x2c546a(0x1aac)](Phaser['Input'][_0x2c546a(0xa19)]['KeyCodes']['ENTER']), this[_0x2c546a(0xe90)] = this['input']['keyboard']['addKey'](Phaser['Input'][_0x2c546a(0xa19)]['KeyCodes'][_0x2c546a(0x1210)]), this[_0x2c546a(0x16a5)] = this[_0x2c546a(0x1331)]['keyboard'][_0x2c546a(0x1aac)](Phaser['Input'][_0x2c546a(0xa19)][_0x2c546a(0x10f8)][_0x2c546a(0x7ff)]), this['AltKey'] = this['input']['keyboard'][_0x2c546a(0x1aac)](Phaser[_0x2c546a(0xd70)][_0x2c546a(0xa19)][_0x2c546a(0x10f8)]['ALT']);
                    } ['create']() {
                        const _0x487b32 = _0x199929;
                        var _0x4c14b3;
                        null === (_0x4c14b3 = this[_0x487b32(0x1331)]['gamepad']) || void 0x0 === _0x4c14b3 || _0x4c14b3[_0x487b32(0x3c7)]('down', (_0xe6df1e, _0x4556e3, _0x2c265a) => {
                            const _0x46e7fe = _0x487b32;
                            this[_0x46e7fe(0x145)] = _0xe6df1e;
                            for (let _0x47035a = 0x0; _0x47035a < 0xa; _0x47035a++) this[_0x46e7fe(0x105a)]['push'](-this['inputDelayPad']);
                        }), this[_0x487b32(0x1627)] = this[_0x487b32(0x1331)]['keyboard'][_0x487b32(0xffb)](), this['wKey'] = this[_0x487b32(0x1331)]['keyboard'][_0x487b32(0x1aac)](Phaser['Input']['Keyboard'][_0x487b32(0x10f8)]['W']), this['aKey'] = this[_0x487b32(0x1331)][_0x487b32(0x1340)][_0x487b32(0x1aac)](Phaser[_0x487b32(0xd70)]['Keyboard'][_0x487b32(0x10f8)]['A']), this[_0x487b32(0x19de)] = this['input']['keyboard'][_0x487b32(0x1aac)](Phaser[_0x487b32(0xd70)]['Keyboard'][_0x487b32(0x10f8)]['S']), this[_0x487b32(0x11d6)] = this['input'][_0x487b32(0x1340)]['addKey'](Phaser['Input'][_0x487b32(0xa19)]['KeyCodes']['D']), this['MakeHighlighters'](), this[_0x487b32(0x1331)]['keyboard']['addKey'](Phaser['Input'][_0x487b32(0xa19)]['KeyCodes'][_0x487b32(0x7ff)])['on']('down', _0x3cb63a => {
                            const _0x4cfdf3 = _0x487b32;
                            this[_0x4cfdf3(0x1297)]();
                        }), this['input'][_0x487b32(0x1340)][_0x487b32(0x1aac)](Phaser[_0x487b32(0xd70)][_0x487b32(0xa19)][_0x487b32(0x10f8)][_0x487b32(0x1210)])['on']('down', _0x199c15 => {
                            const _0x458c1d = _0x487b32;
                            this[_0x458c1d(0x872)]();
                        }), this[_0x487b32(0x1331)][_0x487b32(0x1340)][_0x487b32(0x1aac)](Phaser[_0x487b32(0xd70)][_0x487b32(0xa19)]['KeyCodes'][_0x487b32(0xa69)])['on']('down', _0x30a332 => {
                            const _0x1756ca = _0x487b32;
                            this[_0x1756ca(0x1331)]['keyboard'][_0x1756ca(0x13c0)](this[_0x1756ca(0xd0d)]) || this['OnSubmitPressed']();
                        });
                    } ['update'](_0x51a707, _0x31bfb6) {
                        const _0x2ff663 = _0x199929;
                        this['blockInput'] || this['UI_grid'] && (this['updateCursors'](_0x31bfb6), this['updateController'](_0x31bfb6), this[_0x2ff663(0x120b)]());
                    } ['updateCursors'](_0x2115e9) {
                        const _0x57858e = _0x199929;
                        this['input'][_0x57858e(0x1340)]['checkDown'](this[_0x57858e(0x1627)][_0x57858e(0xf42)], this[_0x57858e(0x789)]) ? this[_0x57858e(0x938)] = this['UI_grid']['GoLeft']() : this[_0x57858e(0x1331)][_0x57858e(0x1340)]['checkDown'](this['INPUT_cursors'][_0x57858e(0x15d9)], this[_0x57858e(0x789)]) ? this[_0x57858e(0x938)] = this['UI_grid'][_0x57858e(0xf24)]() : this['input'][_0x57858e(0x1340)]['checkDown'](this['aKey'], this[_0x57858e(0x789)]) ? this['blockWASD'] || (this[_0x57858e(0x938)] = this['UI_grid'][_0x57858e(0x1af6)]()) : this['input'][_0x57858e(0x1340)]['checkDown'](this[_0x57858e(0x11d6)], this[_0x57858e(0x789)]) && (this[_0x57858e(0xdef)] || (this[_0x57858e(0x938)] = this[_0x57858e(0x8cc)][_0x57858e(0xf24)]())), this['input'][_0x57858e(0x1340)]['checkDown'](this[_0x57858e(0x1627)]['up'], this['inputDelay']) ? this[_0x57858e(0x938)] = this[_0x57858e(0x8cc)][_0x57858e(0x5c0)]() : this[_0x57858e(0x1331)][_0x57858e(0x1340)]['checkDown'](this[_0x57858e(0x1627)][_0x57858e(0x9e5)], this[_0x57858e(0x789)]) ? this[_0x57858e(0x938)] = this['UI_grid']['GoDown']() : this['input'][_0x57858e(0x1340)][_0x57858e(0x13c0)](this[_0x57858e(0x1a58)], this[_0x57858e(0x789)]) ? this['blockWASD'] || (this[_0x57858e(0x938)] = this['UI_grid'][_0x57858e(0x5c0)]()) : this[_0x57858e(0x1331)]['keyboard'][_0x57858e(0x13c0)](this[_0x57858e(0x19de)], this[_0x57858e(0x789)]) && (this[_0x57858e(0xdef)] || (this[_0x57858e(0x938)] = this['UI_grid'][_0x57858e(0x19d1)]()));
                    } ['updateController'](_0x297f89) {
                        const _0x4c9696 = _0x199929;
                        var _0xf00753, _0x2a862f, _0x241720, _0x154796, _0x53cf6e, _0x48c233, _0x3ec93d, _0x202259;
                        this[_0x4c9696(0x145)] && this[_0x4c9696(0x8cc)] && (this['CheckButtonPad'](0x0, _0x297f89, this[_0x4c9696(0x145)][_0x4c9696(0xf42)], null === (_0xf00753 = this['UI_grid']) || void 0x0 === _0xf00753 ? void 0x0 : _0xf00753[_0x4c9696(0x1af6)]), this[_0x4c9696(0x1131)](0x1, _0x297f89, this['gamepad'][_0x4c9696(0x15d9)], null === (_0x2a862f = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x2a862f ? void 0x0 : _0x2a862f['GoRight']), this['CheckButtonPad'](0x2, _0x297f89, this[_0x4c9696(0x145)]['up'], null === (_0x241720 = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x241720 ? void 0x0 : _0x241720['GoUp']), this['CheckButtonPad'](0x3, _0x297f89, this[_0x4c9696(0x145)][_0x4c9696(0x9e5)], null === (_0x154796 = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x154796 ? void 0x0 : _0x154796[_0x4c9696(0x19d1)]), this[_0x4c9696(0x1131)](0x4, _0x297f89, this[_0x4c9696(0x145)]['A'], this['OnSubmitPressed'], this), this[_0x4c9696(0x1131)](0x5, _0x297f89, this[_0x4c9696(0x145)]['B'], this['OnCancelPressed'], this), this['CheckButtonPad'](0x6, _0x297f89, this['gamepad'][_0x4c9696(0x183c)]['x'] < -0.78, null === (_0x53cf6e = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x53cf6e ? void 0x0 : _0x53cf6e['GoLeft']), this[_0x4c9696(0x1131)](0x7, _0x297f89, this[_0x4c9696(0x145)]['leftStick']['x'] > 0.78, null === (_0x48c233 = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x48c233 ? void 0x0 : _0x48c233[_0x4c9696(0xf24)]), this['CheckButtonPad'](0x8, _0x297f89, this[_0x4c9696(0x145)][_0x4c9696(0x183c)]['y'] < -0.78, null === (_0x3ec93d = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x3ec93d ? void 0x0 : _0x3ec93d['GoUp']), this['CheckButtonPad'](0x9, _0x297f89, this['gamepad'][_0x4c9696(0x183c)]['y'] > 0.78, null === (_0x202259 = this[_0x4c9696(0x8cc)]) || void 0x0 === _0x202259 ? void 0x0 : _0x202259['GoDown']));
                    } ['OnSubmitPressed']() {
                        const _0x139922 = _0x199929;
                        var _0x1f8aa5, _0xa8622, _0x16d5f1;
                        try {
                            null === (_0x16d5f1 = null === (_0xa8622 = null === (_0x1f8aa5 = this[_0x139922(0x938)]) || void 0x0 === _0x1f8aa5 ? void 0x0 : _0x1f8aa5[_0x139922(0x18ef)]) || void 0x0 === _0xa8622 ? void 0x0 : _0xa8622[_0x139922(0x18f7)]) || void 0x0 === _0x16d5f1 || _0x16d5f1['fn']();
                        } catch (_0x2bb962) {
                            console['log'](_0x2bb962);
                        }
                        this[_0x139922(0x15d2)] && this['OnSubmitCallback']();
                    } ['OnCancelPressed']() {
                        const _0x50372c = _0x199929;
                        if (this[_0x50372c(0x1ad4)]) return this['OnCancelCallback']();
                    } ['CheckButtonPad'](_0x3cf375, _0x163e00, _0x8771ea, _0x179a19, _0x3d7c6d = this['UI_grid']) {
                        const _0x4e8d40 = _0x199929;
                        if (_0x8771ea && this['timeDown'][_0x3cf375] >= this['inputDelayPad']) {
                            if (_0x179a19) {
                                let _0x2de70d = _0x179a19['call'](_0x3d7c6d);
                                _0x2de70d && (this[_0x4e8d40(0x938)] = _0x2de70d);
                            }
                            this['timeDown'][_0x3cf375] = 0x0;
                        }
                        this['timeDown'][_0x3cf375] += _0x163e00;
                    } ['MakeHighlighters']() {
                        const _0x168c46 = _0x199929,
                            _0x146f3c = this[_0x168c46(0x183e)][_0x168c46(0x1756)]('UI', {
                                'start': 0x1,
                                'end': 0x8,
                                'zeroPad': 0x2,
                                'prefix': 'arrow_',
                                'suffix': '.png'
                            });
                        this[_0x168c46(0xcf2)] = this['add']['sprite'](-0x3e8, -0x3e8, 'UI', 'arrow_01.png')[_0x168c46(0xdab)](0x1)['setDepth'](Number[_0x168c46(0x1aaa)])[_0x168c46(0xf8e)](0x1, 0.5)['setScale'](0x2), this[_0x168c46(0x5b2)] = this['add'][_0x168c46(0x105b)](-0x3e8, -0x3e8, 'UI', 'arrow_01.png')[_0x168c46(0xdab)](0x1)[_0x168c46(0xb4a)](Number[_0x168c46(0x1aaa)])[_0x168c46(0xf8e)](0x0, 0.5)[_0x168c46(0x8a2)](0x2)['setFlipX'](!0x0), this[_0x168c46(0xcf2)][_0x168c46(0x183e)][_0x168c46(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x146f3c,
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this[_0x168c46(0x5b2)]['anims']['create']({
                            'key': 'idle',
                            'frames': _0x146f3c,
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this[_0x168c46(0xcf2)]['play']('idle'), this['UI_highlightR']['play']('idle');
                    } ['MakeUIGrid'](_0x2ecd19, _0x2352ab, _0x22ba83 = !0x1) {
                        const _0x2bf218 = _0x199929;
                        this['UI_grid'] = new _0x3282c5['default'](), this[_0x2bf218(0x8cc)]['Init'](_0x2ecd19, _0x2352ab), this[_0x2bf218(0x8cc)][_0x2bf218(0x1016)] = _0x22ba83, this[_0x2bf218(0x938)] = null;
                    } ['DestroyGrid']() {
                        const _0x7c6396 = _0x199929;
                        this[_0x7c6396(0x8cc)] = null, this['UI_selected'] = null, this[_0x7c6396(0x1475)](!0x1), this['OnSubmitCallback'] = null, this[_0x7c6396(0x1ad4)] = null;
                    } ['lock']() {
                        const _0x5d65b2 = _0x199929;
                        this['blockInput'] = !0x0, this[_0x5d65b2(0x1475)](!0x1);
                    } ['unlock']() {
                        const _0x384af1 = _0x199929;
                        this[_0x384af1(0x61b)] = !0x1, this['ToggleCursorsVisibility'](!0x0);
                    } ['ToggleCursorsVisibility'](_0x2179c7) {
                        const _0x4b529a = _0x199929;
                        var _0x171e0b, _0x5c037d;
                        null === (_0x171e0b = this[_0x4b529a(0xcf2)]) || void 0x0 === _0x171e0b || _0x171e0b[_0x4b529a(0x183f)](_0x2179c7), null === (_0x5c037d = this[_0x4b529a(0x5b2)]) || void 0x0 === _0x5c037d || _0x5c037d['setVisible'](_0x2179c7);
                    } ['SetNesting'](_0x54531d) {
                        const _0x2b945e = _0x199929;
                        this[_0x2b945e(0x182b)] = _0x54531d;
                    } ['HighlightButton']() {
                        const _0xcdeca0 = _0x199929;
                        if (!this[_0xcdeca0(0x938)]) return void this[_0xcdeca0(0x1475)](!0x1);
                        var _0x443940 = 0x0,
                            _0x33f42e = 0x0;
                        let _0x86ed5b = this[_0xcdeca0(0x938)]['parentContainer'];
                        for (; _0x86ed5b;) _0x443940 += _0x86ed5b['x'], _0x33f42e += _0x86ed5b['y'], _0x86ed5b = _0x86ed5b[_0xcdeca0(0xc1d)];
                        this[_0xcdeca0(0xcf2)]['x'] = _0x443940 + this[_0xcdeca0(0x938)]['x'] - this['UI_selected']['displayWidth'] * this[_0xcdeca0(0x938)][_0xcdeca0(0x612)], this[_0xcdeca0(0x5b2)]['x'] = _0x443940 + this[_0xcdeca0(0x938)]['x'] - this['UI_selected']['displayWidth'] * this['UI_selected']['originX'] + this[_0xcdeca0(0x938)][_0xcdeca0(0xe75)], this['UI_highlightL']['y'] = _0x33f42e + this[_0xcdeca0(0x938)]['y'] - this['UI_selected'][_0xcdeca0(0x828)] * this[_0xcdeca0(0x938)][_0xcdeca0(0x564)] + 0.5 * this[_0xcdeca0(0x938)][_0xcdeca0(0x828)], this['UI_highlightR']['y'] = _0x33f42e + this[_0xcdeca0(0x938)]['y'] - this['UI_selected'][_0xcdeca0(0x828)] * this['UI_selected'][_0xcdeca0(0x564)] + 0.5 * this[_0xcdeca0(0x938)]['displayHeight'];
                    }
                }
                _0xb52689['default'] = _0x12c4d1;
            };
