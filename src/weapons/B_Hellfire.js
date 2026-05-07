// Module 0x4ae7
// Args: _0x2777cd, _0x22c1e1, _0x4bea56

export default (_0x2777cd, _0x22c1e1, _0x4bea56) => {
                'use strict';
                const _0x6ddfad = a0_0x6932;
                var _0x240766 = this && this['__importDefault'] || function(_0x49ed3e) {
                    const _0x5c5fc8 = _0x6ddfad;
                    return _0x49ed3e && _0x49ed3e[_0x5c5fc8(0x16f1)] ? _0x49ed3e : {
                        'default': _0x49ed3e
                    };
                };
                Object['defineProperty'](_0x22c1e1, '__esModule', {
                    'value': !0x0
                }), _0x22c1e1['B_Hellfire'] = void 0x0;
                const _0x1e11b7 = _0x240766(_0x4bea56(0xa14d)),
                    _0x162835 = _0x240766(_0x4bea56(0x5f07)),
                    _0x4d3a45 = _0x240766(_0x4bea56(0x5103)),
                    _0x2b8775 = _0x240766(_0x4bea56(0x9b68));
                class _0x445cf9 extends _0x1e11b7['default'] {
                    constructor(_0x3fb099, _0x5b5a8f, _0x2290da, _0x375674, _0x451f0b) {
                        const _0x23101a = _0x6ddfad;
                        super(_0x3fb099, _0x5b5a8f, _0x2290da, 'vfx', 'ProjectileHellfireLarge.png', _0x375674, _0x451f0b), this[_0x23101a(0x8a2)](0x0), this[_0x23101a(0x125b)] = this[_0x23101a(0x6d2)][_0x23101a(0x18bd)][_0x23101a(0x1791)]('vfx'), this[_0x23101a(0x125b)]['createEmitter']({
                            'frame': ['ProjectileFireball.png', 'HitBoom2.png'],
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'scale': {
                                'start': 1.25,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this['ScaleTween'] = this[_0x23101a(0x6d2)][_0x23101a(0x12a1)][_0x23101a(0x18bd)]({
                            'targets': this,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'scale': _0x4d3a45['default'][_0x23101a(0x15db)] * this['weapon']['PArea']
                        }), this['trueWeapon'] = this['weapon'], this[_0x23101a(0x1139)] = !0x1;
                    } ['Bounce'](_0x369f50) {
                        const _0x2d44a1 = _0x6ddfad;
                        this[_0x2d44a1(0xcf9)] === _0x369f50 && (this[_0x2d44a1(0x1b4)] > 0x0 ? (this[_0x2d44a1(0x1b4)]--, this[_0x2d44a1(0xcf9)]['velocity']['x'] *= -1.5, this['body'][_0x2d44a1(0xf4e)]['y'] *= -1.5, this[_0x2d44a1(0x990)] = [], this[_0x2d44a1(0x9b5)](this[_0x2d44a1(0xd96)] + 0xb4)) : this[_0x2d44a1(0x193c)](!0x1, 0x1, 0x1));
                    } ['OnRecycle']() {
                        const _0x5ebb4b = _0x6ddfad;
                        super['OnRecycle'](), this[_0x5ebb4b(0xcf9)][_0x5ebb4b(0xdf6)](0x10), this[_0x5ebb4b(0x8a2)](0x0), this['setDepth'](this['y'] - _0x162835['default']['Core'][_0x5ebb4b(0x10f6)]['y'] + this['scene']['renderer']['height']), this[_0x5ebb4b(0x125b)][_0x5ebb4b(0xb4a)](this['depth'] - 0x1), this['ScaleTween'] && (this[_0x5ebb4b(0xd35)][_0x5ebb4b(0x1a34)](), this[_0x5ebb4b(0x6d2)][_0x5ebb4b(0x12a1)][_0x5ebb4b(0x393)](this[_0x5ebb4b(0xd35)]), this['setScale'](0x0), this['ScaleTween'] = this['scene'][_0x5ebb4b(0x12a1)]['add']({
                            'targets': this,
                            'duration': 0xc8,
                            'ease': 'Linear',
                            'scale': _0x4d3a45['default'][_0x5ebb4b(0x15db)] * this[_0x5ebb4b(0x4a1)][_0x5ebb4b(0x5f5)]
                        }), this[_0x5ebb4b(0xd35)][_0x5ebb4b(0x1374)]()), this['weapon']['PBounces'] && !this[_0x5ebb4b(0x1139)] && (this[_0x5ebb4b(0x1139)] = !0x0, this[_0x5ebb4b(0x6d2)][_0x5ebb4b(0x1585)]['world']['on']('worldbounds', this[_0x5ebb4b(0x1851)], this), this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this[_0x5ebb4b(0xcf9)]['setBoundsRectangle'](_0x162835[_0x5ebb4b(0xd2c)]['Core']['Player'][_0x5ebb4b(0xc00)]), this['body']['onWorldBounds'] = !0x0), this[_0x5ebb4b(0x1139)] && this['setCollideWorldBounds'](!0x0, 0x1, 0x1);
                    } ['SetNullTarget']() {
                        const _0x3d8e44 = _0x6ddfad;
                        let _0x1b4acf = _0x162835[_0x3d8e44(0xd2c)]['Core']['Player']['lastFacedDirection'];
                        0x0 === _0x1b4acf['x'] && 0x0 === _0x1b4acf['y'] && (_0x1b4acf['x'] = 0x1), _0x1b4acf = _0x1b4acf[_0x3d8e44(0x183b)](), this[_0x3d8e44(0x3b9)](_0x1b4acf);
                    } ['SetTarget'](_0x5a2f91) {
                        const _0x40016a = _0x6ddfad;
                        super[_0x40016a(0x3b9)](_0x5a2f91);
                        var _0x2502ad = this[_0x40016a(0xf02)](this[_0x40016a(0x18a7)]),
                            _0x3cb158 = [0x0, 0xa, -0xa, 0x14, -0x14, 0x1e, -0x1e, 0x28, -0x28];
                        this[_0x40016a(0x6d2)][_0x40016a(0x1585)][_0x40016a(0x18fc)](_0x2502ad + Phaser[_0x40016a(0x24f)][_0x40016a(0x54d)](_0x3cb158[this[_0x40016a(0x19c4)] % _0x3cb158[_0x40016a(0xed9)]]), this[_0x40016a(0xfbb)], this[_0x40016a(0xcf9)][_0x40016a(0xf4e)]);
                        var _0x3737ac = Phaser[_0x40016a(0x24f)][_0x40016a(0x1551)][_0x40016a(0x7bf)];
                        this['setAngle'](Phaser[_0x40016a(0x24f)][_0x40016a(0x1470)](Math[_0x40016a(0x326)](this[_0x40016a(0xcf9)]['velocity']['y'] - _0x3737ac['y'], this[_0x40016a(0xcf9)][_0x40016a(0xf4e)]['x'] - _0x3737ac['x'])));
                    } ['Update']() {
                        const _0x437098 = _0x6ddfad;
                        this[_0x437098(0x125b)][_0x437098(0x108b)](this['x'], this['y']);
                    } ['OnHasHitAnObject'](_0x173f01) {
                        const _0x13e203 = _0x6ddfad;
                        _0x173f01[_0x13e203(0xdae)] || _0x162835[_0x13e203(0xd2c)][_0x13e203(0x1043)]['Arcanas'][_0x13e203(0x15e7)]['indexOf'](_0x2b8775[_0x13e203(0xd2c)]['T19_FIRE']) > -0x1 && this[_0x13e203(0x4a1)]['SpawnExplosionAt'](this['x'], this['y'], 0x1, 0x0);
                    }
                }
                _0x22c1e1['B_Hellfire'] = _0x445cf9, _0x22c1e1['default'] = _0x445cf9;
            };
