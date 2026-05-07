// Module 0x6036
// Args: _0x266e28, _0x5305b6, _0x168b62

export default (_0x266e28, _0x5305b6, _0x168b62) => {
                'use strict';
                const _0x36d1cf = a0_0x6932;
                var _0x468a02 = this && this['__importDefault'] || function(_0x2032f1) {
                    const _0xa1f43a = _0x36d1cf;
                    return _0x2032f1 && _0x2032f1[_0xa1f43a(0x16f1)] ? _0x2032f1 : {
                        'default': _0x2032f1
                    };
                };
                Object['defineProperty'](_0x5305b6, '__esModule', {
                    'value': !0x0
                }), _0x5305b6['GoldFever'] = void 0x0;
                const _0x57575a = _0x168b62(0x18304),
                    _0x51666e = _0x168b62(0x16c14),
                    _0x227eb5 = _0x468a02(_0x168b62(0xc42e)),
                    _0x3fbbe5 = _0x468a02(_0x168b62(0x1fd7)),
                    _0x291da1 = _0x468a02(_0x168b62(0x5f07)),
                    _0x2a16e3 = _0x468a02(_0x168b62(0x5103)),
                    _0x57144c = _0x468a02(_0x168b62(0xccae));
                class _0x3f656b {
                    constructor(_0x44520b) {
                        const _0x2b536f = _0x36d1cf;
                        this[_0x2b536f(0x2c8)] = !0x1, this[_0x2b536f(0x8db)] = 0x2710, this[_0x2b536f(0xb77)] = 0x2710, this[_0x2b536f(0x8c9)] = 0x4, this['hpBarWidth'] = 0x20, this[_0x2b536f(0x12e8)] = 0xa, this['titleScaleBump'] = 0x1, this['total'] = 0x0, this[_0x2b536f(0xb08)] = 0x1, this[_0x2b536f(0x559)] = 0x0, this[_0x2b536f(0xf4a)] = 0x0, this['fail'] = 0x0, this['formatter'] = new Intl['NumberFormat']('en-US', {
                            'style': 'currency',
                            'currency': 'USD',
                            'minimumFractionDigits': 0x0,
                            'maximumFractionDigits': 0x0
                        }), this[_0x2b536f(0x6d2)] = _0x44520b, this[_0x2b536f(0x125b)] = this['scene']['add']['particles']('items')['createEmitter']({
                            'frame': ['CoinGold.png'],
                            'quantity': 0xa,
                            'lifespan': 0x7d0,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'angle': {
                                'min': 0xe1,
                                'max': 0x13b
                            },
                            'speed': {
                                'min': 0xe1,
                                'max': 0x113
                            },
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'gravityY': 0x320,
                            'bounce': 0.2,
                            'collideTop': !0x1,
                            'collideBottom': !0x0,
                            'collideLeft': !0x1,
                            'collideRight': !0x1,
                            'on': !0x1
                        });
                        var _0x56b87f = new Phaser['Geom'][(_0x2b536f(0xb64))](0x0, this['scene']['renderer'][_0x2b536f(0x140e)] - 0x12, this['scene']['renderer'][_0x2b536f(0x173c)], 0x12);
                        this[_0x2b536f(0x14e1)] = this[_0x2b536f(0x6d2)][_0x2b536f(0x18bd)][_0x2b536f(0x1791)]('vfx'), this['colorParticles']['setDepth'](_0x2a16e3[_0x2b536f(0xd2c)][_0x2b536f(0x55d)]), this['colorEmitter'] = this[_0x2b536f(0x14e1)]['createEmitter']({
                            'frame': {
                                'frames': ['_blur.png', '_blur2.png', '_blur3.png'],
                                'cycle': !0x0
                            },
                            'x': 0x0,
                            'y': 0x0,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'lifespan': 0x5dc,
                            'blendMode': 'ADD',
                            'emitZone': {
                                'type': 'edge',
                                'source': _0x56b87f,
                                'quantity': 0x78,
                                'yoyo': !0x1
                            },
                            'on': !0x1
                        }), this[_0x2b536f(0x199f)][_0x2b536f(0xd87)](0x0), this[_0x2b536f(0x62d)] = new Phaser[(_0x2b536f(0xbf2))][(_0x2b536f(0x1660))](this['scene'], this['scene'][_0x2b536f(0x12f9)][_0x2b536f(0x173c)] - 0x40, this['scene'][_0x2b536f(0x12f9)]['height'] - 0x12, 'titleFont', 'Gold Fever!')['setOrigin'](0.5, 0x1)['setVisible'](!0x1)[_0x2b536f(0xd87)](0x0), this['totalText'] = new Phaser['GameObjects'][(_0x2b536f(0x1660))](this['scene'], 0.5 * this[_0x2b536f(0x6d2)]['renderer']['width'], this['scene'][_0x2b536f(0x12f9)][_0x2b536f(0x140e)] - 0x9, 'titleFont', '0')[_0x2b536f(0xf8e)](0.5, 0x1)[_0x2b536f(0x183f)](!0x1)['setScrollFactor'](0x0), this[_0x2b536f(0x24c)] = new _0x51666e['NineSlice'](this[_0x2b536f(0x6d2)], _0x57144c[_0x2b536f(0xd2c)][_0x2b536f(0x8c5)], {
                            'x': 0x0,
                            'y': this[_0x2b536f(0x6d2)][_0x2b536f(0x12f9)][_0x2b536f(0x140e)] - 0x12,
                            'width': this[_0x2b536f(0x6d2)][_0x2b536f(0x12f9)]['width'],
                            'height': 0x12
                        }), this[_0x2b536f(0x145a)] = new Phaser[(_0x2b536f(0xbf2))]['BitmapText'](this[_0x2b536f(0x6d2)], this['scene']['renderer']['width'] - 0x40, this['scene']['renderer'][_0x2b536f(0x140e)] - 0x12, 'titleFont', 'Gold Fever!')[_0x2b536f(0xf8e)](0x1, 0x1)['setVisible'](!0x1)['setScrollFactor'](0x0), this[_0x2b536f(0x24c)]['setScale'](0x1), this['progressBox'][_0x2b536f(0xd87)](0x0), this[_0x2b536f(0x6d2)][_0x2b536f(0x18bd)]['existing'](this[_0x2b536f(0x24c)]), this['progressBar'] = this[_0x2b536f(0x6d2)][_0x2b536f(0x18bd)][_0x2b536f(0x523)](), this['progressBar']['setScrollFactor'](0x0), this['progressBox']['setDepth'](_0x2a16e3[_0x2b536f(0xd2c)][_0x2b536f(0x55d)] - 0x2)[_0x2b536f(0xdab)](0x0)[_0x2b536f(0x183f)](!0x1), this[_0x2b536f(0xafa)][_0x2b536f(0xb4a)](_0x2a16e3['default'][_0x2b536f(0x55d)] - 0x1)[_0x2b536f(0xdab)](0x0)['setVisible'](!0x1), this[_0x2b536f(0x62d)]['setDepth'](_0x2a16e3['default']['ZInGameUI']), this[_0x2b536f(0x17a8)][_0x2b536f(0xb4a)](_0x2a16e3['default'][_0x2b536f(0x55d)]), this[_0x2b536f(0x145a)]['setDepth'](_0x2a16e3[_0x2b536f(0xd2c)]['ZInGameUI']), this[_0x2b536f(0x6d2)][_0x2b536f(0x18bd)]['existing'](this['title']), this[_0x2b536f(0x6d2)]['add']['existing'](this['progressBar']), this['scene'][_0x2b536f(0x18bd)]['existing'](this[_0x2b536f(0x24c)]), this[_0x2b536f(0x6d2)][_0x2b536f(0x18bd)]['existing'](this[_0x2b536f(0x145a)]), this[_0x2b536f(0x6d2)][_0x2b536f(0x18bd)]['existing'](this[_0x2b536f(0x17a8)]), this[_0x2b536f(0x5e7)] = this['scene'][_0x2b536f(0x18bd)][_0x2b536f(0x105b)](0x0, 0x0, 'vfx', 'redFog.png')[_0x2b536f(0xf8e)](0x0)['setScale'](this['scene'][_0x2b536f(0x12f9)]['width'] / 0xa0, this[_0x2b536f(0x6d2)][_0x2b536f(0x12f9)][_0x2b536f(0x140e)] / 0x64)[_0x2b536f(0x11c7)](_0x57575a[_0x2b536f(0x10fc)]['ADD'])[_0x2b536f(0xdab)](0x0)[_0x2b536f(0x183f)](!0x1)['setScrollFactor'](0x0)['setDepth'](_0x2a16e3[_0x2b536f(0xd2c)]['ZInGameUI'] - 0x4), this['randomIndex'] = 0x0, this['RANDOMS'] = [];
                        for (let _0x50f5b8 = 0x0; _0x50f5b8 < 0x3e8; _0x50f5b8++) this['RANDOMS'][_0x2b536f(0x1564)](_0x50f5b8 / 0x3e8);
                        Phaser[_0x2b536f(0x24f)][_0x2b536f(0x82a)][_0x2b536f(0xeec)](this[_0x2b536f(0x8f6)]);
                    } ['GetRandom']() {
                        const _0x1cfe3f = _0x36d1cf;
                        return this['RANDOMS'][this[_0x1cfe3f(0xbb9)]++ % this[_0x1cfe3f(0x8f6)]['length']];
                    } ['Start'](_0xb7d477) {
                        const _0x2b7946 = _0x36d1cf;
                        if (this[_0x2b7946(0x8db)] = this[_0x2b7946(0xb77)] * _0x291da1[_0x2b7946(0xd2c)][_0x2b7946(0x1043)][_0x2b7946(0x10f6)]['gfeverMul'], this[_0x2b7946(0x2c8)]) return this['durationInMS'] += _0xb7d477, this[_0x2b7946(0xa0b)] > this['durationCap'] && (this['durationInMS'] = this['durationCap']), this[_0x2b7946(0xb78)] -= _0xb7d477, void(this[_0x2b7946(0xb78)] < 0x0 && (this[_0x2b7946(0xb78)] = 0x0));
                        this['durationInMS'] = _0xb7d477, this[_0x2b7946(0xb78)] = 0x0, this[_0x2b7946(0x2c8)] = !0x0, this[_0x2b7946(0x532)] = 0x0, this[_0x2b7946(0xb08)] = 0x1, this['totalDuration'] = 0x0, this[_0x2b7946(0x17a8)][_0x2b7946(0x758)] = this[_0x2b7946(0x1011)][_0x2b7946(0x15c5)](this[_0x2b7946(0x532)]), Phaser[_0x2b7946(0x24f)][_0x2b7946(0x82a)][_0x2b7946(0xeec)](this['RANDOMS']), this['EnterUI']();
                    } ['Update'](_0x53091f) {
                        const _0x16c240 = _0x36d1cf;
                        if (!this['isActive']) return;
                        this['totalDuration'] += _0x53091f;
                        let _0x38c184 = _0x291da1[_0x16c240(0xd2c)]['Core']['IsTimeStopped'] ? 0.5 : 0x1;
                        this[_0x16c240(0xb78)] += _0x53091f * this[_0x16c240(0xb08)] * _0x38c184, this['totalTime'] >= this[_0x16c240(0xa0b)] && (this[_0x16c240(0xb78)] = 0x0, this['isActive'] = !0x1, this[_0x16c240(0xa0b)] = 0x0, this[_0x16c240(0x2a0)](), this['ExitUI']()), this['progressBar'][_0x16c240(0x159)](), this['progressBar']['fillStyle'](0xffcc22, 0x1);
                        const _0x3eabcb = this[_0x16c240(0x6d2)]['renderer']['width'] - 0x8,
                            _0x55bd6b = (0x1 - this['totalTime'] / this[_0x16c240(0xa0b)]) * _0x3eabcb;
                        this['progressBar'][_0x16c240(0x11fe)](0x4, this['scene'][_0x16c240(0x12f9)][_0x16c240(0x140e)] - 0x12 + 0x4, Math['min'](_0x55bd6b, _0x3eabcb), this[_0x16c240(0x12e8)]), this[_0x16c240(0x62d)]['scaleX'] = this[_0x16c240(0x62d)][_0x16c240(0x1721)] = this['Approach'](this['title']['scaleX'], 0x1, 0.001 * _0x53091f), this[_0x16c240(0x17a8)][_0x16c240(0x3a8)] = this[_0x16c240(0x17a8)]['scaleY'] = this['Approach'](this['totalText']['scaleX'], 0x1, 0.001 * _0x53091f), this[_0x16c240(0x145a)][_0x16c240(0x758)] = this['msToTime'](this[_0x16c240(0x559)]);
                    } ['CheckResults']() {
                        const _0x4929b0 = _0x36d1cf;
                        let _0x5bfec8 = _0x291da1[_0x4929b0(0xd2c)]['Core'][_0x4929b0(0x14d8)][_0x4929b0(0xacf)];
                        this[_0x4929b0(0x559)] > _0x5bfec8 && (_0x291da1['default'][_0x4929b0(0x1043)]['PlayerOptions']['LongestFever'] = this[_0x4929b0(0x559)]);
                        let _0x5afea5 = _0x291da1[_0x4929b0(0xd2c)]['Core'][_0x4929b0(0x14d8)][_0x4929b0(0x744)];
                        this['total'] > _0x5afea5 && (_0x291da1[_0x4929b0(0xd2c)]['Core'][_0x4929b0(0x14d8)][_0x4929b0(0x744)] = this['total']);
                    } ['OnEnemyDeath'](_0x2db3a4) {
                        const _0xc6524e = _0x36d1cf;
                        if (this[_0xc6524e(0x6ea)]() <= 0.75) {
                            this[_0xc6524e(0x125b)]['emitParticleAt'](_0x2db3a4['x'], _0x2db3a4['y'] - 0x8);
                            let _0xd84e49 = _0x291da1['default']['Core'][_0xc6524e(0xccb)](_0x2db3a4['x'], _0x2db3a4['y'], _0x227eb5[_0xc6524e(0xd2c)][_0xc6524e(0x1a10)]);
                            _0xd84e49['time'] = 0x1, _0xd84e49['goToPlayer'] = !0x0, _0xd84e49[_0xc6524e(0xb81)] = 0.5 * _0x2db3a4[_0xc6524e(0x1a29)], _0xd84e49['feverMS'] = 0xa;
                            let _0x29912a = _0xd84e49['value'] * _0x2a16e3[_0xc6524e(0xd2c)][_0xc6524e(0x11a1)] * _0x291da1['default']['Core'][_0xc6524e(0x10f6)][_0xc6524e(0xe7d)];
                            _0x291da1[_0xc6524e(0xd2c)][_0xc6524e(0x1043)][_0xc6524e(0x14d8)]['RunFever'] += _0x29912a;
                        }
                    } ['OnCoinPickup'](_0x1e0e77) {
                        const _0x321247 = _0x36d1cf;
                        if (this['isActive']) {
                            let _0x499b3d = _0x1e0e77[_0x321247(0x13a4)] * _0x291da1[_0x321247(0xd2c)][_0x321247(0x1043)][_0x321247(0x10f6)][_0x321247(0xf9d)];
                            this['durationInMS'] += _0x499b3d, this['durationInMS'] > this[_0x321247(0x8db)] && (this[_0x321247(0xa0b)] = this['durationCap']), this['totalTime'] -= _0x499b3d, this[_0x321247(0xb78)] < 0x0 && (this[_0x321247(0xb78)] = 0x0), this[_0x321247(0x62d)][_0x321247(0x8a2)](1.25);
                            let _0x413309 = _0x1e0e77[_0x321247(0xb81)];
                            if (_0x413309 *= _0x2a16e3['default']['GoldMultiplier'], _0x291da1['default'][_0x321247(0x1043)][_0x321247(0x10f6)] && (_0x413309 *= _0x291da1[_0x321247(0xd2c)][_0x321247(0x1043)][_0x321247(0x10f6)][_0x321247(0xe7d)]), this['total'] += _0x413309, this[_0x321247(0x532)] > 0x4e20) {
                                let _0x2f65d6 = 0x1 + 0.15 * Math['floor'](this[_0x321247(0x532)] / 0x2710);
                                this[_0x321247(0x17a8)][_0x321247(0x8a2)](1.15 + _0x2f65d6), this[_0x321247(0xb08)] = _0x2f65d6;
                            } else this[_0x321247(0x532)] > 0x2710 ? (this[_0x321247(0x17a8)][_0x321247(0x8a2)](0x2), this[_0x321247(0xb08)] = 1.1) : this[_0x321247(0x532)] > 0x3e8 ? this[_0x321247(0x17a8)][_0x321247(0x8a2)](1.5) : this['total'] > 0x64 ? this[_0x321247(0x17a8)]['setScale'](1.35) : this[_0x321247(0x17a8)][_0x321247(0x8a2)](1.25);
                            this[_0x321247(0x17a8)][_0x321247(0x758)] = this['formatter'][_0x321247(0x15c5)](this[_0x321247(0x532)]);
                        } else _0x291da1[_0x321247(0xd2c)]['Core']['Arcanas']['CoinFever'] && (_0x1e0e77[_0x321247(0xeb5)] === _0x227eb5[_0x321247(0xd2c)]['COINBAG1'] ? (this[_0x321247(0xa0b)] = 0x0, this['Start'](0x1388)) : _0x1e0e77[_0x321247(0xeb5)] === _0x227eb5['default'][_0x321247(0x13f5)] && (this['durationInMS'] = 0x0, this[_0x321247(0x809)](0x2710)));
                    } ['EnterUI']() {
                        const _0x1116f7 = _0x36d1cf;
                        var _0xe47511, _0x230b9a, _0x1ea9b9;
                        null === (_0xe47511 = this[_0x1116f7(0x581)]) || void 0x0 === _0xe47511 || _0xe47511['stop'](), null === (_0x230b9a = this[_0x1116f7(0x1dc)]) || void 0x0 === _0x230b9a || _0x230b9a[_0x1116f7(0x1a34)](), this[_0x1116f7(0xafa)]['setVisible'](!0x0), this[_0x1116f7(0x24c)]['setVisible'](!0x0), this[_0x1116f7(0x62d)][_0x1116f7(0x183f)](!0x0)['setAlpha'](0x1)[_0x1116f7(0x8a2)](0.5, 0x1), this['title']['x'] = this['scene'][_0x1116f7(0x12f9)]['width'] - 0x40, this[_0x1116f7(0x62d)]['y'] = this[_0x1116f7(0x6d2)]['renderer'][_0x1116f7(0x140e)] - 0xc, this['scene'][_0x1116f7(0x12a1)]['add']({
                            'targets': this[_0x1116f7(0x62d)],
                            'x': 0x48,
                            'scaleX': 0x1,
                            'alpha': 0x1,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut',
                            'onComplete': () => {}
                        }), this['lengthText'][_0x1116f7(0x183f)](!0x0)[_0x1116f7(0xdab)](0x1)[_0x1116f7(0x8a2)](0x1), this['lengthText']['x'] = this[_0x1116f7(0x6d2)]['renderer']['width'] - 0x40, this[_0x1116f7(0x145a)]['y'] = this['scene']['renderer'][_0x1116f7(0x140e)] - 0xc, this['scene'][_0x1116f7(0x12a1)][_0x1116f7(0x18bd)]({
                            'targets': this[_0x1116f7(0x145a)],
                            'x': this['scene'][_0x1116f7(0x12f9)][_0x1116f7(0x173c)] - 0x8,
                            'scaleX': 0x1,
                            'alpha': 0x1,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut',
                            'onComplete': () => {}
                        }), this['totalText'][_0x1116f7(0x183f)](!0x0), this['totalText']['x'] = 0.5 * this['scene']['renderer'][_0x1116f7(0x173c)], this['totalText']['y'] = this[_0x1116f7(0x6d2)]['renderer']['height'] - 0x9, this[_0x1116f7(0x17a8)][_0x1116f7(0x8a2)](0x1)['setAlpha'](0x0), this[_0x1116f7(0x6d2)]['tweens']['add']({
                            'targets': [this[_0x1116f7(0x17a8)], this[_0x1116f7(0xafa)], this[_0x1116f7(0x24c)]],
                            'alpha': 0x1,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut'
                        }), this[_0x1116f7(0x24c)]['y'] = this[_0x1116f7(0x6d2)]['renderer'][_0x1116f7(0x140e)] + 0x12, this[_0x1116f7(0x6d2)][_0x1116f7(0x12a1)][_0x1116f7(0x18bd)]({
                            'targets': [this['progressBox']],
                            'y': this['scene']['renderer'][_0x1116f7(0x140e)] - 0x12,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut'
                        }), this['colorEmitter'][_0x1116f7(0x1aa2)](), this[_0x1116f7(0x5e7)][_0x1116f7(0x183f)](!0x0), this['redFog'][_0x1116f7(0xdab)](0.05), null === (_0x1ea9b9 = this[_0x1116f7(0xc4f)]) || void 0x0 === _0x1ea9b9 || _0x1ea9b9[_0x1116f7(0x1a34)](), this[_0x1116f7(0xc4f)] = this['scene'][_0x1116f7(0x12a1)][_0x1116f7(0x18bd)]({
                            'targets': this[_0x1116f7(0x5e7)],
                            'alpha': 0.15,
                            'duration': 0x1f4,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1,
                            'yoyo': !0x0
                        }), this['redFog']['setAlpha'](0x0), _0x291da1['default'][_0x1116f7(0x1267)]['PlaySound'](_0x3fbbe5[_0x1116f7(0xd2c)][_0x1116f7(0xd89)], {
                            'volume': 1.5,
                            'detune': -0x64
                        }, 0x96, 0x3), _0x291da1['default']['Sound'][_0x1116f7(0x7f6)](_0x3fbbe5['default']['Ringing'], {
                            'volume': 1.5,
                            'detune': -0xc8
                        }, 0x96, 0x3), _0x291da1[_0x1116f7(0xd2c)][_0x1116f7(0x1267)]['PlaySound'](_0x3fbbe5[_0x1116f7(0xd2c)]['Ringing'], {
                            'volume': 1.5,
                            'detune': -0x12c
                        }, 0x96, 0x3);
                    } ['ExitUI']() {
                        const _0x1e4f2e = _0x36d1cf;
                        var _0x4abe04;
                        this[_0x1e4f2e(0x6d2)]['tweens'][_0x1e4f2e(0x18bd)]({
                            'targets': [this['progressBar'], this[_0x1e4f2e(0x24c)]],
                            'alpha': 0x0,
                            'duration': 0xc8
                        }), this['exitTween1'] = this[_0x1e4f2e(0x6d2)]['tweens'][_0x1e4f2e(0x18bd)]({
                            'targets': [this[_0x1e4f2e(0x17a8)]],
                            'scaleX': this[_0x1e4f2e(0x17a8)][_0x1e4f2e(0x3a8)] + 0.5,
                            'scaleY': this['totalText']['scaleY'] + 0.6,
                            'y': this['totalText']['y'] - 0x30,
                            'duration': 0x1f4,
                            'completeDelay': 0x7d0,
                            'onComplete': () => {
                                const _0xc10d1d = _0x1e4f2e;
                                this[_0xc10d1d(0x1dc)] = this[_0xc10d1d(0x6d2)]['tweens'][_0xc10d1d(0x18bd)]({
                                    'targets': [this['title'], this[_0xc10d1d(0x17a8)], this['lengthText']],
                                    'alpha': 0x0,
                                    'duration': 0x1f4
                                });
                            }
                        }), this[_0x1e4f2e(0x199f)][_0x1e4f2e(0x1a34)](), null === (_0x4abe04 = this[_0x1e4f2e(0xc4f)]) || void 0x0 === _0x4abe04 || _0x4abe04[_0x1e4f2e(0x1a34)](), this[_0x1e4f2e(0x5e7)][_0x1e4f2e(0xdab)](0x0);
                    } ['Approach'](_0x200276, _0x362f58, _0x39c845) {
                        const _0x3b53ee = _0x36d1cf;
                        return _0x200276 < _0x362f58 ? Math[_0x3b53ee(0x1084)](_0x200276 + _0x39c845, _0x362f58) : Math[_0x3b53ee(0x1981)](_0x200276 - _0x39c845, _0x362f58);
                    } ['msToTime'](_0x4601e2) {
                        const _0x59f1d3 = _0x36d1cf;
                        var _0x36b1f7 = Math['floor'](_0x4601e2 % 0x3e8 / 0xa),
                            _0x1de570 = Math[_0x59f1d3(0xe07)](_0x4601e2 / 0x3e8 % 0x3c),
                            _0x217ea2 = Math['floor'](_0x4601e2 / 0xea60 % 0x3c);
                        return (_0x217ea2 = (_0x217ea2 < 0xa ? '0' + _0x217ea2 : _0x217ea2)[_0x59f1d3(0xcc6)]()[_0x59f1d3(0x7e1)](0x2, '0')) + ':' + (_0x1de570 = (_0x1de570 < 0xa ? '0' + _0x1de570 : _0x1de570)[_0x59f1d3(0xcc6)]()[_0x59f1d3(0x7e1)](0x2, '0')) + '.' + _0x36b1f7[_0x59f1d3(0xcc6)]()['padStart'](0x2, '0');
                    }
                }
                _0x5305b6['GoldFever'] = _0x3f656b, _0x5305b6['default'] = _0x3f656b;
            };
