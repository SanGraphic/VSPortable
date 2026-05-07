// Module 0x12a4c
// Args: _0x1daf4a, _0x5d00cd, _0x43fce8

export default (_0x1daf4a, _0x5d00cd, _0x43fce8) => {
                'use strict';
                const _0x42630e = a0_0x6932;
                var _0x418d28 = this && this['__importDefault'] || function(_0x356535) {
                    const _0x3b88f1 = _0x42630e;
                    return _0x356535 && _0x356535[_0x3b88f1(0x16f1)] ? _0x356535 : {
                        'default': _0x356535
                    };
                };
                Object['defineProperty'](_0x5d00cd, '__esModule', {
                    'value': !0x0
                }), _0x5d00cd['W_Legionnaire'] = void 0x0;
                const _0x42bebd = _0x418d28(_0x43fce8(0x54e3)),
                    _0x352b99 = _0x418d28(_0x43fce8(0x166c0)),
                    _0x54cf28 = _0x418d28(_0x43fce8(0x4a9d)),
                    _0x357570 = _0x418d28(_0x43fce8(0x5f07)),
                    _0x4087ba = _0x418d28(_0x43fce8(0x9b68));
                class _0x24fd62 extends _0x352b99['default'] {
                    constructor(_0x7dbea3) {
                        const _0x2f93f7 = _0x42630e;
                        super(_0x7dbea3), this['spawnRadius'] = 0x40, this['canDoFinisher'] = !0x0, this[_0x2f93f7(0x1623)] = !0x0, this[_0x2f93f7(0x778)] = new Phaser['Geom']['Circle'](0x0, 0x0, this[_0x2f93f7(0x17fe)]), this[_0x2f93f7(0x370)] = _0x357570[_0x2f93f7(0xd2c)][_0x2f93f7(0x1043)][_0x2f93f7(0x6d2)]['add'][_0x2f93f7(0x568)](0x0, 0x0, 'vfx', 'foscari.png')[_0x2f93f7(0xdab)](0.65)[_0x2f93f7(0xb4a)](_0x357570[_0x2f93f7(0xd2c)][_0x2f93f7(0x1043)][_0x2f93f7(0x6d2)]['renderer'][_0x2f93f7(0x140e)])[_0x2f93f7(0x183f)](!0x1), this[_0x2f93f7(0x1150)] = _0x357570[_0x2f93f7(0xd2c)]['Core']['scene']['add'][_0x2f93f7(0x1791)]('vfx'), this[_0x2f93f7(0xc3f)] = this['PfxEmitterManager'][_0x2f93f7(0x14c0)]({
                            'frame': ['Smoke1.png', 'Smoke2.png'],
                            'speed': {
                                'min': 0xa,
                                'max': 0x14
                            },
                            'quantity': 0x2,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': {
                                'min': 0x32,
                                'max': 0x96
                            },
                            'alpha': {
                                'start': 0.65,
                                'end': 0x0
                            },
                            'scale': {
                                'min': 0.5,
                                'max': 1.25
                            },
                            'tint': 0xffeedd,
                            'on': !0x1
                        });
                    } ['Fire'](_0x388ae8 = !0x1) {
                        const _0xe47189 = _0x42630e;
                        super[_0xe47189(0x1754)](_0x388ae8), this['FireLegionnaire']();
                    } ['OnStart']() {
                        const _0x3e43fd = _0x42630e;
                        super['OnStart'](), this[_0x3e43fd(0x110d)] || (this['legionnairePool'] = new _0x54cf28[(_0x3e43fd(0xd2c))](_0x357570['default'][_0x3e43fd(0x1043)]['scene'], _0x42bebd['default'][_0x3e43fd(0xbc9)]), _0x357570['default'][_0x3e43fd(0x1043)][_0x3e43fd(0x6d2)][_0x3e43fd(0x1585)][_0x3e43fd(0x18bd)][_0x3e43fd(0x13d7)](this[_0x3e43fd(0x110d)], _0x357570['default'][_0x3e43fd(0x1043)][_0x3e43fd(0x1a91)], this[_0x3e43fd(0x14ac)][_0x3e43fd(0xf7e)](this)));
                    } ['FireLegionnaire']() {
                        const _0x58d2c5 = _0x42630e;
                        this[_0x58d2c5(0x110d)][_0x58d2c5(0xada)](this['cursor']['x'], this[_0x58d2c5(0x370)]['y'], this, 0x0);
                        let _0x3693ee = this[_0x58d2c5(0x942)];
                        if (_0x3693ee >= 0x1) {
                            this['spawnCircle']['x'] = this['cursor']['x'], this[_0x58d2c5(0x778)]['y'] = this['cursor']['y'], this[_0x58d2c5(0x778)]['radius'] = this[_0x58d2c5(0x17fe)];
                            let _0x2f3030 = this[_0x58d2c5(0x778)]['getPoints'](_0x3693ee);
                            for (let _0x308d8f = 0x0; _0x308d8f < _0x2f3030['length']; _0x308d8f++) {
                                let _0x3c9ad6 = _0x2f3030[_0x308d8f];
                                this[_0x58d2c5(0x110d)][_0x58d2c5(0xada)](_0x3c9ad6['x'], _0x3c9ad6['y'], this, _0x308d8f);
                            }
                        }
                    } ['Update'](_0x4a7ae5) {
                        const _0xe353b2 = _0x42630e;
                        super[_0xe353b2(0xa9f)](_0x4a7ae5);
                        let _0x107cb4 = this[_0xe353b2(0x198d)](this['owner']['x'], this['owner']['y'], this['owner']['x'] - _0x357570['default'][_0xe353b2(0x1043)]['Player'][_0xe353b2(0x115d)]['x'], this['owner']['y'] - _0x357570['default'][_0xe353b2(0x1043)][_0xe353b2(0x10f6)][_0xe353b2(0x115d)]['y']);
                        this[_0xe353b2(0x370)]['x'] = this[_0xe353b2(0x351)]['x'] + Math['cos'](_0x107cb4) * _0x357570[_0xe353b2(0xd2c)]['Core'][_0xe353b2(0x6d2)]['renderer'][_0xe353b2(0x173c)] * 0.5, this[_0xe353b2(0x370)]['y'] = this['owner']['y'] + Math['sin'](_0x107cb4) * _0x357570['default'][_0xe353b2(0x1043)][_0xe353b2(0x6d2)]['renderer']['height'] * 0.5, this[_0xe353b2(0x370)]['angle'] = Phaser[_0xe353b2(0x24f)][_0xe353b2(0x1470)](_0x107cb4);
                    } ['calcRadAngle'](_0x3b1886, _0x1f4f7c, _0x369f8b, _0x1af65d) {
                        let _0x67414f = _0x1af65d - _0x1f4f7c,
                            _0x3c6d28 = _0x369f8b - _0x3b1886;
                        return Math['atan2'](_0x67414f, _0x3c6d28);
                    } ['CheckArcanas']() {
                        const _0x3eafd8 = _0x42630e;
                        _0x357570[_0x3eafd8(0xd2c)][_0x3eafd8(0x1043)][_0x3eafd8(0x1884)]['ActiveArcanas']['indexOf'](_0x4087ba[_0x3eafd8(0xd2c)]['T16_SLASH']) > -0x1 && (this['canCrit'] = !0x0), super['CheckArcanas']();
                    } ['onBulletOverlapsEnemy'](_0x5d7b67, _0x5b0593) {
                        const _0x427abf = _0x42630e;
                        return this['canCrit'] ? this[_0x427abf(0x1152)](_0x5d7b67, _0x5b0593) : super['onBulletOverlapsEnemy'](_0x5d7b67, _0x5b0593);
                    }
                }
                _0x5d00cd['W_Legionnaire'] = _0x24fd62, _0x5d00cd['default'] = _0x24fd62;
            };
