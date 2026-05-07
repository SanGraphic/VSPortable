// Module 0xae1e
// Args: _0x502400, _0x4be6d4, _0x3c5872

export default (_0x502400, _0x4be6d4, _0x3c5872) => {
                'use strict';
                const _0x33dded = a0_0x6932;
                var _0x4cdbfb = this && this['__createBinding'] || (Object['create'] ? function(_0x44a067, _0x1a92fa, _0x57629c, _0x1d5fa9) {
                        const _0x154b57 = _0x33dded;
                        void 0x0 === _0x1d5fa9 && (_0x1d5fa9 = _0x57629c);
                        var _0x5bb120 = Object[_0x154b57(0x1687)](_0x1a92fa, _0x57629c);
                        _0x5bb120 && !('get' in _0x5bb120 ? !_0x1a92fa[_0x154b57(0x16f1)] : _0x5bb120['writable'] || _0x5bb120[_0x154b57(0xf70)]) || (_0x5bb120 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x1a92fa[_0x57629c];
                            }
                        }), Object[_0x154b57(0x811)](_0x44a067, _0x1d5fa9, _0x5bb120);
                    } : function(_0x26c0b1, _0x33e50b, _0x3c5314, _0x537c54) {
                        void 0x0 === _0x537c54 && (_0x537c54 = _0x3c5314), _0x26c0b1[_0x537c54] = _0x33e50b[_0x3c5314];
                    }),
                    _0x462edf = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x13a3ff, _0x9c6fb2) {
                        const _0x42ca1e = _0x33dded;
                        Object[_0x42ca1e(0x811)](_0x13a3ff, 'default', {
                            'enumerable': !0x0,
                            'value': _0x9c6fb2
                        });
                    } : function(_0x5d31a5, _0x448564) {
                        _0x5d31a5['default'] = _0x448564;
                    }),
                    _0x1e6f34 = this && this['__importStar'] || function(_0x2945f5) {
                        const _0x1acade = _0x33dded;
                        if (_0x2945f5 && _0x2945f5['__esModule']) return _0x2945f5;
                        var _0x128f57 = {};
                        if (null != _0x2945f5) {
                            for (var _0x514de3 in _0x2945f5) 'default' !== _0x514de3 && Object['prototype']['hasOwnProperty'][_0x1acade(0xff0)](_0x2945f5, _0x514de3) && _0x4cdbfb(_0x128f57, _0x2945f5, _0x514de3);
                        }
                        return _0x462edf(_0x128f57, _0x2945f5), _0x128f57;
                    },
                    _0x13ff3f = this && this['__importDefault'] || function(_0x23f8e3) {
                        const _0x19228f = _0x33dded;
                        return _0x23f8e3 && _0x23f8e3[_0x19228f(0x16f1)] ? _0x23f8e3 : {
                            'default': _0x23f8e3
                        };
                    };
                Object['defineProperty'](_0x4be6d4, '__esModule', {
                    'value': !0x0
                });
                const _0x46d71e = _0x3c5872(0x16c14),
                    _0x4c725a = _0x13ff3f(_0x3c5872(0x169b4)),
                    _0x445135 = _0x13ff3f(_0x3c5872(0x1fd7)),
                    _0x11bb53 = _0x13ff3f(_0x3c5872(0x54e3)),
                    _0x22863e = _0x13ff3f(_0x3c5872(0xccae)),
                    _0x49dd5f = _0x1e6f34(_0x3c5872(0x5f07));
                class _0x53d692 extends Phaser['Scene'] {
                    constructor() {
                        const _0x147ca3 = _0x33dded;
                        super({
                            'key': _0x4c725a['default'][_0x147ca3(0x164a)]
                        }), this[_0x147ca3(0xa1e)] = [0x2, 0x9, 0xa, 0x7, 0x1], this[_0x147ca3(0x213)] = [], this['hasEbony'] = !0x1, this[_0x147ca3(0x458)] = !0x1, this['hintCounter'] = 0x0, this[_0x147ca3(0x11b4)] = 0xbb8;
                    } ['preload']() {} ['create']() {
                        const _0x4a8bc6 = _0x33dded;
                        this['hintCounter'] = 0x0, this[_0x4a8bc6(0x6a2)] = this[_0x4a8bc6(0x18bd)]['image'](-0xa, -0xa, 'items', 'blackDot.png')[_0x4a8bc6(0x8a2)](this[_0x4a8bc6(0x12f9)]['width'] + 0x14, this['renderer']['height'] + 0x14)['setScrollFactor'](0x0)['setAlpha'](0x0)[_0x4a8bc6(0xf8e)](0x0), this[_0x4a8bc6(0xab8)] = this['add']['image'](0.5 * this[_0x4a8bc6(0x12f9)][_0x4a8bc6(0x173c)], 0.5 * this[_0x4a8bc6(0x12f9)]['height'], 'items', 'Larobba02.png')[_0x4a8bc6(0x8a2)](0x8)['setScrollFactor'](0x0), this['pianoOverlay'] = this['add']['image'](0.5 * this[_0x4a8bc6(0x12f9)][_0x4a8bc6(0x173c)], 0.5 * this[_0x4a8bc6(0x12f9)][_0x4a8bc6(0x140e)], 'items', 'Overlay.png')[_0x4a8bc6(0x8a2)](0x8)['setScrollFactor'](0x0)[_0x4a8bc6(0xdab)](0x0), this[_0x4a8bc6(0x12a1)]['add']({
                            'targets': this[_0x4a8bc6(0x6a2)],
                            'alpha': 0.65,
                            'duration': 0x1f4
                        }), this['tweens'][_0x4a8bc6(0x18bd)]({
                            'targets': this['pianoOverlay'],
                            'alpha': 0x1,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                this['EnableInput']();
                            }
                        }), this['BackButton'] = new _0x46d71e['NineSlice'](this, _0x22863e['default'][_0x4a8bc6(0x1775)], {
                            'x': _0x49dd5f[_0x4a8bc6(0x1e0)]['right'] - 0x64,
                            'y': 0x3,
                            'width': 0x30,
                            'height': 0x1e
                        })['setScale'](0x4 * _0x49dd5f[_0x4a8bc6(0x1b10)])['setOrigin'](0x1, 0x0), this[_0x4a8bc6(0x18bd)][_0x4a8bc6(0x1a88)](this[_0x4a8bc6(0x1775)]), this['BackText'] = new Phaser[(_0x4a8bc6(0xbf2))]['Text'](this, this[_0x4a8bc6(0x1775)]['x'] - 0.5 * this[_0x4a8bc6(0x1775)]['displayWidth'], this[_0x4a8bc6(0x1775)]['y'] + 0.5 * this[_0x4a8bc6(0x1775)][_0x4a8bc6(0x828)], _0x49dd5f[_0x4a8bc6(0xd2c)][_0x4a8bc6(0x1f1)][_0x4a8bc6(0xb10)]('topBar_back'), {
                            'fontFamily': _0x49dd5f['default']['Lang']['FONTFAMILY']
                        })[_0x4a8bc6(0xf8e)](0.5, 0.5)['setScale'](0x2 * _0x49dd5f['MASTER_SCALE']), _0x49dd5f['default'][_0x4a8bc6(0x1f1)]['scaleToMaxFast'](this[_0x4a8bc6(0x44a)], !0x1, 0x5a), this[_0x4a8bc6(0x18bd)]['existing'](this[_0x4a8bc6(0x44a)]), this[_0x4a8bc6(0x13c4)] = this[_0x4a8bc6(0x18bd)][_0x4a8bc6(0x105b)](this['piano']['x'] - 0x74, this[_0x4a8bc6(0xab8)]['y'] + 0x58, 'vfx', 'WhiteDot.png')['setScale'](0x10, 0x40)['setAlpha'](0.00001), this[_0x4a8bc6(0x659)] = this[_0x4a8bc6(0x18bd)]['sprite'](this[_0x4a8bc6(0x13c4)]['x'] + 0x14, this[_0x4a8bc6(0x13c4)]['y'], 'vfx', 'WhiteDot.png')[_0x4a8bc6(0x8a2)](0x18, 0x40)['setAlpha'](0.00001), this[_0x4a8bc6(0x4c9)] = this[_0x4a8bc6(0x18bd)]['sprite'](this[_0x4a8bc6(0x13c4)]['x'] + 0x28, this['key1']['y'], 'vfx', 'WhiteDot.png')['setScale'](0x10, 0x40)['setAlpha'](0.00001), this['key6'] = this[_0x4a8bc6(0x18bd)][_0x4a8bc6(0x105b)](this[_0x4a8bc6(0x13c4)]['x'] + 0x37, this[_0x4a8bc6(0x13c4)]['y'], 'vfx', 'WhiteDot.png')[_0x4a8bc6(0x8a2)](0xf, 0x40)['setAlpha'](0.00001), this[_0x4a8bc6(0xeba)] = this[_0x4a8bc6(0x18bd)][_0x4a8bc6(0x105b)](this['key1']['x'] + 0x4c, this[_0x4a8bc6(0x13c4)]['y'], 'vfx', 'WhiteDot.png')[_0x4a8bc6(0x8a2)](0x18, 0x40)[_0x4a8bc6(0xdab)](0.00001), this[_0x4a8bc6(0x5b5)] = this['add'][_0x4a8bc6(0x105b)](this['key1']['x'] + 0x64, this['key1']['y'], 'vfx', 'WhiteDot.png')['setScale'](0x18, 0x40)[_0x4a8bc6(0xdab)](0.00001), this['key12'] = this['add'][_0x4a8bc6(0x105b)](this['key1']['x'] + 0x78, this[_0x4a8bc6(0x13c4)]['y'], 'vfx', 'WhiteDot.png')[_0x4a8bc6(0x8a2)](0x10, 0x40)[_0x4a8bc6(0xdab)](0.00001), this[_0x4a8bc6(0x2ca)] = this['add']['sprite'](this['key1']['x'] + 0x8, this['key1']['y'] - 0xc, 'vfx', 'WhiteDot.png')['setScale'](0x10, 0x28)['setAlpha'](0.00001), this['key4'] = this[_0x4a8bc6(0x18bd)][_0x4a8bc6(0x105b)](this[_0x4a8bc6(0x13c4)]['x'] + 0x20, this[_0x4a8bc6(0x2ca)]['y'], 'vfx', 'WhiteDot.png')['setScale'](0x10, 0x28)['setAlpha'](0.00001), this[_0x4a8bc6(0xee1)] = this['add'][_0x4a8bc6(0x105b)](this['key1']['x'] + 0x40, this['key2']['y'], 'vfx', 'WhiteDot.png')[_0x4a8bc6(0x8a2)](0x10, 0x28)[_0x4a8bc6(0xdab)](0.00001), this['key9'] = this[_0x4a8bc6(0x18bd)][_0x4a8bc6(0x105b)](this[_0x4a8bc6(0x13c4)]['x'] + 0x58, this[_0x4a8bc6(0x2ca)]['y'], 'vfx', 'WhiteDot.png')[_0x4a8bc6(0x8a2)](0x10, 0x28)[_0x4a8bc6(0xdab)](0.00001), this[_0x4a8bc6(0x4be)] = this['add'][_0x4a8bc6(0x105b)](this[_0x4a8bc6(0x13c4)]['x'] + 0x70, this['key2']['y'], 'vfx', 'WhiteDot.png')['setScale'](0x10, 0x28)['setAlpha'](0.00001), this['keys'] = [this[_0x4a8bc6(0x13c4)], this[_0x4a8bc6(0x2ca)], this['key3'], this[_0x4a8bc6(0x1903)], this['key5'], this[_0x4a8bc6(0x13b9)], this['key7'], this[_0x4a8bc6(0xeba)], this['key9'], this[_0x4a8bc6(0x5b5)], this[_0x4a8bc6(0x4be)], this[_0x4a8bc6(0x2f3)]], this[_0x4a8bc6(0xb42)] = this['add']['sprite'](this[_0x4a8bc6(0x2ca)]['x'], this[_0x4a8bc6(0x2ca)]['y'], 'vfx', 'ProjectileBird4.png'), this['ebony']['anims'][_0x4a8bc6(0x6a8)]({
                            'key': 'idle',
                            'frames': this['GetSpriteNames'](this[_0x4a8bc6(0xb42)], 0x4, 0x5),
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this[_0x4a8bc6(0xb42)][_0x4a8bc6(0x183e)][_0x4a8bc6(0x902)]('idle'), this[_0x4a8bc6(0xb42)][_0x4a8bc6(0x8a2)](0x2), this['ebony'][_0x4a8bc6(0xdab)](0x0), this[_0x4a8bc6(0xd9a)] = this['add']['sprite'](this['key2']['x'], this['key2']['y'], 'vfx', 'ProjectileBird2.png'), this['peachone'][_0x4a8bc6(0x183e)]['create']({
                            'key': 'idle',
                            'frames': this['GetSpriteNames'](this[_0x4a8bc6(0xd9a)], 0x1, 0x2),
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this['peachone'][_0x4a8bc6(0x183e)][_0x4a8bc6(0x902)]('idle'), this[_0x4a8bc6(0xd9a)][_0x4a8bc6(0x8a2)](0x2), this[_0x4a8bc6(0xd9a)]['setAlpha'](0x0);
                        for (let _0x4a9989 = 0x0; _0x4a9989 < _0x49dd5f[_0x4a8bc6(0xd2c)][_0x4a8bc6(0x1043)][_0x4a8bc6(0x506)][_0x4a8bc6(0xed9)]; _0x4a9989++) _0x49dd5f['default'][_0x4a8bc6(0x1043)][_0x4a8bc6(0x506)][_0x4a9989]['bulletType'] === _0x11bb53['default']['SILF'] && (this[_0x4a8bc6(0x458)] = !0x0), _0x49dd5f[_0x4a8bc6(0xd2c)]['Core'][_0x4a8bc6(0x506)][_0x4a9989][_0x4a8bc6(0x14e)] === _0x11bb53[_0x4a8bc6(0xd2c)][_0x4a8bc6(0x77f)] && (this[_0x4a8bc6(0x7f1)] = !0x0);
                        for (let _0x4cf945 = 0x0; _0x4cf945 < _0x49dd5f['default']['Core']['HiddenWeapons'][_0x4a8bc6(0xed9)]; _0x4cf945++) _0x49dd5f[_0x4a8bc6(0xd2c)][_0x4a8bc6(0x1043)][_0x4a8bc6(0x164d)][_0x4cf945][_0x4a8bc6(0x14e)] === _0x11bb53[_0x4a8bc6(0xd2c)]['SILF'] && (this[_0x4a8bc6(0x458)] = !0x0), _0x49dd5f['default']['Core'][_0x4a8bc6(0x164d)][_0x4cf945][_0x4a8bc6(0x14e)] === _0x11bb53[_0x4a8bc6(0xd2c)][_0x4a8bc6(0x77f)] && (this['hasEbony'] = !0x0);
                    } ['GetSpriteNames'](_0x420880, _0x458ae8, _0x59d02e) {
                        const _0x53884c = _0x33dded;
                        return _0x420880[_0x53884c(0x183e)][_0x53884c(0x1756)]('vfx', {
                            'start': _0x458ae8,
                            'end': _0x59d02e,
                            'zeroPad': 0x0,
                            'prefix': 'ProjectileBird',
                            'suffix': '.png'
                        });
                    } ['update'](_0x3974f8) {} ['EnableInput']() {
                        const _0x5215c9 = _0x33dded;
                        this[_0x5215c9(0x1775)][_0x5215c9(0x76d)](), this[_0x5215c9(0x1775)]['on']('pointerdown', () => {
                            const _0x3a2e1c = _0x5215c9;
                            _0x49dd5f[_0x3a2e1c(0xd2c)][_0x3a2e1c(0x1267)]['PlaySound'](_0x445135[_0x3a2e1c(0xd2c)][_0x3a2e1c(0x1b0f)]), this[_0x3a2e1c(0xf11)]();
                        });
                        for (let _0x21ec97 = 0x0; _0x21ec97 < this[_0x5215c9(0x204)][_0x5215c9(0xed9)]; _0x21ec97++) this[_0x5215c9(0x204)][_0x21ec97]['setInteractive'](), this['keys'][_0x21ec97]['on']('pointerdown', () => {
                            const _0x2a6429 = _0x5215c9;
                            this[_0x2a6429(0xcf0)](_0x21ec97);
                        });
                        this[_0x5215c9(0xadb)](), this[_0x5215c9(0x4ff)]();
                    } ['flyInNext']() {
                        const _0x977ae2 = _0x33dded;
                        let _0x27f6d3 = this[_0x977ae2(0xa1e)][this[_0x977ae2(0x1867)]];
                        0x1 == _0x27f6d3 || 0x3 == _0x27f6d3 || 0x6 == _0x27f6d3 || 0x8 == _0x27f6d3 || 0xa == _0x27f6d3 ? this['flyInEbony'](_0x27f6d3) : this['flyInPeachone'](_0x27f6d3), this[_0x977ae2(0x1867)] += 0x1, this[_0x977ae2(0x1867)] == this[_0x977ae2(0xa1e)][_0x977ae2(0xed9)] && (this['hintCounter'] = 0x0), this[_0x977ae2(0x915)][_0x977ae2(0x12b8)]({
                            'delay': 0xfa0 + 0x7d0 * Math['random'](),
                            'callback': () => {
                                this['flyInNext']();
                            }
                        });
                    } ['flyInEbony'](_0x4c4df9) {
                        const _0x402964 = _0x33dded;
                        this['ebonyXTween'] && this[_0x402964(0xc79)]['stop'](), this['ebonyYTween'] && this[_0x402964(0xd5d)][_0x402964(0x1a34)](), this[_0x402964(0x1415)] && this[_0x402964(0x1415)][_0x402964(0x1a34)](), this['ebony'][_0x402964(0x183e)][_0x402964(0x902)]('idle'), this[_0x402964(0xb42)][_0x402964(0xdab)](0x0), Math['random']() < 0.5 ? (this['ebony']['x'] = _0x49dd5f[_0x402964(0x1e0)]['right'], this['ebony'][_0x402964(0xb8d)](!0x0)) : (this[_0x402964(0xb42)]['x'] = 0x0, this['ebony'][_0x402964(0xb8d)](!0x1)), this[_0x402964(0xb42)]['y'] = 0x64 + 0x64 * Math[_0x402964(0x9ad)](), this['ebonyAlphaTween'] = this[_0x402964(0x18bd)]['tween']({
                            'targets': this['ebony'],
                            'alpha': this[_0x402964(0x7f1)] ? 0x1 : 0x0,
                            'duration': 0x1f4
                        }), this[_0x402964(0xc79)] = this[_0x402964(0x18bd)][_0x402964(0x99a)]({
                            'targets': this['ebony'],
                            'x': this[_0x402964(0x204)][_0x4c4df9]['x'],
                            'duration': this[_0x402964(0x11b4)],
                            'ease': 'Linear'
                        }), this[_0x402964(0xd5d)] = this['add']['tween']({
                            'targets': this[_0x402964(0xb42)],
                            'y': this[_0x402964(0x204)][_0x4c4df9]['y'],
                            'duration': this[_0x402964(0x11b4)],
                            'ease': 'Sine.easeOut',
                            'onComplete': this['flyOutEbony']['bind'](this)
                        });
                    } ['flyOutEbony']() {
                        const _0x2600ed = _0x33dded;
                        this[_0x2600ed(0x1415)] = this[_0x2600ed(0x18bd)]['tween']({
                            'targets': this['ebony'],
                            'alpha': 0x0,
                            'delay': 0x1f4,
                            'duration': 0x1f4
                        });
                    } ['flyInPeachone'](_0x665193) {
                        const _0x1402a8 = _0x33dded;
                        this[_0x1402a8(0x862)] && this['peachoneXTween'][_0x1402a8(0x1a34)](), this[_0x1402a8(0x397)] && this[_0x1402a8(0x397)][_0x1402a8(0x1a34)](), this[_0x1402a8(0x760)] && this[_0x1402a8(0x760)]['stop'](), this[_0x1402a8(0xd9a)][_0x1402a8(0x183e)][_0x1402a8(0x902)]('idle'), this['peachone']['setAlpha'](0x0), Math[_0x1402a8(0x9ad)]() < 0.5 ? (this[_0x1402a8(0xd9a)]['x'] = _0x49dd5f['SAFEAREA'][_0x1402a8(0x15d9)], this[_0x1402a8(0xd9a)]['setFlipX'](!0x0)) : (this[_0x1402a8(0xd9a)]['x'] = 0x0, this[_0x1402a8(0xd9a)][_0x1402a8(0xb8d)](!0x1)), this['peachone']['y'] = 0x64 + 0x64 * Math['random'](), this['peachoneAlphaTween'] = this['add'][_0x1402a8(0x99a)]({
                            'targets': this[_0x1402a8(0xd9a)],
                            'alpha': this[_0x1402a8(0x458)] ? 0x1 : 0x0,
                            'duration': 0x1f4
                        }), this[_0x1402a8(0x862)] = this['add']['tween']({
                            'targets': this[_0x1402a8(0xd9a)],
                            'x': this[_0x1402a8(0x204)][_0x665193]['x'],
                            'duration': this[_0x1402a8(0x11b4)],
                            'ease': 'Linear'
                        }), this['peachoneYTween'] = this[_0x1402a8(0x18bd)]['tween']({
                            'targets': this['peachone'],
                            'y': this[_0x1402a8(0x204)][_0x665193]['y'] + 0x14,
                            'duration': this['birdSpeedMS'],
                            'ease': 'Sine.easeOut',
                            'onComplete': this['flyOutPeachone'][_0x1402a8(0xf7e)](this)
                        });
                    } ['flyOutPeachone']() {
                        const _0x4da64c = _0x33dded;
                        this[_0x4da64c(0x760)] = this[_0x4da64c(0x18bd)][_0x4da64c(0x99a)]({
                            'targets': this['peachone'],
                            'alpha': 0x0,
                            'delay': 0x1f4,
                            'duration': 0x1f4
                        });
                    } ['pushKey'](_0x4756cb) {
                        const _0x36128e = _0x33dded;
                        switch (_0x4756cb) {
                            case 0x0:
                            case 0x3:
                            case 0x4:
                            case 0x5:
                            case 0x6:
                            case 0x8:
                            case 0xb:
                            case 0xc:
                                _0x49dd5f['default'][_0x36128e(0x1267)][_0x36128e(0x7f6)](_0x445135[_0x36128e(0xd2c)]['KeyWrong'], {
                                    'volume': 1.5
                                });
                                break;
                            case 0x1:
                                _0x49dd5f[_0x36128e(0xd2c)][_0x36128e(0x1267)]['PlaySound'](_0x445135['default'][_0x36128e(0x19ca)], {
                                    'volume': 1.5
                                });
                                break;
                            case 0x2:
                                _0x49dd5f[_0x36128e(0xd2c)][_0x36128e(0x1267)]['PlaySound'](_0x445135[_0x36128e(0xd2c)]['Key1'], {
                                    'volume': 1.5
                                });
                                break;
                            case 0x7:
                                _0x49dd5f['default']['Sound']['PlaySound'](_0x445135[_0x36128e(0xd2c)][_0x36128e(0x1311)], {
                                    'volume': 1.5
                                });
                                break;
                            case 0x9:
                                _0x49dd5f['default'][_0x36128e(0x1267)][_0x36128e(0x7f6)](_0x445135[_0x36128e(0xd2c)][_0x36128e(0x1983)], {
                                    'volume': 1.5
                                });
                                break;
                            case 0xa:
                                _0x49dd5f['default'][_0x36128e(0x1267)]['PlaySound'](_0x445135[_0x36128e(0xd2c)]['Key3'], {
                                    'volume': 1.5
                                });
                        }
                        this[_0x36128e(0xa1e)][this[_0x36128e(0x213)]['length']] == _0x4756cb ? this['keysPushed'][_0x36128e(0x1564)](_0x4756cb) : this[_0x36128e(0x213)] = [], this['keysPushed']['length'] == this['keysToPush'][_0x36128e(0xed9)] && this['ExitSuccessfully']();
                    } ['Exit']() {
                        const _0x1a21a4 = _0x33dded;
                        this['ebonyXTween'] && this[_0x1a21a4(0xc79)][_0x1a21a4(0x1a34)](), this[_0x1a21a4(0xd5d)] && this['ebonyYTween']['stop'](), this['ebonyAlphaTween'] && this[_0x1a21a4(0x1415)]['stop'](), this[_0x1a21a4(0x862)] && this[_0x1a21a4(0x862)][_0x1a21a4(0x1a34)](), this['peachoneYTween'] && this[_0x1a21a4(0x397)][_0x1a21a4(0x1a34)](), this['peachoneAlphaTween'] && this[_0x1a21a4(0x760)]['stop'](), this['peachoneAlphaTween'] = this[_0x1a21a4(0x18bd)][_0x1a21a4(0x99a)]({
                            'targets': [this['ebony'], this[_0x1a21a4(0xd9a)]],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        }), this[_0x1a21a4(0x12a1)]['add']({
                            'targets': [this['fader'], this[_0x1a21a4(0x729)]],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        }), this['tweens'][_0x1a21a4(0x18bd)]({
                            'targets': [this[_0x1a21a4(0xab8)], this['pianoOverlay']],
                            'scale': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x5543a6 = _0x1a21a4;
                                _0x49dd5f['default'][_0x5543a6(0x1043)]['SceneManager']['ExitPianoScene']();
                            }
                        });
                    } ['GoBack']() {
                        const _0x17e71a = _0x33dded;
                        this[_0x17e71a(0x12a1)][_0x17e71a(0x18bd)]({
                            'targets': [this[_0x17e71a(0x6a2)], this[_0x17e71a(0x729)]],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        }), this[_0x17e71a(0x12a1)][_0x17e71a(0x18bd)]({
                            'targets': [this[_0x17e71a(0xab8)], this[_0x17e71a(0x729)]],
                            'scale': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x8d3251 = _0x17e71a;
                                _0x49dd5f['default']['Core'][_0x8d3251(0x69e)][_0x8d3251(0x286)]();
                            }
                        });
                    } ['ExitSuccessfully']() {
                        const _0x2e1dff = _0x33dded;
                        this[_0x2e1dff(0xc79)] && this[_0x2e1dff(0xc79)]['stop'](), this['ebonyYTween'] && this[_0x2e1dff(0xd5d)][_0x2e1dff(0x1a34)](), this['ebonyAlphaTween'] && this[_0x2e1dff(0x1415)][_0x2e1dff(0x1a34)](), this['peachoneXTween'] && this[_0x2e1dff(0x862)][_0x2e1dff(0x1a34)](), this[_0x2e1dff(0x397)] && this[_0x2e1dff(0x397)][_0x2e1dff(0x1a34)](), this[_0x2e1dff(0x760)] && this[_0x2e1dff(0x760)]['stop'](), this[_0x2e1dff(0x760)] = this[_0x2e1dff(0x18bd)][_0x2e1dff(0x99a)]({
                            'targets': [this[_0x2e1dff(0xb42)], this[_0x2e1dff(0xd9a)]],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        }), this[_0x2e1dff(0x12a1)]['add']({
                            'targets': [this['fader'], this['pianoOverlay']],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        }), this[_0x2e1dff(0x12a1)][_0x2e1dff(0x18bd)]({
                            'targets': [this[_0x2e1dff(0xab8)], this['pianoOverlay']],
                            'scale': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x407b75 = _0x2e1dff;
                                this['DoTheBigSpoop'](), _0x49dd5f[_0x407b75(0xd2c)][_0x407b75(0x1043)]['SceneManager'][_0x407b75(0x286)]();
                            }
                        });
                    } ['DoTheBigSpoop']() {
                        const _0x78961 = _0x33dded;
                        if (_0x49dd5f[_0x78961(0xd2c)][_0x78961(0x1043)][_0x78961(0x17c7)]) {
                            let _0x2d0f96 = _0x49dd5f[_0x78961(0xd2c)]['Core']['Stage']['fancyBG'];
                            _0x2d0f96 && _0x2d0f96[_0x78961(0x15ea)] && _0x2d0f96[_0x78961(0x15ea)]();
                        }
                    } ['MakeUIGrid']() {
                        const _0x1b9ac6 = _0x33dded;
                        let _0x3c0e57 = _0x49dd5f[_0x1b9ac6(0xd2c)][_0x1b9ac6(0x1043)]['SceneManager'][_0x1b9ac6(0x7ec)];
                        _0x3c0e57[_0x1b9ac6(0x4ff)](this[_0x1b9ac6(0x204)]['length'], 0x2, !0x0);
                        for (let _0x58d9cb = 0x0; _0x58d9cb < this[_0x1b9ac6(0x204)]['length']; _0x58d9cb++) _0x3c0e57[_0x1b9ac6(0x8cc)][_0x1b9ac6(0x16a8)](_0x58d9cb, 0x0, this[_0x1b9ac6(0x1775)]), _0x3c0e57['UI_grid'][_0x1b9ac6(0x16a8)](_0x58d9cb, 0x1, this[_0x1b9ac6(0x204)][_0x58d9cb]);
                        _0x3c0e57[_0x1b9ac6(0x8cc)][_0x1b9ac6(0xb55)](this[_0x1b9ac6(0x1775)]), _0x3c0e57[_0x1b9ac6(0x938)] = this[_0x1b9ac6(0x1775)], _0x3c0e57[_0x1b9ac6(0x1475)](!0x0), _0x3c0e57[_0x1b9ac6(0x1ad4)] = () => {
                            const _0x565b81 = _0x1b9ac6;
                            this[_0x565b81(0xf11)]();
                        };
                    }
                }
                _0x4be6d4['default'] = _0x53d692;
            };
