// Module 0x4669
// Args: _0x5dace2, _0x5bb219, _0x236df1

export default (_0x5dace2, _0x5bb219, _0x236df1) => {
                'use strict';
                const _0x42e17a = a0_0x6932;
                var _0x52db81 = this && this['__importDefault'] || function(_0xbd5335) {
                    const _0x26b176 = _0x42e17a;
                    return _0xbd5335 && _0xbd5335[_0x26b176(0x16f1)] ? _0xbd5335 : {
                        'default': _0xbd5335
                    };
                };
                Object['defineProperty'](_0x5bb219, '__esModule', {
                    'value': !0x0
                });
                const _0x5c0f11 = _0x52db81(_0x236df1(0xb68b));
                _0x5bb219['default'] = class {
                    constructor(_0xabf458) {
                        const _0x57dbc4 = _0x42e17a;
                        this['stored'] = new Array(), this['spawned'] = new Array(), this[_0x57dbc4(0x6d2)] = _0xabf458;
                    } ['SpawnAt'](_0x5bc881, _0x252186, _0x5c6d3e) {
                        const _0x4b7e2f = _0x42e17a,
                            _0x1e549d = this['Spawn']();
                        return _0x1e549d[_0x4b7e2f(0x726)](_0x5bc881, _0x252186), _0x1e549d[_0x4b7e2f(0x5ce)](_0x5c6d3e), _0x1e549d;
                    } ['Spawn']() {
                        const _0x58fb0a = _0x42e17a;
                        let _0x1d69bf = this[_0x58fb0a(0x1924)][_0x58fb0a(0xcfe)]();
                        return _0x1d69bf || (_0x1d69bf = this[_0x58fb0a(0x18c8)](), _0x1d69bf[_0x58fb0a(0x658)]()), this['spawned'][_0x58fb0a(0x1564)](_0x1d69bf), _0x1d69bf;
                    } ['Return'](_0x42485e) {
                        const _0x1fb0c4 = _0x42e17a;
                        var _0x358757 = this[_0x1fb0c4(0x13f4)]['indexOf'](_0x42485e);
                        _0x358757 >= 0x0 ? this[_0x1fb0c4(0x13f4)][_0x1fb0c4(0x16ea)](_0x358757, 0x1) : console[_0x1fb0c4(0x1947)]('HitVFX pool error'), this['stored'][_0x1fb0c4(0x1564)](_0x42485e);
                    } ['Make']() {
                        return new _0x5c0f11['default'](this['scene'], this);
                    }
                };
            };
