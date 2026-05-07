// Module 0xe0f9
// Args: _0x5d6241, _0x971a19, _0x198b7f

export default (_0x5d6241, _0x971a19, _0x198b7f) => {
                'use strict';
                const _0x265f1d = a0_0x6932;
                var _0x2246a5 = this && this['__importDefault'] || function(_0x1189e5) {
                    return _0x1189e5 && _0x1189e5['__esModule'] ? _0x1189e5 : {
                        'default': _0x1189e5
                    };
                };
                Object['defineProperty'](_0x971a19, '__esModule', {
                    'value': !0x0
                });
                const _0x148ae6 = _0x2246a5(_0x198b7f(0x9bda)),
                    _0x436e32 = _0x2246a5(_0x198b7f(0x3fe3)),
                    _0x2c781a = _0x2246a5(_0x198b7f(0x14442)),
                    _0x16bd6f = _0x2246a5(_0x198b7f(0x2248)),
                    _0x532535 = _0x2246a5(_0x198b7f(0x1229)),
                    _0x4ce761 = _0x2246a5(_0x198b7f(0x148f5)),
                    _0x50ead9 = {
                        [_0x436e32['default']['RASH']]: [{
                            'order': 0x6e,
                            'stageName': 'Boss Rash',
                            'description': '"Distinguished guests, the moment we\'ve all be itching for is finally here! Let\'s watch the Survivors attempt this challenge of recycled assets!"',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_rash.png',
                            'texture': 'UI',
                            'frameName': 'stage_rash_icon.png',
                            'stageNumber': 'Challenge',
                            'unlocked': !0x1,
                            'hidden': !0x1,
                            'BGM': _0x4ce761['default']['BGM_BossRush'],
                            'sideBBGM': _0x4ce761['default']['BGM_BossRush_B'],
                            'tips': '',
                            'hyperTips': '',
                            'validForCharcaterData': !0x0,
                            'mods': {
                                'TimeLimit': 0x384,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.25,
                                'EnemySpeed': 1.25,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 0x1,
                                'EnemyHealthMultiplier': 1.5,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x1
                            },
                            'hyper': {
                                'unlocked': !0x1,
                                'TimeLimit': 0x384,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 0.65,
                                'EnemySpeed': 0.65,
                                'ProjectileSpeed': 0.15,
                                'GoldMultiplier': 0.5,
                                'EnemyHealthMultiplier': 0.5,
                                'LuckBonus': 0.1,
                                'XPBonus': 0x0,
                                'StartingSpawns': 0x1e
                            },
                            'inverse': {
                                'tint': 0x8888ff,
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
                                'setKey': 'RashTexturePacked',
                                'setPath': 'assets/tilesets/RashTexturePacked.png',
                                'mapKey': 'Rash',
                                'mapPath': 'assets/tilesets/Rash.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': ''
                            },
                            'randomMinutes': !0x1,
                            'dayNight': !0x0,
                            'startingSpawns': 0x1e,
                            'minute': 0x0,
                            'destructibleType': _0x2c781a['default']['BRAZIER'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 0xa,
                            'destructibleChanceMax': 0x32,
                            'maxDestructibles': 0x5,
                            'BGTextureName': 'bg_forest',
                            'tilemapTiledJSON': {
                                'name': '',
                                'path': ''
                            },
                            'tilemapTiledIMG': {
                                'name': '',
                                'path': ''
                            },
                            'tilemapPos': {
                                'x': 0x0,
                                'y': 0x0
                            },
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['BAT3']],
                            'bosses': [_0x148ae6['default']['BOSS_XLBAT'], _0x148ae6['default']['BOSS_XLMUMMY']]
                        }, {
                            'minute': 0x1,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['BAT3']],
                            'bosses': [_0x148ae6['default']['BOSS_WEREWOLF'], _0x148ae6['default']['BOSS_WEREWOLF2'], _0x148ae6['default']['BOSS_XLMANTIS'], _0x148ae6['default']['BOSS_XLFLOWER']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x532535['default']['BAT_SWARM'],
                                'delay': 0x3a98,
                                'chance': 0x46,
                                'repeat': 0x2
                            }]
                        }, {
                            'minute': 0x2,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['MUD']],
                            'bosses': [_0x148ae6['default']['BOSS_ECTO'], _0x148ae6['default']['BOSS_MUD'], _0x148ae6['default']['BOSS_BUER']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x3,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['MEDUSA1']],
                            'bosses': [_0x148ae6['default']['BOSS_XLMEDUSA'], _0x148ae6['default']['BOSS_MEDUSA1'], _0x148ae6['default']['BOSS_WITCH2'], _0x148ae6['default']['BOSS_COUNT2']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['MEDUSA1']],
                            'bosses': [_0x148ae6['default']['BOSS_COUNT1'], _0x148ae6['default']['BOSS_SUCCUBUS'], _0x148ae6['default']['BOSS_XLARCHDEMON']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x532535['default']['SKULL_SWARM'],
                                'moreX': 0x1
                            }, {
                                'eventType': _0x532535['default']['SKULL_SWARM'],
                                'delay': 0x1388,
                                'moreX': 0x2
                            }, {
                                'eventType': _0x532535['default']['SKULL_SWARM'],
                                'delay': 0x3a98,
                                'moreX': 0x4
                            }, {
                                'eventType': _0x532535['default']['SKULL_SWARM'],
                                'delay': 0x61a8,
                                'moreX': 0x8
                            }, {
                                'eventType': _0x532535['default']['SKULL_SWARM'],
                                'delay': 0x88b8,
                                'moreX': 0x10
                            }]
                        }, {
                            'minute': 0x5,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['SKELETON']],
                            'bosses': [_0x148ae6['default']['BOSS_SKULL2'], _0x148ae6['default']['BOSS_XLSKELETON'], _0x148ae6['default']['BOSS_XLDRAGON1'], _0x148ae6['default']['BOSS_XLDRAGON2']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x532535['default']['GHOST_SWARM'],
                                'delay': 0x4b0,
                                'chance': 0x46,
                                'repeat': 0x2
                            }],
                            'arcanaHolder': _0x148ae6['default']['BOSS_PILE3'],
                            'arcanaTreasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['ARCANA'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['HARPY']],
                            'bosses': [_0x148ae6['default']['BOSS_HARPY'], _0x148ae6['default']['BOSS_XLCOCKATRICE'], _0x148ae6['default']['BOSS_PANTHER'], _0x148ae6['default']['BOSS_XLCHIMERA']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x7,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['MILK']],
                            'bosses': [_0x148ae6['default']['BOSS_MIGNO2_5_L'], _0x148ae6['default']['BOSS_MERMAN'], _0x148ae6['default']['BOSS_XLTRITON'], _0x148ae6['default']['BOSS_XLCRAB_RASH'], _0x148ae6['default']['MOON_BOSS_CRABBINO']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x532535['default']['JELLY_SWARM'],
                                'duration': 0x2710,
                                'moreX': 0x32,
                                'chance': 0x50
                            }]
                        }, {
                            'minute': 0x8,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['ARMOR_SWORD']],
                            'bosses': [_0x148ae6['default']['BOSS_ARMOR1'], _0x148ae6['default']['BOSS_XLARMOR'], _0x148ae6['default']['BOSS_XLARMOR1'], _0x148ae6['default']['BOSS_XLARMOR2'], _0x148ae6['default']['BOSS_XLARMOR_GREEN']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x532535['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x148ae6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x4e20
                            }, {
                                'eventType': _0x532535['default']['DRAGON_SWARM'],
                                'moreX': 0x6,
                                'moreY': _0x148ae6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x4e20,
                                'delay': 0x7d0,
                                'chance': 0x3c,
                                'repeat': 0xa
                            }]
                        }, {
                            'minute': 0x9,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['MOON_EYE2']],
                            'bosses': [_0x148ae6['default']['MOON_BOSS_NIGHTSHADE'], _0x148ae6['default']['MOON_BOSS_GARLIC'], _0x148ae6['default']['BOSS_TRINACRIA'], _0x148ae6['default']['BOSS_EYE2']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xa,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x148ae6['default']['BOSS_ENDER_RASH']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            },
                            'arcanaHolder': _0x148ae6['default']['TRAINEE_ANY'],
                            'arcanaTreasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['ARCANA'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xb,
                            'minimum': 0x1,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['BAT3']],
                            'bosses': [_0x148ae6['default']['BOSS_STALKER_NORMAL'], _0x148ae6['default']['BOSS_DROWNER_RASH'], _0x148ae6['default']['BOSS_TRICKSTER_NORMAL'], _0x148ae6['default']['BOSS_MADDENER_NORMAL']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['BOSS_XLGOLEM1_29'], _0x148ae6['default']['BOSS_XLGOLEM2_29']],
                            'bosses': [_0x148ae6['default']['BOSS_XLGOLEM1'], _0x148ae6['default']['BOSS_XLGOLEM2']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['BAT3']],
                            'bosses': [_0x148ae6['default']['BOSS_GIANT_MIMIC1'], _0x148ae6['default']['BOSS_GIANT_MIMIC2'], _0x148ae6['default']['BOSS_GIANT_MIMIC3']]
                        }, {
                            'minute': 0xe,
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x148ae6['default']['BOSS_DRAGOGION']],
                            'bosses': [_0x148ae6['default']['BOSS_DRAGOGION']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16bd6f['default']['EVOLUTION'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY'], _0x16bd6f['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xf,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x148ae6['default']['BOSS_XLDEATH']],
                            'events': [{
                                'eventType': _0x532535['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0x971a19['default'] = _0x50ead9;
            };
