// Module 0x5fe5
// Args: _0x5426a5, _0x5d1c35, _0x544daa

export default (_0x5426a5, _0x5d1c35, _0x544daa) => {
                'use strict';
                const _0x19efdb = a0_0x6932;
                var _0x288955 = this && this['__importDefault'] || function(_0x14d72e) {
                    const _0x188f54 = _0x19efdb;
                    return _0x14d72e && _0x14d72e[_0x188f54(0x16f1)] ? _0x14d72e : {
                        'default': _0x14d72e
                    };
                };
                Object['defineProperty'](_0x5d1c35, '__esModule', {
                    'value': !0x0
                });
                const _0x3fbddf = _0x288955(_0x544daa(0x15abc)),
                    _0x19dd31 = _0x288955(_0x544daa(0x9bda)),
                    _0x2ae19c = _0x288955(_0x544daa(0xc42e)),
                    _0x7bcd80 = _0x288955(_0x544daa(0x1fd7)),
                    _0x25da93 = _0x288955(_0x544daa(0x54e3)),
                    _0xbc9274 = _0x288955(_0x544daa(0x5103)),
                    _0x2dc643 = _0x288955(_0x544daa(0x5f07)),
                    _0x46c667 = _0x288955(_0x544daa(0x1166a)),
                    _0x5e3276 = _0x288955(_0x544daa(0x3988));
                class _0xfbdad7 extends _0x46c667['default'] {
                    constructor() {
                        const _0x563f25 = _0x19efdb;
                        super(...arguments), this['radius'] = 0xc8, this[_0x563f25(0xc92)] = [_0x19dd31[_0x563f25(0xd2c)][_0x563f25(0x1507)], _0x19dd31[_0x563f25(0xd2c)]['SKELETON2'], _0x19dd31[_0x563f25(0xd2c)][_0x563f25(0x18a6)], _0x19dd31[_0x563f25(0xd2c)][_0x563f25(0xfd6)], _0x19dd31[_0x563f25(0xd2c)][_0x563f25(0x1375)], _0x19dd31[_0x563f25(0xd2c)][_0x563f25(0x10cd)], _0x19dd31[_0x563f25(0xd2c)]['SKELETONE'], _0x19dd31[_0x563f25(0xd2c)]['SKELEWING_ZONE'], _0x19dd31['default']['SKULLNOAURA'], _0x19dd31[_0x563f25(0xd2c)]['SKULLNOAURA']];
                    } ['GetDistanceFromPlayer']() {
                        const _0x2f9a71 = _0x19efdb;
                        let _0x54c100 = new Phaser[(_0x2f9a71(0x24f))][(_0x2f9a71(0x1551))](this['x'], this['y']);
                        return new Phaser['Math']['Vector2'](_0x2dc643['default']['Core'][_0x2f9a71(0x10f6)]['x'], _0x2dc643['default']['Core']['Player']['y'])[_0x2f9a71(0x1468)](_0x54c100);
                    } ['OnRecycle']() {
                        const _0x248d32 = _0x19efdb;
                        super[_0x248d32(0x5ce)](), this[_0x248d32(0x187a)] = !0x1, this[_0x248d32(0x177d)] = !0x1, this[_0x248d32(0x1b1c)] = _0x3fbddf['default'][this[_0x248d32(0xe49)]][0x0]['speed'], this['_currentDirection']['x'] = 0x1, this[_0x248d32(0x116d)] || (this[_0x248d32(0x116d)] = _0x2dc643['default'][_0x248d32(0x1043)]['scene']['sound'][_0x248d32(0x18bd)](_0x7bcd80['default']['Noise'], {
                            'loop': !0x1,
                            'volume': 0x0
                        })), this['MapToken'] || (this['MapToken'] = new _0x5e3276['default'](), _0x2dc643['default'][_0x248d32(0x1043)]['MapTokens'][_0x248d32(0x1564)](this[_0x248d32(0x3be)])), this['OnSineTween'] ? this[_0x248d32(0x18e8)][_0x248d32(0x1374)]() : (this['sineF'] = 0x1, this[_0x248d32(0x18e8)] = this['scene'][_0x248d32(0x12a1)][_0x248d32(0x18bd)]({
                            'targets': this,
                            'sineF': 0.7,
                            'duration': 0x4e20,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        })), this[_0x248d32(0x164f)] = 0x3 * this[_0x248d32(0x1169)](), this[_0x248d32(0x1990)] || (this[_0x248d32(0x1990)] = this['scene']['add'][_0x248d32(0x1990)](this['x'], this['y']), this[_0x248d32(0xb4c)] = new Phaser['Geom']['Circle'](this['x'], this['y'], this[_0x248d32(0x161a)]), this[_0x248d32(0x2c5)](0xfa, 0.75, 0x1, 0x1, !0x1), this[_0x248d32(0x2c5)](0x96, 0.5, 0.75, 1.5, !0x0), this[_0x248d32(0x2c5)](0x64, 0x0, 0.5, 0x2, !0x0), this['lives'] = Math[_0x248d32(0xdeb)](this['maxHp'] / 0x1f4), this['lifeValue'] = this['maxHp'] / 0x1f4, this[_0x248d32(0x6e2)] = 0x0);
                        for (let _0x3746ae = 0x0; _0x3746ae < this['enemiesArray'][_0x248d32(0xed9)]; _0x3746ae++) {
                            const _0xc54a6c = this[_0x248d32(0xc92)][_0x3746ae];
                            _0x3fbddf[_0x248d32(0xd2c)][_0xc54a6c] && _0x3fbddf['default'][_0xc54a6c][0x0] && _0x3fbddf[_0x248d32(0xd2c)][_0xc54a6c][0x0]['killedAmount'] && (this[_0x248d32(0xd2e)] += 0.1 * _0x3fbddf['default'][_0xc54a6c][0x0][_0x248d32(0xaed)]);
                        }
                        this[_0x248d32(0xd2e)] > 0x2a30 && (this['maxHp'] = 0x2a30), this['hp'] = this['maxHp'], this['setOrigin'](0.5), this['setScale'](0.25);
                        var _0x5eb86e = this[_0x248d32(0x161a)];
                        this[_0x248d32(0xcf9)]['setCircle'](_0x5eb86e, -_0x5eb86e, -_0x5eb86e);
                    } ['CheckDirectionDelayed']() {
                        const _0x2180e7 = _0x19efdb;
                        this[_0x2180e7(0x683)] = this['scene'][_0x2180e7(0x915)][_0x2180e7(0x12b8)]({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x496062 = _0x2180e7;
                                this[_0x496062(0x407)]();
                            }
                        });
                    } ['CheckDirection']() {
                        const _0x1e8718 = _0x19efdb;
                        this[_0x1e8718(0xdae)] || (this['x'] > 0x2800 ? (this[_0x1e8718(0x70d)]['x'] = -0x1, this['x'] = 0x2800) : this['x'] <= -0x2800 && (this['_currentDirection']['x'] = 0x1, this['x'] = -0x2800));
                    } ['Update'](_0xc94b89 = 0x0) {
                        const _0x4c6d94 = _0x19efdb;
                        if (this['isDead']) return;
                        this['CheckDirection'](), this[_0x4c6d94(0x78e)] = this[_0x4c6d94(0x1b1c)] * this['sineF'], this['MapToken']['x'] = this['x'], this['MapToken']['y'] = this['y'], this[_0x4c6d94(0x16c6)] = 0x1, this[_0x4c6d94(0x1990)][_0x4c6d94(0x16c6)] = 0x1;
                        let _0x5722f2 = this[_0x4c6d94(0x1169)]();
                        this['noise'] && (this[_0x4c6d94(0x116d)][_0x4c6d94(0x1378)] = (0x1 - Math[_0x4c6d94(0x1084)](0x1, _0x5722f2 / this[_0x4c6d94(0x164f)])) * _0x2dc643[_0x4c6d94(0xd2c)]['Core'][_0x4c6d94(0x14d8)][_0x4c6d94(0x1366)] * 0.1), this['noise']['isPlaying'] || this['noise'][_0x4c6d94(0x902)](), this[_0x4c6d94(0x1992)] = this['radius'] < 0x96 ? 0.9 : 0x0;
                        let _0x3f1277 = this['receivingDamage'] ? -this['knockback'] : 0x1,
                            _0x381a59 = this['_currentDirection']['x'] > 0x0;
                        this[_0x4c6d94(0xb8d)](_0x381a59), this[_0x4c6d94(0x70d)]['y'] = 0x0;
                        let _0x50961a = _0xbc9274[_0x4c6d94(0xd2c)][_0x4c6d94(0xc23)] * this['speed'] * _0x3f1277 * this[_0x4c6d94(0x13fb)];
                        this['setVelocity'](_0x50961a * this[_0x4c6d94(0x70d)]['x'], _0x50961a * this[_0x4c6d94(0x70d)]['y']), this[_0x4c6d94(0x1990)][_0x4c6d94(0xf01)](this), this['container']['setScale'](this['scale']), this[_0x4c6d94(0xcf9)]['angularVelocity'] = this['body']['velocity'];
                        let _0x1bc8da = this['body']['velocity'][_0x4c6d94(0xed9)]();
                        if (this[_0x4c6d94(0x1990)][_0x4c6d94(0xd96)] += _0x1bc8da / (0xa * this[_0x4c6d94(0x161a)]) * _0xc94b89 * (_0x381a59 ? 0x1 : -0x1), this['fixedCircle']['x'] = this['x'], this['fixedCircle']['y'] = this['y'], this[_0x4c6d94(0xb4c)][_0x4c6d94(0x161a)] = this['radius'], this['speed'] = Math['max'](0.5 * _0xbc9274[_0x4c6d94(0xd2c)]['PlayerPxSpeed'], _0xbc9274[_0x4c6d94(0xd2c)]['PlayerPxSpeed'] - 0.01 * this['radius']), _0x5722f2 < 0xea60)
                            for (let _0x2333b0 = 0x0; _0x2333b0 < _0x2dc643[_0x4c6d94(0xd2c)][_0x4c6d94(0x1043)][_0x4c6d94(0x1a91)]['length']; _0x2333b0++) {
                                const _0x227c06 = _0x2dc643[_0x4c6d94(0xd2c)][_0x4c6d94(0x1043)][_0x4c6d94(0x1a91)][_0x2333b0];
                                if (_0x227c06 !== this && this['fixedCircle'][_0x4c6d94(0x1780)](_0x227c06['x'], _0x227c06['y'])) {
                                    if (_0x227c06[_0x4c6d94(0xdae)]) continue;
                                    _0x227c06[_0x4c6d94(0xe00)](), this['scale'] < 0x1 ? this[_0x4c6d94(0x7cb)] += 0.001 : this[_0x4c6d94(0x7cb)] < 1.5 ? this['scale'] += 0.00085 : this['scale'] < 0x2 ? this[_0x4c6d94(0x7cb)] += 0.00065 : this['scale'] < 0x3 ? this[_0x4c6d94(0x7cb)] += 0.0005 : this['scale'] < 0x4 && (this[_0x4c6d94(0x7cb)] += 0.00025), this[_0x4c6d94(0x161a)] = 0xc8 * this[_0x4c6d94(0x7cb)];
                                    let _0x2c4669 = Math[_0x4c6d94(0x1981)](0x1, this['scale']),
                                        _0x4059b9 = 0.2 * _0x227c06[_0x4c6d94(0xd2e)],
                                        _0x485d84 = Math[_0x4c6d94(0x1084)](0xfa, _0x4059b9 / _0x2c4669);
                                    this['hp'] += _0x485d84, this[_0x4c6d94(0xd2e)] += _0x485d84;
                                }
                            }
                    } ['Die']() {
                        const _0x2b4b00 = _0x19efdb;
                        this[_0x2b4b00(0xdae)] || (this[_0x2b4b00(0x116d)] && this[_0x2b4b00(0x116d)][_0x2b4b00(0x1a34)](), this[_0x2b4b00(0x380)](), _0x2dc643['default']['Core'][_0x2b4b00(0x49d)](this[_0x2b4b00(0x3be)]), -0x1 === _0x2dc643['default']['Core'][_0x2b4b00(0x14d8)][_0x2b4b00(0x1481)]['indexOf'](_0x2ae19c[_0x2b4b00(0xd2c)][_0x2b4b00(0x1747)]) && _0x2dc643[_0x2b4b00(0xd2c)][_0x2b4b00(0x1043)][_0x2b4b00(0x13f8)](this['x'], this['y'], _0x2ae19c['default'][_0x2b4b00(0x22f)], _0x25da93['default'][_0x2b4b00(0xbc4)], 0x1, _0x2ae19c[_0x2b4b00(0xd2c)][_0x2b4b00(0x1747)]), super['Die']());
                    } ['Disappear']() {
                        const _0x1e84f0 = _0x19efdb;
                        this[_0x1e84f0(0xdae)] || (this[_0x1e84f0(0x116d)] && this[_0x1e84f0(0x116d)][_0x1e84f0(0x1a34)](), this['MakeSpritesDisappear'](), _0x2dc643['default'][_0x1e84f0(0x1043)]['RemoveMapToken'](this[_0x1e84f0(0x3be)]), super[_0x1e84f0(0xe00)]());
                    } ['MakeSpritesDisappear']() {
                        const _0x2eaf0f = _0x19efdb;
                        this[_0x2eaf0f(0x1990)]['each'](_0x206923 => {
                            const _0x32d12d = _0x2eaf0f;
                            this['scene'][_0x32d12d(0x915)][_0x32d12d(0x12b8)]({
                                'delay': 0x3e8 * Math['random'](),
                                'callback': () => {
                                    const _0x1a4b88 = _0x32d12d;
                                    _0x206923[_0x1a4b88(0x183e)]['play']('die');
                                }
                            });
                        }), this[_0x2eaf0f(0x6d2)]['time'][_0x2eaf0f(0x12b8)]({
                            'delay': 0x5dc,
                            'callback': () => {
                                this['container']['setVisible'](!0x1);
                            }
                        });
                    } ['AddBones'](_0x158db1, _0x9c2ec3, _0x5d0f71, _0x598887, _0x7d3e82) {
                        const _0x485285 = _0x19efdb;
                        for (let _0x4615e5 = 0x0; _0x4615e5 < _0x158db1; _0x4615e5++) {
                            let _0x5e1b86 = _0x3fbddf[_0x485285(0xd2c)][Phaser[_0x485285(0x24f)][_0x485285(0x82a)]['pick'](this[_0x485285(0xc92)])];
                            if (!_0x5e1b86) continue;
                            if (!_0x5e1b86[0x0]) continue;
                            let _0x3666e8 = 0x2 * Math['PI'] * _0x4615e5 / _0x158db1,
                                _0x241b42 = this['scene']['add']['sprite'](((_0x5d0f71 - _0x9c2ec3) * Math[_0x485285(0x9ad)]() + _0x9c2ec3) * this[_0x485285(0x161a)] * Math[_0x485285(0xd7e)](_0x3666e8), ((_0x5d0f71 - _0x9c2ec3) * Math[_0x485285(0x9ad)]() + _0x9c2ec3) * this[_0x485285(0x161a)] * Math['sin'](_0x3666e8), _0x5e1b86[0x0][_0x485285(0xacb)], _0x5e1b86[0x0][_0x485285(0xe8f)][0x0]);
                            _0x241b42[_0x485285(0x4d4)] = Math['random']() >= 0.5, _0x241b42[_0x485285(0xd96)] = 0xb4 * Math['random']() + Phaser['Math'][_0x485285(0x1470)](_0x3666e8), _0x241b42['scale'] = 0x1 + Math[_0x485285(0x9ad)]() * _0x598887;
                            const _0x274133 = _0x241b42[_0x485285(0x183e)]['generateFrameNames'](_0x5e1b86[0x0][_0x485285(0xacb)], {
                                'start': 0x0,
                                'end': _0x5e1b86[0x0]['end'],
                                'zeroPad': 0x0,
                                'prefix': _0x5e1b86[0x0][_0x485285(0xe8f)][0x0]['replace']('0.png', ''),
                                'suffix': '.png'
                            });
                            if (_0x241b42[_0x485285(0x183e)]['create']({
                                    'key': 'die',
                                    'frames': _0x274133,
                                    'frameRate': 0x18,
                                    'repeat': 0x0
                                }), _0x5e1b86[0x0]['idleFrameCount']) {
                                const _0x12e866 = this['anims'][_0x485285(0x1756)](_0x5e1b86[0x0]['textureName'], {
                                    'start': 0x1,
                                    'end': _0x5e1b86[0x0][_0x485285(0x9cb)],
                                    'zeroPad': 0x2,
                                    'prefix': _0x5e1b86[0x0]['frameNames'][0x0][_0x485285(0xa0d)]('0.png', '') + 'i',
                                    'suffix': '.png'
                                });
                                _0x241b42[_0x485285(0x183e)][_0x485285(0x6a8)]({
                                    'key': 'idle',
                                    'frames': _0x12e866,
                                    'frameRate': 0x8,
                                    'repeat': -0x1
                                });
                            }
                            _0x241b42['anims']['play']('idle'), this['container'][_0x485285(0x18bd)](_0x241b42);
                        }
                    }
                }
                _0x5d1c35['default'] = _0xfbdad7;
            };
