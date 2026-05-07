// Module 0x124a7
// Args: _0x1d9882, _0xdb3a17, _0x56946d

export default (_0x1d9882, _0xdb3a17, _0x56946d) => {
                'use strict';
                const _0x5bc622 = a0_0x6932;
                var _0x220db2 = this && this['__importDefault'] || function(_0xc34ab9) {
                    return _0xc34ab9 && _0xc34ab9['__esModule'] ? _0xc34ab9 : {
                        'default': _0xc34ab9
                    };
                };
                Object['defineProperty'](_0xdb3a17, '__esModule', {
                    'value': !0x0
                });
                const _0x41580d = _0x220db2(_0x56946d(0x9bda)),
                    _0x2ba3cd = _0x220db2(_0x56946d(0x3fe3)),
                    _0x4a37b3 = _0x220db2(_0x56946d(0x14442)),
                    _0x474f01 = _0x220db2(_0x56946d(0x2248)),
                    _0x2354f0 = _0x220db2(_0x56946d(0x1545b)),
                    _0xad9281 = _0x220db2(_0x56946d(0x1229)),
                    _0x3c89f9 = _0x220db2(_0x56946d(0x148f5)),
                    _0x1f8f9c = _0x220db2(_0x56946d(0xdfbc)),
                    _0x43f785 = _0x220db2(_0x56946d(0xc42e)),
                    _0x4ba1a6 = {
                        [_0x2ba3cd['default']['CHAPEL']]: [{
                            'order': 0x32,
                            'stageName': 'Cappella Magna',
                            'description': 'Have we gone too far? Could have just camped in the forest with all that chicken, but noooo, we had to go chase some random vampire instead.',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_chapel.png',
                            'texture': 'UI',
                            'frameName': 'stage_chapel_icon.png',
                            'frameNameUnlock': 'stage_chapel_unlock.png',
                            'bestiaryBG': 'background_chapel.png',
                            'stageNumber': 'Stage 5',
                            'unlocked': !0x1,
                            'hidden': !0x0,
                            'BGM': _0x3c89f9['default']['BGM_Chapel_B'],
                            'sideBBGM': _0x3c89f9['default']['BGM_Chapel'],
                            'tips': '',
                            'hyperTips': '50% Gold bonus\n10% Luck bonus',
                            'relics': [],
                            'yellowRelics': [_0x43f785['default']['RELIC_GGOSPEL']],
                            'validForCharcaterData': !0x0,
                            'mods': {
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.4,
                                'EnemySpeed': 1.4,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 1.4,
                                'EnemyHealthMultiplier': 0x1,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x1
                            },
                            'hyper': {
                                'unlocked': !0x1,
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 0.6,
                                'EnemySpeed': 0.6,
                                'ProjectileSpeed': 0.15,
                                'GoldMultiplier': 0.5,
                                'LuckBonus': 0.1,
                                'XPBonus': 0x0,
                                'EnemyHealthMultiplier': 0x0,
                                'StartingSpawns': 0x14
                            },
                            'inverse': {
                                'tint': 0xaa88ee,
                                'GoldMultiplier': 0x2,
                                'EnemyHealthMultiplier': 0x2,
                                'LuckBonus': 0.2,
                                'TimeMods': {
                                    'start': 0x0,
                                    'hpPerMinute': 0.05,
                                    'speedPerMinute': 0.005
                                }
                            },
                            'tileset': {
                                'setKey': 'ChapelTexturePacked',
                                'setPath': 'assets/tilesets/ChapelTexturePacked.png',
                                'mapKey': 'Chapel',
                                'mapPath': 'assets/tilesets/Chapel.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': 'backgroundX',
                                'movingBackground': !0x0
                            },
                            'spawnType': _0x2354f0['default']['STANDARD'],
                            'startingSpawns': 0x28,
                            'minute': 0x0,
                            'destructibleType': _0x4a37b3['default']['CANDELABRA'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 0x14,
                            'destructibleChanceMax': 0x50,
                            'maxDestructibles': 0x14,
                            'BGTextureName': 'bg_null',
                            'cff': _0x1f8f9c['default']['ASSUNTA'],
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x41580d['default']['FANGEL1']],
                            'bosses': []
                        }, {
                            'minute': 0x1,
                            'minimum': 0x1e,
                            'frequency': 0x3e8,
                            'enemies': [_0x41580d['default']['FANGEL1']],
                            'bosses': [_0x41580d['default']['FANGEL3']],
                            'treasure': {
                                'chances': [0x0, 0x0, 0x1e],
                                'level': 0x1,
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x2,
                            'minimum': 0x28,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['FANGEL1'], _0x41580d['default']['FANGEL2']]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x28,
                            'frequency': 0xfa,
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'enemies': [_0x41580d['default']['TRAINEE_Y'], _0x41580d['default']['FANGEL1'], _0x41580d['default']['FANGEL2']],
                            'treasure': {
                                'chances': [0x3, 0x14, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x19,
                            'frequency': 0xfa,
                            'enemies': [_0x41580d['default']['TRAINEE_Y'], _0x41580d['default']['FANGEL1'], _0x41580d['default']['FANGEL2']]
                        }, {
                            'minute': 0x5,
                            'minimum': 0xa,
                            'frequency': 0x3e8,
                            'bosses': [_0x41580d['default']['BOSS_FANGEL3']],
                            'enemies': [_0x41580d['default']['TRAINEE_Y'], _0x41580d['default']['FANGEL3']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x1e,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['TRAINEE_B'], _0x41580d['default']['FANGEL3']]
                        }, {
                            'minute': 0x7,
                            'minimum': 0x3c,
                            'frequency': 0x1f4,
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'enemies': [_0x41580d['default']['KALI1'], _0x41580d['default']['FANGEL2'], _0x41580d['default']['TRAINEE_B']],
                            'treasure': {
                                'chances': [0x3, 0x14, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x8,
                            'minimum': 0x32,
                            'frequency': 0x5dc,
                            'enemies': [_0x41580d['default']['KALI2'], _0x41580d['default']['TRAINEE_B'], _0x41580d['default']['TRAINEE_Y'], _0x41580d['default']['TRAINEE']]
                        }, {
                            'minute': 0x9,
                            'minimum': 0x1e,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['SUCCUBUS'], _0x41580d['default']['TRAINEE_B']],
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'treasure': {
                                'chances': [0x3, 0x14, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xa,
                            'minimum': 0x14,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['SUCCUBUS'], _0x41580d['default']['TRAINEE_B'], _0x41580d['default']['KALI2']],
                            'bosses': [_0x41580d['default']['BOSS_SUCCUBUS']],
                            'treasure': {
                                'chances': [0x3, 0x14, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EVOLUTION'], _0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xb,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['ARMOR_SWORD'], _0x41580d['default']['TRAINEE_G']],
                            'arcanaHolder': _0x41580d['default']['BOSS_EYE2'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x474f01['default']['ARCANA'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x41580d['default']['ARMOR_FIRE'], _0x41580d['default']['ARMOR_SWORD']],
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'treasure': {
                                'chances': [0x3, 0x14, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['ARMOR_FIRE']]
                        }, {
                            'minute': 0xe,
                            'minimum': 0x96,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['TRAINEE_G'], _0x41580d['default']['XLARMOR_GREEN']]
                        }, {
                            'minute': 0xf,
                            'minimum': 0x32,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['XLARMOR_GOLD'], _0x41580d['default']['XLARMOR_GREEN']],
                            'bosses': [_0x41580d['default']['BOSS_XLARMOR_GREEN']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x10,
                            'minimum': 0x50,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['DEMON'], _0x41580d['default']['XLDEMON']]
                        }, {
                            'minute': 0x11,
                            'minimum': 0x28,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['XLDEMON'], _0x41580d['default']['DEMON_FAST']]
                        }, {
                            'minute': 0x12,
                            'minimum': 0x5a,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['XLDEMON'], _0x41580d['default']['DEMON_FAST'], _0x41580d['default']['TRAINEE_P']],
                            'bosses': [_0x41580d['default']['BOSS_ARMOR1']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x13,
                            'minimum': 0x50,
                            'frequency': 0x1f4,
                            'enemies': [_0x41580d['default']['XLDEMON'], _0x41580d['default']['XLDEMON2']]
                        }, {
                            'minute': 0x14,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['XLARCHDEMON'], _0x41580d['default']['XLDEMON2'], _0x41580d['default']['TRAINEE_P']],
                            'bosses': [_0x41580d['default']['BOSS_XLARCHDEMON']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EVOLUTION'], _0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x15,
                            'minimum': 0xc8,
                            'frequency': 0x14,
                            'enemies': [_0x41580d['default']['STAGEKILLER']],
                            'arcanaHolder': _0x41580d['default']['BOSS_EYE2'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x474f01['default']['ARCANA'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x16,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['ANGEL1']],
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x17,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['ANGEL2']],
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'treasure': {
                                'chances': [0x0, 0x0, 0x1e],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x18,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['ANGEL3']],
                            'bosses': [_0x41580d['default']['BOSS_EYE2']]
                        }, {
                            'minute': 0x19,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['ANGEL1'], _0x41580d['default']['ANGEL2'], _0x41580d['default']['ANGEL3']],
                            'bosses': [_0x41580d['default']['BOSS_TRINACRIA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1a,
                            'minimum': 0xfa,
                            'frequency': 0x14,
                            'enemies': [_0x41580d['default']['STAGEKILLER2']]
                        }, {
                            'minute': 0x1b,
                            'minimum': 0x96,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['TRINACRIA']],
                            'bosses': [_0x41580d['default']['BOSS_EYE2']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'prizeTypes': [_0x474f01['default']['EVOLUTION'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY'], _0x474f01['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1c,
                            'minimum': 0xa,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['BOSS_FANGEL3'], _0x41580d['default']['BOSS_SUCCUBUS'], _0x41580d['default']['BOSS_XLARMOR_GREEN'], _0x41580d['default']['BOSS_XLARCHDEMON']]
                        }, {
                            'minute': 0x1d,
                            'minimum': 0x28,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['TRAINEE_ANY']]
                        }, {
                            'minute': 0x1e,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x41580d['default']['TRAINEE_R']],
                            'bosses': [_0x41580d['default']['BOSS_XLDEATH2']],
                            'events': [{
                                'eventType': _0xad9281['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0xdb3a17['default'] = _0x4ba1a6;
            };
