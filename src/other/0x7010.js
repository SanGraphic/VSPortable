// Module 0x7010
// Args: _0x4d3e4e, _0x589993, _0x1f1434

export default (_0x4d3e4e, _0x589993, _0x1f1434) => {
                'use strict';
                const _0x187638 = a0_0x6932;
                var _0x4bfc03 = this && this['__importDefault'] || function(_0x1a5efe) {
                    return _0x1a5efe && _0x1a5efe['__esModule'] ? _0x1a5efe : {
                        'default': _0x1a5efe
                    };
                };
                Object['defineProperty'](_0x589993, '__esModule', {
                    'value': !0x0
                });
                const _0x56dc76 = _0x4bfc03(_0x1f1434(0x5f07)),
                    _0x57fddb = _0x4bfc03(_0x1f1434(0x7d30));
                class _0x5ccd1b extends Phaser['GameObjects']['Group'] {
                    constructor(_0x38a5ad) {
                        const _0x1ba4cc = _0x187638;
                        super(_0x38a5ad), this[_0x1ba4cc(0x1924)] = new Array(), this[_0x1ba4cc(0x13f4)] = new Array(), this['Init']();
                    } ['Init']() {
                        const _0x265da8 = _0x187638;
                        this['scene'][_0x265da8(0x18bd)][_0x265da8(0x1a88)](this);
                    } ['SpawnAt'](_0x2038c9, _0x26d43f, _0x3f0107 = 0x1, _0x136b5e = 0x1) {
                        const _0x33856d = _0x187638,
                            _0x511756 = this[_0x33856d(0xdfb)]();
                        return _0x511756['x'] = _0x2038c9, _0x511756['y'] = _0x26d43f, _0x511756[_0x33856d(0x1133)] = _0x3f0107, _0x511756[_0x33856d(0x161a)] = _0x136b5e, _0x511756['setDepthPlease'](_0x26d43f + 0x1 - _0x56dc76[_0x33856d(0xd2c)][_0x33856d(0x1043)]['Player']['y']), this[_0x33856d(0x6d2)]['children']['add'](_0x511756), _0x511756[_0x33856d(0x5ce)](), _0x511756;
                    } ['Spawn']() {
                        const _0x5c773c = _0x187638;
                        let _0x5139f8 = this[_0x5c773c(0x1924)][_0x5c773c(0xcfe)]();
                        return _0x5139f8 || (_0x5139f8 = this['Make'](), _0x5139f8['Init']()), this[_0x5c773c(0x18bd)](_0x5139f8, !0x0), this['spawned']['push'](_0x5139f8), _0x5139f8;
                    } ['Return'](_0x33a848) {
                        const _0x23929d = _0x187638;
                        this[_0x23929d(0x6d2)]['children'][_0x23929d(0x393)](_0x33a848), this['remove'](_0x33a848, !0x0, !0x1), this['spawned']['splice'](this[_0x23929d(0x13f4)][_0x23929d(0x1303)](_0x33a848), 0x1), _0x56dc76[_0x23929d(0xd2c)]['Core'][_0x23929d(0xd39)]['remove'](_0x33a848, !0x1), this[_0x23929d(0x1924)]['push'](_0x33a848);
                    } ['Make']() {
                        const _0x429f94 = _0x187638;
                        return new _0x57fddb[(_0x429f94(0xd2c))](this, 0x0, 0x0);
                    } ['Update'](_0x4cb1ef) {
                        const _0x312d68 = _0x187638;
                        for (let _0x1808e8 = 0x0; _0x1808e8 < this[_0x312d68(0x13f4)][_0x312d68(0xed9)]; _0x1808e8++) this[_0x312d68(0x13f4)][_0x1808e8][_0x312d68(0xa9f)](_0x4cb1ef);
                    }
                }
                _0x589993['default'] = _0x5ccd1b;
            };
