// Module 0x10235
// Args: _0x572af0, _0x1bb6fa, _0x2dbf19

export default (_0x572af0, _0x1bb6fa, _0x2dbf19) => {
                'use strict';
                const _0x49c6cd = a0_0x6932;
                var _0x3a8dc7 = this && this['__importDefault'] || function(_0x1ed1f1) {
                    return _0x1ed1f1 && _0x1ed1f1['__esModule'] ? _0x1ed1f1 : {
                        'default': _0x1ed1f1
                    };
                };
                Object['defineProperty'](_0x1bb6fa, '__esModule', {
                    'value': !0x0
                }), _0x1bb6fa['B_Bubble2'] = void 0x0;
                const _0x3254d9 = _0x3a8dc7(_0x2dbf19(0xa14d)),
                    _0x2b779b = _0x3a8dc7(_0x2dbf19(0x5f07));
                class _0x475796 extends _0x3254d9['default'] {
                    constructor(_0x3e8f23, _0xa83050, _0x1ac5af, _0x3e01f7, _0x23d8b3) {
                        const _0x371b83 = a0_0x6932;
                        super(_0x3e8f23, _0xa83050, _0x1ac5af, 'vfx', 'circle8.png', _0x3e01f7, _0x23d8b3), this['save_vel_x'] = -0x1, this['save_vel_y'] = -0x1, this['bombDeceleration'] = 0x1, this['canBounce'] = !0x0, this['bounceAreaMod'] = 0x1, this['radius'] = 0x8, this['aimVec'] = new Phaser['Math'][('Vector2')](), this['setVisible'](!0x1), this['colors'] = [], this['colorIndex'] = 0x0;
                        for (let _0x5d441f = 0x0; _0x5d441f < 0x14; _0x5d441f++) this['colors']['push'](Phaser['Display']['Color']['GetColor'](0x80 + 0x80 * Math['random'](), 0x80 + 0x80 * Math['random'](), 0x80 + 0x80 * Math['random']()));
                    } ['SetColor'](_0x4f21c8) {
                        const _0x25e9fe = _0x49c6cd;
                        let _0x1679e3 = Phaser['Math'][_0x25e9fe(0x82a)][_0x25e9fe(0x198c)](['HitWhite1.png', 'HitWhite2.png', 'HitCloud1.png', 'bubble.png', 'bubble.png', 'bubble.png']);
                        this['setFrame'](_0x1679e3);
                    } ['OnRecycle']() {
                        const _0x34cfe4 = _0x49c6cd;
                        var _0x332922, _0x5c7d3f;
                        super['OnRecycle'](), this[_0x34cfe4(0x177d)] = !0x1, this[_0x34cfe4(0x8a2)](0x1), this['body'][_0x34cfe4(0xdf6)](0xa, 0x1, 0x1), this[_0x34cfe4(0xcf9)]['enable'] = !0x0, this[_0x34cfe4(0x990)] = [], this[_0x34cfe4(0x183f)](!0x0), this['setScale'](0x0), _0x2b779b[_0x34cfe4(0xd2c)][_0x34cfe4(0x1043)]['scene'][_0x34cfe4(0x915)]['removeEvent'](this['HitboxTimer']), this[_0x34cfe4(0x8b9)] = _0x2b779b['default']['Core'][_0x34cfe4(0x6d2)]['time'][_0x34cfe4(0x12b8)]({
                            'delay': this[_0x34cfe4(0x4a1)][_0x34cfe4(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x5c7f1d = _0x34cfe4;
                                this[_0x5c7f1d(0x990)] = [];
                            }
                        }), this['setTint'](this[_0x34cfe4(0x1a0b)][this['colorIndex']++ % 0x14]), this['depth'] = -this[_0x34cfe4(0x6d2)]['renderer'][_0x34cfe4(0x140e)], this['isCullable'] = !0x0, this[_0x34cfe4(0x6dc)] = 0x1, this[_0x34cfe4(0xc8f)] = 0x1, this['SetForNearestEnemy'](this[_0x34cfe4(0x9dc)]), this[_0x34cfe4(0x19c8)](this['aimVec']['x'] * this['weapon'][_0x34cfe4(0x712)], this[_0x34cfe4(0x9dc)]['y'] * this[_0x34cfe4(0x4a1)]['PSpeed']), null === (_0x332922 = this[_0x34cfe4(0x11e0)]) || void 0x0 === _0x332922 || _0x332922[_0x34cfe4(0x1a34)](), this['bombDeceleration'] = 0x1, this[_0x34cfe4(0x11e0)] = this[_0x34cfe4(0x6d2)][_0x34cfe4(0x12a1)][_0x34cfe4(0x18bd)]({
                            'targets': this,
                            'bombDeceleration': 0x0,
                            'delay': 0.25 * this[_0x34cfe4(0x4a1)][_0x34cfe4(0x16c3)],
                            'duration': 0.75 * this['weapon']['PDuration'],
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['FadeOut']();
                            }
                        }), null === (_0x5c7d3f = this[_0x34cfe4(0x1995)]) || void 0x0 === _0x5c7d3f || _0x5c7d3f['stop'](), this['tween1'] = this[_0x34cfe4(0x6d2)][_0x34cfe4(0x12a1)][_0x34cfe4(0x18bd)]({
                            'targets': this,
                            'scaleX': this['weapon'][_0x34cfe4(0x5f5)],
                            'scaleY': this['weapon'][_0x34cfe4(0x5f5)],
                            'duration': 0xfa,
                            'onStart': () => {
                                const _0x519f72 = _0x34cfe4;
                                this[_0x519f72(0xe71)] = 0.65, this['setVisible'](!0x0), this['scaleX'] = 0x0, this['scaleY'] = 0x0, this[_0x519f72(0xa21)] = !0x1;
                            },
                            'onComplete': () => {
                                const _0x4eed72 = _0x34cfe4;
                                this[_0x4eed72(0xa21)] = !0x0;
                            }
                        }), this['setCollideWorldBounds'](!0x0, 0.9, 0.9), this[_0x34cfe4(0xcf9)]['setBoundsRectangle'](_0x2b779b['default'][_0x34cfe4(0x1043)][_0x34cfe4(0x10f6)]['WorldBoxCollider']), this[_0x34cfe4(0xcf9)][_0x34cfe4(0x940)] = !0x0;
                    } ['FadeOut']() {
                        const _0x12fe8f = _0x49c6cd;
                        this['scene']['tweens'][_0x12fe8f(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x188b6b = _0x12fe8f;
                                this[_0x188b6b(0x14fb)]();
                            }
                        });
                    } ['Bounce'](_0x2bde5a) {
                        const _0x3d5bc6 = _0x49c6cd;
                        this[_0x3d5bc6(0xcf9)];
                    } ['decelerate']() {
                        const _0x2b36ed = _0x49c6cd;
                        this[_0x2b36ed(0x6dc)] = 0x0, this['save_vel_y'] = 0x0;
                    } ['JustBounce']() {
                        const _0x4121c5 = _0x49c6cd;
                        this[_0x4121c5(0xa21)] && (this[_0x4121c5(0x6dc)] *= -0x1, this[_0x4121c5(0xc8f)] *= -0x1);
                    } ['Update'](_0x5a76e2) {
                        const _0x9ac190 = _0x49c6cd;
                        this['setVelocity'](this[_0x9ac190(0x9dc)]['x'] * this[_0x9ac190(0x6dc)], this['aimVec']['y'] * this[_0x9ac190(0xc8f)]);
                    } ['DeSpawn']() {
                        const _0x825249 = _0x49c6cd;
                        var _0x45730c, _0xd6a4c8, _0x2d76f1;
                        null === (_0x45730c = this[_0x825249(0x11e0)]) || void 0x0 === _0x45730c || _0x45730c[_0x825249(0x1a34)](), null === (_0xd6a4c8 = this[_0x825249(0x1995)]) || void 0x0 === _0xd6a4c8 || _0xd6a4c8[_0x825249(0x1a34)](), null === (_0x2d76f1 = this[_0x825249(0x15fa)]) || void 0x0 === _0x2d76f1 || _0x2d76f1['stop'](), this[_0x825249(0x3a8)] = 0x0, this['scaleY'] = 0x0, this[_0x825249(0x183f)](!0x1), this['body'][_0x825249(0x543)] = !0x1, _0x2b779b[_0x825249(0xd2c)][_0x825249(0x1043)][_0x825249(0x6d2)][_0x825249(0x915)][_0x825249(0x17fb)](this[_0x825249(0x8b9)]), super[_0x825249(0x14fb)]();
                    } ['OnHasHitWall'](_0x61eb77) {
                        const _0x40b3c3 = _0x49c6cd;
                        this[_0x40b3c3(0x1d7)]();
                    }
                }
                _0x1bb6fa['B_Bubble2'] = _0x475796, _0x1bb6fa['default'] = _0x475796;
            };
