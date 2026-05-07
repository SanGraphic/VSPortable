// Module 0x140bb
// Args: _0x399cd3, _0x2c2cf5, _0x38e6bc

export default (_0x399cd3, _0x2c2cf5, _0x38e6bc) => {
                'use strict';
                const _0x137f1c = a0_0x6932;
                var _0x3fefa2 = this && this['__importDefault'] || function(_0x5b570a) {
                    return _0x5b570a && _0x5b570a['__esModule'] ? _0x5b570a : {
                        'default': _0x5b570a
                    };
                };
                Object['defineProperty'](_0x2c2cf5, '__esModule', {
                    'value': !0x0
                }), _0x2c2cf5['W_Guns'] = void 0x0;
                const _0x548ce2 = _0x3fefa2(_0x38e6bc(0x5f07)),
                    _0x1c5303 = _0x3fefa2(_0x38e6bc(0x54e3)),
                    _0x16c740 = _0x3fefa2(_0x38e6bc(0xe49a)),
                    _0x3d77a4 = _0x3fefa2(_0x38e6bc(0x9b68));
                class _0x1da829 extends _0x16c740['default'] {
                    constructor(_0x56f0f1) {
                        const _0xebc1f1 = _0x137f1c;
                        super(_0x56f0f1), this[_0xebc1f1(0x17fa)] = !0x1, this[_0xebc1f1(0xeeb)] = _0x1c5303['default'][_0xebc1f1(0x1231)], this[_0xebc1f1(0x203)] = _0x1c5303[_0xebc1f1(0xd2c)][_0xebc1f1(0x1a3b)], this['critChancesArray'] = this['MakeChanceArray'](0x3e8), this[_0xebc1f1(0xdfc)] = _0x1c5303['default'][_0xebc1f1(0x1167)];
                    } ['CheckArcanas']() {
                        const _0x3300f3 = _0x137f1c;
                        if (_0x548ce2[_0x3300f3(0xd2c)][_0x3300f3(0x1043)]['Arcanas'][_0x3300f3(0x15e7)]['indexOf'](_0x3d77a4[_0x3300f3(0xd2c)][_0x3300f3(0x663)]) > -0x1) {
                            this[_0x3300f3(0x3d8)] = 0xffff, this[_0x3300f3(0x1985)] = 0x1;
                            for (let _0x4bac37 = 0x0; _0x4bac37 < this[_0x3300f3(0x885)][_0x3300f3(0xed9)]; _0x4bac37++) {
                                const _0x5a9fef = this['wallsColliders'][_0x4bac37];
                                _0x548ce2[_0x3300f3(0xd2c)]['Core']['scene']['physics'][_0x3300f3(0x1cf)]['removeCollider'](_0x5a9fef);
                            }
                            this[_0x3300f3(0xc69)] = !0x1;
                        }
                        if (_0x548ce2[_0x3300f3(0xd2c)][_0x3300f3(0x1043)][_0x3300f3(0x1884)]['ActiveArcanas'][_0x3300f3(0x1303)](_0x3d77a4[_0x3300f3(0xd2c)][_0x3300f3(0x299)]) > -0x1 && _0x548ce2[_0x3300f3(0xd2c)][_0x3300f3(0x1043)][_0x3300f3(0x1884)][_0x3300f3(0xe86)] && _0x548ce2['default'][_0x3300f3(0x1043)][_0x3300f3(0x1884)]['FireExplosionWeapon']['power'] < 0.5 * this[_0x3300f3(0x31f)] && (_0x548ce2[_0x3300f3(0xd2c)][_0x3300f3(0x1043)][_0x3300f3(0x1884)][_0x3300f3(0xe86)]['power'] = 0.5 * this['power']), _0x548ce2['default'][_0x3300f3(0x1043)]['Arcanas']['ActiveArcanas'][_0x3300f3(0x1303)](_0x3d77a4['default'][_0x3300f3(0x19a1)]) > -0x1) {
                            if (_0x548ce2['default'][_0x3300f3(0x1043)][_0x3300f3(0x164d)][_0x3300f3(0x1e6)](_0x24f06c => _0x24f06c[_0x3300f3(0x14e)] === this['counterWeaponType'])) return;
                            let _0x65d18a = _0x548ce2['default']['Core'][_0x3300f3(0x117d)](this[_0x3300f3(0xeeb)]);
                            for (this[_0x3300f3(0x3e4)] = _0x65d18a; _0x65d18a[_0x3300f3(0x5e3)] < this['level'];) _0x65d18a[_0x3300f3(0x2ab)]();
                        }
                        super[_0x3300f3(0x1ce)]();
                    }
                    get['PBounces']() {
                        const _0x69f064 = _0x137f1c;
                        return this[_0x69f064(0x1985)] + this[_0x69f064(0x1b4)];
                    } ['Fire']() {
                        const _0x5a2dab = _0x137f1c;
                        if (super['Fire'](), !this[_0x5a2dab(0x17fa)]) {
                            let _0x4c0baf = _0x548ce2['default'][_0x5a2dab(0x1043)][_0x5a2dab(0x506)]['find'](_0x335473 => _0x335473[_0x5a2dab(0x14e)] === this['secondSetType']);
                            _0x4c0baf && (this['hasSecondSet'] = !0x0, this[_0x5a2dab(0x34b)] = _0x4c0baf, this[_0x5a2dab(0x34b)]['CleanUp'](), this[_0x5a2dab(0x34b)][_0x5a2dab(0x839)] = function() {});
                        }
                        this[_0x5a2dab(0x34b)] && _0x548ce2[_0x5a2dab(0xd2c)][_0x5a2dab(0x1043)][_0x5a2dab(0x6d2)][_0x5a2dab(0x915)]['addEvent']({
                            'delay': 0.5 * this[_0x5a2dab(0x7ea)],
                            'callback': () => {
                                const _0x1fcc63 = _0x5a2dab;
                                this[_0x1fcc63(0x34b)][_0x1fcc63(0x1754)]();
                            }
                        });
                    } ['FireOneBullet'](_0x5a5192, _0x44e008, _0x155f91, _0x456a20) {
                        const _0x4a1514 = _0x137f1c;
                        for (let _0x596a01 = 0x0; _0x596a01 < 0x4; _0x596a01++) {
                            var _0x41a71a = this[_0x4a1514(0xc82)][_0x4a1514(0xada)](_0x5a5192, _0x44e008, this, _0x596a01);
                            _0x456a20 && _0x41a71a && _0x41a71a['SetTarget'](_0x456a20);
                        }
                        return _0x41a71a;
                    } ['onSecondaryBulletOverlapsEnemy'](_0x54ba2c, _0x598e99) {
                        const _0x3518c1 = _0x137f1c;
                        var _0x5b0761 = _0x598e99;
                        if (!_0x5b0761['isDead'] && !_0x54ba2c['HasAlreadyHitObject'](_0x5b0761)) {
                            let _0x292b5e = 0.5 * this['PPower'];
                            _0x5b0761[_0x3518c1(0x1112)](_0x292b5e, this[_0x3518c1(0x347)], this['knockback'], this[_0x3518c1(0x14e)]), this[_0x3518c1(0xb3d)] += _0x292b5e;
                        }
                    } ['LevelUp']() {
                        const _0x320aaa = _0x137f1c;
                        let _0x5996c8 = super[_0x320aaa(0x2ab)]();
                        return this['counterWeapon'] && this['counterWeapon']['LevelUp'](), _0x5996c8;
                    }
                }
                _0x2c2cf5['W_Guns'] = _0x1da829, _0x2c2cf5['default'] = _0x1da829;
            };
