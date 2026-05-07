// Module 0x11c17
// Args: _0xaed2f4, _0x49b720, _0x59b804

export default (_0xaed2f4, _0x49b720, _0x59b804) => {
                'use strict';
                const _0x294f07 = a0_0x6932;
                var _0x38784b = this && this['__importDefault'] || function(_0x4c82c1) {
                    const _0x5d0b89 = a0_0x6932;
                    return _0x4c82c1 && _0x4c82c1['__esModule'] ? _0x4c82c1 : {
                        'default': _0x4c82c1
                    };
                };
                Object['defineProperty'](_0x49b720, '__esModule', {
                    'value': !0x0
                }), _0x49b720['B_Silf2'] = void 0x0;
                const _0x37bf0f = _0x38784b(_0x59b804(0xa14d)),
                    _0x1cbf55 = _0x38784b(_0x59b804(0x5f07)),
                    _0x494a5a = _0x38784b(_0x59b804(0x1fd7)),
                    _0x2bbd4a = _0x38784b(_0x59b804(0x5103)),
                    _0x596eab = _0x38784b(_0x59b804(0x7c1));
                class _0x18545b extends _0x37bf0f['default'] {
                    constructor(_0x3da8c3, _0x1ac9c2, _0xb553b4, _0x1f9236, _0x5072cd) {
                        const _0x26e73d = _0x294f07;
                        super(_0x3da8c3, _0x1ac9c2, _0xb553b4, 'vfx', 'HitBlack1.png', _0x1f9236, _0x5072cd), this[_0x26e73d(0x13a3)] = new Array(), this['positions'] = [], this['maxPositions'] = 0x64, this[_0x26e73d(0x7cd)] = 0xff0000, this[_0x26e73d(0x1906)] = !0x0, this['minAngleRotDeg'] = 0xa, this['maxAngleRotDeg'] = 0x14, this[_0x26e73d(0x192f)] = 0x1, this['trail'] = new _0x596eab['default'](this['scene'], 0x0, 0x0, 'vfx', 'Gradient4_4px.png', 0x18, !0x0)[_0x26e73d(0xb4a)](Number[_0x26e73d(0x1aaa)] - 0x3eb)[_0x26e73d(0x183f)](!0x1), this[_0x26e73d(0x3b8)]['follower'] = this, this['scene'][_0x26e73d(0x18bd)][_0x26e73d(0x1a88)](this[_0x26e73d(0x3b8)]), this[_0x26e73d(0xb1f)] = 0x0, this[_0x26e73d(0xe71)] = 0x1, this[_0x26e73d(0x1234)] = this['weapon'], this[_0x26e73d(0x5ef)] = this[_0x26e73d(0x1234)][_0x26e73d(0x6c5)], this[_0x26e73d(0x9e6)] = Phaser[_0x26e73d(0x24f)][_0x26e73d(0x54d)](this['minAngleRotDeg']), this['maxAngleRotDeg'] = Phaser[_0x26e73d(0x24f)]['DegToRad'](this['maxAngleRotDeg']);
                    } ['OnRecycle']() {
                        const _0x5ececb = _0x294f07;
                        var _0x326a95, _0x3f4a67, _0x31b0f6;
                        super['OnRecycle'](), this[_0x5ececb(0xcf9)][_0x5ececb(0xdf6)](0x10), this[_0x5ececb(0xcf9)][_0x5ececb(0x543)] = !0x1, this['totalTime'] = 0x0, this[_0x5ececb(0x177d)] = !0x1, null === (_0x326a95 = this[_0x5ececb(0x281)]) || void 0x0 === _0x326a95 || _0x326a95['stop'](), null === (_0x3f4a67 = this[_0x5ececb(0x1b03)]) || void 0x0 === _0x3f4a67 || _0x3f4a67[_0x5ececb(0x1a34)](), null === (_0x31b0f6 = this['despawnTween']) || void 0x0 === _0x31b0f6 || _0x31b0f6[_0x5ececb(0x1a34)](), this[_0x5ececb(0x183f)](!0x1), this[_0x5ececb(0x3b8)]['setVisible'](!0x1), this[_0x5ececb(0x3b8)][_0x5ececb(0xdab)](0x0), this[_0x5ececb(0x3b8)][_0x5ececb(0x138f)](), this[_0x5ececb(0x3b8)][_0x5ececb(0x103f)](), this[_0x5ececb(0x8a2)](0.5);
                        var _0x32e6d6 = this['trueWeapon']['targets'][this['trueWeapon']['enemyIndex'] % this[_0x5ececb(0x1234)][_0x5ececb(0xa76)]['length']];
                        if (this['trueWeapon'][_0x5ececb(0x124c)]++, this[_0x5ececb(0x4a1)][_0x5ececb(0x5f5)] >= 0x2 || this[_0x5ececb(0x4a1)][_0x5ececb(0x5f5)] >= 1.5 && this[_0x5ececb(0x3b8)]['setTexture']('vfx', 'Gradient4_6px.png'), _0x32e6d6) {
                            _0x1cbf55[_0x5ececb(0xd2c)][_0x5ececb(0x1267)][_0x5ececb(0x7f6)](_0x494a5a[_0x5ececb(0xd2c)]['MagicMissile'], {
                                'detune': -0x64 * this['indexInWeapon'],
                                'volume': 0.15
                            }, 0xc8, 0xc), this['isKilled'] = !0x1, this[_0x5ececb(0x3b9)](_0x32e6d6);
                            var _0x2176fd = this[_0x5ececb(0x1234)][_0x5ececb(0x124c)] % 0x2 == 0x0 ? 0x1 : -0x1;
                            this['x'] = this[_0x5ececb(0x1234)][_0x5ececb(0x105b)]['x'], this['y'] = this['trueWeapon'][_0x5ececb(0x105b)]['y'];
                            var _0x3d444e = new Phaser[(_0x5ececb(0x24f))][(_0x5ececb(0x1551))]();
                            _0x3d444e['x'] = this['x'], _0x3d444e['y'] = this['y'], _0x3d444e = this[_0x5ececb(0x1646)](this[_0x5ececb(0x18a7)]['x'], this['target']['y'], this[_0x5ececb(0x9e6)] * _0x2176fd + Math[_0x5ececb(0x9ad)]() * this[_0x5ececb(0x83e)] * _0x2176fd, _0x3d444e);
                            var _0x2deb27 = [this['x'], this['y'], _0x3d444e['x'], _0x3d444e['y'], this[_0x5ececb(0x18a7)]['x'], this[_0x5ececb(0x18a7)]['y']];
                            this[_0x5ececb(0xfc8)] = new Phaser['Curves']['Spline'](_0x2deb27);
                            var _0x2a9966 = new Phaser[(_0x5ececb(0x24f))][(_0x5ececb(0x1551))]();
                            this[_0x5ececb(0xfc8)][_0x5ececb(0x562)](0x0, _0x2a9966), this[_0x5ececb(0x726)](_0x2a9966['x'], _0x2a9966['y']), this['trail'][_0x5ececb(0x623)](_0x2a9966['x'], _0x2a9966['y']), this[_0x5ececb(0x3b8)]['setVisible'](!0x0), this[_0x5ececb(0x183f)](!0x0), this['setAlpha'](0x1), this['fadeInTween'] && (this[_0x5ececb(0x281)]['stop'](), this[_0x5ececb(0x6d2)][_0x5ececb(0x12a1)][_0x5ececb(0x393)](this[_0x5ececb(0x281)])), this[_0x5ececb(0x1b03)] && (this[_0x5ececb(0x1b03)][_0x5ececb(0x1a34)](), this['scene'][_0x5ececb(0x12a1)][_0x5ececb(0x393)](this['fadeOutTween'])), this[_0x5ececb(0x660)] && (this[_0x5ececb(0x660)]['stop'](), this[_0x5ececb(0x6d2)]['tweens'][_0x5ececb(0x393)](this[_0x5ececb(0x660)])), this['fadeInTween'] = this[_0x5ececb(0x6d2)]['tweens'][_0x5ececb(0x18bd)]({
                                'targets': this[_0x5ececb(0x3b8)],
                                'alpha': this['trailAlpha'],
                                'duration': 0xc8
                            }), this[_0x5ececb(0x1b09)] = _0x1cbf55[_0x5ececb(0xd2c)][_0x5ececb(0x1043)][_0x5ececb(0x6d2)]['time']['addEvent']({
                                'delay': this['duration'],
                                'callback': () => {
                                    const _0x297821 = _0x5ececb;
                                    this[_0x297821(0xcf9)]['enable'] = !0x0, this['fadeOutTween'] = this[_0x297821(0x6d2)][_0x297821(0x12a1)][_0x297821(0x18bd)]({
                                        'targets': this[_0x297821(0x3b8)],
                                        'alpha': 0x0,
                                        'duration': 0xc8,
                                        'onComplete': () => {
                                            const _0x542e2b = _0x297821;
                                            this[_0x542e2b(0x14fb)]();
                                        }
                                    }), this['scaleTween'] = this['scene']['tweens'][_0x297821(0x18bd)]({
                                        'targets': this,
                                        'scale': 0x1 * _0x2bbd4a['default'][_0x297821(0x15db)] * this['weapon']['PArea'],
                                        'alpha': 0x0,
                                        'duration': 0x78
                                    }), _0x1cbf55[_0x297821(0xd2c)][_0x297821(0x1043)][_0x297821(0x14d8)][_0x297821(0x49c)] || this['setVisible'](!0x1);
                                }
                            }), this['explodeTimer'][_0x5ececb(0x226)] = 'SILF explode';
                        } else this['DeSpawn']();
                    } ['DeSpawn']() {
                        const _0x5e3172 = _0x294f07;
                        this[_0x5e3172(0x4a1)][_0x5e3172(0x1007)] && this[_0x5e3172(0x4a1)][_0x5e3172(0x155a)](this['x'], this['y']), this['isKilled'] = !0x0, this[_0x5e3172(0x3b8)]['setVisible'](!0x1), this['trail']['setAlpha'](0x0), this['body']['enable'] = !0x1, this['setScale'](0x0), this[_0x5e3172(0x183f)](!0x1), super['DeSpawn']();
                    } ['SetTarget'](_0x2959ec) {
                        const _0x46faa8 = _0x294f07;
                        super[_0x46faa8(0x3b9)](_0x2959ec);
                    } ['Update'](_0x2afb06) {
                        const _0x417777 = _0x294f07;
                        if (!this[_0x417777(0x1906)]) {
                            this['totalTime'] += _0x2afb06, this['totalTime'] > this[_0x417777(0x5ef)] && (this[_0x417777(0xb78)] = this[_0x417777(0x5ef)]);
                            var _0x186735 = new Phaser[(_0x417777(0x24f))][(_0x417777(0x1551))]();
                            this[_0x417777(0xfc8)]['getPointAt'](this[_0x417777(0xb78)] / this[_0x417777(0x5ef)], _0x186735), this[_0x417777(0x726)](_0x186735['x'], _0x186735['y']), this[_0x417777(0x3b8)][_0x417777(0x12fc)]();
                        }
                    } ['rotate_point'](_0x366571, _0x204b64, _0x42350f, _0x411ec0) {
                        const _0x355688 = _0x294f07;
                        var _0x476999 = Math[_0x355688(0xc80)](_0x42350f),
                            _0x17f92b = Math['cos'](_0x42350f);
                        _0x411ec0['x'] -= _0x366571, _0x411ec0['y'] -= _0x204b64;
                        var _0x29fee9 = _0x411ec0['x'] * _0x17f92b - _0x411ec0['y'] * _0x476999,
                            _0x38da80 = _0x411ec0['x'] * _0x476999 + _0x411ec0['y'] * _0x17f92b;
                        return _0x411ec0['x'] = _0x29fee9 + _0x366571, _0x411ec0['y'] = _0x38da80 + _0x204b64, _0x411ec0;
                    }
                }
                _0x49b720['B_Silf2'] = _0x18545b, _0x49b720['default'] = _0x18545b;
            };
