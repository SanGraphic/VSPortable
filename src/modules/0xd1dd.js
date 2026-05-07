// Module 0xd1dd
// Args: _0x4ddc05, _0x4aff26, _0xa37aed

export default (_0x4ddc05, _0x4aff26, _0xa37aed) => {
                'use strict';
                const _0x140e7c = a0_0x6932;
                var _0x21bc81 = this && this['__createBinding'] || (Object['create'] ? function(_0x4573d9, _0x15cbde, _0x325ef0, _0x57f5fc) {
                        const _0x45d7d9 = _0x140e7c;
                        void 0x0 === _0x57f5fc && (_0x57f5fc = _0x325ef0);
                        var _0x4e2c57 = Object['getOwnPropertyDescriptor'](_0x15cbde, _0x325ef0);
                        _0x4e2c57 && !('get' in _0x4e2c57 ? !_0x15cbde[_0x45d7d9(0x16f1)] : _0x4e2c57[_0x45d7d9(0x11bf)] || _0x4e2c57[_0x45d7d9(0xf70)]) || (_0x4e2c57 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x15cbde[_0x325ef0];
                            }
                        }), Object[_0x45d7d9(0x811)](_0x4573d9, _0x57f5fc, _0x4e2c57);
                    } : function(_0x2d5383, _0x58a686, _0x4969ce, _0x1a5da9) {
                        void 0x0 === _0x1a5da9 && (_0x1a5da9 = _0x4969ce), _0x2d5383[_0x1a5da9] = _0x58a686[_0x4969ce];
                    }),
                    _0x4efa07 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x4b7926, _0x1daf66) {
                        const _0x23bffb = _0x140e7c;
                        Object[_0x23bffb(0x811)](_0x4b7926, 'default', {
                            'enumerable': !0x0,
                            'value': _0x1daf66
                        });
                    } : function(_0x56d12e, _0x137464) {
                        const _0x3ec57b = _0x140e7c;
                        _0x56d12e[_0x3ec57b(0xd2c)] = _0x137464;
                    }),
                    _0x4c962d = this && this['__importStar'] || function(_0x3a2a79) {
                        const _0x2889c6 = _0x140e7c;
                        if (_0x3a2a79 && _0x3a2a79['__esModule']) return _0x3a2a79;
                        var _0x14d45e = {};
                        if (null != _0x3a2a79) {
                            for (var _0x5ad3ee in _0x3a2a79) 'default' !== _0x5ad3ee && Object[_0x2889c6(0x977)][_0x2889c6(0x2cf)][_0x2889c6(0xff0)](_0x3a2a79, _0x5ad3ee) && _0x21bc81(_0x14d45e, _0x3a2a79, _0x5ad3ee);
                        }
                        return _0x4efa07(_0x14d45e, _0x3a2a79), _0x14d45e;
                    },
                    _0x2f369f = this && this['__importDefault'] || function(_0x3fe58d) {
                        const _0x21a07b = _0x140e7c;
                        return _0x3fe58d && _0x3fe58d[_0x21a07b(0x16f1)] ? _0x3fe58d : {
                            'default': _0x3fe58d
                        };
                    };
                Object['defineProperty'](_0x4aff26, '__esModule', {
                    'value': !0x0
                });
                const _0x101320 = _0xa37aed(0x18304),
                    _0x5f1128 = _0xa37aed(0x16c14),
                    _0x2be4f7 = _0x2f369f(_0xa37aed(0xccae)),
                    _0xcd2ca7 = _0x4c962d(_0xa37aed(0x5f07)),
                    _0x3a004f = _0x2f369f(_0xa37aed(0x169b4)),
                    _0x265f84 = _0x2f369f(_0xa37aed(0x1fd7)),
                    _0xb3a3f6 = _0x2f369f(_0xa37aed(0x5103)),
                    _0x488fde = _0x2f369f(_0xa37aed(0xc42e));
                class _0x48e0ce extends Phaser['Scene'] {
                    constructor() {
                        const _0x50256b = _0x140e7c;
                        super({
                            'key': _0x3a004f['default'][_0x50256b(0xbff)]
                        }), this[_0x50256b(0x842)] = new Phaser[(_0x50256b(0x24f))]['Vector2'](0x0, 0x0), this[_0x50256b(0x194d)] = !0x1, this['sceneFlag'] = 0x0;
                    } ['preload']() {
                        const _0x4ae015 = _0x140e7c;
                        _0xcd2ca7[_0x4ae015(0xd2c)][_0x4ae015(0x7c2)]();
                    } ['customAngle'](_0x348e1f, _0x27114e, _0xf6ebf5) {
                        return _0x348e1f['angle'] + 0x5;
                    } ['onEmitcustomAngle'](_0x59dfe0, _0x3cb78b, _0x2176ba) {
                        return 0x168 * Math['random']();
                    } ['MakeBackground']() {} ['create']() {
                        const _0x43550d = _0x140e7c;
                        this[_0x43550d(0x842)]['x'] = 0x0, this[_0x43550d(0x842)]['y'] = 0x0;
                        const _0x21dd7c = this['anims']['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this['OnEnterAnimation'] = this['add']['sprite'](0.5 * this[_0x43550d(0x12f9)][_0x43550d(0x173c)], 0.5 * this[_0x43550d(0x12f9)][_0x43550d(0x173c)], 'vfx', 'Burst1.png'), this['OnEnterAnimation'][_0x43550d(0x183e)]['create']({
                            'key': 'enter',
                            'frames': _0x21dd7c,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), this['OnEnterAnimation']['visible'] = !0x0, this[_0x43550d(0x15ca)][_0x43550d(0x8a2)](0x8), this[_0x43550d(0x15ca)][_0x43550d(0xb4a)](0x3e8), this['OnEnterAnimation'][_0x43550d(0xba4)] = _0x101320[_0x43550d(0x10fc)]['ADD'];
                        let _0x119709 = this[_0x43550d(0x12f9)][_0x43550d(0x173c)] / 0x7,
                            _0x147936 = [this[_0x43550d(0x18bd)]['image'](0x1 * _0x119709, -0x80, 'enemiesM', 'mask_sun_0.png')[_0x43550d(0xb34)](0x0)[_0x43550d(0x8a2)](-0.1, 0x4), this[_0x43550d(0x18bd)]['image'](0x2 * _0x119709, -0x80, 'enemiesM', 'mask_moon_0.png')[_0x43550d(0xb34)](0x0)[_0x43550d(0x8a2)](-0.1, 0x4), this[_0x43550d(0x18bd)]['image'](0x3 * _0x119709, -0x80, 'enemiesM', 'mask_city_0.png')[_0x43550d(0xb34)](0x0)[_0x43550d(0x8a2)](-0.1, 0x4), this[_0x43550d(0x18bd)]['image'](0x4 * _0x119709, -0x80, 'enemiesM', 'mask_seawind_0.png')['setTint'](0x0)[_0x43550d(0x8a2)](-0.1, 0x4), this[_0x43550d(0x18bd)]['image'](0x5 * _0x119709, -0x80, 'enemiesM', 'mask_volcano_0.png')['setTint'](0x0)[_0x43550d(0x8a2)](-0.1, 0x4), this[_0x43550d(0x18bd)]['image'](0x6 * _0x119709, -0x80, 'enemiesM', 'mask_stone_0.png')['setTint'](0x0)['setScale'](-0.1, 0x4)];
                        this[_0x43550d(0x12a1)][_0x43550d(0x18bd)]({
                            'targets': _0x147936,
                            'scale': 0x4,
                            'duration': 0x7d0,
                            'y': 0x110,
                            'ease': 'Sine.easeInOut'
                        }), this['PfxEmitter'] = this['add']['particles']('shop'), this[_0x43550d(0xbe8)] = this['PfxEmitter'][_0x43550d(0x14c0)]({
                            'frame': {
                                'frames': ['colours7.png', 'colours8.png']
                            },
                            'y': this[_0x43550d(0x12f9)][_0x43550d(0x140e)] + 0x150,
                            'x': {
                                'min': 0x0,
                                'max': this[_0x43550d(0x12f9)]['width']
                            },
                            'lifespan': 0x1388,
                            'speedY': {
                                'min': -0x64,
                                'max': -0x12c
                            },
                            'alpha': {
                                'start': 0.9,
                                'end': 0.8
                            },
                            'scaleY': {
                                'start': 0x1,
                                'end': 0x2
                            },
                            'quantity': 0x1
                        }), this[_0x43550d(0xd2d)] = this['PfxEmitter']['createEmitter']({
                            'frame': {
                                'frames': ['colours7.png', 'colours8.png']
                            },
                            'y': this[_0x43550d(0x12f9)][_0x43550d(0x140e)] + 0x150,
                            'x': {
                                'min': 0x0,
                                'max': this[_0x43550d(0x12f9)]['width']
                            },
                            'lifespan': 0x1388,
                            'speedY': {
                                'min': -0x64,
                                'max': -0x12c
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scaleY': {
                                'start': 0x1,
                                'end': 0x2
                            },
                            'quantity': 0x1,
                            'frequency': 0x12c,
                            'blendMode': _0x101320[_0x43550d(0x10fc)][_0x43550d(0x1811)]
                        }), this['pfxFire1'][_0x43550d(0x381)]({
                            'frames': ['colours3.png', 'colours4.png']
                        }), this['pfxFire2'][_0x43550d(0x381)]({
                            'frames': ['colours3.png', 'colours4.png']
                        });
                        let _0x2a16d1 = [],
                            _0x20c981 = 0x1 + Math[_0x43550d(0xdeb)](this[_0x43550d(0x12f9)]['width'] / 0x80),
                            _0x19034c = 0x1 + Math['ceil'](this[_0x43550d(0x12f9)][_0x43550d(0x140e)] / 0x166);
                        for (let _0x4faa9b = 0x0; _0x4faa9b < _0x20c981; _0x4faa9b++)
                            for (let _0x43dd62 = 0x0; _0x43dd62 < _0x19034c; _0x43dd62++) {
                                let _0x4c804f = this['add'][_0x43550d(0x568)](0x80 * _0x4faa9b + 0x40 - 0x20, 0x166 * _0x43dd62 - 0xc, 'shop', 'window2.png')[_0x43550d(0xb34)](0x0)[_0x43550d(0x381)](Phaser['Math']['RND']['pick'](['window2.png', 'window4.png', 'window5.png']))[_0x43550d(0xb8d)](Math[_0x43550d(0x9ad)]() >= 0.5)[_0x43550d(0x293)](Math[_0x43550d(0x9ad)]() >= 0.5)['setAlpha'](0x0)[_0x43550d(0x8a2)](-0.1, 0x1);
                                _0x2a16d1['push'](_0x4c804f);
                            }
                        this['tweens'][_0x43550d(0x18bd)]({
                            'targets': _0x2a16d1,
                            'alpha': 0x1,
                            'duration': 0x3e8,
                            'scaleX': 0x1
                        });
                        var _0x5a08a9 = 0x2 * _0xcd2ca7[_0x43550d(0x1e0)][_0x43550d(0x173c)] * 0.8,
                            _0x3d70da = 0.8 * _0xcd2ca7[_0x43550d(0xd6b)];
                        this[_0x43550d(0x431)] = new _0x5f1128[(_0x43550d(0x1a31))](this, _0x2be4f7['default']['MenuBackground'], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': 1.1 * _0xcd2ca7[_0x43550d(0x1e0)][_0x43550d(0x173c)],
                            'height': 0x90
                        }), this['background']['setPosition'](0.5 * this[_0x43550d(0x12f9)][_0x43550d(0x173c)], this[_0x43550d(0x842)]['y'] + 0x80 + 0x10), this['background'][_0x43550d(0xf8e)](0.5), this[_0x43550d(0x431)]['setScale'](_0xb3a3f6[_0x43550d(0xd2c)]['PixelScale']), this[_0x43550d(0x431)]['setAlpha'](0x1), this['add'][_0x43550d(0x1a88)](this['background']), this['tweens']['add']({
                            'targets': this[_0x43550d(0x431)],
                            'alpha': 0.95,
                            'duration': 0x7d0,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this['TopLeft']['x'] = this[_0x43550d(0x431)]['x'] - 0.5 * this[_0x43550d(0x431)][_0x43550d(0x173c)] * _0xb3a3f6[_0x43550d(0xd2c)][_0x43550d(0x15db)], this['TopLeft']['y'] = this[_0x43550d(0x842)]['y'] + 0x80 - 0.5 * this['background'][_0x43550d(0x140e)] * _0xb3a3f6['default'][_0x43550d(0x15db)], this['buttonWidth'] = 0.45 * _0x5a08a9, this[_0x43550d(0xdb8)] = 0.2 * _0x3d70da, this['HasMirror'] = _0xcd2ca7['default'][_0x43550d(0x1043)]['PlayerOptions']['CollectedItems'][_0x43550d(0x1303)](_0x488fde[_0x43550d(0xd2c)][_0x43550d(0x13c8)]) > -0x1, this['HasTrumpet'] = _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1043)]['PlayerOptions'][_0x43550d(0x1481)][_0x43550d(0x1303)](_0x488fde['default'][_0x43550d(0x1ac)]) > -0x1, this['sceneFlag'] = 0x3, this[_0x43550d(0x168e)] = 'directer_1', this['HasMirror'] && this['HasTrumpet'] ? (this['langKey'] = 'directer_3', this['sceneFlag'] = 0x3) : this['HasMirror'] || this[_0x43550d(0xc07)] ? (this['langKey'] = 'directer_2', this[_0x43550d(0x79d)] = 0x2) : (this['langKey'] = 'directer_1', this[_0x43550d(0x79d)] = 0x1), this[_0x43550d(0x1752)] = new Phaser[(_0x43550d(0xbf2))]['Text'](this, this['background']['x'], this['background']['y'], _0xcd2ca7['default']['Lang'][_0x43550d(0xb10)](this[_0x43550d(0x168e)]), {})[_0x43550d(0x8a2)](0x2 * _0xb3a3f6[_0x43550d(0xd2c)][_0x43550d(0x15db)])[_0x43550d(0xf8e)](0.5)['setWordWrapWidth'](0xfa), _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1f1)]['scaleToMaxFast'](this[_0x43550d(0x1752)], !0x1, 0xfa, 0x5a), this[_0x43550d(0x18bd)][_0x43550d(0x1a88)](this['header']), this['Button_OK'] = new _0x5f1128['NineSlice'](this, _0x2be4f7['default'][_0x43550d(0x1608)], {
                            'x': this[_0x43550d(0x431)]['x'],
                            'y': this[_0x43550d(0x842)]['y'] + 4.5 * this[_0x43550d(0xdb8)] - 0.025 * _0x5a08a9,
                            'width': 0x60,
                            'height': 0x20
                        })[_0x43550d(0xf8e)](0.5)[_0x43550d(0x8a2)](0x0)[_0x43550d(0x9b5)](-0x5a)[_0x43550d(0x183f)](!0x1), this[_0x43550d(0x18bd)][_0x43550d(0x1a88)](this['Button_OK']), this['Text_OK'] = new Phaser[(_0x43550d(0xbf2))][(_0x43550d(0x1ae9))](this, this[_0x43550d(0x500)]['x'], this[_0x43550d(0x500)]['y'], _0xcd2ca7['default'][_0x43550d(0x1f1)]['getLang']('charFound_ok'), {})['setOrigin'](0.5, 0.5)['setScale'](0x0)['setAngle'](-0x5a)[_0x43550d(0x183f)](!0x1), _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1f1)]['scaleToMaxFast'](this[_0x43550d(0x1177)], !0x1, 0x50), this[_0x43550d(0x18bd)][_0x43550d(0x1a88)](this[_0x43550d(0x1177)]), this[_0x43550d(0x1b0)] = new _0x5f1128['NineSlice'](this, _0x2be4f7[_0x43550d(0xd2c)]['BackButton'], {
                            'x': this['Button_OK']['x'] - 0x90,
                            'y': this[_0x43550d(0x500)]['y'],
                            'width': 0x60,
                            'height': 0x20
                        })['setOrigin'](0.5)['setScale'](0x0)['setAngle'](-0x5a)['setVisible'](!0x1), this['add'][_0x43550d(0x1a88)](this['Button_EASY']), this[_0x43550d(0x112b)] = new Phaser['GameObjects']['Text'](this, this[_0x43550d(0x1b0)]['x'], this['Button_EASY']['y'], _0xcd2ca7[_0x43550d(0xd2c)]['Lang'][_0x43550d(0xb10)]('directer_easy'), {})['setOrigin'](0.5, 0.5)[_0x43550d(0x8a2)](0x0)['setAngle'](-0x5a)['setVisible'](!0x1), _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1f1)][_0x43550d(0x14a8)](this[_0x43550d(0x112b)], !0x1, 0x50), this[_0x43550d(0x18bd)][_0x43550d(0x1a88)](this['Text_EASY']), this[_0x43550d(0x5e4)] = new _0x5f1128['NineSlice'](this, _0x2be4f7[_0x43550d(0xd2c)][_0x43550d(0x146f)], {
                            'x': this['Button_OK']['x'] + 0x90,
                            'y': this['Button_OK']['y'],
                            'width': 0x60,
                            'height': 0x20
                        })['setOrigin'](0.5)[_0x43550d(0x8a2)](0x0)[_0x43550d(0x9b5)](-0x5a)['setVisible'](!0x1), this[_0x43550d(0x18bd)]['existing'](this[_0x43550d(0x5e4)]), this[_0x43550d(0x1014)] = new Phaser['GameObjects'][(_0x43550d(0x1ae9))](this, this[_0x43550d(0x5e4)]['x'], this['Button_HARD']['y'], _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1f1)][_0x43550d(0xb10)]('directer_hard'), {})[_0x43550d(0xf8e)](0.5, 0.5)['setScale'](0x0)['setAngle'](-0x5a)['setVisible'](!0x1), _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1f1)][_0x43550d(0x14a8)](this['Text_EASY'], !0x1, 0x50), this['add'][_0x43550d(0x1a88)](this[_0x43550d(0x1014)]), this[_0x43550d(0x431)][_0x43550d(0x8a2)](-0.2, -0.1), this['background'][_0x43550d(0x9b5)](0xb4), this[_0x43550d(0xd9b)] = this[_0x43550d(0x12a1)][_0x43550d(0x18bd)]({
                            'targets': this['background'],
                            'scale': _0xb3a3f6['default']['PixelScale'],
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1
                        }), this[_0x43550d(0x194d)] = !0x0, _0xcd2ca7[_0x43550d(0xd2c)][_0x43550d(0x1267)][_0x43550d(0x7f6)](_0x265f84[_0x43550d(0xd2c)][_0x43550d(0x2ab)], {
                            'volume': 0x1,
                            'detune': -0x4b0
                        }), _0xcd2ca7['default'][_0x43550d(0x1267)][_0x43550d(0x7f6)](_0x265f84[_0x43550d(0xd2c)][_0x43550d(0x2ab)], {
                            'volume': 0.5,
                            'detune': -0x5dc
                        }), this['ShowPanels'](), String[_0x43550d(0x977)][_0x43550d(0xeec)] = function() {
                            const _0x1207e8 = _0x43550d;
                            for (var _0xd1447d = this[_0x1207e8(0xabc)](''), _0x22bea4 = _0xd1447d['length'] - 0x1; _0x22bea4 > 0x0; _0x22bea4--) {
                                var _0x19ee08 = Math[_0x1207e8(0xe07)](Math[_0x1207e8(0x9ad)]() * (_0x22bea4 + 0x1)),
                                    _0x94d196 = _0xd1447d[_0x22bea4];
                                _0xd1447d[_0x22bea4] = _0xd1447d[_0x19ee08], _0xd1447d[_0x19ee08] = _0x94d196;
                            }
                            return _0xd1447d[_0x1207e8(0x136b)]('');
                        }, this['header'][_0x43550d(0x9c0)] = !0x0, this['ShuffleHeader'](), 0x1 === this[_0x43550d(0x79d)] || 0x2 === this['sceneFlag'] ? this['shuffleEvent'] = this[_0x43550d(0x915)][_0x43550d(0x12b8)]({
                            'delay': 0x190,
                            'callback': () => {
                                const _0xeddaf5 = _0x43550d;
                                0x1 == this[_0xeddaf5(0x1ae7)]['repeatCount'] ? this['header']['text'] = _0xcd2ca7[_0xeddaf5(0xd2c)][_0xeddaf5(0x1f1)]['getLang'](this['langKey']) : 0x0 == this[_0xeddaf5(0x1ae7)]['repeatCount'] ? this[_0xeddaf5(0x1752)][_0xeddaf5(0x9c0)] = !0x1 : this[_0xeddaf5(0x1266)]();
                            },
                            'repeat': 0x7
                        }) : 0x3 === this[_0x43550d(0x79d)] && (this[_0x43550d(0x1ae7)] = this['time']['addEvent']({
                            'delay': 0xc8,
                            'callback': () => {
                                const _0x8d8e9e = _0x43550d;
                                this['pfxFire1'][_0x8d8e9e(0x381)]({
                                    'frames': ['colours7.png', 'colours8.png']
                                }), this['pfxFire2'][_0x8d8e9e(0x381)]({
                                    'frames': ['colours7.png', 'colours8.png']
                                }), 0x1 == this[_0x8d8e9e(0x1ae7)][_0x8d8e9e(0x11cf)] ? this[_0x8d8e9e(0x1752)][_0x8d8e9e(0x758)] = _0xcd2ca7[_0x8d8e9e(0xd2c)][_0x8d8e9e(0x1f1)][_0x8d8e9e(0xb10)](this[_0x8d8e9e(0x168e)]) : (this[_0x8d8e9e(0x1266)](), _0xcd2ca7[_0x8d8e9e(0xd2c)][_0x8d8e9e(0x1f1)][_0x8d8e9e(0x14a8)](this[_0x8d8e9e(0x1752)], !0x1, 0xfa, 0x46));
                            },
                            'repeat': -0x1
                        }));
                    } ['ShuffleHeader']() {
                        const _0x4aeb1f = _0x140e7c;
                        this[_0x4aeb1f(0x1752)][_0x4aeb1f(0x758)] = this[_0x4aeb1f(0x1752)][_0x4aeb1f(0x758)][_0x4aeb1f(0xeec)]();
                    } ['ShuffleText'](_0x48ffdf) {
                        const _0x3d52fe = _0x140e7c;
                        _0x48ffdf['text'] = _0x48ffdf[_0x3d52fe(0x758)][_0x3d52fe(0xeec)]();
                    } ['MakeUIGrid']() {
                        const _0x4580cc = _0x140e7c;
                        let _0x5acf6f = _0xcd2ca7[_0x4580cc(0xd2c)]['Core'][_0x4580cc(0x69e)]['UI_overlayScene'],
                            _0x3c66d9 = 0x1;
                        0x1 === this['sceneFlag'] && (_0x3c66d9 = 0x2), _0x5acf6f[_0x4580cc(0x4ff)](_0x3c66d9, 0x1, !0x0), _0x5acf6f['ToggleCursorsVisibility'](!0x0), 0x1 === this['sceneFlag'] ? (_0x5acf6f[_0x4580cc(0x8cc)][_0x4580cc(0x16a8)](0x0, 0x0, this[_0x4580cc(0x1b0)]), _0x5acf6f['UI_grid'][_0x4580cc(0x16a8)](0x1, 0x0, this['Button_HARD']), _0x5acf6f[_0x4580cc(0x8cc)][_0x4580cc(0xb55)](this['Button_HARD']), _0x5acf6f[_0x4580cc(0x938)] = this['Button_HARD']) : (_0x5acf6f[_0x4580cc(0x8cc)]['SetContents'](0x0, 0x0, this[_0x4580cc(0x500)]), _0x5acf6f[_0x4580cc(0x8cc)][_0x4580cc(0xb55)](this['Button_OK']), _0x5acf6f['UI_selected'] = this[_0x4580cc(0x500)]), _0xcd2ca7[_0x4580cc(0xd2c)]['Core']['SceneManager']['scene']['bringToTop'](_0x5acf6f), _0x5acf6f['OnCancelCallback'] = () => {};
                    } ['OnButtonClicked']() {
                        const _0x4106e6 = _0x140e7c;
                        if (this[_0x4106e6(0x1a7e)](), _0xcd2ca7[_0x4106e6(0xd2c)][_0x4106e6(0x1043)]['PlayerOptions'][_0x4106e6(0x3ab)](), _0xcd2ca7[_0x4106e6(0xd2c)][_0x4106e6(0x1267)]['PlaySound'](_0x265f84[_0x4106e6(0xd2c)]['ClickIn']), 0x1 === this[_0x4106e6(0x79d)]);
                        else {
                            if (0x2 === this[_0x4106e6(0x79d)]) return _0xcd2ca7[_0x4106e6(0xd2c)][_0x4106e6(0x1043)]['CurrentFoundRelic'] = _0x488fde['default'][_0x4106e6(0x1ac)], _0xcd2ca7[_0x4106e6(0xd2c)][_0x4106e6(0x1043)]['JustGotTrumpet'] = !0x0, _0xcd2ca7[_0x4106e6(0xd2c)]['Core'][_0x4106e6(0x14d8)]['CollectedItems'][_0x4106e6(0x1303)](_0x488fde['default'][_0x4106e6(0x1ac)]) > -0x1 && (_0xcd2ca7['default'][_0x4106e6(0x1043)][_0x4106e6(0x5cc)] = _0x488fde['default'][_0x4106e6(0x13c8)], _0xcd2ca7['default'][_0x4106e6(0x1043)][_0x4106e6(0xc73)] = !0x0, _0xcd2ca7[_0x4106e6(0xd2c)]['Core'][_0x4106e6(0x134d)] = !0x1), this['background'][_0x4106e6(0x183f)](!0x1), this[_0x4106e6(0x1752)]['setVisible'](!0x1), _0xcd2ca7[_0x4106e6(0xd2c)][_0x4106e6(0x1043)]['SceneManager'][_0x4106e6(0x687)](), void _0xcd2ca7[_0x4106e6(0xd2c)]['Core']['SceneManager']['EnterRelicFound']();
                            if (0x3 === this[_0x4106e6(0x79d)]) this[_0x4106e6(0x79d)] = 0x4, this[_0x4106e6(0x915)][_0x4106e6(0x17fb)](this[_0x4106e6(0x1ae7)]), this['langKey'] = 'directer_4', this[_0x4106e6(0x1752)]['text'] = _0xcd2ca7['default'][_0x4106e6(0x1f1)]['getLang'](this[_0x4106e6(0x168e)]), this['hideButtons'](), _0xcd2ca7[_0x4106e6(0xd2c)]['Core'][_0x4106e6(0x69e)][_0x4106e6(0x7ec)][_0x4106e6(0x110c)](), this[_0x4106e6(0x1ae7)] = this['time']['addEvent']({
                                'delay': 0xc8,
                                'callback': () => {
                                    const _0x408456 = _0x4106e6;
                                    0x1 == this[_0x408456(0x1ae7)][_0x408456(0x11cf)] ? (_0xcd2ca7[_0x408456(0xd2c)][_0x408456(0x1267)]['FadeMusic'](_0xcd2ca7['default'][_0x408456(0x1043)]['CurrentBGM'], 0x0, 0x190), this['header'][_0x408456(0x758)] = _0xcd2ca7[_0x408456(0xd2c)][_0x408456(0x1f1)]['getLang'](this['langKey']), _0xcd2ca7[_0x408456(0xd2c)]['Lang'][_0x408456(0x14a8)](this['header'], !0x1, 0xfa, 0x46)) : 0x0 == this['shuffleEvent'][_0x408456(0x11cf)] ? (this['header'][_0x408456(0x9c0)] = !0x1, this[_0x408456(0x4ff)](), this[_0x408456(0x9fe)]()) : (this['ShuffleHeader'](), _0xcd2ca7[_0x408456(0xd2c)][_0x408456(0x1f1)][_0x408456(0x14a8)](this['header'], !0x1, 0xfa, 0x46));
                                },
                                'repeat': 0x7
                            });
                            else {
                                if (0x4 === this[_0x4106e6(0x79d)]) {
                                    _0xcd2ca7['default']['Core'][_0x4106e6(0x69e)][_0x4106e6(0x687)]();
                                    let _0x283763 = _0xcd2ca7[_0x4106e6(0xd2c)][_0x4106e6(0x1043)][_0x4106e6(0x17c7)][_0x4106e6(0x12ed)];
                                    _0x283763 && _0x283763['DirecterManager'] && _0x283763['DirecterManager']['StartPhase0']();
                                }
                            }
                        }
                    } ['OnTooHardPressed']() {
                        const _0x2232d5 = _0x140e7c;
                        _0xcd2ca7[_0x2232d5(0xd2c)]['Core'][_0x2232d5(0x134d)] = !0x0, _0xcd2ca7[_0x2232d5(0xd2c)][_0x2232d5(0x1043)]['PlayerOptions'][_0x2232d5(0x3ab)](), _0xcd2ca7['default'][_0x2232d5(0x1267)]['PlaySound'](_0x265f84[_0x2232d5(0xd2c)]['ClickIn']), _0xcd2ca7[_0x2232d5(0xd2c)][_0x2232d5(0x1043)][_0x2232d5(0x5cc)] = _0x488fde['default']['RELIC_TRUMPET'], this['background'][_0x2232d5(0x183f)](!0x1), this[_0x2232d5(0x1752)]['setVisible'](!0x1), _0xcd2ca7['default'][_0x2232d5(0x1043)][_0x2232d5(0x69e)][_0x2232d5(0x687)](), _0xcd2ca7[_0x2232d5(0xd2c)][_0x2232d5(0x1043)]['SceneManager']['EnterRelicFound']();
                    } ['OnTooEasyPressed']() {
                        const _0x19106e = _0x140e7c;
                        _0xcd2ca7[_0x19106e(0xd2c)][_0x19106e(0x1043)]['JustGotMirror'] = !0x0, _0xcd2ca7['default'][_0x19106e(0x1043)][_0x19106e(0x14d8)][_0x19106e(0x3ab)](), _0xcd2ca7[_0x19106e(0xd2c)][_0x19106e(0x1267)]['PlaySound'](_0x265f84[_0x19106e(0xd2c)][_0x19106e(0x2b6)]), _0xcd2ca7[_0x19106e(0xd2c)][_0x19106e(0x1043)][_0x19106e(0x5cc)] = _0x488fde[_0x19106e(0xd2c)][_0x19106e(0x13c8)], this[_0x19106e(0x431)][_0x19106e(0x183f)](!0x1), this['header'][_0x19106e(0x183f)](!0x1), _0xcd2ca7[_0x19106e(0xd2c)][_0x19106e(0x1043)][_0x19106e(0x69e)][_0x19106e(0x687)](), _0xcd2ca7[_0x19106e(0xd2c)][_0x19106e(0x1043)]['SceneManager'][_0x19106e(0x131b)]();
                    } ['ShowPanels']() {
                        const _0x349997 = _0x140e7c;
                        _0xcd2ca7[_0x349997(0xd2c)]['Core'][_0x349997(0x14d8)][_0x349997(0x49c)] ? this['OnEnterAnimation'][_0x349997(0x902)]('enter') : this['OnEnterAnimation']['setVisible'](!0x1), this[_0x349997(0xd9b)]['restart'](), this['time'][_0x349997(0x12b8)]({
                            'delay': 0xbb8,
                            'callback': this['enablePanelsInput'],
                            'callbackScope': this,
                            'loop': !0x1
                        });
                    } ['enablePanelsInput']() {
                        const _0x13fb7e = _0x140e7c;
                        0x1 === this[_0x13fb7e(0x79d)] ? (this[_0x13fb7e(0x112b)][_0x13fb7e(0x183f)](!0x0), this['Button_EASY'][_0x13fb7e(0x183f)](!0x0), this['Text_HARD']['setVisible'](!0x0), this['Button_HARD']['setVisible'](!0x0)) : (this[_0x13fb7e(0x1177)]['setVisible'](!0x0), this[_0x13fb7e(0x500)][_0x13fb7e(0x183f)](!0x0)), this[_0x13fb7e(0x12a1)][_0x13fb7e(0x18bd)]({
                            'targets': [this['Button_OK'], this[_0x13fb7e(0x1177)], this[_0x13fb7e(0x1b0)], this[_0x13fb7e(0x5e4)], this[_0x13fb7e(0x1014)], this['Text_EASY']],
                            'scale': 0x2 * _0xb3a3f6[_0x13fb7e(0xd2c)]['PixelScale'],
                            'angle': 0x0,
                            'duration': 0x96,
                            'ease': 'Linear',
                            'yoyo': !0x1,
                            'onComplete': () => {
                                const _0x177e3b = _0x13fb7e;
                                this['MakeUIGrid'](), 0x2 === this[_0x177e3b(0x79d)] || 0x3 === this['sceneFlag'] || 0x4 === this['sceneFlag'] ? (this[_0x177e3b(0x500)]['setInteractive'](), this['Button_OK'][_0x177e3b(0x3c7)]('pointerdown', () => this[_0x177e3b(0x1636)]())) : 0x1 === this['sceneFlag'] && (this['Button_EASY']['setInteractive'](), this[_0x177e3b(0x1b0)][_0x177e3b(0x3c7)]('pointerdown', () => this['OnTooEasyPressed']()), this[_0x177e3b(0x5e4)]['setInteractive'](), this[_0x177e3b(0x5e4)][_0x177e3b(0x3c7)]('pointerdown', () => this['OnTooHardPressed']()));
                            }
                        });
                    } ['disablePanelsInput']() {
                        const _0x5c948f = _0x140e7c;
                        this[_0x5c948f(0x500)]['removeAllListeners'](), this[_0x5c948f(0x5e4)][_0x5c948f(0x596)](), this[_0x5c948f(0x1b0)][_0x5c948f(0x596)](), this[_0x5c948f(0x500)][_0x5c948f(0xbc7)](), this[_0x5c948f(0x5e4)]['disableInteractive'](), this['Button_EASY']['disableInteractive']();
                    } ['hideButtons']() {
                        const _0x29bc0d = _0x140e7c;
                        this[_0x29bc0d(0x12a1)]['add']({
                            'targets': [this['Button_OK'], this['Text_OK'], this['Button_EASY'], this['Button_HARD'], this[_0x29bc0d(0x1014)], this['Text_EASY']],
                            'scale': 0x0,
                            'angle': -0x2d,
                            'duration': 0x96,
                            'ease': 'Linear'
                        });
                    } ['update']() {}
                }
                _0x4aff26['default'] = _0x48e0ce;
            };
