// Module 0xf34e
// Args: _0x57d000, _0x29c9ed, _0x56259c

export default (_0x57d000, _0x29c9ed, _0x56259c) => {
                'use strict';
                const _0x9cef21 = a0_0x6932;
                var _0x539563 = this && this['__importDefault'] || function(_0x5a0f27) {
                    return _0x5a0f27 && _0x5a0f27['__esModule'] ? _0x5a0f27 : {
                        'default': _0x5a0f27
                    };
                };
                Object['defineProperty'](_0x29c9ed, '__esModule', {
                    'value': !0x0
                });
                const _0x37f889 = _0x539563(_0x56259c(0x1166a));
                class _0x93711f extends _0x37f889['default'] {
                    constructor(_0x479035, _0x23d897, _0x49d212, _0x311ec0) {
                        const _0xfd62c7 = _0x9cef21;
                        super(_0x479035, _0x23d897, _0x49d212, _0x311ec0), this['eyes'] = this['scene']['add'][_0xfd62c7(0x568)](_0x23d897, _0x49d212, 'enemies2', 'Red_eyes.png')[_0xfd62c7(0xb4a)](0xc80);
                    } ['OnRecycle']() {
                        const _0x36264d = _0x9cef21;
                        super[_0x36264d(0x5ce)](), this[_0x36264d(0x912)][_0x36264d(0xf8e)](this[_0x36264d(0x612)], this[_0x36264d(0x564)]), this[_0x36264d(0x912)]['scaleX'] = this[_0x36264d(0x3a8)], this[_0x36264d(0x912)]['scaleY'] = this[_0x36264d(0x1721)], this[_0x36264d(0x912)][_0x36264d(0x183f)](!0x0), this['saveTint'] = Phaser[_0x36264d(0x24f)]['RND'][_0x36264d(0x198c)]([0x888866, 0x886666, 0x888844]), this[_0x36264d(0x19b0)] = this['saveTint'];
                    } ['Update'](_0x550085 = 0x0) {
                        const _0x3e639b = _0x9cef21;
                        super['Update'](_0x550085), this[_0x3e639b(0x912)]['x'] = this['x'], this[_0x3e639b(0x912)]['y'] = this['y'], this['eyes']['angle'] = this['angle'], this['eyes']['flipX'] = this[_0x3e639b(0x4d4)];
                    } ['Die']() {
                        const _0x380a87 = _0x9cef21;
                        super[_0x380a87(0x14f3)](), this[_0x380a87(0x912)][_0x380a87(0x183f)](!0x1);
                    } ['Disappear']() {
                        const _0x371674 = _0x9cef21;
                        super['Disappear'](), this['eyes'][_0x371674(0x183f)](!0x1);
                    } ['DeSpawn']() {
                        const _0x3d9d20 = _0x9cef21;
                        super['DeSpawn'](), this[_0x3d9d20(0x912)][_0x3d9d20(0x183f)](!0x1);
                    }
                }
                _0x29c9ed['default'] = _0x93711f;
            };
