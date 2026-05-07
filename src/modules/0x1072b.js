// Module 0x1072b
// Args: _0x591b2b, _0x1eb387, _0x506d46

export default (_0x591b2b, _0x1eb387, _0x506d46) => {
                'use strict';
                const _0x374659 = a0_0x6932;
                var _0x5802ae = this && this['__importDefault'] || function(_0xe943b6) {
                    return _0xe943b6 && _0xe943b6['__esModule'] ? _0xe943b6 : {
                        'default': _0xe943b6
                    };
                };
                Object['defineProperty'](_0x1eb387, '__esModule', {
                    'value': !0x0
                });
                const _0x37057f = _0x5802ae(_0x506d46(0x5f07)),
                    _0x505d66 = _0x5802ae(_0x506d46(0xc42e)),
                    _0x405e86 = _0x5802ae(_0x506d46(0x5103)),
                    _0x2f8ac8 = _0x506d46(0x18304),
                    _0x4d7d0c = _0x506d46(0x15ee2),
                    _0x24ccff = _0x5802ae(_0x506d46(0xdfbc)),
                    _0x4b2515 = _0x5802ae(_0x506d46(0x15dd)),
                    _0x4a29cc = _0x5802ae(_0x506d46(0x1fd7));
                class _0x52af6a extends _0x4d7d0c['PickupGuarded'] {
                    constructor(_0x46ad87, _0x15a372, _0x1e0932) {
                        const _0xb1c11c = _0x374659;
                        super(_0x46ad87, _0x15a372, _0x1e0932, _0x505d66[_0xb1c11c(0xd2c)][_0xb1c11c(0xe76)]), this['charCFF'] = _0x24ccff[_0xb1c11c(0xd2c)]['VOID'], this['totalTime'] = 0x64, this[_0xb1c11c(0x6f8)] = !0x1, this['particlesInterval'] = 0xc8, this[_0xb1c11c(0x1935)] = 0x1, this[_0xb1c11c(0x4aa)] = null, _0x37057f[_0xb1c11c(0xd2c)][_0xb1c11c(0x1043)][_0xb1c11c(0x6d2)][_0xb1c11c(0x18bd)][_0xb1c11c(0x1a88)](this), this[_0xb1c11c(0x8a2)](_0x405e86[_0xb1c11c(0xd2c)][_0xb1c11c(0x15db)]), this[_0xb1c11c(0xc6e)] = !0x0, this[_0xb1c11c(0x1abc)] = this[_0xb1c11c(0x6d2)]['add']['sprite'](_0x15a372, _0x1e0932, 'UI', 'arrow_01.png'), this['Cursor'][_0xb1c11c(0xb4a)](0x270e), this['Cursor'][_0xb1c11c(0x8a2)](0x2), this[_0xb1c11c(0x1abc)][_0xb1c11c(0xdab)](0x1), this[_0xb1c11c(0x1abc)][_0xb1c11c(0x11c7)](_0x2f8ac8[_0xb1c11c(0x10fc)]['NORMAL']), this['CursorIcon'] = this['scene']['add'][_0xb1c11c(0x105b)](_0x15a372, _0x1e0932, '', ''), this[_0xb1c11c(0x17a0)][_0xb1c11c(0xb4a)](0x270f), this['CursorIcon']['setScale'](0x1), this['CursorIcon'][_0xb1c11c(0xdab)](0x1);
                        const _0x50522e = this['anims'][_0xb1c11c(0x1756)]('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrow_',
                            'suffix': '.png'
                        });
                        this[_0xb1c11c(0x1abc)]['anims'][_0xb1c11c(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x50522e,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0xb1c11c(0x1abc)]['play']('idle'), this['Lid'] = this[_0xb1c11c(0x6d2)][_0xb1c11c(0x18bd)][_0xb1c11c(0x105b)](this['x'], this['y'], 'items', 'CoffinLid.png')['setVisible'](!0x1), this['CharSprite'] = this['scene'][_0xb1c11c(0x18bd)]['sprite'](this['x'], this['y'], 'characters')[_0xb1c11c(0x183f)](!0x1), this[_0xb1c11c(0x164e)]['setScale'](0x0), this['CharSprite']['setTintFill'](0x0), this['res_Rosary'] = 0x1;
                    } ['OnRecycle']() {
                        const _0x2de6f6 = _0x374659;
                        super[_0x2de6f6(0x5ce)](), this[_0x2de6f6(0x1abc)][_0x2de6f6(0x183f)](!0x0), this[_0x2de6f6(0xcf9)][_0x2de6f6(0xdf6)](0x10, 0x0, 0x8), this[_0x2de6f6(0x381)]('Coffin.png'), this[_0x2de6f6(0xf9f)]['x'] = this['x'], this['Lid']['y'] = this['y'], this[_0x2de6f6(0x164e)]['x'] = this['x'], this[_0x2de6f6(0x164e)]['y'] = this['y'], this[_0x2de6f6(0xf9f)][_0x2de6f6(0x183f)](!0x0), this[_0x2de6f6(0x164e)][_0x2de6f6(0x183f)](!0x0);
                    } ['DeSpawn']() {
                        const _0x3a4e8f = _0x374659;
                        super[_0x3a4e8f(0x14fb)](), this['Cursor']['setVisible'](!0x1), this['CursorIcon']['setVisible'](!0x1);
                    } ['Update'](_0x4d681d) {
                        const _0xf1e691 = _0x374659;
                        if (super['Update'](_0x4d681d), this['setDepth'](0x9 + this['y'] - _0x37057f[_0xf1e691(0xd2c)]['Core']['Player']['y']), this[_0xf1e691(0xf9f)][_0xf1e691(0xb4a)](0xa + this['y'] - _0x37057f[_0xf1e691(0xd2c)][_0xf1e691(0x1043)]['Player']['y']), Math['abs'](this['x'] - _0x37057f['default']['Core'][_0xf1e691(0x10f6)]['x']) < 0.5 * this[_0xf1e691(0x6d2)][_0xf1e691(0x12f9)]['width'] && Math[_0xf1e691(0x19db)](this['y'] - _0x37057f['default']['Core'][_0xf1e691(0x10f6)]['y']) < 0.5 * this['scene'][_0xf1e691(0x12f9)]['height'] || !_0x37057f[_0xf1e691(0xd2c)][_0xf1e691(0x1043)][_0xf1e691(0x14d8)]['ShowPickups']) {
                            this[_0xf1e691(0x1abc)][_0xf1e691(0x183f)](!0x1), this[_0xf1e691(0x17a0)][_0xf1e691(0x183f)](!0x1);
                            for (let _0x2e15fb = 0x0; _0x2e15fb < this['guards']['length']; _0x2e15fb++)
                                if (!this['guards'][_0x2e15fb][_0xf1e691(0xdae)]) return;
                            this[_0xf1e691(0xb78)] += _0x4d681d, this[_0xf1e691(0xb78)] > this[_0xf1e691(0x1593)] && (this[_0xf1e691(0xb78)] = 0x0, _0x37057f['default'][_0xf1e691(0x1043)]['SpawnPickupParticlesAt'](this['x'], this['y']));
                        } else {
                            var _0x5e02cf = this[_0xf1e691(0xf02)](this);
                            this['Cursor'][_0xf1e691(0x9b5)](Phaser['Math'][_0xf1e691(0x1470)](_0x5e02cf)), this[_0xf1e691(0x1abc)]['copyPosition'](_0x37057f['default'][_0xf1e691(0x1043)]['Player']), this['Cursor']['x'] += 0.45 * Math['cos'](_0x5e02cf) * this[_0xf1e691(0x6d2)][_0xf1e691(0x12f9)]['width'], this[_0xf1e691(0x1abc)]['y'] += 0.45 * Math['sin'](_0x5e02cf) * this[_0xf1e691(0x6d2)][_0xf1e691(0x12f9)][_0xf1e691(0x140e)], this[_0xf1e691(0x1abc)][_0xf1e691(0x183f)](!0x0), this[_0xf1e691(0x17a0)]['copyPosition'](this[_0xf1e691(0x1abc)]), this[_0xf1e691(0x17a0)][_0xf1e691(0x183f)](!0x0);
                        }
                    } ['setChar'](_0x80599e) {
                        const _0x269dc7 = _0x374659;
                        this[_0x269dc7(0x739)] = _0x80599e, this[_0x269dc7(0x17a0)]['setTexture']('UI', 'Coff.png');
                        let _0x42daa3 = _0x4b2515[_0x269dc7(0xd2c)][this[_0x269dc7(0x739)]];
                        _0x42daa3 && this[_0x269dc7(0x164e)]['setFrame'](_0x42daa3[0x0][_0x269dc7(0x4f0)]);
                    } ['GetTaken']() {
                        const _0x130cb2 = _0x374659;
                        if (!this[_0x130cb2(0x210)] && !this['opened']) {
                            if (this[_0x130cb2(0x739)] !== _0x24ccff['default'][_0x130cb2(0xbc4)] && this['charCFF']) this['scene'][_0x130cb2(0x12a1)][_0x130cb2(0x18bd)]({
                                'targets': this[_0x130cb2(0x164e)],
                                'duration': 0x64,
                                'scaleX': 0x2,
                                'scaleY': 0x4
                            }), this[_0x130cb2(0x6d2)][_0x130cb2(0x12a1)][_0x130cb2(0x18bd)]({
                                'targets': this[_0x130cb2(0x164e)],
                                'duration': 0x190,
                                'y': this['y'] - this['scene']['renderer'][_0x130cb2(0x140e)],
                                'onComplete': () => {
                                    const _0x22f9cb = _0x130cb2;
                                    this[_0x22f9cb(0x164e)][_0x22f9cb(0x183f)](!0x1);
                                }
                            });
                            else {
                                let _0x2b37f4 = this[_0x130cb2(0x6d2)][_0x130cb2(0x18bd)][_0x130cb2(0x758)](this['x'], this['y'], 'Empty', {
                                    'align': 'center'
                                })[_0x130cb2(0x8a2)](0x0)[_0x130cb2(0xb4a)](0xbba)[_0x130cb2(0xf8e)](0.5);
                                this[_0x130cb2(0x6d2)][_0x130cb2(0x12a1)][_0x130cb2(0x18bd)]({
                                    'targets': _0x2b37f4,
                                    'scale': 0x1,
                                    'duration': 0xc8,
                                    'onComplete': () => {
                                        const _0x1bdd24 = _0x130cb2;
                                        this['scene'][_0x1bdd24(0x12a1)][_0x1bdd24(0x18bd)]({
                                            'targets': _0x2b37f4,
                                            'y': _0x2b37f4['y'] - 0x10,
                                            'duration': 0x7d0,
                                            'onComplete': () => {
                                                this['scene']['tweens']['add']({
                                                    'targets': _0x2b37f4,
                                                    'alpha': 0x0,
                                                    'duration': 0x3e8,
                                                    'onComplete': () => {
                                                        const _0x5171c3 = a0_0x6932;
                                                        _0x2b37f4['destroy']();
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            this[_0x130cb2(0x4aa)] && this['OnOpen'](), this[_0x130cb2(0x6f8)] = !0x0, this['Cursor'][_0x130cb2(0x183f)](!0x1), this[_0x130cb2(0x17a0)][_0x130cb2(0x183f)](!0x1), _0x37057f[_0x130cb2(0xd2c)]['Sound']['PlaySound'](_0x4a29cc[_0x130cb2(0xd2c)][_0x130cb2(0xf9f)], {
                                'volume': 0x2
                            }, 0x96, 0x2), this['scene'][_0x130cb2(0x12a1)]['add']({
                                'targets': this[_0x130cb2(0xf9f)],
                                'y': this['y'] - 0.75 * this['scene'][_0x130cb2(0x12f9)][_0x130cb2(0x140e)],
                                'x': this['x'] - 0.75 * this['scene']['renderer']['width'],
                                'angle': 0x168,
                                'duration': 0x1f4,
                                'scaleX': -0x1,
                                'onComplete': () => {
                                    const _0x24b743 = _0x130cb2;
                                    this[_0x24b743(0xf9f)]['setVisible'](!0x1), super[_0x24b743(0x437)]();
                                }
                            });
                        }
                    }
                }
                _0x1eb387['default'] = _0x52af6a;
            };
