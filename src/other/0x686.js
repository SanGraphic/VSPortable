// Module 0x686
// Args: _0x397bf0, _0x1873ad, _0xba1a78

export default (_0x397bf0, _0x1873ad, _0xba1a78) => {
                'use strict';
                const _0x14ef0e = a0_0x6932;
                var _0x1aed32 = this && this['__importDefault'] || function(_0x3184ba) {
                    return _0x3184ba && _0x3184ba['__esModule'] ? _0x3184ba : {
                        'default': _0x3184ba
                    };
                };
                Object['defineProperty'](_0x1873ad, '__esModule', {
                    'value': !0x0
                });
                const _0x484675 = _0x1aed32(_0xba1a78(0x15abc)),
                    _0x418453 = _0x1aed32(_0xba1a78(0x9bda)),
                    _0x1327fb = _0x1aed32(_0xba1a78(0x5103)),
                    _0xf7a96a = _0x1aed32(_0xba1a78(0x5f07)),
                    _0x23d0b4 = _0x1aed32(_0xba1a78(0x1166a));
                class _0x4f2098 extends _0x23d0b4['default'] {
                    constructor() {
                        const _0x2112f2 = _0x14ef0e;
                        super(...arguments), this['keepMoving'] = 0x1, this['distance'] = 0xc350, this['fireDelay'] = 0x7d0, this[_0x2112f2(0xec2)] = 0x0;
                    } ['Update'](_0x388ead = 0x0) {
                        const _0x41316f = _0x14ef0e;
                        if (this['isDead']) return;
                        if (this[_0x41316f(0x16c6)] = this['y'] - _0xf7a96a[_0x41316f(0xd2c)]['Core'][_0x41316f(0x10f6)]['y'], this['IsTimeStopped']) return;
                        (!this['FixedDirection'] || this['FixedDirection'] && 0x0 == this['_currentDirection']['x'] && 0x0 == this[_0x41316f(0x70d)]['y']) && (this[_0x41316f(0x70d)]['x'] = this[_0x41316f(0x18a7)]['x'] - this['x'], this[_0x41316f(0x70d)]['y'] = this['target']['y'] - this['y'], this['_currentDirection'][_0x41316f(0x183b)]()), this['Medusa'] && (this[_0x41316f(0x1562)] += 0.05, this[_0x41316f(0x70d)]['y'] = Math[_0x41316f(0xd7e)](this[_0x41316f(0x1562)]));
                        let _0x260bb2 = new Phaser['Math']['Vector2'](this['x'], this['y']),
                            _0x9d179f = new Phaser[(_0x41316f(0x24f))]['Vector2'](_0xf7a96a[_0x41316f(0xd2c)]['Core'][_0x41316f(0x10f6)]['x'], _0xf7a96a[_0x41316f(0xd2c)]['Core'][_0x41316f(0x10f6)]['y'])[_0x41316f(0x297)](_0x260bb2);
                        _0x9d179f < this[_0x41316f(0x1468)] - 0x3e8 ? this[_0x41316f(0xff4)] = -0x1 : _0x9d179f > this['distance'] + 0x3e8 && (this['keepMoving'] = 0x1);
                        let _0x351215 = this[_0x41316f(0x3f1)] ? -this[_0x41316f(0x1992)] * this[_0x41316f(0x25d)] : 0x1;
                        this[_0x41316f(0xb8d)](this[_0x41316f(0x70d)]['x'] > 0x0);
                        let _0x31e2fa = this['keepMoving'] * _0x1327fb[_0x41316f(0xd2c)]['EnemySpeed'] * this[_0x41316f(0x78e)] * _0x351215 * this['slow'];
                        this[_0x41316f(0x19c8)](_0x31e2fa * this['_currentDirection']['x'], _0x31e2fa * this[_0x41316f(0x70d)]['y']), this[_0x41316f(0x9b5)](_0x23d0b4[_0x41316f(0xd2c)][_0x41316f(0x1404)][this[_0x41316f(0x3bf)]][_0x41316f(0xd96)]);
                    } ['OnRecycle']() {
                        const _0x143997 = _0x14ef0e;
                        super['OnRecycle'](), this[_0x143997(0x7cb)] = 0x0, this[_0x143997(0x7d7)] = 0x0;
                        let _0x1296c9 = _0x484675[_0x143997(0xd2c)][this['enemyType']][0x0];
                        this[_0x143997(0x16b4)] = _0x1296c9['fireDelay'] || 0x7d0, this[_0x143997(0x14e)] = _0x1296c9[_0x143997(0x14e)] || _0x418453['default']['BULLET_2'], this['OnEnterTween'] ? this['OnEnterTween']['restart']() : this[_0x143997(0xd9b)] = this[_0x143997(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'scale': this[_0x143997(0x17ef)],
                            'duration': 0x12c
                        }), this[_0x143997(0x2a4)] ? this[_0x143997(0x2a4)]['restart']() : this[_0x143997(0x2a4)] = this[_0x143997(0x6d2)][_0x143997(0x12a1)][_0x143997(0x18bd)]({
                            'duration': this['fireDelay'],
                            'targets': this,
                            'firetime': 0x1,
                            'repeat': -0x1,
                            'onRepeat': () => {
                                const _0x334338 = _0x143997;
                                this[_0x334338(0x1754)]();
                            }
                        });
                    } ['Die']() {
                        const _0x274e9c = _0x14ef0e;
                        var _0x3c8eaf;
                        super['Die'](), null === (_0x3c8eaf = this[_0x274e9c(0x2a4)]) || void 0x0 === _0x3c8eaf || _0x3c8eaf[_0x274e9c(0x1a34)]();
                    } ['DeSpawn']() {
                        const _0x203b97 = _0x14ef0e;
                        var _0x284eb3;
                        super[_0x203b97(0x14fb)](), null === (_0x284eb3 = this['OnFireTimer']) || void 0x0 === _0x284eb3 || _0x284eb3[_0x203b97(0x1a34)]();
                    } ['Fire']() {
                        const _0x1e8f6a = _0x14ef0e;
                        this[_0x1e8f6a(0x14a3)] || this[_0x1e8f6a(0xdae)] || _0xf7a96a[_0x1e8f6a(0xd2c)][_0x1e8f6a(0x1043)][_0x1e8f6a(0x17c7)]['FireEnemyBulletAt'](this['x'], this['y'], _0x418453[_0x1e8f6a(0xd2c)][_0x1e8f6a(0x3b1)]);
                    }
                }
                _0x1873ad['default'] = _0x4f2098;
            };
