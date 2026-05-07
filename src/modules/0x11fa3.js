// Module 0x11fa3
// Args: _0x54b0c8, _0x1e3bf5, _0x335796

export default (_0x54b0c8, _0x1e3bf5, _0x335796) => {
                'use strict';
                const _0x36536a = a0_0x6932;
                var _0x1ada98 = this && this['__importDefault'] || function(_0x53f152) {
                    return _0x53f152 && _0x53f152['__esModule'] ? _0x53f152 : {
                        'default': _0x53f152
                    };
                };
                Object['defineProperty'](_0x1e3bf5, '__esModule', {
                    'value': !0x0
                }), _0x1e3bf5['W_Laurel'] = void 0x0;
                const _0x243a83 = _0x1ada98(_0x335796(0x3107)),
                    _0x4143f3 = _0x1ada98(_0x335796(0x5103)),
                    _0x4d3f49 = _0x1ada98(_0x335796(0x5f07)),
                    _0xd888d6 = _0x1ada98(_0x335796(0xe49a));
                class _0x42c982 extends _0xd888d6['default'] {
                    constructor(_0x43f71b, _0x49078e = !0x1) {
                        const _0x1ac483 = _0x36536a;
                        super(_0x43f71b), this['maxCharges'] = 0x3, this[_0x1ac483(0xef2)] = !0x1, this['hasThorns'] = _0x49078e, this['image'] = _0x4d3f49['default']['Core']['scene'][_0x1ac483(0x18bd)]['image'](0x0, 0x0, 'vfx', 'Shockwave2.png')['setAlpha'](0.3)[_0x1ac483(0x8a2)](1.25 * _0x4143f3[_0x1ac483(0xd2c)][_0x1ac483(0x15db)])['copyPosition'](_0x4d3f49['default']['Core']['Player'])['setVisible'](!0x1), this[_0x1ac483(0x11d1)] = _0x4d3f49['default']['Core'][_0x1ac483(0x6d2)]['add']['tween']({
                            'targets': this[_0x1ac483(0x568)],
                            'alpha': 0.6,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': 0x7d0,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this['imageTween2'] = _0x4d3f49['default']['Core'][_0x1ac483(0x6d2)][_0x1ac483(0x18bd)][_0x1ac483(0x99a)]({
                            'targets': this['image'],
                            'angle': 0x168,
                            'loop': !0x0,
                            'duration': 0x2ee0,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x1ac483(0x465)] = this['CheckColor'][_0x1ac483(0xf7e)](this), _0x4d3f49['default']['Core']['scene'][_0x1ac483(0xdc4)]['addListener']('Player_LostShield', this['colorEvent']);
                    }
                    get['PAmount']() {
                        return 0x1;
                    } ['OnStart']() {
                        const _0x1c4408 = _0x36536a;
                        super[_0x1c4408(0xec7)](), _0x4d3f49[_0x1c4408(0xd2c)]['Core'][_0x1c4408(0x6d2)][_0x1c4408(0x915)]['addEvent']({
                            'delay': 0x1,
                            'loop': !0x1,
                            'callback': this[_0x1c4408(0x1754)]['bind'](this)
                        });
                    } ['Fire']() {
                        const _0x35564f = _0x36536a;
                        if (_0x4d3f49[_0x35564f(0xd2c)][_0x35564f(0x1043)]['Player']['shields'] < this['charges'] && _0x4d3f49[_0x35564f(0xd2c)]['Core'][_0x35564f(0x10f6)][_0x35564f(0x17bc)] < this[_0x35564f(0x556)] && (_0x4d3f49[_0x35564f(0xd2c)][_0x35564f(0x1043)][_0x35564f(0x10f6)][_0x35564f(0x17bc)] += 0x1), this[_0x35564f(0x1247)](), _0x4d3f49['default']['Core']['Arcanas']['hasAstronomia'] && _0x4d3f49[_0x35564f(0xd2c)]['Core'][_0x35564f(0x1884)]['TriggerAstronomia'](this), this[_0x35564f(0xef2)]) return super[_0x35564f(0x1754)]();
                        this[_0x35564f(0x162d)] != this['PInterval'] && (this['lastFiringInterval'] = this['PInterval'], this[_0x35564f(0x839)]());
                    } ['CheckColor']() {
                        const _0x2ad227 = _0x36536a;
                        switch (this['image'][_0x2ad227(0x183f)](!0x0), _0x4d3f49['default']['Core'][_0x2ad227(0x10f6)]['shields']) {
                            default:
                            case 0x0:
                                this[_0x2ad227(0x568)][_0x2ad227(0x183f)](!0x1);
                                break;
                            case 0x1:
                                this['image']['setTint'](0x8888ff);
                                break;
                            case 0x2:
                                this[_0x2ad227(0x568)]['setTint'](0x88ff88);
                                break;
                            case 0x3:
                                this['image']['setTint'](0xffff00);
                        }
                    } ['Update'](_0x364ab1) {
                        const _0x2bcf44 = _0x36536a;
                        super[_0x2bcf44(0xa9f)](_0x364ab1), this[_0x2bcf44(0x568)][_0x2bcf44(0xf01)](_0x4d3f49['default'][_0x2bcf44(0x1043)]['Player']), this['image']['y'] -= 0x10, this[_0x2bcf44(0x568)][_0x2bcf44(0xb4a)](_0x4d3f49['default'][_0x2bcf44(0x1043)]['Player']['depth'] - 0.5 * _0x4d3f49['default'][_0x2bcf44(0x1043)]['scene'][_0x2bcf44(0x12f9)][_0x2bcf44(0x140e)]);
                    } ['CleanUp']() {
                        const _0xd8491c = _0x36536a;
                        super['CleanUp'](), this[_0xd8491c(0x568)]['setVisible'](!0x1), this[_0xd8491c(0x568)][_0xd8491c(0x111e)](!0x1), this[_0xd8491c(0x568)][_0xd8491c(0x16ca)](), this[_0xd8491c(0x11d1)]['stop'](), this['imageTween2'][_0xd8491c(0x1a34)](), _0x4d3f49['default'][_0xd8491c(0x1043)][_0xd8491c(0x6d2)]['events'][_0xd8491c(0x1ab3)]('Player_LostShield', this['colorEvent']);
                    } ['LevelUp']() {
                        const _0x212d3f = _0x36536a;
                        super[_0x212d3f(0x2ab)]();
                        let _0x606162 = _0x243a83['default'][this['bulletType']][this['level'] - 0x1];
                        return !(!_0x606162 || (_0x606162[_0x212d3f(0xf59)] && (_0x4d3f49['default']['Core'][_0x212d3f(0x10f6)][_0x212d3f(0xf59)] += _0x606162['shieldInvulTime']), void 0x0 === _0x606162));
                    }
                }
                _0x1e3bf5['W_Laurel'] = _0x42c982, _0x1e3bf5['default'] = _0x42c982;
            };
