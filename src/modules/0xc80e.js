// Module 0xc80e
// Args: _0x1898c9, _0x2ae05e, _0x2745c6

export default (_0x1898c9, _0x2ae05e, _0x2745c6) => {
                'use strict';
                const _0x2a7e00 = a0_0x6932;
                var _0x86fa6d = this && this['__importDefault'] || function(_0x24a4b0) {
                    return _0x24a4b0 && _0x24a4b0['__esModule'] ? _0x24a4b0 : {
                        'default': _0x24a4b0
                    };
                };
                Object['defineProperty'](_0x2ae05e, '__esModule', {
                    'value': !0x0
                }), _0x2ae05e['B_Fireball'] = void 0x0;
                const _0x585ff8 = _0x86fa6d(_0x2745c6(0xa14d)),
                    _0xd1d419 = _0x86fa6d(_0x2745c6(0x5f07)),
                    _0x223606 = _0x86fa6d(_0x2745c6(0x5103)),
                    _0x3cc5f7 = _0x86fa6d(_0x2745c6(0x9b68));
                class _0x480b12 extends _0x585ff8['default'] {
                    constructor(_0x580c7b, _0x188201, _0x266979, _0x3d2698, _0x354fa9) {
                        const _0x1a1f2c = a0_0x6932;
                        super(_0x580c7b, _0x188201, _0x266979, 'vfx', 'ProjectileFireball2.png', _0x3d2698, _0x354fa9), this['setScale'](0x0), this['_speed'] = 0.8, this['PfxEmitter'] = this['scene']['add']['particles']('vfx'), this['PfxEmitter']['createEmitter']({
                            'frame': ['HitBoom1.png', 'HitBoom2.png'],
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'scale': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this['ScaleTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'scale': 0.5 * _0x223606['default']['PixelScale'] * this['weapon']['PArea']
                        }), this['trueWeapon'] = this['weapon'];
                    } ['OnRecycle']() {
                        const _0x540026 = a0_0x6932;
                        super['OnRecycle'](), this['body']['setCircle'](0xc), this['setScale'](0x0), this['_speed'] = 0.8, this['y'] -= 0x10, this['ScaleTween'] && (this['ScaleTween']['stop'](), this['scene']['tweens']['remove'](this['ScaleTween']), this['setScale'](0x0), this['ScaleTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'duration': 0xc8,
                            'ease': 'Linear',
                            'scale': _0x223606['default']['PixelScale'] * this['weapon']['PArea']
                        }), this['ScaleTween']['restart']());
                    } ['SetNullTarget']() {
                        const _0xd0e7af = _0x2a7e00;
                        let _0x33dabf = _0xd1d419[_0xd0e7af(0xd2c)][_0xd0e7af(0x1043)][_0xd0e7af(0x10f6)][_0xd0e7af(0x115d)];
                        0x0 === _0x33dabf['x'] && 0x0 === _0x33dabf['y'] && (_0x33dabf['x'] = 0x1), _0x33dabf = _0x33dabf[_0xd0e7af(0x183b)](), this[_0xd0e7af(0x3b9)](_0x33dabf);
                    } ['SetTarget'](_0x3e386f) {
                        const _0x2eab5c = _0x2a7e00;
                        super['SetTarget'](_0x3e386f);
                        var _0x3e7f0d = this[_0x2eab5c(0xf02)](this[_0x2eab5c(0x18a7)]),
                            _0x2490b2 = [0x0, 0x5, -0x5, 0xa, -0xa, 0xf, -0xf, 0x14, -0x14, 0x19, -0x19, 0x1e, -0x1e, 0x23, -0x23, 0x28, -0x28, 0x2d, -0x2d];
                        this['scene']['physics'][_0x2eab5c(0x18fc)](_0x3e7f0d + Phaser[_0x2eab5c(0x24f)][_0x2eab5c(0x54d)](_0x2490b2[this['indexInWeapon'] % _0x2490b2['length']]), this[_0x2eab5c(0xfbb)], this[_0x2eab5c(0xcf9)]['velocity']);
                        var _0x4c7692 = Phaser['Math'][_0x2eab5c(0x1551)]['RIGHT'];
                        this[_0x2eab5c(0x9b5)](Phaser[_0x2eab5c(0x24f)][_0x2eab5c(0x1470)](Math['atan2'](this[_0x2eab5c(0xcf9)]['velocity']['y'] - _0x4c7692['y'], this['body'][_0x2eab5c(0xf4e)]['x'] - _0x4c7692['x'])));
                    } ['OnHasHitAnObject'](_0x1d1d3a) {
                        const _0x3077d0 = _0x2a7e00;
                        _0x1d1d3a['isDead'] || (_0xd1d419[_0x3077d0(0xd2c)][_0x3077d0(0x1043)][_0x3077d0(0x1884)]['ActiveArcanas'][_0x3077d0(0x1303)](_0x3cc5f7['default']['T19_FIRE']) > -0x1 && this[_0x3077d0(0x4a1)]['SpawnExplosionAt'](this['x'], this['y'], 0x1, 0x0), this[_0x3077d0(0x1b4)] > 0x0 ? (this[_0x3077d0(0x1b4)]--, this[_0x3077d0(0xbc8)](), this[_0x3077d0(0x990)] = []) : (this['penetrating']--, this['penetrating'] <= 0x0 && this[_0x3077d0(0x14fb)]()));
                    } ['OnHasHitWall'](_0x4f54a0) {
                        const _0x12292d = _0x2a7e00;
                        var _0x54e311;
                        _0xd1d419[_0x12292d(0xd2c)]['Core'][_0x12292d(0x1884)][_0x12292d(0x15e7)][_0x12292d(0x1303)](_0x3cc5f7['default'][_0x12292d(0x299)]) > -0x1 && (null === (_0x54e311 = this[_0x12292d(0x1234)]['secondaryPool']) || void 0x0 === _0x54e311 || _0x54e311[_0x12292d(0xada)](this['x'], this['y'], this['weapon'], 0x0)), super[_0x12292d(0x1027)](_0x4f54a0);
                    } ['Update']() {
                        const _0xc85cec = _0x2a7e00;
                        this[_0xc85cec(0x125b)][_0xc85cec(0x108b)](this['x'], this['y']);
                    }
                }
                _0x2ae05e['B_Fireball'] = _0x480b12, _0x2ae05e['default'] = _0x480b12;
            };
