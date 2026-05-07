// Module 0x150c1
// Args: _0x1a01e7, _0x47c663, _0x3c8639

export default (_0x1a01e7, _0x47c663, _0x3c8639) => {
                'use strict';
                const _0x5403bb = a0_0x6932;
                var _0x416f10 = this && this['__importDefault'] || function(_0x1b785d) {
                    const _0x4ea154 = a0_0x6932;
                    return _0x1b785d && _0x1b785d['__esModule'] ? _0x1b785d : {
                        'default': _0x1b785d
                    };
                };
                Object['defineProperty'](_0x47c663, '__esModule', {
                    'value': !0x0
                });
                const _0x3f9492 = _0x416f10(_0x3c8639(0x5f07)),
                    _0x23a6f1 = _0x416f10(_0x3c8639(0x1166a));
                class _0xf3f800 extends _0x23a6f1['default'] {
                    constructor(_0x5bce77, _0x12b846, _0x2f7d08, _0x2bdaad) {
                        const _0x1ac1d2 = a0_0x6932;
                        super(_0x5bce77, _0x12b846, _0x2f7d08, _0x2bdaad), this['depthOverride'] = 0x0, this['spinAngle'] = 0x2 * Math['random']() * Math['PI'], this['radius'] = 0x1;
                    } ['OnRecycle']() {
                        const _0x5e1cec = a0_0x6932;
                        var _0x10b9d0, _0x5ac6d5;
                        super['OnRecycle'](), this['radius'] = 0x1, null === (_0x10b9d0 = this['radiusTween']) || void 0x0 === _0x10b9d0 || _0x10b9d0['stop'](), this['radiusTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'radius': 0.65,
                            'duration': 0x7d0 + 0x7d0 * Math['random'](),
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'ease': 'Sine.easeInOut'
                        }), this['scale'] = 0x0, null === (_0x5ac6d5 = this['scaleTween']) || void 0x0 === _0x5ac6d5 || _0x5ac6d5['stop'](), this['scaleTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': this['scaleMul'],
                            'duration': 0x12c + 0x3e8 * Math['random']()
                        });
                    } ['Die']() {
                        super['Die']();
                    } ['Update'](_0x20a058) {
                        const _0x132fc0 = _0x5403bb;
                        super['Update'](_0x20a058), 0x0 != this['depthOverride'] && this[_0x132fc0(0xb4a)](this['depthOverride']), this[_0x132fc0(0x4d4)] = !0x1, this[_0x132fc0(0x1b8)] += -0.001 * _0x20a058, this['x'] = _0x3f9492[_0x132fc0(0xd2c)][_0x132fc0(0x1043)][_0x132fc0(0x10f6)]['x'] + Math[_0x132fc0(0xd7e)](this[_0x132fc0(0x1b8)]) * this['scene']['renderer']['width'] * 0.475 * this['radius'], this['y'] = _0x3f9492['default'][_0x132fc0(0x1043)]['Player']['y'] + 0x10 + Math[_0x132fc0(0xc80)](this[_0x132fc0(0x1b8)]) * this[_0x132fc0(0x6d2)]['renderer']['height'] * 0.45 * this['radius'];
                        var _0x1788e3 = Phaser[_0x132fc0(0x24f)][_0x132fc0(0x1551)]['RIGHT'];
                        this['angle'] = -0xb4 + Phaser[_0x132fc0(0x24f)][_0x132fc0(0x1470)](Math[_0x132fc0(0x326)](this[_0x132fc0(0xcf9)]['velocity']['y'] - _0x1788e3['y'], this[_0x132fc0(0xcf9)]['velocity']['x'] - _0x1788e3['x']));
                    }
                }
                _0x47c663['default'] = _0xf3f800;
            };
