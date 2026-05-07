// Module 0x76a7
// Args: _0x2c9d0d, _0x24b106, _0x2e691e

export default (_0x2c9d0d, _0x24b106, _0x2e691e) => {
                'use strict';
                const _0x5e4505 = a0_0x6932;
                var _0x224873 = this && this['__importDefault'] || function(_0x2cb879) {
                    return _0x2cb879 && _0x2cb879['__esModule'] ? _0x2cb879 : {
                        'default': _0x2cb879
                    };
                };
                Object['defineProperty'](_0x24b106, '__esModule', {
                    'value': !0x0
                });
                const _0x1ee128 = _0x224873(_0x2e691e(0x15abc)),
                    _0x524162 = _0x224873(_0x2e691e(0x9bda)),
                    _0x42acfd = _0x224873(_0x2e691e(0x5103)),
                    _0x426ec0 = _0x224873(_0x2e691e(0x5f07)),
                    _0x1abbd3 = _0x224873(_0x2e691e(0x1166a));
                class _0x409142 extends _0x1abbd3['default'] {
                    constructor() {
                        const _0x30f3ad = _0x5e4505;
                        super(...arguments), this[_0x30f3ad(0x16b4)] = 0x7d0;
                    } ['OnRecycle']() {
                        const _0x4d3907 = _0x5e4505;
                        super[_0x4d3907(0x5ce)](), _0x42acfd['default']['EnemySpeed'] > _0x42acfd['default'][_0x4d3907(0xc01)] ? this[_0x4d3907(0x78e)] = 0x7d0 - 0x7d0 * (_0x42acfd['default'][_0x4d3907(0xc23)] - _0x42acfd[_0x4d3907(0xd2c)]['_baseEnemySpeed']) : this[_0x4d3907(0x78e)] = 0x7d0, this['scale'] = 0x0, this[_0x4d3907(0x7d7)] = 0x0;
                        let _0x94f0f0 = _0x1ee128[_0x4d3907(0xd2c)][this['enemyType']][0x0];
                        this[_0x4d3907(0x16b4)] = _0x94f0f0['fireDelay'] || 0x7d0, this['bulletType'] = _0x94f0f0[_0x4d3907(0x14e)] || _0x524162[_0x4d3907(0xd2c)][_0x4d3907(0x3b1)], this[_0x4d3907(0xd9b)] ? this[_0x4d3907(0xd9b)]['restart']() : this[_0x4d3907(0xd9b)] = this[_0x4d3907(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'scale': this[_0x4d3907(0x17ef)],
                            'speed': 0x0,
                            'duration': 0x12c
                        }), this['OnFireTimer'] ? this[_0x4d3907(0x2a4)][_0x4d3907(0x1374)]() : this[_0x4d3907(0x2a4)] = this[_0x4d3907(0x6d2)][_0x4d3907(0x12a1)]['add']({
                            'duration': this[_0x4d3907(0x16b4)],
                            'targets': this,
                            'firetime': 0x1,
                            'repeat': -0x1,
                            'onRepeat': () => {
                                const _0x1e39d6 = _0x4d3907;
                                this[_0x1e39d6(0x1754)]();
                            }
                        });
                    } ['Die']() {
                        const _0x5e1706 = _0x5e4505;
                        var _0x3f455d;
                        super[_0x5e1706(0x14f3)](), null === (_0x3f455d = this[_0x5e1706(0x2a4)]) || void 0x0 === _0x3f455d || _0x3f455d['stop']();
                    } ['DeSpawn']() {
                        const _0x499628 = _0x5e4505;
                        var _0x1c19bd;
                        super[_0x499628(0x14fb)](), null === (_0x1c19bd = this[_0x499628(0x2a4)]) || void 0x0 === _0x1c19bd || _0x1c19bd[_0x499628(0x1a34)]();
                    } ['Fire']() {
                        const _0x58c0b3 = _0x5e4505;
                        this[_0x58c0b3(0x14a3)] || this['isDead'] || _0x426ec0[_0x58c0b3(0xd2c)][_0x58c0b3(0x1043)]['Stage'][_0x58c0b3(0xc4a)](this['x'], this['y'], _0x524162[_0x58c0b3(0xd2c)]['BULLET_1']);
                    }
                }
                _0x24b106['default'] = _0x409142;
            };
