// Module 0x544e
// Args: _0x34f532, _0x1a7927, _0x18d7bb

export default (_0x34f532, _0x1a7927, _0x18d7bb) => {
                'use strict';
                const _0x2ed4e6 = a0_0x6932;
                var _0x56b992 = this && this['__importDefault'] || function(_0x208760) {
                    const _0x1b850f = _0x2ed4e6;
                    return _0x208760 && _0x208760[_0x1b850f(0x16f1)] ? _0x208760 : {
                        'default': _0x208760
                    };
                };
                Object['defineProperty'](_0x1a7927, '__esModule', {
                    'value': !0x0
                }), _0x1a7927['B_Silf'] = void 0x0;
                const _0x305a43 = _0x56b992(_0x18d7bb(0xa14d)),
                    _0x27f056 = _0x56b992(_0x18d7bb(0x5f07)),
                    _0x4dc7a5 = _0x18d7bb(0x18304),
                    _0x41af55 = _0x56b992(_0x18d7bb(0x1fd7)),
                    _0x1d3f26 = _0x56b992(_0x18d7bb(0x5103)),
                    _0x72a806 = _0x56b992(_0x18d7bb(0x7c1));
                class _0x44dbc0 extends _0x305a43['default'] {
                    constructor(_0x2a4aa2, _0x16d8c0, _0x3eb361, _0x11dc01, _0x36c46b) {
                        const _0x3233a1 = _0x2ed4e6;
                        super(_0x2a4aa2, _0x16d8c0, _0x3eb361, 'vfx', 'HitWhite1.png', _0x11dc01, _0x36c46b), this[_0x3233a1(0x13a3)] = new Array(), this['positions'] = [], this['maxPositions'] = 0x64, this[_0x3233a1(0x1906)] = !0x0, this[_0x3233a1(0x9e6)] = 0xa, this['maxAngleRotDeg'] = 0x14, this['trailAlpha'] = 0.4, this['frameNameBeam'] = 'Gradient3_4px.png', this[_0x3233a1(0xf72)] = 'HitWhite1.png', this['startingAlpha'] = 0.5, this[_0x3233a1(0x14e7)] = _0x4dc7a5[_0x3233a1(0x10fc)][_0x3233a1(0x1811)], this['_speed'] = 0x0, this['alpha'] = this[_0x3233a1(0xb96)], this['trueWeapon'] = this['weapon'], this[_0x3233a1(0x5ef)] = this[_0x3233a1(0x1234)][_0x3233a1(0x6c5)], this['minAngleRotDeg'] = Phaser['Math'][_0x3233a1(0x54d)](this['minAngleRotDeg']), this[_0x3233a1(0x83e)] = Phaser['Math'][_0x3233a1(0x54d)](this['maxAngleRotDeg']);
                    } ['SetBeamTextureFromArea']() {
                        const _0x2aee36 = _0x2ed4e6;
                        this[_0x2aee36(0x381)](this[_0x2aee36(0xf72)]), this[_0x2aee36(0x4a1)][_0x2aee36(0x5f5)] >= 0x2 ? this['trail'][_0x2aee36(0x994)]('vfx', 'Gradient3_8px.png') : this[_0x2aee36(0x4a1)][_0x2aee36(0x5f5)] >= 1.5 ? this['trail']['setTexture']('vfx', 'Gradient3_6px.png') : this['trail'][_0x2aee36(0x994)]('vfx', this['frameNameBeam']);
                    } ['MakeTrail']() {
                        const _0x4c7ba3 = _0x2ed4e6;
                        this[_0x4c7ba3(0x3b8)] = new _0x72a806[(_0x4c7ba3(0xd2c))](this[_0x4c7ba3(0x6d2)], 0x0, 0x0, 'vfx', this[_0x4c7ba3(0x867)], 0x18, !0x0)[_0x4c7ba3(0xb4a)](Number[_0x4c7ba3(0x1aaa)] - 0x3eb)[_0x4c7ba3(0x183f)](!0x1)['setBlendMode'](this[_0x4c7ba3(0x14e7)]), this[_0x4c7ba3(0x3b8)][_0x4c7ba3(0x1807)] = this, this[_0x4c7ba3(0x6d2)]['add'][_0x4c7ba3(0x1a88)](this[_0x4c7ba3(0x3b8)]);
                    } ['OnRecycle']() {
                        const _0x23fbdd = _0x2ed4e6;
                        var _0xeeddf4, _0x43e5d3, _0x24aa53;
                        super['OnRecycle'](), this[_0x23fbdd(0xcf9)][_0x23fbdd(0xdf6)](0x10), this['body']['enable'] = !0x1, this[_0x23fbdd(0xb78)] = 0x0, this[_0x23fbdd(0x177d)] = !0x1, null === (_0xeeddf4 = this['fadeInTween']) || void 0x0 === _0xeeddf4 || _0xeeddf4['stop'](), null === (_0x43e5d3 = this[_0x23fbdd(0x1b03)]) || void 0x0 === _0x43e5d3 || _0x43e5d3[_0x23fbdd(0x1a34)](), null === (_0x24aa53 = this['despawnTween']) || void 0x0 === _0x24aa53 || _0x24aa53[_0x23fbdd(0x1a34)](), this[_0x23fbdd(0x183f)](!0x1), this['trail'] || this['MakeTrail'](), this[_0x23fbdd(0x3b8)]['setVisible'](!0x1), this[_0x23fbdd(0x3b8)]['setAlpha'](0x0), this[_0x23fbdd(0x3b8)][_0x23fbdd(0x138f)](), this['trail'][_0x23fbdd(0x103f)](), this[_0x23fbdd(0x8a2)](0.5);
                        var _0x1d45dc = this['trueWeapon'][_0x23fbdd(0xa76)][this['trueWeapon'][_0x23fbdd(0x124c)] % this[_0x23fbdd(0x1234)]['targets'][_0x23fbdd(0xed9)]];
                        if (this[_0x23fbdd(0x1234)][_0x23fbdd(0x124c)]++, this['SetBeamTextureFromArea'](), _0x1d45dc) {
                            _0x27f056[_0x23fbdd(0xd2c)][_0x23fbdd(0x1267)][_0x23fbdd(0x7f6)](_0x41af55[_0x23fbdd(0xd2c)][_0x23fbdd(0x9ca)], {
                                'detune': -0x64 * this['indexInWeapon'],
                                'volume': 0.15
                            }, 0xc8, 0xc), this['isKilled'] = !0x1, this[_0x23fbdd(0x3b9)](_0x1d45dc);
                            var _0x29c8eb = this[_0x23fbdd(0x1234)]['enemyIndex'] % 0x2 == 0x0 ? 0x1 : -0x1;
                            this['x'] = this[_0x23fbdd(0x1234)][_0x23fbdd(0x105b)]['x'], this['y'] = this['trueWeapon']['sprite']['y'];
                            var _0xdaf470 = new Phaser[(_0x23fbdd(0x24f))][(_0x23fbdd(0x1551))]();
                            _0xdaf470['x'] = this['x'], _0xdaf470['y'] = this['y'], _0xdaf470 = this['rotate_point'](this['target']['x'], this['target']['y'], this[_0x23fbdd(0x9e6)] * _0x29c8eb + Math[_0x23fbdd(0x9ad)]() * this['maxAngleRotDeg'] * _0x29c8eb, _0xdaf470);
                            var _0x107351 = [this['x'], this['y'], _0xdaf470['x'], _0xdaf470['y'], this[_0x23fbdd(0x18a7)]['x'], this['target']['y']];
                            this[_0x23fbdd(0xfc8)] = new Phaser['Curves'][(_0x23fbdd(0x64b))](_0x107351);
                            var _0x15f4a4 = new Phaser[(_0x23fbdd(0x24f))][(_0x23fbdd(0x1551))]();
                            this[_0x23fbdd(0xfc8)]['getPointAt'](0x0, _0x15f4a4), this['setPosition'](_0x15f4a4['x'], _0x15f4a4['y']), this[_0x23fbdd(0x3b8)][_0x23fbdd(0x623)](_0x15f4a4['x'], _0x15f4a4['y']), this[_0x23fbdd(0x3b8)][_0x23fbdd(0x183f)](!0x0), this['setVisible'](!0x0), this[_0x23fbdd(0xdab)](0x1), this[_0x23fbdd(0x281)] && (this[_0x23fbdd(0x281)][_0x23fbdd(0x1a34)](), this['scene']['tweens'][_0x23fbdd(0x393)](this[_0x23fbdd(0x281)])), this['fadeOutTween'] && (this[_0x23fbdd(0x1b03)][_0x23fbdd(0x1a34)](), this['scene'][_0x23fbdd(0x12a1)][_0x23fbdd(0x393)](this[_0x23fbdd(0x1b03)])), this[_0x23fbdd(0x660)] && (this['scaleTween']['stop'](), this['scene']['tweens'][_0x23fbdd(0x393)](this['scaleTween'])), this[_0x23fbdd(0x281)] = this['scene']['tweens'][_0x23fbdd(0x18bd)]({
                                'targets': this[_0x23fbdd(0x3b8)],
                                'alpha': this[_0x23fbdd(0x192f)],
                                'duration': 0xc8
                            }), this['explodeTimer'] = _0x27f056[_0x23fbdd(0xd2c)]['Core']['scene'][_0x23fbdd(0x915)][_0x23fbdd(0x12b8)]({
                                'delay': this['duration'],
                                'callback': () => {
                                    const _0x4ab952 = _0x23fbdd;
                                    this['body'][_0x4ab952(0x543)] = !0x0, this['fadeOutTween'] = this[_0x4ab952(0x6d2)][_0x4ab952(0x12a1)]['add']({
                                        'targets': this[_0x4ab952(0x3b8)],
                                        'alpha': 0x0,
                                        'duration': 0xc8,
                                        'onComplete': () => {
                                            const _0xf85eb3 = _0x4ab952;
                                            this[_0xf85eb3(0x14fb)]();
                                        }
                                    }), this[_0x4ab952(0x660)] = this['scene'][_0x4ab952(0x12a1)]['add']({
                                        'targets': this,
                                        'scale': 0x1 * _0x1d3f26['default'][_0x4ab952(0x15db)] * this['weapon'][_0x4ab952(0x5f5)],
                                        'alpha': 0x0,
                                        'duration': 0x78
                                    }), _0x27f056[_0x4ab952(0xd2c)]['Core']['PlayerOptions']['FlashingVFXEnabled'] || this[_0x4ab952(0x183f)](!0x1);
                                }
                            }), this[_0x23fbdd(0x1b09)][_0x23fbdd(0x226)] = 'SILF explode';
                        } else this['DeSpawn']();
                    } ['DeSpawn']() {
                        const _0x5bb9ab = _0x2ed4e6;
                        this[_0x5bb9ab(0x4a1)][_0x5bb9ab(0x1007)] && this['weapon'][_0x5bb9ab(0x155a)](this['x'], this['y']), this[_0x5bb9ab(0x1906)] = !0x0, this['trail']['setVisible'](!0x1), this[_0x5bb9ab(0x3b8)]['setAlpha'](0x0), this['body'][_0x5bb9ab(0x543)] = !0x1, this['setScale'](0x0), this[_0x5bb9ab(0x183f)](!0x1), super['DeSpawn']();
                    } ['SetTarget'](_0x5dd432) {
                        super['SetTarget'](_0x5dd432);
                    } ['Update'](_0x2d7e2e) {
                        const _0x4d89e2 = _0x2ed4e6;
                        if (!this[_0x4d89e2(0x1906)]) {
                            this['totalTime'] += _0x2d7e2e, this[_0x4d89e2(0xb78)] > this['duration'] && (this[_0x4d89e2(0xb78)] = this[_0x4d89e2(0x5ef)]);
                            var _0x3f4eab = new Phaser[(_0x4d89e2(0x24f))][(_0x4d89e2(0x1551))]();
                            this[_0x4d89e2(0xfc8)]['getPointAt'](this[_0x4d89e2(0xb78)] / this['duration'], _0x3f4eab), this['setPosition'](_0x3f4eab['x'], _0x3f4eab['y']), this[_0x4d89e2(0x3b8)][_0x4d89e2(0x12fc)]();
                        }
                    } ['rotate_point'](_0x41df01, _0x5cf82c, _0x112b87, _0x2e5900) {
                        const _0x4a6925 = _0x2ed4e6;
                        var _0x44910d = Math[_0x4a6925(0xc80)](_0x112b87),
                            _0x3b2dd4 = Math[_0x4a6925(0xd7e)](_0x112b87);
                        _0x2e5900['x'] -= _0x41df01, _0x2e5900['y'] -= _0x5cf82c;
                        var _0x242e77 = _0x2e5900['x'] * _0x3b2dd4 - _0x2e5900['y'] * _0x44910d,
                            _0x1f9c18 = _0x2e5900['x'] * _0x44910d + _0x2e5900['y'] * _0x3b2dd4;
                        return _0x2e5900['x'] = _0x242e77 + _0x41df01, _0x2e5900['y'] = _0x1f9c18 + _0x5cf82c, _0x2e5900;
                    }
                }
                _0x1a7927['B_Silf'] = _0x44dbc0, _0x1a7927['default'] = _0x44dbc0;
            };
