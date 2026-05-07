// Module 0x4389
// Args: _0x37b100, _0xbd28fd, _0x587996

export default (_0x37b100, _0xbd28fd, _0x587996) => {
                'use strict';
                const _0x5e9e44 = a0_0x6932;
                var _0x8f6002 = this && this['__importDefault'] || function(_0x4b5dd0) {
                    const _0x3ad8d = a0_0x6932;
                    return _0x4b5dd0 && _0x4b5dd0['__esModule'] ? _0x4b5dd0 : {
                        'default': _0x4b5dd0
                    };
                };
                Object['defineProperty'](_0xbd28fd, '__esModule', {
                    'value': !0x0
                }), _0xbd28fd['B_Carnage'] = void 0x0;
                const _0x952e6a = _0x8f6002(_0x587996(0xa14d)),
                    _0x5f036a = _0x8f6002(_0x587996(0x5f07)),
                    _0x17584f = _0x587996(0x18304),
                    _0x2c000b = _0x8f6002(_0x587996(0x1fd7)),
                    _0x15806c = _0x8f6002(_0x587996(0x5103)),
                    _0x327617 = _0x8f6002(_0x587996(0x9b68));
                class _0x461fa6 extends _0x952e6a['default'] {
                    constructor(_0x4cb195, _0x4874cf, _0x5653a1, _0x53babd, _0xa78f7e) {
                        const _0xbdb918 = _0x5e9e44;
                        super(_0x4cb195, _0x4874cf, _0x5653a1, 'vfx', 'round.png', _0x53babd, _0xa78f7e), this[_0xbdb918(0x13a3)] = new Array(), this[_0xbdb918(0xc9f)] = [], this[_0xbdb918(0x617)] = 0x32, this[_0xbdb918(0x7cd)] = 0xff0000, this[_0xbdb918(0x6dc)] = 0x0, this[_0xbdb918(0xc8f)] = 0x0, this['totalTime'] = 0x0, this[_0xbdb918(0x6d2)]['physics']['world']['on']('worldbounds', this['Bounce'], this), this['setVisible'](!0x1), this['trail'] = this[_0xbdb918(0x6d2)][_0xbdb918(0x18bd)][_0xbdb918(0x523)]({
                            'x': 0x0,
                            'y': 0x0,
                            'lineStyle': {
                                'width': 0x1,
                                'color': 0xff0000,
                                'alpha': 0x1
                            },
                            'fillStyle': {
                                'color': 0xff0000,
                                'alpha': 0x1
                            }
                        }), this[_0xbdb918(0x1234)] = this['weapon'];
                    } ['OnRecycle']() {
                        const _0x5c7eba = _0x5e9e44;
                        super['OnRecycle'](), this[_0x5c7eba(0xcf9)]['setCircle'](0x8), this[_0x5c7eba(0xb1f)] = 1.1, this[_0x5c7eba(0xb34)](0xffff), this['canExplode'] = !0x0, _0x5f036a[_0x5c7eba(0xd2c)][_0x5c7eba(0x1043)][_0x5c7eba(0x6d2)][_0x5c7eba(0x915)][_0x5c7eba(0x17fb)](this[_0x5c7eba(0x12a3)]), this[_0x5c7eba(0x1a0)] = 0x0, this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this[_0x5c7eba(0xcf9)][_0x5c7eba(0xda7)](_0x5f036a['default']['Core']['Player'][_0x5c7eba(0xc00)]), this['body']['onWorldBounds'] = !0x0, this['trail']['x'] = this['x'] - _0x5f036a[_0x5c7eba(0xd2c)][_0x5c7eba(0x1043)][_0x5c7eba(0x10f6)]['x'], this[_0x5c7eba(0x3b8)]['y'] = this['y'] - _0x5f036a['default'][_0x5c7eba(0x1043)][_0x5c7eba(0x10f6)]['y'], this[_0x5c7eba(0x7cd)] = 0xddff, this['trail'][_0x5c7eba(0xe71)] = 0x1, this[_0x5c7eba(0xe71)] = 0x1, this['clearPositions'](), this[_0x5c7eba(0x12a3)] = _0x5f036a['default'][_0x5c7eba(0x1043)]['scene'][_0x5c7eba(0x915)][_0x5c7eba(0x12b8)]({
                            'delay': this['weapon'][_0x5c7eba(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x56fd43 = _0x5c7eba;
                                _0x5f036a['default'][_0x56fd43(0x1043)][_0x56fd43(0x6d2)][_0x56fd43(0x915)][_0x56fd43(0x17fb)](this['ExpireTimer']), this['FadeOut']();
                            }
                        }), this[_0x5c7eba(0x12a3)][_0x5c7eba(0x226)] = 'DI Expire', _0x5f036a[_0x5c7eba(0xd2c)][_0x5c7eba(0x1267)][_0x5c7eba(0x7f6)](_0x2c000b[_0x5c7eba(0xd2c)]['MagicMissile'], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0.15
                        }, 0xc8, 0xa);
                    } ['OnHasHitWall'](_0x5dc1e0) {
                        const _0x3ff1f5 = _0x5e9e44;
                        this['save_vel_x'] *= _0x5dc1e0[_0x3ff1f5(0x18c9)] || _0x5dc1e0['faceLeft'] ? -0x1 : 0x1, this['save_vel_y'] *= _0x5dc1e0['faceTop'] || _0x5dc1e0['faceBottom'] ? -0x1 : 0x1, this[_0x3ff1f5(0x19c8)](this[_0x3ff1f5(0x6dc)], this[_0x3ff1f5(0xc8f)]), this['objectsHit'] = [], this[_0x3ff1f5(0x69d)]();
                    } ['OnHasHitAnObject'](_0xc6ba15) {
                        const _0x219338 = _0x5e9e44;
                        _0xc6ba15['isDead'] || _0x5f036a['default']['Core']['Arcanas'][_0x219338(0x15e7)][_0x219338(0x1303)](_0x327617['default']['T14_JEWELS']) > -0x1 && this['TryFreeze'](_0xc6ba15);
                    } ['Explode']() {
                        const _0x12f133 = _0x5e9e44;
                        this['canExplode'] && (this['canExplode'] = !0x1, this[_0x12f133(0x6d2)][_0x12f133(0x915)]['removeEvent'](this['ExplodeTimer']), this[_0x12f133(0x179b)] = this[_0x12f133(0x6d2)]['time']['addEvent']({
                            'delay': 0xc8,
                            'callback': () => {
                                const _0x4d195d = _0x12f133;
                                this[_0x4d195d(0x36d)] = !0x0;
                            }
                        }), this[_0x12f133(0x1234)][_0x12f133(0x176b)][_0x12f133(0xada)](this['x'], this['y'], this[_0x12f133(0x4a1)], 0x0), this['exploIndex']++, _0x5f036a[_0x12f133(0xd2c)]['Sound']['PlaySound'](_0x2c000b['default'][_0x12f133(0x136d)], {
                            'detune': this['exploIndex'] % 0x2 == 0x0 ? 0x3e8 : -0x3e8,
                            'volume': 0.2
                        }, 0xc8, 0x4), _0x5f036a['default']['Sound']['PlaySound'](_0x2c000b[_0x12f133(0xd2c)]['ExploGH2'], {
                            'detune': this[_0x12f133(0x1a0)] % 0x2 == 0x0 ? -0x384 : 0x384,
                            'volume': 0.2
                        }, 0xc8, 0x4));
                    } ['SetNullTarget']() {
                        const _0x599eea = _0x5e9e44;
                        let _0x41873d = _0x5f036a['default'][_0x599eea(0x1043)][_0x599eea(0x10f6)][_0x599eea(0x115d)];
                        0x0 === _0x41873d['x'] && 0x0 === _0x41873d['y'] && (_0x41873d['x'] = 0x1), _0x41873d = _0x41873d[_0x599eea(0x183b)](), this[_0x599eea(0x3b9)](_0x41873d);
                    } ['SetTarget'](_0x361992) {
                        const _0x19dc5e = _0x5e9e44;
                        super['SetTarget'](_0x361992);
                        var _0x53a28f = this[_0x19dc5e(0xf02)](this[_0x19dc5e(0x18a7)]),
                            _0xd4c78 = [0xa, -0xa, 0x14, -0x14, 0x1e, -0x1e, 0x28, -0x28, 0x32, -0x32];
                        this[_0x19dc5e(0x6d2)]['physics'][_0x19dc5e(0x18fc)](_0x53a28f + Phaser['Math'][_0x19dc5e(0x54d)](_0xd4c78[this['indexInWeapon'] % _0xd4c78['length']]), this[_0x19dc5e(0xfbb)], this[_0x19dc5e(0xcf9)]['velocity']);
                        var _0x24c825 = Phaser[_0x19dc5e(0x24f)][_0x19dc5e(0x1551)][_0x19dc5e(0x7bf)];
                        this[_0x19dc5e(0x9b5)](Phaser[_0x19dc5e(0x24f)]['RadToDeg'](Math['atan2'](this['body'][_0x19dc5e(0xf4e)]['y'] - _0x24c825['y'], this[_0x19dc5e(0xcf9)][_0x19dc5e(0xf4e)]['x'] - _0x24c825['x'])));
                    } ['Bounce'](_0x310269) {
                        const _0x38e459 = _0x5e9e44;
                        this[_0x38e459(0xcf9)] === _0x310269 && (this[_0x38e459(0x990)] = [], this['Explode']());
                    } ['FadeOut']() {
                        const _0x3c3011 = _0x5e9e44;
                        this['scene']['tweens']['add']({
                            'targets': [this[_0x3c3011(0x3b8)], this],
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['DeSpawn']() {
                        super['DeSpawn']();
                    }
                    get['customAngle']() {
                        const _0x52b19c = _0x5e9e44;
                        return Phaser['Math']['RadToDeg'](this[_0x52b19c(0x7c6)](this['body']['velocity']));
                    } ['Update'](_0x25a675) {
                        const _0x5559ed = _0x5e9e44;
                        this[_0x5559ed(0x3b8)]['setDepth'](this['y'] - _0x5f036a[_0x5559ed(0xd2c)][_0x5559ed(0x1043)][_0x5559ed(0x10f6)]['y'] + 0.5 * this['scene'][_0x5559ed(0x12f9)]['height']), this['totalTime'] += _0x25a675;
                        let _0x21ad84 = Math[_0x5559ed(0xdeb)](_0x25a675 / 0x10);
                        for (let _0x47512f = 0x0; _0x47512f < _0x21ad84; _0x47512f++) this['trailUpdate']();
                        this[_0x5559ed(0x6dc)] = 0x0 == this[_0x5559ed(0xcf9)][_0x5559ed(0xf4e)]['x'] ? this['save_vel_x'] : this['body']['velocity']['x'], this[_0x5559ed(0xc8f)] = 0x0 == this[_0x5559ed(0xcf9)]['velocity']['y'] ? this['save_vel_y'] : this['body']['velocity']['y'];
                    } ['AngleFromVelocityRadians'](_0x4858b8) {
                        const _0x56e64c = _0x5e9e44;
                        var _0x286620 = Phaser['Math'][_0x56e64c(0x1551)]['RIGHT'];
                        return Math['atan2'](_0x4858b8['y'] - _0x286620['y'], _0x4858b8['x'] - _0x286620['x']);
                    } ['clearPositions']() {
                        const _0x50d24e = _0x5e9e44;
                        this[_0x50d24e(0xc9f)] = [];
                    } ['trailUpdate']() {
                        const _0x3bcba8 = _0x5e9e44,
                            _0x54196b = 0x2 * _0x15806c['default'][_0x3bcba8(0x15db)] * this[_0x3bcba8(0x4a1)][_0x3bcba8(0x5f5)];
                        if (this[_0x3bcba8(0xd40)]) this[_0x3bcba8(0xc9f)][_0x3bcba8(0x2f9)]([this['x'], this['y']]), this['positions'][_0x3bcba8(0xed9)] > this[_0x3bcba8(0x617)] && this['positions'][_0x3bcba8(0xcfe)]();
                        else {
                            if (this['positions'][_0x3bcba8(0xed9)] > this['maxPositions'] - 0xa) {
                                for (var _0x1ae1b7 = 0x0; _0x1ae1b7 < this[_0x3bcba8(0xc9f)]['length']; _0x1ae1b7++) _0x1ae1b7 > this[_0x3bcba8(0x617)] - 0xa && this[_0x3bcba8(0xc9f)][_0x3bcba8(0x16ea)](_0x1ae1b7, 0x1);
                            }
                            this[_0x3bcba8(0xc9f)][_0x3bcba8(0xed9)] > 0x1 ? (this[_0x3bcba8(0xc9f)][_0x3bcba8(0x2f9)]([this['x'], this['y']]), this['positions'][_0x3bcba8(0xcfe)]()) : this[_0x3bcba8(0x138f)]();
                        }
                        for (var _0x1ae1b7 of (this['trail'][_0x3bcba8(0x159)](), this[_0x3bcba8(0x3b8)][_0x3bcba8(0xfcb)](), Array(this[_0x3bcba8(0xc9f)][_0x3bcba8(0xed9)])[_0x3bcba8(0x204)]())) 0x0 != _0x1ae1b7 && (this[_0x3bcba8(0x3b8)][_0x3bcba8(0x191d)](_0x54196b, this[_0x3bcba8(0x7cd)], 0x1 / (_0x1ae1b7 / 0x14)), this[_0x3bcba8(0x3b8)]['moveTo'](this[_0x3bcba8(0xc9f)][_0x1ae1b7 - 0x1][0x0], this[_0x3bcba8(0xc9f)][_0x1ae1b7 - 0x1][0x1]), this[_0x3bcba8(0x3b8)][_0x3bcba8(0xc2c)](this[_0x3bcba8(0xc9f)][_0x1ae1b7][0x0], this[_0x3bcba8(0xc9f)][_0x1ae1b7][0x1]));
                        this[_0x3bcba8(0x3b8)][_0x3bcba8(0x13c1)](), this[_0x3bcba8(0x3b8)][_0x3bcba8(0x194f)](), this['trail']['beginPath']();
                        for (let _0x25969a = 0x0; _0x25969a < 0x32; _0x25969a++) 0x0 != _0x25969a && this['positions'][_0x25969a] && this['positions'][_0x25969a - 0x1] && (this[_0x3bcba8(0x3b8)]['lineStyle'](0.5 * _0x54196b, 0xffffff, 0.8 / (_0x25969a / 0x14)), this['trail'][_0x3bcba8(0xebe)](this[_0x3bcba8(0xc9f)][_0x25969a - 0x1][0x0], this[_0x3bcba8(0xc9f)][_0x25969a - 0x1][0x1]), this['trail'][_0x3bcba8(0xc2c)](this['positions'][_0x25969a][0x0], this['positions'][_0x25969a][0x1]));
                        this['trail'][_0x3bcba8(0x13c1)](), this['trail'][_0x3bcba8(0x194f)](), this[_0x3bcba8(0x3b8)]['blendMode'] = _0x17584f[_0x3bcba8(0x10fc)][_0x3bcba8(0x1811)];
                    }
                }
                _0xbd28fd['B_Carnage'] = _0x461fa6, _0xbd28fd['default'] = _0x461fa6;
            };
