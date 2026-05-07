// Module 0x10fc4
// Args: _0x4d7be2, _0x662dc8, _0x28f597

export default (_0x4d7be2, _0x662dc8, _0x28f597) => {
                'use strict';
                const _0x1b99ff = a0_0x6932;
                var _0x349682 = this && this['__importDefault'] || function(_0x5e2ab5) {
                    return _0x5e2ab5 && _0x5e2ab5['__esModule'] ? _0x5e2ab5 : {
                        'default': _0x5e2ab5
                    };
                };
                Object['defineProperty'](_0x662dc8, '__esModule', {
                    'value': !0x0
                }), _0x662dc8['TwitchUsername'] = void 0x0;
                const _0x50a799 = _0x349682(_0x28f597(0x5103));
                class _0x28c06f extends Phaser['GameObjects']['BitmapText'] {
                    constructor(_0x281dd7, _0x22cc08, _0x39a05c) {
                        const _0x9ee2ab = _0x1b99ff;
                        if (super(_0x281dd7['scene'], _0x22cc08, _0x39a05c, 'titleFont', ''), this['isCullable'] = !0x0, this[_0x9ee2ab(0x187a)] = !0x1, this['owner'] = null, this['pool'] = _0x281dd7, this['tween2'] = this['scene'][_0x9ee2ab(0x12a1)]['add']({
                                'targets': this,
                                'scale': _0x50a799['default'][_0x9ee2ab(0x15db)],
                                'duration': 0x258,
                                'paused': !0x0,
                                'onComplete': () => {
                                    this['setVisible'](!0x1), this['DeSpawn']();
                                }
                            }), 0x0 == _0x28c06f['RANDOMS'][_0x9ee2ab(0xed9)]) {
                            for (let _0x37b839 = 0x0; _0x37b839 < 0x1f4; _0x37b839++) _0x28c06f['RANDOMS'][_0x9ee2ab(0x1564)](Math[_0x9ee2ab(0x9ad)]() - 0.5), _0x28c06f['RANDOMSY'][_0x9ee2ab(0x1564)](0xc * Math['random']());
                        }
                        this['scene'][_0x9ee2ab(0x18bd)]['existing'](this);
                    } ['OnTeleportOnCull']() {} ['Init']() {
                        const _0x1cddeb = _0x1b99ff;
                        this[_0x1cddeb(0xb4a)](Number['MAX_SAFE_INTEGER']), this['setOrigin'](0.5, 0x1), this[_0x1cddeb(0xd87)](0x0);
                    } ['OnRecycle'](_0x2a9f1b = 0x0, _0x8804a4 = 0x0, _0x8085ad = '', _0x31c864 = 0x12c) {
                        const _0x5b51fc = _0x1b99ff;
                        var _0x7fbe2b, _0x13c0c9 = _0x28c06f[_0x5b51fc(0x8f6)][_0x28c06f['INDEX'] % 0x1f4];
                        _0x28c06f[_0x5b51fc(0x2f8)]++, this[_0x5b51fc(0x35a)] = !0x0, this['alpha'] = 0x1, this['scale'] = _0x50a799['default'][_0x5b51fc(0x15db)], this['x'] = _0x2a9f1b + 0x20 * _0x13c0c9, this['y'] = _0x8804a4 - 0x10, this['text'] = _0x8085ad, this['setTint'](Phaser[_0x5b51fc(0xa82)]['Color']['GetColor'](0xff * Math[_0x5b51fc(0x9ad)](), 0xff * Math[_0x5b51fc(0x9ad)](), 0xff * Math[_0x5b51fc(0x9ad)]())), null === (_0x7fbe2b = this['tween1']) || void 0x0 === _0x7fbe2b || _0x7fbe2b[_0x5b51fc(0x1a34)]();
                        var _0x17a950 = _0x28c06f[_0x5b51fc(0xc24)][_0x28c06f[_0x5b51fc(0x116a)] % 0x1f4];
                        _0x28c06f[_0x5b51fc(0x116a)]++, this['tween1'] = this['scene']['tweens'][_0x5b51fc(0x18bd)]({
                            'targets': this,
                            'y': this['y'] - _0x17a950,
                            'scale': 0.5,
                            'duration': _0x31c864,
                            'onComplete': () => {
                                const _0x751f9b = _0x5b51fc;
                                0x12c === _0x31c864 ? (this[_0x751f9b(0x15fa)][_0x751f9b(0x15dd)](), this[_0x751f9b(0x15fa)][_0x751f9b(0x1374)]()) : (this['setVisible'](!0x1), this['DeSpawn']());
                            }
                        });
                    } ['QuickHide']() {
                        const _0x3fa697 = _0x1b99ff;
                        this[_0x3fa697(0x35a)] && (this['tween1'] && this['tween1']['stop'](), this['tween2'] && this[_0x3fa697(0x15fa)]['stop'](), this['setVisible'](!0x1), this['setAlpha'](0x0), this['DeSpawn']());
                    } ['DeSpawn']() {
                        const _0x12e24f = _0x1b99ff;
                        this[_0x12e24f(0xc82)][_0x12e24f(0x4ed)](this);
                    }
                }
                _0x662dc8['TwitchUsername'] = _0x28c06f, _0x28c06f['RANDOMS'] = new Array(), _0x28c06f['INDEX'] = 0x0, _0x28c06f['RANDOMSY'] = new Array(), _0x28c06f['INDEXY'] = 0x0, _0x662dc8['default'] = _0x28c06f;
            };
