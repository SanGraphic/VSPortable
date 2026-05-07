// Module 0x3e51
// Args: _0x441610, _0x3fa001, _0x277f5a

export default (_0x441610, _0x3fa001, _0x277f5a) => {
                'use strict';
                const _0xf131f9 = a0_0x6932;
                var _0x34891c = this && this['__importDefault'] || function(_0x286864) {
                    const _0x3bb651 = _0xf131f9;
                    return _0x286864 && _0x286864[_0x3bb651(0x16f1)] ? _0x286864 : {
                        'default': _0x286864
                    };
                };
                Object['defineProperty'](_0x3fa001, '__esModule', {
                    'value': !0x0
                });
                const _0x1e2add = _0x34891c(_0x277f5a(0x4f52)),
                    _0x44d0fd = _0x34891c(_0x277f5a(0x5f07));
                class _0x1e021d {
                    static['init'](_0x4052ce) {
                        const _0x19af23 = _0xf131f9;
                        this['client'] = new _0x1e2add[(_0x19af23(0xd2c))]['Client']({
                            'channels': [_0x4052ce]
                        }), this[_0x19af23(0x301)]['connect']();
                    }
                    static['debug'](_0xd49e8e, _0x4dc5cb) {
                        const _0x5c4438 = _0xf131f9;
                        if (_0x1e021d['isTwitchOn']() && _0x1e021d[_0x5c4438(0x19c7)]())
                            for (; _0xd49e8e > 0x0;) {
                                let _0x177c55 = ['a', 'b', 'c', '1', '2', '3', '4', '5', '6'];
                                _0x44d0fd['default'][_0x5c4438(0x1043)]['scene'][_0x5c4438(0x915)][_0x5c4438(0x12b8)]({
                                    'delay': Math[_0x5c4438(0x9ad)]() * _0x4dc5cb,
                                    'callback': () => {
                                        const _0x389834 = _0x5c4438;
                                        _0x1e021d[_0x389834(0x301)][_0x389834(0x700)]('message', '', {
                                            'display-name': 'debug'
                                        }, _0x177c55[Math[_0x389834(0xe07)](Math['random']() * _0x177c55[_0x389834(0xed9)])], !0x1);
                                    }
                                }), _0xd49e8e -= 0x1;
                            }
                    }
                    static['kill']() {
                        const _0x5ee9b8 = _0xf131f9;
                        this[_0x5ee9b8(0x301)] && (this[_0x5ee9b8(0x301)]['disconnect'](), this[_0x5ee9b8(0x301)] = null);
                    }
                    static['isTwitchOn']() {
                        const _0x1b5700 = _0xf131f9;
                        return '' != _0x44d0fd[_0x1b5700(0xd2c)]['Core']['PlayerOptions'][_0x1b5700(0x11d0)];
                    }
                    static['isTwitchWorking']() {
                        const _0x598d1a = _0xf131f9;
                        return null != this['client'] && ('CONNECTING' == this[_0x598d1a(0x301)][_0x598d1a(0x13c7)]() || 'OPEN' == this['client'][_0x598d1a(0x13c7)]());
                    }
                }
                _0x3fa001['default'] = _0x1e021d;
            };
