// Module 0xaefd
// Args: _0x3d91b6, _0xd3e0d0, _0xeed3e

export default (_0x3d91b6, _0xd3e0d0, _0xeed3e) => {
                'use strict';
                const _0x2d6781 = a0_0x6932;
                var _0x30e4a8 = this && this['__createBinding'] || (Object['create'] ? function(_0x42ec97, _0xccc623, _0x10b649, _0x4b36b8) {
                        const _0xf5f5b0 = _0x2d6781;
                        void 0x0 === _0x4b36b8 && (_0x4b36b8 = _0x10b649);
                        var _0x23946d = Object[_0xf5f5b0(0x1687)](_0xccc623, _0x10b649);
                        _0x23946d && !('get' in _0x23946d ? !_0xccc623[_0xf5f5b0(0x16f1)] : _0x23946d['writable'] || _0x23946d['configurable']) || (_0x23946d = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0xccc623[_0x10b649];
                            }
                        }), Object['defineProperty'](_0x42ec97, _0x4b36b8, _0x23946d);
                    } : function(_0x37c1cf, _0x11a4e1, _0x36bb59, _0x465a2c) {
                        void 0x0 === _0x465a2c && (_0x465a2c = _0x36bb59), _0x37c1cf[_0x465a2c] = _0x11a4e1[_0x36bb59];
                    }),
                    _0x301cf8 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x7081c7, _0x8fb1ea) {
                        const _0x4dc2c2 = _0x2d6781;
                        Object[_0x4dc2c2(0x811)](_0x7081c7, 'default', {
                            'enumerable': !0x0,
                            'value': _0x8fb1ea
                        });
                    } : function(_0x3b3d1b, _0x20bc4b) {
                        const _0x598d39 = _0x2d6781;
                        _0x3b3d1b[_0x598d39(0xd2c)] = _0x20bc4b;
                    }),
                    _0x21e8c8 = this && this['__importStar'] || function(_0x516bf7) {
                        const _0x1f4d7d = _0x2d6781;
                        if (_0x516bf7 && _0x516bf7[_0x1f4d7d(0x16f1)]) return _0x516bf7;
                        var _0x3815a9 = {};
                        if (null != _0x516bf7) {
                            for (var _0x2f3dff in _0x516bf7) 'default' !== _0x2f3dff && Object[_0x1f4d7d(0x977)][_0x1f4d7d(0x2cf)]['call'](_0x516bf7, _0x2f3dff) && _0x30e4a8(_0x3815a9, _0x516bf7, _0x2f3dff);
                        }
                        return _0x301cf8(_0x3815a9, _0x516bf7), _0x3815a9;
                    },
                    _0x4b4c07 = this && this['__importDefault'] || function(_0x303cdf) {
                        return _0x303cdf && _0x303cdf['__esModule'] ? _0x303cdf : {
                            'default': _0x303cdf
                        };
                    };
                Object['defineProperty'](_0xd3e0d0, '__esModule', {
                    'value': !0x0
                });
                const _0x2e0e2c = _0x21e8c8(_0xeed3e(0x5f07)),
                    _0x2abc70 = _0x4b4c07(_0xeed3e(0x169b4)),
                    _0xe6f717 = _0x4b4c07(_0xeed3e(0x1fd7)),
                    _0x183dbd = _0xeed3e(0x16c14),
                    _0x25dd87 = _0x4b4c07(_0xeed3e(0xccae)),
                    _0x4eae40 = _0x4b4c07(_0xeed3e(0x5103)),
                    _0x5bbdb8 = _0x4b4c07(_0xeed3e(0x54e3)),
                    _0x438f23 = _0x4b4c07(_0xeed3e(0x9b68)),
                    _0x45c978 = _0x4b4c07(_0xeed3e(0x14639));
                class _0x11a269 extends Phaser['Scene'] {
                    constructor() {
                        const _0x992a3c = _0x2d6781;
                        super({
                            'key': _0x2abc70[_0x992a3c(0xd2c)][_0x992a3c(0x142f)]
                        }), this[_0x992a3c(0x355)] = 0x1, this['canSeeReviveButton'] = !0x1, this[_0x992a3c(0x409)] = 0x0, this[_0x992a3c(0xffc)] = 0x0, this[_0x992a3c(0x147a)] = 0x0;
                    } ['preload']() {
                        const _0x507dc6 = _0x2d6781;
                        _0x2e0e2c[_0x507dc6(0xd2c)][_0x507dc6(0x7c2)]();
                    } ['create']() {
                        const _0x27a1d3 = _0x2d6781;
                        this['canSeeReviveButton'] = _0x2e0e2c['default']['Core'][_0x27a1d3(0x10f6)]['revivals'] >= 0x1, _0x2e0e2c[_0x27a1d3(0xd2c)][_0x27a1d3(0x1043)][_0x27a1d3(0x14d8)]['SaveGameResults']();
                        let _0x240b8 = _0x2e0e2c[_0x27a1d3(0xd2c)]['Core']['PlayerOptions'][_0x27a1d3(0x1ace)] ? _0xe6f717[_0x27a1d3(0xd2c)]['BGM_GameOver'] : _0xe6f717[_0x27a1d3(0xd2c)]['BGM_GameOverB'];
                        _0x2e0e2c['default'][_0x27a1d3(0x1267)][_0x27a1d3(0x7f6)](_0x240b8, {
                            'volume': 1.4
                        }), this[_0x27a1d3(0x14b7)] = this[_0x27a1d3(0x18bd)][_0x27a1d3(0x568)](0.5 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x173c)], 0.5 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x140e)], 'introBG')[_0x27a1d3(0xdab)](0x0), this[_0x27a1d3(0x62d)] = this[_0x27a1d3(0x18bd)]['image'](0.5 * this[_0x27a1d3(0x12f9)]['width'], 0.3 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x140e)], 'gameOver')['setScale'](_0x4eae40[_0x27a1d3(0xd2c)][_0x27a1d3(0x15db)])[_0x27a1d3(0xdab)](0x1), this[_0x27a1d3(0x16f6)] = this['add']['image'](0.5 * this[_0x27a1d3(0x12f9)]['width'], 0.3 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x140e)], 'stageComplete')[_0x27a1d3(0x8a2)](0x0)['setAlpha'](0x1), this[_0x27a1d3(0xfd4)] = this[_0x27a1d3(0x18bd)][_0x27a1d3(0x568)](0.5 * this['renderer'][_0x27a1d3(0x173c)] - 0xaf, 0.3 * this['renderer'][_0x27a1d3(0x140e)] + 0x64, 'UI', 'MoneyPile.png')[_0x27a1d3(0x8a2)](0x0)['setAlpha'](0x1)[_0x27a1d3(0xf8e)](0.5), this['bonusCoinsText'] = this['add'][_0x27a1d3(0x758)](0.5 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x173c)] + 0x19, 0.3 * this['renderer'][_0x27a1d3(0x140e)] + 0x64, _0x2e0e2c['default']['Lang'][_0x27a1d3(0xb10)]('gameOver_bonus', ['']))[_0x27a1d3(0x8a2)](0x0)[_0x27a1d3(0xdab)](0x1)[_0x27a1d3(0xf8e)](0.5), _0x2e0e2c[_0x27a1d3(0xd2c)]['Lang']['scaleToMaxFast'](this['bonusCoinsText'], !0x1, 0xc8);
                        var _0xf55754 = Math['min'](this[_0x27a1d3(0x14b7)][_0x27a1d3(0xe75)], this[_0x27a1d3(0x14b7)][_0x27a1d3(0x828)]);
                        this[_0x27a1d3(0x355)] = _0x2e0e2c['IS_PORTRAIT'] ? this[_0x27a1d3(0x12f9)][_0x27a1d3(0x140e)] / _0xf55754 : this[_0x27a1d3(0x12f9)][_0x27a1d3(0x173c)] / _0xf55754, this[_0x27a1d3(0x14b7)]['setScale'](5.1 * this[_0x27a1d3(0x355)], 5.1 * this[_0x27a1d3(0x355)]), this[_0x27a1d3(0x1ac3)] = this[_0x27a1d3(0x18bd)]['container'](0x0, this['renderer']['height']), this['SceneContainer'][_0x27a1d3(0x8a2)]((0x0, _0x2e0e2c[_0x27a1d3(0x9c7)])());
                        const _0x4750e9 = _0x2e0e2c[_0x27a1d3(0x1e0)][_0x27a1d3(0x1634)];
                        this[_0x27a1d3(0xef3)] = new _0x183dbd['NineSlice'](this, _0x25dd87['default']['GreenButton'], {
                            'x': _0x4750e9,
                            'y': -0x3c,
                            'width': 0x60,
                            'height': 0x20
                        })[_0x27a1d3(0x8a2)](0x0)[_0x27a1d3(0xf8e)](0.5, 0x1)[_0x27a1d3(0x183f)](this['canSeeReviveButton']), this[_0x27a1d3(0x1ac3)]['add'](this['ReviveButton']), this[_0x27a1d3(0x1b3)] = new _0x183dbd['NineSlice'](this, _0x25dd87[_0x27a1d3(0xd2c)]['BackButton'], {
                            'x': _0x4750e9,
                            'y': this['ReviveButton']['y'] - 0x78,
                            'width': 0x60,
                            'height': 0x20
                        })[_0x27a1d3(0x8a2)](0x0)['setOrigin'](0.5, 0x1), this[_0x27a1d3(0x1ac3)]['add'](this[_0x27a1d3(0x1b3)]), this[_0x27a1d3(0x15c4)] = new Phaser['GameObjects'][(_0x27a1d3(0x1ae9))](this, this[_0x27a1d3(0xef3)]['x'], this['ReviveButton']['y'] - 0x20, _0x2e0e2c['default'][_0x27a1d3(0x1f1)]['getLang']('gameOver_revive'), {})['setOrigin'](0.5, 0.5)[_0x27a1d3(0x8a2)](0x0)['setVisible'](this[_0x27a1d3(0x1312)]), _0x2e0e2c[_0x27a1d3(0xd2c)]['Lang']['scaleToMaxFast'](this[_0x27a1d3(0x15c4)], !0x1, 0x50), this[_0x27a1d3(0x1ac3)][_0x27a1d3(0x18bd)](this['ReviveText']), this[_0x27a1d3(0x868)] = new Phaser[(_0x27a1d3(0xbf2))][(_0x27a1d3(0x1ae9))](this, this['QuitButton']['x'], this[_0x27a1d3(0x1b3)]['y'] - 0x20, _0x2e0e2c['default'][_0x27a1d3(0x1f1)][_0x27a1d3(0xb10)]('gameOver_quit'), {})[_0x27a1d3(0xf8e)](0.5, 0.5)[_0x27a1d3(0x8a2)](0x0), _0x2e0e2c[_0x27a1d3(0xd2c)][_0x27a1d3(0x1f1)][_0x27a1d3(0x14a8)](this[_0x27a1d3(0x868)], !0x1, 0x50), this[_0x27a1d3(0x1ac3)]['add'](this['QuitText']), this[_0x27a1d3(0x72c)] = this[_0x27a1d3(0x18bd)]['image'](0.5 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x173c)] - 0xaf, 0.5 * this[_0x27a1d3(0x12f9)]['height'] + 0xaa, 'UI', 'MoneyPile.png')[_0x27a1d3(0x8a2)](0x0)[_0x27a1d3(0xdab)](0x1)['setOrigin'](0.5), this['reviveCoinsText'] = this[_0x27a1d3(0x18bd)][_0x27a1d3(0x758)](0.5 * this[_0x27a1d3(0x12f9)][_0x27a1d3(0x173c)] + 0xf, this[_0x27a1d3(0x72c)]['y'], _0x2e0e2c[_0x27a1d3(0xd2c)]['Lang'][_0x27a1d3(0xb10)]('gameOver_bonus', ['']))[_0x27a1d3(0x8a2)](0x0)['setAlpha'](0x1)[_0x27a1d3(0xf8e)](0.5), _0x2e0e2c[_0x27a1d3(0xd2c)][_0x27a1d3(0x1f1)]['scaleToMaxFast'](this[_0x27a1d3(0x1897)], !0x1, 0xc8), this[_0x27a1d3(0x1001)] = this[_0x27a1d3(0x8af)][_0x27a1d3(0x544)]('rexPixelationPipeline')[_0x27a1d3(0x18bd)](this[_0x27a1d3(0x1793)][_0x27a1d3(0x4cd)]), this[_0x27a1d3(0x1001)]['pixelWidth'] = 0x32, this[_0x27a1d3(0x1001)]['pixelHeight'] = 0x32, this[_0x27a1d3(0x12a1)]['add']({
                            'targets': this[_0x27a1d3(0x1001)],
                            'pixelWidth': 0x1,
                            'pixelHeight': 0x1,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['OnIntroEnded']();
                            }
                        }), this[_0x27a1d3(0x12a1)][_0x27a1d3(0x18bd)]({
                            'targets': this[_0x27a1d3(0x14b7)],
                            'scaleY': this['fillScale'],
                            'scaleX': this['fillScale'],
                            'alpha': 0.4,
                            'duration': 0x320,
                            'ease': 'Linear'
                        }), this[_0x27a1d3(0x12e6)](), this['bonusCoinsAmount'] = 0x0;
                    } ['MakeUIGrid']() {
                        const _0x1bd83c = _0x2d6781;
                        let _0x352aee = _0x2e0e2c['default'][_0x1bd83c(0x1043)]['SceneManager'][_0x1bd83c(0x7ec)];
                        if (_0x352aee[_0x1bd83c(0x4ff)](0x1, 0x2, !0x1), this['canSeeReviveButton']) {
                            let _0x42810b = 0x708,
                                _0x80bb43 = _0x45c978['default'][_0x2e0e2c[_0x1bd83c(0xd2c)][_0x1bd83c(0x1043)]['PlayerOptions'][_0x1bd83c(0x1856)]];
                            _0x80bb43 && _0x80bb43[0x0] && _0x80bb43[0x0][_0x1bd83c(0x117e)] && _0x80bb43[0x0]['mods']['TimeLimit'] && (_0x42810b = _0x80bb43[0x0]['mods']['TimeLimit']), _0x2e0e2c['default']['Core'][_0x1bd83c(0x225)] >= _0x42810b && _0x352aee[_0x1bd83c(0x8cc)][_0x1bd83c(0x16a8)](0x0, 0x0, this[_0x1bd83c(0x1b3)]), _0x352aee['UI_grid'][_0x1bd83c(0x16a8)](0x0, 0x1, this['ReviveButton']);
                        } else _0x352aee[_0x1bd83c(0x8cc)]['SetContents'](0x0, 0x0, this['QuitButton']);
                        let _0x297440 = this[_0x1bd83c(0x1312)] ? this[_0x1bd83c(0xef3)] : this[_0x1bd83c(0x1b3)];
                        _0x352aee[_0x1bd83c(0x1475)](!0x1), _0x352aee[_0x1bd83c(0x8cc)][_0x1bd83c(0xb55)](_0x297440), _0x352aee['UI_selected'] = _0x297440, _0x2e0e2c[_0x1bd83c(0xd2c)]['Core'][_0x1bd83c(0x69e)][_0x1bd83c(0x6d2)][_0x1bd83c(0x5d8)](_0x352aee), _0x352aee['OnCancelCallback'] = () => {}, this[_0x1bd83c(0x915)]['addEvent']({
                            'delay': 0x1e,
                            'callback': () => {
                                const _0x26d89c = _0x1bd83c;
                                _0x352aee[_0x26d89c(0x1475)](!0x0);
                            }
                        });
                    } ['makeAngelVFX']() {
                        const _0x4764a8 = _0x2d6781;
                        this[_0x4764a8(0x6d4)] = this[_0x4764a8(0x18bd)]['sprite'](0x0, 0x0, 'vfx', 'WhiteDot.png')['setScrollFactor'](0x0)[_0x4764a8(0x8a2)](this['renderer']['width'], this[_0x4764a8(0x12f9)]['height'])[_0x4764a8(0xdab)](0x0)[_0x4764a8(0xf8e)](0x0);
                        const _0x2ce723 = this['anims']['generateFrameNames']('angel', {
                            'start': 0x1,
                            'end': 0xa,
                            'zeroPad': 0x0,
                            'prefix': 'angel',
                            'suffix': '.png'
                        });
                        this[_0x4764a8(0x189f)] = this['add'][_0x4764a8(0x105b)](0.5 * this[_0x4764a8(0x12f9)]['width'], 0.5 * this['renderer']['height'], 'angel'), this['Angel'][_0x4764a8(0x183e)][_0x4764a8(0x6a8)]({
                            'key': 'angel',
                            'frames': _0x2ce723,
                            'frameRate': 0x10,
                            'repeat': 0x0
                        }), this[_0x4764a8(0x189f)][_0x4764a8(0x35a)] = !0x1, this['Angel'][_0x4764a8(0x8a2)](0x2 * _0x4eae40['default'][_0x4764a8(0x15db)]), this[_0x4764a8(0x189f)]['setDepth'](0x3e8), this[_0x4764a8(0x189f)][_0x4764a8(0x652)](0xffffbb), this[_0x4764a8(0x189f)]['on']('animationcomplete', this['Revive']['bind'](this));
                    } ['playReviveAnim']() {
                        const _0x47b199 = _0x2d6781;
                        _0x2e0e2c[_0x47b199(0xd2c)][_0x47b199(0x1043)]['PlayerOptions'][_0x47b199(0x49c)] && this['tweens'][_0x47b199(0x18bd)]({
                            'targets': this[_0x47b199(0x6d4)],
                            'alpha': 0x1,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'ease': 'Linear',
                            'delay': 0x1a9
                        }), this[_0x47b199(0x12a1)][_0x47b199(0x18bd)]({
                            'targets': this[_0x47b199(0x14b7)],
                            'alpha': 0x0,
                            'duration': 0x271,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        }), this[_0x47b199(0x189f)][_0x47b199(0x35a)] = !0x0, this[_0x47b199(0x189f)]['play']('angel');
                    } ['EnableButtons']() {
                        const _0x23d902 = _0x2d6781;
                        let _0x21e207 = 0x708,
                            _0x1cdb73 = _0x45c978['default'][_0x2e0e2c[_0x23d902(0xd2c)][_0x23d902(0x1043)][_0x23d902(0x14d8)][_0x23d902(0x1856)]];
                        _0x1cdb73 && _0x1cdb73[0x0] && _0x1cdb73[0x0][_0x23d902(0x117e)] && _0x1cdb73[0x0][_0x23d902(0x117e)]['TimeLimit'] && (_0x21e207 = _0x1cdb73[0x0]['mods'][_0x23d902(0xa9b)]);
                        var _0xf02038 = _0x2e0e2c['default'][_0x23d902(0x1043)]['SurvivedSeconds'] >= _0x21e207;
                        !_0xf02038 && this[_0x23d902(0x1312)] || (this['QuitButton']['setInteractive'](), this[_0x23d902(0x1b3)]['on']('pointerdown', () => {
                            const _0x4a0601 = _0x23d902;
                            _0xf02038 && (this[_0x4a0601(0x147a)] += this[_0x4a0601(0x5f3)]()), _0x2e0e2c[_0x4a0601(0xd2c)][_0x4a0601(0x1043)][_0x4a0601(0x14d8)][_0x4a0601(0x17b2)](this[_0x4a0601(0x147a)]), this['totalCoins'] = 0x0, this['awardGivenXTimes'] = 0x0;
                            try {
                                _0x2e0e2c['default'][_0x4a0601(0x1043)]['OnPlayerQuit'](), _0x2e0e2c[_0x4a0601(0xd2c)][_0x4a0601(0x1043)][_0x4a0601(0x69e)][_0x4a0601(0x172a)](), _0x2e0e2c[_0x4a0601(0xd2c)][_0x4a0601(0x1267)]['PlaySound'](_0xe6f717[_0x4a0601(0xd2c)][_0x4a0601(0x1b0f)]);
                            } catch (_0x4710fe) {
                                console['log'](_0x4710fe), _0x2e0e2c['default']['Core']['OnPlayerQuit'](), _0x2e0e2c[_0x4a0601(0xd2c)][_0x4a0601(0x1043)][_0x4a0601(0x69e)][_0x4a0601(0x172a)]();
                            }
                        }), this[_0x23d902(0x12a1)][_0x23d902(0x18bd)]({
                            'targets': [this[_0x23d902(0x1b3)], this[_0x23d902(0x868)]],
                            'scale': 0x2 * _0x4eae40[_0x23d902(0xd2c)]['PixelScale'],
                            'duration': 0xfa,
                            'ease': 'Linear'
                        }), this[_0x23d902(0x1312)] && (this[_0x23d902(0x1897)]['text'] = _0x2e0e2c[_0x23d902(0xd2c)][_0x23d902(0x1f1)]['getLang']('gameOver_revivePayout', [this['reviveCashAmount']()[_0x23d902(0x1969)]()]), this['tweens'][_0x23d902(0x18bd)]({
                            'targets': [this[_0x23d902(0x72c)], this[_0x23d902(0x1897)]],
                            'scale': 0x1 * _0x4eae40[_0x23d902(0xd2c)]['PixelScale'],
                            'duration': 0xfa,
                            'ease': 'Linear'
                        }))), this[_0x23d902(0x1312)] && (this[_0x23d902(0xef3)][_0x23d902(0x76d)](), this['ReviveButton']['on']('pointerdown', () => {
                            const _0x23be2c = _0x23d902;
                            this['ReviveButton'][_0x23be2c(0x596)](), this[_0x23be2c(0xa2c)](), this[_0x23be2c(0x15d5)](), _0x2e0e2c['default'][_0x23be2c(0x1267)][_0x23be2c(0x7f6)](_0xe6f717[_0x23be2c(0xd2c)][_0x23be2c(0x2b6)]), _0x2e0e2c[_0x23be2c(0xd2c)][_0x23be2c(0x1043)][_0x23be2c(0x10f6)]['revivals']--, _0x2e0e2c['default'][_0x23be2c(0x1043)]['Player'][_0x23be2c(0x14e0)] <= 0x0 && _0x2e0e2c['default'][_0x23be2c(0x1043)]['Weapons'][_0x23be2c(0x1e6)](_0x59bcbb => _0x59bcbb['bulletType'] === _0x5bbdb8['default'][_0x23be2c(0x855)]) && _0x2e0e2c[_0x23be2c(0xd2c)][_0x23be2c(0x1043)][_0x23be2c(0x1ac8)](_0x5bbdb8[_0x23be2c(0xd2c)]['REVIVAL']), this['playReviveAnim']();
                        }), this[_0x23d902(0x12a1)][_0x23d902(0x18bd)]({
                            'targets': [this[_0x23d902(0xef3)], this[_0x23d902(0x15c4)]],
                            'scale': 0x2 * _0x4eae40[_0x23d902(0xd2c)][_0x23d902(0x15db)],
                            'duration': 0xfa,
                            'ease': 'Linear'
                        }));
                    } ['HideQuitButton']() {
                        const _0x115522 = _0x2d6781;
                        this['tweens'][_0x115522(0x18bd)]({
                            'targets': [this[_0x115522(0x1b3)], this[_0x115522(0x868)]],
                            'alpha': 0x0,
                            'scale': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear'
                        }), this[_0x115522(0x12a1)]['add']({
                            'targets': [this[_0x115522(0x72c)], this['reviveCoinsText']],
                            'scale': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear'
                        }), this['QuitButton'][_0x115522(0xb7c)]();
                    } ['HideReviveButton']() {
                        const _0x5a8ca0 = _0x2d6781;
                        this[_0x5a8ca0(0x12a1)][_0x5a8ca0(0x18bd)]({
                            'targets': [this[_0x5a8ca0(0xef3)], this[_0x5a8ca0(0x15c4)]],
                            'alpha': 0x0,
                            'scale': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear'
                        }), this[_0x5a8ca0(0xef3)]['removeInteractive']();
                    } ['Revive']() {
                        const _0x2c5e5c = _0x2d6781;
                        _0x2e0e2c[_0x2c5e5c(0xd2c)][_0x2c5e5c(0x1043)][_0x2c5e5c(0x69e)]['BackFromGameOver'](), _0x2e0e2c['default']['Core'][_0x2c5e5c(0x10f6)][_0x2c5e5c(0x780)](0.5), void 0x0 !== _0x2e0e2c[_0x2c5e5c(0xd2c)][_0x2c5e5c(0x1043)][_0x2c5e5c(0x1884)]['ActiveArcanas'] && _0x2e0e2c['default'][_0x2c5e5c(0x1043)][_0x2c5e5c(0x1884)][_0x2c5e5c(0x15e7)][_0x2c5e5c(0x1303)](_0x438f23[_0x2c5e5c(0xd2c)]['T04_AWAKE']) > -0x1 && _0x2e0e2c['default']['Core']['Arcanas']['TriggerAwake']();
                    } ['OnIntroEnded']() {
                        const _0x2057df = _0x2d6781;
                        let _0x37fd2b = 0x708,
                            _0x157386 = _0x45c978[_0x2057df(0xd2c)][_0x2e0e2c['default']['Core'][_0x2057df(0x14d8)][_0x2057df(0x1856)]];
                        _0x157386 && _0x157386[0x0] && _0x157386[0x0][_0x2057df(0x117e)] && _0x157386[0x0][_0x2057df(0x117e)][_0x2057df(0xa9b)] && (_0x37fd2b = _0x157386[0x0][_0x2057df(0x117e)][_0x2057df(0xa9b)]), _0x2e0e2c[_0x2057df(0xd2c)]['Core'][_0x2057df(0x225)] >= _0x37fd2b ? this[_0x2057df(0x19b1)]() : (this[_0x2057df(0x449)](), this['MakeUIGrid']());
                    } ['EnterStageReward']() {
                        const _0x3f9f66 = _0x2d6781;
                        this[_0x3f9f66(0xffc)]++, this['time']['addEvent']({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x4dca73 = _0x3f9f66;
                                this[_0x4dca73(0x12a1)]['add']({
                                    'targets': this[_0x4dca73(0x62d)],
                                    'alpha': 0x0,
                                    'scale': 0x0,
                                    'duration': 0xfa,
                                    'ease': 'Linear'
                                }), this['tweens']['add']({
                                    'targets': this[_0x4dca73(0x16f6)],
                                    'scale': _0x4eae40[_0x4dca73(0xd2c)][_0x4dca73(0x15db)],
                                    'duration': 0xfa,
                                    'ease': 'Linear'
                                }), this['tweens']['add']({
                                    'targets': [this['bonusCoinsIcon'], this[_0x4dca73(0x461)]],
                                    'scale': 0x2 * _0x4eae40[_0x4dca73(0xd2c)]['PixelScale'],
                                    'duration': 0xfa,
                                    'ease': 'Linear'
                                });
                                let _0x57f174 = 0x1f4;
                                switch (this[_0x4dca73(0xffc)]) {
                                    case 0x0:
                                    case 0x1:
                                        _0x57f174 = 0x1f4;
                                        break;
                                    case 0x2:
                                    default:
                                        _0x57f174 = 0x64;
                                        break;
                                    case 0x3:
                                        _0x57f174 = 0xc8;
                                        break;
                                    case 0x4:
                                        _0x57f174 = 0x12c;
                                        break;
                                    case 0x5:
                                        _0x57f174 = 0x190;
                                }
                                this['bonusCoinsAmount'] = this[_0x4dca73(0x147a)], this['tweens']['add']({
                                    'targets': this,
                                    'bonusCoinsAmount': this['totalCoins'] + _0x57f174,
                                    'duration': 0x5dc,
                                    'ease': 'Linear',
                                    'onComplete': () => {
                                        const _0x531bfd = _0x4dca73;
                                        this[_0x531bfd(0x449)](), this['MakeUIGrid']();
                                    }
                                }), this['totalCoins'] += _0x57f174;
                            }
                        });
                    } ['reviveCashAmount']() {
                        const _0x53a19a = _0x2d6781;
                        let _0x25eeaf = 0x0;
                        for (let _0x49aecd = 0x0; _0x49aecd < Math[_0x53a19a(0xe07)](_0x2e0e2c[_0x53a19a(0xd2c)][_0x53a19a(0x1043)]['Player']['revivals']); _0x49aecd++) switch (_0x49aecd + (this['awardGivenXTimes'] - 0x1)) {
                            case 0x0:
                            default:
                                _0x25eeaf += 0x64;
                                break;
                            case 0x1:
                                _0x25eeaf += 0xc8;
                                break;
                            case 0x2:
                                _0x25eeaf += 0x12c;
                                break;
                            case 0x3:
                                _0x25eeaf += 0x190;
                        }
                        return Math[_0x53a19a(0x1084)](_0x25eeaf, 0xffff);
                    } ['update']() {
                        const _0xd8f1aa = _0x2d6781;
                        this['bonusCoinsText'][_0xd8f1aa(0x758)] = _0x2e0e2c[_0xd8f1aa(0xd2c)][_0xd8f1aa(0x1f1)][_0xd8f1aa(0xb10)]('gameOver_bonus', [this['bonusCoinsAmount']['toFixed']()]);
                    }
                }
                _0xd3e0d0['default'] = _0x11a269;
            };
