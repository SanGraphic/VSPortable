// Module 0xec7f
// Args: _0x247e2f, _0xbdaedb, _0x23e35b

export default (_0x247e2f, _0xbdaedb, _0x23e35b) => {
                'use strict';
                const _0x994e15 = a0_0x6932;
                var _0x2b92a1 = this && this['__importDefault'] || function(_0x290e8f) {
                    const _0x99efb5 = a0_0x6932;
                    return _0x290e8f && _0x290e8f['__esModule'] ? _0x290e8f : {
                        'default': _0x290e8f
                    };
                };
                Object['defineProperty'](_0xbdaedb, '__esModule', {
                    'value': !0x0
                });
                const _0x1a07bf = _0x2b92a1(_0x23e35b(0x10fc4));
                _0xbdaedb['default'] = class {
                    constructor(_0x4c9b1a) {
                        const _0x4a0ff2 = _0x994e15;
                        this[_0x4a0ff2(0x1924)] = new Array(), this['spawned'] = new Array(), this['spawnLimit'] = 0x1f4, this['scene'] = _0x4c9b1a;
                    } ['SpawnAt'](_0x2c1049, _0x5aebe0, _0x1a70ef) {
                        const _0x578f14 = _0x994e15,
                            _0x18876b = this[_0x578f14(0xdfb)]();
                        return _0x18876b && _0x18876b[_0x578f14(0x5ce)](_0x2c1049, _0x5aebe0, _0x1a70ef, 0x12c), _0x18876b;
                    } ['Spawn']() {
                        const _0x28aca3 = _0x994e15;
                        let _0x51d2f8 = this['stored'][_0x28aca3(0xcfe)]();
                        return !_0x51d2f8 && this[_0x28aca3(0x1924)][_0x28aca3(0xed9)] < this['spawnLimit'] && this[_0x28aca3(0x13f4)]['length'] < this[_0x28aca3(0x17ad)] && (_0x51d2f8 = this['Make'](), _0x51d2f8[_0x28aca3(0x658)]()), _0x51d2f8 && this[_0x28aca3(0x13f4)][_0x28aca3(0x1564)](_0x51d2f8), _0x51d2f8;
                    } ['Return'](_0x4a24f5) {
                        const _0xcaa4e5 = _0x994e15;
                        var _0x21685f = this[_0xcaa4e5(0x13f4)]['indexOf'](_0x4a24f5);
                        _0x21685f >= 0x0 ? this[_0xcaa4e5(0x13f4)]['splice'](_0x21685f, 0x1) : console[_0xcaa4e5(0x1947)]('TwitchUsername pool error'), this[_0xcaa4e5(0x1924)][_0xcaa4e5(0x1564)](_0x4a24f5);
                    } ['Make']() {
                        return new _0x1a07bf['default'](this, 0x0, 0x0);
                    } ['QuickHide']() {
                        const _0x25786d = _0x994e15;
                        for (let _0x4efec8 = 0x0; _0x4efec8 < this[_0x25786d(0x13f4)]['length']; _0x4efec8++) this['spawned'][_0x4efec8]['QuickHide']();
                    }
                };
            };
