// Module 0xf72e
// Args: _0x2fa9fc, _0x3f75d1, _0x45a3c9

export default (_0x2fa9fc, _0x3f75d1, _0x45a3c9) => {
                'use strict';
                const _0x56007b = a0_0x6932;
                var _0x37d24c = this && this['__importDefault'] || function(_0x2f4e2) {
                    return _0x2f4e2 && _0x2f4e2['__esModule'] ? _0x2f4e2 : {
                        'default': _0x2f4e2
                    };
                };
                Object['defineProperty'](_0x3f75d1, '__esModule', {
                    'value': !0x0
                }), _0x3f75d1['B_ShadowServant'] = void 0x0;
                const _0x288bec = _0x37d24c(_0x45a3c9(0xa14d)),
                    _0x47224d = _0x37d24c(_0x45a3c9(0x5f07)),
                    _0x1787d8 = _0x37d24c(_0x45a3c9(0x1fd7)),
                    _0x4d5e28 = _0x37d24c(_0x45a3c9(0x7c1));
                class _0x2c1ba0 extends _0x288bec['default'] {
                    constructor(_0xf1c833, _0x54d2bd, _0xd201ea, _0x4b601b, _0x30fe95) {
                        const _0x298444 = _0x56007b;
                        super(_0xf1c833, _0x54d2bd, _0xd201ea, 'vfx', 'bubbleSphere2.png', _0x4b601b, _0x30fe95), this[_0x298444(0xb1f)] = 0.5, this['TrueWeapon'] = this[_0x298444(0x4a1)], this['setFrame'](this[_0x298444(0x131f)][_0x298444(0x241)]), this['DisplaySprite'] = this[_0x298444(0x6d2)][_0x298444(0x18bd)][_0x298444(0x105b)](_0x54d2bd, _0xd201ea, 'vfx', 'snakeW_i01.png');
                        let _0x56d432 = this[_0x298444(0x1555)][_0x298444(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': this[_0x298444(0x131f)][_0x298444(0x67c)],
                            'suffix': '.png'
                        });
                        this['DisplaySprite'][_0x298444(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x56d432,
                            'frameRate': 0xc,
                            'repeat': -0x1
                        }), this[_0x298444(0x1555)]['anims']['play']('idle');
                        let _0x378fb5 = this['DisplaySprite'][_0x298444(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': 0xb,
                            'zeroPad': 0x0,
                            'prefix': this['TrueWeapon']['snakeDieSpriteName'],
                            'suffix': '.png'
                        });
                        this['DisplaySprite']['anims'][_0x298444(0x6a8)]({
                            'key': 'die',
                            'frames': _0x378fb5,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x298444(0x7fb)] = {
                            'x': _0x54d2bd,
                            'y': _0xd201ea,
                            'counter': 0x1
                        }, this[_0x298444(0x3b8)] = new _0x4d5e28[(_0x298444(0xd2c))](this[_0x298444(0x6d2)], 0x0, 0x0, 'vfx', this[_0x298444(0x131f)][_0x298444(0x3a1)], 0x10, !0x0), this[_0x298444(0x3b8)][_0x298444(0x1807)] = this[_0x298444(0x7fb)], this['trail']['setScale'](0x1), this[_0x298444(0x3b8)][_0x298444(0xb4a)](this[_0x298444(0x16c6)]), this[_0x298444(0x3b8)][_0x298444(0x183f)](!0x1), this['scene'][_0x298444(0x18bd)][_0x298444(0x1a88)](this[_0x298444(0x3b8)]);
                    } ['OnRecycle']() {
                        const _0x34d646 = _0x56007b;
                        super[_0x34d646(0x5ce)](), this['setScale'](0x1), this[_0x34d646(0xcf9)][_0x34d646(0xdf6)](0x8), this[_0x34d646(0xcf9)]['enable'] = !0x0, this[_0x34d646(0x183f)](!0x1), this[_0x34d646(0x3b8)][_0x34d646(0x183f)](!0x1), this['isExploding'] = !0x1, this['TrailFollower'][_0x34d646(0x144)] = 0x1, this[_0x34d646(0x1555)][_0x34d646(0x183f)](!0x0), this[_0x34d646(0x1555)][_0x34d646(0x183e)][_0x34d646(0x902)]('idle'), this['x'] += (Math[_0x34d646(0x9ad)]() - 0.5) * this[_0x34d646(0x19c4)] * 0xa, this['y'] += (Math[_0x34d646(0x9ad)]() - 0.5) * this['indexInWeapon'] * 0xa, this[_0x34d646(0xbc8)](), _0x47224d[_0x34d646(0xd2c)][_0x34d646(0x1267)][_0x34d646(0x7f6)](_0x1787d8[_0x34d646(0xd2c)]['MagicMissile'], {
                            'detune': -0x64 * this[_0x34d646(0x19c4)] - 0x1f4,
                            'volume': 0.1
                        }, 0xc8, 0x3);
                    } ['OnHasHitAnObject'](_0x22ca84) {
                        const _0xb74ac9 = _0x56007b;
                        if (this[_0xb74ac9(0x69d)](), !_0x22ca84[_0xb74ac9(0xdae)]) {
                            let _0x3c938f = _0x22ca84;
                            if (_0x3c938f['res_Debuffs'] >= 0x1) return;
                            _0x3c938f['slow'] > 0.2 && this['weapon'][_0xb74ac9(0x68e)]() < this[_0xb74ac9(0x4a1)][_0xb74ac9(0xd71)] * _0x47224d['default']['Core']['Player']['PLuck'] && (_0x3c938f['slow'] -= 0.05);
                        }
                    } ['Explode']() {
                        const _0x2dc499 = _0x56007b;
                        if (this[_0x2dc499(0x149e)]) return;
                        this[_0x2dc499(0x149e)] = !0x0, this['DisplaySprite']['anims'][_0x2dc499(0x902)]('die');
                        let _0x175ada = _0x47224d['default'][_0x2dc499(0x1043)][_0x2dc499(0x14d8)][_0x2dc499(0x49c)];
                        this['setScale'](0x0), this['setVisible'](_0x175ada), this[_0x2dc499(0x143d)] = this[_0x2dc499(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'scale': 0x2 * this[_0x2dc499(0x4a1)][_0x2dc499(0x5f5)],
                            'duration': 0x78,
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x54762f = _0x2dc499;
                                this['setScale'](0x0), this[_0x54762f(0x183f)](_0x175ada);
                            },
                            'onComplete': () => {
                                const _0x2520fb = _0x2dc499;
                                this[_0x2520fb(0x183f)](!0x1), this[_0x2520fb(0xb21)]();
                            },
                            'onUpdate': () => {
                                _0x175ada && this['TrueWeapon']['PfxEmitter']['emitParticleAt'](this['x'], this['y']);
                            }
                        }), this['TrailFollower']['x'] = this['x'], this['TrailFollower']['y'] = this['y'], this['trail'][_0x2dc499(0x103f)](), this[_0x2dc499(0x3b8)]['clearPositions'](), this[_0x2dc499(0x3b8)][_0x2dc499(0x183f)](!0x0), this['trail'][_0x2dc499(0xdab)](0.65), this[_0x2dc499(0x6d2)]['tweens'][_0x2dc499(0x18bd)]({
                            'targets': this['TrailFollower'],
                            'y': this['y'] - 0xc8,
                            'counter': 0x0,
                            'duration': 0x12c,
                            'ease': 'Sine.easeInOut',
                            'onUpdate': () => {
                                const _0x4ef802 = _0x2dc499;
                                this['TrailFollower']['x'] = this['x'] + 0x28 * this[_0x4ef802(0x7fb)][_0x4ef802(0x144)] * Math['sin'](0.1 * this[_0x4ef802(0x7fb)]['y']), this[_0x4ef802(0x3b8)][_0x4ef802(0xe71)] = 0.1 + 0.55 * this[_0x4ef802(0x7fb)]['counter'];
                            },
                            'onComplete': () => {
                                const _0x5ec6f2 = _0x2dc499;
                                this[_0x5ec6f2(0x3b8)][_0x5ec6f2(0x183f)](!0x1), this['DeSpawn']();
                            }
                        });
                    } ['Update']() {
                        const _0x155273 = _0x56007b;
                        this['DisplaySprite']['copyPosition'](this), this['DisplaySprite'][_0x155273(0xd96)] = this[_0x155273(0xd96)], this[_0x155273(0x3b8)][_0x155273(0x12fc)](), this[_0x155273(0x1555)][_0x155273(0xb4a)](-this['scene'][_0x155273(0x12f9)]['height']);
                    } ['Disable']() {
                        const _0x290803 = _0x56007b;
                        this['body'][_0x290803(0x543)] = !0x1;
                    } ['DeSpawn']() {
                        const _0x4756ce = _0x56007b;
                        this[_0x4756ce(0x1555)]['setVisible'](!0x1), super[_0x4756ce(0x14fb)]();
                    }
                }
                _0x3f75d1['B_ShadowServant'] = _0x2c1ba0, _0x3f75d1['default'] = _0x2c1ba0;
            };
