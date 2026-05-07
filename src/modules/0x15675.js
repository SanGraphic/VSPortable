// Module 0x15675
// Args: _0x7bbc61, _0x25ce5c, _0x4e8cc8

export default (_0x7bbc61, _0x25ce5c, _0x4e8cc8) => {
                'use strict';
                const _0x3e3763 = a0_0x6932;
                var _0x3f98fa = this && this['__importDefault'] || function(_0x1b6548) {
                    return _0x1b6548 && _0x1b6548['__esModule'] ? _0x1b6548 : {
                        'default': _0x1b6548
                    };
                };
                Object['defineProperty'](_0x25ce5c, '__esModule', {
                    'value': !0x0
                }), _0x25ce5c['CollectionSecretUnlockEffect'] = _0x25ce5c['PopupData'] = void 0x0;
                const _0x1f086b = _0x3f98fa(_0x4e8cc8(0x16800)),
                    _0x38ab02 = _0x3f98fa(_0x4e8cc8(0x1852a)),
                    _0x42f16c = _0x3f98fa(_0x4e8cc8(0x1fd7)),
                    _0x540db2 = _0x3f98fa(_0x4e8cc8(0x5f07)),
                    _0x249488 = _0x3f98fa(_0x4e8cc8(0x16120));
                _0x25ce5c['PopupData'] = class {};
                class _0x44365e extends Phaser['GameObjects']['Container'] {
                    constructor(_0x114166, _0x5ec291, _0x5ef242) {
                        const _0x22320c = _0x3e3763;
                        super(_0x114166, _0x5ec291, _0x5ef242), this[_0x22320c(0xe9d)] = [], this['tweens'] = [], this[_0x22320c(0x51a)] = [0xff8888, 0xff88ff, 0xffffff, 0x440000, 0x440044, 0x2222222], this['sprites'] = ['frame5_c4_ad.png', 'background_water.png', 'background_chapel.png', 'background_forest.png', 'background_bonezone.png'], this['sprite1'] = new Phaser[(_0x22320c(0xbf2))]['Sprite'](this['scene'], 0x0, 0x64, 'UI', 'sheen04.png')[_0x22320c(0x8a2)](0xa, 0.1), this[_0x22320c(0x107b)] = new Phaser[(_0x22320c(0xbf2))][(_0x22320c(0xa97))](this[_0x22320c(0x6d2)], -0x64, 0x0, 'UI', 'sheen05.png')[_0x22320c(0x8a2)](0xa, 0.1)[_0x22320c(0x9b5)](0x5a), this['sprite3'] = new Phaser[(_0x22320c(0xbf2))]['Sprite'](this[_0x22320c(0x6d2)], 0x0, -0x64, 'UI', 'sheen06.png')[_0x22320c(0x8a2)](0xa, 0.1)[_0x22320c(0x9b5)](0xb4), this[_0x22320c(0x182c)] = new Phaser[(_0x22320c(0xbf2))]['Sprite'](this[_0x22320c(0x6d2)], 0x64, 0x0, 'UI', 'sheen07.png')['setScale'](0xa, 0.1)[_0x22320c(0x9b5)](0x10e);
                        for (var _0x9dab8 = 0x0; _0x9dab8 < 0x80; _0x9dab8++) {
                            let _0x42ae06 = new Phaser['GameObjects'][(_0x22320c(0x11dc))](this[_0x22320c(0x6d2)], 0x0, 0x0);
                            _0x9dab8 > 0x0 && _0x42ae06[_0x22320c(0xa60)](!0x1), _0x42ae06[_0x22320c(0x18bd)]([this['sprite1'], this[_0x22320c(0x107b)], this[_0x22320c(0x19ef)], this[_0x22320c(0x182c)]]), _0x42ae06[_0x22320c(0xdab)](0x0), this[_0x22320c(0x18bd)](_0x42ae06), this[_0x22320c(0xe9d)][_0x22320c(0x1564)](_0x42ae06);
                        }
                        let _0x67468 = this[_0x22320c(0x6d2)]['tweens'][_0x22320c(0x18bd)]({
                                'targets': this['sprite1'],
                                'y': -0xc8,
                                'ease': 'Sine.easeInOut',
                                'duration': 0x7d0,
                                'repeat': -0x1,
                                'yoyo': !0x0
                            }),
                            _0x4674dd = this['scene'][_0x22320c(0x12a1)][_0x22320c(0x18bd)]({
                                'targets': this[_0x22320c(0x107b)],
                                'x': 0xc8,
                                'ease': 'Sine.easeInOut',
                                'duration': 0xfa0,
                                'repeat': -0x1,
                                'yoyo': !0x0
                            }),
                            _0x5732cd = this[_0x22320c(0x6d2)][_0x22320c(0x12a1)][_0x22320c(0x18bd)]({
                                'targets': this['sprite3'],
                                'y': 0xc8,
                                'ease': 'Sine.easeInOut',
                                'duration': 0x7d0,
                                'repeat': -0x1,
                                'yoyo': !0x0
                            }),
                            _0x354adf = this[_0x22320c(0x6d2)][_0x22320c(0x12a1)][_0x22320c(0x18bd)]({
                                'targets': this[_0x22320c(0x182c)],
                                'x': -0xc8,
                                'ease': 'Sine.easeInOut',
                                'duration': 0xfa0,
                                'repeat': -0x1,
                                'yoyo': !0x0
                            }),
                            _0x34a55d = this['scene']['tweens'][_0x22320c(0x18bd)]({
                                'targets': this[_0x22320c(0xe9d)],
                                'angle': {
                                    'value': 0x168,
                                    'duration': 0x1770
                                },
                                'scaleX': {
                                    'value': 0x2,
                                    'duration': 0x1770,
                                    'yoyo': !0x0,
                                    'ease': 'Quad.easeInOut'
                                },
                                'scaleY': {
                                    'value': 4.5,
                                    'duration': 0x1770,
                                    'yoyo': !0x0,
                                    'ease': 'Quad.easeInOut'
                                },
                                'repeat': -0x1,
                                'delay': function(_0x162681, _0x353f59, _0x2aec06, _0x38c69b, _0x52d249, _0x3a2dc8) {
                                    return 0x80 * _0x38c69b;
                                }
                            });
                        this[_0x22320c(0x12a1)]['push'](_0x67468, _0x4674dd, _0x5732cd, _0x354adf, _0x34a55d);
                    } ['playBGAmin']() {
                        const _0x1b08b6 = _0x3e3763;
                        this[_0x1b08b6(0x6d2)]['tweens'][_0x1b08b6(0x18bd)]({
                            'targets': this[_0x1b08b6(0xe9d)],
                            'alpha': {
                                'value': 0.8,
                                'duration': 0x3e8
                            }
                        }), _0x540db2['default'][_0x1b08b6(0x1267)]['PlaySound'](_0x42f16c[_0x1b08b6(0xd2c)][_0x1b08b6(0x747)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math['random']() - 0.5)
                        }, 0x96, 0x3);
                        let _0x15e518 = Phaser['Math']['RND']['pick'](this[_0x1b08b6(0x51a)]);
                        this[_0x1b08b6(0x12b1)][_0x1b08b6(0xb34)](_0x15e518), this[_0x1b08b6(0x107b)]['setTint'](_0x15e518), this[_0x1b08b6(0x19ef)]['setTint'](_0x15e518), this[_0x1b08b6(0x182c)]['setTint'](_0x15e518);
                    } ['stopBGAnim']() {
                        const _0x29d0bf = _0x3e3763;
                        this[_0x29d0bf(0x6d2)]['tweens'][_0x29d0bf(0x18bd)]({
                            'targets': this[_0x29d0bf(0xe9d)],
                            'alpha': {
                                'value': 0x0,
                                'duration': 0x7d0
                            }
                        });
                    } ['onAchievementsUnlocked'](_0x2b84da) {
                        const _0x390288 = _0x3e3763;
                        this['popupTimer'] && (this[_0x390288(0xcdc)][_0x390288(0x16ca)](), this['popupTimer'] = null, this['scene'][_0x390288(0x915)][_0x390288(0x19e6)](), this['AchiAdTween'] && this[_0x390288(0x6d2)]['tweens'][_0x390288(0x393)](this[_0x390288(0xefc)])), this[_0x390288(0xbc0)] && this[_0x390288(0xbc0)][_0x390288(0x4cf)](), this['AchiAdGroup'] && this[_0x390288(0x201)][_0x390288(0x16ca)]();
                        let _0x3304c5 = [];
                        var _0x5543d0 = _0x1f086b['default'][_0x2b84da];
                        if (_0x5543d0['characterToUnlock'] && _0x3304c5['push']('characterToUnlock'), _0x5543d0[_0x390288(0x16d7)] && _0x3304c5[_0x390288(0x1564)]('stageToUnlock'), _0x5543d0[_0x390288(0xc10)] && _0x3304c5[_0x390288(0x1564)]('hyperToUnlock'), _0x5543d0['weaponToUnlock'] && _0x3304c5['push']('weaponToUnlock'), _0x5543d0['relicToUnlock'] && _0x3304c5['push']('relicToUnlock'), _0x5543d0['goldPrize'] && _0x5543d0[_0x390288(0x3d5)] && _0x3304c5[_0x390288(0x1564)]('goldPrize'), _0x5543d0[_0x390288(0x18a2)] && _0x3304c5['push']('powerUpToUnlock'), _0x5543d0[_0x390288(0x141c)] >= 0x0 && _0x3304c5[_0x390288(0x1564)]('arcanaToUnlock'), _0x2b84da == _0x38ab02[_0x390288(0xd2c)][_0x390288(0x94e)] && _0x3304c5[_0x390288(0x1564)](_0x38ab02[_0x390288(0xd2c)]['Everything']), _0x2b84da == _0x38ab02[_0x390288(0xd2c)]['Everywhere'] && _0x3304c5['push'](_0x38ab02[_0x390288(0xd2c)][_0x390288(0x979)]), _0x3304c5[_0x390288(0xed9)] > 0x0) {
                            this[_0x390288(0xeca)](), this[_0x390288(0xbc0)] = new _0x249488['default'](this[_0x390288(0x6d2)], 0x0, 0x0), this['spellSuccessPopup'][_0x390288(0x726)](0.5 * this['scene'][_0x390288(0x12f9)][_0x390288(0x173c)] - 0.5 * this['spellSuccessPopup'][_0x390288(0xe75)] + 0x28, 0.5 * this[_0x390288(0x6d2)]['renderer'][_0x390288(0x140e)] - this[_0x390288(0xbc0)][_0x390288(0x828)]), this['scene'][_0x390288(0x18bd)]['existing'](this[_0x390288(0xbc0)]);
                            const _0x6374cd = _0x3304c5[_0x390288(0xed9)];
                            var _0x5e1a7a = 0x0;
                            if (this[_0x390288(0xbc0)][_0x390288(0x11c0)](_0x2b84da, _0x3304c5[0x0]), this['spellSuccessPopup']['Show'](), 0x1 == _0x6374cd) this[_0x390288(0xcdc)] = this[_0x390288(0x6d2)][_0x390288(0x915)][_0x390288(0x12b8)]({
                                'delay': 0xdac,
                                'callback': () => {
                                    const _0x4d1467 = _0x390288;
                                    this[_0x4d1467(0xbc0)]['Hide'](), this[_0x4d1467(0x6d2)][_0x4d1467(0x915)]['removeAllEvents'](), this[_0x4d1467(0x539)]();
                                }
                            });
                            else {
                                this[_0x390288(0xcdc)] = this[_0x390288(0x6d2)]['time']['addEvent']({
                                    'delay': 0xdac,
                                    'callback': () => {
                                        const _0x57083c = _0x390288;
                                        this[_0x57083c(0xbc0)]['Hide'](), _0x5e1a7a < _0x6374cd - 0x1 ? this[_0x57083c(0xcdc)] = this[_0x57083c(0x6d2)][_0x57083c(0x915)][_0x57083c(0x12b8)]({
                                            'delay': 0x1f4,
                                            'callback': () => {
                                                const _0x332140 = _0x57083c;
                                                _0x5e1a7a++, this[_0x332140(0xbc0)][_0x332140(0x11c0)](_0x2b84da, _0x3304c5[_0x5e1a7a % _0x6374cd]), this[_0x332140(0xbc0)][_0x332140(0xb95)]();
                                            }
                                        }) : (this['scene'][_0x57083c(0x915)][_0x57083c(0x19e6)](), this[_0x57083c(0x6d2)][_0x57083c(0x12a1)][_0x57083c(0x393)](this[_0x57083c(0xefc)]), this[_0x57083c(0x201)]['destroy'](), this[_0x57083c(0x539)]());
                                    },
                                    'repeat': -0x1
                                });
                                let _0x72f765 = this['spellSuccessPopup']['x'] + this[_0x390288(0xbc0)][_0x390288(0xe75)] + 0x40,
                                    _0x1e4fd9 = this['spellSuccessPopup']['y'] + 0x34;
                                this[_0x390288(0x201)] = this[_0x390288(0x6d2)]['add'][_0x390288(0x1990)](_0x72f765, _0x1e4fd9), this['AchiAd_BG'] = this[_0x390288(0x6d2)][_0x390288(0x18bd)]['image'](0x0, 0x0, 'vfx', 'PrizeBG.png')['setScale'](0x4)[_0x390288(0xdab)](0.5)['setOrigin'](0.5), this['AchiAd_Text'] = this[_0x390288(0x6d2)][_0x390288(0x18bd)][_0x390288(0x758)](0x0, -0x8, _0x6374cd[_0x390288(0xcc6)]())['setScale'](0x3)['setOrigin'](0.5), this[_0x390288(0x8a3)] = this[_0x390288(0x6d2)][_0x390288(0x18bd)]['text'](0x0, 0x18, _0x540db2['default'][_0x390288(0x1f1)][_0x390288(0xb10)]('postGame_unlocks'))['setScale'](0x1)[_0x390288(0xf8e)](0.5), this[_0x390288(0x201)]['add'](this[_0x390288(0x18ee)]), this['AchiAdGroup']['add'](this[_0x390288(0x156e)]), this['AchiAdGroup'][_0x390288(0x18bd)](this['AchiAd_Sub']), this['AchiAdTween'] = this['scene'][_0x390288(0x12a1)]['add']({
                                    'targets': this[_0x390288(0x18ee)],
                                    'scale': 0.9 * this[_0x390288(0x18ee)]['scale'],
                                    'duration': 0x640,
                                    'yoyo': !0x0,
                                    'repeat': -0x1
                                });
                            }
                        }
                    }
                }
                _0x25ce5c['CollectionSecretUnlockEffect'] = _0x44365e, _0x25ce5c['default'] = _0x44365e;
            };
