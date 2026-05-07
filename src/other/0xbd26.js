// Module 0xbd26
// Args: _0x4f4a9, _0x323444, _0x1c8efc

export default (_0x4f4a9, _0x323444, _0x1c8efc) => {
                'use strict';
                const _0x49fd75 = a0_0x6932;
                var _0x3ef3aa = this && this['__importDefault'] || function(_0x47cead) {
                    const _0x428298 = a0_0x6932;
                    return _0x47cead && _0x47cead['__esModule'] ? _0x47cead : {
                        'default': _0x47cead
                    };
                };
                Object['defineProperty'](_0x323444, '__esModule', {
                    'value': !0x0
                });
                const _0x44e9ba = _0x3ef3aa(_0x1c8efc(0x5f07)),
                    _0x3cc0d0 = _0x3ef3aa(_0x1c8efc(0x1166a));
                class _0x544408 extends _0x3cc0d0['default'] {
                    constructor() {
                        const _0x5e679d = _0x49fd75;
                        super(...arguments), this['initialVelocity'] = new Phaser[(_0x5e679d(0x24f))]['Vector2'](), this[_0x5e679d(0x13ea)] = 0xa / 0x20, this[_0x5e679d(0x1a5e)] = 0x0;
                    } ['OnRecycle']() {
                        const _0x7b19c3 = _0x49fd75;
                        super['OnRecycle']();
                        var _0x424694 = 0x5 * (this['x'] > _0x44e9ba['default'][_0x7b19c3(0x1043)][_0x7b19c3(0x10f6)]['x'] ? -0x1 : 0x1) - 0x5a;
                        this['scene'][_0x7b19c3(0x1585)]['velocityFromRotation'](Phaser['Math'][_0x7b19c3(0x54d)](_0x424694), this['speed'], this[_0x7b19c3(0xcf9)][_0x7b19c3(0xf4e)]), this[_0x7b19c3(0xd2f)]['x'] = this[_0x7b19c3(0xcf9)]['velocity']['x'], this['initialVelocity']['y'] = this['body'][_0x7b19c3(0xf4e)]['y'];
                    } ['Update'](_0x3d8c4a = 0x0) {
                        const _0x4499c4 = _0x49fd75;
                        if (this['isDead']) return;
                        if (this[_0x4499c4(0x16c6)] = this['y'] - _0x44e9ba[_0x4499c4(0xd2c)][_0x4499c4(0x1043)]['Player']['y'], this['IsTimeStopped']) return;
                        this[_0x4499c4(0xb8d)](this['x'] > _0x44e9ba[_0x4499c4(0xd2c)]['Core'][_0x4499c4(0x10f6)]['x']);
                        let _0x58a8e0 = this['receivingDamage'] ? -this[_0x4499c4(0x1992)] * this[_0x4499c4(0x25d)] : 0x1,
                            _0x5200f9 = 0.01 * this['speed'] * _0x58a8e0;
                        this['initialVelocity']['y'] += _0x3d8c4a * this[_0x4499c4(0x13ea)], this['setVelocity'](_0x5200f9 * this[_0x4499c4(0xd2f)]['x'], _0x5200f9 * this['initialVelocity']['y']);
                    }
                }
                _0x323444['default'] = _0x544408;
            };
