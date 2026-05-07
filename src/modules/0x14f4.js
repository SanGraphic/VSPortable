// Module 0x14f4
// Args: _0x1dd578, _0x2b6a76, _0x4e5244

export default (_0x1dd578, _0x2b6a76, _0x4e5244) => {
                'use strict';
                const _0x204820 = a0_0x6932;
                var _0x30d8d7 = this && this['__importDefault'] || function(_0x1fa5a9) {
                    return _0x1fa5a9 && _0x1fa5a9['__esModule'] ? _0x1fa5a9 : {
                        'default': _0x1fa5a9
                    };
                };
                Object['defineProperty'](_0x2b6a76, '__esModule', {
                    'value': !0x0
                }), _0x2b6a76['B_Trapano2'] = void 0x0;
                const _0x5e94dc = _0x30d8d7(_0x4e5244(0xa14d)),
                    _0x3ef1f8 = _0x30d8d7(_0x4e5244(0x5f07)),
                    _0x5db59a = _0x30d8d7(_0x4e5244(0x1fd7)),
                    _0x56b71a = _0x4e5244(0x18304),
                    _0x5a1b83 = _0x30d8d7(_0x4e5244(0x9b68));
                class _0x260553 extends _0x5e94dc['default'] {
                    constructor(_0x45821f, _0x978d27, _0x1bf84d, _0x1aaaba, _0x57dd90) {
                        const _0x4824f5 = _0x204820;
                        super(_0x45821f, _0x978d27, _0x1bf84d, 'vfx', 'circle8.png', _0x1aaaba, _0x57dd90), this['save_vel_x'] = -0x1, this[_0x4824f5(0xc8f)] = -0x1, this[_0x4824f5(0x998)] = 0x1, this[_0x4824f5(0xa21)] = !0x0, this[_0x4824f5(0x39a)] = 0x1, this['radius'] = 0x8, this[_0x4824f5(0x47f)] = 1.5, this['positions'] = [], this[_0x4824f5(0x617)] = 0x32, this['color'] = 0x220022, this[_0x4824f5(0x1653)] = [_0x5db59a[_0x4824f5(0xd2c)][_0x4824f5(0x148a)], _0x5db59a[_0x4824f5(0xd2c)][_0x4824f5(0x26f)], _0x5db59a[_0x4824f5(0xd2c)][_0x4824f5(0x6b6)], _0x5db59a['default'][_0x4824f5(0xfa3)]], this[_0x4824f5(0x492)] = 0x3e8 / 0x3c, this[_0x4824f5(0xb78)] = 0x0, this[_0x4824f5(0x3b8)] = this['scene'][_0x4824f5(0x18bd)]['graphics']({
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
                        }), this['color'] = [0xff0000, 0xffff00, 0xff, 0xff00ff][_0x57dd90 % 0x4], this[_0x4824f5(0x919)] = this[_0x4824f5(0x6d2)][_0x4824f5(0x18bd)]['circle'](0x0, 0x0, this['radius'], this[_0x4824f5(0x7cd)])[_0x4824f5(0xf8e)](0.5)['setAlpha'](0.5)[_0x4824f5(0x183f)](!0x0)[_0x4824f5(0x11c7)](_0x56b71a[_0x4824f5(0x10fc)]['ADD']), this[_0x4824f5(0x183f)](!0x1), this[_0x4824f5(0x58c)] = new Phaser[(_0x4824f5(0x24f))]['Vector2'](), this['aimVec'] = new Phaser[(_0x4824f5(0x24f))][(_0x4824f5(0x1551))](), this[_0x4824f5(0x75e)] = this[_0x4824f5(0x6d2)]['add'][_0x4824f5(0x105b)](this['x'], this['x'], 'vfx', 'flame000.png')[_0x4824f5(0x8a2)](0x0)[_0x4824f5(0xf8e)](0.5);
                        let _0x4b0753 = this[_0x4824f5(0x183e)][_0x4824f5(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': 0x1c,
                            'zeroPad': 0x3,
                            'prefix': 'flame',
                            'suffix': '.png'
                        });
                        this['durata'] = 0x0, this[_0x4824f5(0x75e)][_0x4824f5(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x4b0753,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this['spikeSprite']['anims'][_0x4824f5(0x902)]('idle'), this['trueWeapon'] = this[_0x4824f5(0x4a1)];
                    } ['onEmitcustomTint'](_0x289bb5, _0x361f63, _0x3eddcf) {
                        const _0x4f5fec = _0x204820;
                        return Phaser['Math']['RND'][_0x4f5fec(0x198c)]([0xff8888, 0x88ff88, 0x88ff88, 0xffff88]);
                    } ['OnRecycle']() {
                        const _0x410bcf = _0x204820;
                        var _0x54a513, _0x4d23a0;
                        super[_0x410bcf(0x5ce)](), this['isCullable'] = !0x1, this[_0x410bcf(0x3b8)][_0x410bcf(0x159)](), this[_0x410bcf(0x3b8)][_0x410bcf(0xdab)](0x1), this['trail']['x'] = this['x'] - _0x3ef1f8[_0x410bcf(0xd2c)][_0x410bcf(0x1043)][_0x410bcf(0x10f6)]['x'], this[_0x410bcf(0x3b8)]['y'] = this['y'] - _0x3ef1f8[_0x410bcf(0xd2c)][_0x410bcf(0x1043)][_0x410bcf(0x10f6)]['y'], this['trail'][_0x410bcf(0xe71)] = 0x1, this[_0x410bcf(0x138f)](), this['setScale'](0x1), this[_0x410bcf(0xcf9)]['setCircle'](0x8, -0x4, -0x4), this[_0x410bcf(0xcf9)]['enable'] = !0x0, this[_0x410bcf(0x990)] = [], this['isYeeted'] = !0x1, this[_0x410bcf(0x75e)][_0x410bcf(0x183f)](!0x0), this['GroundFx']['setVisible'](!0x0), this[_0x410bcf(0x183f)](!0x1), this[_0x410bcf(0x39a)] = 0x1, this['setAlpha'](0x1), this[_0x410bcf(0x75e)][_0x410bcf(0xdab)](0x1), this[_0x410bcf(0x919)]['setAlpha'](0.5), this['save_vel_x'] = 0x1, this['save_vel_y'] = 0x1, this[_0x410bcf(0x9dc)]['x'] = 0x0, this['aimVec']['y'] = 0x0, this[_0x410bcf(0x58c)]['x'] = _0x3ef1f8['default'][_0x410bcf(0x1043)]['Player'][_0x410bcf(0xcf9)][_0x410bcf(0xf4e)]['x'], this['previousVector']['y'] = _0x3ef1f8['default'][_0x410bcf(0x1043)][_0x410bcf(0x10f6)]['body']['velocity']['y'], this[_0x410bcf(0x58c)][_0x410bcf(0x183b)](), this['setVelocity'](0x0, 0x0), null === (_0x54a513 = this[_0x410bcf(0x11e0)]) || void 0x0 === _0x54a513 || _0x54a513[_0x410bcf(0x1a34)](), this[_0x410bcf(0x75e)]['x'] = this['x'], this[_0x410bcf(0x75e)]['y'] = this['y'] + 0x8, this['spikeSprite']['angle'] = 0x0, this[_0x410bcf(0x919)]['x'] = this['x'], this[_0x410bcf(0x919)]['y'] = this['y'], this['scaleX'] = this[_0x410bcf(0x919)]['scaleX'] = 0x0, this[_0x410bcf(0x1721)] = this[_0x410bcf(0x919)]['scaleY'] = 0x0, null === (_0x4d23a0 = this[_0x410bcf(0x1995)]) || void 0x0 === _0x4d23a0 || _0x4d23a0[_0x410bcf(0x1a34)](), this[_0x410bcf(0x1995)] = this['scene'][_0x410bcf(0x12a1)]['add']({
                            'targets': [this, this['spikeSprite']],
                            'scale': this[_0x410bcf(0x4a1)]['PArea'],
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x580d33 = _0x410bcf;
                                this['scaleX'] = 0x0, this[_0x580d33(0x1721)] = 0x0, this['spikeSprite']['scaleX'] = 0x0, this['spikeSprite']['scaleY'] = 0x0, this[_0x580d33(0x919)]['scaleX'] = 0x0, this[_0x580d33(0x919)]['scaleY'] = 0x0;
                            }
                        }), this[_0x410bcf(0x6d2)][_0x410bcf(0x12a1)][_0x410bcf(0x18bd)]({
                            'targets': this[_0x410bcf(0x919)],
                            'scale': 1.1 * this[_0x410bcf(0x4a1)]['PArea'],
                            'duration': 0x12c,
                            'yoyo': !0x0
                        }), _0x3ef1f8[_0x410bcf(0xd2c)][_0x410bcf(0x1043)]['scene'][_0x410bcf(0x915)]['removeEvent'](this[_0x410bcf(0x8b9)]), this[_0x410bcf(0x8b9)] = _0x3ef1f8['default']['Core'][_0x410bcf(0x6d2)][_0x410bcf(0x915)]['addEvent']({
                            'delay': this['weapon'][_0x410bcf(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x26f1ac = _0x410bcf;
                                this[_0x26f1ac(0x990)] = [];
                            }
                        }), this['durata'] = 0x0, _0x3ef1f8[_0x410bcf(0xd2c)]['Core']['scene']['time'][_0x410bcf(0x17fb)](this[_0x410bcf(0x12a3)]), this[_0x410bcf(0x12a3)] = _0x3ef1f8['default']['Core']['scene'][_0x410bcf(0x915)][_0x410bcf(0x12b8)]({
                            'delay': this[_0x410bcf(0x4a1)]['PDuration'],
                            'loop': !0x0,
                            'callback': () => {
                                this['FadeOut']();
                            }
                        });
                    } ['FadeOut']() {
                        const _0x30d54c = _0x204820;
                        this['scene'][_0x30d54c(0x12a1)][_0x30d54c(0x18bd)]({
                            'targets': [this['spikeSprite'], this, this['GroundFx'], this[_0x30d54c(0x3b8)]],
                            'alpha': 0x0,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x2b7f03 = _0x30d54c;
                                this[_0x2b7f03(0x14fb)]();
                            }
                        });
                    } ['Update'](_0x5684f0) {
                        const _0x142c70 = _0x204820;
                        if (this[_0x142c70(0x16c6)] = this[_0x142c70(0x919)][_0x142c70(0x16c6)] = -this[_0x142c70(0x6d2)][_0x142c70(0x12f9)]['height'], this['spikeSprite'][_0x142c70(0x16c6)] = this['y'] - _0x3ef1f8['default'][_0x142c70(0x1043)]['Player']['y'] - 0x1, this[_0x142c70(0x919)]['x'] = this['spikeSprite']['x'] = this['x'], this['GroundFx']['y'] = this[_0x142c70(0x75e)]['y'] = this['y'], this['isYeeted']) {
                            this[_0x142c70(0x3b8)]['setDepth'](this['y'] - _0x3ef1f8[_0x142c70(0xd2c)][_0x142c70(0x1043)][_0x142c70(0x10f6)]['y'] + 0.5 * this[_0x142c70(0x6d2)]['renderer'][_0x142c70(0x140e)]);
                            let _0x5c3165 = Math[_0x142c70(0xdeb)](_0x5684f0 / 0x10);
                            for (let _0x2fa58b = 0x0; _0x2fa58b < _0x5c3165; _0x2fa58b++) this['trailUpdate']();
                        } else {
                            if (this['durata'] += _0x5684f0, 0x0 === _0x3ef1f8[_0x142c70(0xd2c)]['Core'][_0x142c70(0x10f6)]['body'][_0x142c70(0xf4e)]['x'] && 0x0 === _0x3ef1f8['default'][_0x142c70(0x1043)][_0x142c70(0x10f6)][_0x142c70(0xcf9)][_0x142c70(0xf4e)]['y']) {
                                if (0x0 === this[_0x142c70(0x58c)]['x'] && 0x0 === this[_0x142c70(0x58c)]['y']) return;
                                this[_0x142c70(0x13d)](), this[_0x142c70(0x1a7f)] = !0x0;
                            } else this[_0x142c70(0x1a7f)] || (this['previousVector']['x'] = _0x3ef1f8['default'][_0x142c70(0x1043)][_0x142c70(0x10f6)]['body']['velocity']['x'], this['previousVector']['y'] = _0x3ef1f8['default'][_0x142c70(0x1043)]['Player'][_0x142c70(0xcf9)]['velocity']['y'], this[_0x142c70(0x4a1)][_0x142c70(0x712)] > 0x1 && (this['aimVec']['x'] = this[_0x142c70(0x9dc)]['x'] - 0.002 * (_0x3ef1f8[_0x142c70(0xd2c)][_0x142c70(0x1043)][_0x142c70(0x10f6)][_0x142c70(0xcf9)][_0x142c70(0xf4e)]['x'] - this[_0x142c70(0x9dc)]['x']), this['aimVec']['y'] = this[_0x142c70(0x9dc)]['y'] - 0.002 * (_0x3ef1f8[_0x142c70(0xd2c)][_0x142c70(0x1043)][_0x142c70(0x10f6)]['body'][_0x142c70(0xf4e)]['y'] - this['aimVec']['y']), this['setVelocity'](this[_0x142c70(0x9dc)]['x'] * this[_0x142c70(0x4a1)]['PSpeed'], this['aimVec']['y'] * this[_0x142c70(0x4a1)][_0x142c70(0x712)])));
                        }
                    } ['Yeet']() {
                        const _0x4fa856 = _0x204820;
                        let _0x102862 = this[_0x4fa856(0x7c6)](this[_0x4fa856(0x58c)]);
                        this[_0x4fa856(0xd96)] = Phaser[_0x4fa856(0x24f)]['RadToDeg'](_0x102862), this[_0x4fa856(0x19c8)](0x0, 0x0);
                        let _0x396ddc = 0x1c2 * this['weapon'][_0x4fa856(0x5f5)];
                        this[_0x4fa856(0x6d2)]['tweens']['add']({
                            'targets': [this],
                            'x': this['x'] + _0x396ddc * Math[_0x4fa856(0xd7e)](_0x102862),
                            'y': this['y'] + _0x396ddc * Math['sin'](_0x102862),
                            'duration': 0x96,
                            'delay': 0x32 * this[_0x4fa856(0x19c4)],
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x4528c6 = _0x4fa856;
                                _0x3ef1f8[_0x4528c6(0xd2c)]['Sound']['PlaySound'](_0x5db59a['default'][_0x4528c6(0x9ca)], {
                                    'detune': -0x64 * this['indexInWeapon'],
                                    'volume': 0.15
                                }, 0xc8, 0xc);
                            },
                            'onComplete': () => {
                                this['FadeOut']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x24d3f7 = _0x204820;
                        var _0x116211, _0x54f8a2, _0x5d3a03;
                        _0x3ef1f8['default'][_0x24d3f7(0x1043)][_0x24d3f7(0x6d2)][_0x24d3f7(0x915)]['removeEvent'](this[_0x24d3f7(0x12a3)]), _0x3ef1f8[_0x24d3f7(0xd2c)][_0x24d3f7(0x1043)][_0x24d3f7(0x6d2)][_0x24d3f7(0x915)][_0x24d3f7(0x17fb)](this[_0x24d3f7(0x8b9)]), null === (_0x116211 = this[_0x24d3f7(0x11e0)]) || void 0x0 === _0x116211 || _0x116211[_0x24d3f7(0x1a34)](), null === (_0x54f8a2 = this['tween1']) || void 0x0 === _0x54f8a2 || _0x54f8a2['stop'](), null === (_0x5d3a03 = this['tween2']) || void 0x0 === _0x5d3a03 || _0x5d3a03['stop'](), this[_0x24d3f7(0x75e)][_0x24d3f7(0x183f)](!0x1), this['scaleX'] = 0x0, this[_0x24d3f7(0x1721)] = 0x0, this[_0x24d3f7(0x919)][_0x24d3f7(0x183f)](!0x1), this[_0x24d3f7(0x183f)](!0x1), this[_0x24d3f7(0xcf9)][_0x24d3f7(0x543)] = !0x1, super[_0x24d3f7(0x14fb)]();
                    } ['clearPositions']() {
                        this['positions'] = [];
                    } ['trailUpdate']() {
                        const _0x289ef2 = _0x204820,
                            _0x4d2586 = Math[_0x289ef2(0xdeb)](0x4 * this['weapon']['PArea']);
                        if (this[_0x289ef2(0xd40)]) this[_0x289ef2(0xc9f)][_0x289ef2(0x2f9)]([this['x'], this['y']]), this[_0x289ef2(0xc9f)][_0x289ef2(0xed9)] > this['maxPositions'] && this[_0x289ef2(0xc9f)]['pop']();
                        else {
                            if (this['positions']['length'] > this[_0x289ef2(0x617)] - 0xa) {
                                for (var _0x4beefc = 0x0; _0x4beefc < this[_0x289ef2(0xc9f)]['length']; _0x4beefc++) _0x4beefc > this['maxPositions'] - 0xa && this[_0x289ef2(0xc9f)][_0x289ef2(0x16ea)](_0x4beefc, 0x1);
                            }
                            this[_0x289ef2(0xc9f)][_0x289ef2(0xed9)] > 0x1 ? (this['positions']['unshift']([this['x'], this['y']]), this[_0x289ef2(0xc9f)][_0x289ef2(0xcfe)]()) : this[_0x289ef2(0x138f)]();
                        }
                        for (var _0x4beefc of (this[_0x289ef2(0x3b8)][_0x289ef2(0x159)](), this[_0x289ef2(0x3b8)][_0x289ef2(0xfcb)](), Array(this[_0x289ef2(0xc9f)][_0x289ef2(0xed9)])['keys']())) 0x0 != _0x4beefc && (this[_0x289ef2(0x3b8)][_0x289ef2(0x191d)](_0x4d2586, this['color'], 0.25), this[_0x289ef2(0x3b8)]['moveTo'](this[_0x289ef2(0xc9f)][_0x4beefc - 0x1][0x0], this[_0x289ef2(0xc9f)][_0x4beefc - 0x1][0x1]), this[_0x289ef2(0x3b8)][_0x289ef2(0xc2c)](this['positions'][_0x4beefc][0x0], this[_0x289ef2(0xc9f)][_0x4beefc][0x1]));
                        this[_0x289ef2(0x3b8)][_0x289ef2(0x13c1)](), this[_0x289ef2(0x3b8)][_0x289ef2(0x194f)](), this[_0x289ef2(0x3b8)][_0x289ef2(0xfcb)]();
                        for (let _0x445b7e = 0x0; _0x445b7e < 0x32; _0x445b7e++) 0x0 != _0x445b7e && this[_0x289ef2(0xc9f)][_0x445b7e] && this[_0x289ef2(0xc9f)][_0x445b7e - 0x1] && (this[_0x289ef2(0x3b8)]['lineStyle'](0.5 * _0x4d2586, 0xffffff, 0.25), this['trail']['moveTo'](this[_0x289ef2(0xc9f)][_0x445b7e - 0x1][0x0], this[_0x289ef2(0xc9f)][_0x445b7e - 0x1][0x1]), this['trail'][_0x289ef2(0xc2c)](this[_0x289ef2(0xc9f)][_0x445b7e][0x0], this[_0x289ef2(0xc9f)][_0x445b7e][0x1]));
                        this[_0x289ef2(0x3b8)]['closePath'](), this['trail']['strokePath'](), this['trail'][_0x289ef2(0x11c7)](_0x56b71a[_0x289ef2(0x10fc)]['ADD']);
                    } ['OnHasHitAnObject'](_0x1b833c) {
                        const _0x370b61 = _0x204820;
                        if (!_0x1b833c[_0x370b61(0xdae)]) {
                            if (!this['isYeeted']) return;
                            _0x3ef1f8['default'][_0x370b61(0x1043)][_0x370b61(0x1884)]['ActiveArcanas'][_0x370b61(0x1303)](_0x5a1b83[_0x370b61(0xd2c)]['T19_FIRE']) > -0x1 && this['weapon'][_0x370b61(0x155a)](this['x'], this['y'], 0x1, 0x0);
                        }
                    }
                }
                _0x2b6a76['B_Trapano2'] = _0x260553, _0x2b6a76['default'] = _0x260553;
            };
