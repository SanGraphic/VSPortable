// Module 0x36e3
// Args: _0x4da862, _0x4edab6

export default (_0x4da862, _0x4edab6) => {
                'use strict';
                const _0x351f89 = a0_0x6932;
                Object['defineProperty'](_0x4edab6, '__esModule', {
                    'value': !0x0
                }), _0x4edab6['OptionToggle'] = void 0x0, _0x4edab6['OptionToggle'] = class {
                    constructor(_0x48b221) {
                        const _0x439b48 = _0x351f89;
                        this[_0x439b48(0x6d2)] = _0x48b221;
                    } ['onEnable'](_0x393cf5) {
                        const _0x317f8b = _0x351f89;
                        this['callback'] = _0x393cf5, this[_0x317f8b(0xa05)][_0x317f8b(0x596)](), this[_0x317f8b(0xa05)][_0x317f8b(0x76d)](), this[_0x317f8b(0xa05)]['on']('pointerdown', this[_0x317f8b(0xec8)][_0x317f8b(0xf7e)](this));
                    } ['onDisable']() {
                        const _0xd2106e = _0x351f89;
                        this['box'][_0xd2106e(0xb7c)](), this['box'][_0xd2106e(0x16cf)]('pointerdown', this['onToggle']['bind'](this));
                    } ['onDestroy']() {
                        const _0x345c4c = _0x351f89;
                        this[_0x345c4c(0x216)](), this[_0x345c4c(0x1717)] = null;
                    } ['onToggle']() {
                        const _0x3af5e8 = _0x351f89;
                        this[_0x3af5e8(0x1717)] && (this['value'] = !this['value'], this[_0x3af5e8(0x14c3)]['setFrame'](this[_0x3af5e8(0xb81)] ? 'yes16.png' : 'no16.png'), this[_0x3af5e8(0x1717)](this[_0x3af5e8(0xb81)]));
                    }
                };
            };
