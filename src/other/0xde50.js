// Module 0xde50
// Args: _0x4a284a, _0x4f6dec, _0x2da23b

export default (_0x4a284a, _0x4f6dec, _0x2da23b) => {
                'use strict';
                const _0x4eacb3 = a0_0x6932;
                var _0x4f449f = this && this['__importDefault'] || function(_0x853293) {
                    const _0x3c3092 = _0x4eacb3;
                    return _0x853293 && _0x853293[_0x3c3092(0x16f1)] ? _0x853293 : {
                        'default': _0x853293
                    };
                };
                Object['defineProperty'](_0x4f6dec, '__esModule', {
                    'value': !0x0
                });
                const _0x115611 = _0x4f449f(_0x2da23b(0x5f07)),
                    _0x17f004 = _0x2da23b(0x18304),
                    _0x227604 = _0x4f449f(_0x2da23b(0x1fd7));
                class _0x3d1495 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x50d67b, _0x2fcfcb, _0xcfaacf) {
                        const _0x160dfd = _0x4eacb3;
                        super(_0x50d67b['scene'], _0x2fcfcb, _0xcfaacf, 'vfx', 'WhiteDot.png'), this[_0x160dfd(0x177d)] = !0x1, this['isTeleportOnCull'] = !0x1, this[_0x160dfd(0xe2f)] = null, this['follow'] = !0x1, this[_0x160dfd(0x1133)] = 0x1, this['rectDamage'] = new Phaser[(_0x160dfd(0x10d2))]['Rectangle'](), this[_0x160dfd(0x5ef)] = 0xfa, this[_0x160dfd(0x1121)] = 0x1f4, this['bulletType'] = 0x0, this['lockY'] = !0x1, this[_0x160dfd(0x159a)] = !0x1, this[_0x160dfd(0x18d9)] = 'Explosions', this['pool'] = _0x50d67b, this['setVisible'](!0x1)[_0x160dfd(0xdab)](0.2)['setOrigin'](0.5)[_0x160dfd(0x652)](0x0), this[_0x160dfd(0x919)] = this[_0x160dfd(0x6d2)]['add']['rectangle'](0x0, 0x0, 0x1, 0x1, 0xff0000)['setOrigin'](0.5)[_0x160dfd(0xdab)](0x0)['setVisible'](!0x1)['setBlendMode'](_0x17f004[_0x160dfd(0x10fc)]['ADD']), this['MakeEmitters_Weapons'](), this[_0x160dfd(0x17ab)](), this[_0x160dfd(0x894)](), this[_0x160dfd(0xff6)]();
                    } ['OnTeleportOnCull']() {} ['SetExplosionSize'](_0x2633cd, _0xda552d, _0x1576f8, _0x3c4b82) {
                        const _0x5da907 = _0x4eacb3;
                        this['GroundFx']['x'] = _0x2633cd, this[_0x5da907(0x919)]['y'] = _0xda552d, this['GroundFx'][_0x5da907(0x173c)] = _0x1576f8, this[_0x5da907(0x919)]['height'] = _0x3c4b82, this['x'] = _0x2633cd, this['y'] = _0xda552d, this[_0x5da907(0x3a8)] = _0x1576f8, this['scaleY'] = _0x3c4b82;
                    } ['SetExplosionDamage'](_0x267e8d, _0x120d2b, _0x3a318f) {
                        const _0x1dec7d = _0x4eacb3;
                        this[_0x1dec7d(0x1133)] = _0x267e8d, this['duration'] = _0x120d2b, this[_0x1dec7d(0x1121)] = _0x3a318f;
                    } ['OnRecycle']() {
                        const _0x58d0f2 = _0x4eacb3;
                        this[_0x58d0f2(0x111e)](!0x0), this['GroundFx']['setScale'](0x1), this[_0x58d0f2(0x919)][_0x58d0f2(0xf8e)](0.5), this['setScale'](0x0), this['GroundFx'][_0x58d0f2(0x16c6)] = 0x1, this[_0x58d0f2(0x159a)] = !0x1, this['lockY'] = !0x1, this[_0x58d0f2(0x1a20)] = !0x1, this[_0x58d0f2(0x2e9)] = !0x1, _0x115611[_0x58d0f2(0xd2c)]['Core']['scene'][_0x58d0f2(0x915)][_0x58d0f2(0x17fb)](this['HitboxTimer']), this['HitboxTimer'] = _0x115611['default']['Core'][_0x58d0f2(0x6d2)][_0x58d0f2(0x915)]['addEvent']({
                            'delay': this[_0x58d0f2(0x1121)],
                            'loop': !0x0,
                            'callback': () => {
                                this['hasHit'] = !0x1;
                            }
                        }), this['scene'][_0x58d0f2(0x12a1)]['add']({
                            'targets': this['GroundFx'],
                            'alpha': 0.5,
                            'yoyo': !0x0,
                            'repeat': 0x2,
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x5449be = _0x58d0f2;
                                this[_0x5449be(0x919)]['setVisible'](!0x0);
                            },
                            'onComplete': () => {
                                const _0x4de9e6 = _0x58d0f2;
                                this[_0x4de9e6(0x525)]();
                            }
                        }), this[_0x58d0f2(0x1581)] && (this[_0x58d0f2(0x1581)][_0x58d0f2(0x1a34)](), this['despawnTimer'] = null), _0x115611[_0x58d0f2(0xd2c)][_0x58d0f2(0x1267)][_0x58d0f2(0x7f6)](_0x227604['default'][_0x58d0f2(0x6cf)], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0x58d0f2(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2);
                    } ['Shoot']() {
                        const _0x475f69 = _0x4eacb3;
                        switch (_0x115611['default'][_0x475f69(0x1267)][_0x475f69(0x7f6)](_0x227604['default']['Explosion'], {
                                'volume': 0.5,
                                'detune': 0x1f4 * (Math['random']() - 0.5)
                            }, 0x96, 0x3), this['scene']['tweens']['add']({
                                'targets': this,
                                'scaleX': this[_0x475f69(0x919)]['width'],
                                'scaleY': this['GroundFx']['height'],
                                'alpha': 0.1,
                                'duration': 0x1f4,
                                'onStart': () => {
                                    const _0x33accc = _0x475f69;
                                    this[_0x33accc(0x183f)](!0x0), this[_0x33accc(0xe71)] = 0x0;
                                },
                                'onComplete': () => {
                                    this['activateDamage'] = !0x0;
                                }
                            }), this['skin']) {
                            default:
                            case 'Weapons':
                                this[_0x475f69(0x944)]['start'](), this[_0x475f69(0x1aa7)][_0x475f69(0x1aa2)](), this['currentEmitter1'] = this[_0x475f69(0x944)], this['currentEmitter2'] = this['pfxEmitterW2'], this[_0x475f69(0x1939)]['x'] = this['x'], this['wellW']['y'] = this['y'] - 0x20;
                                break;
                            case 'Coffins':
                                this[_0x475f69(0x680)][_0x475f69(0x1aa2)](), this[_0x475f69(0xfb2)]['start'](), this[_0x475f69(0xdf1)] = this['pfxEmitterC1'], this[_0x475f69(0x1ada)] = this['pfxEmitterC2'], this[_0x475f69(0x250)]['x'] = this['x'], this['wellC']['y'] = this['y'] - 0x20;
                                break;
                            case 'Trainees':
                                this['pfxEmitterT1'][_0x475f69(0x1aa2)](), this[_0x475f69(0x14cf)]['start'](), this[_0x475f69(0xdf1)] = this['pfxEmitterT1'], this[_0x475f69(0x1ada)] = this['pfxEmitterT2'], this[_0x475f69(0x62f)]['x'] = this['x'] - 0.4 * this[_0x475f69(0x919)][_0x475f69(0x173c)], this[_0x475f69(0x62f)]['y'] = this['y'];
                                break;
                            case 'Explosions':
                                this[_0x475f69(0x1753)][_0x475f69(0x1aa2)](), this['pfxEmitterE2'][_0x475f69(0x1aa2)](), this['currentEmitter1'] = this[_0x475f69(0x1753)], this['currentEmitter2'] = this[_0x475f69(0x90d)], this[_0x475f69(0x17dd)]['x'] = this['x'] + 0.4 * this['GroundFx']['width'], this['wellE']['y'] = this['y'];
                        }
                        this['despawnTimer'] = this['scene'][_0x475f69(0x12a1)][_0x475f69(0x18bd)]({
                            'targets': this[_0x475f69(0x919)],
                            'nothing': 0x1,
                            'duration': this['duration'],
                            'onStart': () => {},
                            'onComplete': () => {
                                const _0x3170f3 = _0x475f69;
                                this[_0x3170f3(0x1a20)] = !0x1, this[_0x3170f3(0x944)][_0x3170f3(0x1a34)](), this[_0x3170f3(0x1aa7)][_0x3170f3(0x1a34)](), this[_0x3170f3(0x680)][_0x3170f3(0x1a34)](), this[_0x3170f3(0xfb2)][_0x3170f3(0x1a34)](), this[_0x3170f3(0x1661)][_0x3170f3(0x1a34)](), this[_0x3170f3(0x14cf)][_0x3170f3(0x1a34)](), this[_0x3170f3(0x1753)][_0x3170f3(0x1a34)](), this['pfxEmitterE2'][_0x3170f3(0x1a34)](), this[_0x3170f3(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x1b4663 = _0x4eacb3;
                        this[_0x1b4663(0x111e)](!0x1), this[_0x1b4663(0xc82)][_0x1b4663(0x4ed)](this), this[_0x1b4663(0x1a20)] = !0x1, this[_0x1b4663(0x1581)] && (this[_0x1b4663(0x1581)][_0x1b4663(0x1a34)](), this[_0x1b4663(0x1581)] = null), _0x115611['default'][_0x1b4663(0x1043)]['scene']['time']['removeEvent'](this[_0x1b4663(0x8b9)]), this[_0x1b4663(0x919)]['setVisible'](!0x1), this[_0x1b4663(0x183f)](!0x1), this[_0x1b4663(0x944)][_0x1b4663(0x1a34)](), this['pfxEmitterW2']['stop'](), this[_0x1b4663(0x680)]['stop'](), this['pfxEmitterC2']['stop'](), this[_0x1b4663(0x1661)][_0x1b4663(0x1a34)](), this[_0x1b4663(0x14cf)][_0x1b4663(0x1a34)](), this['pfxEmitterE1']['stop'](), this[_0x1b4663(0x90d)]['stop']();
                    } ['Init'](_0x1a92e9 = -0x3e8, _0x56ea9e = -0x3e8) {
                        this['setPosition'](_0x1a92e9, _0x56ea9e), this['OnRecycle']();
                    } ['die']() {} ['Approach'](_0x231eb6, _0x2623f0, _0x581e03) {
                        const _0x1e3ed0 = _0x4eacb3;
                        return _0x231eb6 < _0x2623f0 ? Math[_0x1e3ed0(0x1084)](_0x231eb6 + _0x581e03, _0x2623f0) : Math['max'](_0x231eb6 - _0x581e03, _0x2623f0);
                    } ['Update'](_0x364cdc = 0x0) {
                        const _0x530677 = _0x4eacb3;
                        if (this[_0x530677(0x76c)] && (this['x'] = this[_0x530677(0x10db)](this['x'], _0x115611[_0x530677(0xd2c)][_0x530677(0x1043)][_0x530677(0x10f6)]['x'], 0.01 * _0x364cdc), this['y'] = this[_0x530677(0x10db)](this['y'], _0x115611[_0x530677(0xd2c)]['Core'][_0x530677(0x10f6)]['y'], 0.01 * _0x364cdc)), this[_0x530677(0x159a)] && (this['x'] = _0x115611['default'][_0x530677(0x1043)][_0x530677(0x10f6)]['x']), this[_0x530677(0x1042)] && (this['y'] = _0x115611[_0x530677(0xd2c)]['Core'][_0x530677(0x10f6)]['y']), this[_0x530677(0x919)]['x'] = this['x'], this['GroundFx']['y'] = this['y'], this['currentEmitter1']) {
                            switch (this[_0x530677(0x18d9)]) {
                                default:
                                case 'Coffins':
                                    this[_0x530677(0x196)]();
                                    break;
                                case 'Weapons':
                                    this[_0x530677(0x188e)]();
                                    break;
                                case 'Trainees':
                                    this[_0x530677(0x1542)]();
                                    break;
                                case 'Explosions':
                                    this[_0x530677(0x1684)]();
                            }
                            this[_0x530677(0x2e9)] || this[_0x530677(0x1a20)] && this['GroundFx']['getBounds']()[_0x530677(0x1780)](_0x115611[_0x530677(0xd2c)][_0x530677(0x1043)][_0x530677(0x10f6)]['x'], _0x115611[_0x530677(0xd2c)]['Core'][_0x530677(0x10f6)]['y']) && (this['hasHit'] = !0x0, _0x115611[_0x530677(0xd2c)]['Core']['Player'][_0x530677(0x1112)](this[_0x530677(0x1133)]));
                        }
                    } ['SetEmitterInCenter']() {
                        const _0x4a3096 = _0x4eacb3;
                        this[_0x4a3096(0xdf1)][_0x4a3096(0x726)](this['x'], this['y']), this['currentEmitter2'][_0x4a3096(0x726)](this['x'], this['y']), this['SetEmittersBounds']();
                    } ['SetEmitterOnTheRight']() {
                        const _0x3466de = _0x4eacb3;
                        this[_0x3466de(0xdf1)][_0x3466de(0x726)](this['x'] + 0.5 * this['GroundFx'][_0x3466de(0x173c)], this['y']), this[_0x3466de(0x1ada)][_0x3466de(0x726)](this['x'] + 0.5 * this[_0x3466de(0x919)][_0x3466de(0x173c)], this['y']), this['SetEmittersBounds']();
                    } ['SetEmitterOnTheLeft']() {
                        const _0x227068 = _0x4eacb3;
                        this['currentEmitter1'][_0x227068(0x726)](this['x'] - 0.5 * this[_0x227068(0x919)][_0x227068(0x173c)], this['y']), this['currentEmitter2'][_0x227068(0x726)](this['x'] - 0.5 * this[_0x227068(0x919)][_0x227068(0x173c)], this['y']), this['SetEmittersBounds']();
                    } ['SetEmitterOnTheTop']() {
                        const _0x767cbc = _0x4eacb3;
                        this[_0x767cbc(0xdf1)][_0x767cbc(0x726)](this['x'], this['y'] - 0.5 * this[_0x767cbc(0x919)]['height']), this['currentEmitter2']['setPosition'](this['x'], this['y'] - 0.5 * this['GroundFx'][_0x767cbc(0x140e)]), this['SetEmittersBounds']();
                    } ['SetEmittersBounds']() {
                        const _0x120a40 = _0x4eacb3;
                        this[_0x120a40(0xdf1)]['bounds']['x'] = this['GroundFx']['x'] - 0.5 * this[_0x120a40(0x919)]['width'], this['currentEmitter1'][_0x120a40(0x42e)]['y'] = this['GroundFx']['y'] - 0.5 * this[_0x120a40(0x919)][_0x120a40(0x140e)], this[_0x120a40(0xdf1)]['bounds']['width'] = this['GroundFx'][_0x120a40(0x173c)], this['currentEmitter1'][_0x120a40(0x42e)]['height'] = this['GroundFx'][_0x120a40(0x140e)], this['currentEmitter2'][_0x120a40(0x42e)]['x'] = this['GroundFx']['x'] - 0.5 * this[_0x120a40(0x919)]['width'], this[_0x120a40(0x1ada)][_0x120a40(0x42e)]['y'] = this['GroundFx']['y'] - 0.5 * this['GroundFx'][_0x120a40(0x140e)], this['currentEmitter2']['bounds']['width'] = this[_0x120a40(0x919)]['width'], this['currentEmitter2'][_0x120a40(0x42e)][_0x120a40(0x140e)] = this[_0x120a40(0x919)][_0x120a40(0x140e)];
                    } ['MakeEmitters_Weapons']() {
                        const _0x768e78 = _0x4eacb3;
                        this['particlesManagerW'] = this['scene']['add']['particles']('items'), this[_0x768e78(0x1aa7)] = this[_0x768e78(0x1358)]['createEmitter']({
                            'frame': ['Axe.png', 'Cat.png', 'Cross.png', 'Diamond2.png', 'Garlic.png', 'Guns.png', 'Guns2.png', 'HolyBook.png', 'HolyWater.png', 'Knife.png', 'LighningRing.png', 'Pentagram.png', 'Song.png', 'trapano.png', 'WandHoly.png', 'WandFire.png', 'Whip.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'angle': {
                                'start': 0x46,
                                'end': 0x6e,
                                'steps': 0x15
                            },
                            'speed': {
                                'min': 0x258,
                                'max': 0x320
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x0,
                            'collideRight': !0x0,
                            'on': !0x1
                        }), this[_0x768e78(0x944)] = this[_0x768e78(0x1358)][_0x768e78(0x14c0)]({
                            'frame': ['Axe.png', 'Cat.png', 'Cross.png', 'Diamond2.png', 'Garlic.png', 'Guns.png', 'Guns2.png', 'HolyBook.png', 'HolyWater.png', 'Knife.png', 'LighningRing.png', 'Pentagram.png', 'Song.png', 'trapano.png', 'WandHoly.png', 'WandFire.png', 'Whip.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'angle': {
                                'start': 0x46,
                                'end': 0x6e,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x190,
                                'max': 0x258
                            },
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x0,
                            'collideRight': !0x0,
                            'on': !0x1
                        }), this['wellW'] = this['particlesManagerW']['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'],
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        });
                    } ['MakeEmitters_Coffins']() {
                        const _0x347184 = _0x4eacb3;
                        this[_0x347184(0x3e9)] = this[_0x347184(0x6d2)][_0x347184(0x18bd)][_0x347184(0x1791)]('items'), this[_0x347184(0xfb2)] = this['particlesManagerCoffins'][_0x347184(0x14c0)]({
                            'frame': ['CoffinLid.png', 'Coffin.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x15
                            },
                            'speed': {
                                'min': 0x190,
                                'max': 0x258
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x0,
                            'collideRight': !0x0,
                            'on': !0x1
                        }), this[_0x347184(0x680)] = this['particlesManagerCoffins'][_0x347184(0x14c0)]({
                            'frame': ['CoffinLid.png', 'Coffin.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x12c,
                                'max': 0x190
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'bounce': 0.5,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x0,
                            'collideRight': !0x0,
                            'on': !0x1
                        }), this['wellC'] = this['particlesManagerCoffins'][_0x347184(0x1386)]({
                            'x': this['x'],
                            'y': this['y'],
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        });
                    } ['MakeEmitters_Trainees']() {
                        const _0x1c6a4c = _0x4eacb3;
                        this['particlesManagerTrainees'] = this['scene']['add']['particles']('enemies3'), this[_0x1c6a4c(0x14cf)] = this['particlesManagerTrainees']['createEmitter']({
                            'frame': ['HoodieR_i01.png', 'HoodieP_i01.png', 'HoodieG_i01.png', 'HoodieB_i01.png', 'HoodieY_i01.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'angle': {
                                'start': 0xa0,
                                'end': 0xc8,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x1f4,
                                'max': 0x258
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x1
                            },
                            'frequency': 0x1,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x0,
                            'collideRight': !0x0,
                            'on': !0x1
                        });
                        let _0x34e71d = new Phaser['Geom']['Line'](0x0, -0x20, 0x0, 0x20);
                        this[_0x1c6a4c(0x1661)] = this[_0x1c6a4c(0x1ac6)][_0x1c6a4c(0x14c0)]({
                            'frame': ['HoodieR_i01.png', 'HoodieP_i01.png', 'HoodieG_i01.png', 'HoodieB_i01.png', 'HoodieY_i01.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x7d0,
                            'angle': {
                                'start': 0xa0,
                                'end': 0xc8,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x1c2,
                                'max': 0x226
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x1
                            },
                            'frequency': 0x1,
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'emitZone': {
                                'source': _0x34e71d
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x1,
                            'collideRight': !0x1,
                            'on': !0x1
                        }), this[_0x1c6a4c(0x62f)] = this['particlesManagerTrainees'][_0x1c6a4c(0x1386)]({
                            'x': this['x'],
                            'y': this['y'],
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        });
                    } ['MakeEmitters_Explosions']() {
                        const _0x239ee3 = _0x4eacb3;
                        this[_0x239ee3(0xb33)] = this[_0x239ee3(0x6d2)][_0x239ee3(0x18bd)][_0x239ee3(0x1791)]('vfx'), this[_0x239ee3(0x90d)] = this['particlesManagerExplosions'][_0x239ee3(0x14c0)]({
                            'frame': ['Smoke1.png', 'Smoke2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': -0x14,
                                'end': 0x14,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x320,
                                'max': 0x4b0
                            },
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x2,
                                'end': 0x1
                            },
                            'frequency': 0x1,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x0,
                            'collideRight': !0x0,
                            'on': !0x1
                        });
                        let _0x401349 = new Phaser['Geom'][(_0x239ee3(0x817))](0x0, -0x20, 0x0, 0x20);
                        this['pfxEmitterE1'] = this[_0x239ee3(0xb33)][_0x239ee3(0x14c0)]({
                            'frame': ['HitSmoke1.png', 'HitSmoke2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': -0x14,
                                'end': 0x14,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x320,
                                'max': 0x4b0
                            },
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'bounce': 0.9,
                            'bounds': {
                                'x': 0x0,
                                'y': 0x0,
                                'w': 0x64,
                                'h': 0x64
                            },
                            'emitZone': {
                                'source': _0x401349
                            },
                            'collideTop': !0x0,
                            'collideBottom': !0x0,
                            'collideLeft': !0x1,
                            'collideRight': !0x1,
                            'on': !0x1
                        }), this['wellE'] = this['particlesManagerExplosions'][_0x239ee3(0x1386)]({
                            'x': this['x'],
                            'y': this['y'],
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        });
                    }
                }
                _0x4f6dec['default'] = _0x3d1495;
            };
