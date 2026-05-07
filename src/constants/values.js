// Module 0xdee7
// Args: _0x129780, _0x272f80, _0x45adb5

export default (_0x129780, _0x272f80, _0x45adb5) => {
                'use strict';
                const _0x568757 = a0_0x6932;
                var _0x4b6171 = this && this['__importDefault'] || function(_0x476ac1) {
                    const _0x559763 = a0_0x6932;
                    return _0x476ac1 && _0x476ac1['__esModule'] ? _0x476ac1 : {
                        'default': _0x476ac1
                    };
                };
                Object['defineProperty'](_0x272f80, '__esModule', {
                    'value': !0x0
                });
                const _0xcb7693 = _0x4b6171(_0x45adb5(0x5f07)),
                    _0x406c83 = _0x4b6171(_0x45adb5(0x166d5)),
                    _0x491277 = _0x4b6171(_0x45adb5(0xc42e)),
                    _0x14ce9e = _0x4b6171(_0x45adb5(0x1fd7)),
                    _0x42c32d = _0x4b6171(_0x45adb5(0x5103));
                class _0x207abd extends _0x406c83['default'] {
                    constructor(_0x21f205, _0x51744d, _0x5584f2, _0x35acd4 = _0x491277['default']['COIN']) {
                        const _0x2d9a56 = _0x568757;
                        super(_0x21f205, _0x51744d, _0x5584f2, _0x35acd4), this[_0x2d9a56(0x1138)] = {
                            'x': 0x0,
                            'y': 0x0
                        }, this[_0x2d9a56(0x915)] = 0x0, this['fever'] = !0x1, _0xcb7693[_0x2d9a56(0xd2c)]['Core']['scene']['add'][_0x2d9a56(0x1a88)](this), this['setScale'](_0x42c32d[_0x2d9a56(0xd2c)][_0x2d9a56(0x15db)]);
                    } ['Update']() {
                        const _0x1d3de4 = _0x568757;
                        super['Update'](), this[_0x1d3de4(0xb4a)](0x9 + this['y'] - _0xcb7693[_0x1d3de4(0xd2c)]['Core']['Player']['y']);
                    } ['GetTaken']() {
                        const _0x125dd8 = _0x568757;
                        this['disableGet'] || (_0xcb7693[_0x125dd8(0xd2c)][_0x125dd8(0x1043)][_0x125dd8(0x15c9)]['OnCoinPickup'](this), _0xcb7693[_0x125dd8(0xd2c)]['Core']['CoinPickedup'](this), _0xcb7693[_0x125dd8(0xd2c)]['Core'][_0x125dd8(0x14d8)]['AddCoins'](this['value']), _0xcb7693['default'][_0x125dd8(0x1043)][_0x125dd8(0x14d8)][_0x125dd8(0x10bb)] += 0x1, _0xcb7693['default'][_0x125dd8(0x1043)][_0x125dd8(0x1273)]['UpdateCoins'](), _0xcb7693[_0x125dd8(0xd2c)][_0x125dd8(0x1267)][_0x125dd8(0x7f6)](_0x14ce9e[_0x125dd8(0xd2c)]['Coin'], {
                            'volume': 0.5
                        }, 0x1, 0x1), super['GetTaken']());
                    } ['Bless'](_0x1c042a) {
                        const _0x35aafb = _0x568757;
                        super['Bless'](_0x1c042a), this[_0x35aafb(0xb81)] >= 0x64 ? this[_0x35aafb(0x381)]('MoneyBagColor.png') : this['value'] >= 0x19 ? this[_0x35aafb(0x381)]('MoneyBagGreen.png') : this['value'] > 0xa && this[_0x35aafb(0x381)]('MoneyBagRed.png');
                    }
                }
                _0x272f80['default'] = _0x207abd, _0x207abd['values'] = {};
            };
