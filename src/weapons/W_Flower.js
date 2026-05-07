// Module 0xa698
// Args: _0x4341de, _0x3e3b5b, _0x46a597

export default (_0x4341de, _0x3e3b5b, _0x46a597) => {
                'use strict';
                const _0x25b8ae = a0_0x6932;
                var _0x565431 = this && this['__importDefault'] || function(_0x5cc762) {
                    return _0x5cc762 && _0x5cc762['__esModule'] ? _0x5cc762 : {
                        'default': _0x5cc762
                    };
                };
                Object['defineProperty'](_0x3e3b5b, '__esModule', {
                    'value': !0x0
                }), _0x3e3b5b['W_Flower'] = void 0x0;
                const _0x4b18c6 = _0x565431(_0x46a597(0x9b68)),
                    _0x2e273e = _0x565431(_0x46a597(0xc42e)),
                    _0x54e9fd = _0x565431(_0x46a597(0x54e3)),
                    _0x55a060 = _0x565431(_0x46a597(0x5f07)),
                    _0x5c0324 = _0x565431(_0x46a597(0xe49a));
                class _0x1b0da6 extends _0x5c0324['default'] {
                    constructor(_0x409755) {
                        const _0x537b56 = _0x25b8ae;
                        super(_0x409755), this[_0x537b56(0xa46)] = _0x54e9fd['default'][_0x537b56(0x18d1)], this['totalTime'] = 0x0, this['mul'] = 0x3e8 / 0x3c, this[_0x537b56(0x14c5)] = new Array(), this[_0x537b56(0x8d9)] = new Array();
                        const _0x544d0e = [0x1e, 0x14, 0x18, 0xe];
                        for (let _0x480150 = 0x0; _0x480150 < 0x1; _0x480150++) {
                            var _0x4006e7 = _0x55a060[_0x537b56(0xd2c)]['Core'][_0x537b56(0x6d2)]['make']['renderTexture']({
                                'x': -Number['MAX_SAFE_INTEGER'],
                                'y': -Number[_0x537b56(0x1aaa)],
                                'width': 0x10,
                                'height': 0x10
                            });
                            _0x4006e7['saveTexture']('dusting' + _0x480150), this['_coinRT']['push'](_0x4006e7);
                        }
                        var _0x175ef6 = new Array();
                        for (let _0x31dd4e = 0x0; _0x31dd4e < 0x14; _0x31dd4e++) {
                            var _0x272d52 = 'leaf' + String(_0x31dd4e)['padStart'](0x4, '0') + '.png';
                            _0x175ef6['push']({
                                'key': 'vfx',
                                'frame': _0x272d52
                            });
                        }
                        for (let _0x1b672b = 0x0; _0x1b672b < 0x1; _0x1b672b++) {
                            var _0x19a992 = _0x55a060['default']['Core']['scene'][_0x537b56(0x18bd)][_0x537b56(0x105b)](-Number[_0x537b56(0x1aaa)], -Number['MAX_SAFE_INTEGER'], 'vfx', '')[_0x537b56(0xf8e)](0x0);
                            _0x19a992[_0x537b56(0x183e)][_0x537b56(0x6a8)]({
                                'key': 'spin',
                                'frames': _0x175ef6,
                                'frameRate': _0x544d0e[_0x1b672b % 0x4],
                                'repeat': -0x1
                            }), _0x19a992['anims']['play']('spin'), this['_coinSprites']['push'](_0x19a992);
                        }
                        this[_0x537b56(0x1007)] = !0x1, this[_0x537b56(0xdfc)] = _0x54e9fd[_0x537b56(0xd2c)]['RAYEXPLOSION'];
                    } ['Update'](_0xaf5511) {
                        const _0x2d97fa = _0x25b8ae;
                        super[_0x2d97fa(0xa9f)](_0xaf5511);
                        for (let _0x4539c1 = 0x0; _0x4539c1 < this['_coinRT'][_0x2d97fa(0xed9)]; _0x4539c1++) {
                            const _0x29a772 = this['_coinRT'][_0x4539c1];
                            _0x29a772[_0x2d97fa(0x159)](), _0x29a772['draw'](this[_0x2d97fa(0x8d9)][_0x4539c1], 0x0, 0x0);
                        }
                        this['totalTime'] += _0xaf5511, this['totalTime'] += _0x55a060['default'][_0x2d97fa(0x1043)][_0x2d97fa(0x10f6)]['frameWalk'] * (_0xaf5511 / this['mul']), this[_0x2d97fa(0xb78)] >= this[_0x2d97fa(0x170c)] && (this['totalTime'] = 0x0, this[_0x2d97fa(0x1754)]());
                    } ['OnStart']() {
                        const _0x43e918 = _0x25b8ae;
                        super['OnStart'](), _0x55a060['default']['Core'][_0x43e918(0x6d2)][_0x43e918(0x1585)]['add']['collider'](this[_0x43e918(0xc82)], this['pool'], this['OnBulletOverlapsBullet'][_0x43e918(0xf7e)](this));
                    } ['OnBulletOverlapsBullet'](_0x3fea8f, _0x35adb3) {
                        const _0x1c94c2 = _0x25b8ae;
                        _0x3fea8f['HasAlreadyHitObject'](_0x35adb3) || (_0x35adb3[_0x1c94c2(0x990)][_0x1c94c2(0x1564)](_0x3fea8f), _0x3fea8f[_0x1c94c2(0x990)]['push'](_0x35adb3), _0x35adb3[_0x1c94c2(0x60f)](), _0x3fea8f['SizeUp']());
                    } ['ResetFiringTimer']() {
                        const _0x70b05c = _0x25b8ae;
                        this['firingTimer'] && this[_0x70b05c(0x19b7)][_0x70b05c(0x16ca)]();
                    } ['CheckArcanas']() {
                        const _0x20752d = _0x25b8ae;
                        super['CheckArcanas'](), this[_0x20752d(0x4ab)] || _0x55a060[_0x20752d(0xd2c)]['Core'][_0x20752d(0x1884)][_0x20752d(0x10e5)][_0x20752d(0xed9)] > 0x0 && -0x1 === _0x55a060[_0x20752d(0xd2c)][_0x20752d(0x1043)][_0x20752d(0x1884)][_0x20752d(0x10e5)]['indexOf'](this[_0x20752d(0x14e)]) && (this['beginningArcana'] = !0x0, this[_0x20752d(0x9b8)] += 0x1), _0x55a060[_0x20752d(0xd2c)]['Core'][_0x20752d(0x1884)]['ActiveArcanas']['indexOf'](_0x4b18c6['default'][_0x20752d(0x6be)]) > -0x1 && (this['explodeOnExpire'] = !0x0);
                    } ['onBulletOverlapsEnemy'](_0x40aa40, _0x4c8ef7) {
                        const _0x896e8e = _0x25b8ae;
                        var _0x10d6e4 = _0x4c8ef7;
                        if (!_0x10d6e4[_0x896e8e(0xdae)] && !_0x40aa40['HasAlreadyHitObject'](_0x10d6e4) && (_0x10d6e4[_0x896e8e(0x1112)](this[_0x896e8e(0xaae)], this[_0x896e8e(0x347)], this['knockback'], this['bulletType']), this[_0x896e8e(0xb3d)] += this[_0x896e8e(0xaae)], _0x10d6e4[_0x896e8e(0xdae)] && this[_0x896e8e(0x5e3)] >= 0x8)) {
                            let _0x3e388f = this[_0x896e8e(0x433)][this[_0x896e8e(0x11c9)] % this[_0x896e8e(0x433)]['length']];
                            if (this[_0x896e8e(0x11c9)]++, _0x3e388f >= 0.33) {
                                let _0x3e785e = _0x55a060[_0x896e8e(0xd2c)]['Core'][_0x896e8e(0xccb)](_0x10d6e4['x'], _0x10d6e4['y'], _0x2e273e['default']['LITTLEHEART']);
                                _0x3e785e[_0x896e8e(0x12a8)] = !0x0, _0x3e785e['time'] = 0x1, _0x3e785e['volume'] = 0.1;
                            }
                        }
                    }
                }
                _0x3e3b5b['W_Flower'] = _0x1b0da6, _0x3e3b5b['default'] = _0x1b0da6;
            };
