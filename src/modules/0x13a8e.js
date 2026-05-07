// Module 0x13a8e
// Args: _0x2b3fcd, _0x177a92, _0x520955

export default (_0x2b3fcd, _0x177a92, _0x520955) => {
                'use strict';
                const _0x4b17c6 = a0_0x6932;
                var _0x4d0494 = this && this['__createBinding'] || (Object['create'] ? function(_0x204f9a, _0x363c75, _0x2552c5, _0x48dd41) {
                        const _0x546be0 = a0_0x6932;
                        void 0x0 === _0x48dd41 && (_0x48dd41 = _0x2552c5);
                        var _0x9e76db = Object['getOwnPropertyDescriptor'](_0x363c75, _0x2552c5);
                        _0x9e76db && !('get' in _0x9e76db ? !_0x363c75['__esModule'] : _0x9e76db['writable'] || _0x9e76db['configurable']) || (_0x9e76db = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x363c75[_0x2552c5];
                            }
                        }), Object['defineProperty'](_0x204f9a, _0x48dd41, _0x9e76db);
                    } : function(_0x4d796a, _0x5a6f0c, _0x4b774e, _0x235749) {
                        void 0x0 === _0x235749 && (_0x235749 = _0x4b774e), _0x4d796a[_0x235749] = _0x5a6f0c[_0x4b774e];
                    }),
                    _0x436dfe = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x55b00f, _0x504200) {
                        const _0xd65a23 = _0x4b17c6;
                        Object[_0xd65a23(0x811)](_0x55b00f, 'default', {
                            'enumerable': !0x0,
                            'value': _0x504200
                        });
                    } : function(_0x19ed1b, _0x5b28cd) {
                        _0x19ed1b['default'] = _0x5b28cd;
                    }),
                    _0x4f3ea7 = this && this['__importStar'] || function(_0x55c6ed) {
                        const _0x463261 = _0x4b17c6;
                        if (_0x55c6ed && _0x55c6ed['__esModule']) return _0x55c6ed;
                        var _0x41f8b0 = {};
                        if (null != _0x55c6ed) {
                            for (var _0x17944a in _0x55c6ed) 'default' !== _0x17944a && Object['prototype']['hasOwnProperty'][_0x463261(0xff0)](_0x55c6ed, _0x17944a) && _0x4d0494(_0x41f8b0, _0x55c6ed, _0x17944a);
                        }
                        return _0x436dfe(_0x41f8b0, _0x55c6ed), _0x41f8b0;
                    },
                    _0x28be58 = this && this['__importDefault'] || function(_0x40db87) {
                        return _0x40db87 && _0x40db87['__esModule'] ? _0x40db87 : {
                            'default': _0x40db87
                        };
                    };
                Object['defineProperty'](_0x177a92, '__esModule', {
                    'value': !0x0
                }), _0x177a92['W_Silf'] = void 0x0;
                const _0x1283eb = _0x28be58(_0x520955(0x9b68)),
                    _0x93a23b = _0x28be58(_0x520955(0x54e3)),
                    _0x2df92e = _0x28be58(_0x520955(0x5103)),
                    _0x5a98a3 = _0x4f3ea7(_0x520955(0x5f07)),
                    _0x1c7adc = _0x28be58(_0x520955(0xe49a));
                class _0x9ecd02 extends _0x1c7adc['default'] {
                    constructor(_0x27a968) {
                        const _0x121ea0 = _0x4b17c6;
                        super(_0x27a968, !0x1), this[_0x121ea0(0xa46)] = _0x93a23b['default']['CURSE'], this[_0x121ea0(0xa76)] = new Array(), this[_0x121ea0(0x8f8)] = 0x96, this['totalTime'] = 0x0, this[_0x121ea0(0x124c)] = 0x0, this[_0x121ea0(0x196b)] = 0x32, this[_0x121ea0(0x1a40)] = !0x1, this[_0x121ea0(0x14a5)] = 0x0, this['delayBasedOnDuration'] = 0x1, this[_0x121ea0(0x6c5)] = 0x1f4, this[_0x121ea0(0x70d)] = new Phaser[(_0x121ea0(0x24f))]['Vector2'](0x0, 0x0), this['runSpeed'] = _0x2df92e['default'][_0x121ea0(0x1300)] / 1.178571428571429, this['targetZoneStrokeColor'] = 0x8888ff, this['spriteName'] = 'ProjectileBird2.png', this[_0x121ea0(0xeeb)] = _0x93a23b[_0x121ea0(0xd2c)][_0x121ea0(0x764)], this[_0x121ea0(0x134e)] = 0x0, this[_0x121ea0(0x8f8)] = _0x5a98a3[_0x121ea0(0xf04)] ? _0x5a98a3[_0x121ea0(0x1391)] : _0x5a98a3[_0x121ea0(0x4c0)], this['damageZoneDistance'] *= 0.5, this[_0x121ea0(0x196b)] = 0.25 * this[_0x121ea0(0x8f8)], this['damageZoneDistance'] -= this[_0x121ea0(0x196b)], this[_0x121ea0(0xb44)] = _0x5a98a3[_0x121ea0(0xd2c)]['Core'][_0x121ea0(0x6d2)]['add'][_0x121ea0(0x4f6)](0x0, 0x0, this['damageZoneDefaultRadius'])['setStrokeStyle'](0x2, 0xffff00)['setVisible'](!0x1), this['targetZone'] = _0x5a98a3[_0x121ea0(0xd2c)][_0x121ea0(0x1043)]['scene']['add']['circle'](0x0, 0x0, this[_0x121ea0(0x196b)])[_0x121ea0(0x19b9)](0x1, this[_0x121ea0(0x13e)])[_0x121ea0(0xdab)](0.5), this['circle'] = new Phaser[(_0x121ea0(0x10d2))][(_0x121ea0(0xf29))](0x0, 0x0, this['damageZoneDefaultRadius']), this[_0x121ea0(0x105b)] = new Phaser[(_0x121ea0(0x1785))]['Arcade'][(_0x121ea0(0xa97))](_0x5a98a3[_0x121ea0(0xd2c)][_0x121ea0(0x1043)][_0x121ea0(0x6d2)], _0x5a98a3[_0x121ea0(0xd2c)]['Core'][_0x121ea0(0x10f6)]['x'], _0x5a98a3[_0x121ea0(0xd2c)]['Core'][_0x121ea0(0x10f6)]['y'], 'vfx', this['spriteName']), _0x5a98a3['default'][_0x121ea0(0x1043)][_0x121ea0(0x6d2)][_0x121ea0(0x18bd)]['existing'](this['sprite']), _0x5a98a3[_0x121ea0(0xd2c)]['Core']['scene'][_0x121ea0(0x1585)][_0x121ea0(0x18bd)][_0x121ea0(0x1a88)](this[_0x121ea0(0x105b)]);
                        const _0x4b4705 = this['GetSpriteNames'](this['sprite']);
                        this['sprite'][_0x121ea0(0x183e)][_0x121ea0(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x4b4705,
                            'frameRate': 0x6,
                            'repeat': -0x1
                        }), this['sprite'][_0x121ea0(0x183e)][_0x121ea0(0x902)]('idle'), this[_0x121ea0(0x105b)][_0x121ea0(0xb4a)](Number[_0x121ea0(0x1aaa)] - 0x3e7);
                    } ['CheckArcanas']() {
                        const _0x80d3a9 = _0x4b17c6;
                        if (_0x5a98a3['default'][_0x80d3a9(0x1043)]['Arcanas'][_0x80d3a9(0x15e7)][_0x80d3a9(0x1303)](_0x1283eb[_0x80d3a9(0xd2c)]['T02_TWILIGHT']) > -0x1 && (this[_0x80d3a9(0x1007)] = !0x0), _0x5a98a3[_0x80d3a9(0xd2c)][_0x80d3a9(0x1043)]['Arcanas']['ActiveArcanas']['indexOf'](_0x1283eb[_0x80d3a9(0xd2c)][_0x80d3a9(0x19a1)]) > -0x1) {
                            if (_0x5a98a3[_0x80d3a9(0xd2c)][_0x80d3a9(0x1043)]['HiddenWeapons']['find'](_0x35fd08 => _0x35fd08[_0x80d3a9(0x14e)] === this[_0x80d3a9(0xeeb)])) return;
                            let _0x4b069a = _0x5a98a3[_0x80d3a9(0xd2c)][_0x80d3a9(0x1043)]['AddHiddenWeapon'](this[_0x80d3a9(0xeeb)]);
                            for (_0x4b069a[_0x80d3a9(0xb78)] = this['totalTime'], _0x4b069a[_0x80d3a9(0x14a5)] = this[_0x80d3a9(0x14a5)], this[_0x80d3a9(0x3e4)] = _0x4b069a; _0x4b069a[_0x80d3a9(0x5e3)] < this[_0x80d3a9(0x5e3)];) _0x4b069a[_0x80d3a9(0x2ab)]();
                        }
                        super['CheckArcanas']();
                    }
                    get['OffsetX']() {
                        const _0x43ab1d = _0x4b17c6;
                        return _0x5a98a3[_0x43ab1d(0xd2c)]['Core'][_0x43ab1d(0x10f6)][_0x43ab1d(0x4d4)] ? 0x18 : -0x18;
                    } ['SetTargetZonePosition'](_0x640f30) {
                        const _0x541128 = _0x4b17c6;
                        this[_0x541128(0x1013)]['x'] = _0x5a98a3['default']['Core'][_0x541128(0x10f6)]['x'] + Math['cos'](_0x640f30) * this[_0x541128(0x8f8)], this[_0x541128(0x1013)]['y'] = _0x5a98a3['default']['Core'][_0x541128(0x10f6)]['y'] + Math['sin'](_0x640f30) * this['damageZoneDistance'];
                    } ['SetDamageZoneZonePosition'](_0x1c98f2) {
                        const _0x29ec14 = _0x4b17c6;
                        this['damageZone']['x'] = _0x5a98a3[_0x29ec14(0xd2c)]['Core'][_0x29ec14(0x10f6)]['x'] + Math[_0x29ec14(0xd7e)](_0x1c98f2) * this[_0x29ec14(0x8f8)], this['damageZone']['y'] = _0x5a98a3[_0x29ec14(0xd2c)][_0x29ec14(0x1043)][_0x29ec14(0x10f6)]['y'] + Math[_0x29ec14(0xc80)](_0x1c98f2) * this[_0x29ec14(0x8f8)];
                    } ['GetSpriteNames'](_0x5aa50c) {
                        const _0x5997a2 = _0x4b17c6;
                        return this[_0x5997a2(0x105b)]['anims']['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x0,
                            'prefix': 'ProjectileBird',
                            'suffix': '.png'
                        });
                    } ['Fire']() {
                        const _0x2d76d6 = _0x4b17c6;
                        if (!this['blockFire']) {
                            this[_0x2d76d6(0x7ea)] = this[_0x2d76d6(0x1d8)] / this['PAmount'], this[_0x2d76d6(0xb44)]['radius'] = this[_0x2d76d6(0x196b)], this['targets'] = [], this[_0x2d76d6(0x4f6)]['x'] = this['damageZone']['x'], this[_0x2d76d6(0x4f6)]['y'] = this[_0x2d76d6(0xb44)]['y'], this[_0x2d76d6(0x4f6)]['radius'] = this[_0x2d76d6(0xb44)]['radius'];
                            for (let _0x309210 = 0x0; _0x309210 < 0xc; _0x309210++) this['targets'][_0x2d76d6(0x1564)](Phaser[_0x2d76d6(0x10d2)][_0x2d76d6(0xf29)][_0x2d76d6(0x56e)](this[_0x2d76d6(0x4f6)]));
                            super['Fire']();
                        }
                    } ['Update'](_0x74a079) {
                        const _0x427ab3 = _0x4b17c6;
                        super['Update'](_0x74a079), this[_0x427ab3(0xb78)] += _0x74a079, this['angleTime'] += _0x74a079, Phaser['Math'][_0x427ab3(0x14c8)]['Squared'](this[_0x427ab3(0x105b)]['x'], this['sprite']['y'], _0x5a98a3[_0x427ab3(0xd2c)]['Core']['Player']['x'] + this[_0x427ab3(0xf2e)], _0x5a98a3[_0x427ab3(0xd2c)][_0x427ab3(0x1043)]['Player']['y']) > 0x1388 ? (this['_currentDirection']['x'] = _0x5a98a3['default'][_0x427ab3(0x1043)][_0x427ab3(0x10f6)]['x'] + this[_0x427ab3(0xf2e)] - this[_0x427ab3(0x105b)]['x'], this[_0x427ab3(0x70d)]['y'] = _0x5a98a3['default'][_0x427ab3(0x1043)][_0x427ab3(0x10f6)]['y'] - 0x18 - this[_0x427ab3(0x105b)]['y'] + this[_0x427ab3(0x134e)], this['_currentDirection']['normalize'](), this['sprite'][_0x427ab3(0xb8d)](this[_0x427ab3(0x70d)]['x'] < 0x0), this[_0x427ab3(0x105b)][_0x427ab3(0x19c8)](this[_0x427ab3(0x1a07)] * this[_0x427ab3(0x70d)]['x'] * _0x5a98a3[_0x427ab3(0xd2c)][_0x427ab3(0x1043)]['Player']['moveSpeed'], this[_0x427ab3(0x1a07)] * this['_currentDirection']['y'] * _0x5a98a3[_0x427ab3(0xd2c)][_0x427ab3(0x1043)]['Player']['moveSpeed'])) : this['sprite']['setVelocity'](0x23 * this[_0x427ab3(0x70d)]['x'], 0x23 * this[_0x427ab3(0x70d)]['y']);
                        var _0x10ed66 = 0.001 * (this['angleTime'] - this['rayDuration']) * this[_0x427ab3(0x712)];
                        this['SetTargetZonePosition'](_0x10ed66), _0x10ed66 = 0.001 * this['angleTime'] * this[_0x427ab3(0x712)], this[_0x427ab3(0x9bd)](_0x10ed66), this[_0x427ab3(0xb78)] >= this[_0x427ab3(0x16c3)] ? (this[_0x427ab3(0xb78)] = -this[_0x427ab3(0x16c3)] * this['delayBasedOnDuration'] * _0x5a98a3[_0x427ab3(0xd2c)][_0x427ab3(0x1043)][_0x427ab3(0x10f6)][_0x427ab3(0xe0e)], this[_0x427ab3(0x1a40)] = !0x0, this[_0x427ab3(0x1013)][_0x427ab3(0xe71)] = 0.1, this['totalTime'] >= this[_0x427ab3(0x16c3)] && (this[_0x427ab3(0xb78)] = 0x0, this[_0x427ab3(0x1a40)] = !0x1, this[_0x427ab3(0x1013)][_0x427ab3(0xe71)] = 0.5)) : this[_0x427ab3(0xb78)] > 0x0 && (this[_0x427ab3(0x1a40)] = !0x1, this[_0x427ab3(0x1013)]['alpha'] = 0.5);
                    } ['CleanUp']() {
                        const _0x28095e = _0x4b17c6;
                        super[_0x28095e(0xdb0)](), this[_0x28095e(0x105b)]['setVisible'](!0x1), this['damageZone'][_0x28095e(0x183f)](!0x1), this[_0x28095e(0x1013)]['setVisible'](!0x1);
                    } ['LevelUp']() {
                        const _0x49642c = _0x4b17c6;
                        let _0x566866 = super[_0x49642c(0x2ab)]();
                        return this[_0x49642c(0x3e4)] && this['counterWeapon']['LevelUp'](), _0x566866;
                    } ['ApplyLimitBreak'](_0x1f8ad4) {
                        const _0x1fde25 = _0x4b17c6;
                        let _0x2cbace = super['ApplyLimitBreak'](_0x1f8ad4);
                        return this[_0x1fde25(0x3e4)] && this[_0x1fde25(0x3e4)]['ApplyLimitBreak'](_0x1f8ad4), _0x2cbace;
                    }
                }
                _0x177a92['W_Silf'] = _0x9ecd02, _0x177a92['default'] = _0x9ecd02;
            };
