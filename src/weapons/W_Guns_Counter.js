// Module 0x7551
// Args: _0x1417c0, _0x661919, _0x4b5731

export default (_0x1417c0, _0x661919, _0x4b5731) => {
                'use strict';
                const _0x5a05a2 = a0_0x6932;
                var _0x5ebc6d = this && this['__importDefault'] || function(_0x33603f) {
                    const _0x4ed1c0 = a0_0x6932;
                    return _0x33603f && _0x33603f['__esModule'] ? _0x33603f : {
                        'default': _0x33603f
                    };
                };
                Object['defineProperty'](_0x661919, '__esModule', {
                    'value': !0x0
                }), _0x661919['W_Guns_Counter'] = void 0x0;
                const _0x49121e = _0x5ebc6d(_0x4b5731(0x5f07)),
                    _0x158485 = _0x5ebc6d(_0x4b5731(0x54e3)),
                    _0xff5a00 = _0x5ebc6d(_0x4b5731(0x9b68)),
                    _0x5b5697 = _0x5ebc6d(_0x4b5731(0x140bb));
                class _0x23bafe extends _0x5b5697['default'] {
                    constructor() {
                        const _0x3c1ff0 = _0x5a05a2;
                        super(...arguments), this[_0x3c1ff0(0x203)] = _0x158485['default']['GUNS2_COUNTER'];
                    } ['CheckArcanas']() {
                        const _0x204a4f = _0x5a05a2;
                        if (_0x49121e[_0x204a4f(0xd2c)][_0x204a4f(0x1043)][_0x204a4f(0x1884)][_0x204a4f(0x15e7)]['indexOf'](_0xff5a00['default'][_0x204a4f(0x663)]) > -0x1) {
                            this[_0x204a4f(0x3d8)] = 0xffff, this[_0x204a4f(0x1985)] = 0x1;
                            for (let _0x40edd5 = 0x0; _0x40edd5 < this[_0x204a4f(0x885)]['length']; _0x40edd5++) {
                                const _0x35acaf = this['wallsColliders'][_0x40edd5];
                                _0x49121e[_0x204a4f(0xd2c)][_0x204a4f(0x1043)][_0x204a4f(0x6d2)][_0x204a4f(0x1585)][_0x204a4f(0x1cf)][_0x204a4f(0x107c)](_0x35acaf);
                            }
                            this[_0x204a4f(0xc69)] = !0x1;
                        }
                        _0x49121e[_0x204a4f(0xd2c)][_0x204a4f(0x1043)]['Arcanas']['ActiveArcanas'][_0x204a4f(0x1303)](_0xff5a00['default'][_0x204a4f(0x299)]) > -0x1 && _0x49121e['default'][_0x204a4f(0x1043)]['Arcanas'][_0x204a4f(0xe86)] && _0x49121e[_0x204a4f(0xd2c)][_0x204a4f(0x1043)][_0x204a4f(0x1884)][_0x204a4f(0xe86)][_0x204a4f(0x31f)] < 0.5 * this[_0x204a4f(0x31f)] && (_0x49121e['default']['Core'][_0x204a4f(0x1884)]['FireExplosionWeapon']['power'] = 0.5 * this[_0x204a4f(0x31f)]);
                    } ['Fire']() {
                        const _0x4cd443 = _0x5a05a2;
                        if (super[_0x4cd443(0x1754)](), !this[_0x4cd443(0x17fa)]) {
                            let _0x82f0cc = _0x49121e[_0x4cd443(0xd2c)]['Core']['HiddenWeapons'][_0x4cd443(0x1e6)](_0x293699 => _0x293699[_0x4cd443(0x14e)] === this[_0x4cd443(0x203)]);
                            _0x82f0cc && (this[_0x4cd443(0x17fa)] = !0x0, this[_0x4cd443(0x34b)] = _0x82f0cc, this[_0x4cd443(0x34b)][_0x4cd443(0xdb0)](), this[_0x4cd443(0x34b)]['ResetFiringTimer'] = function() {});
                        }
                        this['secondSet'] && _0x49121e['default'][_0x4cd443(0x1043)]['scene'][_0x4cd443(0x915)][_0x4cd443(0x12b8)]({
                            'delay': 0.5 * this[_0x4cd443(0x7ea)],
                            'callback': () => {
                                const _0x297c1a = _0x4cd443;
                                this['secondSet'][_0x297c1a(0x1754)]();
                            }
                        });
                    }
                }
                _0x661919['W_Guns_Counter'] = _0x23bafe, _0x661919['default'] = _0x5b5697['default'];
            };
