// Module 0x185e5
// Args: _0x438c6c, _0xdcd86f, _0x2f4ba6

export default (_0x438c6c, _0xdcd86f, _0x2f4ba6) => {
                'use strict';
                const _0x5637dd = a0_0x6932;
                var _0x41661e = this && this['__importDefault'] || function(_0xfd77f) {
                    return _0xfd77f && _0xfd77f['__esModule'] ? _0xfd77f : {
                        'default': _0xfd77f
                    };
                };
                Object['defineProperty'](_0xdcd86f, '__esModule', {
                    'value': !0x0
                });
                const _0x10efe5 = _0x41661e(_0x2f4ba6(0x9bda)),
                    _0x5176fb = _0x41661e(_0x2f4ba6(0x5103)),
                    _0x103cf5 = _0x41661e(_0x2f4ba6(0x5f07)),
                    _0x479ab3 = _0x41661e(_0x2f4ba6(0x1166a)),
                    _0x4d4846 = _0x41661e(_0x2f4ba6(0x9612)),
                    _0x502abe = _0x41661e(_0x2f4ba6(0xd1a1)),
                    _0x136d71 = _0x41661e(_0x2f4ba6(0x1016f));
                class _0x433491 extends _0x479ab3['default'] {
                    constructor(_0xd98447, _0x1714b4, _0x2936b0, _0x3e8889) {
                        const _0x280475 = _0x5637dd;
                        super(_0xd98447, _0x1714b4, _0x2936b0, _0x3e8889), this[_0x280475(0x351)] = null, this[_0x280475(0x279)] = !0x1, this['currentPhase'] = 0x0, this['xOffset'] = 0x0, this[_0x280475(0x969)] = 0x0, this[_0x280475(0x121a)] = 0x0, this[_0x280475(0xe7f)] = !0x1, this['breakTimer'] = 0x0, this[_0x280475(0x1088)] = 0x3e8, this[_0x280475(0x4a0)] = 0x0, this['DirectHits'] = 0x0, this['attackDelay'] = 0x1388, this[_0x280475(0x2e3)] = 0x0, this['attack1Index'] = 0x0, this['attack2Index'] = 0x0, this[_0x280475(0x119d)] = 0x0, this[_0x280475(0x1a12)] = 0x0, this['attack4Index'] = 0x0, this['angleUnit'] = Math['PI'] / 0x168, this['attacksDurationMultiplier'] = 0x1, this[_0x280475(0x121a)] = 0x0, this['explosionPool'] = new _0x4d4846['default'](this[_0x280475(0x6d2)]), this['shootingEyesManager'] = new _0x136d71[(_0x280475(0xd2c))](this[_0x280475(0x6d2)]), this['MakeWhiteHand'](), this[_0x280475(0x757)] = !0x0, this['xOffset'] = 0x0, this[_0x280475(0x969)] = 0x0, this[_0x280475(0x150f)] = 0x40, this[_0x280475(0x16ba)] = 0x40, this[_0x280475(0x122d)] = 0x40, this[_0x280475(0xcbb)] = 0x40, this['radius5'] = 0x40, this['radius6'] = 0x40, this[_0x280475(0xc9d)] = 0x40, this[_0x280475(0x189d)] = 0x2 * Math['PI'] * 0x0, this[_0x280475(0xb94)] = 0x2 * Math['PI'] * 0.23, this[_0x280475(0x10ec)] = 0x2 * Math['PI'] * 0.41, this['myAngle4'] = 0x2 * Math['PI'] * 0.61, this[_0x280475(0x1492)] = 0x2 * Math['PI'] * 0.71, this['myAngle6'] = 0x2 * Math['PI'] * 0.79, this['myAngle7'] = 0x2 * Math['PI'] * 0.83, this[_0x280475(0x8a2)](0x5), this['LeftHand'] = this[_0x280475(0x6d2)]['add'][_0x280475(0x105b)](this['x'], this['y'], 'enemiesM', 'hand_01.png')[_0x280475(0xf8e)](0x1, 0.5)[_0x280475(0x8a2)](0x1)['setFlipY'](!0x1), this[_0x280475(0x753)] = this[_0x280475(0x6d2)]['add']['sprite'](this['x'], this['y'], 'enemiesM', 'hand_01.png')[_0x280475(0xf8e)](0x0, 0.5)['setScale'](0x1)['setFlipY'](!0x1)[_0x280475(0xb8d)](!0x0), this['MakeHandAnimations'](), this[_0x280475(0x1433)][_0x280475(0x183e)]['play']('italian'), this[_0x280475(0x753)][_0x280475(0x183e)]['play']('italian'), this['scene']['tweens']['add']({
                            'radius1': 0x20,
                            'duration': 0x3f1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene'][_0x280475(0x12a1)]['add']({
                            'radius2': 0x20,
                            'duration': 0x4c1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0x6d2)]['tweens'][_0x280475(0x18bd)]({
                            'radius3': 0x20,
                            'duration': 0x5d1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens'][_0x280475(0x18bd)]({
                            'radius4': 0x20,
                            'duration': 0x653,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0x6d2)][_0x280475(0x12a1)][_0x280475(0x18bd)]({
                            'radius5': 0x20,
                            'duration': 0x745,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene'][_0x280475(0x12a1)]['add']({
                            'radius6': 0x20,
                            'duration': 0x833,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens'][_0x280475(0x18bd)]({
                            'radius7': 0x20,
                            'duration': 0x925,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0x102b)] = 0x2, this['scale2'] = 1.75, this[_0x280475(0x171)] = 1.5, this['scale4'] = 1.25, this['scale5'] = 0x1, this['scale6'] = 0.75, this['scale7'] = 0.5, this[_0x280475(0x6d2)][_0x280475(0x12a1)][_0x280475(0x18bd)]({
                            'scale1': 0.5,
                            'duration': 0x3f1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene'][_0x280475(0x12a1)]['add']({
                            'scale2': 0.75,
                            'duration': 0x4c1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0x6d2)]['tweens']['add']({
                            'scale3': 0x1,
                            'duration': 0x5d1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens'][_0x280475(0x18bd)]({
                            'scale4': 1.25,
                            'duration': 0x653,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0x6d2)]['tweens'][_0x280475(0x18bd)]({
                            'scale5': 1.5,
                            'duration': 0x745,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0x6d2)]['tweens'][_0x280475(0x18bd)]({
                            'scale6': 1.75,
                            'duration': 0x833,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene'][_0x280475(0x12a1)]['add']({
                            'scale7': 0x2,
                            'duration': 0x925,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this[_0x280475(0xdc7)] = this['scene'][_0x280475(0x18bd)]['tileSprite'](0.5 * this[_0x280475(0x6d2)]['renderer']['width'], 0.5 * this[_0x280475(0x6d2)]['renderer'][_0x280475(0x140e)], this[_0x280475(0x6d2)][_0x280475(0x12f9)][_0x280475(0x173c)], this['scene'][_0x280475(0x12f9)]['height'], 'hStars1')[_0x280475(0xd87)](0x0)[_0x280475(0xb4a)](this[_0x280475(0x6d2)][_0x280475(0x12f9)][_0x280475(0x140e)] - 0x1), this[_0x280475(0x8bf)] = this['scene'][_0x280475(0x18bd)][_0x280475(0x899)](0.5 * this['scene']['renderer'][_0x280475(0x173c)], 0.5 * this['scene'][_0x280475(0x12f9)]['height'], this['scene']['renderer'][_0x280475(0x173c)], this[_0x280475(0x6d2)][_0x280475(0x12f9)][_0x280475(0x140e)], 'hStars2')[_0x280475(0xd87)](0x0)[_0x280475(0xb4a)](this['scene']['renderer']['height'] - 0x1);
                        let _0x26ff5f = this[_0x280475(0xc1f)]();
                        this['stars1'][_0x280475(0x1788)](_0x26ff5f), this['stars2'][_0x280475(0x1788)](_0x26ff5f), this[_0x280475(0x6d2)]['tweens']['add']({
                            'targets': this[_0x280475(0x8bf)],
                            'alpha': 0.6,
                            'duration': 0x3e8,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this['scene']['tweens'][_0x280475(0x18bd)]({
                            'targets': this[_0x280475(0xdc7)],
                            'alpha': 0.6,
                            'duration': 0x3e8,
                            'delay': 0x1f4,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this['isBehind'] = !0x1, this['pool_sun'] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5[_0x280475(0xd2c)]['D_MASK_SUN']), this[_0x280475(0xfaf)] = new _0x502abe[(_0x280475(0xd2c))](this[_0x280475(0x6d2)], _0x10efe5['default'][_0x280475(0x4dd)]), this['pool_city'] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5['default'][_0x280475(0x7de)]), this[_0x280475(0x17d3)] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5[_0x280475(0xd2c)]['D_MASK_WINDS']), this[_0x280475(0xd47)] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5['default'][_0x280475(0x1c7)]), this['pool_stone'] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5['default']['D_MASK_GREED']), this['pool_nomask'] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5['default'][_0x280475(0xdf5)]), this[_0x280475(0x1bf)] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5[_0x280475(0xd2c)]['D_SKULL']), this[_0x280475(0x1543)] = new _0x502abe[(_0x280475(0xd2c))](this[_0x280475(0x6d2)], _0x10efe5[_0x280475(0xd2c)]['D_EYE']), this[_0x280475(0x167)] = new _0x502abe[(_0x280475(0xd2c))](this[_0x280475(0x6d2)], _0x10efe5[_0x280475(0xd2c)][_0x280475(0x578)]), this['pool_gems'] = new _0x502abe[(_0x280475(0xd2c))](this[_0x280475(0x6d2)], _0x10efe5[_0x280475(0xd2c)]['D_CLUSTER_GEMS']), this[_0x280475(0x15b4)] = new _0x502abe['default'](this[_0x280475(0x6d2)], _0x10efe5[_0x280475(0xd2c)][_0x280475(0x51b)]), this['pool_reapersA'] = new _0x502abe[(_0x280475(0xd2c))](this[_0x280475(0x6d2)], _0x10efe5['default'][_0x280475(0x1a08)]), this[_0x280475(0x24b)] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5[_0x280475(0xd2c)][_0x280475(0x1694)]), this[_0x280475(0x188a)] = new _0x502abe[(_0x280475(0xd2c))](this[_0x280475(0x6d2)], _0x10efe5['default']['D_WEAK_REAPER_C']), this[_0x280475(0x323)] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5[_0x280475(0xd2c)]['D_WEAK_REAPER_D']), this['pool_reapersE'] = new _0x502abe[(_0x280475(0xd2c))](this['scene'], _0x10efe5['default'][_0x280475(0x1872)]), this[_0x280475(0x19c3)]();
                    } ['MakeHandAnimations']() {
                        const _0x365534 = _0x5637dd;
                        let _0x154c0b = this[_0x365534(0x1433)]['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'hand_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x154c0b,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0x365534(0x753)][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x154c0b,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x571086 = this['LeftHand']['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x2,
                            'prefix': 'hand_italian_',
                            'suffix': '.png'
                        });
                        this['LeftHand'][_0x365534(0x183e)]['create']({
                            'key': 'italian',
                            'frames': _0x571086,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0x365534(0x753)][_0x365534(0x183e)]['create']({
                            'key': 'italian',
                            'frames': _0x571086,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x1ca6c5 = this['LeftHand']['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x2,
                            'prefix': 'hand_point_',
                            'suffix': '.png'
                        });
                        this['LeftHand'][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'point',
                            'frames': _0x1ca6c5,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0x365534(0x753)][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'point',
                            'frames': _0x1ca6c5,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x42f99e = this[_0x365534(0x1433)]['anims'][_0x365534(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'hand_throw_',
                            'suffix': '.png'
                        });
                        this['LeftHand'][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'throw',
                            'frames': _0x42f99e,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this['RightHand'][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'throw',
                            'frames': _0x42f99e,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        });
                        let _0x20898a = this[_0x365534(0x1433)]['anims'][_0x365534(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x3,
                            'zeroPad': 0x2,
                            'prefix': 'hand_snap_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'snap_start',
                            'frames': _0x20898a,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this['RightHand'][_0x365534(0x183e)]['create']({
                            'key': 'snap_start',
                            'frames': _0x20898a,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x22444f = this['LeftHand'][_0x365534(0x183e)][_0x365534(0x1756)]('enemiesM', {
                            'start': 0x4,
                            'end': 0x5,
                            'zeroPad': 0x2,
                            'prefix': 'hand_snap_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'snap_do',
                            'frames': _0x22444f,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this['RightHand']['anims'][_0x365534(0x6a8)]({
                            'key': 'snap_do',
                            'frames': _0x22444f,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        });
                        let _0xc76fb6 = this['LeftHand'][_0x365534(0x183e)]['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x2,
                            'prefix': 'hand_pinch_',
                            'suffix': '.png'
                        });
                        this['LeftHand'][_0x365534(0x183e)]['create']({
                            'key': 'pinch_start',
                            'frames': _0xc76fb6,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0x365534(0x753)]['anims'][_0x365534(0x6a8)]({
                            'key': 'pinch_start',
                            'frames': _0xc76fb6,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x4eb0af = this['LeftHand'][_0x365534(0x183e)][_0x365534(0x1756)]('enemiesM', {
                            'start': 0x3,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'hand_pinch_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)][_0x365534(0x183e)][_0x365534(0x6a8)]({
                            'key': 'pinch_do',
                            'frames': _0x4eb0af,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this[_0x365534(0x753)]['anims'][_0x365534(0x6a8)]({
                            'key': 'pinch_do',
                            'frames': _0x4eb0af,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        });
                        let _0x31efa9 = this[_0x365534(0x1433)]['anims'][_0x365534(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x2,
                            'prefix': 'hand_reveal_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)]['anims'][_0x365534(0x6a8)]({
                            'key': 'reveal_start',
                            'frames': _0x31efa9,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this['RightHand']['anims'][_0x365534(0x6a8)]({
                            'key': 'reveal_start',
                            'frames': _0x31efa9,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x144229 = this['LeftHand'][_0x365534(0x183e)][_0x365534(0x1756)]('enemiesM', {
                            'start': 0x3,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'hand_reveal_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)][_0x365534(0x183e)]['create']({
                            'key': 'reveal_do',
                            'frames': _0x144229,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this[_0x365534(0x753)]['anims']['create']({
                            'key': 'reveal_do',
                            'frames': _0x144229,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        });
                        let _0x46c358 = this[_0x365534(0x1433)]['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x2,
                            'prefix': 'hand_revive_',
                            'suffix': '.png'
                        });
                        this[_0x365534(0x1433)]['anims']['create']({
                            'key': 'revive_start',
                            'frames': _0x46c358,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0x365534(0x753)]['anims'][_0x365534(0x6a8)]({
                            'key': 'revive_start',
                            'frames': _0x46c358,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x21ff28 = this[_0x365534(0x1433)]['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x3,
                            'end': 0x7,
                            'zeroPad': 0x2,
                            'prefix': 'hand_revive_',
                            'suffix': '.png'
                        });
                        this['LeftHand']['anims'][_0x365534(0x6a8)]({
                            'key': 'revive_do',
                            'frames': _0x21ff28,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this[_0x365534(0x753)]['anims'][_0x365534(0x6a8)]({
                            'key': 'revive_do',
                            'frames': _0x21ff28,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        });
                    } ['MakeMasks']() {
                        const _0x2acf6c = _0x5637dd;
                        this['eye1'] = this[_0x2acf6c(0x1f8)]['SpawnAt'](this['x'], this['y']), this['eye2'] = this[_0x2acf6c(0xfaf)][_0x2acf6c(0xada)](this['x'], this['y']), this['eye3'] = this[_0x2acf6c(0xcfa)]['SpawnAt'](this['x'], this['y']), this[_0x2acf6c(0x6a6)] = this[_0x2acf6c(0x17d3)]['SpawnAt'](this['x'], this['y']), this[_0x2acf6c(0xe8b)] = this['pool_volcano']['SpawnAt'](this['x'], this['y']), this[_0x2acf6c(0xd59)] = this[_0x2acf6c(0x14ce)]['SpawnAt'](this['x'], this['y']), this[_0x2acf6c(0x19b6)] = this[_0x2acf6c(0x16f4)][_0x2acf6c(0xada)](this['x'], this['y']), this[_0x2acf6c(0x71d)]['owner'] = this, this['eye2'][_0x2acf6c(0x351)] = this, this[_0x2acf6c(0x1371)][_0x2acf6c(0x351)] = this, this['eye4'][_0x2acf6c(0x351)] = this, this[_0x2acf6c(0xe8b)]['owner'] = this, this[_0x2acf6c(0xd59)][_0x2acf6c(0x351)] = this, this['eye7'][_0x2acf6c(0x351)] = this;
                    } ['MakeSkulls']() {
                        const _0x46db2b = _0x5637dd;
                        this['eye1'][_0x46db2b(0xdae)] || this[_0x46db2b(0x71d)]['ScriptedDisappear'](), this['eye2'][_0x46db2b(0xdae)] || this['eye2'][_0x46db2b(0x5dd)](), this[_0x46db2b(0x1371)]['isDead'] || this[_0x46db2b(0x1371)][_0x46db2b(0x5dd)](), this[_0x46db2b(0x6a6)][_0x46db2b(0xdae)] || this['eye4']['ScriptedDisappear'](), this['eye5'][_0x46db2b(0xdae)] || this[_0x46db2b(0xe8b)]['ScriptedDisappear'](), this[_0x46db2b(0xd59)]['isDead'] || this['eye6']['ScriptedDisappear'](), this[_0x46db2b(0x19b6)]['isDead'] || this[_0x46db2b(0x19b6)]['ScriptedDisappear'](), this['eye1'] = this[_0x46db2b(0x1bf)]['SpawnAt'](this['x'], this['y']), this['eye2'] = this[_0x46db2b(0x1bf)][_0x46db2b(0xada)](this['x'], this['y']), this[_0x46db2b(0x1371)] = this['pool_skulls']['SpawnAt'](this['x'], this['y']), this[_0x46db2b(0x6a6)] = this[_0x46db2b(0x1bf)][_0x46db2b(0xada)](this['x'], this['y']), this['eye5'] = this['pool_skulls']['SpawnAt'](this['x'], this['y']), this[_0x46db2b(0xd59)] = this[_0x46db2b(0x1543)][_0x46db2b(0xada)](this['x'], this['y']), this[_0x46db2b(0x19b6)] = this['pool_eyes']['SpawnAt'](this['x'], this['y']), this['eye1']['SetEyes']('eyes_1.png'), this['eye2']['SetEyes']('eyes_2.png'), this[_0x46db2b(0x1371)]['SetEyes']('eyes_3.png'), this['eye4'][_0x46db2b(0x5de)]('eyes_4.png'), this[_0x46db2b(0xe8b)][_0x46db2b(0x5de)]('eyes_5.png'), this[_0x46db2b(0xd59)][_0x46db2b(0x5de)](), this['eye7']['SetEyes'](), this['eye6'][_0x46db2b(0xb8d)](!0x0), this[_0x46db2b(0x19b6)]['setFlipX'](!0x0), this[_0x46db2b(0x71d)][_0x46db2b(0x351)] = this, this[_0x46db2b(0x160)]['owner'] = this, this[_0x46db2b(0x1371)][_0x46db2b(0x351)] = this, this['eye4']['owner'] = this, this[_0x46db2b(0xe8b)][_0x46db2b(0x351)] = this, this['eye6']['owner'] = this, this['eye7']['owner'] = this;
                    } ['MakeTreasures']() {
                        const _0x30fda2 = _0x5637dd;
                        this[_0x30fda2(0x71d)][_0x30fda2(0xdae)] || this[_0x30fda2(0x71d)]['ScriptedDisappear'](), this[_0x30fda2(0x160)]['isDead'] || this[_0x30fda2(0x160)]['ScriptedDisappear'](), this['eye3'][_0x30fda2(0xdae)] || this[_0x30fda2(0x1371)][_0x30fda2(0x5dd)](), this[_0x30fda2(0x6a6)][_0x30fda2(0xdae)] || this['eye4'][_0x30fda2(0x5dd)](), this['eye5'][_0x30fda2(0xdae)] || this[_0x30fda2(0xe8b)]['ScriptedDisappear'](), this[_0x30fda2(0xd59)][_0x30fda2(0xdae)] || this[_0x30fda2(0xd59)][_0x30fda2(0x5dd)](), this[_0x30fda2(0x19b6)][_0x30fda2(0xdae)] || this['eye7'][_0x30fda2(0x5dd)](), this['eye1'] = this[_0x30fda2(0x8c2)]['SpawnAt'](this['x'], this['y']), this[_0x30fda2(0x160)] = this[_0x30fda2(0x167)][_0x30fda2(0xada)](this['x'], this['y']), this[_0x30fda2(0x1371)] = this[_0x30fda2(0x8c2)][_0x30fda2(0xada)](this['x'], this['y']), this[_0x30fda2(0x6a6)] = this['pool_gold']['SpawnAt'](this['x'], this['y']), this[_0x30fda2(0xe8b)] = this['pool_gems']['SpawnAt'](this['x'], this['y']), this[_0x30fda2(0xd59)] = this[_0x30fda2(0x167)][_0x30fda2(0xada)](this['x'], this['y']), this[_0x30fda2(0x19b6)] = this[_0x30fda2(0x8c2)][_0x30fda2(0xada)](this['x'], this['y']), this['eye1'][_0x30fda2(0x351)] = this, this['eye2']['owner'] = this, this[_0x30fda2(0x1371)][_0x30fda2(0x351)] = this, this[_0x30fda2(0x6a6)][_0x30fda2(0x351)] = this, this[_0x30fda2(0xe8b)][_0x30fda2(0x351)] = this, this['eye6'][_0x30fda2(0x351)] = this, this[_0x30fda2(0x19b6)]['owner'] = this;
                    } ['Shrink']() {
                        const _0x5c3259 = _0x5637dd;
                        this[_0x5c3259(0x71d)]['isDead'] || this[_0x5c3259(0x71d)]['ScriptedDisappear'](), this['eye2']['isDead'] || this[_0x5c3259(0x160)][_0x5c3259(0x5dd)](), this[_0x5c3259(0x1371)][_0x5c3259(0xdae)] || this['eye3']['ScriptedDisappear'](), this['eye4']['isDead'] || this[_0x5c3259(0x6a6)][_0x5c3259(0x5dd)](), this[_0x5c3259(0xe8b)]['isDead'] || this[_0x5c3259(0xe8b)][_0x5c3259(0x5dd)](), this['eye6'][_0x5c3259(0xdae)] || this[_0x5c3259(0xd59)][_0x5c3259(0x5dd)](), this[_0x5c3259(0x19b6)][_0x5c3259(0xdae)] || this['eye7'][_0x5c3259(0x5dd)](), this[_0x5c3259(0xcf9)][_0x5c3259(0x543)] = !0x1, this[_0x5c3259(0x6d2)][_0x5c3259(0x12a1)][_0x5c3259(0x18bd)]({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0x3e8,
                            'onStart': () => {}
                        });
                        let _0x19bdfc = this[_0x5c3259(0x6d2)]['add'][_0x5c3259(0x568)](this['x'], this['y'], 'items', 'HeartRuby.png')[_0x5c3259(0xb4a)](this['depth'] - 0x1);
                        this[_0x5c3259(0x6d2)]['tweens']['add']({
                            'targets': _0x19bdfc,
                            'scale': 1.1,
                            'duration': 0x3e8,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1
                        });
                    } ['Movement_Behaviour0'](_0x3fe930) {
                        const _0x40a76e = _0x5637dd;
                        this['moveTween0'] || (this[_0x40a76e(0xfef)] = this['scene'][_0x40a76e(0x12a1)]['add']({
                            'targets': this,
                            'xOffset': 0.2 * -this[_0x40a76e(0x6d2)]['renderer'][_0x40a76e(0x173c)],
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x1061ce = _0x40a76e;
                                this[_0x1061ce(0x1332)] = 0.45 * -this[_0x1061ce(0x6d2)][_0x1061ce(0x12f9)][_0x1061ce(0x173c)];
                            }
                        }));
                        let _0x922968 = _0x5176fb['default'][_0x40a76e(0x1300)] * _0x103cf5[_0x40a76e(0xd2c)][_0x40a76e(0x1043)][_0x40a76e(0x10f6)]['moveSpeed'] * 0.9 * (0.001 * _0x3fe930);
                        this['y'] = this['Approach'](this['y'], _0x103cf5[_0x40a76e(0xd2c)]['Core'][_0x40a76e(0x10f6)]['y'], _0x922968), this['x'] = _0x103cf5[_0x40a76e(0xd2c)][_0x40a76e(0x1043)][_0x40a76e(0x10f6)]['x'] + this['xOffset'];
                    } ['Movement_Behaviour3'](_0x50748c) {
                        const _0x46bd45 = _0x5637dd;
                        var _0x5ecd39;
                        null === (_0x5ecd39 = this[_0x46bd45(0xfef)]) || void 0x0 === _0x5ecd39 || _0x5ecd39['stop'](), this['moveTween3'] || (this['moveTween3'] = this['scene'][_0x46bd45(0x12a1)]['add']({
                            'targets': this,
                            'xOffset': 0.25 * -this[_0x46bd45(0x6d2)][_0x46bd45(0x12f9)]['width'],
                            'yOffset': -0x8,
                            'duration': 0x3e8,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x4fc9bd = _0x46bd45;
                                this[_0x4fc9bd(0x1332)] = 0.4 * -this[_0x4fc9bd(0x6d2)][_0x4fc9bd(0x12f9)]['width'], this[_0x4fc9bd(0x969)] = 0x8;
                            }
                        }));
                        let _0xe2212e = _0x5176fb[_0x46bd45(0xd2c)][_0x46bd45(0x1300)] * _0x103cf5[_0x46bd45(0xd2c)]['Core'][_0x46bd45(0x10f6)][_0x46bd45(0x1205)] * 0.9 * (0.001 * _0x50748c);
                        this['y'] = this[_0x46bd45(0x10db)](this['y'], _0x103cf5['default']['Core'][_0x46bd45(0x10f6)]['y'], _0xe2212e), this['x'] = _0x103cf5['default'][_0x46bd45(0x1043)]['Player']['x'] + this[_0x46bd45(0x1332)];
                    } ['Movement_Behaviour4'](_0x4b1602) {
                        const _0x175e33 = _0x5637dd;
                        var _0x47e032;
                        null === (_0x47e032 = this['moveTween3']) || void 0x0 === _0x47e032 || _0x47e032[_0x175e33(0x1a34)](), this[_0x175e33(0x9b2)] || (this['moveTween4'] = this[_0x175e33(0x6d2)][_0x175e33(0x12a1)]['add']({
                            'targets': this,
                            'xOffset': 0.2 * -this[_0x175e33(0x6d2)]['renderer']['width'],
                            'yOffset': -0x8,
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x8cdf37 = _0x175e33;
                                this[_0x8cdf37(0x1332)] = 0.3 * -this[_0x8cdf37(0x6d2)][_0x8cdf37(0x12f9)][_0x8cdf37(0x173c)], this['yOffset'] = 0x8;
                            }
                        }));
                        let _0x510523 = _0x5176fb[_0x175e33(0xd2c)]['PlayerPxSpeed'] * _0x103cf5['default'][_0x175e33(0x1043)]['Player'][_0x175e33(0x1205)] * 0.9 * (0.001 * _0x4b1602);
                        this['y'] = this['Approach'](this['y'], _0x103cf5['default'][_0x175e33(0x1043)][_0x175e33(0x10f6)]['y'], _0x510523), this['x'] = _0x103cf5['default'][_0x175e33(0x1043)][_0x175e33(0x10f6)]['x'] + this['xOffset'];
                    } ['CheckAttack']() {
                        const _0x1a81ab = _0x5637dd;
                        switch (this['currentPhase']) {
                            case 0x0:
                                this['Attack_Behaviour0']();
                                break;
                            case 0x1:
                                this[_0x1a81ab(0x9da)]();
                                break;
                            case 0x2:
                                this['Attack_Behaviour2']();
                                break;
                            case 0x3:
                                this[_0x1a81ab(0xac2)]();
                                break;
                            case 0x4:
                                this['Attack_Behaviour4']();
                        }
                    } ['Attack_Behaviour0']() {
                        const _0x4a690b = _0x5637dd;
                        switch (Math[_0x4a690b(0xe07)](0x2 * Math[_0x4a690b(0x9ad)]())) {
                            case 0x0:
                                _0x103cf5['default']['Core'][_0x4a690b(0x17c7)][_0x4a690b(0x104c)]['PlaySwarm'](0x4e20, 0x32, _0x10efe5[_0x4a690b(0xd2c)][_0x4a690b(0x2c6)], 0.9);
                                break;
                            case 0x1:
                                _0x103cf5[_0x4a690b(0xd2c)][_0x4a690b(0x1043)]['Stage'][_0x4a690b(0x104c)]['PlaySwarm'](0xea60, 0x10, _0x10efe5[_0x4a690b(0xd2c)]['TRAINEE_Y'], 0.9);
                        }
                    } ['Attack_Behaviour1']() {
                        const _0x35eb49 = _0x5637dd;
                        switch (this[_0x35eb49(0x1019)]++, this['ThrowEggR'](0x0, 0x0), Math[_0x35eb49(0xe07)](0x5 * Math[_0x35eb49(0x9ad)]())) {
                            case 0x0:
                                _0x103cf5['default']['Core'][_0x35eb49(0x17c7)][_0x35eb49(0x104c)][_0x35eb49(0x17f3)](0x4e20, 0x32, _0x10efe5[_0x35eb49(0xd2c)]['BATSWARM'], 0.9);
                                break;
                            case 0x1:
                                _0x103cf5['default']['Core'][_0x35eb49(0x17c7)]['stageEventManager']['PlaySwarm'](0xea60, 0x18 + this[_0x35eb49(0x1019)], _0x10efe5[_0x35eb49(0xd2c)]['MUD'], 0.9);
                                break;
                            case 0x2:
                                _0x103cf5[_0x35eb49(0xd2c)][_0x35eb49(0x1043)][_0x35eb49(0x17c7)][_0x35eb49(0x104c)][_0x35eb49(0x17f3)](0xea60, 0x18 + this[_0x35eb49(0x1019)], _0x10efe5[_0x35eb49(0xd2c)][_0x35eb49(0x1330)], 0.9);
                                break;
                            case 0x3:
                                _0x103cf5[_0x35eb49(0xd2c)][_0x35eb49(0x1043)]['Stage'][_0x35eb49(0x104c)]['PlaySwarm'](0xea60, 0x18 + this[_0x35eb49(0x1019)], _0x10efe5['default']['SKULLINO'], 0.9);
                                break;
                            case 0x4:
                                _0x103cf5['default']['Core'][_0x35eb49(0x17c7)]['stageEventManager'][_0x35eb49(0x17f3)](0xea60, 0x10 + this['attack1Index'], _0x10efe5[_0x35eb49(0xd2c)][_0x35eb49(0xc09)], 0.9);
                        }
                    } ['Attack_Behaviour2']() {
                        const _0x4ee962 = _0x5637dd;
                        let _0x3ef23e = _0x103cf5['default'][_0x4ee962(0x1043)][_0x4ee962(0x10f6)]['x'] + 0.5 * this[_0x4ee962(0x6d2)][_0x4ee962(0x12f9)]['width'],
                            _0xd9e946 = _0x103cf5['default'][_0x4ee962(0x1043)][_0x4ee962(0x10f6)]['y'];
                        switch (this['ThrowEggL'](_0x3ef23e, _0xd9e946 - 0x50), this[_0x4ee962(0x985)](_0x3ef23e, _0xd9e946 + 0x50), this[_0x4ee962(0x119d)]) {
                            case 0x0:
                                _0x103cf5[_0x4ee962(0xd2c)][_0x4ee962(0x1043)][_0x4ee962(0x17c7)][_0x4ee962(0x104c)][_0x4ee962(0x17f3)](0x4e20, 0x32, _0x10efe5['default'][_0x4ee962(0x2c6)], 0.9), _0x103cf5['default']['Core']['Stage'][_0x4ee962(0x104c)]['PlaySwarm'](0xea60, 0x18 + this[_0x4ee962(0x46d)], _0x10efe5[_0x4ee962(0xd2c)][_0x4ee962(0x365)], 0.9);
                                break;
                            case 0x1:
                                _0x103cf5[_0x4ee962(0xd2c)]['Core']['Stage']['stageEventManager']['PlaySwarm'](0xea60, 0xc, _0x10efe5['default'][_0x4ee962(0x146c)], 0.9), _0x103cf5[_0x4ee962(0xd2c)]['Core']['Stage'][_0x4ee962(0x104c)][_0x4ee962(0x17f3)](0xea60, 0xc + this[_0x4ee962(0x46d)], _0x10efe5['default'][_0x4ee962(0x73a)], 0.9);
                                break;
                            case 0x2:
                                _0x103cf5['default'][_0x4ee962(0x1043)][_0x4ee962(0x17c7)][_0x4ee962(0x104c)]['PlaySwarm'](0xea60, 0xc, _0x10efe5[_0x4ee962(0xd2c)][_0x4ee962(0x16a1)], 0.9), _0x103cf5[_0x4ee962(0xd2c)][_0x4ee962(0x1043)]['Stage']['stageEventManager']['PlaySwarm'](0xea60, 0x18 + this[_0x4ee962(0x46d)], _0x10efe5[_0x4ee962(0xd2c)][_0x4ee962(0x14d5)], 0.9);
                                break;
                            case 0x3:
                                _0x103cf5['default'][_0x4ee962(0x1043)][_0x4ee962(0x17c7)]['stageEventManager'][_0x4ee962(0x17f3)](0xea60, 0x18, _0x10efe5['default'][_0x4ee962(0x1945)], 0.9), _0x103cf5[_0x4ee962(0xd2c)][_0x4ee962(0x1043)][_0x4ee962(0x17c7)]['stageEventManager'][_0x4ee962(0x17f3)](0xea60, 0xc + this[_0x4ee962(0x46d)], _0x10efe5['default']['DULL0'], 0.9);
                                break;
                            case 0x4:
                                _0x103cf5[_0x4ee962(0xd2c)]['Core'][_0x4ee962(0x17c7)]['stageEventManager']['PlaySwarm'](0xea60, 0x10 + this['attack2Index'], _0x10efe5[_0x4ee962(0xd2c)]['TRAINEE_Y'], 0.9), _0x103cf5[_0x4ee962(0xd2c)][_0x4ee962(0x1043)][_0x4ee962(0x17c7)][_0x4ee962(0x104c)][_0x4ee962(0x17f3)](0xea60, 0x18, _0x10efe5[_0x4ee962(0xd2c)]['SKELETON'], 0.9);
                        }
                    } ['Attack_Behaviour3']() {
                        const _0xa5b5f8 = _0x5637dd;
                        switch (this[_0xa5b5f8(0x1a12)]++, _0x103cf5[_0xa5b5f8(0xd2c)]['Core'][_0xa5b5f8(0x10f6)][_0xa5b5f8(0x14e0)] >= 0x1 && this['attack3Index'] > 0x3 && (this[_0xa5b5f8(0x1a12)] = 0x0, this['DragInWhiteHand']()), Math[_0xa5b5f8(0xe07)](0x5 * Math['random']())) {
                            case 0x0:
                                this[_0xa5b5f8(0x1184)](0x5, 0x3c, 0x1);
                                break;
                            case 0x1:
                                this[_0xa5b5f8(0x35d)](-0x64), this[_0xa5b5f8(0x35d)](0x64);
                                break;
                            case 0x2:
                                this['ShootEyes'](0xa, 0x1e, 0x1);
                                break;
                            case 0x3:
                                this['ShootEyes'](0x14, 0x64, 0.5);
                                break;
                            case 0x4:
                                this[_0xa5b5f8(0x35d)](-0xc8), this[_0xa5b5f8(0x35d)](0xc8);
                        }
                        _0x103cf5[_0xa5b5f8(0xd2c)][_0xa5b5f8(0x1043)][_0xa5b5f8(0x17c7)][_0xa5b5f8(0x104c)][_0xa5b5f8(0x17f3)](0xea60, 0xc + Math[_0xa5b5f8(0x1084)](0xc, this[_0xa5b5f8(0x1a12)]), _0x10efe5['default']['D_WEAK_EYE'], 0.9);
                    } ['Attack_Behaviour4']() {
                        const _0x58cad1 = _0x5637dd;
                        if (_0x103cf5[_0x58cad1(0xd2c)][_0x58cad1(0x1043)]['PlayerOptions']['HasSeenFinalFireworks'] || this[_0x58cad1(0xce6)] < 0x1 && this['DragInWhiteHand'](), this[_0x58cad1(0xce6)]++, _0x103cf5['default']['Core'][_0x58cad1(0x1a91)][_0x58cad1(0xed9)] > 0x6c) return;
                        let _0x26d8ff = new Phaser[(_0x58cad1(0x10d2))]['Ellipse'](_0x103cf5[_0x58cad1(0xd2c)]['Core'][_0x58cad1(0x10f6)]['x'], _0x103cf5['default'][_0x58cad1(0x1043)][_0x58cad1(0x10f6)]['y'], 1.4 * this['scene']['renderer']['width'], 1.4 * this[_0x58cad1(0x6d2)][_0x58cad1(0x12f9)][_0x58cad1(0x140e)])[_0x58cad1(0x10f9)](0x5);
                        Phaser['Math']['RND']['shuffle'](_0x26d8ff);
                        let _0x5653eb = this[_0x58cad1(0x14a9)][_0x58cad1(0xada)](_0x26d8ff[0x0]['x'], _0x26d8ff[0x0]['y']),
                            _0x2a1840 = this['pool_reapersA']['SpawnAt'](_0x26d8ff[0x1]['x'], _0x26d8ff[0x1]['y']),
                            _0x5b77fa = this['pool_reapersA'][_0x58cad1(0xada)](_0x26d8ff[0x2]['x'], _0x26d8ff[0x2]['y']),
                            _0x4e0375 = this[_0x58cad1(0x14a9)][_0x58cad1(0xada)](_0x26d8ff[0x3]['x'], _0x26d8ff[0x3]['y']),
                            _0x5ddf53 = this['pool_reapersA']['SpawnAt'](_0x26d8ff[0x4]['x'], _0x26d8ff[0x4]['y']);
                        _0x5653eb[_0x58cad1(0x177d)] = !0x1, _0x2a1840[_0x58cad1(0x177d)] = !0x1, _0x5b77fa['isCullable'] = !0x1, _0x4e0375[_0x58cad1(0x177d)] = !0x1, _0x5ddf53[_0x58cad1(0x177d)] = !0x1, _0x5653eb[_0x58cad1(0x187a)] = !0x0, _0x2a1840['isTeleportOnCull'] = !0x0, _0x5b77fa[_0x58cad1(0x187a)] = !0x0, _0x4e0375['isTeleportOnCull'] = !0x0, _0x5ddf53['isTeleportOnCull'] = !0x0;
                    } ['TriggerPhase1']() {
                        const _0x6207a1 = _0x5637dd;
                        var _0x45ec03, _0x561c15;
                        this[_0x6207a1(0x626)] = 0x1, this[_0x6207a1(0x997)] = 0x1388, null === (_0x45ec03 = this['LeftHand'][_0x6207a1(0x183e)]) || void 0x0 === _0x45ec03 || _0x45ec03[_0x6207a1(0x902)]('idle'), null === (_0x561c15 = this[_0x6207a1(0x753)]['anims']) || void 0x0 === _0x561c15 || _0x561c15['play']('idle'), this[_0x6207a1(0x1433)][_0x6207a1(0x293)](!0x0), this['RightHand'][_0x6207a1(0x293)](!0x0);
                    } ['TriggerPhase2']() {
                        const _0x316d56 = _0x5637dd;
                        this[_0x316d56(0x626)] = 0x2, this['attackDelay'] = 0x1388, this[_0x316d56(0x6d2)]['tweens']['add']({
                            'targets': [this[_0x316d56(0x1433)], this['RightHand']],
                            'scaleX': 0x0,
                            'scaleY': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x1eb38b = _0x316d56;
                                this['HasHands'] = !0x1, this[_0x1eb38b(0x175b)]();
                            }
                        });
                    } ['AutoPositionHands']() {
                        const _0x407316 = _0x5637dd;
                        this['RightHand']['setFlipX'](!0x1), this['RightHand']['setOrigin'](0x1, 0.5), this[_0x407316(0x1433)]['setScrollFactor'](0x0), this[_0x407316(0x753)][_0x407316(0xd87)](0x0), this[_0x407316(0x1433)]['setPosition'](this['scene'][_0x407316(0x12f9)]['width'], 0.5 * this[_0x407316(0x6d2)][_0x407316(0x12f9)]['height'] - 0x50)['setDepth'](this['scene'][_0x407316(0x12f9)]['height']), this[_0x407316(0x753)]['setPosition'](this['scene']['renderer'][_0x407316(0x173c)], 0.5 * this[_0x407316(0x6d2)][_0x407316(0x12f9)][_0x407316(0x140e)] + 0x50)['setDepth'](this[_0x407316(0x6d2)]['renderer'][_0x407316(0x140e)]), this['scene'][_0x407316(0x12a1)][_0x407316(0x18bd)]({
                            'targets': [this[_0x407316(0x1433)], this['RightHand']],
                            'scaleX': 0x1,
                            'scaleY': 0x1,
                            'duration': 0x1f4
                        });
                    } ['MakeMasksBreakable']() {
                        const _0x4e1551 = _0x5637dd;
                        this[_0x4e1551(0x41c)] = 0x0, this['BreakEnabled'] = !0x0, this[_0x4e1551(0x71d)]['isDead'] || this[_0x4e1551(0x71d)][_0x4e1551(0x112c)](!0x0), this[_0x4e1551(0x160)][_0x4e1551(0xdae)] || this['eye2']['BreakOnNextAttack'](!0x0), this['eye3']['isDead'] || this['eye3']['BreakOnNextAttack'](!0x0), this[_0x4e1551(0x6a6)][_0x4e1551(0xdae)] || this[_0x4e1551(0x6a6)]['BreakOnNextAttack'](!0x0), this[_0x4e1551(0xe8b)][_0x4e1551(0xdae)] || this[_0x4e1551(0xe8b)][_0x4e1551(0x112c)](!0x0), this[_0x4e1551(0xd59)][_0x4e1551(0xdae)] || this['eye6'][_0x4e1551(0x112c)](!0x0), this[_0x4e1551(0x19b6)][_0x4e1551(0xdae)] || this['eye7'][_0x4e1551(0x112c)](!0x0);
                    } ['OnMaskBroken']() {
                        const _0x59b368 = _0x5637dd;
                        this[_0x59b368(0x121a)] += 0x1, this[_0x59b368(0x41c)] = 0x0, this[_0x59b368(0x71d)][_0x59b368(0xdae)] || this[_0x59b368(0x71d)][_0x59b368(0x112c)](!0x1), this['eye2'][_0x59b368(0xdae)] || this['eye2']['BreakOnNextAttack'](!0x1), this['eye3']['isDead'] || this[_0x59b368(0x1371)][_0x59b368(0x112c)](!0x1), this['eye4']['isDead'] || this[_0x59b368(0x6a6)][_0x59b368(0x112c)](!0x1), this[_0x59b368(0xe8b)][_0x59b368(0xdae)] || this['eye5'][_0x59b368(0x112c)](!0x1), this[_0x59b368(0xd59)]['isDead'] || this[_0x59b368(0xd59)][_0x59b368(0x112c)](!0x1), this[_0x59b368(0x19b6)]['isDead'] || this[_0x59b368(0x19b6)][_0x59b368(0x112c)](!0x1);
                    } ['TriggerPhase3']() {
                        const _0x29b716 = _0x5637dd;
                        this['currentPhase'] = 0x3, this[_0x29b716(0xef8)] = 0x0, this[_0x29b716(0xfdb)](), this[_0x29b716(0x6d2)]['tweens']['add']({
                            'targets': [this['LeftHand'], this['RightHand']],
                            'scaleX': 0x0,
                            'scaleY': 0x0,
                            'duration': 0x1f4
                        });
                    } ['TriggerPhase4']() {
                        const _0x5f360f = _0x5637dd;
                        this[_0x5f360f(0x997)] = 0x1f4, this['currentPhase'] = 0x4, this[_0x5f360f(0x522)]();
                    } ['TriggerPhase5']() {
                        const _0x1bfbcf = _0x5637dd;
                        this['currentPhase'] = 0x5, this[_0x1bfbcf(0xd04)]();
                    } ['ThrowEggR'](_0x5b5c08, _0x30d410) {
                        const _0x56ee8a = _0x5637dd;
                        this[_0x56ee8a(0x753)][_0x56ee8a(0x183e)][_0x56ee8a(0x902)]('throw'), this['RightHand'][_0x56ee8a(0x293)](!0x1), _0x5b5c08 ? this[_0x56ee8a(0x15b4)][_0x56ee8a(0xada)](_0x5b5c08, _0x30d410) : this[_0x56ee8a(0x15b4)]['SpawnAt'](this['RightHand']['x'], this['RightHand']['y']), this['scene'][_0x56ee8a(0x915)][_0x56ee8a(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x9043f = _0x56ee8a;
                                this[_0x9043f(0x753)]['anims'][_0x9043f(0x902)]('idle'), this[_0x9043f(0x753)]['setFlipY'](!0x0);
                            }
                        });
                    } ['ThrowEggL'](_0x1e4086, _0x23b44d) {
                        const _0x4b91b2 = _0x5637dd;
                        this[_0x4b91b2(0x1433)][_0x4b91b2(0x183e)][_0x4b91b2(0x902)]('throw'), this[_0x4b91b2(0x1433)][_0x4b91b2(0x293)](!0x1), _0x1e4086 ? this['pool_eggs']['SpawnAt'](_0x1e4086, _0x23b44d) : this[_0x4b91b2(0x15b4)]['SpawnAt'](this[_0x4b91b2(0x753)]['x'], this['RightHand']['y']), this['scene'][_0x4b91b2(0x915)][_0x4b91b2(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x19caa1 = _0x4b91b2;
                                this[_0x19caa1(0x1433)]['anims'][_0x19caa1(0x902)]('idle'), this['LeftHand'][_0x19caa1(0x293)](!0x0);
                            }
                        });
                    } ['ThrowEye']() {
                        const _0x296d50 = _0x5637dd;
                        this['RightHand']['anims'][_0x296d50(0x902)]('throw'), this[_0x296d50(0x753)]['setFlipY'](!0x1), this[_0x296d50(0x1543)]['SpawnAt'](this[_0x296d50(0x753)]['x'] + 0x10, this[_0x296d50(0x753)]['y']), this[_0x296d50(0x6d2)][_0x296d50(0x915)]['addEvent']({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x31b010 = _0x296d50;
                                this['RightHand']['anims'][_0x31b010(0x902)]('idle'), this[_0x31b010(0x753)][_0x31b010(0x293)](!0x0);
                            }
                        });
                    } ['Update'](_0x7b9e3b) {
                        const _0x24b881 = _0x5637dd;
                        switch (this[_0x24b881(0x626)]) {
                            case 0x0:
                            case 0x1:
                            case 0x2:
                                this[_0x24b881(0x1896)](_0x7b9e3b);
                                break;
                            case 0x3:
                                this['Movement_Behaviour3'](_0x7b9e3b);
                                break;
                            case 0x4:
                                this[_0x24b881(0xc99)](_0x7b9e3b);
                        }
                        this[_0x24b881(0x2e3)] += _0x7b9e3b, this[_0x24b881(0x2e3)] >= this['attackDelay'] && (this[_0x24b881(0x2e3)] = 0x0, this['CheckAttack']()), this[_0x24b881(0xe7f)] && (this['breakTimer'] += _0x7b9e3b, this[_0x24b881(0x41c)] > this[_0x24b881(0x1088)] && (this[_0x24b881(0x41c)] = 0x0, this[_0x24b881(0x16c)]()));
                        let _0x9921b6 = -this[_0x24b881(0x6d2)]['renderer']['height'];
                        this[_0x24b881(0x626)] >= 0x4 && (_0x9921b6 = 0x0), this[_0x24b881(0xb4a)](_0x9921b6), this[_0x24b881(0x71d)][_0x24b881(0xb4a)](0x49 + this['eye1']['y'] - _0x103cf5['default']['Core'][_0x24b881(0x10f6)]['y']), this[_0x24b881(0x160)][_0x24b881(0xb4a)](0x49 + this[_0x24b881(0x160)]['y'] - _0x103cf5['default'][_0x24b881(0x1043)][_0x24b881(0x10f6)]['y']), this[_0x24b881(0x1371)][_0x24b881(0xb4a)](0x49 + this[_0x24b881(0x1371)]['y'] - _0x103cf5['default'][_0x24b881(0x1043)][_0x24b881(0x10f6)]['y']), this['eye4'][_0x24b881(0xb4a)](0x49 + this['eye4']['y'] - _0x103cf5[_0x24b881(0xd2c)]['Core'][_0x24b881(0x10f6)]['y']), this['eye5']['setDepth'](0x49 + this['eye5']['y'] - _0x103cf5[_0x24b881(0xd2c)][_0x24b881(0x1043)][_0x24b881(0x10f6)]['y']), this[_0x24b881(0xd59)][_0x24b881(0xb4a)](0x49 + this[_0x24b881(0xd59)]['y'] - _0x103cf5['default'][_0x24b881(0x1043)][_0x24b881(0x10f6)]['y']), this[_0x24b881(0x19b6)][_0x24b881(0xb4a)](0x49 + this['eye7']['y'] - _0x103cf5[_0x24b881(0xd2c)][_0x24b881(0x1043)][_0x24b881(0x10f6)]['y']), this['stars1']['setDepth'](this['depth'] + 0x1), this['stars2'][_0x24b881(0xb4a)](this['depth'] + 0x1), this['eye1']['setScale'](this['scale1']), this[_0x24b881(0x160)]['setScale'](this['scale2']), this[_0x24b881(0x1371)][_0x24b881(0x8a2)](this[_0x24b881(0x171)]), this[_0x24b881(0x6a6)][_0x24b881(0x8a2)](this[_0x24b881(0x304)]), this['eye5']['setScale'](this[_0x24b881(0x47b)]), this[_0x24b881(0xd59)][_0x24b881(0x8a2)](this['scale6']), this[_0x24b881(0x19b6)][_0x24b881(0x8a2)](this[_0x24b881(0xeb2)]), this['HasHands'] && (this[_0x24b881(0x1433)]['setPosition'](this['x'] - 0x30, this['y'])[_0x24b881(0xb4a)](this[_0x24b881(0x16c6)] + 0x2), this[_0x24b881(0x753)]['setPosition'](this['x'] + 0x30, this['y'])[_0x24b881(0xb4a)](this[_0x24b881(0x16c6)] + 0x2));
                        let _0x2ea191 = this[_0x24b881(0x1031)] * _0x7b9e3b * 0.25;
                        this[_0x24b881(0x189d)] += _0x2ea191, this['myAngle2'] += _0x2ea191, this['myAngle3'] += _0x2ea191, this['myAngle4'] += _0x2ea191, this[_0x24b881(0x1492)] += _0x2ea191, this[_0x24b881(0x1a00)] += _0x2ea191, this[_0x24b881(0x171b)] += _0x2ea191;
                        let _0x4b67a2 = 0x0,
                            _0x2660de = 0x0;
                        if (_0x4b67a2 = this['x'] + 0x6c * Math[_0x24b881(0xd7e)](this['myAngle1']), _0x2660de = -0x40 + this['y'] + Math['sin'](this[_0x24b881(0xb94)]) * this['radius2'], this['eye1']['x'] = _0x4b67a2, this[_0x24b881(0x71d)]['y'] = _0x2660de, _0x4b67a2 = this['x'] + 0x6c * Math[_0x24b881(0xd7e)](this['myAngle2']), _0x2660de = -0x40 + this['y'] + Math[_0x24b881(0xc80)](this[_0x24b881(0x10ec)]) * this[_0x24b881(0xcbb)], this['eye2']['x'] = _0x4b67a2, this[_0x24b881(0x160)]['y'] = _0x2660de, _0x4b67a2 = this['x'] + 0x6c * Math[_0x24b881(0xd7e)](this['myAngle3']), _0x2660de = -0x40 + this['y'] + Math['sin'](this[_0x24b881(0x1959)]) * this['radius6'], this[_0x24b881(0x1371)]['x'] = _0x4b67a2, this[_0x24b881(0x1371)]['y'] = _0x2660de, _0x4b67a2 = this['x'] + 0x6c * Math[_0x24b881(0xd7e)](this[_0x24b881(0x1959)]), _0x2660de = -0x40 + this['y'] + Math[_0x24b881(0xc80)](this[_0x24b881(0x1492)]) * this[_0x24b881(0x150f)], this[_0x24b881(0x6a6)]['x'] = _0x4b67a2, this[_0x24b881(0x6a6)]['y'] = _0x2660de, _0x4b67a2 = this['x'] + 0x6c * Math[_0x24b881(0xd7e)](this[_0x24b881(0x1492)]), _0x2660de = -0x40 + this['y'] + Math[_0x24b881(0xc80)](this[_0x24b881(0x1a00)]) * this[_0x24b881(0x122d)], this['eye5']['x'] = _0x4b67a2, this[_0x24b881(0xe8b)]['y'] = _0x2660de, _0x4b67a2 = this['x'] + 0x6c * Math['cos'](this['myAngle6']), _0x2660de = -0x40 + this['y'] + Math[_0x24b881(0xc80)](this['myAngle7']) * this[_0x24b881(0xbdb)], this[_0x24b881(0xd59)]['x'] = _0x4b67a2, this[_0x24b881(0xd59)]['y'] = _0x2660de, _0x4b67a2 = this['x'] + 0x6c * Math['cos'](this['myAngle7']), _0x2660de = -0x40 + this['y'] + Math[_0x24b881(0xc80)](this[_0x24b881(0x189d)]) * this[_0x24b881(0xc9d)], this[_0x24b881(0x19b6)]['x'] = _0x4b67a2, this['eye7']['y'] = _0x2660de, this[_0x24b881(0x1a4d)]) {
                            for (let _0x1daaee = 0x0; _0x1daaee < this['explosionPool'][_0x24b881(0x13f4)]['length']; _0x1daaee++) this[_0x24b881(0x1a4d)][_0x24b881(0x13f4)][_0x1daaee]['Update'](_0x7b9e3b);
                        }
                        this[_0x24b881(0x67b)][_0x24b881(0xa9f)](_0x7b9e3b);
                    } ['OnRecycle']() {
                        const _0x222eab = _0x5637dd;
                        super[_0x222eab(0x5ce)](), this[_0x222eab(0x177d)] = !0x1, this['setOrigin'](0.5), this[_0x222eab(0x8a2)](0x1), this['body']['setCircle'](0xc, 0x3, 0x3), this[_0x222eab(0x8a2)](0x5);
                    } ['GetDamaged'](_0x4d0ef1, _0x39ffdd, _0x26017e, _0x39a69b) {
                        const _0x5efc3c = _0x5637dd;
                        this['owner'] && this[_0x5efc3c(0x351)]['GetDamaged'](_0x4d0ef1, _0x39ffdd, _0x26017e, _0x39a69b), this[_0x5efc3c(0x279)] || (this[_0x5efc3c(0x4a0)] += _0x4d0ef1, this[_0x5efc3c(0xef8)] += 0x1, super[_0x5efc3c(0x1112)](_0x4d0ef1, _0x39ffdd, _0x26017e, _0x39a69b));
                    } ['Die']() {} ['Disappear']() {} ['Approach'](_0x469472, _0x5de6d8, _0x160a82) {
                        const _0x430741 = _0x5637dd;
                        return _0x469472 < _0x5de6d8 ? Math[_0x430741(0x1084)](_0x469472 + _0x160a82, _0x5de6d8) : Math[_0x430741(0x1981)](_0x469472 - _0x160a82, _0x5de6d8);
                    } ['DamagingZone_Explosions'](_0x463575 = 0x0, _0x515df9 = !0x1, _0x2127e0 = 0x2710) {
                        const _0x2083d8 = _0x5637dd;
                        this['explosionPool'][_0x2083d8(0xada)](_0x103cf5['default'][_0x2083d8(0x1043)][_0x2083d8(0x10f6)]['x'], _0x103cf5['default']['Core'][_0x2083d8(0x10f6)]['y'] + _0x463575, this['scene']['renderer']['width'], 0x64, 0xc, _0x2127e0 * this[_0x2083d8(0x338)], 0x1f4, 'Explosions', _0x515df9)['lockX'] = !0x0;
                    } ['ShootEyes'](_0x3eaa2a, _0x347417, _0x48c158 = 0x1) {
                        const _0x21d3f7 = _0x5637dd;
                        for (let _0x47ee2f = 0x0; _0x47ee2f < _0x3eaa2a; _0x47ee2f++) this['scene'][_0x21d3f7(0x915)]['addEvent']({
                            'delay': _0x347417 * _0x47ee2f,
                            'callback': () => {
                                const _0x328e74 = _0x21d3f7;
                                this[_0x328e74(0x67b)][_0x328e74(0x400)](_0x48c158);
                            }
                        });
                    } ['MakeWhiteHand']() {
                        const _0x25fc16 = _0x5637dd;
                        this['WhiteHand'] = this[_0x25fc16(0x6d2)]['add']['sprite'](this['scene'][_0x25fc16(0x12f9)][_0x25fc16(0x173c)] + 0x20, 0.5 * this[_0x25fc16(0x6d2)][_0x25fc16(0x12f9)][_0x25fc16(0x140e)], 'enemies3', 'WhiteHand_i01.png');
                        const _0xcadf8e = this[_0x25fc16(0x47e)][_0x25fc16(0x183e)][_0x25fc16(0x1756)]('enemies3', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x0,
                            'prefix': 'WhiteHand_i0',
                            'suffix': '.png'
                        });
                        this[_0x25fc16(0x47e)][_0x25fc16(0x183e)][_0x25fc16(0x6a8)]({
                            'key': 'idle',
                            'frames': _0xcadf8e,
                            'frameRate': 0x3c,
                            'repeat': -0x1
                        }), this[_0x25fc16(0x47e)][_0x25fc16(0x183e)][_0x25fc16(0x902)]('idle'), this['WhiteHand']['setOrigin'](0.5, 0x1), this['WhiteHand']['setScale'](0x2), this[_0x25fc16(0x47e)]['setScrollFactor'](0x0), this[_0x25fc16(0x47e)][_0x25fc16(0xb4a)](0x2710);
                    } ['DragInWhiteHand']() {
                        const _0x3d5226 = _0x5637dd;
                        this[_0x3d5226(0x47e)]['x'] = this[_0x3d5226(0x6d2)][_0x3d5226(0x12f9)][_0x3d5226(0x173c)] + 0x20, this['WhiteHand'][_0x3d5226(0x8a2)](0x2), this['RightHand']['setFlipX'](!0x0), this['RightHand'][_0x3d5226(0x293)](!0x1), this['RightHand']['setOrigin'](0x1, 0.5), this[_0x3d5226(0x753)]['x'] = this[_0x3d5226(0x47e)]['x'] - 0xc, this[_0x3d5226(0x753)]['y'] = 0.5 * this[_0x3d5226(0x6d2)][_0x3d5226(0x12f9)]['height'] - 0x20, this['RightHand'][_0x3d5226(0x8a2)](0x4), this[_0x3d5226(0x753)]['anims']['play']('pinch_start'), this['scene'][_0x3d5226(0x12a1)]['add']({
                            'targets': this[_0x3d5226(0x753)],
                            'scale': 0x1,
                            'duration': 0x3e8,
                            'onComplete': () => {}
                        }), this[_0x3d5226(0x6d2)]['tweens'][_0x3d5226(0x18bd)]({
                            'delay': 0x44c,
                            'targets': [this[_0x3d5226(0x47e)], this[_0x3d5226(0x753)]],
                            'x': 0.5 * this[_0x3d5226(0x6d2)]['renderer'][_0x3d5226(0x173c)],
                            'duration': 0xbb8,
                            'onStart': () => {
                                const _0x2f21bd = _0x3d5226;
                                this['RightHand'][_0x2f21bd(0x183e)][_0x2f21bd(0x902)]('pinch_do');
                            },
                            'onUpdate': () => {
                                const _0xcfee0e = _0x3d5226;
                                this[_0xcfee0e(0x753)]['x'] = this[_0xcfee0e(0x47e)]['x'] - 0xc;
                            },
                            'onComplete': () => {
                                const _0x3623ac = _0x3d5226;
                                _0x103cf5[_0x3623ac(0xd2c)][_0x3623ac(0x1043)]['Player']['hp'] = 0x0, _0x103cf5[_0x3623ac(0xd2c)][_0x3623ac(0x1043)][_0x3623ac(0x10f6)]['Die'](), _0x103cf5['default']['Core'][_0x3623ac(0x92a)](), this[_0x3623ac(0x6d2)][_0x3623ac(0x12a1)][_0x3623ac(0x18bd)]({
                                    'targets': [this[_0x3623ac(0x753)], this[_0x3623ac(0x47e)]],
                                    'scale': 0x0,
                                    'duration': 0x1f4
                                });
                            }
                        });
                    }
                }
                _0xdcd86f['default'] = _0x433491;
            };
