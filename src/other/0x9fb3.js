// Module 0x9fb3
// Args: _0x29ca45, _0x69ac94, _0x15bd66

export default (_0x29ca45, _0x69ac94, _0x15bd66) => {
                'use strict';
                const _0x161d91 = a0_0x6932;
                var _0x5e5a5c = this && this['__importDefault'] || function(_0x308e01) {
                    return _0x308e01 && _0x308e01['__esModule'] ? _0x308e01 : {
                        'default': _0x308e01
                    };
                };
                Object['defineProperty'](_0x69ac94, '__esModule', {
                    'value': !0x0
                });
                const _0x112538 = _0x5e5a5c(_0x15bd66(0x1fd7)),
                    _0x3e3f92 = _0x5e5a5c(_0x15bd66(0x5f07)),
                    _0xaa5fce = _0x5e5a5c(_0x15bd66(0x1166a));
                class _0x3d656e extends _0xaa5fce['default'] {
                    constructor() {
                        const _0x34ce5e = _0x161d91;
                        super(...arguments), this['selfDuration'] = 0x7530, this[_0x34ce5e(0x121c)] = 0x0, this['invulDelay'] = 0x1f4, this[_0x34ce5e(0x1832)] = 0x0, this['maxHits'] = 0x1;
                    } ['OnRecycle']() {
                        const _0x187633 = _0x161d91;
                        var _0x5e3a6a;
                        super['OnRecycle'](), this[_0x187633(0x4d4)] = !0x1, this[_0x187633(0x1832)] = 0x0, this[_0x187633(0x279)] = !0x1, this[_0x187633(0x177d)] = !0x0, this[_0x187633(0x78e)] = 0x0, this[_0x187633(0x7cb)] = 0x0, this['maxHits'] = this['maxHp'], null === (_0x5e3a6a = this['OnEnterTween']) || void 0x0 === _0x5e3a6a || _0x5e3a6a['stop'](), this[_0x187633(0xd9b)] = this['scene']['tweens'][_0x187633(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x187633(0x17ef)],
                            'speed': 0x0,
                            'duration': 0x12c
                        }), _0x3e3f92[_0x187633(0xd2c)][_0x187633(0x1043)][_0x187633(0x14d8)]['SelectedInverse'] && _0x3e3f92['default'][_0x187633(0x1043)][_0x187633(0x14d8)][_0x187633(0x64a)] ? (this[_0x187633(0x9c0)] = !0x0, this[_0x187633(0xf8e)](0.5, 0x0)) : (this[_0x187633(0x9c0)] = !0x1, this[_0x187633(0xf8e)](0.5, 0x1));
                    } ['ConditionalUpdate'](_0x3ced7a) {
                        const _0x563b22 = _0x161d91;
                        this['angle'] = 0x0, this[_0x563b22(0xdae)] || (this[_0x563b22(0x16c6)] = this['y'] - _0x3e3f92[_0x563b22(0xd2c)][_0x563b22(0x1043)][_0x563b22(0x10f6)]['y'], this['IsTimeStopped']);
                    } ['Update'](_0xc85476 = 0x0) {
                        const _0x14872c = _0x161d91;
                        this[_0x14872c(0xd96)] = 0x0, this[_0x14872c(0xdae)] || (this[_0x14872c(0x16c6)] = this['y'] - _0x3e3f92[_0x14872c(0xd2c)][_0x14872c(0x1043)]['Player']['y'], this[_0x14872c(0x14a3)]);
                    } ['Die']() {
                        const _0x4aee96 = _0x161d91;
                        super[_0x4aee96(0x14f3)](), this['body'][_0x4aee96(0x543)] = !0x1;
                    } ['GetDamaged'](_0x3ad90c, _0x408d87, _0x143884, _0x429e30) {
                        const _0x535c87 = _0x161d91;
                        this[_0x535c87(0xdae)] || this[_0x535c87(0x279)] || (this['isInvul'] = !0x0, this[_0x535c87(0x1832)]++, this[_0x535c87(0x1304)](), this['scene']['time']['addEvent']({
                            'delay': this['invulDelay'],
                            'callback': () => {
                                const _0x1c6429 = _0x535c87;
                                this[_0x1c6429(0x279)] = !0x1;
                            }
                        }), this[_0x535c87(0x404)](_0x408d87, !0x1));
                    } ['ChangeFrame']() {
                        const _0x4fe973 = _0x161d91;
                        this[_0x4fe973(0x1832)] >= this['maxHits'] ? (_0x3e3f92[_0x4fe973(0xd2c)]['Sound']['PlaySound'](_0x112538['default'][_0x4fe973(0x1810)], {
                            'volume': 0.3,
                            'detune': -0x258 * Math[_0x4fe973(0x9ad)]() - 0x1f4
                        }, 0x64, 0x4), this['Die']()) : _0x3e3f92['default']['Sound']['PlaySound'](_0x112538[_0x4fe973(0xd2c)]['Bumper2'], {
                            'volume': 0.2,
                            'detune': 0x64 * this['hitsTaken'] - 0x1f4
                        }, 0x64, 0x4);
                    }
                }
                _0x69ac94['default'] = _0x3d656e;
            };
