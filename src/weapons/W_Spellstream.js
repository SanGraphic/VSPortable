// Module 0x7d8a
// Args: _0x4f47e2, _0xb9fad6, _0x8f9f34

export default (_0x4f47e2, _0xb9fad6, _0x8f9f34) => {
                'use strict';
                const _0x2a0261 = a0_0x6932;
                var _0x53e550 = this && this['__importDefault'] || function(_0x52dc0a) {
                    return _0x52dc0a && _0x52dc0a['__esModule'] ? _0x52dc0a : {
                        'default': _0x52dc0a
                    };
                };
                Object['defineProperty'](_0xb9fad6, '__esModule', {
                    'value': !0x0
                }), _0xb9fad6['W_Spellstream'] = void 0x0;
                const _0x192c09 = _0x53e550(_0x8f9f34(0xe49a)),
                    _0x18dae7 = _0x53e550(_0x8f9f34(0x5f07));
                class _0x3146f4 extends _0x192c09['default'] {
                    constructor(_0x5b578f) {
                        const _0x2f7983 = _0x2a0261;
                        super(_0x5b578f), this[_0x2f7983(0xa6b)] = 0x0, this['sourceIndex'] = 0x0, this['maxSources'] = 0x1, this['SetSources']([_0x18dae7[_0x2f7983(0xd2c)][_0x2f7983(0x1043)][_0x2f7983(0x10f6)]]);
                    } ['SetSources'](_0x3c80b7) {
                        const _0x545bd6 = _0x2a0261;
                        this['sources'] = _0x3c80b7, this['maxSources'] = _0x3c80b7[_0x545bd6(0xed9)];
                    } ['GetSource']() {
                        const _0x162710 = _0x2a0261;
                        return this['sourceIndex']++, this[_0x162710(0x162c)] >= this[_0x162710(0x1480)]['length'] && (this[_0x162710(0x162c)] = 0x0), this['sources'][this['sourceIndex']];
                    }
                    get['PPower']() {
                        const _0x2198e6 = _0x2a0261;
                        let _0x5a0916 = this['power'] * (1.25 * this[_0x2198e6(0x5f5)]);
                        return _0x18dae7['default'][_0x2198e6(0x1043)]['Player'][_0x2198e6(0x947)] ? Math[_0x2198e6(0x1084)](0xa, (_0x18dae7[_0x2198e6(0xd2c)]['Core'][_0x2198e6(0x1884)][_0x2198e6(0x18f8)] + _0x18dae7['default'][_0x2198e6(0x1043)][_0x2198e6(0x10f6)][_0x2198e6(0x31f)]) * _0x18dae7['default'][_0x2198e6(0x1043)][_0x2198e6(0x10f6)]['sineMight'][_0x2198e6(0xb81)]) * _0x5a0916 + _0x18dae7[_0x2198e6(0xd2c)][_0x2198e6(0x1043)][_0x2198e6(0x1884)]['bloodlineDamage'] : Math[_0x2198e6(0x1084)](0xa, _0x18dae7[_0x2198e6(0xd2c)][_0x2198e6(0x1043)]['Arcanas'][_0x2198e6(0x18f8)] + _0x18dae7[_0x2198e6(0xd2c)]['Core']['Player'][_0x2198e6(0x31f)]) * _0x5a0916 + _0x18dae7['default']['Core'][_0x2198e6(0x1884)][_0x2198e6(0x1117)];
                    } ['Fire']() {
                        const _0x37989d = _0x2a0261;
                        let _0x47a4e7 = this[_0x37989d(0xef0)](_0x18dae7['default'][_0x37989d(0x1043)][_0x37989d(0x10f6)], _0x18dae7[_0x37989d(0xd2c)]['Core']['Enemies']);
                        if (_0x47a4e7) {
                            let _0x41157f = this[_0x37989d(0x33b)](),
                                _0x36ef52 = _0x41157f['x'],
                                _0x32858f = _0x41157f['y'];
                            this[_0x37989d(0x18a7)] = _0x47a4e7, this[_0x37989d(0x970)](_0x36ef52, _0x32858f, 0x0, this[_0x37989d(0x18a7)]);
                        }
                        this['lastFiringInterval'] != this[_0x37989d(0x170c)] && (this[_0x37989d(0x162d)] = this['PInterval'], this[_0x37989d(0x839)]());
                    }
                }
                _0xb9fad6['W_Spellstream'] = _0x3146f4, _0xb9fad6['default'] = _0x3146f4;
            };
