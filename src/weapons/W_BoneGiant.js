// Module 0x1df7
// Args: _0x27a028, _0x216f74, _0x4e290f

export default (_0x27a028, _0x216f74, _0x4e290f) => {
                'use strict';
                const _0x567f73 = a0_0x6932;
                var _0x15543e = this && this['__importDefault'] || function(_0x41a2de) {
                    const _0x1fb332 = _0x567f73;
                    return _0x41a2de && _0x41a2de[_0x1fb332(0x16f1)] ? _0x41a2de : {
                        'default': _0x41a2de
                    };
                };
                Object['defineProperty'](_0x216f74, '__esModule', {
                    'value': !0x0
                }), _0x216f74['W_BoneGiant'] = void 0x0;
                const _0x1f126d = _0x15543e(_0x4e290f(0x54e3)),
                    _0x17da32 = _0x15543e(_0x4e290f(0x5f07)),
                    _0x4fb3dc = _0x15543e(_0x4e290f(0x4a9d)),
                    _0x58041b = _0x15543e(_0x4e290f(0x41b2));
                class _0x3c7f79 extends _0x58041b['default'] {
                    constructor(_0x5ae045) {
                        const _0x13bf98 = _0x567f73;
                        super(_0x5ae045), this[_0x13bf98(0xb2c)] = {
                            'x': 0x34,
                            'y': -0x15
                        }, this[_0x13bf98(0xf9a)] = {
                            'x': -0x1a,
                            'y': -0x15
                        }, this[_0x13bf98(0x975)] = {
                            'x': 0xc,
                            'y': -0x1
                        }, this[_0x13bf98(0x1245)] = {
                            'x': 0x1e,
                            'y': -0x1
                        }, this[_0x13bf98(0x1369)] = {
                            'x': 0x15,
                            'y': 0xa
                        }, this[_0x13bf98(0xe14)] = {
                            'x': 0x4,
                            'y': 0x16
                        }, this[_0x13bf98(0x8a0)] = {
                            'x': 0x2c,
                            'y': 0xa
                        }, this[_0x13bf98(0x722)] = {
                            'x': 0x3d,
                            'y': 0x16
                        }, this[_0x13bf98(0xc6c)] = !0x1, this['AreArmsAttached'] = !0x0, this[_0x13bf98(0x11b0)] = 0x0, this[_0x13bf98(0x1f9)] = 0x6, this['topDepth'] = 0x0, this[_0x13bf98(0x1691)] = new _0x4fb3dc[(_0x13bf98(0xd2c))](_0x17da32[_0x13bf98(0xd2c)]['Core'][_0x13bf98(0x6d2)], _0x1f126d['default'][_0x13bf98(0x13dc)]), this[_0x13bf98(0xc6c)] = !0x1, this['isAttacking'] = !0x1;
                    } ['Fire']() {
                        const _0x5e1dde = _0x567f73;
                        super[_0x5e1dde(0x1754)](), this[_0x5e1dde(0x11b0)]++, this['firedTimes'] >= this[_0x5e1dde(0x1f9)] && (this[_0x5e1dde(0x932)] || (this['firedTimes'] = 0x0, this['SpinArms']()));
                    } ['FireOneBullet'](_0x18d103, _0x18a674, _0x199da7, _0x3eb702) {
                        const _0x562560 = _0x567f73;
                        var _0x4199e1 = this[_0x562560(0xc82)]['SpawnAt'](_0x18d103, _0x18a674, this, _0x199da7);
                        return _0x4199e1 && (_0x4199e1['accelOnBounce'] = !0x0), _0x4199e1;
                    } ['Update'](_0xad54ad) {
                        const _0x108ade = _0x567f73;
                        super[_0x108ade(0xa9f)](_0xad54ad), this[_0x108ade(0xc6c)] || (this['InitSkeleton'](), this[_0x108ade(0xc6c)] = !0x0), this['UpdateSkeleton']();
                    } ['InitSkeleton']() {
                        const _0x5c07bc = _0x567f73;
                        if (this['topDepth'] = _0x17da32['default'][_0x5c07bc(0x1043)][_0x5c07bc(0x6d2)]['renderer'][_0x5c07bc(0x140e)], this[_0x5c07bc(0x1691)] || (this['GiantArmPool'] = new _0x4fb3dc['default'](_0x17da32[_0x5c07bc(0xd2c)][_0x5c07bc(0x1043)][_0x5c07bc(0x6d2)], _0x1f126d[_0x5c07bc(0xd2c)][_0x5c07bc(0x141e)])), this[_0x5c07bc(0x1318)] || (this[_0x5c07bc(0x1318)] = this['GiantArmPool']['SpawnAt'](0x0, 0x0, this, 0x0), this[_0x5c07bc(0x1318)][_0x5c07bc(0x139)]()), this['backArm'] || (this[_0x5c07bc(0x1380)] = this[_0x5c07bc(0x1691)][_0x5c07bc(0xada)](0x0, 0x0, this, 0x1), this[_0x5c07bc(0x1380)]['Attach']()), !this['head']) {
                            this['head'] = _0x17da32[_0x5c07bc(0xd2c)][_0x5c07bc(0x1043)][_0x5c07bc(0x6d2)][_0x5c07bc(0x18bd)]['sprite'](0x0, 0x0, 'characters', 'Gash_head_i01.png');
                            const _0x34cbbf = this['head'][_0x5c07bc(0x183e)][_0x5c07bc(0x1756)]('characters', {
                                'start': 0x1,
                                'end': 0x5,
                                'zeroPad': 0x2,
                                'prefix': 'Gash_head_i',
                                'suffix': '.png'
                            });
                            this['head']['anims'][_0x5c07bc(0x6a8)]({
                                'key': 'idle',
                                'frames': _0x34cbbf,
                                'frameRate': 0x18,
                                'repeat': -0x1
                            }), this['head']['anims'][_0x5c07bc(0x902)]('idle');
                        }
                        this['torso'] || (this[_0x5c07bc(0xc88)] = _0x17da32['default']['Core']['scene'][_0x5c07bc(0x18bd)][_0x5c07bc(0x105b)](0x0, 0x0, 'characters', 'Gash_body_i01.png')), this[_0x5c07bc(0x1477)] || (this['halo'] = _0x17da32['default'][_0x5c07bc(0x1043)][_0x5c07bc(0x6d2)][_0x5c07bc(0x18bd)]['sprite'](0x0, 0x0, 'characters', 'Halo.png')[_0x5c07bc(0xb4a)](-0x1)['setOrigin'](0.5, 0x1));
                        let _0x5c11c3 = 0xe0e0ff,
                            _0x54c291 = 0xff;
                        this[_0x5c07bc(0x949)][_0x5c07bc(0xb34)](_0x5c11c3, _0x54c291, _0x5c11c3, _0x54c291)[_0x5c07bc(0xdab)](0.65)['setDepth'](-0x1)[_0x5c07bc(0xf8e)](0x0, 0x0), this[_0x5c07bc(0xc88)][_0x5c07bc(0xb34)](_0x5c11c3, _0x54c291, _0x5c11c3, _0x54c291)[_0x5c07bc(0xdab)](0.65)['setDepth'](-0x2)[_0x5c07bc(0xf8e)](0.5, 0x1), _0x17da32[_0x5c07bc(0xd2c)][_0x5c07bc(0x1043)][_0x5c07bc(0x6d2)]['physics']['add'][_0x5c07bc(0x13d7)](this[_0x5c07bc(0x1691)], _0x17da32['default']['Core']['Enemies'], this['onGiantArmOverlapsEnemy']['bind'](this)), _0x17da32[_0x5c07bc(0xd2c)]['Core']['scene'][_0x5c07bc(0x1585)]['add']['overlap'](this[_0x5c07bc(0x1691)], _0x17da32['default']['Core'][_0x5c07bc(0xa08)], this['onBulletOverlapsDestuctible'][_0x5c07bc(0xf7e)](this));
                    } ['UpdateSkeleton']() {
                        const _0x4eec96 = _0x567f73;
                        this[_0x4eec96(0xc88)]['copyPosition'](_0x17da32['default'][_0x4eec96(0x1043)][_0x4eec96(0x10f6)]), this['torso'][_0x4eec96(0x4d4)] = _0x17da32['default'][_0x4eec96(0x1043)][_0x4eec96(0x10f6)]['flipX'];
                        let _0x59a4de = this[_0x4eec96(0xc88)]['x'] - 0x1f,
                            _0x42100f = this[_0x4eec96(0xc88)]['y'] - 0x31;
                        this[_0x4eec96(0x949)][_0x4eec96(0xb8d)](this[_0x4eec96(0xc88)]['flipX']);
                        let _0x1535e8 = this['torso'][_0x4eec96(0x4d4)] ? this[_0x4eec96(0xf9a)]['x'] : this[_0x4eec96(0xb2c)]['x'];
                        this['head']['x'] = _0x59a4de + _0x1535e8, this[_0x4eec96(0x949)]['y'] = _0x42100f + this[_0x4eec96(0xb2c)]['y'];
                        let _0x3f14cb = this[_0x4eec96(0xc88)]['flipX'] ? this[_0x4eec96(0x1245)]['x'] : this['haloOffset']['x'];
                        this['halo']['x'] = this['head']['x'] + _0x3f14cb, this[_0x4eec96(0x1477)]['y'] = this[_0x4eec96(0x949)]['y'] + this[_0x4eec96(0x975)]['y'];
                        let _0x43699a = this['torso'][_0x4eec96(0x4d4)] ? -0x1 : 0x1;
                        this['AreArmsAttached'] ? (this[_0x4eec96(0x1318)][_0x4eec96(0x1967)][_0x4eec96(0x8a2)](_0x43699a, 0x1), this[_0x4eec96(0x1380)][_0x4eec96(0x1967)]['setScale'](_0x43699a, 0x1), this['frontArm'][_0x4eec96(0x1967)][_0x4eec96(0x16c6)] = 0x1, this[_0x4eec96(0x1380)][_0x4eec96(0x1967)][_0x4eec96(0x16c6)] = -0x3) : (this['frontArm']['displaySprite'][_0x4eec96(0x16c6)] = this[_0x4eec96(0x80e)], this['backArm'][_0x4eec96(0x1967)][_0x4eec96(0x16c6)] = this[_0x4eec96(0x80e)]);
                        let _0x273175 = this[_0x4eec96(0xc88)]['flipX'] ? this[_0x4eec96(0x1369)]['x'] : this['frontOffset']['x'];
                        this[_0x4eec96(0x1318)][_0x4eec96(0x19eb)]['x'] = _0x59a4de + _0x273175, this[_0x4eec96(0x1318)][_0x4eec96(0x19eb)]['y'] = _0x42100f + this[_0x4eec96(0x8a0)]['y'];
                        let _0x35c208 = this[_0x4eec96(0xc88)][_0x4eec96(0x4d4)] ? this['inv_backOffset']['x'] : this[_0x4eec96(0x722)]['x'];
                        this['backArm']['anchorPosition']['x'] = _0x59a4de + _0x35c208, this[_0x4eec96(0x1380)][_0x4eec96(0x19eb)]['y'] = _0x42100f + this[_0x4eec96(0x722)]['y'];
                    } ['AttachArms']() {
                        const _0x111ea9 = _0x567f73;
                        this[_0x111ea9(0x103d)] = !0x0, this['frontArm'][_0x111ea9(0x139)](), setTimeout(() => {
                            const _0x5cca60 = _0x111ea9;
                            this['backArm'][_0x5cca60(0x139)]();
                        }, 0x64), this[_0x111ea9(0x932)] = !0x1;
                    } ['DetachArms']() {
                        const _0x4d7970 = _0x567f73;
                        this['AreArmsAttached'] = !0x1, this['frontArm']['Detach'](0x168), setTimeout(() => {
                            const _0x2ad264 = a0_0x6932;
                            this['backArm']['Detach'](-0x168);
                        }, 0x64), _0x17da32[_0x4d7970(0xd2c)]['Core'][_0x4d7970(0x6d2)][_0x4d7970(0x915)][_0x4d7970(0x12b8)]({
                            'delay': Math[_0x4d7970(0x1981)](0xfa0, Math['floor'](this[_0x4d7970(0x16c3)])),
                            'callback': () => {
                                const _0x17dee6 = _0x4d7970;
                                this[_0x17dee6(0x1022)]();
                            }
                        });
                    } ['SpinArms']() {
                        const _0x628924 = _0x567f73;
                        this[_0x628924(0x932)] = !0x0, this[_0x628924(0x103d)] = !0x0;
                        let _0x257f30 = Math['max'](0x8, Math[_0x628924(0xe07)](this['PDuration'] / 0x1f4));
                        this[_0x628924(0x1318)][_0x628924(0x6eb)](-0x167, 0x1f4, _0x257f30), this[_0x628924(0x1380)][_0x628924(0x6eb)](0x167, 0x1f4, _0x257f30), _0x17da32[_0x628924(0xd2c)][_0x628924(0x1043)]['scene']['time']['addEvent']({
                            'delay': 0x1f4 * _0x257f30,
                            'callback': () => {
                                this['DetachArms']();
                            }
                        });
                    } ['onGiantArmOverlapsEnemy'](_0x348e91, _0x1113a1) {
                        const _0x1663ec = _0x567f73;
                        var _0x48e5b6 = _0x1113a1;
                        if (!_0x48e5b6[_0x1663ec(0xdae)] && !_0x348e91[_0x1663ec(0x1738)](_0x48e5b6)) {
                            let _0xb6a2b7 = this[_0x1663ec(0xaae)] * (0.5 * this['PAmount']);
                            _0x48e5b6[_0x1663ec(0x1112)](_0xb6a2b7, this['hitVFX'], this['knockback'], this['bulletType']), this[_0x1663ec(0xb3d)] += _0xb6a2b7;
                        }
                    }
                }
                _0x216f74['W_BoneGiant'] = _0x3c7f79, _0x216f74['default'] = _0x3c7f79;
            };
