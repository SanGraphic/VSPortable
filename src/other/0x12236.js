// Module 0x12236
// Args: _0x2ce6c4, _0x43eb2f, _0x1705de

export default (_0x2ce6c4, _0x43eb2f, _0x1705de) => {
                'use strict';
                const _0x4f8d3f = a0_0x6932;
                var _0xf86901 = this && this['__importDefault'] || function(_0x32d527) {
                    const _0x17c72d = a0_0x6932;
                    return _0x32d527 && _0x32d527['__esModule'] ? _0x32d527 : {
                        'default': _0x32d527
                    };
                };
                Object['defineProperty'](_0x43eb2f, '__esModule', {
                    'value': !0x0
                });
                const _0x5a3f18 = _0xf86901(_0x1705de(0x15abc)),
                    _0x2efd71 = _0xf86901(_0x1705de(0x9bda)),
                    _0x5efba7 = _0xf86901(_0x1705de(0x5f07)),
                    _0x229a60 = _0xf86901(_0x1705de(0x1166a));
                class _0x1ad2d7 extends _0x229a60['default'] {
                    constructor() {
                        super(...arguments), this['sineF'] = 0x1, this['hasLostTreasure'] = !0x1, this['activated'] = 0x0;
                    } ['OnRecycle']() {
                        const _0x45fbf2 = _0x4f8d3f;
                        super['OnRecycle'](), this[_0x45fbf2(0x1b1c)] = _0x5a3f18['default'][this[_0x45fbf2(0xe49)]][0x0][_0x45fbf2(0x78e)], this['sineF'] = 0x1, this[_0x45fbf2(0x177d)] = !0x1, this[_0x45fbf2(0x187a)] = !0x1, this[_0x45fbf2(0xe71)] = 0.8, this[_0x45fbf2(0xe89)] = 0x0, this[_0x45fbf2(0x18e8)] ? this['OnSineTween']['restart']() : this['OnSineTween'] = this[_0x45fbf2(0x6d2)]['tweens'][_0x45fbf2(0x18bd)]({
                            'targets': this,
                            'sineF': 0.1,
                            'alpha': 0.6,
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }), this['firetime'] = 0x0;
                        let _0x4f33ae = _0x5a3f18['default'][this[_0x45fbf2(0xe49)]][0x0];
                        this[_0x45fbf2(0x16b4)] = _0x4f33ae['fireDelay'] || 0x7d0, this[_0x45fbf2(0x14e)] = _0x4f33ae['bulletType'] || _0x2efd71['default']['BULLET_Z'], this['OnFireTimer'] ? this['OnFireTimer'][_0x45fbf2(0x1374)]() : this['OnFireTimer'] = this['scene'][_0x45fbf2(0x12a1)][_0x45fbf2(0x18bd)]({
                            'duration': this[_0x45fbf2(0x16b4)],
                            'targets': this,
                            'firetime': 0x1,
                            'repeat': -0x1,
                            'onRepeat': () => {
                                this['Fire']();
                            }
                        });
                    } ['Disappear']() {
                        const _0x2e1198 = _0x4f8d3f;
                        var _0x15b78a;
                        null === (_0x15b78a = this[_0x2e1198(0x18e8)]) || void 0x0 === _0x15b78a || _0x15b78a[_0x2e1198(0x1a34)](), this[_0x2e1198(0x1838)] = -0x2, this[_0x2e1198(0x177d)] = !0x0, this[_0x2e1198(0x187a)] = !0x1, this['scene']['tweens'][_0x2e1198(0x18bd)]({
                            'targets': this,
                            'sineF': -0xa,
                            'duration': 0x7d0
                        });
                    } ['Update'](_0x54c1bb) {
                        const _0x2ff739 = _0x4f8d3f;
                        this[_0x2ff739(0x78e)] = this[_0x2ff739(0x1b1c)] * this['sineF'] * this[_0x2ff739(0xe89)], _0x5efba7[_0x2ff739(0xd2c)][_0x2ff739(0x1043)][_0x2ff739(0x10f6)]['y'] > 0x14000 && (this['activated'] = 0x1), super['Update'](_0x54c1bb);
                    } ['GetDamaged'](_0x8e40ae, _0x477d56, _0x5b65c7, _0x437949) {
                        const _0x17f531 = _0x4f8d3f;
                        this[_0x17f531(0xe89)] && super[_0x17f531(0x1112)](_0x8e40ae, _0x477d56, _0x5b65c7, _0x437949);
                    } ['Die']() {
                        const _0x5dbd64 = _0x4f8d3f;
                        var _0x326a3f;
                        super['Die'](), null === (_0x326a3f = this[_0x5dbd64(0x2a4)]) || void 0x0 === _0x326a3f || _0x326a3f['stop'](), this[_0x5dbd64(0x1438)] && this[_0x5dbd64(0x1438)]();
                    } ['DeSpawn']() {
                        const _0x2eeee8 = _0x4f8d3f;
                        var _0x3511af;
                        super[_0x2eeee8(0x14fb)](), null === (_0x3511af = this[_0x2eeee8(0x2a4)]) || void 0x0 === _0x3511af || _0x3511af[_0x2eeee8(0x1a34)]();
                    } ['Fire']() {
                        const _0x20a9dc = _0x4f8d3f;
                        this[_0x20a9dc(0x14a3)] || this['isDead'] || _0x5efba7[_0x20a9dc(0xd2c)]['Core'][_0x20a9dc(0x17c7)][_0x20a9dc(0xc4a)](this['x'], this['y'], this[_0x20a9dc(0x14e)]);
                    }
                }
                _0x43eb2f['default'] = _0x1ad2d7;
            };
