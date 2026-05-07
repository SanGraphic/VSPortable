// Module 0x4a36
// Args: _0x321e34, _0x5ba268, _0x3cb109

export default (_0x321e34, _0x5ba268, _0x3cb109) => {
                'use strict';
                const _0x206fb6 = a0_0x6932;
                var _0x5d1faf = this && this['__importDefault'] || function(_0x4bf0a7) {
                    return _0x4bf0a7 && _0x4bf0a7['__esModule'] ? _0x4bf0a7 : {
                        'default': _0x4bf0a7
                    };
                };
                Object['defineProperty'](_0x5ba268, '__esModule', {
                    'value': !0x0
                }), _0x5ba268['W_Garlic'] = void 0x0;
                const _0x51fe2b = _0x3cb109(0x18304),
                    _0x1fc63f = _0x5d1faf(_0x3cb109(0x9b68)),
                    _0xd3cd08 = _0x5d1faf(_0x3cb109(0x5103)),
                    _0x27f1b6 = _0x5d1faf(_0x3cb109(0x5f07)),
                    _0xe9c9a5 = _0x5d1faf(_0x3cb109(0xe49a));
                class _0x39e00d extends _0xe9c9a5['default'] {
                    constructor(_0x382272) {
                        const _0x2c03cb = _0x206fb6;
                        super(_0x382272), this['totalTime'] = 0x0, this[_0x2c03cb(0x492)] = 0x3e8 / 0x6, this['totalTime'] = 0x0, this[_0x2c03cb(0x568)] = _0x27f1b6[_0x2c03cb(0xd2c)][_0x2c03cb(0x1043)][_0x2c03cb(0x6d2)][_0x2c03cb(0x18bd)][_0x2c03cb(0x568)](0x0, 0x0, 'vfx', 'Rings3.png'), this['image'][_0x2c03cb(0x11c7)](_0x51fe2b[_0x2c03cb(0x10fc)][_0x2c03cb(0x1811)]), this[_0x2c03cb(0x568)][_0x2c03cb(0xdab)](0.1), this['image']['copyPosition'](_0x27f1b6[_0x2c03cb(0xd2c)]['Core'][_0x2c03cb(0x10f6)])['setScale'](0x2 * _0xd3cd08['default'][_0x2c03cb(0x15db)] * this['PArea']), this[_0x2c03cb(0x11d1)] = _0x27f1b6[_0x2c03cb(0xd2c)][_0x2c03cb(0x1043)][_0x2c03cb(0x6d2)]['add']['tween']({
                            'targets': this['image'],
                            'alpha': 0.3,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x2c03cb(0x788)] = _0x27f1b6['default'][_0x2c03cb(0x1043)][_0x2c03cb(0x6d2)]['add']['tween']({
                            'targets': this['image'],
                            'angle': 0x168,
                            'loop': !0x0,
                            'duration': 0x1770,
                            'ease': 'Linear',
                            'repeat': -0x1
                        });
                    }
                    get['PAmount']() {
                        return 0x1;
                    }
                    get['PPower']() {
                        const _0x26752a = _0x206fb6;
                        return super['PPower'] + _0x27f1b6['default'][_0x26752a(0x1043)]['Arcanas'][_0x26752a(0x1344)];
                    } ['Fire']() {
                        const _0x136cad = _0x206fb6;
                        return this[_0x136cad(0x568)][_0x136cad(0x8a2)](0x2 * _0xd3cd08['default'][_0x136cad(0x15db)] * this[_0x136cad(0x5f5)]), _0x27f1b6[_0x136cad(0xd2c)][_0x136cad(0x1043)][_0x136cad(0x1884)]['hasAstronomia'] && _0x27f1b6[_0x136cad(0xd2c)][_0x136cad(0x1043)][_0x136cad(0x1884)]['TriggerAstronomia'](this), super[_0x136cad(0x1754)]();
                    } ['CleanUp']() {
                        const _0x88fe71 = _0x206fb6;
                        super['CleanUp'](), this['image'][_0x88fe71(0x183f)](!0x1), this[_0x88fe71(0x568)]['setActive'](!0x1), this['image']['destroy'](), this[_0x88fe71(0x11d1)][_0x88fe71(0x1a34)](), this['imageTween2'][_0x88fe71(0x1a34)]();
                    } ['Update'](_0x45016b) {
                        const _0x4c571b = _0x206fb6;
                        super['Update'](_0x45016b), this[_0x4c571b(0x568)][_0x4c571b(0xf01)](_0x27f1b6[_0x4c571b(0xd2c)][_0x4c571b(0x1043)][_0x4c571b(0x10f6)]), this['image']['setDepth'](_0x27f1b6[_0x4c571b(0xd2c)][_0x4c571b(0x1043)][_0x4c571b(0x10f6)]['depth'] - 0.5 * _0x27f1b6[_0x4c571b(0xd2c)][_0x4c571b(0x1043)][_0x4c571b(0x6d2)]['renderer'][_0x4c571b(0x140e)]), this[_0x4c571b(0x568)]['setScale'](0x2 * _0xd3cd08['default'][_0x4c571b(0x15db)] * this[_0x4c571b(0x5f5)]), this['totalTime'] += _0x45016b, this['cooldownAffectedByMovement'] && (this['totalTime'] += _0x27f1b6['default'][_0x4c571b(0x1043)][_0x4c571b(0x10f6)][_0x4c571b(0x1c3)] * (_0x45016b / this['mul'])), this[_0x4c571b(0xb78)] >= this['PInterval'] && (this['totalTime'] -= this[_0x4c571b(0x170c)], this['Fire']());
                    } ['ResetFiringTimer']() {
                        this['firingTimer'] && this['firingTimer']['destroy']();
                    } ['CheckArcanas']() {
                        const _0x494529 = _0x206fb6;
                        _0x27f1b6[_0x494529(0xd2c)]['Core'][_0x494529(0x1884)][_0x494529(0x15e7)][_0x494529(0x1303)](_0x1fc63f[_0x494529(0xd2c)]['T03_TRAGIC']) > -0x1 && (this[_0x494529(0x19ea)] = !0x0), super[_0x494529(0x1ce)]();
                    }
                }
                _0x5ba268['W_Garlic'] = _0x39e00d, _0x5ba268['default'] = _0x39e00d;
            };
