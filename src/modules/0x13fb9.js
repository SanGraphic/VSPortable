// Module 0x13fb9
// Args: _0x52f324, _0x11776f, _0x285dcb

export default (_0x52f324, _0x11776f, _0x285dcb) => {
                'use strict';
                const _0x2fdd0c = a0_0x6932;
                var _0x5d04f3 = this && this['__importDefault'] || function(_0x4227a3) {
                    return _0x4227a3 && _0x4227a3['__esModule'] ? _0x4227a3 : {
                        'default': _0x4227a3
                    };
                };
                Object['defineProperty'](_0x11776f, '__esModule', {
                    'value': !0x0
                }), _0x11776f['Destructible'] = void 0x0;
                const _0x1566b4 = _0x5d04f3(_0x285dcb(0x5f07)),
                    _0x6794b0 = _0x5d04f3(_0x285dcb(0xa05)),
                    _0x15df68 = _0x5d04f3(_0x285dcb(0x5103)),
                    _0x25ec46 = _0x5d04f3(_0x285dcb(0x54e3)),
                    _0x45653c = _0x5d04f3(_0x285dcb(0x9b68)),
                    _0x2d53af = _0x5d04f3(_0x285dcb(0x136b9));
                class _0x22b8a1 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x12f5f1, _0xae401a, _0x45ff35, _0x1ff35e) {
                        const _0x36997b = _0x2fdd0c;
                        super(_0x12f5f1['scene'], _0xae401a, _0x45ff35, 'items', 'Brazier1.png'), this['hp'] = 0x1, this['maxHp'] = 0x1, this[_0x36997b(0xdae)] = !0x1, this['receivingDamage'] = !0x1, this['isTeleportOnCull'] = !0x1, this[_0x36997b(0x351)] = null, this['scene'] = _0x12f5f1[_0x36997b(0x6d2)], this[_0x36997b(0xc82)] = _0x12f5f1, this['destructibleType'] = _0x1ff35e;
                        var _0x26989a = _0x6794b0['default'][this[_0x36997b(0x1083)]];
                        this[_0x36997b(0xd2e)] = _0x26989a[_0x36997b(0xd2e)];
                        const _0x375256 = this['anims'][_0x36997b(0x1756)](_0x26989a[_0x36997b(0xacb)], {
                            'start': 0x1,
                            'end': 0x3,
                            'zeroPad': 0x0,
                            'prefix': _0x26989a['frameName'],
                            'suffix': '.png'
                        });
                        this['anims'][_0x36997b(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x375256,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), this['scene']['add'][_0x36997b(0x1a88)](this), this[_0x36997b(0x6d2)]['physics'][_0x36997b(0x18bd)]['existing'](this), this[_0x36997b(0xcf9)][_0x36997b(0x4de)] = !0x0, this['setScale'](_0x15df68['default'][_0x36997b(0x15db)]), this[_0x36997b(0xf8e)](0.5, 0x1), this[_0x36997b(0xb4a)](this['y']), this['body']['setSize'](0x2 * this[_0x36997b(0x670)][_0x36997b(0x173c)], 0x2 * this[_0x36997b(0x670)]['height'], !0x1), _0x1566b4[_0x36997b(0xd2c)][_0x36997b(0x1043)]['Stage'][_0x36997b(0x716)] && (this[_0x36997b(0x1504)] = _0x1566b4[_0x36997b(0xd2c)]['Core']['GetLight'](this));
                    } ['Pushback'](_0x56fadf, _0x5308f3) {} ['OnTeleportOnCull']() {} ['Init']() {
                        this['anims']['play']('idle');
                    } ['OnRecycle']() {
                        const _0x3a3df8 = _0x2fdd0c;
                        this['hp'] = this['maxHp'], this[_0x3a3df8(0xdae)] = !0x1, this[_0x3a3df8(0x35a)] = !0x0, this['body']['enable'] = !0x0, this[_0x3a3df8(0xcf9)][_0x3a3df8(0xdf6)](0x10), this[_0x3a3df8(0x1504)] && (this['light'][_0x3a3df8(0x183f)](!0x0), this['light']['x'] = this['x'], this[_0x3a3df8(0x1504)]['y'] = this['y']), this[_0x3a3df8(0xb34)](0xffffff), this[_0x3a3df8(0x16c6)] = this['y'] - _0x1566b4[_0x3a3df8(0xd2c)][_0x3a3df8(0x1043)][_0x3a3df8(0x10f6)]['y'];
                    } ['DeSpawn']() {
                        const _0x343969 = _0x2fdd0c;
                        _0x1566b4[_0x343969(0xd2c)][_0x343969(0x1043)][_0x343969(0x6d2)]['time'][_0x343969(0x17fb)](this['_blinkTimeout']), this[_0x343969(0xdae)] = !0x0, this['pool']['Return'](this), this[_0x343969(0xcf9)][_0x343969(0x543)] = !0x1, this[_0x343969(0x35a)] = !0x1, this[_0x343969(0x1504)] && this[_0x343969(0x1504)]['setVisible'](!0x1);
                    } ['GetDamaged'](_0x33ea8e = 0x1, _0xd86073 = _0x2d53af['default']['NONE'], _0x36c109 = 0x0, _0x42048e = _0x25ec46['default']['VOID']) {
                        const _0x53d0ac = _0x2fdd0c;
                        this['isDead'] || (this['hp'] -= _0x33ea8e, this['hp'] <= 0x0 && (this['isDead'] = !0x0, this[_0x53d0ac(0x3e1)](), this['OnGetDamaged']()), this[_0x53d0ac(0x404)]());
                    } ['OnGetDamaged']() {
                        const _0x543cc6 = _0x2fdd0c;
                        _0x1566b4[_0x543cc6(0xd2c)][_0x543cc6(0x1043)][_0x543cc6(0x14d8)][_0x543cc6(0x49c)] && this[_0x543cc6(0x652)](0xffffff), _0x1566b4['default'][_0x543cc6(0x1043)][_0x543cc6(0x6d2)]['time']['removeEvent'](this[_0x543cc6(0xfff)]), this[_0x543cc6(0xfff)] = _0x1566b4['default'][_0x543cc6(0x1043)]['scene']['time'][_0x543cc6(0x12b8)]({
                            'delay': 0x78,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x5bf494 = _0x543cc6;
                                this[_0x5bf494(0xc83)]();
                            }
                        }), this[_0x543cc6(0xfff)][_0x543cc6(0x226)] = 'Blink';
                    } ['restoreTint']() {
                        const _0x2df623 = _0x2fdd0c;
                        this[_0x2df623(0xb34)](0xffffff), this['hp'] <= 0x0 && (_0x1566b4[_0x2df623(0xd2c)]['Core'][_0x2df623(0x6d2)][_0x2df623(0x915)][_0x2df623(0x17fb)](this[_0x2df623(0xfff)]), this[_0x2df623(0x14fb)]());
                    } ['OnDestroyed']() {
                        const _0x618c66 = _0x2fdd0c;
                        _0x1566b4[_0x618c66(0xd2c)]['Core'][_0x618c66(0xccb)](this['x'], this['y'], _0x1566b4[_0x618c66(0xd2c)][_0x618c66(0x1043)][_0x618c66(0x1927)][_0x618c66(0xa34)]()), _0x6794b0[_0x618c66(0xd2c)][this[_0x618c66(0x1083)]]['destroyedAmount'] += 0x1, _0x1566b4[_0x618c66(0xd2c)][_0x618c66(0x1043)][_0x618c66(0x1884)][_0x618c66(0x15e7)][_0x618c66(0x1303)](_0x45653c[_0x618c66(0xd2c)][_0x618c66(0x299)]) > -0x1 && _0x1566b4[_0x618c66(0xd2c)]['Core']['Arcanas'][_0x618c66(0x21a)](this['x'], this['y'] - 0x18);
                    }
                }
                _0x11776f['Destructible'] = _0x22b8a1, _0x11776f['default'] = _0x22b8a1;
            };
