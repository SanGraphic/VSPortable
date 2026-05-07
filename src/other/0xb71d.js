// Module 0xb71d
// Args: _0x545176, _0x4bb8e9, _0x59904c

export default (_0x545176, _0x4bb8e9, _0x59904c) => {
                'use strict';
                const _0xd3da81 = a0_0x6932;
                var _0x2dcb0e = this && this['__importDefault'] || function(_0x266568) {
                    return _0x266568 && _0x266568['__esModule'] ? _0x266568 : {
                        'default': _0x266568
                    };
                };
                Object['defineProperty'](_0x4bb8e9, '__esModule', {
                    'value': !0x0
                });
                const _0x495db2 = _0x2dcb0e(_0x59904c(0x1166a));
                class _0x590809 extends _0x495db2['default'] {
                    constructor(_0x41b92d, _0x317a3f, _0x415801, _0x3506af) {
                        const _0x3b81d6 = _0xd3da81;
                        super(_0x41b92d, _0x317a3f, _0x415801, _0x3506af), this['eyes'] = this['scene'][_0x3b81d6(0x18bd)]['image'](_0x317a3f, _0x415801, 'enemiesM', 'Mud_eyes.png')[_0x3b81d6(0xb4a)](0xc80);
                    } ['OnRecycle']() {
                        const _0x4d4893 = _0xd3da81;
                        super['OnRecycle'](), this[_0x4d4893(0x912)][_0x4d4893(0xf8e)](this[_0x4d4893(0x612)], this['originY']), this['eyes'][_0x4d4893(0x3a8)] = this[_0x4d4893(0x3a8)], this[_0x4d4893(0x912)]['scaleY'] = this['scaleY'], this['eyes']['setVisible'](!0x0), this['saveTint'] = Phaser[_0x4d4893(0x24f)][_0x4d4893(0x82a)][_0x4d4893(0x198c)]([0x888866, 0x886666, 0x888844]), this['tint'] = this[_0x4d4893(0x1454)];
                    } ['Update'](_0x1c320a = 0x0) {
                        const _0x37be11 = _0xd3da81;
                        super[_0x37be11(0xa9f)](_0x1c320a), this[_0x37be11(0x912)]['x'] = this['x'], this[_0x37be11(0x912)]['y'] = this['y'], this['eyes'][_0x37be11(0xd96)] = this[_0x37be11(0xd96)], this[_0x37be11(0x912)][_0x37be11(0x4d4)] = this[_0x37be11(0x4d4)];
                    } ['Die']() {
                        const _0x320423 = _0xd3da81;
                        super[_0x320423(0x14f3)](), this[_0x320423(0x912)]['setVisible'](!0x1);
                    } ['Disappear']() {
                        const _0x19355f = _0xd3da81;
                        super[_0x19355f(0xe00)](), this[_0x19355f(0x912)]['setVisible'](!0x1);
                    } ['DeSpawn']() {
                        const _0x158617 = _0xd3da81;
                        super['DeSpawn'](), this[_0x158617(0x912)]['setVisible'](!0x1);
                    }
                }
                _0x4bb8e9['default'] = _0x590809;
            };
