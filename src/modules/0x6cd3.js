// Module 0x6cd3
// Args: _0x898636, _0x22c3e3, _0x354e08

export default (_0x898636, _0x22c3e3, _0x354e08) => {
                'use strict';
                const _0x274a7a = a0_0x6932;
                var _0x48a0aa = this && this['__importDefault'] || function(_0x570719) {
                    return _0x570719 && _0x570719['__esModule'] ? _0x570719 : {
                        'default': _0x570719
                    };
                };
                Object['defineProperty'](_0x22c3e3, '__esModule', {
                    'value': !0x0
                }), _0x22c3e3['B_Bone'] = void 0x0;
                const _0x52e620 = _0x48a0aa(_0x354e08(0xa14d)),
                    _0x535779 = _0x48a0aa(_0x354e08(0x5f07)),
                    _0x5b633c = _0x48a0aa(_0x354e08(0x1fd7)),
                    _0x1a98f1 = _0x48a0aa(_0x354e08(0x5103));
                class _0x4c99f3 extends _0x52e620['default'] {
                    constructor(_0x1b7e86, _0xe14a30, _0x36ecce, _0x54496d, _0x3b3d65) {
                        const _0x3b8c31 = _0x274a7a;
                        super(_0x1b7e86, _0xe14a30, _0x36ecce, 'vfx', 'ProjectileBone2.png', _0x54496d, _0x3b3d65), this['bouncePositions'] = new Array(), this['save_vel_x'] = 0x0, this[_0x3b8c31(0xc8f)] = 0x0, this[_0x3b8c31(0x105c)] = 0x1, this[_0x3b8c31(0x16fa)] = !0x1, this['scene'][_0x3b8c31(0x1585)]['world']['on']('worldbounds', this['Bounce'], this), this[_0x3b8c31(0x6bd)] = this['scene']['tweens']['add']({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x3b8c31(0x1234)] = this['weapon'];
                    } ['BounceMore']() {
                        const _0x53c1aa = _0x274a7a;
                        this['accelOnBounce'] && (this['physBounce'] = 0.1, this[_0x53c1aa(0x3d0)](0x1 + this[_0x53c1aa(0x105c)], 0x1 + this[_0x53c1aa(0x105c)]));
                    } ['OnRecycle']() {
                        const _0x5ce7ed = _0x274a7a;
                        var _0x1a4e36;
                        super['OnRecycle'](), this[_0x5ce7ed(0xcf9)]['setCircle'](0x8), this[_0x5ce7ed(0xa21)] = !0x0, this['setScale'](0.5 * _0x1a98f1[_0x5ce7ed(0xd2c)][_0x5ce7ed(0x15db)] * this[_0x5ce7ed(0x4a1)][_0x5ce7ed(0x5f5)]), this['physBounce'] = 0x0, this[_0x5ce7ed(0x3d0)](0x1 + this[_0x5ce7ed(0x105c)], 0x1 + this['physBounce']), _0x535779[_0x5ce7ed(0xd2c)]['Core'][_0x5ce7ed(0x9c3)] && this['setFrame']('pumpkin.png'), this[_0x5ce7ed(0x177d)] = !0x1, _0x535779['default'][_0x5ce7ed(0x1043)]['scene']['time']['removeEvent'](this['ExpireTimer']), this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this['body'][_0x5ce7ed(0xda7)](_0x535779[_0x5ce7ed(0xd2c)][_0x5ce7ed(0x1043)]['Player']['WorldBoxCollider']), this[_0x5ce7ed(0xcf9)][_0x5ce7ed(0x940)] = !0x0, this['AimForRandomEnemy'](), this['setAngle'](0x168 * Math[_0x5ce7ed(0x9ad)]()), null === (_0x1a4e36 = this['ScaleTween']) || void 0x0 === _0x1a4e36 || _0x1a4e36['stop'](), this[_0x5ce7ed(0xd35)] = this['scene'][_0x5ce7ed(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0x1f4,
                            'delay': this['weapon']['PDuration'],
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x44c306 = _0x5ce7ed;
                                this[_0x44c306(0x14fb)]();
                            }
                        }), _0x535779[_0x5ce7ed(0xd2c)][_0x5ce7ed(0x1267)][_0x5ce7ed(0x7f6)](_0x5b633c[_0x5ce7ed(0xd2c)]['Shot'], {
                            'detune': -0x64 * this[_0x5ce7ed(0x19c4)],
                            'volume': 0.45
                        }, 0xc8, 0xa);
                    } ['Bounce'](_0x2cf492) {
                        const _0x3efd34 = _0x274a7a;
                        this[_0x3efd34(0xcf9)] === _0x2cf492 && (this['BounceMore'](), this[_0x3efd34(0x990)] = []);
                    } ['OnHasHitAnObject'](_0x25e48d) {
                        const _0x1cacb0 = _0x274a7a;
                        if (!_0x25e48d['isDead']) {
                            if (!this[_0x1cacb0(0xa21)]) return;
                            this['BounceMore'](), this[_0x1cacb0(0xa21)] = !0x1, this['scene'][_0x1cacb0(0x915)]['removeEvent'](this[_0x1cacb0(0x20d)]), this[_0x1cacb0(0x20d)] = this[_0x1cacb0(0x6d2)][_0x1cacb0(0x915)][_0x1cacb0(0x12b8)]({
                                'delay': 0x1e,
                                'callback': () => {
                                    this['canBounce'] = !0x0;
                                }
                            }), this[_0x1cacb0(0x19c8)](this[_0x1cacb0(0xcf9)]['velocity']['x'] * -(0x1 + this[_0x1cacb0(0x105c)]), this[_0x1cacb0(0xcf9)][_0x1cacb0(0xf4e)]['y'] * -(0x1 + this[_0x1cacb0(0x105c)])), this[_0x1cacb0(0x990)] = [];
                        }
                    } ['OnHasHitWall'](_0x28333b) {
                        const _0x5dd67b = _0x274a7a;
                        this['save_vel_x'] *= _0x28333b['faceRight'] || _0x28333b['faceLeft'] ? -0x1 : 0x1, this['save_vel_y'] *= _0x28333b[_0x5dd67b(0x10d7)] || _0x28333b['faceBottom'] ? -0x1 : 0x1, this['setVelocity'](this['save_vel_x'], this[_0x5dd67b(0xc8f)]), this[_0x5dd67b(0x990)] = [];
                    } ['Update']() {
                        const _0x860cb6 = _0x274a7a;
                        this['save_vel_x'] = 0x0 == this[_0x860cb6(0xcf9)][_0x860cb6(0xf4e)]['x'] ? this['save_vel_x'] : this[_0x860cb6(0xcf9)]['velocity']['x'], this[_0x860cb6(0xc8f)] = 0x0 == this[_0x860cb6(0xcf9)]['velocity']['y'] ? this[_0x860cb6(0xc8f)] : this['body'][_0x860cb6(0xf4e)]['y'];
                    } ['DeSpawn']() {
                        const _0x6ec429 = _0x274a7a;
                        this['isCullable'] = !0x0, _0x535779[_0x6ec429(0xd2c)][_0x6ec429(0x1043)][_0x6ec429(0x6d2)]['time'][_0x6ec429(0x17fb)](this[_0x6ec429(0x12a3)]), super[_0x6ec429(0x14fb)](), this[_0x6ec429(0x1234)][_0x6ec429(0x1007)] && this['trueWeapon']['SpawnExplosionAt'](this['x'], this['y']);
                    }
                }
                _0x22c3e3['B_Bone'] = _0x4c99f3, _0x22c3e3['default'] = _0x4c99f3;
            };
