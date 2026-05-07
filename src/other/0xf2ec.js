// Module 0xf2ec
// Args: _0x2c02b0, _0x9c6bf4, _0xd7ea91

export default (_0x2c02b0, _0x9c6bf4, _0xd7ea91) => {
                'use strict';
                const _0x4532df = a0_0x6932;
                var _0x374ae3 = this && this['__importDefault'] || function(_0x715215) {
                    const _0x4ed2ac = _0x4532df;
                    return _0x715215 && _0x715215[_0x4ed2ac(0x16f1)] ? _0x715215 : {
                        'default': _0x715215
                    };
                };
                Object['defineProperty'](_0x9c6bf4, '__esModule', {
                    'value': !0x0
                });
                const _0x1b915f = _0x374ae3(_0xd7ea91(0x1166a));
                class _0x160909 extends _0x1b915f['default'] {
                    constructor(_0x4f5fe9, _0x11436f, _0x4146af, _0x5d0bf4) {
                        const _0xcd27ca = _0x4532df;
                        super(_0x4f5fe9, _0x11436f, _0x4146af, _0x5d0bf4), this[_0xcd27ca(0x6ee)] = {
                            'x': -0x1b,
                            'y': -0x1c
                        }, this[_0xcd27ca(0x14f2)] = {
                            'x': 0x1b,
                            'y': -0x1c
                        }, this['pincerSpriteL'] = this[_0xcd27ca(0x6d2)][_0xcd27ca(0x18bd)]['sprite'](this['x'], this['y'], 'enemies2', 'XLPincer_i01.png')['setOrigin'](0.5, 0x1), this['pincerSpriteR'] = this['scene'][_0xcd27ca(0x18bd)]['sprite'](this['x'], this['y'], 'enemies2', 'XLPincer_i01.png')['setOrigin'](0.5, 0x1);
                        const _0x642609 = this[_0xcd27ca(0x9ee)]['anims'][_0xcd27ca(0x1756)]('enemies2', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'XLPincer_i',
                            'suffix': '.png'
                        });
                        this['pincerSpriteL'][_0xcd27ca(0x183e)][_0xcd27ca(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x642609,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this['pincerSpriteR'][_0xcd27ca(0x183e)][_0xcd27ca(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x642609,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0xcd27ca(0x9ee)][_0xcd27ca(0x183e)][_0xcd27ca(0x902)]('idle'), this[_0xcd27ca(0x112e)][_0xcd27ca(0x183e)][_0xcd27ca(0x902)]('idle');
                    } ['OnRecycle']() {
                        const _0x5ef116 = _0x4532df;
                        var _0x17d563;
                        super[_0x5ef116(0x5ce)](), this[_0x5ef116(0x112e)]['flipX'] = !0x0, this['pincerSpriteL'][_0x5ef116(0x4d4)] = !0x1, null === (_0x17d563 = this[_0x5ef116(0x1ad6)]) || void 0x0 === _0x17d563 || _0x17d563['stop'](), this[_0x5ef116(0x112e)][_0x5ef116(0x8a2)](this[_0x5ef116(0x7cb)]), this['pincerSpriteL'][_0x5ef116(0x8a2)](this[_0x5ef116(0x7cb)]), this[_0x5ef116(0x112e)][_0x5ef116(0xb34)](this[_0x5ef116(0x1454)]), this['pincerSpriteL'][_0x5ef116(0xb34)](this[_0x5ef116(0x1454)]), this[_0x5ef116(0x9ee)]['x'] = this['x'] + this['leftOffset']['x'] * this['scaleX'], this[_0x5ef116(0x9ee)]['y'] = this['y'] + this[_0x5ef116(0x6ee)]['y'] * this['scaleY'], this['pincerSpriteL'][_0x5ef116(0x16c6)] = this[_0x5ef116(0x16c6)] + 0x1, this[_0x5ef116(0x9ee)]['angle'] = this[_0x5ef116(0xd96)], this['pincerSpriteR']['x'] = this['x'] + this[_0x5ef116(0x14f2)]['x'] * this['scaleX'], this[_0x5ef116(0x112e)]['y'] = this['y'] + this[_0x5ef116(0x14f2)]['y'] * this[_0x5ef116(0x1721)], this[_0x5ef116(0x112e)][_0x5ef116(0x16c6)] = this['depth'] + 0x1, this[_0x5ef116(0x112e)][_0x5ef116(0xd96)] = this[_0x5ef116(0xd96)];
                    } ['Die']() {
                        super['Die'](), this['FadeOutPincers']();
                    } ['Disappear']() {
                        const _0x2bbd8b = _0x4532df;
                        super[_0x2bbd8b(0xe00)](), this[_0x2bbd8b(0x199b)]();
                    } ['FadeOutPincers']() {
                        const _0xf619c9 = _0x4532df;
                        var _0x2a951b;
                        null === (_0x2a951b = this['fadeOutPincersTween']) || void 0x0 === _0x2a951b || _0x2a951b['stop'](), this[_0xf619c9(0x1ad6)] = this['scene'][_0xf619c9(0x12a1)][_0xf619c9(0x18bd)]({
                            'targets': [this[_0xf619c9(0x9ee)], this[_0xf619c9(0x112e)]],
                            'scale': 0x0,
                            'duration': 0xc8
                        });
                    } ['DeSpawn']() {
                        const _0xbbe0f3 = _0x4532df;
                        this[_0xbbe0f3(0x199b)](), super[_0xbbe0f3(0x14fb)]();
                    } ['Update'](_0x31a393) {
                        const _0x4bf6cc = _0x4532df;
                        super['Update'](_0x31a393), this[_0x4bf6cc(0x9ee)]['x'] = this['x'] + this[_0x4bf6cc(0x6ee)]['x'] * this[_0x4bf6cc(0x3a8)], this[_0x4bf6cc(0x9ee)]['y'] = this['y'] + this['leftOffset']['y'] * this[_0x4bf6cc(0x1721)], this['pincerSpriteL'][_0x4bf6cc(0x16c6)] = this['depth'] + 0x1, this['pincerSpriteL']['angle'] = this['angle'], this[_0x4bf6cc(0x112e)]['x'] = this['x'] + this['rightOffset']['x'] * this[_0x4bf6cc(0x3a8)], this['pincerSpriteR']['y'] = this['y'] + this[_0x4bf6cc(0x14f2)]['y'] * this[_0x4bf6cc(0x1721)], this['pincerSpriteR']['depth'] = this['depth'] + 0x1, this['pincerSpriteR'][_0x4bf6cc(0xd96)] = this[_0x4bf6cc(0xd96)];
                    }
                }
                _0x9c6bf4['default'] = _0x160909;
            };
