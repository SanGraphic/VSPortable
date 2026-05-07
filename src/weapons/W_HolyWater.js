// Module 0xe2b7
// Args: _0x596b76, _0x26c050, _0x22a530

export default (_0x596b76, _0x26c050, _0x22a530) => {
                'use strict';
                const _0x5788cf = a0_0x6932;
                var _0x508829 = this && this['__importDefault'] || function(_0x2177f7) {
                    const _0x5c0ba0 = a0_0x6932;
                    return _0x2177f7 && _0x2177f7['__esModule'] ? _0x2177f7 : {
                        'default': _0x2177f7
                    };
                };
                Object['defineProperty'](_0x26c050, '__esModule', {
                    'value': !0x0
                }), _0x26c050['W_HolyWater'] = void 0x0;
                const _0x22c559 = _0x508829(_0x22a530(0x5f07)),
                    _0xfabb28 = _0x508829(_0x22a530(0xe49a)),
                    _0xe24de8 = _0x508829(_0x22a530(0x9b68));
                class _0x1fa3d6 extends _0xfabb28['default'] {
                    constructor(_0x4f07c4) {
                        const _0x479e51 = _0x5788cf;
                        super(_0x4f07c4), this[_0x479e51(0x32e)] = [], this[_0x479e51(0x10b0)] = [], this[_0x479e51(0x15bf)] = 0x0, this['maxAngles'] = 0xc, this[_0x479e51(0x14b3)] = 0x0, this['totalTime'] = 0x0, this[_0x479e51(0x492)] = 0x3e8 / 0x6, this[_0x479e51(0xb78)] = 0x0;
                        var _0x4e3f9f = Math[_0x479e51(0x1084)](_0x22c559[_0x479e51(0xd2c)]['Core'][_0x479e51(0x6d2)]['renderer']['width'], _0x22c559[_0x479e51(0xd2c)]['Core'][_0x479e51(0x6d2)][_0x479e51(0x12f9)]['height']);
                        for (let _0x5a3070 = 0x0; _0x5a3070 < this[_0x479e51(0x13cb)]; _0x5a3070++) this[_0x479e51(0x32e)]['push'](0x2 * Math['PI'] * _0x5a3070 / this[_0x479e51(0x13cb)]), this['targetRadii'][_0x479e51(0x1564)](0.25 * _0x4e3f9f + 0.1 * _0x4e3f9f * (_0x5a3070 / this[_0x479e51(0x13cb)]));
                        Phaser['Utils'][_0x479e51(0x180d)][_0x479e51(0x1aee)](this[_0x479e51(0x10b0)]);
                    }
                    get['PPower']() {
                        const _0x2fe79f = _0x5788cf;
                        return super['PPower'] + _0x22c559[_0x2fe79f(0xd2c)][_0x2fe79f(0x1043)][_0x2fe79f(0x1884)]['bloodlineArmorValue'];
                    } ['GetAngle']() {
                        const _0x2efc45 = _0x5788cf;
                        var _0x4ef874 = (this[_0x2efc45(0x15bf)] + 0x1) % this[_0x2efc45(0x13cb)];
                        return this['lastAngleIndex'] = _0x4ef874, this[_0x2efc45(0x32e)][_0x4ef874];
                    } ['GetRadius']() {
                        const _0x38481d = _0x5788cf;
                        var _0x3367c2 = (this[_0x38481d(0x14b3)] + 0x1) % this['maxAngles'];
                        return this[_0x38481d(0x14b3)] = _0x3367c2, this[_0x38481d(0x10b0)][_0x3367c2];
                    } ['LevelUp']() {
                        const _0x2a160a = _0x5788cf;
                        return Phaser[_0x2a160a(0x1a50)][_0x2a160a(0x180d)][_0x2a160a(0x1aee)](this[_0x2a160a(0x10b0)]), super['LevelUp']();
                    } ['Update'](_0x24023b) {
                        const _0x733856 = _0x5788cf;
                        super[_0x733856(0xa9f)](_0x24023b), this[_0x733856(0xb78)] += _0x24023b, this[_0x733856(0x19ea)] && (this['totalTime'] += _0x22c559['default'][_0x733856(0x1043)][_0x733856(0x10f6)]['frameWalk'] * (_0x24023b / this['mul'])), this[_0x733856(0xb78)] >= this['PInterval'] && (this['totalTime'] -= this['PInterval'], this[_0x733856(0x1754)]());
                    } ['ResetFiringTimer']() {
                        const _0xec4602 = _0x5788cf;
                        this['firingTimer'] && this['firingTimer'][_0xec4602(0x16ca)]();
                    } ['CheckArcanas']() {
                        const _0x1706b9 = _0x5788cf;
                        _0x22c559[_0x1706b9(0xd2c)]['Core']['Arcanas'][_0x1706b9(0x15e7)][_0x1706b9(0x1303)](_0xe24de8['default']['T03_TRAGIC']) > -0x1 && (this['cooldownAffectedByMovement'] = !0x0), super[_0x1706b9(0x1ce)]();
                    }
                }
                _0x26c050['W_HolyWater'] = _0x1fa3d6, _0x26c050['default'] = _0x1fa3d6;
            };
