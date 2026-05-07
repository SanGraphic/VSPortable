// Module 0x8c61
// Args: _0x4a3c7e, _0x5a66df, _0x2569ac

export default (_0x4a3c7e, _0x5a66df, _0x2569ac) => {
                'use strict';
                const _0x3dfc61 = a0_0x6932;
                var _0x115a46 = this && this['__createBinding'] || (Object['create'] ? function(_0x120920, _0x1a73e0, _0xb980ad, _0x464b47) {
                        const _0x383c4d = _0x3dfc61;
                        void 0x0 === _0x464b47 && (_0x464b47 = _0xb980ad);
                        var _0x517ad5 = Object[_0x383c4d(0x1687)](_0x1a73e0, _0xb980ad);
                        _0x517ad5 && !('get' in _0x517ad5 ? !_0x1a73e0['__esModule'] : _0x517ad5['writable'] || _0x517ad5[_0x383c4d(0xf70)]) || (_0x517ad5 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x1a73e0[_0xb980ad];
                            }
                        }), Object['defineProperty'](_0x120920, _0x464b47, _0x517ad5);
                    } : function(_0xf2f2a3, _0x2685ac, _0x2c1160, _0x367aba) {
                        void 0x0 === _0x367aba && (_0x367aba = _0x2c1160), _0xf2f2a3[_0x367aba] = _0x2685ac[_0x2c1160];
                    }),
                    _0x12d332 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x3971ba, _0x33666e) {
                        Object['defineProperty'](_0x3971ba, 'default', {
                            'enumerable': !0x0,
                            'value': _0x33666e
                        });
                    } : function(_0x41aa19, _0x45a539) {
                        const _0x2d55df = _0x3dfc61;
                        _0x41aa19[_0x2d55df(0xd2c)] = _0x45a539;
                    }),
                    _0x55eef6 = this && this['__importStar'] || function(_0x5510e6) {
                        const _0x25820a = _0x3dfc61;
                        if (_0x5510e6 && _0x5510e6[_0x25820a(0x16f1)]) return _0x5510e6;
                        var _0x52b006 = {};
                        if (null != _0x5510e6) {
                            for (var _0xfac3bd in _0x5510e6) 'default' !== _0xfac3bd && Object[_0x25820a(0x977)][_0x25820a(0x2cf)]['call'](_0x5510e6, _0xfac3bd) && _0x115a46(_0x52b006, _0x5510e6, _0xfac3bd);
                        }
                        return _0x12d332(_0x52b006, _0x5510e6), _0x52b006;
                    },
                    _0x272205 = this && this['__importDefault'] || function(_0x53ebad) {
                        return _0x53ebad && _0x53ebad['__esModule'] ? _0x53ebad : {
                            'default': _0x53ebad
                        };
                    };
                Object['defineProperty'](_0x5a66df, '__esModule', {
                    'value': !0x0
                }), _0x5a66df['W_Bora'] = void 0x0;
                const _0x5bcc4b = _0x55eef6(_0x2569ac(0x5f07)),
                    _0x2f42b5 = _0x272205(_0x2569ac(0xe49a)),
                    _0x3810ea = _0x272205(_0x2569ac(0x9b68));
                class _0x448a52 extends _0x2f42b5['default'] {
                    constructor(_0x5871ae) {
                        const _0x34c0d5 = _0x3dfc61;
                        super(_0x5871ae), this['targetAngles'] = [], this[_0x34c0d5(0x10b0)] = [], this[_0x34c0d5(0x15bf)] = 0x0, this['maxAngles'] = 0xc, this['lasRadiusIndex'] = 0x0, this[_0x34c0d5(0xe7e)] = !0x1, this['timesFired'] = 0x0, this[_0x34c0d5(0x5b8)] = 0x12c, this[_0x34c0d5(0xb30)] = 0x2ee, this['mul'] = 0x3e8 / 0x3;
                        var _0x667889 = 0.5 * _0x5bcc4b[_0x34c0d5(0x4c0)];
                        this[_0x34c0d5(0x6d2)] = _0x5bcc4b['default']['Core'][_0x34c0d5(0x6d2)];
                        var _0x36123d = new Phaser[(_0x34c0d5(0x10d2))]['Ellipse'](0x0, 0x0, _0x5bcc4b['GAMEPLAY_PIXEL_HEIGHT'], _0x5bcc4b[_0x34c0d5(0x1391)]);
                        this['targetPoints'] = _0x36123d[_0x34c0d5(0x10f9)](0xc);
                        for (let _0x5dcf2b = 0x0; _0x5dcf2b < this['maxAngles']; _0x5dcf2b++) this[_0x34c0d5(0x32e)]['push'](0x2 * Math['PI'] * _0x5dcf2b / this['maxAngles']), this[_0x34c0d5(0x10b0)][_0x34c0d5(0x1564)](_0x667889);
                        Phaser[_0x34c0d5(0x1a50)][_0x34c0d5(0x180d)]['Shuffle'](this['targetRadii']);
                    } ['GetTargetPoint']() {
                        const _0x3d1c3a = _0x3dfc61;
                        var _0x222814 = (this[_0x3d1c3a(0x14b3)] + 0x1) % this[_0x3d1c3a(0x13cb)];
                        return this['lasRadiusIndex'] = _0x222814, this['targetPoints'][_0x222814];
                    } ['Update'](_0x2d5c0a) {
                        const _0x1ead37 = _0x3dfc61;
                        super['Update'](_0x2d5c0a), this['totalTime'] += _0x2d5c0a, this['cooldownAffectedByMovement'] && (this['totalTime'] += _0x5bcc4b[_0x1ead37(0xd2c)]['Core'][_0x1ead37(0x10f6)]['frameWalk'] * (_0x2d5c0a / this[_0x1ead37(0x492)])), this[_0x1ead37(0xb78)] >= this[_0x1ead37(0x170c)] && (this[_0x1ead37(0xb78)] -= this[_0x1ead37(0x170c)], this[_0x1ead37(0x1754)]());
                    } ['ResetFiringTimer']() {
                        const _0x4d64df = _0x3dfc61;
                        this[_0x4d64df(0x19b7)] && this[_0x4d64df(0x19b7)][_0x4d64df(0x16ca)]();
                    } ['LevelUp']() {
                        const _0x324f9b = _0x3dfc61;
                        return Phaser['Utils'][_0x324f9b(0x180d)][_0x324f9b(0x1aee)](this[_0x324f9b(0x10b0)]), super['LevelUp']();
                    } ['CheckArcanas']() {
                        const _0x3e201 = _0x3dfc61;
                        _0x5bcc4b[_0x3e201(0xd2c)][_0x3e201(0x1043)][_0x3e201(0x1884)][_0x3e201(0x15e7)]['indexOf'](_0x3810ea[_0x3e201(0xd2c)][_0x3e201(0x13f2)]) > -0x1 && (this[_0x3e201(0x19ea)] = !0x0), super['CheckArcanas']();
                    }
                }
                _0x5a66df['W_Bora'] = _0x448a52, _0x5a66df['default'] = _0x448a52;
            };
