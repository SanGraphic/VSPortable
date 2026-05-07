// Module 0x7969
// Args: _0x720d2d, _0x109872, _0x12e2d9

export default (_0x720d2d, _0x109872, _0x12e2d9) => {
                'use strict';
                const _0x45e6a7 = a0_0x6932;
                var _0x43a72b = this && this['__importDefault'] || function(_0x3802b9) {
                    const _0x2c39df = a0_0x6932;
                    return _0x3802b9 && _0x3802b9['__esModule'] ? _0x3802b9 : {
                        'default': _0x3802b9
                    };
                };
                Object['defineProperty'](_0x109872, '__esModule', {
                    'value': !0x0
                }), _0x109872['B_Legionnaire'] = void 0x0;
                const _0x34a7f3 = _0x43a72b(_0x12e2d9(0x15dd)),
                    _0xcac455 = _0x43a72b(_0x12e2d9(0xdfbc)),
                    _0x3d87fc = _0x43a72b(_0x12e2d9(0x5103)),
                    _0x2ebc98 = _0x43a72b(_0x12e2d9(0x5f07)),
                    _0x19c4b4 = _0x43a72b(_0x12e2d9(0xa14d));
                class _0xd76f52 extends _0x19c4b4['default'] {
                    constructor(_0xe8186a, _0x27dff4, _0x4c071b, _0x4f8114, _0x42a410) {
                        const _0x46f7c0 = _0x45e6a7;
                        super(_0xe8186a, _0x27dff4, _0x4c071b, 'vfx', 'Rings3.png', _0x4f8114, _0x42a410), this[_0x46f7c0(0xb1f)] = 0x2, this['tints'] = [
                            [0x444444, 0xff4444, 0x444444, 0xff4444],
                            [0xffe0e0, 0x0, 0xffe0e0, 0x0],
                            [0xffe0e0, 0xff0000, 0xffe0e0, 0xff0000],
                            [0xffe0e0, 0x880000, 0xffe0e0, 0x880000]
                        ], this[_0x46f7c0(0x1252)] = !0x1;
                        let _0x2078ba = _0x34a7f3[_0x46f7c0(0xd2c)][_0x2ebc98[_0x46f7c0(0xd2c)][_0x46f7c0(0x1043)][_0x46f7c0(0x14d8)]['SelectedCharacter']];
                        _0x2078ba || (_0x2078ba = _0x34a7f3[_0x46f7c0(0xd2c)][_0xcac455['default'][_0x46f7c0(0x13d8)]]);
                        let _0x135c80 = _0x2078ba[0x0],
                            _0x579fa5 = null;
                        _0x579fa5 = _0x135c80[_0x46f7c0(0x5cf)] ? _0x135c80['skins'][_0x135c80[_0x46f7c0(0xffa)] % _0x135c80['skins'][_0x46f7c0(0xed9)]] : _0x135c80;
                        const _0x7df968 = this['anims']['generateFrameNames'](_0x579fa5[_0x46f7c0(0xacb)], {
                            'start': 0x1,
                            'end': _0x579fa5[_0x46f7c0(0x3ff)],
                            'zeroPad': 0x2,
                            'prefix': _0x579fa5['spriteName'][_0x46f7c0(0xa0d)]('01.png', ''),
                            'suffix': '.png'
                        });
                        let _0x10e0a9 = _0x579fa5[_0x46f7c0(0xc43)] ? _0x579fa5['walkFrameRate'] : 0x8;
                        this['anims'][_0x46f7c0(0x6a8)]({
                            'key': 'walk',
                            'frames': _0x7df968,
                            'frameRate': _0x10e0a9,
                            'repeat': -0x1
                        }), this['anims'][_0x46f7c0(0x902)]('walk');
                        let _0x5ad00a = this[_0x46f7c0(0x51a)][this[_0x46f7c0(0x19c4)] % this['tints'][_0x46f7c0(0xed9)]];
                        this['setTint'](_0x5ad00a[0x0], _0x5ad00a[0x1], _0x5ad00a[0x2], _0x5ad00a[0x3]), this[_0x46f7c0(0xdab)](0x0), this[_0x46f7c0(0x131f)] = this['weapon'];
                    }
                    get['TrueSpeed']() {
                        const _0x38903d = _0x45e6a7;
                        let _0x4b4070 = _0x3d87fc[_0x38903d(0xd2c)][_0x38903d(0x1300)] * _0x2ebc98['default']['Core'][_0x38903d(0x10f6)][_0x38903d(0x1205)];
                        return this[_0x38903d(0x4a1)]['PSpeed'] * _0x4b4070 * this['_speed'];
                    } ['OnRecycle']() {
                        const _0x197aa4 = _0x45e6a7;
                        var _0x2d7e3b, _0x41c5ed;
                        if (super[_0x197aa4(0x5ce)](), this[_0x197aa4(0x1252)]) return;
                        this[_0x197aa4(0x1252)] = !0x0, this[_0x197aa4(0x183e)]['play']('walk'), this[_0x197aa4(0x429)](!0x1), this['setFlipX'](this[_0x197aa4(0xcf9)]['velocity']['x'] < 0x0);
                        let _0x4e5c8c = Math[_0x197aa4(0x1981)](0x1, this[_0x197aa4(0x4a1)][_0x197aa4(0x5f5)] - 0.4);
                        this['setScale'](_0x4e5c8c), this[_0x197aa4(0x4c7)] = !0x0, this['setAlpha'](0x0), null === (_0x2d7e3b = this['alphaTween']) || void 0x0 === _0x2d7e3b || _0x2d7e3b['stop'](), this[_0x197aa4(0x1322)] = this['scene'][_0x197aa4(0x12a1)][_0x197aa4(0x18bd)]({
                            'targets': this,
                            'alpha': 0.65,
                            'duration': 0xc8
                        }), null === (_0x41c5ed = this[_0x197aa4(0x6b9)]) || void 0x0 === _0x41c5ed || _0x41c5ed[_0x197aa4(0x1a34)](), this[_0x197aa4(0x6b9)] = this[_0x197aa4(0x6d2)][_0x197aa4(0x12a1)][_0x197aa4(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': this['weapon']['PDuration'],
                            'onStart': () => {
                                const _0x38c5ab = _0x197aa4;
                                this[_0x38c5ab(0x4c7)] = !0x1, this['anims'][_0x38c5ab(0x1a34)](), this[_0x38c5ab(0x19c8)](0x0, 0x0);
                            },
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x1eaa0d = _0x45e6a7;
                        super[_0x1eaa0d(0x14fb)](), this[_0x1eaa0d(0x1252)] = !0x1;
                    } ['Update'](_0x22571d) {
                        const _0x5f36e4 = _0x45e6a7;
                        if (super[_0x5f36e4(0xa9f)](_0x22571d), this[_0x5f36e4(0x4c7)]) {
                            let _0x41464d = this['y'] + 0.35 * this['displayHeight'];
                            this['TrueWeapon']['SmokeEmitter'][_0x5f36e4(0x108b)](this['x'], _0x41464d);
                        }
                    }
                }
                _0x109872['B_Legionnaire'] = _0xd76f52, _0x109872['default'] = _0xd76f52;
            };
