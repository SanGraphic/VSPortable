// Module 0x1aef
// Args: _0x372eed, _0x4fa88e, _0x356b62

export default (_0x372eed, _0x4fa88e, _0x356b62) => {
                'use strict';
                const _0x189551 = a0_0x6932;
                var _0x345b24 = this && this['__importDefault'] || function(_0x438858) {
                    return _0x438858 && _0x438858['__esModule'] ? _0x438858 : {
                        'default': _0x438858
                    };
                };
                Object['defineProperty'](_0x4fa88e, '__esModule', {
                    'value': !0x0
                });
                const _0x34823d = _0x345b24(_0x356b62(0x9bda)),
                    _0x31525d = _0x345b24(_0x356b62(0x1fd7)),
                    _0x30d2eb = _0x345b24(_0x356b62(0x5f07)),
                    _0x448a55 = _0x345b24(_0x356b62(0x1166a)),
                    _0xb17e1 = _0x345b24(_0x356b62(0xd1a1));
                class _0x3e5bd5 extends _0x448a55['default'] {
                    constructor(_0x59118c, _0x1933e6, _0x202b75, _0x348fac) {
                        const _0x12c57a = _0x189551;
                        super(_0x59118c, _0x1933e6, _0x202b75, _0x348fac), this[_0x12c57a(0x6ee)] = {
                            'x': -0x1b,
                            'y': -0x1c
                        }, this['rightOffset'] = {
                            'x': 0x1b,
                            'y': -0x1c
                        }, this[_0x12c57a(0x316)] = 0x5dc, this[_0x12c57a(0x1269)] = 0x5dc, this['summonDelay'] = 0x1770, this[_0x12c57a(0x369)] = !0x0, this[_0x12c57a(0x11fb)] = new _0xb17e1[(_0x12c57a(0xd2c))](this[_0x12c57a(0x6d2)], _0x34823d[_0x12c57a(0xd2c)][_0x12c57a(0x107f)]), this[_0x12c57a(0xf73)] = this[_0x12c57a(0x11fb)][_0x12c57a(0xada)](this['x'], this['y']), this[_0x12c57a(0xa51)] = this[_0x12c57a(0x11fb)][_0x12c57a(0xada)](this['x'], this['y']), this[_0x12c57a(0xa51)][_0x12c57a(0x4d4)] = !0x0, this[_0x12c57a(0xf73)]['owner'] = this, this[_0x12c57a(0xa51)]['owner'] = this, this['leftPincer'][_0x12c57a(0x28c)] = this['RegrowLeft'], this[_0x12c57a(0xa51)]['OnDead'] = this['RegrowRight'];
                    } ['OnRecycle']() {
                        const _0x33d28c = _0x189551;
                        super[_0x33d28c(0x5ce)](), this[_0x33d28c(0x187a)] = !0x0, this[_0x33d28c(0x369)] = !0x0;
                    } ['DeSpawn']() {
                        const _0x569c80 = _0x189551;
                        this['DismissDrowner'](), _0x30d2eb['default']['Core']['scene']['time'][_0x569c80(0x17fb)](this['leftEvent']), _0x30d2eb['default']['Core']['scene'][_0x569c80(0x915)][_0x569c80(0x17fb)](this['rightEvent']), this[_0x569c80(0xf73)] && this[_0x569c80(0xf73)]['Disappear'](), this['rightPincer'] && this[_0x569c80(0xa51)]['Disappear'](), super['DeSpawn']();
                    } ['RegrowLeft']() {
                        const _0x1628a2 = _0x189551;
                        this[_0x1628a2(0xf73)] = null, this['leftEvent'] = this['scene'][_0x1628a2(0x915)]['addEvent']({
                            'delay': this[_0x1628a2(0x1269)],
                            'callback': () => {
                                const _0x36f95c = _0x1628a2;
                                this['leftPincer'] && !this[_0x36f95c(0xf73)][_0x36f95c(0xdae)] || (this[_0x36f95c(0xf73)] = this['PincersPool'][_0x36f95c(0xada)](this['x'], this['y']), this[_0x36f95c(0xf73)]['flipX'] = !0x1, this[_0x36f95c(0xf73)][_0x36f95c(0x351)] = this, this['leftPincer'][_0x36f95c(0x28c)] = this[_0x36f95c(0x55e)][_0x36f95c(0xf7e)](this));
                            }
                        }), this['scale'] = Math['min'](0x5, 1.1 * this[_0x1628a2(0x7cb)]);
                    } ['RegrowRight']() {
                        const _0x465017 = _0x189551;
                        this['rightPincer'] = null, this[_0x465017(0x1a69)] = this['scene']['time'][_0x465017(0x12b8)]({
                            'delay': this['pincerRespawnDelayR'],
                            'callback': () => {
                                const _0x497591 = _0x465017;
                                this['rightPincer'] && !this['rightPincer'][_0x497591(0xdae)] || (this[_0x497591(0xa51)] = this['PincersPool']['SpawnAt'](this['x'], this['y']), this['rightPincer'][_0x497591(0x4d4)] = !0x0, this[_0x497591(0xa51)][_0x497591(0x351)] = this, this[_0x497591(0xa51)][_0x497591(0x28c)] = this['RegrowRight'][_0x497591(0xf7e)](this));
                            }
                        }), this[_0x465017(0x7cb)] = Math[_0x465017(0x1084)](0x4, 1.1 * this['scale']);
                    } ['Update'](_0x4ec5a6) {
                        const _0x5cbf01 = _0x189551;
                        if (super[_0x5cbf01(0xa9f)](_0x4ec5a6), this[_0x5cbf01(0x369)] && (this[_0x5cbf01(0x369)] = !0x1, this['y'] = _0x30d2eb[_0x5cbf01(0xd2c)][_0x5cbf01(0x1043)][_0x5cbf01(0x10f6)]['y'] + 0.5 * this[_0x5cbf01(0x6d2)][_0x5cbf01(0x12f9)]['height'] + 0x30, this['x'] = _0x30d2eb[_0x5cbf01(0xd2c)][_0x5cbf01(0x1043)]['Player']['x']), this[_0x5cbf01(0xf73)] && (this[_0x5cbf01(0xf73)]['x'] = this['x'] + this['leftOffset']['x'] * this[_0x5cbf01(0x3a8)], this[_0x5cbf01(0xf73)]['y'] = this['y'] + this[_0x5cbf01(0x6ee)]['y'] * this['scaleY'], this['leftPincer'][_0x5cbf01(0x16c6)] = this['depth'] + 0x1, this[_0x5cbf01(0xf73)][_0x5cbf01(0xd96)] = this['angle']), this[_0x5cbf01(0xa51)] && (this[_0x5cbf01(0xa51)]['x'] = this['x'] + this[_0x5cbf01(0x14f2)]['x'] * this['scaleX'], this[_0x5cbf01(0xa51)]['y'] = this['y'] + this[_0x5cbf01(0x14f2)]['y'] * this[_0x5cbf01(0x1721)], this[_0x5cbf01(0xa51)]['depth'] = this[_0x5cbf01(0x16c6)] + 0x1, this[_0x5cbf01(0xa51)]['angle'] = this[_0x5cbf01(0xd96)]), _0x30d2eb[_0x5cbf01(0xd2c)][_0x5cbf01(0x1043)][_0x5cbf01(0x10f6)]['y'] > this['y']) {
                            if (this['DrownerSummoned']) return;
                            this[_0x5cbf01(0x2de)] || this['scene'][_0x5cbf01(0x915)]['addEvent']({
                                'delay': this[_0x5cbf01(0x706)],
                                'callback': () => {
                                    const _0x78f6ad = _0x5cbf01;
                                    this[_0x78f6ad(0x2de)] = !0x1, this['SummonDrowner']();
                                }
                            }), this[_0x5cbf01(0x2de)] = !0x0;
                        }
                    } ['SummonDrowner']() {
                        const _0x2e3a42 = _0x189551;
                        _0x30d2eb[_0x2e3a42(0xd2c)]['Core']['Player']['y'] > this['y'] && (this[_0x2e3a42(0x162)] || (this[_0x2e3a42(0x1393)](), this[_0x2e3a42(0x162)] = !0x0));
                    } ['DismissDrowner']() {
                        const _0x43381b = _0x189551;
                        this[_0x43381b(0x162)] && (this['OnDismissDrowner'] && this['OnDismissDrowner'](), this[_0x43381b(0x15df)] && this[_0x43381b(0x15df)]['Dismiss']());
                    } ['SingleWarning'](_0x10d31a) {
                        const _0xb320aa = _0x189551;
                        let _0x3f1f1a = this['scene'][_0xb320aa(0x18bd)][_0xb320aa(0x568)](_0x10d31a, this['scene'][_0xb320aa(0x12f9)][_0xb320aa(0x140e)], 'UI', 'ExclamationMark.png')['setScrollFactor'](0x0)[_0xb320aa(0x8a2)](0x0)[_0xb320aa(0xf8e)](0.5, 0x1)['setDepth'](0x2328);
                        _0x30d2eb[_0xb320aa(0xd2c)][_0xb320aa(0x1267)]['PlaySound'](_0x31525d['default'][_0xb320aa(0x6cf)], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0xb320aa(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene']['tweens']['add']({
                            'targets': _0x3f1f1a,
                            'scale': 0x1,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x21876e = _0xb320aa;
                                this[_0x21876e(0x6d2)]['tweens'][_0x21876e(0x18bd)]({
                                    'targets': _0x3f1f1a,
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        });
                    } ['RedWarning']() {
                        const _0x52cd00 = _0x189551;
                        let _0x452d79 = this[_0x52cd00(0x6d2)]['add']['image'](0x0, this[_0x52cd00(0x6d2)][_0x52cd00(0x12f9)]['height'], 'vfx', 'WhiteLine.png')['setScrollFactor'](0x0)['setScale'](this['scene']['renderer'][_0x52cd00(0x173c)], 0x1)[_0x52cd00(0xf8e)](0x0, 0x1)['setDepth'](0x2328)['setAlpha'](0.25)[_0x52cd00(0xb34)](0xff0000);
                        this['scene'][_0x52cd00(0x12a1)]['add']({
                            'targets': _0x452d79,
                            'alpha': 0.5,
                            'duration': 0xc8,
                            'repeat': 0x3,
                            'yoyo': !0x0,
                            'onComplete': () => {
                                const _0x5d96e0 = _0x52cd00;
                                this[_0x5d96e0(0x6d2)]['tweens']['add']({
                                    'targets': _0x452d79,
                                    'alpha': 0x0,
                                    'duration': 0x64
                                });
                            }
                        });
                    } ['DrownerWarning']() {
                        const _0x5d8169 = _0x189551;
                        this[_0x5d8169(0x1673)](), this['SingleWarning'](0.25 * this[_0x5d8169(0x6d2)]['renderer'][_0x5d8169(0x173c)]), this['scene'][_0x5d8169(0x915)]['addEvent']({
                            'delay': 0xc8,
                            'callback': () => {
                                const _0x451759 = _0x5d8169;
                                this[_0x451759(0xfe3)](0.5 * this[_0x451759(0x6d2)][_0x451759(0x12f9)][_0x451759(0x173c)]);
                            }
                        }), this['scene'][_0x5d8169(0x915)]['addEvent']({
                            'delay': 0x190,
                            'callback': () => {
                                const _0x13e4c1 = _0x5d8169;
                                this[_0x13e4c1(0xfe3)](0.75 * this['scene']['renderer']['width']);
                            }
                        }), this[_0x5d8169(0x6d2)]['time'][_0x5d8169(0x12b8)]({
                            'delay': 0x64,
                            'callback': () => {
                                const _0x194aef = _0x5d8169;
                                let _0x5294d3 = new _0xb17e1[(_0x194aef(0xd2c))](this['scene'], _0x34823d[_0x194aef(0xd2c)][_0x194aef(0x1a51)]);
                                this[_0x194aef(0x15df)] = _0x5294d3[_0x194aef(0xada)](_0x30d2eb[_0x194aef(0xd2c)][_0x194aef(0x1043)]['Player']['x'], _0x30d2eb['default'][_0x194aef(0x1043)]['Player']['y'] + this[_0x194aef(0x6d2)]['renderer']['height']);
                            }
                        });
                    }
                }
                _0x4fa88e['default'] = _0x3e5bd5;
            };
