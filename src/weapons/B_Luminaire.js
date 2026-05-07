// Module 0xbf39
// Args: _0x32135c, _0x34a5b2, _0x505374

export default (_0x32135c, _0x34a5b2, _0x505374) => {
                'use strict';
                const _0x216581 = a0_0x6932;
                var _0x18d376 = this && this['__importDefault'] || function(_0x2238db) {
                    const _0x57b82a = _0x216581;
                    return _0x2238db && _0x2238db[_0x57b82a(0x16f1)] ? _0x2238db : {
                        'default': _0x2238db
                    };
                };
                Object['defineProperty'](_0x34a5b2, '__esModule', {
                    'value': !0x0
                }), _0x34a5b2['B_Luminaire'] = void 0x0;
                const _0x4ad144 = _0x18d376(_0x505374(0xa14d)),
                    _0x2c18b5 = _0x18d376(_0x505374(0x5f07)),
                    _0x208709 = _0x18d376(_0x505374(0x1fd7)),
                    _0xf039cf = _0x505374(0x18304),
                    _0x3fbabd = _0x18d376(_0x505374(0x9b68));
                class _0x58e3be extends _0x4ad144['default'] {
                    constructor(_0x49c73d, _0x4206f3, _0x47cf1f, _0x3886c0, _0x3b1e7c) {
                        const _0x10b16a = _0x216581;
                        super(_0x49c73d, _0x4206f3, _0x47cf1f, 'vfx', '_phaser.png', _0x3886c0, _0x3b1e7c), this[_0x10b16a(0x1a0b)] = [0xff0000, 0xffff00, 0xff, 0xff00ff], this[_0x10b16a(0xdb5)] = [0x0, 0x0, 0x0, 0x0, 0x258, 0x258, 0x320, 0x320, 0x0, 0x0, 0x0, 0x0, 0x258, 0x258, 0x320, 0x320, -0x190, -0x190, -0x190, -0x190, 0xc8, 0xc8, 0x190, 0x190, -0x190, -0x190, -0x190, -0x190, 0xc8, 0xc8, 0x190, 0x190], this[_0x10b16a(0x771)] = !0x1, this[_0x10b16a(0x11c7)](_0xf039cf[_0x10b16a(0x10fc)]['SCREEN']), this['TrueWeapon'] = this[_0x10b16a(0x4a1)];
                    } ['OnRecycle']() {
                        const _0x446f21 = _0x216581;
                        var _0x53355a, _0x218b16;
                        if (super[_0x446f21(0x5ce)](), this[_0x446f21(0x771)]) return;
                        this['alreadyRecycled'] = !0x0;
                        let _0x1890b7 = this['AimForRandomEnemyInScreen'](this[_0x446f21(0x131f)][_0x446f21(0x17a9)]);
                        _0x1890b7 ? (this['x'] = _0x1890b7['x'], this['y'] = _0x1890b7['y']) : (this['x'] = _0x2c18b5[_0x446f21(0xd2c)][_0x446f21(0x1043)][_0x446f21(0x10f6)]['x'], this['y'] = _0x2c18b5['default'][_0x446f21(0x1043)]['Player']['y']), _0x2c18b5[_0x446f21(0xd2c)][_0x446f21(0x1267)][_0x446f21(0x7f6)](_0x208709['default'][_0x446f21(0xbd4)], {
                            'detune': this[_0x446f21(0xdb5)][this[_0x446f21(0x19c4)] % this[_0x446f21(0xdb5)]['length']],
                            'volume': 0.15
                        }, 0x190, 0x7), _0x2c18b5[_0x446f21(0xd2c)]['Core'][_0x446f21(0x14d8)][_0x446f21(0x49c)] ? (this['setAlpha'](0.65), this[_0x446f21(0x11c7)](_0xf039cf['BlendModes']['SCREEN'])) : (this[_0x446f21(0xdab)](0.1), this[_0x446f21(0x11c7)](_0xf039cf[_0x446f21(0x10fc)]['NORMAL'])), this['setScale'](0x1), this[_0x446f21(0xb34)](this['colors'][this['indexInWeapon'] % this[_0x446f21(0x1a0b)][_0x446f21(0xed9)]]), this['body']['enable'] = !0x0;
                        let _0x68346e = this[_0x446f21(0x6d2)][_0x446f21(0x12f9)]['height'] / 0x8;
                        null === (_0x53355a = this[_0x446f21(0x660)]) || void 0x0 === _0x53355a || _0x53355a[_0x446f21(0x1a34)](), this[_0x446f21(0x660)] = this['scene'][_0x446f21(0x12a1)][_0x446f21(0x18bd)]({
                            'targets': this,
                            'scaleY': _0x68346e,
                            'scaleX': this[_0x446f21(0x4a1)]['PArea'],
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x9bb1b6 = _0x446f21;
                                this[_0x9bb1b6(0x4a1)][_0x9bb1b6(0x1007)] && this['weapon']['SpawnExplosionAt'](this['x'], this['y']);
                            }
                        }), null === (_0x218b16 = this[_0x446f21(0x1322)]) || void 0x0 === _0x218b16 || _0x218b16[_0x446f21(0x1a34)](), this[_0x446f21(0x1322)] = this[_0x446f21(0x6d2)][_0x446f21(0x12a1)][_0x446f21(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'delay': 0xc8,
                            'duration': 0x64,
                            'onStart': () => {
                                this['body']['enable'] = !0x1;
                            },
                            'onComplete': () => {
                                const _0x32fab6 = _0x446f21;
                                this[_0x32fab6(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x526e67 = _0x216581;
                        super[_0x526e67(0x14fb)](), this['alreadyRecycled'] = !0x1;
                    } ['Update'](_0x4e459d) {
                        const _0x4079d5 = _0x216581;
                        super[_0x4079d5(0xa9f)](_0x4e459d);
                    } ['OnHasHitAnObject'](_0x5ae7b7) {
                        const _0x1148a9 = _0x216581;
                        _0x5ae7b7[_0x1148a9(0xdae)] || (this[_0x1148a9(0x131f)][_0x1148a9(0xb6f)] === _0x3fbabd['default'][_0x1148a9(0x299)] ? this[_0x1148a9(0x4a1)][_0x1148a9(0x155a)](this['x'], this['y'], 0x1, 0x0) : this[_0x1148a9(0x131f)][_0x1148a9(0xb6f)] === _0x3fbabd[_0x1148a9(0xd2c)]['T14_JEWELS'] && this['TryFreeze'](_0x5ae7b7));
                    }
                }
                _0x34a5b2['B_Luminaire'] = _0x58e3be, _0x34a5b2['default'] = _0x58e3be;
            };
