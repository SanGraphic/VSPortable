// Module 0x2037
// Args: _0x182050, _0x50ed16, _0x26fa26

export default (_0x182050, _0x50ed16, _0x26fa26) => {
                'use strict';
                const _0x4a3965 = a0_0x6932;
                var _0x2a357d = this && this['__importDefault'] || function(_0xe1df23) {
                    const _0x5871e0 = a0_0x6932;
                    return _0xe1df23 && _0xe1df23['__esModule'] ? _0xe1df23 : {
                        'default': _0xe1df23
                    };
                };
                Object['defineProperty'](_0x50ed16, '__esModule', {
                    'value': !0x0
                });
                const _0x2205e4 = _0x2a357d(_0x26fa26(0x3fe3)),
                    _0x5ba87b = _0x2a357d(_0x26fa26(0x54e3)),
                    _0x489397 = _0x2a357d(_0x26fa26(0x5f07)),
                    _0x24bfdc = _0x2a357d(_0x26fa26(0x1166a));
                class _0x3e2b60 extends _0x24bfdc['default'] {
                    constructor() {
                        super(...arguments), this['fireDelay'] = 0x7d0, this['isStatic'] = !0x0;
                    } ['OnRecycle']() {
                        const _0x4eb24f = _0x4a3965;
                        super[_0x4eb24f(0x5ce)](), this[_0x4eb24f(0x78e)] = 0x0, this[_0x4eb24f(0x7cb)] = 0x0, this[_0x4eb24f(0xcf9)]['immovable'] = !0x1, this[_0x4eb24f(0x4d4)] = Math['random']() >= 0.5, _0x489397['default'][_0x4eb24f(0x1043)][_0x4eb24f(0x14d8)][_0x4eb24f(0x1a93)] ? (_0x489397[_0x4eb24f(0xd2c)][_0x4eb24f(0x1043)][_0x4eb24f(0x14d8)]['VisuallyInvertStages'] ? (this[_0x4eb24f(0x9c0)] = !0x0, this[_0x4eb24f(0xf8e)](0.5, 0x0)) : (this[_0x4eb24f(0x9c0)] = !0x1, this[_0x4eb24f(0xf8e)](0.5, 0x1)), this[_0x4eb24f(0x1454)] = 0xff88ff, this['setTint'](this['saveTint'])) : (this[_0x4eb24f(0x9c0)] = !0x1, this['setOrigin'](0.5, 0x1), this['saveTint'] = 0xffffff), this[_0x4eb24f(0xd9b)] ? this['OnEnterTween']['restart']() : this['OnEnterTween'] = this['scene'][_0x4eb24f(0x12a1)][_0x4eb24f(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x4eb24f(0x17ef)],
                            'speed': 0x0,
                            'duration': 0x12c,
                            'onComplete': () => {
                                const _0x1a1bbe = _0x4eb24f;
                                this[_0x1a1bbe(0xcf9)][_0x1a1bbe(0x4de)] = !0x0, _0x489397[_0x1a1bbe(0xd2c)][_0x1a1bbe(0x1043)]['EnemyGroup']['remove'](this, !0x1);
                            }
                        });
                    } ['Die']() {
                        const _0x1a4195 = _0x4a3965;
                        super[_0x1a4195(0x14f3)](), this['body']['enable'] = !0x1;
                    } ['Update'](_0x4bf12b = 0x0) {
                        const _0x30f33b = _0x4a3965;
                        this['isDead'] || (this['depth'] = this['y'] - _0x489397['default']['Core'][_0x30f33b(0x10f6)]['y'], this[_0x30f33b(0x14a3)] || this[_0x30f33b(0x9b5)](_0x24bfdc[_0x30f33b(0xd2c)][_0x30f33b(0x1404)][this['moveTweenIndex']][_0x30f33b(0xd96)]));
                    } ['GetDamaged'](_0x32e72c, _0x1377cd, _0x5db2b1, _0x4f5de1) {
                        const _0x4aa7fb = _0x4a3965;
                        if (_0x4f5de1 !== _0x5ba87b[_0x4aa7fb(0xd2c)]['FLOWER']) super[_0x4aa7fb(0x1112)](_0x32e72c, _0x1377cd, _0x5db2b1, _0x4f5de1);
                        else {
                            if (this['hp'] += _0x32e72c, _0x489397[_0x4aa7fb(0xd2c)]['Core'][_0x4aa7fb(0x10f6)][_0x4aa7fb(0x7ba)](0.005 * _0x489397[_0x4aa7fb(0xd2c)][_0x4aa7fb(0x1043)]['Player'][_0x4aa7fb(0x5e3)]), _0x489397[_0x4aa7fb(0xd2c)][_0x4aa7fb(0x1043)]['ShowRecoveryAt'](this['x'], this['y'], _0x32e72c), _0x489397['default']['Core'][_0x4aa7fb(0x17c7)][_0x4aa7fb(0x4ee)] === _0x2205e4[_0x4aa7fb(0xd2c)][_0x4aa7fb(0x16f2)]) {
                                let _0x3cfc1b = _0x489397['default']['Core'][_0x4aa7fb(0x17c7)][_0x4aa7fb(0x12ed)];
                                _0x3cfc1b && _0x3cfc1b[_0x4aa7fb(0x1ae0)](_0x32e72c);
                            }
                        }
                    }
                }
                _0x50ed16['default'] = _0x3e2b60;
            };
