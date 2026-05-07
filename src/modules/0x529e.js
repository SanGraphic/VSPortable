// Module 0x529e
// Args: _0x75a1b0, _0x30c0f8, _0x1ea88d

export default (_0x75a1b0, _0x30c0f8, _0x1ea88d) => {
                'use strict';
                const _0xbbe583 = a0_0x6932;
                var _0x136700 = this && this['__importDefault'] || function(_0x4045b8) {
                    return _0x4045b8 && _0x4045b8['__esModule'] ? _0x4045b8 : {
                        'default': _0x4045b8
                    };
                };
                Object['defineProperty'](_0x30c0f8, '__esModule', {
                    'value': !0x0
                });
                const _0x39f63e = _0x136700(_0x1ea88d(0x15abc)),
                    _0x39a8dc = _0x136700(_0x1ea88d(0x136b9)),
                    _0x3ab60c = _0x136700(_0x1ea88d(0x54e3)),
                    _0x6ef042 = _0x136700(_0x1ea88d(0x1166a));
                class _0x2f28f6 extends _0x6ef042['default'] {
                    constructor() {
                        const _0x433b00 = _0xbbe583;
                        super(...arguments), this[_0x433b00(0x14c7)] = 0x1, this[_0x433b00(0x5ef)] = 0x157c, this[_0x433b00(0x28e)] = 0x0;
                    } ['OnRecycle']() {
                        const _0x218dcf = _0xbbe583;
                        super[_0x218dcf(0x5ce)](), this[_0x218dcf(0x8a2)](0x0), this[_0x218dcf(0x16ef)] = !0x1, this['lifetime'] = 0x1, this[_0x218dcf(0x28e)] = 0x0;
                        let _0x2cfd5c = _0x39f63e[_0x218dcf(0xd2c)][this[_0x218dcf(0xe49)]][0x0];
                        this[_0x218dcf(0x31f)] = _0x2cfd5c[_0x218dcf(0x31f)], this[_0x218dcf(0x19b0)] = _0x2cfd5c[_0x218dcf(0x19b0)] ? _0x2cfd5c['tint'] : 0xffffff, this[_0x218dcf(0xd9b)] ? this[_0x218dcf(0xd9b)][_0x218dcf(0x1374)]() : this['OnEnterTween'] = this[_0x218dcf(0x6d2)][_0x218dcf(0x12a1)][_0x218dcf(0x18bd)]({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0x64
                        }), this['OnLifetimeTween'] ? this['OnLifetimeTween']['restart']() : this[_0x218dcf(0x15de)] = this[_0x218dcf(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'lifetime': 0x0,
                            'duration': 0x64,
                            'delay': this['duration'],
                            'onComplete': () => {
                                const _0x41d520 = _0x218dcf;
                                this[_0x41d520(0xe00)]();
                            }
                        }), this['setOrigin'](0.5);
                    } ['GetDamaged'](_0x4502e2 = 0x1, _0x53e790 = _0x39a8dc['default']['DEFAULT'], _0x470127 = 0x1, _0xcb7de6 = _0x3ab60c['default']['VOID']) {} ['DeSpawn']() {
                        const _0x3a8d3c = _0xbbe583;
                        var _0x2dc6da, _0x2c6eab, _0x2c8e83;
                        this[_0x3a8d3c(0x16ef)] || (this[_0x3a8d3c(0x16ef)] = !0x0, null === (_0x2dc6da = this['ScaleTween']) || void 0x0 === _0x2dc6da || _0x2dc6da[_0x3a8d3c(0x1a34)], null === (_0x2c6eab = this['OnEnterTween']) || void 0x0 === _0x2c6eab || _0x2c6eab[_0x3a8d3c(0x1a34)], null === (_0x2c8e83 = this[_0x3a8d3c(0x15de)]) || void 0x0 === _0x2c8e83 || _0x2c8e83[_0x3a8d3c(0x1a34)], super[_0x3a8d3c(0x14fb)]());
                    } ['DeathTween'](_0x52e8a8 = !0x1) {
                        const _0x34581a = _0xbbe583;
                        var _0x2bdeec, _0x42c176;
                        null === (_0x2bdeec = this['OnLifetimeTween']) || void 0x0 === _0x2bdeec || _0x2bdeec['stop'](), this['ScaleTween'] ? (null === (_0x42c176 = this['ScaleTween']) || void 0x0 === _0x42c176 || _0x42c176['stop'](), this[_0x34581a(0xd35)][_0x34581a(0x1374)]()) : this['ScaleTween'] = this[_0x34581a(0x6d2)][_0x34581a(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0x64,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['OnPlayerOverlap']() {
                        const _0x4ff63e = _0xbbe583;
                        var _0x4ab84a;
                        super[_0x4ff63e(0x97d)](), this[_0x4ff63e(0xdae)] || (null === (_0x4ab84a = this[_0x4ff63e(0x15de)]) || void 0x0 === _0x4ab84a || _0x4ab84a['stop'], this[_0x4ff63e(0xdae)] = !0x0, this[_0x4ff63e(0x2b8)]());
                    } ['Update'](_0x1440d6 = 0x0) {
                        const _0x423031 = _0xbbe583;
                        super['Update'](_0x1440d6), this[_0x423031(0x4d4)] = !0x1, this[_0x423031(0x28e)] += 0x1 * _0x1440d6, this[_0x423031(0x9b5)](this[_0x423031(0x28e)]);
                    } ['Disappear']() {
                        const _0x450f8b = _0xbbe583;
                        var _0x3db8d3;
                        this[_0x450f8b(0xdae)] || (null === (_0x3db8d3 = this['OnLifetimeTween']) || void 0x0 === _0x3db8d3 || _0x3db8d3['stop'], this['isDead'] = !0x0, this[_0x450f8b(0x2b8)]());
                    } ['Die']() {
                        const _0x450870 = _0xbbe583;
                        var _0x52f433;
                        this['isDead'] || (null === (_0x52f433 = this[_0x450870(0x15de)]) || void 0x0 === _0x52f433 || _0x52f433['stop'], this['isDead'] = !0x0, this[_0x450870(0x2b8)]());
                    }
                }
                _0x30c0f8['default'] = _0x2f28f6;
            };
