// Module 0x16a35
// Args: _0x4f1a91, _0x6b32ff

export default (_0x4f1a91, _0x6b32ff) => {
                'use strict';
                const _0x396683 = a0_0x6932;
                Object['defineProperty'](_0x6b32ff, '__esModule', {
                    'value': !0x0
                }), _0x6b32ff['ScrollableContainer'] = void 0x0;
                class _0x11709b extends Phaser['GameObjects']['Container'] {
                    constructor(_0x3dfc4a, _0x461577, _0xe880fc) {
                        const _0x388963 = _0x396683;
                        super(_0x3dfc4a, _0x461577, _0xe880fc), this[_0x388963(0x12d0)] = 0x0, this['MinY'] = 0x0, this['onDown'] = !0x1, this[_0x388963(0x620)] = !0x0, _0x3dfc4a[_0x388963(0x18bd)][_0x388963(0x1a88)](this);
                    }
                    get['ReverseValue']() {
                        const _0xf7c07d = _0x396683;
                        return this['y'] / this[_0xf7c07d(0x12d0)];
                    }
                    get['Value']() {
                        const _0x8a169c = _0x396683;
                        return 0x1 - this[_0x8a169c(0x176f)];
                    } ['SetSize'](_0x119252, _0x581e7a, _0x4d7a6c = !0x0, _0x201a88 = 0x0) {
                        const _0x2f9c3b = _0x396683;
                        this[_0x2f9c3b(0x620)] = _0x4d7a6c, this['trueWidth'] = _0x119252, this[_0x2f9c3b(0x7db)] = _0x581e7a, this[_0x2f9c3b(0x18dc)](_0x119252, _0x581e7a + _0x201a88), this['setInteractive'](), this['MaxY'] = this['y'], this[_0x2f9c3b(0x6bf)] = this['y'] - 0.5 * _0x581e7a, _0x4d7a6c && (this[_0x2f9c3b(0x6d2)][_0x2f9c3b(0x1331)][_0x2f9c3b(0x1172)](this), this[_0x2f9c3b(0x6d2)][_0x2f9c3b(0x1331)]['on']('drag', (_0x3e0af0, _0x81ee16, _0x165356, _0x7dfcb5) => {
                            const _0x2a025c = _0x2f9c3b;
                            this['y'] = _0x7dfcb5, this['y'] > this[_0x2a025c(0x12d0)] && (this['y'] = this[_0x2a025c(0x12d0)]), this['y'] < this[_0x2a025c(0x6bf)] && (this['y'] = this[_0x2a025c(0x6bf)]);
                        }));
                    } ['ScrollBy'](_0x590c95) {
                        const _0x369946 = _0x396683;
                        this['y'] -= _0x590c95, this['y'] > this['MaxY'] && (this['y'] = this[_0x369946(0x12d0)]), this['y'] < this[_0x369946(0x6bf)] && (this['y'] = this[_0x369946(0x6bf)]);
                    } ['AddChildren'](_0x3b71e6) {
                        const _0x2917a7 = _0x396683;
                        if (Array[_0x2917a7(0x141b)](_0x3b71e6))
                            for (let _0x4b4010 = 0x0; _0x4b4010 < _0x3b71e6['length']; _0x4b4010++) {
                                const _0xabedaf = _0x3b71e6[_0x4b4010];
                                _0xabedaf['x'] -= 0.5 * this[_0x2917a7(0xb7f)], _0xabedaf['y'] -= 0.5 * this['trueHeight'];
                            } else _0x3b71e6['x'] -= 0.5 * this['trueWidth'], _0x3b71e6['y'] -= 0.5 * this[_0x2917a7(0x7db)];
                        this['add'](_0x3b71e6);
                    } ['setBounds'](_0x5012cf) {
                        this['bounds'] = _0x5012cf;
                    } ['withinBounds'](_0x258364, _0x3b557e) {
                        const _0x483506 = _0x396683;
                        return null == this[_0x483506(0x42e)] || this['bounds']['contains'](_0x258364, _0x3b557e);
                    }
                }
                _0x6b32ff['ScrollableContainer'] = _0x11709b, _0x6b32ff['default'] = _0x11709b;
            };
