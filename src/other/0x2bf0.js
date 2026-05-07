// Module 0x2bf0
// Args: _0x4483fe, _0x22b107, _0x4b4080

export default (_0x4483fe, _0x22b107, _0x4b4080) => {
                'use strict';
                const _0x7ee1cf = a0_0x6932;
                var _0x2bb5b6 = this && this['__importDefault'] || function(_0x5511a6) {
                    const _0x444118 = a0_0x6932;
                    return _0x5511a6 && _0x5511a6['__esModule'] ? _0x5511a6 : {
                        'default': _0x5511a6
                    };
                };
                Object['defineProperty'](_0x22b107, '__esModule', {
                    'value': !0x0
                });
                const _0x2b28cf = _0x2bb5b6(_0x4b4080(0x5103)),
                    _0x561bbd = _0x2bb5b6(_0x4b4080(0x1715a)),
                    _0x3fa654 = _0x2bb5b6(_0x4b4080(0x5f07));
                _0x22b107['default'] = class {
                    constructor(_0x178493) {
                        const _0x4a79ac = _0x7ee1cf;
                        this['timeOffset'] = 0x0, this[_0x4a79ac(0x11e3)] = 0x384, this['DayColor'] = 0xffffff, this[_0x4a79ac(0x13ca)] = 0x444ee, this[_0x4a79ac(0x1674)] = !0x0, this[_0x4a79ac(0x8f0)] = !0x0, this[_0x4a79ac(0x1818)] = 0x1, this['scene'] = _0x178493;
                    } ['MakeBackground'](_0x271853, _0x462f2a) {
                        const _0xc3be48 = _0x7ee1cf;
                        this[_0xc3be48(0xb58)] = 0xffffff, this[_0xc3be48(0x13ca)] = 0x4444ee, this[_0xc3be48(0x27e)] = 0x1, _0x271853 && (this['bgtile'] = this[_0xc3be48(0x6d2)][_0xc3be48(0x18bd)][_0xc3be48(0x899)](0.5 * this[_0xc3be48(0x6d2)]['renderer'][_0xc3be48(0x173c)], 0.5 * this['scene'][_0xc3be48(0x12f9)][_0xc3be48(0x140e)], this[_0xc3be48(0x6d2)]['renderer'][_0xc3be48(0x173c)], this['scene']['renderer'][_0xc3be48(0x140e)], _0x271853), this[_0xc3be48(0x1402)][_0xc3be48(0x8a2)](_0x2b28cf[_0xc3be48(0xd2c)][_0xc3be48(0x15db)])['setScrollFactor'](0x0)['setDepth'](-0xdbba0), _0x3fa654[_0xc3be48(0xd2c)]['Core']['Stage'][_0xc3be48(0x716)] && this[_0xc3be48(0x1402)]['setPipeline']('Light2D')), _0x462f2a['DayColor'] && (this[_0xc3be48(0xb58)] = _0x462f2a['DayColor']), _0x462f2a[_0xc3be48(0x13ca)] && (this['NightColor'] = _0x462f2a['NightColor']), _0x3fa654[_0xc3be48(0xd2c)][_0xc3be48(0x1043)][_0xc3be48(0x14d8)]['SelectedInverse'] && (_0x3fa654['default']['Core']['PlayerOptions']['VisuallyInvertStages'] && (this['bgtile']['setFlipY'](!0x0), this['yMul'] = -0x1), _0x462f2a[_0xc3be48(0x18fe)] && (this[_0xc3be48(0xb58)] = _0x462f2a['InverseDayColor']), _0x462f2a[_0xc3be48(0xda6)] && (this['NightColor'] = _0x462f2a['InverseNightColor']));
                    } ['Update'](_0x495c1f) {
                        const _0x2d10a5 = _0x7ee1cf;
                        this['canScroll'] && this['bgtile'] && (this[_0x2d10a5(0x1402)][_0x2d10a5(0x1a79)] = this['speedFactor'] * _0x3fa654[_0x2d10a5(0xd2c)][_0x2d10a5(0x1043)][_0x2d10a5(0x10f6)]['x'], this[_0x2d10a5(0x1402)]['tilePositionY'] = this[_0x2d10a5(0x1818)] * this['yMul'] * _0x3fa654[_0x2d10a5(0xd2c)]['Core'][_0x2d10a5(0x10f6)]['y']);
                    } ['DayNightHue']() {
                        const _0x945ff9 = _0x7ee1cf;
                        if (!this[_0x945ff9(0x1674)]) return;
                        if (!this[_0x945ff9(0x1402)]) return;
                        let _0x44bc6d, _0x1d88c5 = Math['floor']((_0x3fa654['default']['Core'][_0x945ff9(0x225)] + this[_0x945ff9(0x2ff)]) / this['dayCycleDuration']) % 0x2 == 0x0,
                            _0x398902 = (_0x3fa654['default'][_0x945ff9(0x1043)]['SurvivedSeconds'] + this[_0x945ff9(0x2ff)]) % this[_0x945ff9(0x11e3)];
                        _0x44bc6d = _0x1d88c5 ? _0x398902 / this['dayCycleDuration'] : (this['dayCycleDuration'] - _0x398902) / this[_0x945ff9(0x11e3)], this[_0x945ff9(0x1402)]['setTint'](_0x561bbd['default'][_0x945ff9(0xac5)](this[_0x945ff9(0xb58)], this[_0x945ff9(0x13ca)], _0x44bc6d));
                    } ['ToggleScrolling'](_0xe64500) {
                        this['canScroll'] = _0xe64500;
                    } ['ResetAndStopDayNightHue']() {
                        const _0x1114f5 = _0x7ee1cf;
                        this[_0x1114f5(0x1674)] = !0x1, this[_0x1114f5(0x1402)]['setTint'](this[_0x1114f5(0xb58)]);
                    }
                };
            };
