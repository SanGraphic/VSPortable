// Module 0xbc1a
// Args: _0x428de4, _0x484c5f, _0x9e02a3

export default (_0x428de4, _0x484c5f, _0x9e02a3) => {
                'use strict';
                const _0x74ce8d = a0_0x6932;
                var _0x3a5c77 = this && this['__importDefault'] || function(_0x371f15) {
                    return _0x371f15 && _0x371f15['__esModule'] ? _0x371f15 : {
                        'default': _0x371f15
                    };
                };
                Object['defineProperty'](_0x484c5f, '__esModule', {
                    'value': !0x0
                });
                const _0x1f8338 = _0x3a5c77(_0x9e02a3(0x15abc)),
                    _0x55e160 = _0x3a5c77(_0x9e02a3(0x9bda)),
                    _0x38e72a = _0x3a5c77(_0x9e02a3(0x5103)),
                    _0x2382b8 = _0x3a5c77(_0x9e02a3(0x5f07)),
                    _0xa963fe = _0x3a5c77(_0x9e02a3(0x1166a)),
                    _0xe0de97 = _0x3a5c77(_0x9e02a3(0x15ca3));
                class _0x35f7c1 extends _0xa963fe['default'] {
                    constructor(_0xbc0c34, _0x50009f, _0x52610a, _0x27f8ad) {
                        const _0x461b3d = _0x74ce8d;
                        super(_0xbc0c34, _0x50009f, _0x52610a, _0x27f8ad), this[_0x461b3d(0xff4)] = 0x1, this['distance'] = 0xc350, this[_0x461b3d(0x16b4)] = 0x3e8, this['previousDistance'] = 0x0, this[_0x461b3d(0x288)] = 0x0, this[_0x461b3d(0x734)]();
                    } ['InitLancet']() {
                        const _0x403b47 = _0x74ce8d;
                        this['targets'] = new Array(), this[_0x403b47(0x137c)] = new Array();
                        for (let _0x5eb571 = 0x0; _0x5eb571 < 0xc; _0x5eb571++) {
                            var _0x51abdb = _0x5eb571 / 0xc * (0x2 * Math['PI']);
                            this[_0x403b47(0xa76)][_0x403b47(0x1564)]({
                                'x': Math[_0x403b47(0xd7e)](_0x51abdb),
                                'y': Math['sin'](_0x51abdb)
                            }), this[_0x403b47(0x137c)][_0x403b47(0x1564)](_0x51abdb);
                        }
                        this[_0x403b47(0xe64)] = _0x2382b8['default'][_0x403b47(0x1043)][_0x403b47(0x6d2)][_0x403b47(0x18bd)][_0x403b47(0x105b)](0x0, 0x0, 'vfx', 'Pierce1.png'), this['lancet'][_0x403b47(0xf01)](this)['setOrigin'](0x0, 0.5)['setVisible'](!0x1)['setTint'](0xcceeff)[_0x403b47(0x8a2)](0x2, 0x1), this[_0x403b47(0x13ae)] = _0x2382b8['default'][_0x403b47(0x1043)][_0x403b47(0x6d2)][_0x403b47(0x18bd)][_0x403b47(0x99a)]({
                            'targets': this['lancet'],
                            'alpha': 0x0,
                            'delay': 0xc8,
                            'duration': 0x1f4,
                            'ease': 'Linear'
                        });
                        const _0x5d7491 = this[_0x403b47(0xe64)][_0x403b47(0x183e)][_0x403b47(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'Pierce',
                            'suffix': '.png'
                        });
                        this['lancet'][_0x403b47(0x183e)][_0x403b47(0x6a8)]({
                            'key': 'pierce',
                            'frames': _0x5d7491,
                            'frameRate': 0x1e
                        }), this['lancetPool'] = new _0xe0de97[(_0x403b47(0xd2c))](this[_0x403b47(0x6d2)]);
                    } ['Update'](_0x410878 = 0x0) {
                        const _0x3a8bcc = _0x74ce8d;
                        if (this[_0x3a8bcc(0xdae)]) return;
                        if (this[_0x3a8bcc(0x16c6)] = this['y'] - _0x2382b8['default']['Core'][_0x3a8bcc(0x10f6)]['y'], this[_0x3a8bcc(0x14a3)]) return;
                        (!this['FixedDirection'] || this[_0x3a8bcc(0x197a)] && 0x0 == this['_currentDirection']['x'] && 0x0 == this['_currentDirection']['y']) && (this[_0x3a8bcc(0x70d)]['x'] = this['target']['x'] - this['x'], this['_currentDirection']['y'] = this[_0x3a8bcc(0x18a7)]['y'] - this['y'], this[_0x3a8bcc(0x70d)][_0x3a8bcc(0x183b)]());
                        let _0x2dd564 = new Phaser[(_0x3a8bcc(0x24f))]['Vector2'](this['x'], this['y']),
                            _0x6c857 = new Phaser['Math'][(_0x3a8bcc(0x1551))](_0x2382b8['default']['Core'][_0x3a8bcc(0x10f6)]['x'], _0x2382b8[_0x3a8bcc(0xd2c)][_0x3a8bcc(0x1043)][_0x3a8bcc(0x10f6)]['y'])['distanceSq'](_0x2dd564);
                        _0x6c857 < this['distance'] - 0xbb8 ? this[_0x3a8bcc(0xff4)] = -0x1 : _0x6c857 > this[_0x3a8bcc(0x1468)] + 0xbb8 && (this['keepMoving'] = 0x1);
                        let _0x13aacc = this['receivingDamage'] ? -this[_0x3a8bcc(0x1992)] * this['damageKB'] : 0x1;
                        this[_0x3a8bcc(0xb8d)](this[_0x3a8bcc(0x70d)]['x'] > 0x0);
                        let _0x2da548 = this[_0x3a8bcc(0xff4)] * _0x38e72a[_0x3a8bcc(0xd2c)][_0x3a8bcc(0xc23)] * this[_0x3a8bcc(0x78e)] * _0x13aacc * this[_0x3a8bcc(0x13fb)];
                        this['setVelocity'](_0x2da548 * this[_0x3a8bcc(0x70d)]['x'], _0x2da548 * this[_0x3a8bcc(0x70d)]['y']), this[_0x3a8bcc(0x9b5)](_0xa963fe['default'][_0x3a8bcc(0x1404)][this['moveTweenIndex']][_0x3a8bcc(0xd96)]);
                        for (let _0x363c10 = 0x0; _0x363c10 < this['lancetPool'][_0x3a8bcc(0x13f4)][_0x3a8bcc(0xed9)]; _0x363c10++) this['lancetPool'][_0x3a8bcc(0x13f4)][_0x363c10]['Update'](_0x410878);
                    } ['OnRecycle']() {
                        const _0x40b61b = _0x74ce8d;
                        super[_0x40b61b(0x5ce)](), this[_0x40b61b(0x7cb)] = 0x0, this[_0x40b61b(0x7d7)] = 0x0;
                        let _0x49160a = _0x1f8338['default'][this[_0x40b61b(0xe49)]][0x0];
                        this['fireDelay'] = _0x49160a['fireDelay'] || 0x7d0, this[_0x40b61b(0x14e)] = _0x49160a['bulletType'] || _0x55e160[_0x40b61b(0xd2c)]['BULLET_2'], this['OnEnterTween'] ? this['OnEnterTween'][_0x40b61b(0x1374)]() : this['OnEnterTween'] = this[_0x40b61b(0x6d2)][_0x40b61b(0x12a1)][_0x40b61b(0x18bd)]({
                            'targets': this,
                            'scale': this['scaleMul'],
                            'duration': 0x12c
                        }), this['OnFireTimer'] ? this['OnFireTimer'][_0x40b61b(0x1374)]() : this[_0x40b61b(0x2a4)] = this['scene']['tweens']['add']({
                            'duration': this[_0x40b61b(0x16b4)],
                            'targets': this,
                            'firetime': 0x1,
                            'repeat': -0x1,
                            'onRepeat': () => {
                                const _0x488c83 = _0x40b61b;
                                this[_0x488c83(0x1754)]();
                            }
                        });
                    } ['Die']() {
                        const _0xdf96cf = _0x74ce8d;
                        var _0x2cff57;
                        super['Die'](), null === (_0x2cff57 = this['OnFireTimer']) || void 0x0 === _0x2cff57 || _0x2cff57[_0xdf96cf(0x1a34)]();
                    } ['DeSpawn']() {
                        const _0x527e70 = _0x74ce8d;
                        var _0x57e765;
                        super[_0x527e70(0x14fb)](), null === (_0x57e765 = this[_0x527e70(0x2a4)]) || void 0x0 === _0x57e765 || _0x57e765['stop']();
                    } ['Fire']() {
                        const _0x2b035b = _0x74ce8d;
                        if (this['IsTimeStopped']) return;
                        if (this['isDead']) return;
                        this[_0x2b035b(0x288)]++, this['ticks'] >= 0xc && (this['ticks'] = 0x0);
                        let _0x4b73a0 = this[_0x2b035b(0xa76)][this['ticks']];
                        this['lancetTween']['restart'](), this[_0x2b035b(0xe64)][_0x2b035b(0xf01)](this)['setAngle'](Phaser[_0x2b035b(0x24f)]['RadToDeg'](this[_0x2b035b(0x137c)][this['ticks']]))['setVisible'](!0x0)[_0x2b035b(0xb4a)](this[_0x2b035b(0xe64)]['scene'][_0x2b035b(0x12f9)]['height']), this[_0x2b035b(0xe64)][_0x2b035b(0x183e)]['play']('pierce');
                        for (let _0x1023b4 = 0x0; _0x1023b4 < 0x6; _0x1023b4++) this['FireOneLancet'](this['x'], this['y'], _0x1023b4, _0x4b73a0, this['angles'][this['ticks']]);
                        _0x2382b8['default']['Core'][_0x2b035b(0x17c7)][_0x2b035b(0xc4a)](this['x'], this['y'], _0x55e160[_0x2b035b(0xd2c)][_0x2b035b(0xb24)]);
                    } ['FireOneLancet'](_0x56adcd, _0x2b0438, _0xbc6cf8, _0x49d2b9, _0x576d34) {
                        const _0x7d0ad0 = _0x74ce8d;
                        _0x56adcd += 0x32 * _0x49d2b9['x'] * (0x1 + _0xbc6cf8), _0x2b0438 += 0x32 * _0x49d2b9['y'] * (0x1 + _0xbc6cf8);
                        var _0x42bba8 = this['lancetPool']['SpawnAt'](_0x56adcd, _0x2b0438, 0x1e, 0x1e);
                        return null == _0x42bba8 || _0x42bba8[_0x7d0ad0(0x9b5)](Phaser[_0x7d0ad0(0x24f)]['RadToDeg'](_0x576d34)), _0x42bba8;
                    }
                }
                _0x484c5f['default'] = _0x35f7c1;
            };
