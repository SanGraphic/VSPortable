// Module 0x8504
// Args: _0x366c9f, _0xdb7c1d, _0x54204c

export default (_0x366c9f, _0xdb7c1d, _0x54204c) => {
                'use strict';
                const _0x4aad31 = a0_0x6932;
                var _0x3b5147 = this && this['__importDefault'] || function(_0x5c2f7a) {
                    const _0x2db1b4 = a0_0x6932;
                    return _0x5c2f7a && _0x5c2f7a['__esModule'] ? _0x5c2f7a : {
                        'default': _0x5c2f7a
                    };
                };
                Object['defineProperty'](_0xdb7c1d, '__esModule', {
                    'value': !0x0
                });
                const _0x583502 = _0x3b5147(_0x54204c(0x5f07)),
                    _0x233a7e = _0x3b5147(_0x54204c(0xc42e)),
                    _0x57bae3 = _0x3b5147(_0x54204c(0x5103)),
                    _0x3170a1 = _0x3b5147(_0x54204c(0x54e3)),
                    _0x5627cd = _0x54204c(0x18304),
                    _0x1d22a3 = _0x54204c(0x15ee2);
                class _0x58b8d7 extends _0x1d22a3['PickupGuarded'] {
                    constructor(_0x1ade0f, _0x2a6dff, _0xfcc47d) {
                        const _0x5063a7 = _0x4aad31;
                        super(_0x1ade0f, _0x2a6dff, _0xfcc47d, _0x233a7e[_0x5063a7(0xd2c)]['WEAPON']), this[_0x5063a7(0x15f6)] = _0x3170a1['default'][_0x5063a7(0xbc4)], this[_0x5063a7(0x1593)] = 0xc8, this[_0x5063a7(0xb78)] = 0x64, this[_0x5063a7(0x1935)] = 0x1, this['triggerDelay'] = 0x1e, _0x583502[_0x5063a7(0xd2c)][_0x5063a7(0x1043)]['scene']['add']['existing'](this), this[_0x5063a7(0x8a2)](_0x57bae3['default'][_0x5063a7(0x15db)]), this[_0x5063a7(0xc6e)] = !0x0, this['glow'] = new Phaser['GameObjects'][(_0x5063a7(0xa97))](_0x583502[_0x5063a7(0xd2c)][_0x5063a7(0x1043)]['scene'], _0x2a6dff, _0xfcc47d, 'vfx', 'round.png'), this['particles'] = this['scene'][_0x5063a7(0x18bd)][_0x5063a7(0x1791)]('vfx'), this['pfxEmitter'] = this['particles'][_0x5063a7(0x14c0)]({
                            'frame': ['_runes_02.png', '_runes_03.png', '_runes_04.png', '_runes_05.png', '_runes_06.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x7d0,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'min': 0xf0,
                                'max': 0x12c
                            },
                            'speed': {
                                'min': 0xa,
                                'max': 0x32
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0.3,
                                'end': 0.5
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1f4,
                            'tint': 0xaaffff,
                            'blendMode': 'ADD',
                            'on': !0x0
                        });
                    } ['OnRecycle']() {
                        const _0x1b8378 = _0x4aad31;
                        var _0xc53de7, _0x1fab0e;
                        super[_0x1b8378(0x5ce)](), this['colorValue'] = 0x0, null === (_0xc53de7 = this[_0x1b8378(0x781)]) || void 0x0 === _0xc53de7 || _0xc53de7[_0x1b8378(0x1a34)](), this[_0x1b8378(0xcf9)][_0x1b8378(0xdf6)](0x18, -0xc, 0xc), this[_0x1b8378(0x1791)][_0x1b8378(0xb4a)](this['depth']), this[_0x1b8378(0x6d2)]['add']['existing'](this[_0x1b8378(0x1a6f)]), this[_0x1b8378(0x1a6f)][_0x1b8378(0x726)](this['x'], this['y']), this[_0x1b8378(0x1a6f)]['setBlendMode'](_0x5627cd['BlendModes'][_0x1b8378(0x1811)]), this['glow']['setAlpha'](0.5), null === (_0x1fab0e = this[_0x1b8378(0x536)]) || void 0x0 === _0x1fab0e || _0x1fab0e[_0x1b8378(0x1a34)](), this['glowTween'] && this[_0x1b8378(0x6d2)]['tweens'][_0x1b8378(0x393)](this[_0x1b8378(0x536)]), this[_0x1b8378(0x536)] = this[_0x1b8378(0x6d2)][_0x1b8378(0x12a1)][_0x1b8378(0x18bd)]({
                            'targets': this['glow'],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), this[_0x1b8378(0x183f)](!0x1), this[_0x1b8378(0xb8c)][_0x1b8378(0x726)](this['x'], this['y']);
                    } ['DeSpawn']() {} ['Update'](_0x5904ff) {
                        const _0x475cec = _0x4aad31;
                        super[_0x475cec(0xa9f)](_0x5904ff), this['setDepth'](0x9 + this['y'] - _0x583502['default'][_0x475cec(0x1043)][_0x475cec(0x10f6)]['y']), this[_0x475cec(0x1791)][_0x475cec(0x16c6)] = this['depth'], this['glow'][_0x475cec(0x726)](this['x'], this['y'] - 0x30), this['glow'][_0x475cec(0xb4a)](this['y'] - _0x583502['default'][_0x475cec(0x1043)][_0x475cec(0x10f6)]['y']), this[_0x475cec(0x3f3)] += 0.1, this[_0x475cec(0x1a6f)][_0x475cec(0xb34)](Phaser[_0x475cec(0xa82)][_0x475cec(0x150d)]['GetColor'](0xff * Math[_0x475cec(0x19db)](Math[_0x475cec(0xc80)](this[_0x475cec(0x3f3)])), 0xff * Math[_0x475cec(0x19db)](Math['cos'](0.5 * this[_0x475cec(0x3f3)])), 0xc8 + 0x37 * Math['abs'](Math['cos'](this['colorValue'])))), this['triggerDelay'] = 0x4e20, this['canTeleport'] = !0x0;
                    } ['GetTaken']() {
                        const _0x747d76 = _0x4aad31;
                        this['disableGet'] || this['canTeleport'] && (this[_0x747d76(0x102a)] = !0x1, this['Disable'](), this[_0x747d76(0x1767)][_0x747d76(0xb21)](), _0x583502['default']['Core']['Player']['x'] = this[_0x747d76(0x1784)], _0x583502[_0x747d76(0xd2c)]['Core'][_0x747d76(0x10f6)]['y'] = this['destinationY']);
                    } ['LinkTo'](_0x4ea96a) {
                        const _0x1f7495 = _0x4aad31;
                        this[_0x1f7495(0x1767)] = _0x4ea96a, this[_0x1f7495(0x1784)] = _0x4ea96a['x'], this[_0x1f7495(0x29c)] = _0x4ea96a['y'];
                    } ['Disable']() {
                        const _0x154d77 = _0x4aad31;
                        this['body']['enable'] = !0x1, this[_0x154d77(0x1a6f)][_0x154d77(0x183f)](!0x1), this['pfxEmitter']['stop'](), this[_0x154d77(0x6d2)][_0x154d77(0x915)][_0x154d77(0x12b8)]({
                            'callback': () => {
                                const _0x5444b0 = _0x154d77;
                                this[_0x5444b0(0x102a)] = !0x0, this[_0x5444b0(0xcf9)][_0x5444b0(0x543)] = !0x0, this['glow'][_0x5444b0(0x183f)](!0x0), this[_0x5444b0(0xb8c)][_0x5444b0(0x1aa2)]();
                            },
                            'delay': this['triggerDelay']
                        });
                    }
                }
                _0xdb7c1d['default'] = _0x58b8d7;
            };
