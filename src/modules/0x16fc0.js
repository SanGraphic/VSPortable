// Module 0x16fc0
// Args: _0x1a26f3, _0x43c8e1, _0x1dec87

export default (_0x1a26f3, _0x43c8e1, _0x1dec87) => {
                'use strict';
                const _0x4b72f1 = a0_0x6932;
                var _0x1fb517 = this && this['__createBinding'] || (Object['create'] ? function(_0x55539e, _0x5f1769, _0x5c1862, _0x287171) {
                        const _0x40aa98 = _0x4b72f1;
                        void 0x0 === _0x287171 && (_0x287171 = _0x5c1862);
                        var _0x59223b = Object[_0x40aa98(0x1687)](_0x5f1769, _0x5c1862);
                        _0x59223b && !('get' in _0x59223b ? !_0x5f1769['__esModule'] : _0x59223b[_0x40aa98(0x11bf)] || _0x59223b[_0x40aa98(0xf70)]) || (_0x59223b = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x5f1769[_0x5c1862];
                            }
                        }), Object['defineProperty'](_0x55539e, _0x287171, _0x59223b);
                    } : function(_0x5f2981, _0x36a21c, _0x47460a, _0x4c3a16) {
                        void 0x0 === _0x4c3a16 && (_0x4c3a16 = _0x47460a), _0x5f2981[_0x4c3a16] = _0x36a21c[_0x47460a];
                    }),
                    _0x2b6c37 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x5ec717, _0x4f44f1) {
                        Object['defineProperty'](_0x5ec717, 'default', {
                            'enumerable': !0x0,
                            'value': _0x4f44f1
                        });
                    } : function(_0x2450fe, _0x234051) {
                        _0x2450fe['default'] = _0x234051;
                    }),
                    _0x3f092f = this && this['__importStar'] || function(_0x5e4836) {
                        if (_0x5e4836 && _0x5e4836['__esModule']) return _0x5e4836;
                        var _0x589a40 = {};
                        if (null != _0x5e4836) {
                            for (var _0xdabb7f in _0x5e4836) 'default' !== _0xdabb7f && Object['prototype']['hasOwnProperty']['call'](_0x5e4836, _0xdabb7f) && _0x1fb517(_0x589a40, _0x5e4836, _0xdabb7f);
                        }
                        return _0x2b6c37(_0x589a40, _0x5e4836), _0x589a40;
                    },
                    _0x30e363 = this && this['__importDefault'] || function(_0x57c0fc) {
                        const _0x399ae5 = _0x4b72f1;
                        return _0x57c0fc && _0x57c0fc[_0x399ae5(0x16f1)] ? _0x57c0fc : {
                            'default': _0x57c0fc
                        };
                    };
                Object['defineProperty'](_0x43c8e1, '__esModule', {
                    'value': !0x0
                });
                const _0x3bde69 = _0x3f092f(_0x1dec87(0x5f07)),
                    _0x371ae9 = _0x30e363(_0x1dec87(0x169b4)),
                    _0xa83da9 = _0x30e363(_0x1dec87(0x1fd7)),
                    _0x151657 = _0x1dec87(0x16c14),
                    _0x2d4969 = _0x30e363(_0x1dec87(0xccae)),
                    _0x133a05 = _0x30e363(_0x1dec87(0x5103)),
                    _0x3e3b38 = _0x30e363(_0x1dec87(0x54e3));
                class _0x5d8f88 extends Phaser['Scene'] {
                    constructor() {
                        const _0x159033 = _0x4b72f1;
                        super({
                            'key': _0x371ae9[_0x159033(0xd2c)][_0x159033(0x1145)]
                        }), this[_0x159033(0x355)] = 0x1;
                    } ['SetToAutoRevive']() {
                        const _0x4d8565 = _0x4b72f1;
                        this[_0x4d8565(0xd85)] = !0x0;
                    } ['preload']() {} ['create']() {
                        const _0x36891c = _0x4b72f1;
                        this['autoRevive'] = !0x0;
                        let _0x24da84 = _0x3bde69[_0x36891c(0xd2c)][_0x36891c(0x1043)]['PlayerOptions'][_0x36891c(0x1ace)] ? _0xa83da9['default']['BGM_GameOver'] : _0xa83da9[_0x36891c(0xd2c)][_0x36891c(0x1641)];
                        _0x3bde69['default']['Sound'][_0x36891c(0x7f6)](_0x24da84, {
                            'volume': 1.4
                        }), this[_0x36891c(0x14b7)] = this[_0x36891c(0x18bd)][_0x36891c(0x568)](0.5 * this['renderer'][_0x36891c(0x173c)], 0.5 * this['renderer']['height'], 'introBG')['setAlpha'](0x0), this[_0x36891c(0x62d)] = this[_0x36891c(0x18bd)][_0x36891c(0x568)](0.5 * this['renderer']['width'], 0.3 * this['renderer'][_0x36891c(0x140e)], 'gameOver')['setScale'](_0x133a05[_0x36891c(0xd2c)][_0x36891c(0x15db)])['setAlpha'](0x1), this[_0x36891c(0x16f6)] = this[_0x36891c(0x18bd)]['image'](0.5 * this['renderer']['width'], 0.3 * this[_0x36891c(0x12f9)][_0x36891c(0x140e)], 'stageComplete')[_0x36891c(0x8a2)](0x0)[_0x36891c(0xdab)](0x1);
                        var _0x13a282 = Math['min'](this[_0x36891c(0x14b7)][_0x36891c(0xe75)], this[_0x36891c(0x14b7)][_0x36891c(0x828)]);
                        this[_0x36891c(0x355)] = _0x3bde69['IS_PORTRAIT'] ? this[_0x36891c(0x12f9)]['height'] / _0x13a282 : this[_0x36891c(0x12f9)][_0x36891c(0x173c)] / _0x13a282, this[_0x36891c(0x14b7)][_0x36891c(0x8a2)](5.1 * this[_0x36891c(0x355)], 5.1 * this[_0x36891c(0x355)]), this[_0x36891c(0x1ac3)] = this[_0x36891c(0x18bd)][_0x36891c(0x1990)](0x0, this[_0x36891c(0x12f9)]['height']), this[_0x36891c(0x1ac3)]['setScale']((0x0, _0x3bde69[_0x36891c(0x9c7)])());
                        const _0x1958e7 = _0x3bde69['SAFEAREA']['centerX'];
                        this['ReviveButton'] = new _0x151657[(_0x36891c(0x1a31))](this, _0x2d4969['default'][_0x36891c(0x146f)], {
                            'x': _0x1958e7,
                            'y': -0x3c,
                            'width': 0x60,
                            'height': 0x20
                        })['setScale'](0x0)['setOrigin'](0.5, 0x1)['setVisible'](!0x1), this['SceneContainer'][_0x36891c(0x18bd)](this['ReviveButton']), this[_0x36891c(0x15c4)] = new Phaser[(_0x36891c(0xbf2))][(_0x36891c(0x1ae9))](this, this['ReviveButton']['x'], this[_0x36891c(0xef3)]['y'] - 0x20, _0x3bde69[_0x36891c(0xd2c)][_0x36891c(0x1f1)][_0x36891c(0xb10)]('gameOver_revive'), {})[_0x36891c(0xf8e)](0.5, 0.5)[_0x36891c(0x8a2)](0x0)[_0x36891c(0x183f)](!0x1), _0x3bde69['default'][_0x36891c(0x1f1)]['scaleToMaxFast'](this[_0x36891c(0x15c4)], !0x1, 0x50), this[_0x36891c(0x1ac3)]['add'](this[_0x36891c(0x15c4)]), this[_0x36891c(0x1001)] = this[_0x36891c(0x8af)]['get']('rexPixelationPipeline')['add'](this['cameras'][_0x36891c(0x4cd)]), this[_0x36891c(0x1001)][_0x36891c(0xa86)] = 0x32, this['cameraFilter'][_0x36891c(0xe16)] = 0x32, this[_0x36891c(0x12a1)][_0x36891c(0x18bd)]({
                            'targets': this['cameraFilter'],
                            'pixelWidth': 0x1,
                            'pixelHeight': 0x1,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x9a9591 = _0x36891c;
                                this[_0x9a9591(0x199d)]();
                            }
                        }), this[_0x36891c(0x12a1)]['add']({
                            'targets': this[_0x36891c(0x14b7)],
                            'scaleY': this['fillScale'],
                            'scaleX': this['fillScale'],
                            'alpha': 0.4,
                            'duration': 0x320,
                            'ease': 'Linear'
                        }), this[_0x36891c(0x12e6)](), this[_0x36891c(0x7f7)]();
                    } ['MakeUIGrid']() {
                        const _0x1580be = _0x4b72f1;
                        let _0x1d47db = _0x3bde69[_0x1580be(0xd2c)][_0x1580be(0x1043)]['SceneManager'][_0x1580be(0x7ec)];
                        _0x1d47db[_0x1580be(0x4ff)](0x1, 0x1, !0x1), _0x1d47db['UI_grid'][_0x1580be(0x16a8)](0x0, 0x0, this['ReviveButton']);
                        let _0x5d150d = this['ReviveButton'];
                        _0x1d47db[_0x1580be(0x1475)](!0x1), _0x1d47db['UI_grid'][_0x1580be(0xb55)](_0x5d150d), _0x1d47db[_0x1580be(0x938)] = _0x5d150d, _0x3bde69['default'][_0x1580be(0x1043)]['SceneManager'][_0x1580be(0x6d2)][_0x1580be(0x5d8)](_0x1d47db), _0x1d47db[_0x1580be(0x1ad4)] = () => {}, this[_0x1580be(0x915)][_0x1580be(0x12b8)]({
                            'delay': 0x1e,
                            'callback': () => {
                                const _0x39b082 = _0x1580be;
                                _0x1d47db[_0x39b082(0x1475)](!0x0);
                            }
                        });
                    } ['makeAngelVFX']() {
                        const _0x25cdd5 = _0x4b72f1;
                        this[_0x25cdd5(0x6d4)] = this['add'][_0x25cdd5(0x105b)](0x0, 0x0, 'vfx', 'WhiteDot.png')['setScrollFactor'](0x0)[_0x25cdd5(0x8a2)](this[_0x25cdd5(0x12f9)]['width'], this['renderer'][_0x25cdd5(0x140e)])[_0x25cdd5(0xdab)](0x0)[_0x25cdd5(0xf8e)](0x0);
                        const _0x59c4ef = this[_0x25cdd5(0x183e)]['generateFrameNames']('angel', {
                            'start': 0x1,
                            'end': 0xa,
                            'zeroPad': 0x0,
                            'prefix': 'angel',
                            'suffix': '.png'
                        });
                        this['Angel'] = this['add'][_0x25cdd5(0x105b)](0.5 * this['renderer'][_0x25cdd5(0x173c)], 0.5 * this['renderer']['height'], 'angel'), this[_0x25cdd5(0x189f)][_0x25cdd5(0x183e)]['create']({
                            'key': 'angel',
                            'frames': _0x59c4ef,
                            'frameRate': 0x10,
                            'repeat': 0x0
                        }), this[_0x25cdd5(0x189f)][_0x25cdd5(0x35a)] = !0x1, this[_0x25cdd5(0x189f)]['setScale'](0x2 * _0x133a05['default']['PixelScale']), this['Angel'][_0x25cdd5(0xb4a)](0x3e8), this['Angel']['setTintFill'](0xffffbb), this[_0x25cdd5(0x189f)]['on']('animationcomplete', this[_0x25cdd5(0x780)][_0x25cdd5(0xf7e)](this));
                    } ['makeHandsVFX']() {
                        const _0xa9b48f = _0x4b72f1;
                        this[_0xa9b48f(0x183e)][_0xa9b48f(0x1756)]('angel', {
                            'start': 0x1,
                            'end': 0xa,
                            'zeroPad': 0x0,
                            'prefix': 'angel',
                            'suffix': '.png'
                        }), this['LeftHand'] = this[_0xa9b48f(0x18bd)]['sprite'](0.5 * this['renderer'][_0xa9b48f(0x173c)], 0.5 * this['renderer'][_0xa9b48f(0x140e)], 'enemiesM', 'hand_revive_01.png');
                        let _0x2be6f3 = this[_0xa9b48f(0x1433)][_0xa9b48f(0x183e)][_0xa9b48f(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x7,
                            'zeroPad': 0x2,
                            'prefix': 'hand_revive_',
                            'suffix': '.png'
                        });
                        this[_0xa9b48f(0x1433)][_0xa9b48f(0x35a)] = !0x1, this['LeftHand']['setScale'](0x2 * _0x133a05['default']['PixelScale']), this['LeftHand']['setDepth'](0x3e8), this['LeftHand'][_0xa9b48f(0x183e)][_0xa9b48f(0x6a8)]({
                            'key': 'revive',
                            'frames': _0x2be6f3,
                            'frameRate': 0x10
                        }), this[_0xa9b48f(0x1433)][_0xa9b48f(0xf8e)](0x1, 0.5), this['RightHand'] = this['add'][_0xa9b48f(0x105b)](0.5 * this['renderer'][_0xa9b48f(0x173c)], 0.5 * this['renderer'][_0xa9b48f(0x140e)], 'enemiesM', 'hand_revive_01.png'), this[_0xa9b48f(0x753)]['visible'] = !0x1, this['RightHand']['setScale'](0x2 * _0x133a05['default'][_0xa9b48f(0x15db)]), this['RightHand'][_0xa9b48f(0xb4a)](0x3e8), this['RightHand']['anims'][_0xa9b48f(0x6a8)]({
                            'key': 'revive',
                            'frames': _0x2be6f3,
                            'frameRate': 0x10
                        }), this[_0xa9b48f(0x753)][_0xa9b48f(0xf8e)](0x0, 0.5)[_0xa9b48f(0xb8d)](!0x0), this[_0xa9b48f(0x1433)]['on']('animationcomplete', this[_0xa9b48f(0x6bb)]['bind'](this));
                    } ['playReviveAnim']() {
                        const _0x2e413c = _0x4b72f1;
                        this['tweens'][_0x2e413c(0x18bd)]({
                            'targets': this[_0x2e413c(0x6d4)],
                            'alpha': 0x1,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'ease': 'Linear',
                            'delay': 0x1a9
                        }), this['tweens'][_0x2e413c(0x18bd)]({
                            'targets': this['Background'],
                            'alpha': 0x0,
                            'duration': 0x271,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        }), this[_0x2e413c(0x189f)][_0x2e413c(0x35a)] = !0x0, this[_0x2e413c(0x189f)]['play']('angel');
                    } ['playAutoRevive']() {
                        const _0xb4c582 = _0x4b72f1;
                        this['tweens']['add']({
                            'targets': this[_0xb4c582(0x6d4)],
                            'alpha': 0x1,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'ease': 'Linear',
                            'delay': 0x1a9
                        }), this[_0xb4c582(0x12a1)][_0xb4c582(0x18bd)]({
                            'targets': this[_0xb4c582(0x14b7)],
                            'alpha': 0x0,
                            'duration': 0x271,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        }), this[_0xb4c582(0x1433)][_0xb4c582(0x35a)] = !0x0, this[_0xb4c582(0x753)]['visible'] = !0x0, this['LeftHand'][_0xb4c582(0x902)]('revive'), this[_0xb4c582(0x753)][_0xb4c582(0x902)]('revive');
                    } ['EnableButtons']() {
                        const _0x4e8fc3 = _0x4b72f1;
                        this['ReviveButton']['setInteractive'](), this[_0x4e8fc3(0xef3)]['on']('pointerdown', () => {
                            const _0x3502f4 = _0x4e8fc3;
                            this[_0x3502f4(0xef3)][_0x3502f4(0x596)](), this[_0x3502f4(0x15d5)](), _0x3bde69[_0x3502f4(0xd2c)][_0x3502f4(0x1267)]['PlaySound'](_0xa83da9[_0x3502f4(0xd2c)][_0x3502f4(0x2b6)]), _0x3bde69[_0x3502f4(0xd2c)][_0x3502f4(0x1043)][_0x3502f4(0x10f6)]['revivals']--, _0x3bde69['default']['Core']['Player'][_0x3502f4(0x14e0)] <= 0x0 && _0x3bde69['default'][_0x3502f4(0x1043)]['Weapons'][_0x3502f4(0x1e6)](_0x6f385a => _0x6f385a['bulletType'] === _0x3e3b38[_0x3502f4(0xd2c)]['REVIVAL']) && _0x3bde69['default']['Core']['RemoveWeapon'](_0x3e3b38['default'][_0x3502f4(0x855)]), this[_0x3502f4(0x18aa)]();
                        }), this[_0x4e8fc3(0x12a1)][_0x4e8fc3(0x18bd)]({
                            'targets': [this[_0x4e8fc3(0xef3)], this[_0x4e8fc3(0x15c4)]],
                            'scale': 0x2 * _0x133a05[_0x4e8fc3(0xd2c)][_0x4e8fc3(0x15db)],
                            'duration': 0xfa,
                            'ease': 'Linear'
                        });
                    } ['HideReviveButton']() {
                        const _0x4c970c = _0x4b72f1;
                        this['tweens']['add']({
                            'targets': [this[_0x4c970c(0xef3)], this[_0x4c970c(0x15c4)]],
                            'alpha': 0x0,
                            'scale': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear'
                        }), this[_0x4c970c(0xef3)]['removeInteractive']();
                    } ['Revive']() {
                        const _0x31eb58 = _0x4b72f1;
                        _0x3bde69[_0x31eb58(0xd2c)][_0x31eb58(0x1043)][_0x31eb58(0x69e)][_0x31eb58(0xc0b)](), _0x3bde69[_0x31eb58(0xd2c)]['Core']['Player'][_0x31eb58(0x780)](0.5);
                    } ['ReviveAndBlast']() {
                        const _0x562265 = _0x4b72f1;
                        _0x3bde69[_0x562265(0xd2c)][_0x562265(0x1043)][_0x562265(0x69e)]['BackFromFinalGameOver'](), _0x3bde69['default'][_0x562265(0x1043)]['Player']['Revive'](0.5), _0x3bde69[_0x562265(0xd2c)][_0x562265(0x1043)][_0x562265(0x28b)](!0x0);
                    } ['OnIntroEnded']() {
                        const _0x3519e7 = _0x4b72f1;
                        this[_0x3519e7(0xd85)] ? this['playAutoRevive']() : (this['EnableButtons'](), this['MakeUIGrid']());
                    } ['update']() {}
                }
                _0x43c8e1['default'] = _0x5d8f88;
            };
