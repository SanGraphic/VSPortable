// Module 0x444
// Args: _0x43c1a2, _0x1a5eae, _0x1ff677

export default (_0x43c1a2, _0x1a5eae, _0x1ff677) => {
                'use strict';
                const _0x3c069c = a0_0x6932;
                var _0xfaab52 = this && this['__importDefault'] || function(_0x325583) {
                    const _0x57c67f = _0x3c069c;
                    return _0x325583 && _0x325583[_0x57c67f(0x16f1)] ? _0x325583 : {
                        'default': _0x325583
                    };
                };
                Object['defineProperty'](_0x1a5eae, '__esModule', {
                    'value': !0x0
                });
                const _0x47d7b6 = _0xfaab52(_0x1ff677(0x5f07)),
                    _0x5b0511 = _0xfaab52(_0x1ff677(0xc42e)),
                    _0x49953e = _0xfaab52(_0x1ff677(0x5103)),
                    _0x591a17 = _0x1ff677(0x15ee2),
                    _0x589d07 = _0xfaab52(_0x1ff677(0xdfbc)),
                    _0x30c3d2 = _0xfaab52(_0x1ff677(0x15dd)),
                    _0x3aa4c9 = _0xfaab52(_0x1ff677(0x1fd7)),
                    _0x154404 = _0xfaab52(_0x1ff677(0xc450)),
                    _0x2e4c22 = _0xfaab52(_0x1ff677(0x1852a));
                class _0x22ece6 extends _0x591a17['PickupGuarded'] {
                    constructor(_0x1908b5, _0x40bc88, _0x40e1d4) {
                        const _0x566f77 = _0x3c069c;
                        super(_0x1908b5, _0x40bc88, _0x40e1d4, _0x5b0511[_0x566f77(0xd2c)]['COFFIN']), this[_0x566f77(0x739)] = _0x589d07[_0x566f77(0xd2c)][_0x566f77(0xbc4)], this[_0x566f77(0xb78)] = 0x64, this['opened'] = !0x1, this['particlesInterval'] = 0xc8, this['res_Rosary'] = 0x1, _0x47d7b6['default'][_0x566f77(0x1043)]['scene'][_0x566f77(0x18bd)][_0x566f77(0x1a88)](this), this[_0x566f77(0x8a2)](_0x49953e[_0x566f77(0xd2c)][_0x566f77(0x15db)]), this[_0x566f77(0xc6e)] = !0x0, this[_0x566f77(0xf9f)] = this[_0x566f77(0x6d2)][_0x566f77(0x18bd)][_0x566f77(0x105b)](this['x'], this['y'], 'items', 'CoffinLid.png')['setVisible'](!0x1), this[_0x566f77(0x164e)] = this['scene']['add'][_0x566f77(0x105b)](this['x'], this['y'], 'characters')['setVisible'](!0x1), this['CharSprite']['setScale'](0x0), this[_0x566f77(0x164e)]['setTintFill'](0x0), this[_0x566f77(0x1935)] = 0x1;
                    } ['OnRecycle']() {
                        const _0x570254 = _0x3c069c;
                        super['OnRecycle'](), this[_0x570254(0xcf9)]['setCircle'](0x10, 0x0, 0x8), this[_0x570254(0x381)]('Coffin.png'), this[_0x570254(0xf9f)]['x'] = this['x'], this[_0x570254(0xf9f)]['y'] = this['y'], this[_0x570254(0x164e)]['x'] = this['x'], this['CharSprite']['y'] = this['y'], this[_0x570254(0xf9f)][_0x570254(0x183f)](!0x0), this['CharSprite'][_0x570254(0x183f)](!0x0);
                    } ['DeSpawn']() {
                        const _0x1c8a47 = _0x3c069c;
                        super[_0x1c8a47(0x14fb)]();
                    } ['Update'](_0x3f140b) {
                        const _0x23f8dd = _0x3c069c;
                        if (super[_0x23f8dd(0xa9f)](_0x3f140b), this['setDepth'](0x9 + this['y'] - _0x47d7b6['default']['Core'][_0x23f8dd(0x10f6)]['y']), this['Lid'][_0x23f8dd(0xb4a)](0xa + this['y'] - _0x47d7b6[_0x23f8dd(0xd2c)][_0x23f8dd(0x1043)][_0x23f8dd(0x10f6)]['y']), Math['abs'](this['x'] - _0x47d7b6['default'][_0x23f8dd(0x1043)]['Player']['x']) < 0.5 * this[_0x23f8dd(0x6d2)][_0x23f8dd(0x12f9)][_0x23f8dd(0x173c)] && Math[_0x23f8dd(0x19db)](this['y'] - _0x47d7b6['default'][_0x23f8dd(0x1043)][_0x23f8dd(0x10f6)]['y']) < 0.5 * this['scene'][_0x23f8dd(0x12f9)][_0x23f8dd(0x140e)] || !_0x47d7b6[_0x23f8dd(0xd2c)]['Core'][_0x23f8dd(0x14d8)][_0x23f8dd(0xbb8)]) {
                            for (let _0x534064 = 0x0; _0x534064 < this[_0x23f8dd(0x163f)][_0x23f8dd(0xed9)]; _0x534064++)
                                if (!this[_0x23f8dd(0x163f)][_0x534064]['isDead']) return;
                            this[_0x23f8dd(0xb78)] += _0x3f140b, this[_0x23f8dd(0xb78)] > this['particlesInterval'] && (this['totalTime'] = 0x0, _0x47d7b6['default'][_0x23f8dd(0x1043)][_0x23f8dd(0x10c9)](this['x'], this['y']));
                        } else;
                    } ['setChar'](_0x24e861) {
                        const _0x1f116e = _0x3c069c;
                        this['charCFF'] = _0x24e861, _0x30c3d2[_0x1f116e(0xd2c)][this[_0x1f116e(0x739)]] && this[_0x1f116e(0x164e)][_0x1f116e(0x381)]('random_00.png');
                    } ['GetTaken']() {
                        const _0x7aa3cf = _0x3c069c;
                        if (!this[_0x7aa3cf(0x210)] && !this[_0x7aa3cf(0x6f8)]) {
                            for (let _0x36f6e4 = 0x0; _0x36f6e4 < this[_0x7aa3cf(0x163f)][_0x7aa3cf(0xed9)]; _0x36f6e4++)
                                if (!this['guards'][_0x36f6e4][_0x7aa3cf(0xdae)]) return;
                            this[_0x7aa3cf(0x6f8)] = !0x0, _0x154404[_0x7aa3cf(0xd2c)][_0x7aa3cf(0x120c)](_0x2e4c22['default']['UnderTheCoffin']), _0x47d7b6['default']['Sound']['PlaySound'](_0x3aa4c9[_0x7aa3cf(0xd2c)][_0x7aa3cf(0xf9f)], {
                                'volume': 0x2
                            }, 0x96, 0x2), this['scene'][_0x7aa3cf(0x12a1)][_0x7aa3cf(0x18bd)]({
                                'targets': this[_0x7aa3cf(0x164e)],
                                'duration': 0x64,
                                'scaleX': 0x2,
                                'scaleY': 0x4
                            }), this[_0x7aa3cf(0x6d2)][_0x7aa3cf(0x12a1)]['add']({
                                'targets': this['CharSprite'],
                                'duration': 0x190,
                                'y': this['y'] - this['scene'][_0x7aa3cf(0x12f9)][_0x7aa3cf(0x140e)],
                                'onComplete': () => {
                                    const _0x133459 = _0x7aa3cf;
                                    this[_0x133459(0x164e)][_0x133459(0x183f)](!0x1);
                                }
                            }), this['scene']['tweens'][_0x7aa3cf(0x18bd)]({
                                'targets': this[_0x7aa3cf(0xf9f)],
                                'y': this['y'] - 0.75 * this[_0x7aa3cf(0x6d2)][_0x7aa3cf(0x12f9)]['height'],
                                'x': this['x'] - 0.75 * this[_0x7aa3cf(0x6d2)][_0x7aa3cf(0x12f9)][_0x7aa3cf(0x173c)],
                                'angle': 0x168,
                                'duration': 0x1f4,
                                'scaleX': -0x1,
                                'onComplete': () => {
                                    const _0x533e0b = _0x7aa3cf;
                                    _0x47d7b6[_0x533e0b(0xd2c)]['Sound'][_0x533e0b(0x7f6)](_0x3aa4c9['default']['ThingFound'], {
                                        'volume': 0x1,
                                        'detune': -0x3e8,
                                        'rate': 0.5
                                    }), this['Lid'][_0x533e0b(0x183f)](!0x1), super['GetTaken']();
                                }
                            });
                        }
                    }
                }
                _0x1a5eae['default'] = _0x22ece6;
            };
