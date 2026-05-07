// Module 0x11163
// Args: _0x104eba, _0x1d1491, _0x1d69c2

export default (_0x104eba, _0x1d1491, _0x1d69c2) => {
                'use strict';
                const _0x95ce2f = a0_0x6932;
                var _0x428188 = this && this['__importDefault'] || function(_0x38201d) {
                    const _0x5f105d = a0_0x6932;
                    return _0x38201d && _0x38201d['__esModule'] ? _0x38201d : {
                        'default': _0x38201d
                    };
                };
                Object['defineProperty'](_0x1d1491, '__esModule', {
                    'value': !0x0
                }), _0x1d1491['DamageNumber'] = void 0x0;
                const _0x46b446 = _0x428188(_0x1d69c2(0x5103));
                class _0x5e2871 extends Phaser['GameObjects']['BitmapText'] {
                    constructor(_0x195238, _0x231c78, _0x30d72c) {
                        const _0x29db0c = _0x95ce2f;
                        if (super(_0x195238['scene'], _0x231c78, _0x30d72c, 'damage', ''), this[_0x29db0c(0x177d)] = !0x0, this['isTeleportOnCull'] = !0x1, this[_0x29db0c(0x351)] = null, this['pool'] = _0x195238, this['tween2'] = this[_0x29db0c(0x6d2)]['tweens']['add']({
                                'targets': this,
                                'alpha': 0x0,
                                'scale': _0x46b446[_0x29db0c(0xd2c)]['PixelScale'],
                                'duration': 0x258,
                                'paused': !0x0,
                                'onComplete': () => {
                                    const _0x512115 = _0x29db0c;
                                    this[_0x512115(0x14fb)]();
                                }
                            }), 0x0 == _0x5e2871['RANDOMS']['length']) {
                            for (let _0x1f09c5 = 0x0; _0x1f09c5 < 0x1f4; _0x1f09c5++) _0x5e2871[_0x29db0c(0x8f6)][_0x29db0c(0x1564)](Math['random']() - 0.5), _0x5e2871['RANDOMSY'][_0x29db0c(0x1564)](0xc * Math['random']());
                        }
                        this[_0x29db0c(0x6d2)][_0x29db0c(0x18bd)][_0x29db0c(0x1a88)](this);
                    } ['OnTeleportOnCull']() {} ['Init']() {
                        const _0x3c8369 = _0x95ce2f;
                        this['setDepth'](_0x46b446[_0x3c8369(0xd2c)]['ZDamageNumber']), this['setOrigin'](0.5, 0x1), this[_0x3c8369(0xee4)] = 0xccccff, this['Color010'] = 0xffff00, this['Color006'] = Phaser[_0x3c8369(0xa82)]['Color']['GetColor'](0xff, 0x99, 0x80), this[_0x3c8369(0x7e0)] = Phaser['Display'][_0x3c8369(0x150d)]['GetColor'](0xff, 76.5, 0x40), this['Color000'] = 0xffffff, this['ColorNeg'] = Phaser['Display'][_0x3c8369(0x150d)]['GetColor'](0x0, 0xff, 0x0);
                    } ['OnRecycle'](_0x25d0ba = 0x0, _0x565c96 = 0x0, _0xdb1634 = 0x0, _0x6c795b = 0x12c) {
                        const _0x879f0a = _0x95ce2f;
                        var _0x1e28a9, _0x5c231a = _0x5e2871['RANDOMS'][_0x5e2871[_0x879f0a(0x2f8)] % 0x1f4];
                        _0x5e2871['INDEX']++;
                        let _0xbc012f = 0xa * (_0xdb1634 + _0x5c231a);
                        this['visible'] = !0x0, this[_0x879f0a(0xe71)] = 0x1, this[_0x879f0a(0x7cb)] = _0x46b446['default'][_0x879f0a(0x15db)], this['x'] = _0x25d0ba + 0x20 * _0x5c231a, this['y'] = _0x565c96 - 0x10, this['text'] = _0xbc012f[_0x879f0a(0x1969)](), _0xdb1634 >= 0xa ? this[_0x879f0a(0xb34)](this['Color010']) : _0xdb1634 >= 0x6 ? this[_0x879f0a(0xb34)](this['Color006']) : _0xdb1634 >= 0x3 ? this[_0x879f0a(0xb34)](this['Color003']) : _0xdb1634 < 0x0 ? (this[_0x879f0a(0xb34)](this['ColorNeg']), _0xdb1634 *= -0x1, this[_0x879f0a(0x14d6)](_0xdb1634['toFixed']())) : this[_0x879f0a(0xb34)](this[_0x879f0a(0x1a4f)]), null === (_0x1e28a9 = this[_0x879f0a(0x1995)]) || void 0x0 === _0x1e28a9 || _0x1e28a9['stop']();
                        var _0x406be9 = _0x5e2871['RANDOMSY'][_0x5e2871['INDEXY'] % 0x1f4];
                        _0x5e2871[_0x879f0a(0x116a)]++, this[_0x879f0a(0x1995)] = this[_0x879f0a(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'y': this['y'] - _0x406be9,
                            'scale': 0x2,
                            'duration': _0x6c795b,
                            'onComplete': () => {
                                const _0x527495 = _0x879f0a;
                                0x12c === _0x6c795b ? (this['tween2'][_0x527495(0x15dd)](), this['tween2'][_0x527495(0x1374)]()) : (this[_0x527495(0x183f)](!0x1), this['DeSpawn']());
                            }
                        });
                    } ['DeSpawn']() {
                        const _0xae0d19 = _0x95ce2f;
                        this[_0xae0d19(0xc82)]['Return'](this);
                    }
                }
                _0x1d1491['DamageNumber'] = _0x5e2871, _0x5e2871['RANDOMS'] = new Array(), _0x5e2871['INDEX'] = 0x0, _0x5e2871['RANDOMSY'] = new Array(), _0x5e2871['INDEXY'] = 0x0, _0x1d1491['default'] = _0x5e2871;
            };
