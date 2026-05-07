// Module 0x1459f
// Args: _0x39152d, _0x54277b, _0x57f28b

export default (_0x39152d, _0x54277b, _0x57f28b) => {
                'use strict';
                const _0x5264cf = a0_0x6932;
                var _0x23ff09 = this && this['__importDefault'] || function(_0x296a56) {
                    return _0x296a56 && _0x296a56['__esModule'] ? _0x296a56 : {
                        'default': _0x296a56
                    };
                };
                Object['defineProperty'](_0x54277b, '__esModule', {
                    'value': !0x0
                });
                const _0x23a9eb = _0x23ff09(_0x57f28b(0xc42e)),
                    _0x560980 = _0x23ff09(_0x57f28b(0x5103)),
                    _0x153ca6 = _0x23ff09(_0x57f28b(0x5f07)),
                    _0x3c7d33 = _0x23ff09(_0x57f28b(0x1593c));
                class _0x44f816 extends _0x3c7d33['default'] {
                    constructor() {
                        super(...arguments), this['fireDelay'] = 0x7d0, this['isStatic'] = !0x0;
                    } ['setOwner'](_0x4d29c2) {
                        const _0x29df91 = _0x5264cf;
                        super[_0x29df91(0x462)](_0x4d29c2), this['y'] = _0x153ca6[_0x29df91(0xd2c)][_0x29df91(0x1043)][_0x29df91(0x10f6)]['y'] + (Math[_0x29df91(0x9ad)]() - 0.5) * this[_0x29df91(0x6d2)]['renderer']['height'], this['x'] = _0x153ca6['default'][_0x29df91(0x1043)][_0x29df91(0x10f6)]['x'] + (Math['random']() >= 0.5 ? 0.55 * this[_0x29df91(0x6d2)]['renderer']['width'] : -0.55 * this['scene'][_0x29df91(0x12f9)][_0x29df91(0x173c)]), this['speed'] *= 0x1 + Math['random']();
                    } ['Die']() {
                        const _0x127158 = _0x5264cf;
                        if (!this['isDead'] && Math[_0x127158(0x9ad)]() < 0.21 * _0x153ca6['default'][_0x127158(0x1043)][_0x127158(0x10f6)]['PLuck']) {
                            let _0xbd1b6 = _0x153ca6[_0x127158(0xd2c)]['Core']['MakePickup'](this['x'], this['y'], _0x23a9eb[_0x127158(0xd2c)][_0x127158(0x1a43)]);
                            _0xbd1b6['setFrame']('pie.png'), _0xbd1b6[_0x127158(0x12a8)] = !0x0, _0xbd1b6['time'] = 0x1;
                        }
                        super[_0x127158(0x14f3)](), this[_0x127158(0xcf9)][_0x127158(0x543)] = !0x1;
                    } ['Update'](_0x914366 = 0x0) {
                        const _0x38a842 = _0x5264cf;
                        if (this[_0x38a842(0xdae)]) return;
                        if (this[_0x38a842(0x16c6)] = this['y'] - _0x153ca6['default'][_0x38a842(0x1043)][_0x38a842(0x10f6)]['y'], this[_0x38a842(0x14a3)]) return;
                        (!this[_0x38a842(0x197a)] || this['FixedDirection'] && 0x0 == this[_0x38a842(0x70d)]['x'] && 0x0 == this[_0x38a842(0x70d)]['y']) && (this['_currentDirection']['x'] = this[_0x38a842(0x18a7)]['x'] - this['x'], this['_currentDirection']['y'] = 0x0, this[_0x38a842(0x70d)][_0x38a842(0x183b)]()), this[_0x38a842(0xe84)] && (this[_0x38a842(0x1562)] += 0.05, this[_0x38a842(0x70d)]['y'] = Math[_0x38a842(0xd7e)](this[_0x38a842(0x1562)])), this['_currentDirection']['y'] = 0x0;
                        let _0x3b3c8c = this[_0x38a842(0x3f1)] ? -this['knockback'] * this['damageKB'] : 0x1;
                        this['setFlipX'](this['_currentDirection']['x'] > 0x0);
                        let _0x4f7ba5 = _0x560980['default']['EnemySpeed'] * this['speed'] * _0x3b3c8c * this[_0x38a842(0x13fb)];
                        this['setVelocity'](_0x4f7ba5 * this[_0x38a842(0x70d)]['x'], _0x4f7ba5 * this[_0x38a842(0x70d)]['y']);
                    }
                }
                _0x54277b['default'] = _0x44f816;
            };
