// Module 0x5b89
// Args: _0x183c68, _0x56029f, _0x67e9aa

export default (_0x183c68, _0x56029f, _0x67e9aa) => {
                'use strict';
                const _0x5b5e10 = a0_0x6932;
                var _0x3413e3 = this && this['__importDefault'] || function(_0xa5d0a8) {
                    const _0x216195 = _0x5b5e10;
                    return _0xa5d0a8 && _0xa5d0a8[_0x216195(0x16f1)] ? _0xa5d0a8 : {
                        'default': _0xa5d0a8
                    };
                };
                Object['defineProperty'](_0x56029f, '__esModule', {
                    'value': !0x0
                });
                const _0x342454 = _0x3413e3(_0x67e9aa(0x9bda)),
                    _0x1c1ac3 = _0x3413e3(_0x67e9aa(0xc42e)),
                    _0x1ccd95 = _0x3413e3(_0x67e9aa(0x5f07)),
                    _0x4c6fad = _0x3413e3(_0x67e9aa(0x15196));
                class _0x49e95d extends _0x4c6fad['default'] {
                    constructor() {
                        const _0x12c79e = _0x5b5e10;
                        super(...arguments), this[_0x12c79e(0x351)] = null, this[_0x12c79e(0x279)] = !0x1, this[_0x12c79e(0xbf0)] = 0x5dc, this[_0x12c79e(0x11ed)] = !0x0;
                    } ['OnRecycle']() {
                        const _0x4df595 = _0x5b5e10;
                        super['OnRecycle'](), this['isCullable'] = !0x1, this[_0x4df595(0x7cb)] = 0x0, this[_0x4df595(0xd9b)] = this['scene'][_0x4df595(0x12a1)][_0x4df595(0x18bd)]({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0x64
                        });
                        let _0x34442f = 'CoinGold.png';
                        switch (this[_0x4df595(0xe49)]) {
                            case _0x342454['default'][_0x4df595(0x578)]:
                                _0x34442f = 'CoinGold.png';
                                break;
                            case _0x342454['default'][_0x4df595(0x719)]:
                                _0x34442f = 'GemBlue.png';
                        }
                        this[_0x4df595(0x125b)] = this[_0x4df595(0x6d2)]['add'][_0x4df595(0x1791)]('items')[_0x4df595(0x14c0)]({
                            'frame': [_0x34442f],
                            'quantity': 0xa,
                            'lifespan': 0x7d0,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'angle': {
                                'min': 0xe1,
                                'max': 0x13b
                            },
                            'speed': {
                                'min': 0xe1,
                                'max': 0x113
                            },
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'gravityY': 0x320,
                            'bounce': 0.2,
                            'collideTop': !0x1,
                            'collideBottom': !0x0,
                            'collideLeft': !0x1,
                            'collideRight': !0x1,
                            'on': !0x1
                        });
                    } ['GetDamaged'](_0x9615b0, _0x3fda22, _0x952a3, _0x29e4ee) {
                        const _0x55be8d = _0x5b5e10;
                        if (this['owner'] && this[_0x55be8d(0x351)]['GetDamaged'](_0x9615b0, _0x3fda22, _0x952a3, _0x29e4ee), !this[_0x55be8d(0x279)]) {
                            if (this['canEmitParticles']) {
                                if (this['PfxEmitter']['emitParticleAt'](this['x'], this['y']), this['scene'][_0x55be8d(0x915)]['removeEvent'](this[_0x55be8d(0xebf)]), this['particlesTimer'] = this['scene'][_0x55be8d(0x915)]['addEvent']({
                                        'delay': this[_0x55be8d(0xbf0)],
                                        'callback': () => {
                                            const _0x485363 = _0x55be8d;
                                            this[_0x485363(0x11ed)] = !0x0;
                                        }
                                    }), this[_0x55be8d(0xe49)] === _0x342454['default']['D_CLUSTER_COINS']) {
                                    let _0xb05dac = _0x1ccd95[_0x55be8d(0xd2c)][_0x55be8d(0x1043)][_0x55be8d(0xccb)](this['x'], this['y'], _0x1c1ac3[_0x55be8d(0xd2c)][_0x55be8d(0x1a10)]);
                                    _0xb05dac && (_0xb05dac[_0x55be8d(0x915)] = 0x1, _0xb05dac['goToPlayer'] = !0x0, _0xb05dac['value'] = 0.5, _0xb05dac['feverMS'] = 0xa);
                                } else {
                                    if (this['enemyType'] === _0x342454['default'][_0x55be8d(0x719)]) {
                                        let _0x56c409 = _0x1ccd95['default'][_0x55be8d(0x1043)][_0x55be8d(0xccb)](this['x'], this['y'], _0x1c1ac3[_0x55be8d(0xd2c)]['GEM']);
                                        _0x56c409 && (_0x56c409[_0x55be8d(0x915)] = 0x1, _0x56c409[_0x55be8d(0x12a8)] = !0x0, _0x56c409[_0x55be8d(0xb81)] = 0x3);
                                    }
                                }
                            }
                            super[_0x55be8d(0x1112)](_0x9615b0, _0x3fda22, _0x952a3, _0x29e4ee);
                        }
                    }
                }
                _0x56029f['default'] = _0x49e95d;
            };
