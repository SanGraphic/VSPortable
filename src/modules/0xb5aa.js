// Module 0xb5aa
// Args: _0x4f7141, _0x465d26, _0x50281b

export default (_0x4f7141, _0x465d26, _0x50281b) => {
                'use strict';
                const _0x4e0f24 = a0_0x6932;
                var _0x510313 = this && this['__importDefault'] || function(_0x4dcd01) {
                    const _0x4dd7e4 = a0_0x6932;
                    return _0x4dcd01 && _0x4dcd01['__esModule'] ? _0x4dcd01 : {
                        'default': _0x4dcd01
                    };
                };
                Object['defineProperty'](_0x465d26, '__esModule', {
                    'value': !0x0
                });
                const _0x1bb138 = _0x510313(_0x50281b(0x5f07)),
                    _0x1c2f22 = _0x510313(_0x50281b(0x166d5)),
                    _0x5ca2b0 = _0x510313(_0x50281b(0xc42e)),
                    _0x2d03c8 = _0x510313(_0x50281b(0x5103));
                class _0x1128bb extends _0x1c2f22['default'] {
                    constructor(_0x51532b, _0x5bfd69, _0x43e1e7) {
                        const _0x27b4f5 = a0_0x6932;
                        super(_0x51532b, _0x5bfd69, _0x43e1e7, _0x5ca2b0['default']['DIRECTER']), this['angleUnit'] = Math['PI'] / 0x168, _0x1bb138['default']['Core']['scene']['add']['existing'](this), this['setScale'](_0x2d03c8['default']['PixelScale']), this['radius1'] = 0x40, this['radius2'] = 0x40, this['radius3'] = 0x40, this['radius4'] = 0x40, this['radius5'] = 0x40, this['radius6'] = 0x40, this['radius7'] = 0x40, this['myAngle1'] = 0x2 * Math['PI'] * 0x0, this['myAngle2'] = 0x2 * Math['PI'] * 0.23, this['myAngle3'] = 0x2 * Math['PI'] * 0.41, this['myAngle4'] = 0x2 * Math['PI'] * 0.61, this['myAngle5'] = 0x2 * Math['PI'] * 0.71, this['myAngle6'] = 0x2 * Math['PI'] * 0.79, this['myAngle7'] = 0x2 * Math['PI'] * 0.83, this['body']['setCircle'](0x10), this['res_Rosary'] = 0x1, this['setScale'](0x5), this['eye1'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'mask_sun_0.png')['setScale'](0x2), this['eye2'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'mask_moon_0.png')['setScale'](1.75), this['eye3'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'mask_city_0.png')['setScale'](1.5), this['eye4'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'mask_seawind_0.png')['setScale'](1.25), this['eye5'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'mask_volcano_0.png')['setScale'](0x1), this['eye6'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'mask_stone_0.png')['setScale'](0.75), this['eye7'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'nomask_0.png')['setScale'](0.5), this['LeftHand'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'hand_01.png')['setOrigin'](0x1, 0.5)['setScale'](0x1)['setFlipY'](!0x0), this['RightHand'] = this['scene']['add']['sprite'](this['x'], this['y'], 'enemiesM', 'hand_01.png')['setOrigin'](0x0, 0.5)['setScale'](0x1)['setFlipY'](!0x0)['setFlipX'](!0x0);
                        let _0x5a383d = this['LeftHand']['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'hand_',
                            'suffix': '.png'
                        });
                        this['LeftHand']['anims']['create']({
                            'key': 'idle',
                            'frames': _0x5a383d,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this['LeftHand']['anims']['play']('idle'), this['RightHand']['anims']['create']({
                            'key': 'idle',
                            'frames': _0x5a383d,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this['RightHand']['anims']['play']('idle'), this['scene']['tweens']['add']({
                            'radius1': 0x20,
                            'duration': 0x3f1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'radius2': 0x20,
                            'duration': 0x4c1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'radius3': 0x20,
                            'duration': 0x5d1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'radius4': 0x20,
                            'duration': 0x653,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'radius5': 0x20,
                            'duration': 0x745,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'radius6': 0x20,
                            'duration': 0x833,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'radius7': 0x20,
                            'duration': 0x925,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this
                        }), this['scene']['tweens']['add']({
                            'scale': 0.5,
                            'duration': 0x3f1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye1']
                        }), this['scene']['tweens']['add']({
                            'scale': 0.75,
                            'duration': 0x4c1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye2']
                        }), this['scene']['tweens']['add']({
                            'scale': 0x1,
                            'duration': 0x5d1,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye3']
                        }), this['scene']['tweens']['add']({
                            'scale': 1.25,
                            'duration': 0x653,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye4']
                        }), this['scene']['tweens']['add']({
                            'scale': 1.5,
                            'duration': 0x745,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye5']
                        }), this['scene']['tweens']['add']({
                            'scale': 1.75,
                            'duration': 0x833,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye6']
                        }), this['scene']['tweens']['add']({
                            'scale': 0x2,
                            'duration': 0x925,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this['eye7']
                        }), this['stars1'] = this['scene']['add']['tileSprite'](0.5 * this['scene']['renderer']['width'], 0.5 * this['scene']['renderer']['height'], this['scene']['renderer']['width'], this['scene']['renderer']['height'], 'hStars1')['setScrollFactor'](0x0)['setDepth'](this['scene']['renderer']['height'] - 0x1), this['stars2'] = this['scene']['add']['tileSprite'](0.5 * this['scene']['renderer']['width'], 0.5 * this['scene']['renderer']['height'], this['scene']['renderer']['width'], this['scene']['renderer']['height'], 'hStars2')['setScrollFactor'](0x0)['setDepth'](this['scene']['renderer']['height'] - 0x1);
                        let _0x56bb34 = this['createBitmapMask']();
                        this['stars1']['setMask'](_0x56bb34), this['stars2']['setMask'](_0x56bb34), this['scene']['tweens']['add']({
                            'targets': this['stars2'],
                            'alpha': 0.6,
                            'duration': 0x3e8,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this['scene']['tweens']['add']({
                            'targets': this['stars1'],
                            'alpha': 0.6,
                            'duration': 0x3e8,
                            'delay': 0x1f4,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this['scene']['tweens']['add']({
                            'targets': [this['LeftHand'], this['RightHand']],
                            'alpha': 0.4,
                            'scale': 0.9,
                            'duration': 0x3e8,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this['isBehind'] = !0x1;
                    } ['Update'](_0x491a45) {
                        const _0x283fb5 = a0_0x6932;
                        super['Update']();
                        let _0xe04086 = this['isBehind'] ? -this['scene']['renderer']['height'] : 0x9 + this['y'] - _0x1bb138['default']['Core']['Player']['y'];
                        this['setDepth'](_0xe04086), this['eye1']['setDepth'](0x49 + this['eye1']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['eye2']['setDepth'](0x49 + this['eye2']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['eye3']['setDepth'](0x49 + this['eye3']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['eye4']['setDepth'](0x49 + this['eye4']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['eye5']['setDepth'](0x49 + this['eye5']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['eye6']['setDepth'](0x49 + this['eye6']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['eye7']['setDepth'](0x49 + this['eye7']['y'] - _0x1bb138['default']['Core']['Player']['y']), this['stars1']['setDepth'](this['depth'] + 0x1), this['stars2']['setDepth'](this['depth'] + 0x1), this['LeftHand']['setPosition'](this['x'] - 0x30, this['y'])['setDepth'](this['depth'] + 0x2), this['RightHand']['setPosition'](this['x'] + 0x30, this['y'])['setDepth'](this['depth'] + 0x2);
                        let _0x3c0bbf = this['safeXY'](this['x'], this['y']);
                        this['x'] = _0x3c0bbf['x'], this['y'] = _0x3c0bbf['y'], this['myAngle1'] += this['angleUnit'] * _0x491a45, this['myAngle2'] += this['angleUnit'] * _0x491a45, this['myAngle3'] += this['angleUnit'] * _0x491a45, this['myAngle4'] += this['angleUnit'] * _0x491a45, this['myAngle5'] += this['angleUnit'] * _0x491a45, this['myAngle6'] += this['angleUnit'] * _0x491a45, this['myAngle7'] += this['angleUnit'] * _0x491a45;
                        let _0x47148d = 0x0,
                            _0x4738a4 = 0x0;
                        _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle1']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle2']) * this['radius2'], this['eye1']['x'] = _0x47148d, this['eye1']['y'] = _0x4738a4, _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle2']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle3']) * this['radius4'], this['eye2']['x'] = _0x47148d, this['eye2']['y'] = _0x4738a4, _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle3']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle4']) * this['radius6'], this['eye3']['x'] = _0x47148d, this['eye3']['y'] = _0x4738a4, _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle4']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle5']) * this['radius1'], this['eye4']['x'] = _0x47148d, this['eye4']['y'] = _0x4738a4, _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle5']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle6']) * this['radius3'], this['eye5']['x'] = _0x47148d, this['eye5']['y'] = _0x4738a4, _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle6']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle7']) * this['radius5'], this['eye6']['x'] = _0x47148d, this['eye6']['y'] = _0x4738a4, _0x47148d = this['x'] + 0x6c * Math['cos'](this['myAngle7']), _0x4738a4 = -0x40 + this['y'] + Math['sin'](this['myAngle1']) * this['radius7'], this['eye7']['x'] = _0x47148d, this['eye7']['y'] = _0x4738a4;
                    } ['OnRecycle']() {
                        const _0x4325ab = a0_0x6932;
                        super['OnRecycle'](), this['goToPlayer'] = !0x0, this['isStationary'] = !0x0;
                        let _0x2ba99f = this['anims']['generateFrameNames']('enemiesM', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'v_i',
                            'suffix': '.png'
                        });
                        this['setTexture']('enemiesM', 'v_i01.png'), this['anims']['create']({
                            'key': 'idle',
                            'frames': _0x2ba99f,
                            'frameRate': 0xc,
                            'repeat': -0x1
                        }), this['anims']['play']('idle');
                    } ['GetTaken']() {
                        const _0x4afc2f = _0x4e0f24;
                        this[_0x4afc2f(0x210)] || _0x1bb138['default'][_0x4afc2f(0x1043)]['StartDirecterScene'] || (_0x1bb138[_0x4afc2f(0xd2c)][_0x4afc2f(0x1043)]['StartDirecterScene'] = !0x0, this[_0x4afc2f(0x210)] = !0x0);
                    } ['DeSpawn']() {
                        const _0x4c8852 = _0x4e0f24;
                        super[_0x4c8852(0x14fb)](), this[_0x4c8852(0x71d)][_0x4c8852(0x16ca)](), this['eye2']['destroy'](), this[_0x4c8852(0x1371)][_0x4c8852(0x16ca)](), this['eye4'][_0x4c8852(0x16ca)](), this[_0x4c8852(0xe8b)][_0x4c8852(0x16ca)](), this['eye6']['destroy'](), this[_0x4c8852(0x19b6)][_0x4c8852(0x16ca)](), this['LeftHand'][_0x4c8852(0x16ca)](), this['RightHand'][_0x4c8852(0x16ca)](), this[_0x4c8852(0xdc7)]['destroy'](), this[_0x4c8852(0x8bf)][_0x4c8852(0x16ca)]();
                    }
                }
                _0x465d26['default'] = _0x1128bb;
            };
