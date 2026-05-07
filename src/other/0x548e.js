// Module 0x548e
// Args: _0x541949, _0x3d3d2f, _0x2eff6b

export default (_0x541949, _0x3d3d2f, _0x2eff6b) => {
                'use strict';
                const _0x51061f = a0_0x6932;
                var _0x4d7cdc = this && this['__importDefault'] || function(_0x5612db) {
                    return _0x5612db && _0x5612db['__esModule'] ? _0x5612db : {
                        'default': _0x5612db
                    };
                };
                Object['defineProperty'](_0x3d3d2f, '__esModule', {
                    'value': !0x0
                });
                const _0x2f79a4 = _0x2eff6b(0x18304),
                    _0x4bda19 = _0x4d7cdc(_0x2eff6b(0x5f07)),
                    _0x13bcae = _0x4d7cdc(_0x2eff6b(0x869f));
                class _0x257fc9 extends _0x13bcae['default'] {
                    constructor() {
                        const _0x2496ba = _0x51061f;
                        super(...arguments), this[_0x2496ba(0xc2e)] = 0x0;
                    } ['MakeLevelOne']() {
                        const _0x3a2ee4 = _0x51061f;
                        super['MakeLevelOne'](), this['on'](Phaser[_0x3a2ee4(0x1905)][_0x3a2ee4(0xd60)]['ANIMATION_UPDATE'], function(_0x27ad5f, _0x2cbb1f, _0x532f67, _0x3073dd) {
                            ('onna_03.png' === _0x3073dd || 'onna_06.png' === _0x3073dd || 'onna_09.png' === _0x3073dd || 'onna_12.png' === _0x3073dd || 'onna_15.png' === _0x3073dd || 'onna_18.png' === _0x3073dd) && this['FireWeapons']();
                        }, this), this[_0x3a2ee4(0x11aa)] || (this['sparkSprite'] = this['scene']['add'][_0x3a2ee4(0x568)](this['x'], this['y'], 'vfx', 'blurredSharpStar.png')[_0x3a2ee4(0xdab)](0x0)['setScale'](0x0)[_0x3a2ee4(0x11c7)](_0x2f79a4['BlendModes']['ADD'])['setDepth'](-0x1)), this[_0x3a2ee4(0x8ee)] || (this['ringSprite'] = this['scene']['add'][_0x3a2ee4(0x568)](this['x'], this['y'], 'vfx', 'sPFX_ring_64.png')[_0x3a2ee4(0xdab)](0x0)[_0x3a2ee4(0x8a2)](0x0)['setBlendMode'](_0x2f79a4['BlendModes'][_0x3a2ee4(0x1811)])['setDepth'](-0x1));
                    } ['PlaySparkle']() {
                        const _0x251f62 = _0x51061f;
                        var _0x4bb650, _0x5c096f;
                        null === (_0x4bb650 = this['ringTween']) || void 0x0 === _0x4bb650 || _0x4bb650['stop'](), this['ringTween'] = this[_0x251f62(0x6d2)][_0x251f62(0x12a1)][_0x251f62(0x18bd)]({
                            'targets': this[_0x251f62(0x8ee)],
                            'scaleX': 1.5,
                            'scaleY': 1.5,
                            'alpha': 0.1,
                            'duration': 0xfa,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x2bd686 = _0x251f62;
                                this['ringSprite'][_0x2bd686(0x8a2)](0x0), this[_0x2bd686(0x8ee)][_0x2bd686(0xdab)](0x1);
                            }
                        }), null === (_0x5c096f = this[_0x251f62(0xa13)]) || void 0x0 === _0x5c096f || _0x5c096f[_0x251f62(0x1a34)](), this['sparkTween'] = this['scene'][_0x251f62(0x12a1)]['add']({
                            'targets': this[_0x251f62(0x11aa)],
                            'scaleX': 0x2,
                            'scaleY': 0x2,
                            'alpha': 0.5,
                            'angle': 0xb4,
                            'duration': 0xfa,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x41c06e = _0x251f62;
                                this['sparkSprite'][_0x41c06e(0x8a2)](0x0), this[_0x41c06e(0x11aa)]['setAlpha'](0x1), this['sparkSprite'][_0x41c06e(0x9b5)](0x0);
                            },
                            'onUpdate': () => {
                                const _0x3f64bc = _0x251f62;
                                this[_0x3f64bc(0x11aa)]['x'] = this['x'], this['sparkSprite']['y'] = this['y'] - 0x14, this[_0x3f64bc(0x8ee)]['x'] = this['x'], this[_0x3f64bc(0x8ee)]['y'] = this['y'] - 0x14;
                            },
                            'onComplete': () => {
                                const _0x19dae5 = _0x251f62;
                                this[_0x19dae5(0x8ee)][_0x19dae5(0xdab)](0x0), this[_0x19dae5(0x11aa)][_0x19dae5(0xdab)](0x0);
                            }
                        });
                    } ['FireWeapons']() {
                        const _0x185479 = _0x51061f;
                        let _0x1bce5e = _0x4bda19[_0x185479(0xd2c)]['Core'][_0x185479(0x506)][_0x185479(0x9d4)](_0x1dcfa7 => !_0x1dcfa7['isPowerUp']);
                        for (let _0x5ac6db = 0x0; _0x5ac6db < _0x1bce5e[_0x185479(0xed9)]; _0x5ac6db++) _0x1bce5e[_0x5ac6db][_0x185479(0xa26)]();
                        this[_0x185479(0xc2e)] += 0x1, this[_0x185479(0xc2e)] >= _0x1bce5e[_0x185479(0xed9)] && (this[_0x185479(0xc2e)] = 0x0);
                        let _0x246123 = _0x1bce5e[this['firingIndex']];
                        null == _0x246123 || _0x246123['Fire'](), this['PlaySparkle']();
                    } ['LevelUp']() {
                        const _0x35f8e1 = _0x51061f;
                        super['LevelUp']();
                        let _0x3e2120 = 0x4;
                        _0x4bda19['default']['Core'][_0x35f8e1(0x10f6)][_0x35f8e1(0x1205)] >= 1.6 ? _0x3e2120 = 0x9 : _0x4bda19['default'][_0x35f8e1(0x1043)][_0x35f8e1(0x10f6)]['moveSpeed'] >= 1.5 ? _0x3e2120 = 0x8 : _0x4bda19['default']['Core'][_0x35f8e1(0x10f6)][_0x35f8e1(0x1205)] >= 1.4 ? _0x3e2120 = 0x7 : _0x4bda19[_0x35f8e1(0xd2c)][_0x35f8e1(0x1043)]['Player'][_0x35f8e1(0x1205)] >= 1.3 ? _0x3e2120 = 0x6 : _0x4bda19[_0x35f8e1(0xd2c)]['Core'][_0x35f8e1(0x10f6)]['moveSpeed'] >= 1.2 && (_0x3e2120 = 0x5), this[_0x35f8e1(0x183e)]['play']({
                            'key': 'walk',
                            'frameRate': _0x3e2120,
                            'repeat': -0x1
                        });
                    }
                }
                _0x3d3d2f['default'] = _0x257fc9;
            };
