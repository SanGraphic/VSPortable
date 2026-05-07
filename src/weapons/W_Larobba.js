// Module 0xdf2e
// Args: _0xb63a9e, _0x40f5de, _0x1c9c07

export default (_0xb63a9e, _0x40f5de, _0x1c9c07) => {
                'use strict';
                const _0x2b6357 = a0_0x6932;
                var _0x3d4b74 = this && this['__importDefault'] || function(_0x221d19) {
                    const _0xa11f55 = _0x2b6357;
                    return _0x221d19 && _0x221d19[_0xa11f55(0x16f1)] ? _0x221d19 : {
                        'default': _0x221d19
                    };
                };
                Object['defineProperty'](_0x40f5de, '__esModule', {
                    'value': !0x0
                }), _0x40f5de['W_Larobba'] = void 0x0;
                const _0x328e92 = _0x3d4b74(_0x1c9c07(0x5f07)),
                    _0x538806 = _0x3d4b74(_0x1c9c07(0x54e3)),
                    _0x2193dc = _0x3d4b74(_0x1c9c07(0xe49a)),
                    _0xb0ce26 = _0x3d4b74(_0x1c9c07(0x9b68));
                class _0x5b40d8 extends _0x2193dc['default'] {
                    constructor(_0x549008) {
                        const _0x34eaae = _0x2b6357;
                        super(_0x549008), this[_0x34eaae(0x32e)] = [], this['lastAngleIndex'] = 0x0, this[_0x34eaae(0x13cb)] = 0xc, this[_0x34eaae(0x14b3)] = 0x0, this[_0x34eaae(0x841)] = 0x14, this['lastRobbaIndex'] = 0x0, this[_0x34eaae(0x442)] = ['Larobba01.png', 'Larobba02.png', 'Larobba03.png', 'Larobba04.png', 'Larobba05.png', 'Larobba06.png', 'Larobba07.png', 'Larobba08.png', 'Larobba09.png', 'Larobba10.png', 'Larobba11.png', 'Larobba12.png', 'Larobba13.png', 'Larobba14.png', 'Larobba15.png', 'Larobba16.png', 'Larobba17.png', 'Larobba18.png', 'Larobba19.png', 'Larobba20.png', 'Larobba21.png', 'Larobba22.png', 'Larobba23.png'];
                        for (let _0x537f79 = 0x0; _0x537f79 < this[_0x34eaae(0x13cb)]; _0x537f79++) this[_0x34eaae(0x32e)][_0x34eaae(0x1564)](0.25 * Math['PI'] + 0.5 * Math['PI'] * _0x537f79 / this[_0x34eaae(0x13cb)]);
                        Phaser[_0x34eaae(0x1a50)]['Array']['Shuffle'](this[_0x34eaae(0x32e)]), Phaser[_0x34eaae(0x1a50)]['Array'][_0x34eaae(0x1aee)](this[_0x34eaae(0x442)]), this['explodeOnExpire'] = !0x1, this[_0x34eaae(0xdfc)] = _0x538806['default'][_0x34eaae(0x3e7)];
                    } ['CheckArcanas']() {
                        const _0x15ee81 = _0x2b6357;
                        super[_0x15ee81(0x1ce)](), this['beginningArcana'] || _0x328e92['default']['Core'][_0x15ee81(0x1884)]['beginning']['length'] > 0x0 && -0x1 === _0x328e92['default']['Core'][_0x15ee81(0x1884)]['beginning'][_0x15ee81(0x1303)](this[_0x15ee81(0x14e)]) && (this['beginningArcana'] = !0x0, this['amount'] += 0x1), _0x328e92[_0x15ee81(0xd2c)][_0x15ee81(0x1043)]['Arcanas'][_0x15ee81(0x15e7)][_0x15ee81(0x1303)](_0xb0ce26['default']['T02_TWILIGHT']) > -0x1 && (this['explodeOnExpire'] = !0x0);
                    }
                    get['PBounces']() {
                        const _0x25139a = _0x2b6357;
                        return this[_0x25139a(0x1985)] + this['bounces'];
                    } ['GetAngle']() {
                        const _0xd859ba = _0x2b6357;
                        var _0x435ae8 = (this[_0xd859ba(0x15bf)] + 0x1) % this['maxAngles'];
                        return this[_0xd859ba(0x15bf)] = _0x435ae8, this[_0xd859ba(0x32e)][_0x435ae8];
                    } ['GetRobbaFrame']() {
                        const _0x165305 = _0x2b6357;
                        var _0x3f00a2 = (this[_0x165305(0xb72)] + 0x1) % this[_0x165305(0x841)];
                        return this[_0x165305(0xb72)] = _0x3f00a2, this['robbaFrameNames'][_0x3f00a2];
                    } ['LevelUp']() {
                        const _0x429796 = _0x2b6357;
                        return Phaser[_0x429796(0x1a50)][_0x429796(0x180d)][_0x429796(0x1aee)](this[_0x429796(0x32e)]), Phaser['Utils']['Array'][_0x429796(0x1aee)](this[_0x429796(0x442)]), super[_0x429796(0x2ab)]();
                    }
                }
                _0x40f5de['W_Larobba'] = _0x5b40d8, _0x40f5de['default'] = _0x5b40d8;
            };
