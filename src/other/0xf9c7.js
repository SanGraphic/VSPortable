// Module 0xf9c7
// Args: _0x3ab4ad, _0x5e1785, _0x2391bc

export default (_0x3ab4ad, _0x5e1785, _0x2391bc) => {
                'use strict';
                const _0x5d0982 = a0_0x6932;
                var _0x506d44 = this && this['__importDefault'] || function(_0xd60eaa) {
                    const _0x35a7ed = _0x5d0982;
                    return _0xd60eaa && _0xd60eaa[_0x35a7ed(0x16f1)] ? _0xd60eaa : {
                        'default': _0xd60eaa
                    };
                };
                Object['defineProperty'](_0x5e1785, '__esModule', {
                    'value': !0x0
                });
                const _0x13bc3e = _0x506d44(_0x2391bc(0x15abc)),
                    _0x83e92d = _0x506d44(_0x2391bc(0x136b9)),
                    _0x5e729f = _0x506d44(_0x2391bc(0x1fd7)),
                    _0x7e0689 = _0x506d44(_0x2391bc(0x5f07)),
                    _0x55eb9c = _0x506d44(_0x2391bc(0x1166a)),
                    _0xab379d = _0x506d44(_0x2391bc(0x7c1));
                class _0x5d907a extends _0x55eb9c['default'] {
                    constructor(_0x4395b6, _0x4737b0, _0x3f4f83, _0x493a28) {
                        const _0x37d8ce = _0x5d0982;
                        super(_0x4395b6, _0x4737b0, _0x3f4f83, _0x493a28), this['owner'] = null, this[_0x37d8ce(0x9e6)] = 0x5, this['maxAngleRotDeg'] = 0xa, this[_0x37d8ce(0x17d1)] = 0x0, this[_0x37d8ce(0x8ea)] = 0x1388, this[_0x37d8ce(0x48b)] = 0x1388, this['attackLerp'] = 0x0, this[_0x37d8ce(0xb2c)] = {
                            'x': 0x0,
                            'y': -0x36
                        }, this[_0x37d8ce(0xf9a)] = {
                            'x': 0x0,
                            'y': -0x36
                        }, this[_0x37d8ce(0x1b0c)] = 0x0;
                        let _0x2f1d37 = _0x13bc3e[_0x37d8ce(0xd2c)][this[_0x37d8ce(0xe49)]][0x0];
                        this['trail'] = new _0xab379d['default'](this['scene'], _0x4737b0, _0x3f4f83, _0x2f1d37[_0x37d8ce(0xacb)], _0x2f1d37['flagName'], 0x78, !0x0), this['trail']['follower'] = this, this[_0x37d8ce(0x3b8)][_0x37d8ce(0x8a2)](0x1), this['scene']['add'][_0x37d8ce(0x1a88)](this['trail']), this[_0x37d8ce(0x107a)] = 0x0, this['AttackTime'] = 0x0, this[_0x37d8ce(0x421)] = new Phaser['Math'][(_0x37d8ce(0x1551))](0x0, 0x0), this['startingPosition'] = new Phaser[(_0x37d8ce(0x24f))]['Vector2'](0x0, 0x0), this['currentVector'] = new Phaser[(_0x37d8ce(0x24f))][(_0x37d8ce(0x1551))](0x0, 0x0), this[_0x37d8ce(0x489)] = new Phaser[(_0x37d8ce(0x24f))][(_0x37d8ce(0x1551))](0x0, 0x0);
                    } ['setHeadIndex'](_0x5cee6f) {
                        const _0x4bde17 = _0x5d0982;
                        this[_0x4bde17(0x1b0c)] = _0x5cee6f, 0x0 === this[_0x4bde17(0x1b0c)] && (this['maxHp'] *= 0x2, this['hp'] = this['maxHp']);
                    } ['SetRandomStartingPosition']() {
                        const _0xe9d939 = _0x5d0982;
                        if (0x0 === this[_0xe9d939(0x1b0c)]) return this['startingPosition']['x'] = 0x0, void(this[_0xe9d939(0xec3)]['y'] = -0x2a);
                        let _0x1d1da6 = this[_0xe9d939(0x4d4)] ? -0x1 : 0x1;
                        this['startingPosition']['x'] = 0x40 * (Math[_0xe9d939(0x9ad)]() - 0.25) * _0x1d1da6, this[_0xe9d939(0xec3)]['y'] = -0x2c * this[_0xe9d939(0x1721)] + -0x2d * Math['random']();
                    } ['OnRecycle']() {
                        const _0x77e18a = _0x5d0982;
                        super['OnRecycle'](), this[_0x77e18a(0x177d)] = !0x1, this[_0x77e18a(0x3b8)][_0x77e18a(0xe71)] = 0x1, this[_0x77e18a(0x17d1)] = Math[_0x77e18a(0x9ad)]() * this[_0x77e18a(0x48b)], this[_0x77e18a(0x8ea)] = 0x1388 + Math[_0x77e18a(0x9ad)]() * this['ATTACK_DELAY'], this[_0x77e18a(0xcbc)]();
                    } ['Update'](_0x536512) {
                        const _0xfcf2a4 = _0x5d0982;
                        super[_0xfcf2a4(0xa9f)](_0x536512), this['depth'] = this[_0xfcf2a4(0x351)]['depth'] + 0x9, this['trail'][_0xfcf2a4(0xb4a)](this['depth'] - 0x8), this['x'] = this[_0xfcf2a4(0x351)]['x'] + this['startingPosition']['x'], this['y'] = this['owner']['y'] + this[_0xfcf2a4(0xec3)]['y'], this['SetCurrentVector'](), this['x'] = this[_0xfcf2a4(0x1848)]['x'], this['y'] = this[_0xfcf2a4(0x1848)]['y'], this[_0xfcf2a4(0x17d1)] += _0x536512, this[_0xfcf2a4(0x17d1)] >= this[_0xfcf2a4(0x8ea)] && (this['Attack'](), this[_0xfcf2a4(0x17d1)] = 0x0);
                        let _0x22a637 = this['owner'][_0xfcf2a4(0x4d4)] ? this['inv_headOffset']['x'] : this['headOffset']['x'];
                        this[_0xfcf2a4(0x489)]['x'] = this[_0xfcf2a4(0x351)]['x'] + _0x22a637, this[_0xfcf2a4(0x489)]['y'] = this[_0xfcf2a4(0x351)]['y'] + this[_0xfcf2a4(0xb2c)]['y'], this[_0xfcf2a4(0x107a)] = this[_0xfcf2a4(0x4d4)] ? -0x1 : 0x0;
                        var _0x3251fc = new Phaser[(_0xfcf2a4(0x24f))][(_0xfcf2a4(0x1551))]();
                        _0x3251fc['x'] = this['x'], _0x3251fc['y'] = this['y'], _0x3251fc = this['rotate_point'](this['neckPosition']['x'], this[_0xfcf2a4(0x489)]['y'], this['attackLerp'] * (this[_0xfcf2a4(0x9e6)] + this[_0xfcf2a4(0x107a)] * this[_0xfcf2a4(0x83e)]), _0x3251fc), this['x'], this['y'], _0x3251fc['x'], _0x3251fc['y'], this[_0xfcf2a4(0x489)]['x'], this['neckPosition']['y'];
                        let _0x2c2caf = new Phaser[(_0xfcf2a4(0x16c7))][(_0xfcf2a4(0x12e9))]({
                            'x': this['x'],
                            'y': this['y'] - 0x10
                        }, {
                            'x': _0x3251fc['x'],
                            'y': _0x3251fc['y']
                        }, {
                            'x': this['neckPosition']['x'],
                            'y': this[_0xfcf2a4(0x489)]['y']
                        })['getPoints'](0x5);
                        this[_0xfcf2a4(0x3b8)]['setPoints'](_0x2c2caf), this['trail']['setDirty']();
                    } ['Attack']() {
                        const _0x5f18b6 = _0x5d0982;
                        var _0x569284, _0x5d2ab4;
                        this[_0x5f18b6(0x14a3)] || (this['targetVector']['x'] = _0x7e0689[_0x5f18b6(0xd2c)]['Core'][_0x5f18b6(0x10f6)]['x'], this[_0x5f18b6(0x421)]['y'] = _0x7e0689[_0x5f18b6(0xd2c)][_0x5f18b6(0x1043)]['Player']['y'], null === (_0x569284 = this[_0x5f18b6(0x171f)]) || void 0x0 === _0x569284 || _0x569284[_0x5f18b6(0x1a34)](), this[_0x5f18b6(0x171f)] = this[_0x5f18b6(0x6d2)][_0x5f18b6(0x12a1)]['add']({
                            'targets': this,
                            'attackLerp': 0x1,
                            'duration': 0xc8,
                            'yoyo': !0x0,
                            'delay': 0x1f4,
                            'onComplete': () => {
                                const _0x1f05c0 = _0x5f18b6;
                                this[_0x1f05c0(0xcbc)]();
                            }
                        }), null === (_0x5d2ab4 = this[_0x5f18b6(0x1448)]) || void 0x0 === _0x5d2ab4 || _0x5d2ab4[_0x5f18b6(0x1a34)](), this['RetreatTween'] = this[_0x5f18b6(0x6d2)]['tweens'][_0x5f18b6(0x18bd)]({
                            'targets': this,
                            'attackLerp': 0x0,
                            'duration': 0x190,
                            'delay': 0x2bc
                        }), this['SingleWarning'](this['x'], this['y'] - 0x10));
                    } ['SetCurrentVector']() {
                        const _0x1e8026 = _0x5d0982;
                        let _0x134713 = new Phaser['Math']['Vector2'](this['x'], this['y']);
                        this['currentVector'] = _0x134713[_0x1e8026(0x1a48)](this[_0x1e8026(0x421)], this['attackLerp']);
                    } ['GetDamaged'](_0x2c52f4, _0x35d5e7, _0x29926a, _0x90e20a) {
                        const _0x217283 = _0x5d0982;
                        this['owner'] && this[_0x217283(0x351)]['GetDamaged'](_0x2c52f4, _0x83e92d[_0x217283(0xd2c)]['NONE'], 0x0, _0x90e20a), super['GetDamaged'](_0x2c52f4, _0x35d5e7, _0x29926a, _0x90e20a);
                    } ['Die']() {
                        const _0x2cc4ce = _0x5d0982;
                        var _0x2e4428;
                        super[_0x2cc4ce(0x14f3)](), null === (_0x2e4428 = this['fadeTrailTween']) || void 0x0 === _0x2e4428 || _0x2e4428['stop'](), this[_0x2cc4ce(0x15a2)] = this[_0x2cc4ce(0x6d2)]['tweens']['add']({
                            'targets': this[_0x2cc4ce(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x12c
                        }), _0x7e0689['default'][_0x2cc4ce(0x1267)][_0x2cc4ce(0x7f6)](_0x5e729f['default'][_0x2cc4ce(0x15f)], {
                            'volume': 0x1,
                            'detune': -0x258 * Math['random']()
                        }, 0x3e8, 0x2), _0x7e0689[_0x2cc4ce(0xd2c)][_0x2cc4ce(0x1043)]['SceneManager'][_0x2cc4ce(0x35f)]();
                    } ['rotate_point'](_0x2c894d, _0x37cf0c, _0x108992, _0x377fc0) {
                        const _0x27978c = _0x5d0982;
                        var _0x55f7cf = Math[_0x27978c(0xc80)](_0x108992),
                            _0x4b6f85 = Math['cos'](_0x108992);
                        _0x377fc0['x'] -= _0x2c894d, _0x377fc0['y'] -= _0x37cf0c;
                        var _0x30968f = _0x377fc0['x'] * _0x4b6f85 - _0x377fc0['y'] * _0x55f7cf,
                            _0x1f7b31 = _0x377fc0['x'] * _0x55f7cf + _0x377fc0['y'] * _0x4b6f85;
                        return _0x377fc0['x'] = _0x30968f + _0x2c894d, _0x377fc0['y'] = _0x1f7b31 + _0x37cf0c, _0x377fc0;
                    } ['SingleWarning'](_0xb257ab, _0x1f99b6) {
                        const _0x4d085a = _0x5d0982;
                        let _0x3f4a70 = this[_0x4d085a(0x6d2)][_0x4d085a(0x18bd)]['image'](_0xb257ab, _0x1f99b6, 'UI', 'ExclamationMark.png')[_0x4d085a(0x8a2)](0x0)['setOrigin'](0.5, 0x1)['setDepth'](0x2328);
                        _0x7e0689[_0x4d085a(0xd2c)]['Sound'][_0x4d085a(0x7f6)](_0x5e729f['default']['Pizza'], {
                            'volume': 0.7,
                            'detune': 0x1f4 * Math[_0x4d085a(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene']['tweens']['add']({
                            'targets': _0x3f4a70,
                            'scale': 0x1,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x184f91 = _0x4d085a;
                                this[_0x184f91(0x6d2)]['tweens'][_0x184f91(0x18bd)]({
                                    'targets': _0x3f4a70,
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8,
                                    'onComplete': () => {
                                        const _0x36fdb6 = _0x184f91;
                                        _0x3f4a70[_0x36fdb6(0x16ca)]();
                                    }
                                });
                            }
                        });
                    }
                }
                _0x5e1785['default'] = _0x5d907a;
            };
