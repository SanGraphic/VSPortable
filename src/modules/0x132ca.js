// Module 0x132ca
// Args: _0x41a23d, _0x9393a6, _0x30f71a

export default (_0x41a23d, _0x9393a6, _0x30f71a) => {
                'use strict';
                const _0x313ddb = a0_0x6932;
                var _0x1d1d60 = this && this['__importDefault'] || function(_0x6617d1) {
                    const _0x15e495 = _0x313ddb;
                    return _0x6617d1 && _0x6617d1[_0x15e495(0x16f1)] ? _0x6617d1 : {
                        'default': _0x6617d1
                    };
                };
                Object['defineProperty'](_0x9393a6, '__esModule', {
                    'value': !0x0
                }), _0x9393a6['B_Vento2explo'] = void 0x0;
                const _0x56ed59 = _0x1d1d60(_0x30f71a(0xa14d)),
                    _0x12bbba = _0x1d1d60(_0x30f71a(0x5f07)),
                    _0x13681e = _0x1d1d60(_0x30f71a(0x1fd7)),
                    _0x565bc1 = _0x30f71a(0x18304);
                class _0x2427e8 extends _0x56ed59['default'] {
                    constructor(_0x37ca74, _0x18aae3, _0x537381, _0x4b8ec7, _0x39d535) {
                        const _0x3eccec = _0x313ddb;
                        super(_0x37ca74, _0x18aae3, _0x537381, 'vfx', 'sPFX_ring_64.png', _0x4b8ec7, _0x39d535), this[_0x3eccec(0x140c)] = 0x0, this['colorss'] = [0xff00ff, 0x660066, 0xff0000], this['colorCount'] = 0x0, this[_0x3eccec(0xf8e)](0.5, 0.5)[_0x3eccec(0x11c7)](_0x565bc1['BlendModes'][_0x3eccec(0x1811)]), this[_0x3eccec(0x14e4)] = this[_0x3eccec(0x6d2)][_0x3eccec(0x18bd)][_0x3eccec(0x1791)]('castoro0'), this['emitter1'] = this[_0x3eccec(0x14e4)][_0x3eccec(0x14c0)]({
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x1e
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0,
                                'ease': 'Expo.easIn'
                            },
                            'speed': {
                                'min': 0x15e,
                                'max': 0x1c2
                            },
                            'quantity': 0x2,
                            'tint': {
                                'onEmit': (_0x5e8cdf, _0x5b8365, _0xc0ba44) => this['onEmitcustomTint'](_0x5e8cdf, _0x5b8365, _0xc0ba44)
                            },
                            'scale': 0x4,
                            'on': !0x1
                        }), this[_0x3eccec(0x81e)] = this[_0x3eccec(0x14e4)][_0x3eccec(0x14c0)]({
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'angle': {
                                'start': 0x5a,
                                'end': 0x1c2,
                                'steps': 0x1e
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0,
                                'ease': 'Expo.easIn'
                            },
                            'speed': {
                                'min': 0x96,
                                'max': 0xfa
                            },
                            'quantity': 0x2,
                            'tint': {
                                'onEmit': (_0x54f36a, _0x547c74, _0x24f37e) => this[_0x3eccec(0x1942)](_0x54f36a, _0x547c74, _0x24f37e)
                            },
                            'scale': 0x4,
                            'on': !0x1
                        });
                    } ['onEmitcustomTint'](_0x2d4235, _0x598eb9, _0x599811) {
                        const _0x35078c = _0x313ddb;
                        return Phaser['Math'][_0x35078c(0x82a)]['pick']([0x220022, 0x660066, 0xee0000]);
                    } ['Init'](_0x3affeb = -0x3e8, _0x3f240f = -0x3e8) {
                        const _0x4adac6 = _0x313ddb;
                        super['Init'](_0x3affeb, _0x3f240f), this['body']['setCircle'](0x1c, 0x4, 0x4), this['setTint'](this[_0x4adac6(0x325)][this['colorCount']++ % 0x3]);
                    } ['OnRecycle']() {
                        const _0x4241ce = _0x313ddb;
                        var _0x4e477c;
                        super['OnRecycle'](), this[_0x4241ce(0xb4a)](-this[_0x4241ce(0x6d2)][_0x4241ce(0x12f9)]['height']), this[_0x4241ce(0x121b)][_0x4241ce(0x726)](this['x'], this['y']), this['emitter2'][_0x4241ce(0x726)](this['x'], this['y']), this[_0x4241ce(0x14e4)][_0x4241ce(0xb4a)](this['depth'] + 0x1), this[_0x4241ce(0x11cf)] = 0x0;
                        let _0x5471bf = 0x1,
                            _0x5434f2 = _0x2427e8[_0x4241ce(0x1a23)] % 0x4;
                        switch (_0x2427e8['detunesIndex']++, _0x5434f2) {
                            case 0x0:
                                _0x5471bf = 0.4;
                                break;
                            case 0x1:
                                _0x5471bf = 0.6;
                                break;
                            case 0x2:
                                _0x5471bf = 0.8;
                                break;
                            case 0x3:
                                _0x5471bf = 0x1;
                        }
                        this[_0x4241ce(0x121b)][_0x4241ce(0xb43)]({
                            'min': 0x15e * _0x5471bf,
                            'max': 0x1c2 * _0x5471bf
                        }), this['emitter2']['setSpeed']({
                            'min': 0x96 * _0x5471bf,
                            'max': 0xfa * _0x5471bf
                        }), this[_0x4241ce(0x121b)]['setScale'](0x4 * _0x5471bf), this[_0x4241ce(0x81e)][_0x4241ce(0x8a2)](0x4 * _0x5471bf), _0x12bbba[_0x4241ce(0xd2c)][_0x4241ce(0x1267)][_0x4241ce(0x7f6)](_0x13681e[_0x4241ce(0xd2c)][_0x4241ce(0x58b)], {
                            'detune': _0x2427e8['detunes'][_0x5434f2],
                            'volume': 0x1,
                            'rate': 0x1
                        }), this[_0x4241ce(0xcf9)]['enable'] = !0x1, null === (_0x4e477c = this['tween']) || void 0x0 === _0x4e477c || _0x4e477c[_0x4241ce(0x1a34)](), this[_0x4241ce(0x8a2)](0x0), this['tween'] = this['scene'][_0x4241ce(0x12a1)][_0x4241ce(0x18bd)]({
                            'targets': this,
                            'scale': _0x5471bf * (this[_0x4241ce(0x6d2)][_0x4241ce(0x12f9)]['height'] / 0x40),
                            'duration': 0x15e,
                            'alpha': 0x0,
                            'ease': 'Linear',
                            'repeat': 0x2,
                            'onRepeat': () => {
                                const _0x363740 = _0x4241ce;
                                this[_0x363740(0x990)] = [], this[_0x363740(0x11cf)]++, this['setTint'](this[_0x363740(0x325)][this['colorCount']++ % 0x3]), this[_0x363740(0x11cf)] > 0x1 && (this[_0x363740(0x121b)][_0x363740(0x1a34)](), this['emitter2']['stop']());
                            },
                            'onStart': () => {
                                const _0x2b348e = _0x4241ce;
                                this[_0x2b348e(0xe71)] = 0x1, this[_0x2b348e(0x7cb)] = 0x0, this[_0x2b348e(0x121b)]['start'](), this['emitter2'][_0x2b348e(0x1aa2)](), this[_0x2b348e(0xcf9)]['enable'] = !0x0;
                            },
                            'onComplete': () => {
                                const _0x49935c = _0x4241ce;
                                this[_0x49935c(0x121b)]['stop'](), this['emitter2'][_0x49935c(0x1a34)](), this['DeSpawn'](), this['body']['enable'] = !0x1;
                            }
                        });
                    } ['Update'](_0x35dd88) {}
                }
                _0x9393a6['B_Vento2explo'] = _0x2427e8, _0x2427e8['detunes'] = [0x0, 0x190, 0x320, 0x4b0], _0x2427e8['detunesIndex'] = 0x0, _0x9393a6['default'] = _0x2427e8;
            };
