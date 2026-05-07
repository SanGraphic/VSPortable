// Module 0xbf1f
// Args: _0x49a71f, _0x49bacd, _0x3d9169

export default (_0x49a71f, _0x49bacd, _0x3d9169) => {
                'use strict';
                const _0x348cd5 = a0_0x6932;
                var _0x2e421b = this && this['__importDefault'] || function(_0x27771b) {
                    const _0x1f3513 = _0x348cd5;
                    return _0x27771b && _0x27771b[_0x1f3513(0x16f1)] ? _0x27771b : {
                        'default': _0x27771b
                    };
                };
                Object['defineProperty'](_0x49bacd, '__esModule', {
                    'value': !0x0
                });
                const _0x35bc90 = _0x2e421b(_0x3d9169(0x5f07)),
                    _0x32f31e = _0x2e421b(_0x3d9169(0xc42e)),
                    _0x39427e = _0x2e421b(_0x3d9169(0x5103)),
                    _0x498b2b = _0x2e421b(_0x3d9169(0x54e3)),
                    _0x5b6648 = _0x2e421b(_0x3d9169(0x3107)),
                    _0x289315 = _0x3d9169(0x18304),
                    _0x32b43d = _0x3d9169(0x15ee2);
                class _0x4e54e5 extends _0x32b43d['PickupGuarded'] {
                    constructor(_0x5114b9, _0x5e0236, _0x23d944) {
                        const _0x502ef8 = _0x348cd5;
                        super(_0x5114b9, _0x5e0236, _0x23d944, _0x32f31e[_0x502ef8(0xd2c)]['WEAPON']), this['weaponType'] = _0x498b2b['default']['VOID'], this[_0x502ef8(0x1593)] = 0xc8, this[_0x502ef8(0xb78)] = 0x64, this[_0x502ef8(0x1935)] = 0x1, this[_0x502ef8(0x1439)] = !0x0, _0x35bc90['default'][_0x502ef8(0x1043)]['scene'][_0x502ef8(0x18bd)][_0x502ef8(0x1a88)](this), this[_0x502ef8(0x8a2)](_0x39427e['default'][_0x502ef8(0x15db)]), this[_0x502ef8(0xc6e)] = !0x0, this['shadow'] = new Phaser[(_0x502ef8(0xbf2))][(_0x502ef8(0xa97))](_0x35bc90['default'][_0x502ef8(0x1043)]['scene'], _0x5e0236, _0x23d944, 'items', 'ShadowSpot.png'), this['glow'] = new Phaser[(_0x502ef8(0xbf2))]['Sprite'](_0x35bc90[_0x502ef8(0xd2c)]['Core'][_0x502ef8(0x6d2)], _0x5e0236, _0x23d944, 'vfx', 'round.png'), this[_0x502ef8(0x1abc)] = this[_0x502ef8(0x6d2)][_0x502ef8(0x18bd)]['sprite'](_0x5e0236, _0x23d944, 'UI', 'arrow_01.png'), this['Cursor'][_0x502ef8(0xb4a)](0x270e), this[_0x502ef8(0x1abc)]['setScale'](0x2), this[_0x502ef8(0x1abc)]['setAlpha'](0.75), this[_0x502ef8(0x1abc)][_0x502ef8(0x11c7)](_0x289315[_0x502ef8(0x10fc)]['ADD']), this[_0x502ef8(0x17a0)] = this['scene']['add']['sprite'](_0x5e0236, _0x23d944, '', ''), this['CursorIcon'][_0x502ef8(0xb4a)](0x270f), this['CursorIcon'][_0x502ef8(0x8a2)](0x1), this['CursorIcon']['setAlpha'](0x1);
                        const _0x1c9d7d = this[_0x502ef8(0x183e)][_0x502ef8(0x1756)]('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrow_',
                            'suffix': '.png'
                        });
                        this[_0x502ef8(0x1abc)][_0x502ef8(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x1c9d7d,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x502ef8(0x1abc)]['play']('idle');
                    } ['OnRecycle']() {
                        const _0x38cfe0 = _0x348cd5;
                        var _0x306081, _0x16672b, _0x44ad41;
                        super['OnRecycle'](), this[_0x38cfe0(0x3f3)] = 0x0, null === (_0x306081 = this['floatTween']) || void 0x0 === _0x306081 || _0x306081[_0x38cfe0(0x1a34)](), this['floatTween'] && this[_0x38cfe0(0x6d2)]['tweens'][_0x38cfe0(0x393)](this[_0x38cfe0(0x781)]), this[_0x38cfe0(0x781)] = this[_0x38cfe0(0x6d2)][_0x38cfe0(0x12a1)][_0x38cfe0(0x18bd)]({
                            'targets': this,
                            'y': this['y'] - 0x8,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), null === (_0x16672b = this[_0x38cfe0(0xb2b)]) || void 0x0 === _0x16672b || _0x16672b[_0x38cfe0(0x1a34)](), this['shadowTween'] && this[_0x38cfe0(0x6d2)][_0x38cfe0(0x12a1)][_0x38cfe0(0x393)](this[_0x38cfe0(0xb2b)]), this[_0x38cfe0(0xb2b)] = this[_0x38cfe0(0x6d2)]['tweens']['add']({
                            'targets': this[_0x38cfe0(0xe0f)],
                            'scale': 0.75,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), this[_0x38cfe0(0x6d2)][_0x38cfe0(0x18bd)]['existing'](this[_0x38cfe0(0xe0f)]), this[_0x38cfe0(0xe0f)][_0x38cfe0(0x726)](this['x'], this['y']), this[_0x38cfe0(0xe0f)]['setScale'](0x1), this['shadow']['setAlpha'](0.5), this['scene'][_0x38cfe0(0x18bd)]['existing'](this[_0x38cfe0(0x1a6f)]), this['glow'][_0x38cfe0(0x726)](this['x'], this['y']), this[_0x38cfe0(0x1a6f)][_0x38cfe0(0x11c7)](_0x289315['BlendModes'][_0x38cfe0(0x1811)]), this['glow'][_0x38cfe0(0xdab)](0.5), null === (_0x44ad41 = this[_0x38cfe0(0x536)]) || void 0x0 === _0x44ad41 || _0x44ad41['stop'](), this['glowTween'] && this['scene']['tweens'][_0x38cfe0(0x393)](this[_0x38cfe0(0x536)]), this[_0x38cfe0(0x536)] = this['scene']['tweens']['add']({
                            'targets': this[_0x38cfe0(0x1a6f)],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'loop': -0x1,
                            'yoyo': !0x0
                        });
                    } ['DeSpawn']() {
                        const _0x4e9673 = _0x348cd5;
                        super[_0x4e9673(0x14fb)](), this[_0x4e9673(0x781)][_0x4e9673(0x393)](), this[_0x4e9673(0xb2b)][_0x4e9673(0x393)](), this[_0x4e9673(0x6d2)]['tweens'][_0x4e9673(0x393)](this['shadowTween']), this['scene'][_0x4e9673(0x12a1)]['remove'](this['floatTween']), this[_0x4e9673(0x6d2)][_0x4e9673(0x3fe)][_0x4e9673(0x393)](this['shadow']), this[_0x4e9673(0x6d2)][_0x4e9673(0x3fe)][_0x4e9673(0x393)](this[_0x4e9673(0x1a6f)]), this[_0x4e9673(0x1abc)][_0x4e9673(0x183f)](!0x1), this['CursorIcon'][_0x4e9673(0x183f)](!0x1);
                    } ['stopFloat']() {
                        const _0x1b813f = _0x348cd5;
                        var _0x260f76;
                        null === (_0x260f76 = this['floatTween']) || void 0x0 === _0x260f76 || _0x260f76[_0x1b813f(0x1a34)](), this[_0x1b813f(0x781)] && this[_0x1b813f(0x6d2)]['tweens'][_0x1b813f(0x393)](this[_0x1b813f(0x781)]);
                    } ['resumeFloat']() {
                        const _0x1b413d = _0x348cd5;
                        var _0x1d574e, _0x45e7e4;
                        null === (_0x1d574e = this[_0x1b413d(0x781)]) || void 0x0 === _0x1d574e || _0x1d574e['stop'](), this[_0x1b413d(0x781)] && this[_0x1b413d(0x6d2)]['tweens'][_0x1b413d(0x393)](this[_0x1b413d(0x781)]), this[_0x1b413d(0x781)] = this[_0x1b413d(0x6d2)][_0x1b413d(0x12a1)][_0x1b413d(0x18bd)]({
                            'targets': this,
                            'y': this['y'] - 0x8,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), null === (_0x45e7e4 = this['shadow']) || void 0x0 === _0x45e7e4 || _0x45e7e4['setPosition'](this['x'], this['y']);
                    } ['setPosition'](_0x10a99b, _0x2db47b, _0x14699c = 0x0, _0x1f93d9 = 0x0) {
                        const _0x3ba6b3 = _0x348cd5;
                        var _0x218532, _0x10ff84, _0x1f2fd3;
                        return this['x'] = _0x10a99b, this['y'] = _0x2db47b, null === (_0x218532 = this['shadow']) || void 0x0 === _0x218532 || _0x218532['setPosition'](this['x'], this['y']), null === (_0x10ff84 = this[_0x3ba6b3(0x1a6f)]) || void 0x0 === _0x10ff84 || _0x10ff84[_0x3ba6b3(0x726)](this['x'], this['y']), null === (_0x1f2fd3 = this[_0x3ba6b3(0x781)]) || void 0x0 === _0x1f2fd3 || _0x1f2fd3[_0x3ba6b3(0x1a34)](), this['floatTween'] && this['scene']['tweens'][_0x3ba6b3(0x393)](this['floatTween']), this['floatTween'] = this[_0x3ba6b3(0x6d2)]['tweens'][_0x3ba6b3(0x18bd)]({
                            'targets': this,
                            'y': this['y'] - 0x8,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), super[_0x3ba6b3(0x726)](_0x10a99b, _0x2db47b);
                    } ['Update'](_0x1adb71) {
                        const _0x45dade = _0x348cd5;
                        super[_0x45dade(0xa9f)](_0x1adb71), this[_0x45dade(0x1a6f)][_0x45dade(0x726)](this['x'], this['y']);
                        let _0x3e2ea1 = this['scene']['renderer'][_0x45dade(0x140e)];
                        if (this[_0x45dade(0xb4a)](_0x3e2ea1), this[_0x45dade(0xe0f)]['setDepth'](_0x3e2ea1 - 0x1), this[_0x45dade(0x1a6f)][_0x45dade(0xb4a)](_0x3e2ea1), this[_0x45dade(0xb78)] += _0x1adb71, this[_0x45dade(0xb78)] > this[_0x45dade(0x1593)] && (this['totalTime'] = 0x0, _0x35bc90[_0x45dade(0xd2c)][_0x45dade(0x1043)][_0x45dade(0x10c9)](this['x'], this['y'])), this['colorValue'] += 0.1, this['glow'][_0x45dade(0xb34)](Phaser[_0x45dade(0xa82)][_0x45dade(0x150d)][_0x45dade(0xd9d)](0xff * Math['abs'](Math[_0x45dade(0xc80)](this['colorValue'])), 0xff * Math[_0x45dade(0x19db)](Math[_0x45dade(0xd7e)](0.5 * this[_0x45dade(0x3f3)])), 0xc8 + 0x37 * Math['abs'](Math[_0x45dade(0xd7e)](this[_0x45dade(0x3f3)])))), Math[_0x45dade(0x19db)](this['x'] - _0x35bc90[_0x45dade(0xd2c)]['Core'][_0x45dade(0x10f6)]['x']) < 0.5 * this['scene']['renderer'][_0x45dade(0x173c)] && Math['abs'](this['y'] - _0x35bc90[_0x45dade(0xd2c)][_0x45dade(0x1043)][_0x45dade(0x10f6)]['y']) < 0.5 * this[_0x45dade(0x6d2)][_0x45dade(0x12f9)][_0x45dade(0x140e)] || !_0x35bc90[_0x45dade(0xd2c)]['Core'][_0x45dade(0x14d8)][_0x45dade(0xbb8)]) this['Cursor']['setVisible'](!0x1), this[_0x45dade(0x17a0)][_0x45dade(0x183f)](!0x1);
                        else {
                            var _0x373833 = this['AngleFromTargetRadians'](this);
                            this[_0x45dade(0x1abc)][_0x45dade(0x9b5)](Phaser['Math'][_0x45dade(0x1470)](_0x373833)), this['Cursor'][_0x45dade(0xf01)](_0x35bc90['default'][_0x45dade(0x1043)]['Player']), this[_0x45dade(0x1abc)]['x'] += 0.45 * Math[_0x45dade(0xd7e)](_0x373833) * this[_0x45dade(0x6d2)]['renderer'][_0x45dade(0x173c)], this['Cursor']['y'] += 0.45 * Math[_0x45dade(0xc80)](_0x373833) * this['scene'][_0x45dade(0x12f9)][_0x45dade(0x140e)], this[_0x45dade(0x1abc)][_0x45dade(0xdab)](0.75), this['Cursor'][_0x45dade(0x11c7)](_0x289315[_0x45dade(0x10fc)][_0x45dade(0x1811)]), this[_0x45dade(0x1abc)]['setVisible'](!0x0), this['CursorIcon'][_0x45dade(0xf01)](this[_0x45dade(0x1abc)]), this['CursorIcon']['setVisible'](!0x0);
                        }
                        this['despawnOnUnavailable'] && -0x1 === _0x35bc90[_0x45dade(0xd2c)][_0x45dade(0x1043)]['LevelUpFactory']['WeaponStore'][_0x45dade(0x1303)](this[_0x45dade(0x15f6)]) && (this['owner'] && this['owner'][_0x45dade(0x1000)](this), this[_0x45dade(0x14fb)]());
                        let _0x172842 = this['safeXY'](this['x'], this['y']);
                        _0x172842['x'] == this['x'] && _0x172842['y'] == this['y'] || (this['x'] = _0x172842['x'], this['y'] = _0x172842['y'], this['resumeFloat']());
                    } ['SetWeaponType'](_0x160133) {
                        const _0x9374f = _0x348cd5;
                        var _0x25459a = _0x5b6648['default'][_0x160133][0x0];
                        this['setTexture'](_0x25459a['texture'], _0x25459a[_0x9374f(0x8e3)]), this['CursorIcon'][_0x9374f(0x994)](_0x25459a['texture'], _0x25459a[_0x9374f(0x8e3)]), this[_0x9374f(0x15f6)] = _0x160133;
                    } ['TriggerOnGet']() {
                        const _0x57382f = _0x348cd5;
                        this[_0x57382f(0x15f6)] !== _0x498b2b['default'][_0x57382f(0x6d0)] && this['weaponType'] !== _0x498b2b[_0x57382f(0xd2c)][_0x57382f(0x1690)] && this['weaponType'] !== _0x498b2b[_0x57382f(0xd2c)][_0x57382f(0x18a8)] && this[_0x57382f(0x15f6)] !== _0x498b2b[_0x57382f(0xd2c)][_0x57382f(0x7bf)] || (this[_0x57382f(0x460)] = !0x0);
                    } ['GetTaken']() {
                        const _0x127d60 = _0x348cd5;
                        this[_0x127d60(0x210)] || (this['triggerOnGet'] && this['TriggerSpawn'](), this['Cursor'][_0x127d60(0x183f)](!0x1), this[_0x127d60(0x17a0)][_0x127d60(0x183f)](!0x1), _0x35bc90['default'][_0x127d60(0x1043)]['FoundWeaponQueue'][_0x127d60(0x1564)](this[_0x127d60(0x15f6)]), super[_0x127d60(0x437)]());
                    }
                }
                _0x49bacd['default'] = _0x4e54e5;
            };
