// Module 0x7784
// Args: _0x1d5fd6, _0x240049, _0xac2752

export default (_0x1d5fd6, _0x240049, _0xac2752) => {
                'use strict';
                const _0xbf9c09 = a0_0x6932;
                var _0x55b2b8 = this && this['__importDefault'] || function(_0x5e3246) {
                    const _0x24593f = _0xbf9c09;
                    return _0x5e3246 && _0x5e3246[_0x24593f(0x16f1)] ? _0x5e3246 : {
                        'default': _0x5e3246
                    };
                };
                Object['defineProperty'](_0x240049, '__esModule', {
                    'value': !0x0
                }), _0x240049['B_Laurel'] = void 0x0;
                const _0x38a47c = _0x55b2b8(_0xac2752(0xa14d)),
                    _0x89968 = _0x55b2b8(_0xac2752(0x5f07)),
                    _0x142e26 = _0x55b2b8(_0xac2752(0x5103));
                class _0x608e5c extends _0x38a47c['default'] {
                    constructor(_0xd078ee, _0x14c954, _0x90a1f5, _0x5dc1d3, _0x1be6d9) {
                        const _0xd91a66 = _0xbf9c09;
                        super(_0xd078ee, _0x14c954, _0x90a1f5, 'vfx', 'HitStar2.png', _0x5dc1d3, _0x1be6d9), this[_0xd91a66(0x161a)] = 0x10, this['hasThorns'] = !0x1, this['copyPosition'](_0x89968['default'][_0xd91a66(0x1043)][_0xd91a66(0x10f6)]), this[_0xd91a66(0x788)] = _0x89968[_0xd91a66(0xd2c)][_0xd91a66(0x1043)][_0xd91a66(0x6d2)][_0xd91a66(0x18bd)]['tween']({
                            'targets': this,
                            'angle': 0x168,
                            'loop': !0x0,
                            'duration': 0x320,
                            'ease': 'Linear',
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x3cd93f = _0xbf9c09;
                        super[_0x3cd93f(0x5ce)](), this[_0x3cd93f(0x788)]['restart'](), this['body'][_0x3cd93f(0xdf6)](this['radius']), this['setScale'](1.35 * _0x142e26['default']['PixelScale']), this['setVisible'](!0x0), this[_0x3cd93f(0xf01)](_0x89968[_0x3cd93f(0xd2c)]['Core'][_0x3cd93f(0x10f6)]), _0x89968[_0x3cd93f(0xd2c)]['Core']['scene'][_0x3cd93f(0x915)][_0x3cd93f(0x17fb)](this[_0x3cd93f(0x12a3)]), this[_0x3cd93f(0x12a3)] = _0x89968[_0x3cd93f(0xd2c)][_0x3cd93f(0x1043)]['scene'][_0x3cd93f(0x915)]['addEvent']({
                            'delay': this[_0x3cd93f(0x4a1)][_0x3cd93f(0x170c)] + 0x1f4,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x19a019 = _0x3cd93f;
                                _0x89968['default']['Core'][_0x19a019(0x6d2)]['time'][_0x19a019(0x17fb)](this[_0x19a019(0x12a3)]), this[_0x19a019(0x14fb)]();
                            }
                        }), this[_0x3cd93f(0x12a3)][_0x3cd93f(0x226)] = 'L Expire';
                    } ['Update']() {
                        const _0x257eb8 = _0xbf9c09;
                        this['copyPosition'](_0x89968['default']['Core'][_0x257eb8(0x10f6)]), this['y'] -= 0x10, this['setDepth'](0xa + _0x89968[_0x257eb8(0xd2c)]['Core'][_0x257eb8(0x10f6)]['depth'] - 0.5 * _0x89968[_0x257eb8(0xd2c)]['Core']['scene'][_0x257eb8(0x12f9)][_0x257eb8(0x140e)]);
                    }
                }
                _0x240049['B_Laurel'] = _0x608e5c, _0x240049['default'] = _0x608e5c;
            };
