// Module 0x135fd
// Args: _0x421a04, _0x34e03e, _0x916081

export default (_0x421a04, _0x34e03e, _0x916081) => {
                'use strict';
                const _0x4a1b99 = a0_0x6932;
                var _0x2b51e9 = this && this['__createBinding'] || (Object['create'] ? function(_0x2a878d, _0x2c25a7, _0x53daf6, _0x59f312) {
                        const _0x4461aa = _0x4a1b99;
                        void 0x0 === _0x59f312 && (_0x59f312 = _0x53daf6);
                        var _0x57e505 = Object[_0x4461aa(0x1687)](_0x2c25a7, _0x53daf6);
                        _0x57e505 && !('get' in _0x57e505 ? !_0x2c25a7[_0x4461aa(0x16f1)] : _0x57e505['writable'] || _0x57e505[_0x4461aa(0xf70)]) || (_0x57e505 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x2c25a7[_0x53daf6];
                            }
                        }), Object['defineProperty'](_0x2a878d, _0x59f312, _0x57e505);
                    } : function(_0xc8aa6d, _0x32b206, _0x149585, _0x3287fa) {
                        void 0x0 === _0x3287fa && (_0x3287fa = _0x149585), _0xc8aa6d[_0x3287fa] = _0x32b206[_0x149585];
                    }),
                    _0x5ac553 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x331516, _0x3b9a51) {
                        Object['defineProperty'](_0x331516, 'default', {
                            'enumerable': !0x0,
                            'value': _0x3b9a51
                        });
                    } : function(_0x4be215, _0x5065e6) {
                        _0x4be215['default'] = _0x5065e6;
                    }),
                    _0x9b33d3 = this && this['__importStar'] || function(_0x11631c) {
                        const _0x12a69a = _0x4a1b99;
                        if (_0x11631c && _0x11631c[_0x12a69a(0x16f1)]) return _0x11631c;
                        var _0x371a2c = {};
                        if (null != _0x11631c) {
                            for (var _0xc8e3fd in _0x11631c) 'default' !== _0xc8e3fd && Object[_0x12a69a(0x977)]['hasOwnProperty'][_0x12a69a(0xff0)](_0x11631c, _0xc8e3fd) && _0x2b51e9(_0x371a2c, _0x11631c, _0xc8e3fd);
                        }
                        return _0x5ac553(_0x371a2c, _0x11631c), _0x371a2c;
                    },
                    _0x4b027e = this && this['__importDefault'] || function(_0x20dfae) {
                        const _0x47f2f5 = _0x4a1b99;
                        return _0x20dfae && _0x20dfae[_0x47f2f5(0x16f1)] ? _0x20dfae : {
                            'default': _0x20dfae
                        };
                    };
                Object['defineProperty'](_0x34e03e, '__esModule', {
                    'value': !0x0
                });
                const _0x23de24 = _0x9b33d3(_0x916081(0x5f07)),
                    _0x13a42a = _0x4b027e(_0x916081(0x169b4)),
                    _0x104619 = _0x4b027e(_0x916081(0x1715a)),
                    _0xc6abc4 = _0x4b027e(_0x916081(0xe199)),
                    _0x197ecf = _0x4b027e(_0x916081(0xe109));
                class _0x3df3d1 extends Phaser['Scene'] {
                    constructor() {
                        super({
                            'key': _0x13a42a['default']['PauseStatsScene']
                        });
                    } ['preload']() {
                        const _0xb06b87 = _0x4a1b99;
                        _0x23de24['default'][_0xb06b87(0x7c2)]();
                    } ['create']() {
                        const _0x3526bb = _0x4a1b99;
                        _0x23de24[_0x3526bb(0xd2c)][_0x3526bb(0x1043)][_0x3526bb(0x14d8)][_0x3526bb(0xe69)][_0x3526bb(0xed9)] > 0x5 && (this['WeaponsPanel'] = new _0x197ecf[(_0x3526bb(0xd2c))](this, _0x23de24[_0x3526bb(0x1e0)][_0x3526bb(0xf42)], 0x80, 0xc8, 0x122), this[_0x3526bb(0x18bd)]['existing'](this[_0x3526bb(0xf75)]), _0x104619['default'][_0x3526bb(0x8c7)](this[_0x3526bb(0xf75)]), this[_0x3526bb(0xf75)]['x'] = 0x8, this['WeaponsPanel']['y'] = 0x20, this['StatsPanel'] = new _0xc6abc4['default'](this, _0x23de24[_0x3526bb(0x1e0)]['left'], 0x80, 0xc8, 0x122, _0x23de24['default'][_0x3526bb(0x1043)]['Player'][_0x3526bb(0x7fd)]), this[_0x3526bb(0x542)][_0x3526bb(0x14b7)]['setAlpha'](0.75), this[_0x3526bb(0x18bd)]['existing'](this[_0x3526bb(0x542)]), _0x104619[_0x3526bb(0xd2c)]['CalculateAndSetContainerSize'](this['StatsPanel']), this[_0x3526bb(0x542)]['x'] = 0x8, this[_0x3526bb(0x542)]['y'] = this[_0x3526bb(0xf75)]['y'] + this['WeaponsPanel']['displayHeight'], this['StatsPanel']['AssignPlayer'](_0x23de24[_0x3526bb(0xd2c)]['Core']['Player']), this[_0x3526bb(0xf75)]['Open'](), this[_0x3526bb(0xf75)][_0x3526bb(0x183f)](!_0x23de24[_0x3526bb(0xf04)]), this['StatsPanel'][_0x3526bb(0x10f5)](), this['StatsPanel'][_0x3526bb(0x183f)](!_0x23de24[_0x3526bb(0xf04)])), this[_0x3526bb(0xdc4)]['on']('pause', this[_0x3526bb(0x1631)], this), this[_0x3526bb(0xdc4)]['on']('resume', this['resume'], this);
                    } ['resume']() {
                        const _0x3ce133 = _0x4a1b99;
                        _0x23de24[_0x3ce133(0xd2c)]['Core']['PlayerOptions']['UnlockedWeapons'][_0x3ce133(0xed9)] > 0x5 && (null == this[_0x3ce133(0xf75)] && null == this[_0x3ce133(0x542)] ? this['create']() : (this[_0x3ce133(0xf75)][_0x3ce133(0x16ca)](), this['WeaponsPanel'] = new _0x197ecf['default'](this, _0x23de24['SAFEAREA']['left'], 0x80, 0xc8, 0x122), this[_0x3ce133(0x18bd)][_0x3ce133(0x1a88)](this[_0x3ce133(0xf75)]), _0x104619[_0x3ce133(0xd2c)]['CalculateAndSetContainerSize'](this[_0x3ce133(0xf75)]), this[_0x3ce133(0xf75)]['x'] = 0x8, this[_0x3ce133(0xf75)]['y'] = 0x20, this[_0x3ce133(0x542)]['y'] = this['WeaponsPanel']['y'] + this['WeaponsPanel']['displayHeight'], this['StatsPanel'][_0x3ce133(0x1376)](_0x23de24[_0x3ce133(0xd2c)]['Core'][_0x3ce133(0x10f6)]), this['WeaponsPanel'][_0x3ce133(0x10f5)](), this[_0x3ce133(0xf75)][_0x3ce133(0x183f)](!_0x23de24[_0x3ce133(0xf04)]), this['StatsPanel']['Open']()));
                    } ['pause']() {} ['quickUpdate']() {
                        const _0x4a3e5a = _0x4a1b99;
                        this[_0x4a3e5a(0xf75)] && this['WeaponsPanel']['visible'] && (this['WeaponsPanel']['destroy'](), this[_0x4a3e5a(0xf75)] = new _0x197ecf['default'](this, _0x23de24[_0x4a3e5a(0x1e0)]['left'], 0x80, 0xc8, 0x122), this[_0x4a3e5a(0x18bd)][_0x4a3e5a(0x1a88)](this[_0x4a3e5a(0xf75)]), _0x104619[_0x4a3e5a(0xd2c)][_0x4a3e5a(0x8c7)](this[_0x4a3e5a(0xf75)]), this[_0x4a3e5a(0xf75)]['x'] = 0x8, this[_0x4a3e5a(0xf75)]['y'] = 0x20), this['StatsPanel'] && this['StatsPanel']['visible'] && (this[_0x4a3e5a(0x542)]['y'] = this[_0x4a3e5a(0xf75)]['y'] + this[_0x4a3e5a(0xf75)][_0x4a3e5a(0x828)], this['StatsPanel'][_0x4a3e5a(0x1376)](_0x23de24['default']['Core'][_0x4a3e5a(0x10f6)]));
                    }
                }
                _0x34e03e['default'] = _0x3df3d1;
            };
