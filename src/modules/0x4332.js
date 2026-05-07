// Module 0x4332
// Args: _0x1fde0b, _0x3dfa5e, _0x3ef4d3

export default (_0x1fde0b, _0x3dfa5e, _0x3ef4d3) => {
                'use strict';
                const _0x2a53d0 = a0_0x6932;
                var _0x26c099 = this && this['__importDefault'] || function(_0x55a253) {
                    const _0x452496 = _0x2a53d0;
                    return _0x55a253 && _0x55a253[_0x452496(0x16f1)] ? _0x55a253 : {
                        'default': _0x55a253
                    };
                };
                Object['defineProperty'](_0x3dfa5e, '__esModule', {
                    'value': !0x0
                });
                const _0x281400 = _0x26c099(_0x3ef4d3(0x15abc)),
                    _0x476510 = _0x26c099(_0x3ef4d3(0x5f07)),
                    _0x25dec0 = _0x26c099(_0x3ef4d3(0x1166a));
                class _0x5ed633 extends _0x25dec0['default'] {
                    constructor() {
                        const _0xd5e453 = _0x2a53d0;
                        super(...arguments), this[_0xd5e453(0x1838)] = 0x1, this['isPatrolling'] = !0x0, this['patrolDuration'] = 0x7d0;
                    } ['OnRecycle']() {
                        const _0x63c2f0 = _0x2a53d0;
                        super['OnRecycle'](), this[_0x63c2f0(0x1b1a)] = !0x0;
                        let _0x2ec24c = _0x281400[_0x63c2f0(0xd2c)][this[_0x63c2f0(0xe49)]][0x0];
                        this[_0x63c2f0(0x1b1c)] = _0x2ec24c['speed'], this['patrolDuration'] = _0x2ec24c[_0x63c2f0(0x1701)] ? _0x2ec24c['patrolDuration'] : 0x7d0, this['sineF'] = 0x1, this['scale'] = 0x0, this[_0x63c2f0(0xd9b)] ? (this['OnEnterTween'][_0x63c2f0(0x1374)](), this[_0x63c2f0(0x18e8)] && this['OnSineTween'][_0x63c2f0(0x1374)]()) : (this['OnEnterTween'] = this[_0x63c2f0(0x6d2)][_0x63c2f0(0x12a1)]['add']({
                            'targets': this,
                            'scale': this['scaleMul'],
                            'duration': 0x3e8
                        }), this[_0x63c2f0(0x18e8)] ? this[_0x63c2f0(0x18e8)]['restart']() : this[_0x63c2f0(0x18e8)] = this['scene']['tweens'][_0x63c2f0(0x18bd)]({
                            'delay': 0x64,
                            'targets': this,
                            'sineF': -0x1,
                            'duration': this[_0x63c2f0(0x1701)],
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }));
                    } ['setOwner'](_0x391502) {
                        const _0x2d6877 = _0x2a53d0;
                        super[_0x2d6877(0x462)](_0x391502), this[_0x2d6877(0x18a7)] = _0x391502;
                    } ['DeSpawn']() {
                        const _0x28c2e7 = _0x2a53d0;
                        var _0x5bdd64;
                        super[_0x28c2e7(0x14fb)](), null === (_0x5bdd64 = this[_0x28c2e7(0xd9b)]) || void 0x0 === _0x5bdd64 || _0x5bdd64['stop']();
                    } ['Update'](_0x41c06b) {
                        const _0x224546 = _0x2a53d0;
                        var _0x599c95, _0x2234cf;
                        this[_0x224546(0x1b1a)] ? (null === (_0x2234cf = null === (_0x599c95 = this['owner']) || void 0x0 === _0x599c95 ? void 0x0 : _0x599c95[_0x224546(0xcf9)]) || void 0x0 === _0x2234cf ? void 0x0 : _0x2234cf['enable']) ? (this[_0x224546(0x78e)] = this['_defaultSpeed'] * this['sineF'], super['Update'](_0x41c06b), this[_0x224546(0xb8d)](this[_0x224546(0x70d)]['x'] < 0x0)) : (this['speed'] = this[_0x224546(0x1b1c)], this[_0x224546(0x18a7)] = _0x476510['default'][_0x224546(0x1043)]['Player'], this[_0x224546(0x1b1a)] = !0x1) : super[_0x224546(0xa9f)](_0x41c06b);
                    }
                }
                _0x3dfa5e['default'] = _0x5ed633;
            };
