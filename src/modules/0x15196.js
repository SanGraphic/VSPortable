// Module 0x15196
// Args: _0x36a12b, _0x2e2863, _0x38c0b2

export default (_0x36a12b, _0x2e2863, _0x38c0b2) => {
                'use strict';
                const _0x3e220d = a0_0x6932;
                var _0x16395b = this && this['__importDefault'] || function(_0x398508) {
                    const _0x45aded = a0_0x6932;
                    return _0x398508 && _0x398508['__esModule'] ? _0x398508 : {
                        'default': _0x398508
                    };
                };
                Object['defineProperty'](_0x2e2863, '__esModule', {
                    'value': !0x0
                });
                const _0x503b73 = _0x16395b(_0x38c0b2(0x1fd7)),
                    _0x1dd8ce = _0x16395b(_0x38c0b2(0x5f07)),
                    _0x16a789 = _0x16395b(_0x38c0b2(0x1166a));
                class _0x3b903d extends _0x16a789['default'] {
                    constructor() {
                        const _0x37a639 = _0x3e220d;
                        super(...arguments), this[_0x37a639(0x351)] = null, this[_0x37a639(0x279)] = !0x1, this['canBreak'] = !0x1;
                    } ['Update'](_0x549ffb) {
                        const _0x3b46c7 = _0x3e220d;
                        this[_0x3b46c7(0x16c6)] = this['y'] - _0x1dd8ce[_0x3b46c7(0xd2c)][_0x3b46c7(0x1043)]['Player']['y'];
                    } ['OnRecycle']() {
                        const _0x4dcdb4 = _0x3e220d;
                        super['OnRecycle'](), this['isCullable'] = !0x1, this[_0x4dcdb4(0x7cb)] = 0x0, this[_0x4dcdb4(0xd9b)] = this['scene'][_0x4dcdb4(0x12a1)][_0x4dcdb4(0x18bd)]({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0x64
                        });
                    } ['GetDamaged'](_0x5e8ea0, _0x1381d9, _0x375dda, _0x3323c4) {
                        const _0x573348 = _0x3e220d;
                        this['isInvul'] || (this['canBreak'] && (super[_0x573348(0xe00)](), _0x1dd8ce['default'][_0x573348(0x1267)]['PlaySound'](_0x503b73['default']['Crystal12'], {
                            'volume': 1.5,
                            'detune': -0x258 * Math[_0x573348(0x9ad)]()
                        }), _0x1dd8ce[_0x573348(0xd2c)][_0x573348(0x1043)][_0x573348(0x69e)][_0x573348(0x35f)](), this['scene'][_0x573348(0x12a1)]['add']({
                            'targets': this['scene'][_0x573348(0x1793)]['main'][_0x573348(0x86c)],
                            'x': 0x2,
                            'duration': 0x10,
                            'yoyo': !0x0,
                            'repeat': 0x6,
                            'onStart': () => {
                                const _0x1e5e91 = _0x573348;
                                this[_0x1e5e91(0x6d2)][_0x1e5e91(0x1793)]['main'][_0x1e5e91(0x86c)]['x'] = -0x2;
                            },
                            'onComplete': () => {
                                const _0x51885f = _0x573348;
                                this['scene']['cameras']['main'][_0x51885f(0x188c)](0x0, 0x0);
                            }
                        }), this['owner'] && this['owner']['OnMaskBroken']()), super[_0x573348(0x1112)](_0x5e8ea0, _0x1381d9, _0x375dda, _0x3323c4));
                    } ['Die']() {} ['Disappear']() {} ['ScriptedDisappear']() {
                        const _0x5cd6ac = _0x3e220d;
                        super[_0x5cd6ac(0xe00)]();
                    } ['BreakOnNextAttack'](_0x1f6b42 = !0x0) {
                        this['canBreak'] = _0x1f6b42;
                    }
                }
                _0x2e2863['default'] = _0x3b903d;
            };
