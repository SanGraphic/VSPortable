// Module 0x13f3
// Args: _0xc243fc, _0x4933af, _0x301b75

export default (_0xc243fc, _0x4933af, _0x301b75) => {
                'use strict';
                const _0xb6926 = a0_0x6932;
                var _0x5956dc = this && this['__importDefault'] || function(_0x392521) {
                    const _0x35487a = _0xb6926;
                    return _0x392521 && _0x392521[_0x35487a(0x16f1)] ? _0x392521 : {
                        'default': _0x392521
                    };
                };
                Object['defineProperty'](_0x4933af, '__esModule', {
                    'value': !0x0
                });
                const _0x208fbc = _0x5956dc(_0x301b75(0xc42e)),
                    _0xd552de = _0x5956dc(_0x301b75(0x5f07)),
                    _0x11464d = _0x5956dc(_0x301b75(0x4e61));
                class _0x2606d6 extends _0x11464d['default'] {
                    ['OnRecycle']() {
                        const _0x31cf79 = _0xb6926;
                        var _0x50fe96;
                        null === (_0x50fe96 = this[_0x31cf79(0x6b9)]) || void 0x0 === _0x50fe96 || _0x50fe96['stop'](), super['OnRecycle'](), this[_0x31cf79(0x4d4)] = !0x1, this[_0x31cf79(0x1454)] = Phaser[_0x31cf79(0x24f)][_0x31cf79(0x82a)]['pick']([0x44bbff, 0x88ffff, 0x44ffff]), this[_0x31cf79(0x19b0)] = this[_0x31cf79(0x1454)], this[_0x31cf79(0x177d)] = !0x1, this['isTeleportOnCull'] = !0x0;
                    } ['Die']() {
                        const _0x36a015 = _0xb6926;
                        super['Die']();
                        let _0x4ea809 = _0xd552de['default']['Core'][_0x36a015(0xccb)](this['x'], this['y'], _0x208fbc[_0x36a015(0xd2c)]['COIN']);
                        _0x4ea809[_0x36a015(0x915)] = 0x1, _0x4ea809[_0x36a015(0x12a8)] = !0x0;
                    } ['Update'](_0x21a6ff) {
                        super['Update'](_0x21a6ff), this['angle'] = 0x0;
                    } ['DeSpawn']() {
                        const _0x464cc3 = _0xb6926;
                        var _0x549c4d;
                        this[_0x464cc3(0x16ef)] = !0x0, null === (_0x549c4d = this['despawnTween']) || void 0x0 === _0x549c4d || _0x549c4d[_0x464cc3(0x1a34)](), this['despawnTween'] = this['scene'][_0x464cc3(0x12a1)][_0x464cc3(0x18bd)]({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0xc8,
                            'onComplete': () => {
                                super['DeSpawn']();
                            }
                        });
                    } ['OnDeathAnimationComplete']() {
                        super['DeSpawn']();
                    }
                }
                _0x4933af['default'] = _0x2606d6;
            };
