// Module 0x115f3
// Args: _0x4c653a, _0x33c2ac, _0x5f2ded

export default (_0x4c653a, _0x33c2ac, _0x5f2ded) => {
                'use strict';
                const _0xb5e20 = a0_0x6932;
                var _0x3acbde = this && this['__importDefault'] || function(_0x4f47c2) {
                    return _0x4f47c2 && _0x4f47c2['__esModule'] ? _0x4f47c2 : {
                        'default': _0x4f47c2
                    };
                };
                Object['defineProperty'](_0x33c2ac, '__esModule', {
                    'value': !0x0
                });
                const _0x26a38b = _0x3acbde(_0x5f2ded(0x15abc)),
                    _0xece869 = _0x3acbde(_0x5f2ded(0x9bda)),
                    _0x6605dd = _0x3acbde(_0x5f2ded(0x5f07)),
                    _0x5f027d = _0x3acbde(_0x5f2ded(0x1166a));
                class _0x12a107 extends _0x5f027d['default'] {
                    constructor() {
                        const _0x3c502c = _0xb5e20;
                        super(...arguments), this[_0x3c502c(0x1838)] = 0x1, this[_0x3c502c(0x657)] = !0x1, this[_0x3c502c(0xe89)] = 0x0;
                    } ['OnRecycle']() {
                        const _0x1efa84 = _0xb5e20;
                        super[_0x1efa84(0x5ce)](), this[_0x1efa84(0x1b1c)] = _0x26a38b[_0x1efa84(0xd2c)][this[_0x1efa84(0xe49)]][0x0]['speed'], this[_0x1efa84(0x1838)] = 0x1, this[_0x1efa84(0x177d)] = !0x1, this[_0x1efa84(0x187a)] = !0x1, this[_0x1efa84(0xe71)] = 0.9, this[_0x1efa84(0xe89)] = 0x0, this[_0x1efa84(0x18e8)] ? this['OnSineTween']['restart']() : this[_0x1efa84(0x18e8)] = this[_0x1efa84(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'sineF': 0.1,
                            'alpha': 0.8,
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }), this['firetime'] = 0x0;
                        let _0x5e10ba = _0x26a38b['default'][this[_0x1efa84(0xe49)]][0x0];
                        this[_0x1efa84(0x16b4)] = _0x5e10ba[_0x1efa84(0x16b4)] || 0x7d0, this[_0x1efa84(0x14e)] = _0x5e10ba['bulletType'] || _0xece869[_0x1efa84(0xd2c)][_0x1efa84(0x14f8)], this['OnFireTimer'] ? this['OnFireTimer'][_0x1efa84(0x1374)]() : this[_0x1efa84(0x2a4)] = this[_0x1efa84(0x6d2)]['tweens']['add']({
                            'duration': this[_0x1efa84(0x16b4)],
                            'targets': this,
                            'firetime': 0x1,
                            'repeat': -0x1,
                            'onRepeat': () => {
                                this['Fire']();
                            }
                        });
                    } ['Disappear']() {
                        const _0x3cdea8 = _0xb5e20;
                        var _0x481249;
                        null === (_0x481249 = this['OnSineTween']) || void 0x0 === _0x481249 || _0x481249[_0x3cdea8(0x1a34)](), this[_0x3cdea8(0x1838)] = -0x2, this[_0x3cdea8(0x177d)] = !0x0, this[_0x3cdea8(0x187a)] = !0x1, this[_0x3cdea8(0x6d2)][_0x3cdea8(0x12a1)][_0x3cdea8(0x18bd)]({
                            'targets': this,
                            'sineF': -0xa,
                            'duration': 0x7d0
                        });
                    } ['Die']() {
                        const _0x241477 = _0xb5e20;
                        var _0x536b84;
                        super[_0x241477(0x14f3)](), null === (_0x536b84 = this['OnFireTimer']) || void 0x0 === _0x536b84 || _0x536b84['stop'](), this['onDefeat'] && this[_0x241477(0x1438)]();
                    } ['DeSpawn']() {
                        const _0x207890 = _0xb5e20;
                        var _0x4dc95e;
                        super[_0x207890(0x14fb)](), null === (_0x4dc95e = this[_0x207890(0x2a4)]) || void 0x0 === _0x4dc95e || _0x4dc95e[_0x207890(0x1a34)]();
                    } ['Fire']() {
                        const _0x2b33bb = _0xb5e20;
                        this[_0x2b33bb(0x14a3)] || this['isDead'] || _0x6605dd['default'][_0x2b33bb(0x1043)][_0x2b33bb(0x17c7)][_0x2b33bb(0xc4a)](this['x'], this['y'], this[_0x2b33bb(0x14e)]);
                    }
                }
                _0x33c2ac['default'] = _0x12a107;
            };
