// Module 0x17b88
// Args: _0x416081, _0x15bfc4, _0x5054c2

export default (_0x416081, _0x15bfc4, _0x5054c2) => {
                'use strict';
                const _0x24e3ea = a0_0x6932;
                var _0x33c33c = this && this['__importDefault'] || function(_0x156519) {
                    return _0x156519 && _0x156519['__esModule'] ? _0x156519 : {
                        'default': _0x156519
                    };
                };
                Object['defineProperty'](_0x15bfc4, '__esModule', {
                    'value': !0x0
                });
                const _0x4f6c99 = _0x33c33c(_0x5054c2(0x1166a));
                class _0xcfece1 extends _0x4f6c99['default'] {
                    constructor(_0x438afd, _0x529b60, _0x4ae14e, _0x2e5b02) {
                        const _0x12d773 = _0x24e3ea;
                        super(_0x438afd, _0x529b60, _0x4ae14e, _0x2e5b02), this['eyes'] = this[_0x12d773(0x6d2)]['add']['image'](_0x529b60, _0x4ae14e, 'enemies2', 'Head_eyes.png')['setDepth'](0xc80);
                    } ['OnRecycle']() {
                        const _0x54f68b = _0x24e3ea;
                        super[_0x54f68b(0x5ce)](), this['eyes'][_0x54f68b(0xf8e)](this['originX'], this[_0x54f68b(0x564)]), this[_0x54f68b(0x912)]['scaleX'] = this[_0x54f68b(0x3a8)], this[_0x54f68b(0x912)][_0x54f68b(0x1721)] = this[_0x54f68b(0x1721)], this['eyes'][_0x54f68b(0x183f)](!0x0), this['saveTint'] = Phaser['Math'][_0x54f68b(0x82a)]['pick']([0x888866, 0x886666, 0x888844]), this['tint'] = this['saveTint'];
                    } ['Update'](_0x10f41b = 0x0) {
                        const _0x43c791 = _0x24e3ea;
                        super[_0x43c791(0xa9f)](_0x10f41b), this[_0x43c791(0x912)]['x'] = this['x'], this[_0x43c791(0x912)]['y'] = this['y'], this['eyes']['angle'] = this[_0x43c791(0xd96)], this['eyes']['flipX'] = this[_0x43c791(0x4d4)];
                    } ['Die']() {
                        const _0x588c7e = _0x24e3ea;
                        super[_0x588c7e(0x14f3)](), this['eyes'][_0x588c7e(0x183f)](!0x1);
                    } ['Disappear']() {
                        const _0x22a7d2 = _0x24e3ea;
                        super['Disappear'](), this[_0x22a7d2(0x912)][_0x22a7d2(0x183f)](!0x1);
                    } ['DeSpawn']() {
                        super['DeSpawn'](), this['eyes']['setVisible'](!0x1);
                    }
                }
                _0x15bfc4['default'] = _0xcfece1;
            };
