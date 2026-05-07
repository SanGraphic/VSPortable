// Module 0x15ca3
// Args: _0x2ea2a3, _0x23cce9, _0x333847

export default (_0x2ea2a3, _0x23cce9, _0x333847) => {
                'use strict';
                const _0x584985 = a0_0x6932;
                var _0x36e5c3 = this && this['__importDefault'] || function(_0x56a363) {
                    const _0xdeb576 = _0x584985;
                    return _0x56a363 && _0x56a363[_0xdeb576(0x16f1)] ? _0x56a363 : {
                        'default': _0x56a363
                    };
                };
                Object['defineProperty'](_0x23cce9, '__esModule', {
                    'value': !0x0
                });
                const _0x3343bc = _0x36e5c3(_0x333847(0x5f07)),
                    _0x1c9d86 = _0x36e5c3(_0x333847(0x25d9));
                class _0x22393e extends Phaser['GameObjects']['Group'] {
                    constructor(_0x37d917) {
                        const _0x3c3992 = _0x584985;
                        super(_0x37d917), this['stored'] = new Array(), this[_0x3c3992(0x13f4)] = new Array(), this['Init']();
                    } ['Init']() {
                        const _0x359df1 = _0x584985;
                        this['scene'][_0x359df1(0x18bd)][_0x359df1(0x1a88)](this);
                    } ['SpawnAt'](_0x562cec, _0x10b6e8, _0x13676f = 0x1, _0x16f233 = 0x1) {
                        const _0x198411 = _0x584985,
                            _0x144516 = this['Spawn']();
                        return _0x144516['x'] = _0x562cec, _0x144516['y'] = _0x10b6e8, _0x144516[_0x198411(0x1133)] = _0x13676f, _0x144516['radius'] = _0x16f233, _0x144516[_0x198411(0x62e)](_0x10b6e8 + 0x1 - _0x3343bc[_0x198411(0xd2c)][_0x198411(0x1043)][_0x198411(0x10f6)]['y']), this['scene'][_0x198411(0x3fe)]['add'](_0x144516), _0x144516['OnRecycle'](), _0x144516;
                    } ['Spawn']() {
                        const _0x10f62a = _0x584985;
                        let _0x439e70 = this['stored']['pop']();
                        return _0x439e70 || (_0x439e70 = this[_0x10f62a(0x18c8)](), _0x439e70[_0x10f62a(0x658)]()), this[_0x10f62a(0x18bd)](_0x439e70, !0x0), this[_0x10f62a(0x13f4)]['push'](_0x439e70), _0x439e70;
                    } ['Return'](_0x3af87f) {
                        const _0xd59d28 = _0x584985;
                        this[_0xd59d28(0x6d2)]['children'][_0xd59d28(0x393)](_0x3af87f), this[_0xd59d28(0x393)](_0x3af87f, !0x0, !0x1), this['spawned']['splice'](this[_0xd59d28(0x13f4)][_0xd59d28(0x1303)](_0x3af87f), 0x1), _0x3343bc['default']['Core'][_0xd59d28(0xd39)][_0xd59d28(0x393)](_0x3af87f, !0x1), this['stored'][_0xd59d28(0x1564)](_0x3af87f);
                    } ['Make']() {
                        const _0x2e94db = _0x584985;
                        return new _0x1c9d86[(_0x2e94db(0xd2c))](this, 0x0, 0x0);
                    }
                }
                _0x23cce9['default'] = _0x22393e;
            };
