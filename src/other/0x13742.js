// Module 0x13742
// Args: _0x4abbed, _0x30db2f, _0x2100ca

export default (_0x4abbed, _0x30db2f, _0x2100ca) => {
                'use strict';
                const _0x59f1d1 = a0_0x6932;
                var _0x57c4a2 = this && this['__importDefault'] || function(_0x2258f3) {
                    const _0x458e53 = _0x59f1d1;
                    return _0x2258f3 && _0x2258f3[_0x458e53(0x16f1)] ? _0x2258f3 : {
                        'default': _0x2258f3
                    };
                };
                Object['defineProperty'](_0x30db2f, '__esModule', {
                    'value': !0x0
                });
                const _0x5b8c2c = _0x57c4a2(_0x2100ca(0x5f07)),
                    _0x2b06f3 = _0x57c4a2(_0x2100ca(0xc42e)),
                    _0x54f45a = _0x57c4a2(_0x2100ca(0x5103)),
                    _0x19ad9a = _0x2100ca(0x18304),
                    _0x56569e = _0x2100ca(0x15ee2),
                    _0x3c38cb = _0x57c4a2(_0x2100ca(0xdfbc)),
                    _0xbc910b = _0x57c4a2(_0x2100ca(0x15dd)),
                    _0x1b9319 = _0x57c4a2(_0x2100ca(0x1fd7));
                class _0x1e7959 extends _0x56569e['PickupGuarded'] {
                    constructor(_0x21449b, _0x4cfa2d, _0x2c47fe) {
                        const _0x3ab3e2 = _0x59f1d1;
                        super(_0x21449b, _0x4cfa2d, _0x2c47fe, _0x2b06f3['default'][_0x3ab3e2(0xe76)]), this['charCFF'] = _0x3c38cb[_0x3ab3e2(0xd2c)][_0x3ab3e2(0xbc4)], this[_0x3ab3e2(0xb78)] = 0x64, this['opened'] = !0x1, this['particlesInterval'] = 0xc8, this[_0x3ab3e2(0x1935)] = 0x1, _0x5b8c2c[_0x3ab3e2(0xd2c)][_0x3ab3e2(0x1043)]['scene']['add'][_0x3ab3e2(0x1a88)](this), this['setScale'](_0x54f45a['default']['PixelScale']), this['isStationary'] = !0x0, this[_0x3ab3e2(0x1abc)] = this[_0x3ab3e2(0x6d2)][_0x3ab3e2(0x18bd)][_0x3ab3e2(0x105b)](_0x4cfa2d, _0x2c47fe, 'UI', 'arrow_01.png'), this['Cursor'][_0x3ab3e2(0xb4a)](0x270e), this[_0x3ab3e2(0x1abc)][_0x3ab3e2(0x8a2)](0x2), this[_0x3ab3e2(0x1abc)][_0x3ab3e2(0xdab)](0x1), this['Cursor'][_0x3ab3e2(0x11c7)](_0x19ad9a['BlendModes']['NORMAL']), this[_0x3ab3e2(0x17a0)] = this[_0x3ab3e2(0x6d2)]['add'][_0x3ab3e2(0x105b)](_0x4cfa2d, _0x2c47fe, '', ''), this['CursorIcon']['setDepth'](0x270f), this[_0x3ab3e2(0x17a0)][_0x3ab3e2(0x8a2)](0x1), this[_0x3ab3e2(0x17a0)]['setAlpha'](0x1);
                        const _0x9e4f4 = this[_0x3ab3e2(0x183e)][_0x3ab3e2(0x1756)]('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrow_',
                            'suffix': '.png'
                        });
                        this[_0x3ab3e2(0x1abc)]['anims']['create']({
                            'key': 'idle',
                            'frames': _0x9e4f4,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x3ab3e2(0x1abc)][_0x3ab3e2(0x902)]('idle'), this[_0x3ab3e2(0xf9f)] = this['scene'][_0x3ab3e2(0x18bd)][_0x3ab3e2(0x105b)](this['x'], this['y'], 'items', 'CoffinLid.png')[_0x3ab3e2(0x183f)](!0x1), this[_0x3ab3e2(0x164e)] = this[_0x3ab3e2(0x6d2)]['add'][_0x3ab3e2(0x105b)](this['x'], this['y'], 'characters')['setVisible'](!0x1), this['CharSprite'][_0x3ab3e2(0x8a2)](0x0), this[_0x3ab3e2(0x164e)][_0x3ab3e2(0x652)](0x0), this[_0x3ab3e2(0x1935)] = 0x1;
                    } ['OnRecycle']() {
                        const _0x1f27d0 = _0x59f1d1;
                        super[_0x1f27d0(0x5ce)](), this['Cursor']['setVisible'](!0x0), this[_0x1f27d0(0xcf9)]['setCircle'](0x10, 0x0, 0x8), this['setFrame']('Coffin.png'), this['Lid']['x'] = this['x'], this[_0x1f27d0(0xf9f)]['y'] = this['y'], this[_0x1f27d0(0x164e)]['x'] = this['x'], this['CharSprite']['y'] = this['y'], this['Lid'][_0x1f27d0(0x183f)](!0x0), this[_0x1f27d0(0x164e)][_0x1f27d0(0x183f)](!0x0);
                    } ['DeSpawn']() {
                        const _0x18b917 = _0x59f1d1;
                        super[_0x18b917(0x14fb)](), this[_0x18b917(0x1abc)][_0x18b917(0x183f)](!0x1), this[_0x18b917(0x17a0)][_0x18b917(0x183f)](!0x1);
                    } ['Update'](_0xd6b599) {
                        const _0x2f52ad = _0x59f1d1;
                        if (super[_0x2f52ad(0xa9f)](_0xd6b599), this[_0x2f52ad(0xb4a)](0x9 + this['y'] - _0x5b8c2c[_0x2f52ad(0xd2c)]['Core']['Player']['y']), this[_0x2f52ad(0xf9f)]['setDepth'](0xa + this['y'] - _0x5b8c2c[_0x2f52ad(0xd2c)]['Core']['Player']['y']), Math[_0x2f52ad(0x19db)](this['x'] - _0x5b8c2c['default']['Core'][_0x2f52ad(0x10f6)]['x']) < 0.5 * this[_0x2f52ad(0x6d2)][_0x2f52ad(0x12f9)][_0x2f52ad(0x173c)] && Math[_0x2f52ad(0x19db)](this['y'] - _0x5b8c2c[_0x2f52ad(0xd2c)][_0x2f52ad(0x1043)]['Player']['y']) < 0.5 * this['scene'][_0x2f52ad(0x12f9)][_0x2f52ad(0x140e)] || !_0x5b8c2c['default'][_0x2f52ad(0x1043)]['PlayerOptions']['ShowPickups']) {
                            this[_0x2f52ad(0x1abc)][_0x2f52ad(0x183f)](!0x1), this[_0x2f52ad(0x17a0)][_0x2f52ad(0x183f)](!0x1);
                            for (let _0x21aaf4 = 0x0; _0x21aaf4 < this['guards']['length']; _0x21aaf4++)
                                if (!this['guards'][_0x21aaf4][_0x2f52ad(0xdae)]) return;
                            this[_0x2f52ad(0xb78)] += _0xd6b599, this['totalTime'] > this['particlesInterval'] && (this[_0x2f52ad(0xb78)] = 0x0, _0x5b8c2c['default'][_0x2f52ad(0x1043)][_0x2f52ad(0x10c9)](this['x'], this['y']));
                        } else {
                            var _0x4bc929 = this['AngleFromTargetRadians'](this);
                            this['Cursor'][_0x2f52ad(0x9b5)](Phaser['Math'][_0x2f52ad(0x1470)](_0x4bc929)), this[_0x2f52ad(0x1abc)][_0x2f52ad(0xf01)](_0x5b8c2c['default'][_0x2f52ad(0x1043)][_0x2f52ad(0x10f6)]), this[_0x2f52ad(0x1abc)]['x'] += 0.45 * Math['cos'](_0x4bc929) * this['scene']['renderer']['width'], this['Cursor']['y'] += 0.45 * Math[_0x2f52ad(0xc80)](_0x4bc929) * this['scene']['renderer'][_0x2f52ad(0x140e)], this['Cursor'][_0x2f52ad(0x183f)](!0x0), this[_0x2f52ad(0x17a0)]['copyPosition'](this['Cursor']), this[_0x2f52ad(0x17a0)]['setVisible'](!0x0);
                        }
                    } ['setChar'](_0x4bbfbe) {
                        const _0x3b9126 = _0x59f1d1;
                        this[_0x3b9126(0x739)] = _0x4bbfbe, this[_0x3b9126(0x17a0)]['setTexture']('UI', 'Coff.png');
                        let _0x16b34c = _0xbc910b[_0x3b9126(0xd2c)][this['charCFF']];
                        _0x16b34c && this[_0x3b9126(0x164e)][_0x3b9126(0x381)](_0x16b34c[0x0]['spriteName']);
                    } ['GetTaken']() {
                        const _0x35c914 = _0x59f1d1;
                        if (!this[_0x35c914(0x210)] && !this[_0x35c914(0x6f8)]) {
                            for (let _0x26e782 = 0x0; _0x26e782 < this[_0x35c914(0x163f)][_0x35c914(0xed9)]; _0x26e782++)
                                if (!this[_0x35c914(0x163f)][_0x26e782]['isDead']) return;
                            this['opened'] = !0x0, this[_0x35c914(0x1abc)][_0x35c914(0x183f)](!0x1), this['CursorIcon']['setVisible'](!0x1), _0x5b8c2c['default'][_0x35c914(0x1267)][_0x35c914(0x1099)](_0x5b8c2c['default'][_0x35c914(0x1043)]['CurrentBGM'], 0.1, 0x64), _0x5b8c2c[_0x35c914(0xd2c)][_0x35c914(0x1267)]['PlaySound'](_0x1b9319['default']['Lid'], {
                                'volume': 0x2
                            }, 0x96, 0x2), _0x5b8c2c['default'][_0x35c914(0x1267)]['PlaySound'](_0x1b9319['default'][_0x35c914(0x8d2)], {
                                'volume': 1.4,
                                'detune': -0x7d0,
                                'rate': 0x1
                            }), this[_0x35c914(0x6d2)][_0x35c914(0x12a1)]['add']({
                                'targets': this['CharSprite'],
                                'duration': 0x64,
                                'scaleX': 0x2,
                                'scaleY': 0x4
                            }), this[_0x35c914(0x6d2)]['tweens']['add']({
                                'targets': this['CharSprite'],
                                'duration': 0x190,
                                'y': this['y'] - this[_0x35c914(0x6d2)][_0x35c914(0x12f9)][_0x35c914(0x140e)],
                                'onComplete': () => {
                                    const _0x3da64f = _0x35c914;
                                    this[_0x3da64f(0x164e)][_0x3da64f(0x183f)](!0x1);
                                }
                            }), this['scene']['tweens']['add']({
                                'targets': this['Lid'],
                                'y': this['y'] - 0.75 * this[_0x35c914(0x6d2)][_0x35c914(0x12f9)][_0x35c914(0x140e)],
                                'x': this['x'] - 0.75 * this['scene'][_0x35c914(0x12f9)][_0x35c914(0x173c)],
                                'angle': 0x168,
                                'duration': 0x1f4,
                                'scaleX': -0x1,
                                'onComplete': () => {
                                    const _0x2b2e5a = _0x35c914;
                                    this['Lid'][_0x2b2e5a(0x183f)](!0x1), this['TriggerCharScene']();
                                }
                            });
                        }
                    } ['TriggerCharScene']() {
                        const _0x64ea14 = _0x59f1d1;
                        _0x5b8c2c['default'][_0x64ea14(0x1043)][_0x64ea14(0x136e)]['push'](this['charCFF']), this[_0x64ea14(0x102c)](this[_0x64ea14(0xeb5)]), super[_0x64ea14(0x437)]();
                    }
                }
                _0x30db2f['default'] = _0x1e7959;
            };
