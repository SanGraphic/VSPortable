// Module 0x1331e
// Args: _0xaedf8e, _0x5333e4, _0x1bf491

export default (_0xaedf8e, _0x5333e4, _0x1bf491) => {
                'use strict';
                const _0x46e929 = a0_0x6932;
                var _0x4ab9d3 = this && this['__importDefault'] || function(_0x2823e3) {
                    return _0x2823e3 && _0x2823e3['__esModule'] ? _0x2823e3 : {
                        'default': _0x2823e3
                    };
                };
                Object['defineProperty'](_0x5333e4, '__esModule', {
                    'value': !0x0
                });
                const _0x380f7d = _0x4ab9d3(_0x1bf491(0x9bda)),
                    _0x599f13 = _0x4ab9d3(_0x1bf491(0x1166a)),
                    _0x5ecb9c = _0x4ab9d3(_0x1bf491(0xd1a1));
                class _0x4498be extends _0x599f13['default'] {
                    constructor(_0x168345, _0x306c41, _0x95d7d, _0x33b6e7) {
                        const _0xfe860a = _0x46e929;
                        super(_0x168345, _0x306c41, _0x95d7d, _0x33b6e7), this['headOffset'] = {
                            'x': -0x1a,
                            'y': -0x15
                        }, this['inv_headOffset'] = {
                            'x': 0x34,
                            'y': -0x15
                        }, this['HeadEnemies'] = [], this['HeadPool'] || (this[_0xfe860a(0x580)] = new _0x5ecb9c[(_0xfe860a(0xd2c))](this[_0xfe860a(0x6d2)], _0x380f7d['default']['MS_OROCHIHEAD']));
                        let _0x3e61f3 = null;
                        if (this[_0xfe860a(0x173)]['length'] < 0x8) {
                            for (let _0x49cd1c = 0x0; _0x49cd1c < 0x8; _0x49cd1c++) _0x3e61f3 = this[_0xfe860a(0x580)][_0xfe860a(0xada)](this['x'], this['y'], this), this['HeadEnemies']['push'](_0x3e61f3), _0x3e61f3[_0xfe860a(0x70a)](_0x49cd1c);
                        }
                    } ['OnRecycle']() {
                        const _0x44499b = _0x46e929;
                        super['OnRecycle'](), this['isTeleportOnCull'] = !0x0;
                        let _0x3fbbd1 = null;
                        if (this[_0x44499b(0x173)][_0x44499b(0xed9)] < 0x8) {
                            for (let _0x5e2b63 = 0x0; _0x5e2b63 < 0x8; _0x5e2b63++) _0x3fbbd1 = this[_0x44499b(0x580)][_0x44499b(0xada)](this['x'], this['y'], this), this[_0x44499b(0x173)]['push'](_0x3fbbd1), _0x3fbbd1['setHeadIndex'](_0x5e2b63);
                        }
                        for (let _0x5e3a90 = 0x0; _0x5e3a90 < this['HeadEnemies']['length']; _0x5e3a90++) this['maxHp'] += this[_0x44499b(0x173)][_0x5e3a90][_0x44499b(0xd2e)];
                        this['hp'] = this[_0x44499b(0xd2e)];
                    } ['PlayDeathAnimations']() {} ['Die']() {
                        const _0x3a9aab = _0x46e929;
                        super['Die']();
                        for (let _0x3c311c = 0x0; _0x3c311c < this[_0x3a9aab(0x173)]['length']; _0x3c311c++) {
                            const _0x748c83 = this['HeadEnemies'][_0x3c311c];
                            _0x748c83['isDead'] || _0x748c83['Die']();
                        }
                        this[_0x3a9aab(0x173)] = [];
                    } ['Disappear']() {
                        const _0x4441ce = _0x46e929;
                        super['Disappear']();
                        for (let _0x2908a7 = 0x0; _0x2908a7 < this[_0x4441ce(0x173)]['length']; _0x2908a7++) {
                            const _0x1585e8 = this[_0x4441ce(0x173)][_0x2908a7];
                            _0x1585e8['isDead'] || _0x1585e8['Disappear']();
                        }
                        this['HeadEnemies'] = [];
                    } ['DeSpawn']() {
                        const _0x1441c4 = _0x46e929;
                        super[_0x1441c4(0x14fb)]();
                    } ['Update'](_0xcaa227) {
                        const _0xa69a73 = _0x46e929;
                        super[_0xa69a73(0xa9f)](_0xcaa227), this['angle'] = 0x0;
                    }
                }
                _0x5333e4['default'] = _0x4498be;
            };
