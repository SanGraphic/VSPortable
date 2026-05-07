// Module 0x2b56
// Args: _0x5be934, _0xfc06e8, _0x1b1623

export default (_0x5be934, _0xfc06e8, _0x1b1623) => {
                'use strict';
                const _0x16fc85 = a0_0x6932;
                var _0x40e5a3 = this && this['__importDefault'] || function(_0x2711f1) {
                    const _0x200e23 = a0_0x6932;
                    return _0x2711f1 && _0x2711f1['__esModule'] ? _0x2711f1 : {
                        'default': _0x2711f1
                    };
                };
                Object['defineProperty'](_0xfc06e8, '__esModule', {
                    'value': !0x0
                });
                const _0x4aac1b = _0x40e5a3(_0x1b1623(0x15abc)),
                    _0x874fa2 = _0x40e5a3(_0x1b1623(0x5f07)),
                    _0x21266e = _0x40e5a3(_0x1b1623(0xbc1a));
                class _0x45e7cb extends _0x21266e['default'] {
                    constructor() {
                        const _0x4ad70b = _0x16fc85;
                        super(...arguments), this[_0x4ad70b(0x1838)] = 0x1, this[_0x4ad70b(0x1b1a)] = !0x0, this['patrolDuration'] = 0x7d0;
                    } ['OnRecycle']() {
                        const _0x84a15a = _0x16fc85;
                        super['OnRecycle'](), this[_0x84a15a(0x1b1a)] = !0x0;
                        let _0x5f36bd = _0x4aac1b['default'][this['enemyType']][0x0];
                        this[_0x84a15a(0x1b1c)] = _0x5f36bd[_0x84a15a(0x78e)], this[_0x84a15a(0x1701)] = _0x5f36bd[_0x84a15a(0x1701)] ? _0x5f36bd[_0x84a15a(0x1701)] : 0x7d0, this[_0x84a15a(0x1838)] = 0x1, this['scale'] = 0x0, this[_0x84a15a(0xd9b)] ? (this[_0x84a15a(0xd9b)][_0x84a15a(0x1374)](), this[_0x84a15a(0x18e8)] && this['OnSineTween']['restart']()) : (this['OnEnterTween'] = this[_0x84a15a(0x6d2)]['tweens'][_0x84a15a(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x84a15a(0x17ef)],
                            'duration': 0x3e8
                        }), this[_0x84a15a(0x18e8)] ? this['OnSineTween']['restart']() : this['OnSineTween'] = this['scene']['tweens'][_0x84a15a(0x18bd)]({
                            'delay': 0x64,
                            'targets': this,
                            'sineF': -0x1,
                            'duration': this['patrolDuration'],
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }));
                    } ['setOwner'](_0x4cff6e) {
                        const _0x3d7cf9 = _0x16fc85;
                        super[_0x3d7cf9(0x462)](_0x4cff6e), this[_0x3d7cf9(0x18a7)] = _0x4cff6e;
                    } ['DeSpawn']() {
                        const _0x4f1f76 = _0x16fc85;
                        var _0x6a872c;
                        super['DeSpawn'](), null === (_0x6a872c = this['OnEnterTween']) || void 0x0 === _0x6a872c || _0x6a872c[_0x4f1f76(0x1a34)]();
                    } ['Update'](_0x4e8678) {
                        const _0x17ac52 = _0x16fc85;
                        var _0x302481, _0x5e5249;
                        super[_0x17ac52(0x2b3)](_0x4e8678);
                        for (let _0x3e7a4f = 0x0; _0x3e7a4f < this[_0x17ac52(0xef5)]['spawned']['length']; _0x3e7a4f++) this['lancetPool']['spawned'][_0x3e7a4f][_0x17ac52(0x5ef)] = 0x3e8;
                        this[_0x17ac52(0x1b1a)] ? (null === (_0x5e5249 = null === (_0x302481 = this['owner']) || void 0x0 === _0x302481 ? void 0x0 : _0x302481[_0x17ac52(0xcf9)]) || void 0x0 === _0x5e5249 ? void 0x0 : _0x5e5249[_0x17ac52(0x543)]) ? (this[_0x17ac52(0x78e)] = this['_defaultSpeed'] * this['sineF'], super[_0x17ac52(0xa9f)](_0x4e8678), this[_0x17ac52(0xb8d)](this[_0x17ac52(0x70d)]['x'] < 0x0)) : (this[_0x17ac52(0x78e)] = this['_defaultSpeed'], this['target'] = _0x874fa2[_0x17ac52(0xd2c)]['Core']['Player'], this['isPatrolling'] = !0x1) : super['Update'](_0x4e8678);
                    }
                }
                _0xfc06e8['default'] = _0x45e7cb;
            };
