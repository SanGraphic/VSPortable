// Module 0x6313
// Args: _0x380885, _0x510808, _0x8b8b27

export default (_0x380885, _0x510808, _0x8b8b27) => {
                'use strict';
                const _0x31628e = a0_0x6932;
                var _0x4497b5 = this && this['__importDefault'] || function(_0x29c258) {
                    const _0x3e424e = _0x31628e;
                    return _0x29c258 && _0x29c258[_0x3e424e(0x16f1)] ? _0x29c258 : {
                        'default': _0x29c258
                    };
                };
                Object['defineProperty'](_0x510808, '__esModule', {
                    'value': !0x0
                });
                const _0x5f4f05 = _0x4497b5(_0x8b8b27(0x1fd7)),
                    _0x23ad6d = _0x4497b5(_0x8b8b27(0x5f07)),
                    _0x145123 = _0x4497b5(_0x8b8b27(0xbd26));
                class _0x1086cf extends _0x145123['default'] {
                    constructor(_0x333b2c, _0x12e508, _0x5520c2, _0x95220f) {
                        super(_0x333b2c, _0x12e508, _0x5520c2, _0x95220f), this['availableFrames'] = ['diamondBlue_i01.png', 'diamondGreen_i01.png', 'diamondYellow_i01.png', 'diamondPink_i01.png', 'diamondNeutral_i01.png'], this['invulDelay'] = 0x15e;
                    } ['Update'](_0x1f74a6 = 0x0) {
                        super['Update'](_0x1f74a6), this['angle'] += 0.01 * _0x1f74a6;
                    } ['OnRecycle']() {
                        const _0x49c612 = _0x31628e;
                        super['OnRecycle'](), this['hitsTaken'] = 0x0, this[_0x49c612(0x279)] = !0x1, this[_0x49c612(0x177d)] = !0x1, this[_0x49c612(0x183e)][_0x49c612(0x1a34)](), this[_0x49c612(0x381)]('diamondBlue_i01.png'), this[_0x49c612(0x6d2)][_0x49c612(0x915)][_0x49c612(0x17fb)](this['selfTimer']), this['selfTimer'] = this[_0x49c612(0x6d2)][_0x49c612(0x915)]['addEvent']({
                            'delay': 0x2710,
                            'callback': () => {
                                const _0x16d982 = _0x49c612;
                                this[_0x16d982(0x177d)] = !0x0, this[_0x16d982(0xe00)]();
                            }
                        });
                    } ['GetDamaged'](_0x14a691, _0x1fafc0, _0x114c07, _0x3784bc) {
                        const _0x5e17df = _0x31628e;
                        this['isDead'] || this[_0x5e17df(0x279)] || (this[_0x5e17df(0x279)] = !0x0, this[_0x5e17df(0x1832)]++, this['ChangeFrame'](), this['initialVelocity']['y'] = -0xc8, this[_0x5e17df(0x6d2)][_0x5e17df(0x915)]['addEvent']({
                            'delay': this['invulDelay'],
                            'callback': () => {
                                this['isInvul'] = !0x1;
                            }
                        }), this['OnGetDamaged'](_0x1fafc0, !0x1));
                    } ['ChangeFrame']() {
                        const _0x218cc0 = _0x31628e;
                        this[_0x218cc0(0x183e)]['stop'](), this['hitsTaken'] >= this['availableFrames']['length'] - 0x1 ? (_0x23ad6d[_0x218cc0(0xd2c)]['Sound']['PlaySound'](_0x5f4f05[_0x218cc0(0xd2c)]['Crystal12'], {
                            'volume': 0.7,
                            'detune': -0x258 * Math[_0x218cc0(0x9ad)]()
                        }), this['Die']()) : (_0x23ad6d[_0x218cc0(0xd2c)]['Sound'][_0x218cc0(0x7f6)](_0x5f4f05['default'][_0x218cc0(0xbc6)], {
                            'volume': 0.5,
                            'detune': 0x64 * this[_0x218cc0(0x1832)]
                        }, 0x64, 0x4), this['setFrame'](this['availableFrames'][this[_0x218cc0(0x1832)]]));
                    } ['Die']() {
                        const _0x187e59 = _0x31628e;
                        _0x23ad6d['default']['Core'][_0x187e59(0xccb)](this['x'], this['y'], _0x23ad6d[_0x187e59(0xd2c)][_0x187e59(0x1043)]['LootManager'][_0x187e59(0xa34)]()), super[_0x187e59(0x14f3)]();
                    }
                }
                _0x510808['default'] = _0x1086cf;
            };
