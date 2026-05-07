// Module 0xe43d
// Args: _0x3fe73d, _0xb60aca, _0x2c2c3d

export default (_0x3fe73d, _0xb60aca, _0x2c2c3d) => {
                'use strict';
                const _0x1b5b8d = a0_0x6932;
                var _0xa7c182 = this && this['__importDefault'] || function(_0x1f6b77) {
                    const _0x268980 = a0_0x6932;
                    return _0x1f6b77 && _0x1f6b77['__esModule'] ? _0x1f6b77 : {
                        'default': _0x1f6b77
                    };
                };
                Object['defineProperty'](_0xb60aca, '__esModule', {
                    'value': !0x0
                });
                const _0x1d06a7 = _0xa7c182(_0x2c2c3d(0x15abc)),
                    _0x413782 = _0xa7c182(_0x2c2c3d(0x5103)),
                    _0x4623af = _0xa7c182(_0x2c2c3d(0x7c1)),
                    _0x46e636 = _0xa7c182(_0x2c2c3d(0x1166a));
                class _0x5b0dc6 extends _0x46e636['default'] {
                    constructor(_0x2def00, _0xf9c69, _0x47d9bd, _0x23c657) {
                        const _0x536b44 = _0x1b5b8d;
                        super(_0x2def00, _0xf9c69, _0x47d9bd, _0x23c657);
                        let _0x42c107 = _0x1d06a7['default'][this['enemyType']][0x0];
                        this[_0x536b44(0x3b8)] = new _0x4623af[(_0x536b44(0xd2c))](this[_0x536b44(0x6d2)], _0xf9c69, _0x47d9bd, _0x42c107[_0x536b44(0xacb)], _0x42c107[_0x536b44(0x1563)], 0x78, !0x0), this['trail'][_0x536b44(0x1807)] = this, this['trail'][_0x536b44(0x8a2)](0x1), this[_0x536b44(0x6d2)]['add']['existing'](this[_0x536b44(0x3b8)]), this[_0x536b44(0x183f)](!0x1);
                    } ['OnRecycle']() {
                        const _0x45cde0 = _0x1b5b8d;
                        super[_0x45cde0(0x5ce)](), this['trail']['clearPositions'](), this[_0x45cde0(0x3b8)][_0x45cde0(0x623)](this['x'], this['y']), this[_0x45cde0(0x3b8)][_0x45cde0(0x103f)](), this['trail'][_0x45cde0(0xe71)] = 0x1, this[_0x45cde0(0x1562)] += Math['random']() * Math['PI'] * 0x2;
                        let _0x17495c = _0x1d06a7['default'][this[_0x45cde0(0xe49)]][0x0]['speed'];
                        this[_0x45cde0(0x78e)] = Math[_0x45cde0(0x9ad)]() * _0x17495c * 0.2 + _0x17495c, this[_0x45cde0(0x381)](this['defaultName']);
                    } ['Disappear']() {
                        const _0x290c5f = _0x1b5b8d;
                        var _0x3b6869;
                        this[_0x290c5f(0xdae)] = !0x0, this['anims']['play']('die'), null === (_0x3b6869 = this[_0x290c5f(0x15a2)]) || void 0x0 === _0x3b6869 || _0x3b6869[_0x290c5f(0x1a34)](), this['fadeTrailTween'] = this['scene'][_0x290c5f(0x12a1)][_0x290c5f(0x18bd)]({
                            'targets': this[_0x290c5f(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x12c
                        });
                    } ['Die']() {
                        const _0x5e6ecb = _0x1b5b8d;
                        var _0x21b69d;
                        super[_0x5e6ecb(0x14f3)](), null === (_0x21b69d = this['fadeTrailTween']) || void 0x0 === _0x21b69d || _0x21b69d['stop'](), this[_0x5e6ecb(0x15a2)] = this['scene']['tweens'][_0x5e6ecb(0x18bd)]({
                            'targets': this[_0x5e6ecb(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x12c
                        });
                    } ['DeSpawn']() {
                        const _0x3416ad = _0x1b5b8d;
                        var _0x4dfa50;
                        this['anims']['stop'](), null === (_0x4dfa50 = this['fadeTrailTween']) || void 0x0 === _0x4dfa50 || _0x4dfa50[_0x3416ad(0x1a34)](), this[_0x3416ad(0x3b8)][_0x3416ad(0xe71)] = 0x0, super['DeSpawn']();
                    } ['Update'](_0x531d5a = 0x0) {
                        const _0x14d80c = _0x1b5b8d;
                        if (this[_0x14d80c(0xdae)]) return;
                        if (this['depth'] = this[_0x14d80c(0x6d2)][_0x14d80c(0x12f9)][_0x14d80c(0x140e)], this['IsTimeStopped']) return;
                        (!this[_0x14d80c(0x197a)] || this['FixedDirection'] && 0x0 == this[_0x14d80c(0x70d)]['x'] && 0x0 == this['_currentDirection']['y']) && (this[_0x14d80c(0x70d)]['x'] = this[_0x14d80c(0x18a7)]['x'] - this['x'], this[_0x14d80c(0x70d)]['y'] = this['target']['y'] - this['y'], this['_currentDirection']['normalize']()), this[_0x14d80c(0x1562)] += this[_0x14d80c(0x78e)] / (0x271 * _0x531d5a), this['_currentDirection']['y'] = Math[_0x14d80c(0xd7e)](this[_0x14d80c(0x1562)]);
                        let _0x2eb4f5 = this['receivingDamage'] ? -this[_0x14d80c(0x1992)] * this[_0x14d80c(0x25d)] : 0x1;
                        this['setFlipX'](this['_currentDirection']['x'] > 0x0);
                        let _0x286ac9 = _0x413782['default'][_0x14d80c(0xc23)] * this['speed'] * _0x2eb4f5 * this['slow'] * (16.666 / _0x531d5a);
                        this[_0x14d80c(0x19c8)](_0x286ac9 * this[_0x14d80c(0x70d)]['x'], _0x286ac9 * this['_currentDirection']['y']), this['setAngle'](_0x46e636[_0x14d80c(0xd2c)]['TweenAngles'][this['moveTweenIndex']]['angle']), 0x0 == this[_0x14d80c(0x3b8)][_0x14d80c(0xc9f)][_0x14d80c(0xed9)] && this['trail'][_0x14d80c(0x103f)](), this['trail'][_0x14d80c(0x12fc)](), this[_0x14d80c(0x3b8)]['depth'] = this[_0x14d80c(0x16c6)] - 0x1, this[_0x14d80c(0x3b8)][_0x14d80c(0x9c0)] = this['flipX'];
                    }
                }
                _0xb60aca['default'] = _0x5b0dc6;
            };
