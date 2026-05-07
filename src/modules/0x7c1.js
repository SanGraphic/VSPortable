// Module 0x7c1
// Args: _0x56b8d3, _0x270143

export default (_0x56b8d3, _0x270143) => {
                'use strict';
                const _0x56bfa5 = a0_0x6932;
                Object['defineProperty'](_0x270143, '__esModule', {
                    'value': !0x0
                }), _0x270143['RibbonTrail'] = void 0x0;
                class _0x22966b extends Phaser['GameObjects']['Rope'] {
                    constructor(_0x7119e5, _0x14ba5c, _0x48abe1, _0x5efd83, _0x4e2562, _0x3e641b, _0x45fd58, _0x3f415f, _0x22ecb2) {
                        const _0x38006b = _0x56bfa5;
                        super(_0x7119e5, _0x14ba5c, _0x48abe1, _0x5efd83, _0x4e2562, _0x3e641b, _0x45fd58, _0x3f415f, _0x22ecb2), this[_0x38006b(0xc9f)] = [], this[_0x38006b(0x617)] = 0x0, this['trail_x'] = 0x0, this[_0x38006b(0xa22)] = 0x0, this['maxPositions'] = _0x3e641b;
                    } ['resetPoints'](_0x507a41, _0x862fc2) {
                        const _0x497471 = _0x56bfa5;
                        for (let _0xb521cc = 0x0; _0xb521cc < this['points']['length']; _0xb521cc++) this[_0x497471(0xff1)][_0xb521cc]['x'] = _0x507a41, this['points'][_0xb521cc]['y'] = _0x862fc2;
                    } ['reset']() {
                        const _0x4d6c90 = _0x56bfa5;
                        for (let _0x35dfa0 = 0x0; _0x35dfa0 < this['points'][_0x4d6c90(0xed9)]; _0x35dfa0++) this[_0x4d6c90(0xff1)][_0x35dfa0]['x'] = this[_0x4d6c90(0x1807)]['x'], this[_0x4d6c90(0xff1)][_0x35dfa0]['y'] = this['follower']['y'];
                    } ['clearPositions']() {
                        const _0x13ca0c = _0x56bfa5;
                        this[_0x13ca0c(0xc9f)] = [];
                    } ['trailUpdate']() {
                        const _0x1bb213 = _0x56bfa5;
                        if (this['active']) {
                            this[_0x1bb213(0x1807)] && (this[_0x1bb213(0x39d)] = this[_0x1bb213(0x1807)]['x'], this[_0x1bb213(0xa22)] = this['follower']['y']), this[_0x1bb213(0xc9f)][_0x1bb213(0x2f9)]([this['trail_x'], this[_0x1bb213(0xa22)]]), this[_0x1bb213(0xc9f)][_0x1bb213(0xed9)] > this[_0x1bb213(0x617)] && this[_0x1bb213(0xc9f)][_0x1bb213(0xcfe)]();
                            for (let _0x4e6335 = 0x0; _0x4e6335 < this[_0x1bb213(0xc9f)][_0x1bb213(0xed9)]; _0x4e6335++) this[_0x1bb213(0xff1)][_0x4e6335]['x'] = this['positions'][_0x4e6335][0x0], this[_0x1bb213(0xff1)][_0x4e6335]['y'] = this[_0x1bb213(0xc9f)][_0x4e6335][0x1];
                            this[_0x1bb213(0x1365)]();
                        }
                    }
                }
                _0x270143['RibbonTrail'] = _0x22966b, _0x270143['default'] = _0x22966b;
            };
