// Module 0xce4a
// Args: _0x23a109, _0x5a6fe4, _0x11863f

export default (_0x23a109, _0x5a6fe4, _0x11863f) => {
                'use strict';
                const _0x4d3fbe = a0_0x6932;
                var _0x472d05 = this && this['__importDefault'] || function(_0x38356a) {
                    const _0x55d258 = a0_0x6932;
                    return _0x38356a && _0x38356a['__esModule'] ? _0x38356a : {
                        'default': _0x38356a
                    };
                };
                Object['defineProperty'](_0x5a6fe4, '__esModule', {
                    'value': !0x0
                }), _0x5a6fe4['B_Lightning'] = void 0x0;
                const _0x543683 = _0x472d05(_0x11863f(0xa14d)),
                    _0x1757ff = _0x472d05(_0x11863f(0x5f07)),
                    _0x2f97ed = _0x472d05(_0x11863f(0x7c1)),
                    _0x3a0f08 = _0x11863f(0x18304),
                    _0x17031e = _0x472d05(_0x11863f(0x1fd7)),
                    _0x59b412 = _0x472d05(_0x11863f(0x5103));
                class _0x283227 extends _0x543683['default'] {
                    constructor(_0x2ff52f, _0x5da603, _0x20c6db, _0x3894f1, _0x57c88e) {
                        const _0xd5df08 = _0x4d3fbe;
                        super(_0x2ff52f, _0x5da603, _0x20c6db, 'vfx', 'HitRed2.png', _0x3894f1, _0x57c88e), this['trail'] = new _0x2f97ed[(_0xd5df08(0xd2c))](this['scene'], 0x0, 0x0, 'vfx', 'Lightning3.png', 0x10, !0x0), this['trail'][_0xd5df08(0x1807)] = this, this['trail']['setScale'](0x1), this[_0xd5df08(0x3b8)]['setDepth'](Number['MAX_SAFE_INTEGER'] - 0x3e8), this['trail']['setVisible'](!0x1), this[_0xd5df08(0x6d2)][_0xd5df08(0x18bd)][_0xd5df08(0x1a88)](this['trail']), this['setVisible'](!0x1), this[_0xd5df08(0x177d)] = !0x1, this['_speed'] = 0x0, this[_0xd5df08(0x523)] = _0x2ff52f['scene'][_0xd5df08(0x18bd)][_0xd5df08(0x523)]()[_0xd5df08(0x950)]([0xffff, 0xff, 0x88ff, 0xffffff][_0x57c88e % 0x4], 0.15)['fillCircle'](0x0, 0x0, 0x8)['setBlendMode'](_0x3a0f08['BlendModes'][_0xd5df08(0x1811)])['setVisible'](!0x1);
                    } ['OnRecycle']() {
                        const _0x3f7559 = _0x4d3fbe;
                        var _0x597079, _0x4149cd;
                        super[_0x3f7559(0x5ce)](), this['body']['setCircle'](0x10), null === (_0x597079 = this['moveTween']) || void 0x0 === _0x597079 || _0x597079['stop'](), null === (_0x4149cd = this['despawnTween']) || void 0x0 === _0x4149cd || _0x4149cd['stop'](), this[_0x3f7559(0x183f)](!0x1), this['trail'][_0x3f7559(0x183f)](!0x1), Phaser[_0x3f7559(0x24f)][_0x3f7559(0x82a)][_0x3f7559(0x198c)]([0x0, 0x1, 0x2]);
                        var _0x448f6b = this[_0x3f7559(0x4a1)][_0x3f7559(0x1989)],
                            _0x3cab10 = new Phaser[(_0x3f7559(0x24f))][(_0x3f7559(0x1551))](_0x1757ff[_0x3f7559(0xd2c)][_0x3f7559(0x1043)][_0x3f7559(0x10f6)]['x'] - 0.5 * this['scene'][_0x3f7559(0x12f9)]['width'], _0x1757ff[_0x3f7559(0xd2c)][_0x3f7559(0x1043)]['Player']['y'] - 0.5 * this['scene']['renderer']['height']);
                        if (this[_0x3f7559(0x3b8)]['clearPositions'](), this[_0x3f7559(0xcf9)]['enable'] = !0x1, this[_0x3f7559(0x8a2)](0.5 * _0x59b412['default'][_0x3f7559(0x15db)] * this['weapon']['PArea']), _0x448f6b['x'] = _0x3cab10['x'], _0x448f6b['y'] = _0x3cab10['y'], this[_0x3f7559(0x18a7)] = this['AimForRandomEnemyInScreen'](_0x448f6b), this['target']) {
                            var _0x5068fb = this[_0x3f7559(0x18a7)]['x'],
                                _0x559f48 = this['target']['y'];
                            this['x'] = _0x5068fb, this['y'] = _0x1757ff[_0x3f7559(0xd2c)][_0x3f7559(0x1043)][_0x3f7559(0x10f6)]['y'] - 0.6 * this[_0x3f7559(0x6d2)][_0x3f7559(0x12f9)][_0x3f7559(0x140e)], this[_0x3f7559(0x3b8)][_0x3f7559(0x623)](this['x'], this['y']), this[_0x3f7559(0x3b8)][_0x3f7559(0x183f)](!0x0), this[_0x3f7559(0x32b)] = this[_0x3f7559(0x6d2)][_0x3f7559(0x12a1)]['add']({
                                'targets': this,
                                'y': _0x559f48,
                                'duration': 0x46,
                                'onComplete': () => {
                                    const _0x10e0fa = _0x3f7559;
                                    this[_0x10e0fa(0x990)] = [], this[_0x10e0fa(0xcf9)][_0x10e0fa(0x543)] = !0x0, _0x1757ff['default'][_0x10e0fa(0x1043)]['PlayerOptions'][_0x10e0fa(0x49c)] && (this['graphics'][_0x10e0fa(0x726)](_0x5068fb, _0x559f48), this[_0x10e0fa(0x523)]['setVisible'](!0x0), this['graphics'][_0x10e0fa(0x8a2)](0x0), this['graphics'][_0x10e0fa(0xb4a)](this['y'] - _0x1757ff[_0x10e0fa(0xd2c)][_0x10e0fa(0x1043)][_0x10e0fa(0x10f6)]['y'] - 0.5 * this['scene'][_0x10e0fa(0x12f9)][_0x10e0fa(0x140e)])), this[_0x10e0fa(0x4a1)]['explodeOnExpire'] && this['weapon'][_0x10e0fa(0x155a)](this['x'], this['y']), _0x1757ff[_0x10e0fa(0xd2c)][_0x10e0fa(0x1267)][_0x10e0fa(0x7f6)](_0x17031e[_0x10e0fa(0xd2c)]['Lightning'], {
                                        'detune': -0x64 * this[_0x10e0fa(0x19c4)],
                                        'volume': 0.6,
                                        'rate': 0x2
                                    }, 0xc8, 0x4), this['despawnTween'] = this[_0x10e0fa(0x6d2)][_0x10e0fa(0x12a1)][_0x10e0fa(0x18bd)]({
                                        'targets': this['graphics'],
                                        'scale': this['weapon'][_0x10e0fa(0x5f5)],
                                        'duration': 0x3c,
                                        'onComplete': () => {
                                            const _0xe8dd6f = _0x10e0fa;
                                            this[_0xe8dd6f(0x3b8)]['setVisible'](!0x1), this[_0xe8dd6f(0x523)]['setVisible'](!0x1), this[_0xe8dd6f(0x14fb)]();
                                        }
                                    });
                                }
                            });
                        } else this['DeSpawn']();
                    } ['Update']() {
                        const _0x37bce7 = _0x4d3fbe;
                        this[_0x37bce7(0x3b8)][_0x37bce7(0x12fc)]();
                    }
                }
                _0x5a6fe4['B_Lightning'] = _0x283227, _0x5a6fe4['default'] = _0x283227;
            };
