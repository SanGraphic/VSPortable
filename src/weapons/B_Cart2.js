// Module 0x9494
// Args: _0x1cf6e7, _0xd0c821, _0x100b86

export default (_0x1cf6e7, _0xd0c821, _0x100b86) => {
                'use strict';
                const _0x1c1278 = a0_0x6932;
                var _0x54a2b6 = this && this['__importDefault'] || function(_0x40204b) {
                    const _0x2a28ba = _0x1c1278;
                    return _0x40204b && _0x40204b[_0x2a28ba(0x16f1)] ? _0x40204b : {
                        'default': _0x40204b
                    };
                };
                Object['defineProperty'](_0xd0c821, '__esModule', {
                    'value': !0x0
                }), _0xd0c821['B_Cart2'] = void 0x0;
                const _0x5103c8 = _0x54a2b6(_0x100b86(0xa14d)),
                    _0x25328c = _0x54a2b6(_0x100b86(0x5f07)),
                    _0x50a877 = _0x54a2b6(_0x100b86(0x1fd7));
                class _0x3fa887 extends _0x5103c8['default'] {
                    constructor(_0x2f6d08, _0x1b9d16, _0x588298, _0x4a139f, _0x15fd7c) {
                        const _0x58dbfc = _0x1c1278;
                        super(_0x2f6d08, _0x1b9d16, _0x588298, 'vfx', 'CartEnd_0.png', _0x4a139f, _0x15fd7c), this['isGoingRight'] = !0x0, this[_0x58dbfc(0x6dc)] = 0x0, this[_0x58dbfc(0xc8f)] = 0x0, this['makeSparks'] = !0x0, this['scene'][_0x58dbfc(0x1585)][_0x58dbfc(0x1cf)]['on']('worldbounds', this[_0x58dbfc(0x1851)], this), this[_0x58dbfc(0x125b)] = this[_0x58dbfc(0x6d2)][_0x58dbfc(0x18bd)][_0x58dbfc(0x1791)]('vfx'), this['PfxEmitter']['createEmitter']({
                            'frame': ['PfxYellow.png'],
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x1,
                            'lifespan': 0xc8,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x58dbfc(0x246)] = this[_0x58dbfc(0xb1f)];
                        let _0x23d71c = this[_0x58dbfc(0x183e)][_0x58dbfc(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': 0x1d,
                            'zeroPad': 0x0,
                            'prefix': 'CartEnd_',
                            'suffix': '.png'
                        });
                        this[_0x58dbfc(0x183e)][_0x58dbfc(0x6a8)]({
                            'key': 'end',
                            'frames': _0x23d71c,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), _0x23d71c = this['anims']['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': 0x0,
                            'zeroPad': 0x0,
                            'prefix': 'CartEnd_',
                            'suffix': '.png'
                        }), this['anims'][_0x58dbfc(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x23d71c,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), this['trueWeapon'] = this[_0x58dbfc(0x4a1)];
                    } ['FadeOut']() {
                        const _0x38b8cb = _0x1c1278;
                        var _0xa0f4cb;
                        this[_0x38b8cb(0x4ae)] = !0x0, this['body'][_0x38b8cb(0xf4e)]['x'] = 0x0, this[_0x38b8cb(0xcf9)][_0x38b8cb(0xf4e)]['y'] = 0x0, this[_0x38b8cb(0x142a)] = !0x1, _0x25328c['default'][_0x38b8cb(0x1267)]['PlaySound'](_0x50a877['default'][_0x38b8cb(0xdd8)], {
                            'volume': 0x1,
                            'rate': 0x2,
                            'detune': -0xc8 * Math['random']()
                        }, 0x96, 0x2), null === (_0xa0f4cb = this[_0x38b8cb(0x149a)]) || void 0x0 === _0xa0f4cb || _0xa0f4cb[_0x38b8cb(0x1a34)](), this[_0x38b8cb(0x149a)] = this[_0x38b8cb(0x6d2)]['tweens'][_0x38b8cb(0x18bd)]({
                            'targets': this,
                            'x': this['x'] + -0.5 * this['save_vel_x'],
                            'duration': 0x1f4,
                            'scale': 1.5 * this[_0x38b8cb(0x3a8)],
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x40eb39 = _0x38b8cb;
                                this[_0x40eb39(0x183f)](!0x1), this[_0x40eb39(0x14fb)]();
                            }
                        });
                    } ['OnHasHitWall'](_0x15471b) {
                        const _0x5ad7df = _0x1c1278;
                        this[_0x5ad7df(0x1b4)] > 0x0 && (this['save_vel_x'] *= _0x15471b['faceRight'] || _0x15471b[_0x5ad7df(0x1429)] ? -0x1 : 0x1, this[_0x5ad7df(0xc8f)] *= _0x15471b['faceTop'] || _0x15471b['faceBottom'] ? -0x1 : 0x1), this[_0x5ad7df(0x19c8)](this[_0x5ad7df(0x6dc)], this['save_vel_y']), this[_0x5ad7df(0x8a4)]();
                    } ['Bounce'](_0x318eeb) {
                        const _0x2554dd = _0x1c1278;
                        this[_0x2554dd(0xcf9)] === _0x318eeb && this['OnBounce']();
                    } ['OnBounce']() {
                        const _0x46c3f3 = _0x1c1278;
                        this[_0x46c3f3(0x1b4)]--, this[_0x46c3f3(0x1b4)] <= 0x0 ? this[_0x46c3f3(0x4ae)] || (this['anims'][_0x46c3f3(0x902)]('end'), this['FadeOut']()) : this[_0x46c3f3(0x1b4)] > 0x0 && (this[_0x46c3f3(0x990)] = [], _0x25328c[_0x46c3f3(0xd2c)][_0x46c3f3(0x1267)][_0x46c3f3(0x7f6)](_0x50a877['default'][_0x46c3f3(0x1b00)], {
                            'volume': 0.3,
                            'detune': 0xc8 * Math[_0x46c3f3(0x9ad)]()
                        }, 0x96, 0x2));
                    } ['OnRecycle']() {
                        const _0x518d1b = _0x1c1278;
                        var _0x2a63b6, _0xa3a4b8;
                        super[_0x518d1b(0x5ce)](), this[_0x518d1b(0x8a2)](0x1), this[_0x518d1b(0xf8e)](0.5, 0x1), this[_0x518d1b(0xcf9)][_0x518d1b(0xdf6)](0x18), this[_0x518d1b(0xe71)] = 0x1, this[_0x518d1b(0xb1f)] = this['defaultSpeed'], this['makeSparks'] = !0x0, this[_0x518d1b(0x183f)](!0x0), this[_0x518d1b(0x990)] = [], this[_0x518d1b(0x183e)][_0x518d1b(0x902)]('idle'), _0x25328c['default']['Core'][_0x518d1b(0x9c3)] && this[_0x518d1b(0x381)]('hCartEnd_0.png'), this[_0x518d1b(0x4ae)] = !0x1, null === (_0x2a63b6 = this['disappearTween']) || void 0x0 === _0x2a63b6 || _0x2a63b6['stop'](), this[_0x518d1b(0x13f0)] = !0x1, this[_0x518d1b(0x8a2)](0x0), null === (_0xa3a4b8 = this[_0x518d1b(0xfa2)]) || void 0x0 === _0xa3a4b8 || _0xa3a4b8['stop'](), this['enterTween'] = this['scene'][_0x518d1b(0x12a1)]['add']({
                            'targets': this,
                            'scale': this[_0x518d1b(0x4a1)][_0x518d1b(0x5f5)],
                            'duration': 0xc8,
                            'onComplete': () => {
                                this['enterTweenCompleted'] = !0x0;
                            }
                        }), this[_0x518d1b(0x193c)](!0x0, 0x1, 0x1), this[_0x518d1b(0xcf9)][_0x518d1b(0xda7)](_0x25328c[_0x518d1b(0xd2c)][_0x518d1b(0x1043)][_0x518d1b(0x10f6)]['WorldBoxCollider']), this[_0x518d1b(0xcf9)]['onWorldBounds'] = !0x0;
                        const _0x3effe8 = _0x25328c['default'][_0x518d1b(0x1043)][_0x518d1b(0x10f6)][_0x518d1b(0x115d)][_0x518d1b(0x1650)](Phaser[_0x518d1b(0x24f)][_0x518d1b(0x1551)][_0x518d1b(0x7bf)]);
                        this[_0x518d1b(0x1734)] = _0x3effe8 < 0x0, this[_0x518d1b(0xb4a)](_0x25328c[_0x518d1b(0xd2c)]['Core'][_0x518d1b(0x10f6)]['depth'] + 0x1), this[_0x518d1b(0x125b)][_0x518d1b(0xb4a)](this['depth'] - 0x1), this[_0x518d1b(0x6d2)][_0x518d1b(0x1585)][_0x518d1b(0x18fc)](Phaser[_0x518d1b(0x24f)][_0x518d1b(0x54d)](this[_0x518d1b(0x1734)] ? 0xb4 : 0x0), this['TrueSpeed'], this['body']['velocity']), _0x25328c['default'][_0x518d1b(0x1267)][_0x518d1b(0x7f6)](_0x50a877[_0x518d1b(0xd2c)][_0x518d1b(0x1b00)], {
                            'volume': 0.3,
                            'detune': 0xc8 * Math['random']()
                        }, 0x96, 0x2);
                    } ['Update'](_0x43da2e) {
                        const _0x5adf68 = _0x1c1278;
                        if (this[_0x5adf68(0xb1f)] += 0x1 * _0x43da2e, this[_0x5adf68(0x13f0)] && this[_0x5adf68(0x8a2)](this[_0x5adf68(0x4a1)]['PArea']), this['makeSparks']) {
                            let _0x21de38 = this['save_vel_x'] < 0x0 ? 0xc : -0xc;
                            this[_0x5adf68(0x125b)]['emitParticleAt'](this['x'] + _0x21de38, this['y'] - 0x2 * this[_0x5adf68(0x4a1)][_0x5adf68(0x5f5)]), this[_0x5adf68(0x125b)][_0x5adf68(0x108b)](this['x'] + _0x21de38, this['y'] - 0x16 * this[_0x5adf68(0x4a1)]['PArea']);
                        }
                        this[_0x5adf68(0x6dc)] = 0x0 == this[_0x5adf68(0xcf9)][_0x5adf68(0xf4e)]['x'] ? this[_0x5adf68(0x6dc)] : this[_0x5adf68(0xcf9)][_0x5adf68(0xf4e)]['x'], this['save_vel_y'] = 0x0 == this[_0x5adf68(0xcf9)][_0x5adf68(0xf4e)]['y'] ? this['save_vel_y'] : this[_0x5adf68(0xcf9)]['velocity']['y'];
                    }
                }
                _0xd0c821['B_Cart2'] = _0x3fa887, _0xd0c821['default'] = _0x3fa887;
            };
