// Module 0xf676
// Args: _0x33426c, _0x5513da, _0x526d9b

export default (_0x33426c, _0x5513da, _0x526d9b) => {
                'use strict';
                const _0x4481cc = a0_0x6932;
                var _0x52a48f = this && this['__importDefault'] || function(_0x4065b4) {
                    const _0x42b8e7 = _0x4481cc;
                    return _0x4065b4 && _0x4065b4[_0x42b8e7(0x16f1)] ? _0x4065b4 : {
                        'default': _0x4065b4
                    };
                };
                Object['defineProperty'](_0x5513da, '__esModule', {
                    'value': !0x0
                }), _0x5513da['CollectionSecretKeyboard'] = void 0x0;
                const _0x1067d8 = _0x526d9b(0x16c14),
                    _0x3833a9 = _0x52a48f(_0x526d9b(0x5103)),
                    _0x1a88ad = _0x52a48f(_0x526d9b(0xccae)),
                    _0x586d21 = _0x52a48f(_0x526d9b(0x5f07));
                class _0x342ed2 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x13c886, _0x480e59, _0x488886, _0x712230) {
                        const _0x275a80 = _0x4481cc;
                        super(_0x13c886, _0x480e59, _0x488886), this[_0x275a80(0x668)] = _0x712230, this[_0x275a80(0x172e)] = [], this[_0x275a80(0x878)] = !0x1, this[_0x275a80(0x45f)] = [
                            ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                            ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
                            ['O', 'P', 'Q', 'R', 'S', 'T', 'U'],
                            ['V', 'W', 'X', 'Y', 'Z', '-', '1']
                        ], this[_0x275a80(0x8a2)](_0x3833a9[_0x275a80(0xd2c)][_0x275a80(0x15db)]);
                        for (let _0x5309ba = 0x0; _0x5309ba < this[_0x275a80(0x45f)][_0x275a80(0xed9)]; _0x5309ba++)
                            for (let _0x52d1fd = 0x0; _0x52d1fd < this['chars'][_0x5309ba][_0x275a80(0xed9)]; _0x52d1fd++) {
                                let _0x2f7cf2 = 0x24a + 0x35 * _0x52d1fd,
                                    _0x1a60c8 = 0x140 + 0x3f * _0x5309ba,
                                    _0x29914a = this[_0x275a80(0x6d2)][_0x275a80(0x18bd)][_0x275a80(0xcce)](_0x2f7cf2, _0x1a60c8, 'titleFont', this[_0x275a80(0x45f)][_0x5309ba][_0x52d1fd], 0x82);
                                _0x29914a[_0x275a80(0xdab)](0x0);
                                let _0x154577 = _0x29914a;
                                _0x154577[_0x275a80(0x857)] = this['textChar'][_0x275a80(0xed9)], _0x154577['keyCol'] = 0x2 + _0x52d1fd, _0x154577['keyRow'] = 0x4 + _0x5309ba, this[_0x275a80(0x172e)]['push'](_0x29914a), _0x29914a['on']('pointerdown', () => {
                                    this['keyClicked'](_0x29914a);
                                });
                            }
                        this[_0x275a80(0x6d2)]['input']['on']('pointermove', this[_0x275a80(0x7a6)], this), this['scene'][_0x275a80(0x1331)]['on']('pointerdown', this[_0x275a80(0xb14)], this), this[_0x275a80(0xf79)] = new Phaser['GameObjects'][(_0x275a80(0x1951))](this[_0x275a80(0x6d2)], 0x2f8, 0x1f4, 'UI', 'openKeyboardButton.png')[_0x275a80(0xf8e)](0.5), this[_0x275a80(0xf79)]['on']('pointerdown', this['keyboardIconClicked'][_0x275a80(0xf7e)](this), this), this[_0x275a80(0x6d2)]['add'][_0x275a80(0x1a88)](this[_0x275a80(0xf79)]), this['block'] = new _0x1067d8['NineSlice'](this[_0x275a80(0x6d2)], _0x1a88ad['default']['SelectionHighlight'], {
                            'x': 0x266,
                            'y': 0x1ab,
                            'width': 0x28,
                            'height': 0x28
                        }), this['block']['setOrigin'](0.5)['setScale'](_0x3833a9['default']['PixelScale']), this[_0x275a80(0x736)][_0x275a80(0xdab)](0x0), this[_0x275a80(0x6d2)]['add'][_0x275a80(0x1a88)](this[_0x275a80(0x736)]);
                    } ['keyboardIconClicked']() {
                        this['showKeyboard']();
                    } ['hideKeyboard']() {
                        const _0x3238fa = _0x4481cc;
                        this['keyboardEnabled'] && (this[_0x3238fa(0x3f7)] && this['blockTween']['isPlaying']() && (this[_0x3238fa(0x3f7)]['stop'](), this['blockTween'] = null), this[_0x3238fa(0xa8e)] && this[_0x3238fa(0xa8e)][_0x3238fa(0xb61)]() && (this[_0x3238fa(0xa8e)][_0x3238fa(0x1a34)](), this[_0x3238fa(0xa8e)] = null), this['blockTween'] = this['scene'][_0x3238fa(0x12a1)]['add']({
                            'targets': [this[_0x3238fa(0x736)]],
                            'alpha': 0x0,
                            'duration': 0x64
                        }), this['textTween'] = this['scene']['tweens'][_0x3238fa(0x18bd)]({
                            'targets': this['textChar'],
                            'alpha': 0x0,
                            'duration': 0x64
                        }), this[_0x3238fa(0x878)] = !0x1, this['keyboardIcon'][_0x3238fa(0xdab)](0x1));
                    } ['showKeyboard']() {
                        const _0x9339f2 = _0x4481cc;
                        if (this[_0x9339f2(0x878)]) return;
                        if (this[_0x9339f2(0x3f7)] && this[_0x9339f2(0x3f7)][_0x9339f2(0xb61)]() && (this[_0x9339f2(0x3f7)][_0x9339f2(0x1a34)](), this[_0x9339f2(0x3f7)] = null), this['textTween'] && this[_0x9339f2(0xa8e)][_0x9339f2(0xb61)]()) {
                            this['textTween'][_0x9339f2(0x1a34)](), this[_0x9339f2(0xa8e)] = null;
                            for (let _0x565be0 = 0x0; _0x565be0 < this['textChar'][_0x9339f2(0xed9)]; _0x565be0++) this[_0x9339f2(0x172e)][_0x565be0]['setAlpha'](0x0);
                        }
                        this[_0x9339f2(0xa8e)] = this[_0x9339f2(0x6d2)][_0x9339f2(0x12a1)][_0x9339f2(0x18bd)]({
                            'targets': this[_0x9339f2(0x172e)],
                            'alpha': 0x1,
                            'duration': 0xc8,
                            'delay': this[_0x9339f2(0x6d2)][_0x9339f2(0x12a1)][_0x9339f2(0x29e)](0x14, {})
                        }), this['keyboardEnabled'] = !0x0, this['block']['setAlpha'](0x0), this[_0x9339f2(0xf79)][_0x9339f2(0xdab)](0x0);
                        let _0x5ec48c = this['textChar'][0x0],
                            _0x45a6ba = _0x586d21['default'][_0x9339f2(0x1043)]['SceneManager']['UI_overlayScene'];
                        _0x45a6ba[_0x9339f2(0x8cc)][_0x9339f2(0x4bf)](_0x5ec48c['keyCol'], _0x5ec48c[_0x9339f2(0x1226)]), _0x45a6ba[_0x9339f2(0x938)] = _0x5ec48c, _0x45a6ba[_0x9339f2(0xdef)] = !0x0;
                    } ['pointerMove'](_0x51b656, _0x12e419, _0x588561) {
                        const _0x438c5e = _0x4481cc;
                        if (this[_0x438c5e(0x878)])
                            for (let _0x16542d = 0x0; _0x16542d < this[_0x438c5e(0x172e)][_0x438c5e(0xed9)]; _0x16542d++) {
                                let _0x5290c2 = this[_0x438c5e(0x172e)][_0x16542d]['_bounds'][_0x438c5e(0xeff)];
                                if (new Phaser[(_0x438c5e(0x10d2))][(_0x438c5e(0xb64))](_0x5290c2['x'] - 0xf, _0x5290c2['y'] + 0x50, 0x32, 0x37)[_0x438c5e(0x1780)](_0x51b656['worldX'], _0x51b656['worldY'])) return void this[_0x438c5e(0x13c2)](this['textChar'][_0x16542d]);
                            }
                    } ['keyClicked'](_0x29e66b) {
                        const _0x10fde5 = _0x4481cc;
                        if (!this['keyboardEnabled']) return;
                        this[_0x10fde5(0x13c2)](_0x29e66b);
                        let _0x5d54bb = _0x29e66b['_bounds']['characters'][0x0]['char'],
                            _0x30e933 = {
                                'charCode': 0x0,
                                'code': 'Key' + _0x5d54bb,
                                'isComposing': !0x0,
                                'key': _0x5d54bb,
                                'keyCode': Phaser[_0x10fde5(0xd70)][_0x10fde5(0xa19)]['KeyCodes'][_0x5d54bb],
                                'location': 0x0,
                                'repeat': !0x1
                            },
                            _0x3a7e44 = new KeyboardEvent('keydown', _0x30e933);
                        this['scene'][_0x10fde5(0x1331)][_0x10fde5(0x1340)][_0x10fde5(0x700)]('keydown', _0x3a7e44);
                    } ['pointerClicked'](_0x50dfce) {
                        const _0x53fef9 = _0x4481cc;
                        if (this['keyboardEnabled'])
                            for (let _0x434187 = 0x0; _0x434187 < this[_0x53fef9(0x172e)][_0x53fef9(0xed9)]; _0x434187++) {
                                let _0x30e2d3 = this[_0x53fef9(0x172e)][_0x434187],
                                    _0x1a2821 = _0x30e2d3[_0x53fef9(0xa36)][_0x53fef9(0xeff)];
                                if (new Phaser[(_0x53fef9(0x10d2))]['Rectangle'](_0x1a2821['x'] - 0xf, _0x1a2821['y'] + 0x50, 0x32, 0x37)['contains'](_0x50dfce['worldX'], _0x50dfce[_0x53fef9(0x7e7)])) {
                                    this[_0x53fef9(0x1104)](_0x30e2d3);
                                    break;
                                }
                            }
                    } ['moveBlock'](_0x475779) {
                        const _0x32f53d = _0x4481cc;
                        if (!this['keyboardEnabled']) return;
                        let _0x2686b3 = _0x475779[_0x32f53d(0xa36)],
                            _0x4fd4c8 = _0x2686b3[_0x32f53d(0xeff)],
                            _0x54f687 = _0x2686b3['characters'][0x0];
                        this[_0x32f53d(0x736)]['x'] = _0x4fd4c8['x'] + _0x54f687['x'] + 0.5 * _0x54f687['glyph'][_0x32f53d(0x173c)] + 0x5, this['block']['y'] = _0x4fd4c8['y'] + _0x54f687['y'] + 0.5 * _0x54f687[_0x32f53d(0x47d)][_0x32f53d(0x140e)] + 0x5, this[_0x32f53d(0x736)]['setAlpha'](0x1);
                        let _0x5a4b44 = _0x475779,
                            _0x5de7b6 = _0x586d21[_0x32f53d(0xd2c)]['Core'][_0x32f53d(0x69e)][_0x32f53d(0x7ec)];
                        _0x5de7b6['UI_grid'][_0x32f53d(0x4bf)](_0x5a4b44['keyCol'], _0x5a4b44['keyRow']), _0x5de7b6[_0x32f53d(0x938)] = _0x475779;
                    } ['destroy']() {}
                }
                _0x5513da['CollectionSecretKeyboard'] = _0x342ed2, _0x5513da['default'] = _0x342ed2;
            };
