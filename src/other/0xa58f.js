// Module 0xa58f
// Args: _0x541b95, _0x34f8b0, _0x100bc4

export default (_0x541b95, _0x34f8b0, _0x100bc4) => {
                'use strict';
                const _0x2dc41a = a0_0x6932;
                var _0x3494cc = this && this['__importDefault'] || function(_0x29a6a4) {
                    const _0x412ce8 = _0x2dc41a;
                    return _0x29a6a4 && _0x29a6a4[_0x412ce8(0x16f1)] ? _0x29a6a4 : {
                        'default': _0x29a6a4
                    };
                };
                Object['defineProperty'](_0x34f8b0, '__esModule', {
                    'value': !0x0
                });
                const _0x433966 = _0x100bc4(0x18304),
                    _0x3b487f = _0x3494cc(_0x100bc4(0x1fd7)),
                    _0x5a6e34 = _0x3494cc(_0x100bc4(0x5f07)),
                    _0x1f2078 = _0x3494cc(_0x100bc4(0xa021));
                class _0x167517 extends _0x1f2078['default'] {
                    constructor() {
                        const _0xa4c4b6 = _0x2dc41a;
                        super(...arguments), this[_0xa4c4b6(0x1438)] = null;
                    } ['OnRecycle']() {
                        const _0x32ab8e = _0x2dc41a;
                        super[_0x32ab8e(0x5ce)](), this[_0x32ab8e(0x8ee)] || (this['ringSprite'] = this['scene']['add'][_0x32ab8e(0x568)](this['x'], this['y'], 'vfx', 'sPFX_ring_64.png')['setScale'](0x0)[_0x32ab8e(0x11c7)](_0x433966['BlendModes'][_0x32ab8e(0x1811)])), this['setScale'](0x0), this[_0x32ab8e(0xd9b)] = this['scene']['tweens'][_0x32ab8e(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x32ab8e(0x17ef)],
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x420cde = _0x32ab8e;
                                this[_0x420cde(0x8a2)](0x0);
                            }
                        }), this[_0x32ab8e(0x766)] = !0x0, this[_0x32ab8e(0x15a1)] = !0x1, this[_0x32ab8e(0x3c3)] = 0.5 * this[_0x32ab8e(0x6d2)]['renderer']['height'] - 0x18, this[_0x32ab8e(0x1b8)] = 0.5 * Math['PI'], this['setOrigin'](0.5), this['isSpinning'] = !0x0, this['isRunning'] = !0x1, this[_0x32ab8e(0x6ac)] = -0x1, this[_0x32ab8e(0x177d)] = !0x1, this[_0x32ab8e(0xaa8)] = !0x0, this['depth'] = 0x2710, this['rosaried'] = !0x1, this['isTeleportOnCull'] = !0x0, this['x'] = _0x5a6e34['default']['Core']['Player']['x'] - this[_0x32ab8e(0x3c3)], this['y'] = _0x5a6e34['default'][_0x32ab8e(0x1043)][_0x32ab8e(0x10f6)]['y'], this[_0x32ab8e(0x183e)]['play']('idle'), this[_0x32ab8e(0xfe3)](this['x'] + 0x20, this['y'] - 0x10);
                    } ['Update'](_0x50f071) {
                        const _0x36d62b = _0x2dc41a;
                        super[_0x36d62b(0xa9f)](_0x50f071);
                    } ['Die']() {
                        const _0x517ef4 = _0x2dc41a;
                        super['Die'](), _0x5a6e34[_0x517ef4(0xd2c)]['Sound'][_0x517ef4(0x7f6)](_0x3b487f['default'][_0x517ef4(0x82c)], {
                            'volume': 0x4,
                            'detune': 0x0,
                            'rate': 0x1
                        }, 0x96, 0x2), this[_0x517ef4(0x6d2)]['tweens'][_0x517ef4(0x18bd)]({
                            'targets': this['ringSprite'],
                            'scale': 0x10,
                            'duration': 0x12c,
                            'repeat': 0x1,
                            'onStart': () => {
                                const _0x4f1cee = _0x517ef4;
                                this['ringSprite']['x'] = this['x'], this[_0x4f1cee(0x8ee)]['y'] = this['y'];
                            },
                            'onComplete': () => {
                                this['ringSprite']['setVisible'](!0x1);
                            }
                        }), this['onDefeat'] && (this['onDefeat'](), this['onDefeat'] = null);
                    } ['DeSpawn']() {
                        const _0x635c64 = _0x2dc41a;
                        super[_0x635c64(0x14fb)](), this[_0x635c64(0x1438)] && (this[_0x635c64(0x1438)](), this['onDefeat'] = null);
                    } ['SingleWarning'](_0x325bde, _0x3bacd0) {
                        const _0x23bd4a = _0x2dc41a;
                        let _0x3a09ee = this[_0x23bd4a(0x6d2)]['add'][_0x23bd4a(0x568)](_0x325bde, _0x3bacd0, 'UI', 'ExclamationMark.png')[_0x23bd4a(0x8a2)](0x0)['setOrigin'](0.5, 0x1)[_0x23bd4a(0xb4a)](0x2328);
                        this[_0x23bd4a(0x6d2)][_0x23bd4a(0x12a1)][_0x23bd4a(0x18bd)]({
                            'targets': _0x3a09ee,
                            'scale': 0x1,
                            'duration': 0xc8,
                            'delay': 0x3e8,
                            'onStart': () => {
                                const _0x253880 = _0x23bd4a;
                                _0x5a6e34[_0x253880(0xd2c)][_0x253880(0x1267)][_0x253880(0x7f6)](_0x3b487f['default']['Pizza'], {
                                    'volume': 0.9,
                                    'detune': 0x4b0,
                                    'rate': 0x1
                                }, 0x96, 0x2);
                            },
                            'onComplete': () => {
                                const _0x27c476 = _0x23bd4a;
                                this[_0x27c476(0x6d2)][_0x27c476(0x12a1)][_0x27c476(0x18bd)]({
                                    'targets': _0x3a09ee,
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        });
                    }
                }
                _0x34f8b0['default'] = _0x167517;
            };
