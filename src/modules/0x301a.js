// Module 0x301a
// Args: _0x26a53b, _0x196c18, _0x279ffc

export default (_0x26a53b, _0x196c18, _0x279ffc) => {
                'use strict';
                const _0x445f6d = a0_0x6932;
                var _0x56c0d6 = this && this['__importDefault'] || function(_0x3ac699) {
                    const _0x5ccfa1 = a0_0x6932;
                    return _0x3ac699 && _0x3ac699['__esModule'] ? _0x3ac699 : {
                        'default': _0x3ac699
                    };
                };
                Object['defineProperty'](_0x196c18, '__esModule', {
                    'value': !0x0
                });
                const _0x231c91 = _0x56c0d6(_0x279ffc(0x5f07)),
                    _0x1d25ac = _0x56c0d6(_0x279ffc(0xc42e)),
                    _0x57b903 = _0x279ffc(0x18304),
                    _0x144991 = _0x279ffc(0x15ee2),
                    _0x3b35cb = _0x56c0d6(_0x279ffc(0x4d17));
                class _0x4cbb0a extends _0x144991['PickupGuarded'] {
                    constructor(_0x448de5, _0x3f7dc2, _0x482e98) {
                        const _0x2edd86 = _0x445f6d;
                        super(_0x448de5, _0x3f7dc2, _0x482e98, _0x1d25ac[_0x2edd86(0xd2c)][_0x2edd86(0x149f)]), this['res_Rosary'] = 0x1, this['triggerDelay'] = 0x1e, _0x231c91[_0x2edd86(0xd2c)]['Core'][_0x2edd86(0x6d2)][_0x2edd86(0x18bd)]['existing'](this), this[_0x2edd86(0xc6e)] = !0x0, this['body']['setAllowGravity'](!0x1), this[_0x2edd86(0x8de)] = this[_0x2edd86(0x6d2)][_0x2edd86(0x18bd)][_0x2edd86(0x105b)](_0x3f7dc2, _0x482e98, 'background_Astral', 'door01.png')[_0x2edd86(0xf8e)](0.5, 0x1)[_0x2edd86(0xb4a)](-0x7cb);
                        let _0x300eea = this[_0x2edd86(0x8de)][_0x2edd86(0x183e)]['generateFrameNames']('background_Astral', {
                            'start': 0x1,
                            'end': 0x10,
                            'zeroPad': 0x2,
                            'prefix': 'door',
                            'suffix': '.png'
                        });
                        this['door']['anims']['create']({
                            'key': 'open',
                            'frames': _0x300eea,
                            'frameRate': 0x40,
                            'repeat': 0x0
                        }), this[_0x2edd86(0x2ad)](), _0x231c91['default'][_0x2edd86(0x1043)]['PlayerOptions']['SelectedInverse'] && _0x231c91['default'][_0x2edd86(0x1043)][_0x2edd86(0x14d8)]['VisuallyInvertStages'] && this[_0x2edd86(0x8de)]['setScale'](0x1, -0x1), this['canTeleport'] = !0x0;
                    } ['MakeDoorVFX']() {
                        const _0x513b42 = _0x445f6d;
                        this[_0x513b42(0x360)] = this[_0x513b42(0x6d2)][_0x513b42(0x18bd)]['image'](0x0, 0x0, 'vfx', 'Beam.png')['setScale'](0x0, 0x1)[_0x513b42(0xb34)](0xfafafa)[_0x513b42(0x11c7)](_0x57b903['BlendModes'][_0x513b42(0x1811)])[_0x513b42(0xb4a)](0x7cc), this[_0x513b42(0x10a5)] = this[_0x513b42(0x6d2)][_0x513b42(0x18bd)][_0x513b42(0x568)](0x0, 0x0, 'vfx', 'WhiteDot.png')['setTint'](0xfafafa)['setScale'](this['scene']['renderer']['width'], this[_0x513b42(0x6d2)]['renderer'][_0x513b42(0x140e)])['setScrollFactor'](0x0)['setAlpha'](0x0)['setOrigin'](0x0)['setDepth'](0x7cc);
                    } ['OpenDoorAnimation']() {
                        const _0x128f0e = _0x445f6d;
                        this[_0x128f0e(0x8de)][_0x128f0e(0x183e)]['play']('open'), this[_0x128f0e(0x360)][_0x128f0e(0x726)](this['door']['x'], this['door']['y']), this[_0x128f0e(0x6d2)]['tweens'][_0x128f0e(0x18bd)]({
                            'targets': this['beam'],
                            'scaleX': 0x3,
                            'scaleY': 0x14,
                            'duration': 0xc8
                        }), this[_0x128f0e(0x6d2)]['tweens']['add']({
                            'targets': this['whiteFader'],
                            'alpha': 0x1,
                            'duration': 0x12c,
                            'yoyo': !0x0,
                            'onComplete': () => {
                                this['OnTeleportFinished']();
                            },
                            'onYoyo': () => {
                                const _0x4a60df = _0x128f0e;
                                this['beam'][_0x4a60df(0x8a2)](0x0), this['door']['anims'][_0x4a60df(0x1a34)](), this[_0x4a60df(0x8de)][_0x4a60df(0x381)]('door01.png'), this['DoTeleport']();
                            }
                        });
                    } ['OnRecycle']() {
                        const _0x48d3a5 = _0x445f6d;
                        super['OnRecycle'](), this['colorValue'] = 0x0, this[_0x48d3a5(0xcf9)][_0x48d3a5(0xdf6)](0xc, -0x6, 0x6), this['setVisible'](!0x1);
                    } ['DeSpawn']() {} ['Update'](_0x5b16f5) {
                        const _0x10da11 = _0x445f6d;
                        super[_0x10da11(0xa9f)](_0x5b16f5), this[_0x10da11(0xb4a)](-0x7cb), this[_0x10da11(0x2b2)] = 0x2710, this[_0x10da11(0x8de)]['x'] = this['x'], this[_0x10da11(0x8de)]['y'] = this['y'];
                    } ['GetTaken']() {
                        const _0x2d9c00 = _0x445f6d;
                        this['disableGet'] || this[_0x2d9c00(0x102a)] && (this[_0x2d9c00(0x102a)] = !0x1, this[_0x2d9c00(0xb21)](), this[_0x2d9c00(0x1767)]['Disable'](), this[_0x2d9c00(0x1769)](), _0x3b35cb['default'][this[_0x2d9c00(0xeb5)]][_0x2d9c00(0x856)] += 0x1);
                    } ['LinkTo'](_0x1b596c) {
                        const _0x14f298 = _0x445f6d;
                        this[_0x14f298(0x1767)] = _0x1b596c, this[_0x14f298(0x1784)] = _0x1b596c['x'], this[_0x14f298(0x29c)] = _0x1b596c['y'] + 0x30, _0x231c91['default'][_0x14f298(0x1043)][_0x14f298(0x14d8)][_0x14f298(0x1a93)] && _0x231c91[_0x14f298(0xd2c)][_0x14f298(0x1043)]['PlayerOptions'][_0x14f298(0x64a)] && (this['destinationY'] = _0x1b596c['y'] - 0x30);
                    } ['Disable']() {
                        const _0x255d2a = _0x445f6d;
                        this[_0x255d2a(0xcf9)]['enable'] = !0x1, this['scene']['time'][_0x255d2a(0x12b8)]({
                            'callback': () => {
                                const _0x1e07c1 = _0x255d2a;
                                this[_0x1e07c1(0x102a)] = !0x0, this[_0x1e07c1(0xcf9)][_0x1e07c1(0x543)] = !0x0;
                            },
                            'delay': this[_0x255d2a(0x2b2)]
                        });
                    } ['StartTeleport']() {
                        const _0x2c0696 = _0x445f6d;
                        this['OpenDoorAnimation']();
                        for (let _0x3164a2 = 0x0; _0x3164a2 < _0x231c91[_0x2c0696(0xd2c)]['Core'][_0x2c0696(0x1a91)]['length']; _0x3164a2++) _0x231c91[_0x2c0696(0xd2c)]['Core'][_0x2c0696(0x1a91)][_0x3164a2]['speed'] = 0x0;
                    } ['DoTeleport']() {
                        const _0x2d2323 = _0x445f6d;
                        _0x231c91[_0x2d2323(0xd2c)][_0x2d2323(0x1043)]['Player']['x'] = this['destinationX'], _0x231c91['default']['Core']['Player']['y'] = this[_0x2d2323(0x29c)];
                        for (let _0x59b7a9 = 0x0; _0x59b7a9 < _0x231c91['default']['Core']['Enemies'][_0x2d2323(0xed9)]; _0x59b7a9++) {
                            const _0x499204 = _0x231c91['default'][_0x2d2323(0x1043)][_0x2d2323(0x1a91)][_0x59b7a9];
                            _0x499204[_0x2d2323(0x1935)] || _0x499204[_0x2d2323(0xe00)]();
                        }
                    } ['OnTeleportFinished']() {
                        const _0x16d576 = _0x445f6d;
                        for (let _0x290af6 = 0x0; _0x290af6 < _0x231c91['default']['Core'][_0x16d576(0x1a91)][_0x16d576(0xed9)]; _0x290af6++) {
                            const _0x142634 = _0x231c91[_0x16d576(0xd2c)]['Core'][_0x16d576(0x1a91)][_0x290af6];
                            _0x142634[_0x16d576(0x14a3)] || (_0x142634[_0x16d576(0x78e)] = _0x142634[_0x16d576(0x246)]);
                        }
                    }
                }
                _0x196c18['default'] = _0x4cbb0a;
            };
