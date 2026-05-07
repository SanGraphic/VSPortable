// Module 0x8fe
// Args: _0x213ee0, _0x1711d9

export default (_0x213ee0, _0x1711d9) => {
                'use strict';
                const _0x406850 = a0_0x6932;
                Object['defineProperty'](_0x1711d9, '__esModule', {
                    'value': !0x0
                });
                const _0x1e86ad = Phaser['Utils']['Array']['SpliceOne'];
                class _0xf4da73 extends Phaser['Plugins']['BasePlugin'] {
                    ['setPostPipelineClass'](_0x30ab1a, _0x3b0980) {
                        const _0x5c540e = _0x406850;
                        return this[_0x5c540e(0x1598)] = _0x30ab1a, this['postFxPipelineName'] = _0x3b0980, this;
                    } ['start']() {
                        const _0x6d6068 = _0x406850;
                        this[_0x6d6068(0x33d)][_0x6d6068(0xdc4)]['on']('destroy', this['destroy'], this), this[_0x6d6068(0x33d)][_0x6d6068(0x12f9)][_0x6d6068(0x50a)][_0x6d6068(0xfe9)](this['postFxPipelineName'], this[_0x6d6068(0x1598)]);
                    } ['add'](_0x31eb0a, _0x53a5b0) {
                        const _0x1f8ded = _0x406850;
                        void 0x0 === _0x53a5b0 && (_0x53a5b0 = {}), _0x31eb0a[_0x1f8ded(0xd30)](this[_0x1f8ded(0x1598)]);
                        var _0x1b1ae2 = _0x31eb0a['postPipelines'][_0x31eb0a['postPipelines'][_0x1f8ded(0xed9)] - 0x1];
                        return _0x1b1ae2['resetFromJSON'](_0x53a5b0), _0x53a5b0['name'] && (_0x1b1ae2['name'] = _0x53a5b0[_0x1f8ded(0x226)]), _0x1b1ae2;
                    } ['remove'](_0x2c625f, _0x38b5ac) {
                        const _0x3cb687 = _0x406850;
                        if (void 0x0 === _0x38b5ac) {
                            for (var _0x7a1609 = (_0x57a3e4 = _0x2c625f['postPipelines'])['length'] - 0x1; _0x7a1609 >= 0x0; _0x7a1609--)(_0x1e39ee = _0x57a3e4[_0x7a1609]) instanceof this[_0x3cb687(0x1598)] && (_0x1e39ee['destroy'](), _0x1e86ad(_0x57a3e4, _0x7a1609));
                            return [];
                        }
                        _0x7a1609 = 0x0;
                        for (var _0x57a3e4, _0x2e49b6 = (_0x57a3e4 = _0x2c625f['postPipelines'])[_0x3cb687(0xed9)]; _0x7a1609 < _0x2e49b6; _0x7a1609++) {
                            var _0x1e39ee;
                            (_0x1e39ee = _0x57a3e4[_0x7a1609]) instanceof this['PostFxPipelineClass'] && _0x1e39ee['name'] === _0x38b5ac && (_0x1e39ee[_0x3cb687(0x16ca)](), _0x1e86ad(_0x57a3e4, _0x7a1609));
                        }
                    } ['get'](_0x4ec423, _0x22a0be) {
                        const _0x5b04e7 = _0x406850;
                        if (void 0x0 === _0x22a0be) {
                            for (var _0xe6b7c5 = [], _0x418127 = 0x0, _0x12cbe4 = (_0x14b28b = _0x4ec423['postPipelines'])[_0x5b04e7(0xed9)]; _0x418127 < _0x12cbe4; _0x418127++)(_0x87d899 = _0x14b28b[_0x418127]) instanceof this['PostFxPipelineClass'] && _0xe6b7c5['push'](_0x87d899);
                            return _0xe6b7c5;
                        }
                        var _0x14b28b;
                        for (_0x418127 = 0x0, _0x12cbe4 = (_0x14b28b = _0x4ec423[_0x5b04e7(0x6e6)])[_0x5b04e7(0xed9)]; _0x418127 < _0x12cbe4; _0x418127++) {
                            var _0x87d899;
                            if ((_0x87d899 = _0x14b28b[_0x418127]) instanceof this[_0x5b04e7(0x1598)] && _0x87d899['name'] === _0x22a0be) return _0x87d899;
                        }
                    }
                }
                _0x1711d9['default'] = _0xf4da73;
            };
