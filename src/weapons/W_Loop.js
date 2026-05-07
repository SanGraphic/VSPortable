// Module 0xcea
// Args: _0x3fafc1, _0x813946, _0x3e3f1a

export default (_0x3fafc1, _0x813946, _0x3e3f1a) => {
                'use strict';
                const _0x453be5 = a0_0x6932;
                var _0x8b361c = this && this['__importDefault'] || function(_0xb3780b) {
                    const _0x228bfe = _0x453be5;
                    return _0xb3780b && _0xb3780b[_0x228bfe(0x16f1)] ? _0xb3780b : {
                        'default': _0xb3780b
                    };
                };
                Object['defineProperty'](_0x813946, '__esModule', {
                    'value': !0x0
                }), _0x813946['W_Loop'] = void 0x0;
                const _0x15bfcc = _0x8b361c(_0x3e3f1a(0x5f07)),
                    _0x2cb500 = _0x8b361c(_0x3e3f1a(0x54e3)),
                    _0x423794 = _0x8b361c(_0x3e3f1a(0xe49a)),
                    _0x474885 = _0x8b361c(_0x3e3f1a(0x9b68));
                class _0x5de450 extends _0x423794['default'] {
                    constructor(_0x3aba8c) {
                        const _0x56322c = _0x453be5;
                        super(_0x3aba8c), this[_0x56322c(0xa46)] = _0x2cb500[_0x56322c(0xd2c)][_0x56322c(0x18d1)], this['mul'] = 0x3e8 / 0x6, this[_0x56322c(0x1989)] = new Phaser[(_0x56322c(0x10d2))][(_0x56322c(0xb64))](0x0, 0x0, _0x15bfcc['default'][_0x56322c(0x1043)]['scene']['renderer'][_0x56322c(0x173c)], _0x15bfcc[_0x56322c(0xd2c)]['Core']['scene'][_0x56322c(0x12f9)][_0x56322c(0x140e)]);
                    } ['Update'](_0x2e6f03) {
                        const _0x23697b = _0x453be5;
                        super['Update'](_0x2e6f03), this['totalTime'] += _0x2e6f03, this['cooldownAffectedByMovement'] && (this[_0x23697b(0xb78)] += _0x15bfcc[_0x23697b(0xd2c)][_0x23697b(0x1043)]['Player'][_0x23697b(0x1c3)] * (_0x2e6f03 / this[_0x23697b(0x492)])), this[_0x23697b(0xb78)] >= this[_0x23697b(0x170c)] && (this['totalTime'] -= this['PInterval'], this[_0x23697b(0x1754)]());
                    } ['ResetFiringTimer']() {
                        const _0x449775 = _0x453be5;
                        this[_0x449775(0x19b7)] && this['firingTimer']['destroy']();
                    } ['CheckArcanas']() {
                        const _0x576a8d = _0x453be5;
                        _0x15bfcc[_0x576a8d(0xd2c)]['Core'][_0x576a8d(0x1884)][_0x576a8d(0x15e7)][_0x576a8d(0x1303)](_0x474885['default']['T03_TRAGIC']) > -0x1 && (this[_0x576a8d(0x19ea)] = !0x0), _0x15bfcc[_0x576a8d(0xd2c)][_0x576a8d(0x1043)][_0x576a8d(0x1884)]['ActiveArcanas'][_0x576a8d(0x1303)](_0x474885[_0x576a8d(0xd2c)]['T02_TWILIGHT']) > -0x1 && (this['explodeOnExpire'] = !0x0), super['CheckArcanas']();
                    }
                }
                _0x813946['W_Loop'] = _0x5de450, _0x813946['default'] = _0x5de450;
            };
