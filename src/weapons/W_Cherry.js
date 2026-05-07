// Module 0x3e35
// Args: _0x1aff83, _0x53a5d3, _0x22bf20

export default (_0x1aff83, _0x53a5d3, _0x22bf20) => {
                'use strict';
                const _0x4ac987 = a0_0x6932;
                var _0x49dd2e = this && this['__importDefault'] || function(_0x4bf94d) {
                    const _0x4e2b04 = _0x4ac987;
                    return _0x4bf94d && _0x4bf94d[_0x4e2b04(0x16f1)] ? _0x4bf94d : {
                        'default': _0x4bf94d
                    };
                };
                Object['defineProperty'](_0x53a5d3, '__esModule', {
                    'value': !0x0
                }), _0x53a5d3['W_Cherry'] = void 0x0;
                const _0x3a6132 = _0x49dd2e(_0x22bf20(0x9b68)),
                    _0x25ee10 = _0x49dd2e(_0x22bf20(0x54e3)),
                    _0x4bce25 = _0x49dd2e(_0x22bf20(0x5f07)),
                    _0x393e3b = _0x49dd2e(_0x22bf20(0xe49a));
                class _0x21460a extends _0x393e3b['default'] {
                    constructor(_0xf1683a) {
                        const _0x55614a = _0x4ac987;
                        super(_0xf1683a), this['isStars'] = !0x1, this['_coinRT'] = new Array(), this['_coinSprites'] = new Array();
                        const _0x40acdc = [0x1e, 0x14, 0x18, 0xe];
                        for (let _0x58e72b = 0x0; _0x58e72b < 0x1; _0x58e72b++) {
                            var _0x4e643d = _0x4bce25['default'][_0x55614a(0x1043)]['scene']['make'][_0x55614a(0x752)]({
                                'x': -Number[_0x55614a(0x1aaa)],
                                'y': -Number['MAX_SAFE_INTEGER'],
                                'width': 0x10,
                                'height': 0x10
                            });
                            _0x4e643d['saveTexture']('cherryBomb' + _0x58e72b), this[_0x55614a(0x14c5)]['push'](_0x4e643d);
                        }
                        let _0x37e6a0 = new Array();
                        for (let _0x1129c2 = 0x0; _0x1129c2 < 0x17; _0x1129c2++) {
                            var _0x595633 = 'image_004_' + String(_0x1129c2)['padStart'](0x4, '0') + '.png';
                            _0x37e6a0['push']({
                                'key': 'vfx',
                                'frame': _0x595633
                            });
                        }
                        var _0x63a20d = new Array();
                        for (let _0x37e7f7 = 0x0; _0x37e7f7 < 0x14; _0x37e7f7++) _0x595633 = 'leaf' + String(_0x37e7f7)[_0x55614a(0x7e1)](0x4, '0') + '.png', _0x63a20d[_0x55614a(0x1564)]({
                            'key': 'vfx',
                            'frame': _0x595633
                        });
                        for (let _0x24d089 = 0x0; _0x24d089 < 0x1; _0x24d089++) {
                            var _0x27d274 = _0x4bce25['default']['Core'][_0x55614a(0x6d2)]['add']['sprite'](-Number[_0x55614a(0x1aaa)], -Number['MAX_SAFE_INTEGER'], 'vfx', '')['setOrigin'](0x0);
                            _0x27d274[_0x55614a(0x183e)]['create']({
                                'key': 'spin',
                                'frames': _0x63a20d,
                                'frameRate': _0x40acdc[_0x24d089 % 0x4],
                                'repeat': -0x1
                            }), _0x27d274['anims'][_0x55614a(0x6a8)]({
                                'key': 'star',
                                'frames': _0x37e6a0,
                                'frameRate': 0x10,
                                'repeat': -0x1
                            }), _0x27d274[_0x55614a(0x183e)]['play']('spin'), this[_0x55614a(0x8d9)][_0x55614a(0x1564)](_0x27d274);
                        }
                        this[_0x55614a(0x1007)] = !0x1, this[_0x55614a(0xdfc)] = _0x25ee10[_0x55614a(0xd2c)][_0x55614a(0x3e7)];
                    } ['SetToStars']() {
                        const _0x130366 = _0x4ac987;
                        this['isStars'] = !0x0;
                        for (let _0xe33800 = 0x0; _0xe33800 < this['_coinSprites'][_0x130366(0xed9)]; _0xe33800++) this[_0x130366(0x8d9)][_0xe33800]['anims']['play']('star'), this['_coinSprites'][_0xe33800]['setScale'](0.5);
                    } ['Update'](_0x24a5bf) {
                        const _0x7878f8 = _0x4ac987;
                        super[_0x7878f8(0xa9f)](_0x24a5bf);
                        for (let _0x36dbd7 = 0x0; _0x36dbd7 < this[_0x7878f8(0x14c5)][_0x7878f8(0xed9)]; _0x36dbd7++) {
                            const _0x4f4240 = this[_0x7878f8(0x14c5)][_0x36dbd7];
                            _0x4f4240[_0x7878f8(0x159)](), _0x4f4240['draw'](this[_0x7878f8(0x8d9)][_0x36dbd7], 0x0, 0x0);
                        }
                    } ['CheckArcanas']() {
                        const _0x2989c3 = _0x4ac987;
                        super['CheckArcanas'](), this[_0x2989c3(0x4ab)] || _0x4bce25[_0x2989c3(0xd2c)][_0x2989c3(0x1043)]['Arcanas']['beginning'][_0x2989c3(0xed9)] > 0x0 && -0x1 === _0x4bce25[_0x2989c3(0xd2c)]['Core'][_0x2989c3(0x1884)]['beginning'][_0x2989c3(0x1303)](this[_0x2989c3(0x14e)]) && (this['beginningArcana'] = !0x0, this[_0x2989c3(0x9b8)] += 0x1), _0x4bce25['default'][_0x2989c3(0x1043)]['Arcanas'][_0x2989c3(0x15e7)][_0x2989c3(0x1303)](_0x3a6132[_0x2989c3(0xd2c)][_0x2989c3(0x6be)]) > -0x1 && (this['explodeOnExpire'] = !0x0);
                    }
                }
                _0x53a5d3['W_Cherry'] = _0x21460a, _0x53a5d3['default'] = _0x21460a;
            };
