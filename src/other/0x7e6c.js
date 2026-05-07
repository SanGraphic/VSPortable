// Module 0x7e6c
// Args: _0x3fd60f, _0x2244a3, _0x20efb9

export default (_0x3fd60f, _0x2244a3, _0x20efb9) => {
                'use strict';
                const _0x18af1c = a0_0x6932;
                var _0x10631f = this && this['__createBinding'] || (Object['create'] ? function(_0x50842b, _0x3ee16a, _0x271057, _0x367fea) {
                        const _0x3b958a = _0x18af1c;
                        void 0x0 === _0x367fea && (_0x367fea = _0x271057);
                        var _0x1a5717 = Object[_0x3b958a(0x1687)](_0x3ee16a, _0x271057);
                        _0x1a5717 && !('get' in _0x1a5717 ? !_0x3ee16a[_0x3b958a(0x16f1)] : _0x1a5717[_0x3b958a(0x11bf)] || _0x1a5717[_0x3b958a(0xf70)]) || (_0x1a5717 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x3ee16a[_0x271057];
                            }
                        }), Object[_0x3b958a(0x811)](_0x50842b, _0x367fea, _0x1a5717);
                    } : function(_0x34a890, _0x59428a, _0x31dc66, _0x400443) {
                        void 0x0 === _0x400443 && (_0x400443 = _0x31dc66), _0x34a890[_0x400443] = _0x59428a[_0x31dc66];
                    }),
                    _0x5c7fe5 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x32dbba, _0x119239) {
                        Object['defineProperty'](_0x32dbba, 'default', {
                            'enumerable': !0x0,
                            'value': _0x119239
                        });
                    } : function(_0x1a1dfd, _0x43c423) {
                        const _0x16f165 = _0x18af1c;
                        _0x1a1dfd[_0x16f165(0xd2c)] = _0x43c423;
                    }),
                    _0x83fa3b = this && this['__importStar'] || function(_0x3c101e) {
                        const _0x41975b = _0x18af1c;
                        if (_0x3c101e && _0x3c101e[_0x41975b(0x16f1)]) return _0x3c101e;
                        var _0x4faaf0 = {};
                        if (null != _0x3c101e) {
                            for (var _0xdb4a15 in _0x3c101e) 'default' !== _0xdb4a15 && Object[_0x41975b(0x977)][_0x41975b(0x2cf)][_0x41975b(0xff0)](_0x3c101e, _0xdb4a15) && _0x10631f(_0x4faaf0, _0x3c101e, _0xdb4a15);
                        }
                        return _0x5c7fe5(_0x4faaf0, _0x3c101e), _0x4faaf0;
                    },
                    _0x3fe3eb = this && this['__importDefault'] || function(_0x664528) {
                        const _0x10cfb7 = _0x18af1c;
                        return _0x664528 && _0x664528[_0x10cfb7(0x16f1)] ? _0x664528 : {
                            'default': _0x664528
                        };
                    };
                Object['defineProperty'](_0x2244a3, '__esModule', {
                    'value': !0x0
                });
                const _0x218f2b = _0x20efb9(0x16c14),
                    _0x5b5429 = _0x3fe3eb(_0x20efb9(0xccae)),
                    _0x5e4640 = _0x83fa3b(_0x20efb9(0x5f07)),
                    _0x3587a5 = _0x3fe3eb(_0x20efb9(0x169b4)),
                    _0x1f1304 = _0x3fe3eb(_0x20efb9(0x1715a)),
                    _0x30fb29 = _0x3fe3eb(_0x20efb9(0x5103)),
                    _0x54ee64 = _0x3fe3eb(_0x20efb9(0x16a35));
                class _0x3cd548 extends Phaser['Scene'] {
                    constructor() {
                        const _0xa09121 = _0x18af1c;
                        super({
                            'key': _0x3587a5[_0xa09121(0xd2c)][_0xa09121(0x1725)]
                        });
                    } ['preload']() {} ['create']() {
                        const _0x1e32e7 = _0x18af1c;
                        var _0x596c2d = _0x5e4640[_0x1e32e7(0x1e0)][_0x1e32e7(0x173c)] * _0x30fb29['default']['RPixelScale'],
                            _0x3fd544 = (_0x5e4640[_0x1e32e7(0x1e0)]['height'] - 0x40) * _0x30fb29['default'][_0x1e32e7(0xb53)],
                            _0x1cb891 = _0x3fd544 * _0x30fb29[_0x1e32e7(0xd2c)]['PixelScale'];
                        this['background'] = new _0x218f2b[(_0x1e32e7(0x1a31))](this, _0x5b5429[_0x1e32e7(0xd2c)][_0x1e32e7(0x1537)], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x596c2d,
                            'height': _0x3fd544
                        }), this['background'][_0x1e32e7(0x726)](_0x5e4640['SAFEAREA']['centerX'], _0x1cb891), this[_0x1e32e7(0x431)]['setOrigin'](0.5, 0x1), this[_0x1e32e7(0x431)]['setScale'](_0x30fb29[_0x1e32e7(0xd2c)][_0x1e32e7(0x15db)]), this['add']['existing'](this[_0x1e32e7(0x431)]), this['background']['setInteractive'](), this[_0x1e32e7(0x310)] = 0x40, this[_0x1e32e7(0xbcc)] = _0x3fd544 - 0x64, this['ScrollBar'] = new _0x218f2b[(_0x1e32e7(0x1a31))](this, _0x5b5429['default'][_0x1e32e7(0x127d)], {
                            'x': _0x5e4640['SAFEAREA'][_0x1e32e7(0xf42)] + _0x596c2d - 0x20,
                            'y': this[_0x1e32e7(0x310)],
                            'width': 0x8,
                            'height': this[_0x1e32e7(0xbcc)]
                        })['setScale'](_0x30fb29[_0x1e32e7(0xd2c)][_0x1e32e7(0x15db)])[_0x1e32e7(0xf8e)](0.5, 0x0), this['add'][_0x1e32e7(0x1a88)](this[_0x1e32e7(0x1841)]), this[_0x1e32e7(0xead)] = this[_0x1e32e7(0x18bd)][_0x1e32e7(0x568)](_0x5e4640[_0x1e32e7(0x1e0)]['left'] + _0x596c2d - 0x20, this[_0x1e32e7(0x310)], 'UI', 'menu_slider_button_strip3.png')['setScale'](_0x30fb29[_0x1e32e7(0xd2c)]['PixelScale'])[_0x1e32e7(0xf8e)](0.5, 0x0), this['header'] = this[_0x1e32e7(0x18bd)][_0x1e32e7(0x758)](_0x5e4640['SAFEAREA'][_0x1e32e7(0x1634)], 0x21, _0x5e4640[_0x1e32e7(0xd2c)][_0x1e32e7(0x1f1)][_0x1e32e7(0xb10)]('credits_header'), {})[_0x1e32e7(0x8a2)](0x2 * _0x30fb29['default']['PixelScale'])[_0x1e32e7(0xf8e)](0.5), _0x5e4640['default'][_0x1e32e7(0x1f1)]['scaleToMaxFast'](this[_0x1e32e7(0x1752)], !0x1, 0xfa), this['text'] = this[_0x1e32e7(0x18bd)][_0x1e32e7(0x758)](0x10, 0x40, _0x5e4640[_0x1e32e7(0xd2c)][_0x1e32e7(0x1f1)]['getLang']('credits_header'), {})['setScale'](0x1 * _0x30fb29['default'][_0x1e32e7(0x15db)])[_0x1e32e7(0xf8e)](0x0), this[_0x1e32e7(0x17eb)] = this[_0x1e32e7(0x6d2)]['get'](_0x3587a5[_0x1e32e7(0xd2c)]['UI_topBar']);
                        var _0x3a3eb4 = this[_0x1e32e7(0x3fe)]['getAll']();
                        this[_0x1e32e7(0x3fe)][_0x1e32e7(0x6fd)](), this['SceneContainer'] = this[_0x1e32e7(0x18bd)][_0x1e32e7(0x1990)](0x0, 0x0, _0x3a3eb4), this[_0x1e32e7(0x1ac3)][_0x1e32e7(0x8a2)]((0x0, _0x5e4640[_0x1e32e7(0x9c7)])()), _0x1f1304['default'][_0x1e32e7(0x8c7)](this[_0x1e32e7(0x1ac3)]), this['text']['setText'](['VAMPIRE SURVIVORS ' + _0x5e4640['default']['Lang']['getLang']('credits_gameBy') + ' Luca Galante', '', 'Vampire Survivors is a trademark\nof Poncle Limited, all rights reserved.', '', '', _0x5e4640['default']['Lang'][_0x1e32e7(0xb10)]('credits_programming'), '\u2022 Luca Galante', '\u2022 David Brown', '\u2022 Sam McGarry', '', _0x5e4640['default'][_0x1e32e7(0x1f1)]['getLang']('credits_artwork'), '\u2022 Alessio Greco Art', '\u2022 Lo Studio CiAbbatte', '', _0x5e4640[_0x1e32e7(0xd2c)][_0x1e32e7(0x1f1)]['getLang']('credits_audio'), '\u2022 Daniele Zandara', '\u2022 Filippo Vicarelli', '\u2022 William Davies', '\u2022 Lorenzo Floro', '', 'HEAD OF OPERATIONS', '\u2022 Julie Craig', '', 'QA', '\u2022 Mathew Gurunlian', '', _0x5e4640['default']['Lang'][_0x1e32e7(0xb10)]('credits_graphics'), '\u2022 Glauber Kotaki', '\u2022 Pitavant', '\u2022 Main base assets: Oryx Design Lab', '\u2022 UI assets: Thomas Feichtmeir (Cyangmou)', '\u2022 Revival animation: Luis Zuno (Ansimuz)', '\u2022 Tilesets: Bokou', '\u2022 Flower Icons: REXARD', '\u2022 Pile of Skulls Tile Texture: Dereza', '\u2022 Galaxy shader: rifke, Dave Hoskins', '', _0x5e4640['default'][_0x1e32e7(0x1f1)]['getLang']('credits_animations'), '\u2022 Glauber Kotaki', '\u2022 Pitavant', _0x5e4640['default'][_0x1e32e7(0x1f1)][_0x1e32e7(0xb10)]('credit_monsters') + ' Mathew Gurunlian', _0x5e4640[_0x1e32e7(0xd2c)][_0x1e32e7(0x1f1)]['getLang']('credit_characters') + ' Twiranux', '\u2022 Ben Stoneman', '', 'SENIOR FULL STACK DEVELOPER', '\u2022 Arran White', '', 'LEAD TECHNICAL ARTIST', '\u2022 John O\'Really', '', 'MARKETING MANAGER', '\u2022 George Morgan', '', 'COMMUNITY MANAGERS', '\u2022 Beth Molloy', '\u2022 Lucy Vincent', '', 'LOREKEEPER', '\u2022 James Stephanie Sterling', '', 'TECHNICAL WRITING', '\u2022 Laurence Phillips', '', 'TERRIBLE WRITING', '\u2022 Luca Galante', '', 'VIDEO EDITOR', '\u2022 Owen Trett', '', _0x5e4640[_0x1e32e7(0xd2c)][_0x1e32e7(0x1f1)][_0x1e32e7(0xb10)]('credit_trailer'), '\u2022 Bartosz Strusewicz', '\u2022 nareshps', '', 'ANNOUNCER', '\u2022 Scott Tunnix', '', 'QUEEN SIGMA TRAILER ANIMATION', '\u2022 Marlowe Dobbe', '', 'BAD TRAILERS', '\u2022 Luca Galante', '', 'LOCALIZATION SERVICE: LOCKIT QA', '\u2022 Localization Director: Michaël Lelièvre', '\u2022 Localization Manager: Jean-Noël Guenot', '', 'Translations: LOCKIT QA', '\u2022 French: ', '\tSarah Deville, Lucie Teulières', '\u2022 Italian: ', '\tChiara Di Modica, Alessandro De Luca', '\u2022 Spanish: ', '\tJuanma Pérez, Adrián Marinero García', '\u2022 Brazilian Portuguese: ', '\tEgon Lessa, Beatriz Cerveira', '\u2022 Turkish: ', '\tYusuf Yılgör, Ayhan Karaduman', '\u2022 Simplified Chinese: ', '\tGeorge Ou, Jimmie Choo', '\u2022 Japanese: ', '\tIori Honda, Saori Kitagawa', '\u2022 German, Polish, Russian and Korean:', '\tprovided by Keywords Studios', '', 'FAN TRANSLATIONS \u2665', '\u2022 한국어 : danics, 뱀서갤 ㅇㅇ(210.105)', '\u2022 日本語 : Harukin & 日本語化有志一同', '\u2022 Русский : FKPIRUS', '\u2022 简体中文 : cstg剑心', '\u2022 Français : Sylang', '\u2022 Português-Brasil : G Megalow', '', 'COMMUNITY HELPERS \u2665', '\u2022 Amars95', '\u2022 AriusII', '\u2022 Bwesh', '\u2022 Dex', '\u2022 megalow', '\u2022 nyan \u30FBෆ', '\u2022 SHA2048', '\u2022 Sir Sunkruhm', '', _0x5e4640['default'][_0x1e32e7(0x1f1)][_0x1e32e7(0xb10)]('credit_tech'), '\u2022 Phaser 3, RexPlugins, Electron, ʎʇᴉu\u2229', '', 'SPECIAL THANKS', '\u2022 Richard Davies', '', 'PC GAMEPASS INTEGRATION', '\u2022 Sam McGarry', '', 'STOVE INTEGRATION', '\u2022 David Brown', '', 'ACCIDENTAL INTEGRATION', '\u2022 Luca Galante', '', 'CONSOLE ENGINE PORT:', '  PROGRAMMING', '\u2022 Adam Goodchild', '\u2022 Duncan Stead', '\u2022 Matthew Smith', '\u2022 Sam McGarry', '\u2022 Tomasz Synowiec', '', 'CONSOLE ENGINE PORT:', '  PERFORMANCE OPTIMIZATION', '\u2022 Ruben Torres Bonet (TheGameDev.Guru)', '\u2022 Alex Bakanov', '', 'CONSOLE ENGINE PORT:', '  COMPLAINING', '\u2022 Luca Galante', '', 'GENERIC EMPLOYEE:', '\u2022 Matthew Smith', '', 'CHIEF INNUENDO OFFICER', '\u2022 Andrea Ligabue', '', 'ROBOT TEDDY', '\u2022 Al Luis Lucas', '\u2022 Jess Alexander', '\u2022 Kamil Kozicki', '\u2022 Martin Patino', '\u2022 Ranjani Natarajan', '\u2022 Richie de Wit', '\u2022 Sam D\'Elia', '', 'PR and marketing support', 'Future Friends Games:', '\u2022 Thomas Reisenegger', '\u2022 Paul Nadin', '\u2022 Kris Wingfield-Bennett', '\u2022 Alex Fairwood', '\u2022 Grace Curtis', '\u2022 Laura Cesa', '\u2022 Caitlin Reid', '', '', '', '', '', 'VAMPIRE SURVIVORS:\nLegacy of the Moonspell', ' ', ' ' + _0x5e4640[_0x1e32e7(0xd2c)]['Lang'][_0x1e32e7(0xb10)]('credits_audio'), ' \u2022 Daniele Zandara', ' \u2022 Erhu player: Jazreel Luar', ' \u2022 Guitar solo: Davide Carnelli', ' \u2022 Opera vocals: Julia Henderson', ' ', ' CHARACTER DESIGN AND ANIMATION', ' \u2022 Glauber Kotaki', ' ', ' ENVIRONMENTS', ' \u2022 Pitavant', ' \u2022 Kokoro Reflections', ' \u2022 Celianna [Copyright]2015 Pixanna', ' ', ' LEVEL DESIGN', ' \u2022 Laurence Phillips', ' \u2022 Luca Galante', ' ', ' ' + _0x5e4640['default'][_0x1e32e7(0x1f1)][_0x1e32e7(0xb10)]('credit_trailer'), ' \u2022 Benjamin Combes', ' ', ' TRAILERS VOICE OVER', ' \u2022 Laura Welsh', ' \u2022 Scott Tunnix', ' ', ' TRAILER ANIMATION and KEY ARTWORK', ' \u25AA Produced by Studio Yotta', ' In collaboration with Studio Giggex,\nStudio GLAJ, & Shinobi Creative', ' ', ' \u25AA Storyboards & Animatic:', '  Alan Wan', '  Chris Luc', '  Kevin Molina-Ortiz', '  Sheldon Vella', ' ', ' \u25AA Character Design:', '  Onasugar', ' ', ' \u25AA Animation:', '  Abroo Khan', '  Aelloe', '  Alaine Baybayan', '  Athena Hao', '  Connie Cheng', '  Danny Araya', '  Dylan Li', '  Gareth Wong', '  Hama', '  Jacob Tobin', '  Jordan Rear', '  Julius de Belen', '  Katie Silva', '  Louis Descalzo', '  Mari Arakaki', '  Onasugar', '  Ryan White', '  Tam Lu', '  Will Martinez', ' ', ' \u25AA Compositing:', '  Joel Cheetham', '  Sam Batterbury', '  Tam Lu', ' ', ' \u25AA Backgrounds:', '  Maya Dumas', ' ', ' \u25AA Executive Producer:', '  Jake Ganz', ' ', ' \u25AA Lead Animator:', '  Tam Lu', ' ', ' \u25AA Production Assistant:', '  Ryohei Sakami', '', '', 'VAMPIRE SURVIVORS:\nTides of the Foscari', ' ', ' ' + _0x5e4640[_0x1e32e7(0xd2c)][_0x1e32e7(0x1f1)]['getLang']('credits_audio'), ' \u2022 Daniele Zandara', ' \u2022 Arrangements: Stefano Sacchi', ' \u2022 Orchestra: Budapest Scoring', ' \u2022 Mixing: Tim Starnes', ' \u2022 Violin: Camilla D\'Onofrio', ' \u2022 Guitar: Davide Carnelli', ' ', ' CHARACTER DESIGN AND ANIMATION', ' \u2022 Glauber Kotaki', ' ', ' ENEMY DESIGN AND ANIMATION', ' \u2022 Glauber Kotaki', ' \u2022 Pitavant', ' \u2022 Chris KelBalls', ' ', ' ENVIRONMENTS', ' \u2022 Kokoro Reflections', ' \u2022 Celianna [Copyright]2015 Pixanna', ' ', ' LEVEL DESIGN', ' \u2022 Laurence Phillips', ' \u2022 Luca Galante', ' ', ' LOREKEEPER', ' \u2022 James Stephanie Sterling', '', ' ' + _0x5e4640['default'][_0x1e32e7(0x1f1)]['getLang']('credit_trailer'), ' \u2022 Benjamin Combes', ' ', ' ANNOUNCER', ' \u2022 Scott Tunnix', ' ', ' TRAILERS VOICE OVER', ' \u2022 Eve Webster', ' \u2022 Inel Tomlinson', '', ' CHARACTERS KEY ART', ' \u2022 John Crayton', '', ' TRAILER ANIMATION', ' Studio Yotta', '', ' \u25AA Storyboards', ' Studio Giggex - Sheldon Vella', '', ' \u25AA Compositing', ' \tJoel Cheetham, Sheldon Vella', ' \u25AA Character Designs', ' \tIlaria Catalani', ' \u25AA Backgrounds', ' \tMaya Dumas, Brandon Lai', ' \u25AA Animation Direction', '\tJake Ganz', ' \u25AA Illustrations', '\tJohn Crayton, Maya Dumas,', ' \tSheldon Vella', ' \u25AA Clean-Up Direction', '\tRyohei Sakami', '', ' \u25AA Key Animation', '\tElle Power', '\tWill Stmpl', '\tJeff Liu', '\tIda Bagus Yoga', '\tMichelle García', '', ' \u25AA Clean-Up Animation', '\tRakun Digital Studio', '\tShinobi Creative', '\tAngelolo', '\tPaul Z', '\tHiromi Yoshida', '\tRemus Lancer', '\tToani', '\tRain Sy', '\tNicole Derksen', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Thank you Bill from the UK \uD83D\uDC4B']);
                        var _0x28a149 = 0x2 * this[_0x1e32e7(0x758)]['displayHeight'] - this[_0x1e32e7(0x12f9)][_0x1e32e7(0x140e)] - 0x1c2;
                        const _0x3b5bda = new Phaser[(_0x1e32e7(0xbf2))]['Graphics'](this, {
                            'x': 0x0,
                            'y': 0x0
                        });
                        _0x3b5bda['lineStyle'](0x1, 0xffffff, 0.9), _0x3b5bda[_0x1e32e7(0x950)](0xffff, 0.2), _0x3b5bda[_0x1e32e7(0x11fe)](_0x5e4640[_0x1e32e7(0x1e0)]['left'], 0x7c, _0x5e4640[_0x1e32e7(0x1e0)][_0x1e32e7(0x173c)], this[_0x1e32e7(0x12f9)][_0x1e32e7(0x140e)] - 0x80 - 0x8);
                        var _0x5f328a = _0x3b5bda[_0x1e32e7(0xadc)]();
                        this['sc'] = new _0x54ee64[(_0x1e32e7(0xd2c))](this, _0x5e4640[_0x1e32e7(0x1e0)][_0x1e32e7(0x1634)], _0x3b5bda['y'] + 0.5 * (this[_0x1e32e7(0x12f9)][_0x1e32e7(0x140e)] - 0x80 - 0x68)), this['sc']['setMask'](_0x5f328a), this[_0x1e32e7(0x1ac3)]['y'] = this[_0x1e32e7(0x12f9)]['height'] - this['SceneContainer'][_0x1e32e7(0x828)], this['sc']['y'] = 0.5 * _0x28a149, this['sc'][_0x1e32e7(0x1607)](_0x5e4640[_0x1e32e7(0x1e0)]['width'], _0x28a149), this['sc']['AddChildren'](this['text']), this['scene']['bringToTop'](_0x3587a5['default']['UI_topBar']), this[_0x1e32e7(0xe2a)](), this['MakeUIGrid']();
                    } ['MakeUIGrid']() {
                        const _0x3428d7 = _0x18af1c;
                        let _0x25c45d = _0x5e4640[_0x3428d7(0xd2c)]['Core']['SceneManager']['UI_overlayScene'];
                        _0x25c45d[_0x3428d7(0x4ff)](0x1, 0x1, !0x1), _0x25c45d['UI_grid']['SetContents'](0x0, 0x0, this[_0x3428d7(0x17eb)]['BackButton']), _0x25c45d['ToggleCursorsVisibility'](!0x0), _0x25c45d[_0x3428d7(0x8cc)]['SelectGameObject'](this[_0x3428d7(0x17eb)][_0x3428d7(0x1775)]), _0x25c45d[_0x3428d7(0x938)] = this[_0x3428d7(0x17eb)][_0x3428d7(0x1775)], _0x5e4640['default'][_0x3428d7(0x1043)][_0x3428d7(0x69e)]['scene']['bringToTop'](_0x25c45d), _0x25c45d[_0x3428d7(0x1ad4)] = () => {
                            const _0x27ee7d = _0x3428d7;
                            var _0x1f74ed, _0x4e560b, _0x17abda;
                            null === (_0x17abda = null === (_0x4e560b = null === (_0x1f74ed = this[_0x27ee7d(0x17eb)][_0x27ee7d(0x1775)]) || void 0x0 === _0x1f74ed ? void 0x0 : _0x1f74ed['_events']) || void 0x0 === _0x4e560b ? void 0x0 : _0x4e560b['pointerdown']) || void 0x0 === _0x17abda || _0x17abda['fn']();
                        };
                    } ['HandleInput']() {
                        const _0x2f9cb1 = _0x18af1c;
                        this[_0x2f9cb1(0x1331)]['mouse'][_0x2f9cb1(0xcb6)](), this[_0x2f9cb1(0x1331)]['on']('wheel', (_0x38d151, _0x5ccc0c, _0x5870cf, _0x38b20e, _0x277011) => {
                            const _0xe2626c = _0x2f9cb1;
                            this['sc'][_0xe2626c(0xad5)](0.4 * _0x38b20e);
                        });
                    } ['update']() {
                        const _0x553857 = _0x18af1c;
                        this[_0x553857(0xead)][_0x553857(0x726)](this['ScrollCursor']['x'], this[_0x553857(0x310)] + this['sc'][_0x553857(0x60a)] * (this[_0x553857(0xbcc)] * _0x30fb29['default']['PixelScale'] - this['ScrollCursor'][_0x553857(0x828)]));
                    }
                }
                _0x2244a3['default'] = _0x3cd548;
            };
