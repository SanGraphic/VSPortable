// Module 0xa14d
// Args: _0x3871d1, _0x5c653c, _0x34cfd5

export default (_0x3871d1, _0x5c653c, _0x34cfd5) => {
                'use strict';
                const _0x3bfde1 = a0_0x6932;
                var _0x4e3d53 = this && this['__importDefault'] || function(_0x4668a4) {
                    return _0x4668a4 && _0x4668a4['__esModule'] ? _0x4668a4 : {
                        'default': _0x4668a4
                    };
                };
                Object['defineProperty'](_0x5c653c, '__esModule', {
                    'value': !0x0
                });
                const _0x5de472 = _0x4e3d53(_0x34cfd5(0x5f07)),
                    _0x550dcb = _0x4e3d53(_0x34cfd5(0x5103)),
                    _0x3129e0 = _0x4e3d53(_0x34cfd5(0x9b68));
                class _0x47fae3 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x123c94, _0x9f2fee, _0x32d87a, _0x1b3e87 = 'ball', _0x353147 = 0x0, _0x90332f, _0x1a2d66 = 0x0) {
                        const _0x3a6300 = _0x3bfde1;
                        super(_0x123c94['scene'], _0x9f2fee, _0x32d87a, _0x1b3e87, _0x353147), this[_0x3a6300(0xdae)] = !0x1, this[_0x3a6300(0x351)] = null, this[_0x3a6300(0x3d8)] = 0x0, this[_0x3a6300(0x1b4)] = 0x0, this[_0x3a6300(0x177d)] = !0x0, this[_0x3a6300(0x187a)] = !0x1, this[_0x3a6300(0xb1f)] = 0x1, this['objectsHit'] = [], this['pool'] = _0x123c94, this[_0x3a6300(0x4a1)] = _0x90332f, this[_0x3a6300(0x19c4)] = _0x1a2d66;
                    }
                    get['TrueSpeed']() {
                        const _0x31c231 = _0x3bfde1;
                        return this['weapon'][_0x31c231(0x712)] * _0x550dcb[_0x31c231(0xd2c)][_0x31c231(0x5d1)] * this['_speed'];
                    } ['OnTeleportOnCull']() {} ['OnRecycle']() {
                        const _0x2a9d46 = _0x3bfde1;
                        this[_0x2a9d46(0xdae)] = !0x1, this['objectsHit'] = [], this['setActive'](!0x0), this['body'][_0x2a9d46(0x543)] = !0x0, this['penetrating'] = this[_0x2a9d46(0x4a1)][_0x2a9d46(0x3d8)], this[_0x2a9d46(0x1b4)] = this[_0x2a9d46(0x4a1)]['PBounces'];
                    } ['HasAlreadyHitObject'](_0x4816d1) {
                        const _0x2d5a22 = _0x3bfde1,
                            _0x6dd7ef = this['objectsHit'][_0x2d5a22(0x1303)](_0x4816d1) > -0x1;
                        return _0x6dd7ef || (this['objectsHit']['push'](_0x4816d1), this[_0x2d5a22(0x257)](_0x4816d1)), _0x6dd7ef;
                    } ['OnHasHitAnObject'](_0xa7ea5d = null) {} ['OnHasHitWall'](_0x113c15) {
                        const _0x164796 = _0x3bfde1;
                        this[_0x164796(0x14fb)]();
                    } ['AimForNearestEnemy']() {
                        const _0x5db05b = _0x3bfde1;
                        var _0x2ac328 = this[_0x5db05b(0x6d2)]['physics'][_0x5db05b(0xfc4)](_0x5de472[_0x5db05b(0xd2c)][_0x5db05b(0x1043)][_0x5db05b(0x10f6)], _0x5de472[_0x5db05b(0xd2c)][_0x5db05b(0x1043)]['Enemies']);
                        return _0x2ac328 ? (this[_0x5db05b(0x535)](_0x2ac328), !0x0) : (this['ApplyPlayerFacingVelocity'](), !0x1);
                    } ['AimForRandomEnemy']() {
                        const _0x1061bf = _0x3bfde1;
                        var _0x2d0ea1 = Phaser[_0x1061bf(0x24f)]['RND']['pick'](_0x5de472[_0x1061bf(0xd2c)][_0x1061bf(0x1043)]['Enemies']);
                        return _0x2d0ea1 ? (this['ApplyInitialVelocity'](_0x2d0ea1), _0x2d0ea1) : (this['ApplyPlayerFacingVelocity'](), null);
                    } ['SetForRandomEnemy'](_0x3bd5e2) {
                        const _0xfb9a78 = _0x3bfde1;
                        var _0x1c6386 = Phaser[_0xfb9a78(0x24f)][_0xfb9a78(0x82a)]['pick'](_0x5de472['default']['Core'][_0xfb9a78(0x1a91)]);
                        if (!_0x1c6386) {
                            let _0x7d4999 = _0x5de472[_0xfb9a78(0xd2c)][_0xfb9a78(0x1043)]['Player']['lastFacedDirection'];
                            return _0x7d4999['normalize'](), 0x0 === _0x7d4999['x'] && 0x0 === _0x7d4999['y'] && (_0x7d4999['x'] = 0x1), _0x3bd5e2['x'] = this[_0xfb9a78(0xfbb)] * _0x7d4999['x'], _0x3bd5e2['y'] = this[_0xfb9a78(0xfbb)] * _0x7d4999['y'], null;
                        }
                        let _0x122a74 = new Phaser[(_0xfb9a78(0x24f))]['Vector2'](0x0, 0x0);
                        return _0x122a74['x'] = _0x1c6386[_0xfb9a78(0xcf9)]['position']['x'] - _0x5de472['default']['Core'][_0xfb9a78(0x10f6)]['x'], _0x122a74['y'] = _0x1c6386[_0xfb9a78(0xcf9)][_0xfb9a78(0x185d)]['y'] - _0x5de472['default'][_0xfb9a78(0x1043)][_0xfb9a78(0x10f6)]['y'], _0x122a74['normalize'](), _0x3bd5e2['x'] = this[_0xfb9a78(0xfbb)] * _0x122a74['x'], _0x3bd5e2['y'] = this['TrueSpeed'] * _0x122a74['y'], _0x1c6386;
                    } ['SetForNearestEnemy'](_0x3e1a72) {
                        const _0x121c92 = _0x3bfde1;
                        var _0x39f3ca = this[_0x121c92(0x6d2)][_0x121c92(0x1585)][_0x121c92(0xfc4)](_0x5de472[_0x121c92(0xd2c)]['Core']['Player'], _0x5de472[_0x121c92(0xd2c)]['Core']['Enemies']);
                        if (!_0x39f3ca) {
                            let _0x36d288 = _0x5de472['default'][_0x121c92(0x1043)][_0x121c92(0x10f6)][_0x121c92(0x115d)];
                            return _0x36d288[_0x121c92(0x183b)](), 0x0 === _0x36d288['x'] && 0x0 === _0x36d288['y'] && (_0x36d288['x'] = 0x1), _0x3e1a72['x'] = this[_0x121c92(0xfbb)] * _0x36d288['x'], _0x3e1a72['y'] = this['TrueSpeed'] * _0x36d288['y'], null;
                        }
                        let _0x2a8181 = new Phaser['Math'][(_0x121c92(0x1551))](0x0, 0x0);
                        return _0x2a8181['x'] = _0x39f3ca[_0x121c92(0xcf9)]['position']['x'] - _0x5de472['default'][_0x121c92(0x1043)][_0x121c92(0x10f6)]['x'], _0x2a8181['y'] = _0x39f3ca[_0x121c92(0xcf9)][_0x121c92(0x185d)]['y'] - _0x5de472[_0x121c92(0xd2c)][_0x121c92(0x1043)][_0x121c92(0x10f6)]['y'], _0x2a8181['normalize'](), _0x3e1a72['x'] = this[_0x121c92(0xfbb)] * _0x2a8181['x'], _0x3e1a72['y'] = this[_0x121c92(0xfbb)] * _0x2a8181['y'], _0x39f3ca;
                    } ['AimForRandomeEnemyInRect'](_0x481e20) {
                        const _0x5bcd43 = _0x3bfde1;
                        var _0x20d7c4 = new Array();
                        for (let _0x23d09d = 0x0; _0x23d09d < _0x5de472[_0x5bcd43(0xd2c)]['Core'][_0x5bcd43(0x1a91)][_0x5bcd43(0xed9)] && _0x20d7c4[_0x5bcd43(0xed9)] < 0xa; _0x23d09d++) {
                            const _0x463cf6 = _0x5de472[_0x5bcd43(0xd2c)][_0x5bcd43(0x1043)]['Enemies'][_0x23d09d];
                            _0x481e20[_0x5bcd43(0x1780)](_0x463cf6['x'], _0x463cf6['y']) && _0x20d7c4[_0x5bcd43(0x1564)](_0x463cf6);
                        }
                        return _0x20d7c4[_0x5bcd43(0xed9)] <= 0x0 ? null : Phaser[_0x5bcd43(0x24f)]['RND'][_0x5bcd43(0x198c)](_0x20d7c4);
                    } ['AimForRandomEnemyInScreen'](_0x50a5c9) {
                        const _0x47ad19 = _0x3bfde1;
                        var _0x42a1b5 = this[_0x47ad19(0x6d2)]['physics']['overlapRect'](_0x50a5c9['x'], _0x50a5c9['y'], _0x50a5c9[_0x47ad19(0x173c)], _0x50a5c9['height']);
                        return _0x42a1b5 = _0x42a1b5[_0x47ad19(0x9d4)](_0xa752eb => _0xa752eb[_0x47ad19(0x351)] && !_0xa752eb['owner'][_0x47ad19(0xdae)]), Phaser[_0x47ad19(0x24f)]['RND'][_0x47ad19(0x198c)](_0x42a1b5);
                    } ['AngleFromVelocityRadians'](_0x295a61) {
                        const _0x441c53 = _0x3bfde1;
                        var _0x554c67 = Phaser[_0x441c53(0x24f)]['Vector2']['RIGHT'];
                        return Math['atan2'](_0x295a61['y'] - _0x554c67['y'], _0x295a61['x'] - _0x554c67['x']);
                    } ['AngleFromTargetRadians'](_0x3c19b0 = null) {
                        const _0x4958bb = _0x3bfde1;
                        _0x3c19b0 || (_0x3c19b0 = Phaser[_0x4958bb(0x24f)][_0x4958bb(0x82a)]['pick'](_0x5de472['default'][_0x4958bb(0x1043)]['Enemies']));
                        var _0x527751 = _0x5de472['default']['Core'][_0x4958bb(0x10f6)]['body']['position'];
                        return Math['atan2'](_0x3c19b0['y'] - _0x527751['y'], _0x3c19b0['x'] - _0x527751['x']);
                    } ['ApplyInitialVelocity'](_0x5e5cfa, _0x10e522 = !0x0) {
                        const _0x13dd9d = _0x3bfde1;
                        let _0x40b5c4 = new Phaser[(_0x13dd9d(0x24f))][(_0x13dd9d(0x1551))](0x0, 0x0);
                        _0x40b5c4['x'] = _0x5e5cfa[_0x13dd9d(0xcf9)]['position']['x'] - _0x5de472[_0x13dd9d(0xd2c)][_0x13dd9d(0x1043)][_0x13dd9d(0x10f6)]['x'], _0x40b5c4['y'] = _0x5e5cfa['body']['position']['y'] - _0x5de472[_0x13dd9d(0xd2c)]['Core'][_0x13dd9d(0x10f6)]['y'], _0x40b5c4['normalize'](), this['setVelocity'](this[_0x13dd9d(0xfbb)] * _0x40b5c4['x'], this[_0x13dd9d(0xfbb)] * _0x40b5c4['y']), _0x10e522 && this[_0x13dd9d(0x9b5)](Phaser[_0x13dd9d(0x24f)][_0x13dd9d(0x1470)](this[_0x13dd9d(0x7c6)](this['body']['velocity'])));
                    } ['ApplyPlayerFacingVelocity'](_0x6da852 = !0x0) {
                        const _0x4e6c7c = _0x3bfde1;
                        let _0x1a2328 = _0x5de472[_0x4e6c7c(0xd2c)]['Core']['Player'][_0x4e6c7c(0x115d)];
                        _0x1a2328['normalize'](), 0x0 === _0x1a2328['x'] && 0x0 === _0x1a2328['y'] && (_0x1a2328['x'] = 0x1), this[_0x4e6c7c(0x19c8)](this['TrueSpeed'] * _0x1a2328['x'], this[_0x4e6c7c(0xfbb)] * _0x1a2328['y']), _0x6da852 && this['setAngle'](Phaser[_0x4e6c7c(0x24f)][_0x4e6c7c(0x1470)](this[_0x4e6c7c(0x7c6)](this[_0x4e6c7c(0xcf9)][_0x4e6c7c(0xf4e)])));
                    } ['ApplyInversePlayerFacingVelocity'](_0x21bf7a = !0x0) {
                        const _0x41f3c4 = _0x3bfde1;
                        let _0x3c899c = _0x5de472['default']['Core']['Player']['lastFacedDirection'];
                        _0x3c899c['normalize'](), 0x0 === _0x3c899c['x'] && 0x0 === _0x3c899c['y'] && (_0x3c899c['x'] = 0x1), this[_0x41f3c4(0x19c8)](this['TrueSpeed'] * -_0x3c899c['x'], this[_0x41f3c4(0xfbb)] * -_0x3c899c['y']), _0x21bf7a && this[_0x41f3c4(0x9b5)](Phaser[_0x41f3c4(0x24f)][_0x41f3c4(0x1470)](this[_0x41f3c4(0x7c6)](this['body']['velocity'])));
                    } ['GetPlayerFacingVelocity']() {
                        const _0x5c0b65 = _0x3bfde1;
                        let _0x2243ed = _0x5de472[_0x5c0b65(0xd2c)]['Core'][_0x5c0b65(0x10f6)][_0x5c0b65(0x115d)];
                        return _0x2243ed[_0x5c0b65(0x183b)](), 0x0 === _0x2243ed['x'] && 0x0 === _0x2243ed['y'] && (_0x2243ed['x'] = 0x1), _0x2243ed;
                    } ['DeSpawn']() {
                        const _0x12dd59 = _0x3bfde1;
                        this['setActive'](!0x1), this[_0x12dd59(0xcf9)]['enable'] = !0x1, this[_0x12dd59(0xc82)][_0x12dd59(0x4ed)](this);
                    } ['SetTarget'](_0x4a35af) {
                        this['target'] = _0x4a35af;
                    } ['SetNullTarget']() {
                        const _0x1b461e = _0x3bfde1;
                        this[_0x1b461e(0x18a7)] = null;
                    } ['Init'](_0x25c6fa = -0x3e8, _0xf52bde = -0x3e8) {
                        const _0x1bc0e3 = _0x3bfde1;
                        this[_0x1bc0e3(0x726)](_0x25c6fa, _0xf52bde), this[_0x1bc0e3(0x6d2)]['physics']['add'][_0x1bc0e3(0x1a88)](this), this[_0x1bc0e3(0x5ce)]();
                    } ['OnDeathAnimationComplete']() {
                        const _0x308887 = _0x3bfde1;
                        this[_0x308887(0x17cc)]();
                    } ['die']() {
                        const _0x5e0b12 = _0x3bfde1;
                        this[_0x5e0b12(0xdae)] = !0x0, this[_0x5e0b12(0x35a)] = !0x1, this[_0x5e0b12(0xcf9)]['enable'] = !0x1;
                    } ['OnDeathEnd']() {
                        const _0x5e4d72 = _0x3bfde1;
                        this[_0x5e4d72(0xc82)][_0x5e4d72(0x4ed)](this);
                    } ['Update'](_0x1487f7 = 0x0) {} ['TryFreeze'](_0x32f40a) {
                        const _0x3caccb = _0x3bfde1;
                        let _0x59fc41 = this['weapon'][_0x3caccb(0x19d5)]();
                        _0x59fc41 && (_0x32f40a[_0x3caccb(0x48a)] && (_0x59fc41 = _0x32f40a[_0x3caccb(0x48a)](this['weapon']['PDuration'], this[_0x3caccb(0x4a1)][_0x3caccb(0x10e8)])), _0x59fc41 && _0x5de472['default']['Core']['Arcanas'][_0x3caccb(0x15e7)]['indexOf'](_0x3129e0['default'][_0x3caccb(0x529)]) > -0x1 && _0x5de472[_0x3caccb(0xd2c)][_0x3caccb(0x1043)][_0x3caccb(0x1884)]['TriggerCold'](_0x32f40a['x'], _0x32f40a['y']));
                    }
                }
                _0x5c653c['default'] = _0x47fae3;
            };
