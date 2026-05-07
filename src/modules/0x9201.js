// Module 0x9201
// Args: _0xef91ab, _0x259c58, _0x48ebb4

export default (_0xef91ab, _0x259c58, _0x48ebb4) => {
                'use strict';
                const _0x496847 = a0_0x6932;
                var _0x598df5 = this && this['__importDefault'] || function(_0x17c01c) {
                    const _0x1350e1 = _0x496847;
                    return _0x17c01c && _0x17c01c[_0x1350e1(0x16f1)] ? _0x17c01c : {
                        'default': _0x17c01c
                    };
                };
                Object['defineProperty'](_0x259c58, '__esModule', {
                    'value': !0x0
                });
                const _0x1d4372 = _0x598df5(_0x48ebb4(0x5103)),
                    _0xb06819 = _0x598df5(_0x48ebb4(0x5f07)),
                    _0xc5d2a5 = _0x598df5(_0x48ebb4(0x4d66)),
                    _0x47ff58 = _0x598df5(_0x48ebb4(0x15abc));
                class _0x330156 extends _0xc5d2a5['default'] {
                    constructor() {
                        const _0x73a1ac = _0x496847;
                        super(...arguments), this['ShieldTime'] = 0xafc8, this[_0x73a1ac(0x338)] = 0.6;
                    } ['Die']() {
                        const _0x46752a = _0x496847;
                        if (this['isDead']) return;
                        this[_0x46752a(0xdae)] = !0x0;
                        const _0x2a7944 = -this[_0x46752a(0xf3d)];
                        let _0x2681f9 = _0x1d4372[_0x46752a(0xd2c)][_0x46752a(0xc23)] * this['speed'] * _0x2a7944 * this['slow'];
                        this[_0x46752a(0x19c8)](_0x2681f9 * this[_0x46752a(0x70d)]['x'], _0x2681f9 * this['_currentDirection']['y']), _0xb06819['default'][_0x46752a(0x1043)][_0x46752a(0x6d2)]['time'][_0x46752a(0x17fb)](this['_blinkTimeout']);
                        let _0x244b9a = Math[_0x46752a(0xe07)]((Math['random']() + 0.5) * this['xp']);
                        _0x244b9a > 0x0 && _0xb06819[_0x46752a(0xd2c)]['Core'][_0x46752a(0x665)](this['x'], this['y'], _0x244b9a), this[_0x46752a(0xbfa)] && (_0xb06819[_0x46752a(0xd2c)][_0x46752a(0x1043)][_0x46752a(0x17c7)][_0x46752a(0xab4)](this[_0x46752a(0xbfa)]), _0xb06819[_0x46752a(0xd2c)]['Core']['MakeTreasure'](this['x'], this['y'], this['treasure']), this[_0x46752a(0xbfa)] = null), _0xb06819[_0x46752a(0xd2c)]['Core'][_0x46752a(0x15c9)][_0x46752a(0x2c8)] && _0xb06819['default']['Core']['GoldFever'][_0x46752a(0x8f9)](this), _0x47ff58[_0x46752a(0xd2c)][this['enemyType']][0x0]['killedAmount'] += 0x1, _0xb06819['default'][_0x46752a(0x1043)][_0x46752a(0x14d8)][_0x46752a(0x1347)] += 0x1, _0xb06819[_0x46752a(0xd2c)]['Core'][_0x46752a(0x1273)]['UpdateKills'](), this[_0x46752a(0x183e)]['stop'](), this['DeathScream'](), this['SpecialDeathAnimation']();
                    } ['SpecialDeathAnimation']() {
                        const _0x151d08 = _0x496847;
                        this[_0x151d08(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'scaleX': 0x0,
                            'scaleY': 0x5,
                            'duration': 0x7d0,
                            'ease': 'Bounce.easeInOut'
                        });
                    }
                }
                _0x259c58['default'] = _0x330156;
            };
