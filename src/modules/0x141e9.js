// Module 0x141e9
// Args: _0x1d4740, _0x5a1be6, _0x141a9a

export default (_0x1d4740, _0x5a1be6, _0x141a9a) => {
                'use strict';
                const _0x288afa = a0_0x6932;
                var _0x294cad = this && this['__importDefault'] || function(_0x3a5713) {
                    const _0x176c53 = a0_0x6932;
                    return _0x3a5713 && _0x3a5713['__esModule'] ? _0x3a5713 : {
                        'default': _0x3a5713
                    };
                };
                Object['defineProperty'](_0x5a1be6, '__esModule', {
                    'value': !0x0
                });
                const _0x5a2ce2 = _0x294cad(_0x141a9a(0x9bda)),
                    _0x5dcfd1 = _0x294cad(_0x141a9a(0x3fe3)),
                    _0x406a51 = _0x294cad(_0x141a9a(0x14442)),
                    _0x93d421 = _0x294cad(_0x141a9a(0x2248)),
                    _0x5a522c = _0x294cad(_0x141a9a(0x1545b)),
                    _0x137475 = _0x294cad(_0x141a9a(0x1229)),
                    _0x5bf936 = _0x294cad(_0x141a9a(0x148f5)),
                    _0x28316c = _0x294cad(_0x141a9a(0xc42e)),
                    _0x39a31f = {
                        [_0x5dcfd1['default']['SINKING']]: [{
                            'order': 0x46,
                            'stageName': 'Moongolow',
                            'description': 'When the moon is red and bright, the remnants of a town swallowed by the sea come back to the surface, bringing mysteries and riches.',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_water.png',
                            'frameName': 'stage_water_unlock.png',
                            'frameNameUnlock': 'stage_x_unlock.png',
                            'bestiaryBG': 'background_water.png',
                            'unlocked': !0x1,
                            'hidden': !0x1,
                            'BGM': _0x5bf936['default']['BGM_Water'],
                            'sideBBGM': _0x5bf936['default']['BGM_Water_B'],
                            'tips': 'Extra stage items',
                            'hyperTips': '50% Gold Bonus\n20% Luck bonus\nEnemies Health +60%',
                            'relics': [_0x28316c['default']['RELIC_GLASSMASK']],
                            'yellowRelics': [],
                            'validForCharcaterData': !0x0,
                            'zoom': 0.05,
                            'mods': {
                                'TimeLimit': 0x384,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.35,
                                'EnemySpeed': 1.35,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 0x1,
                                'EnemyHealthMultiplier': 0x1,
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
                                'LuckBonus': 0.2,
                                'XPBonus': 0x0,
                                'EnemyHealthMultiplier': 0.6,
                                'StartingSpawns': 0x1
                            },
                            'inverse': {
                                'tint': 0xff6666,
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
                                'setKey': 'WaterTexturePacked',
                                'setPath': 'assets/tilesets/WaterTexturePacked.png',
                                'mapKey': 'Water',
                                'mapPath': 'assets/tilesets/Water.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': 'backgroundW',
                                'movingBackground': !0x0
                            },
                            'stageNumber': 'Bonus',
                            'dayNight': !0x0,
                            'spawnType': _0x5a522c['default']['STANDARD'],
                            'startingSpawns': 0x32,
                            'minute': 0x0,
                            'destructibleType': _0x406a51['default']['BRAZIER2'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 0x1e,
                            'destructibleChanceMax': 0x3c,
                            'maxDestructibles': 0xa,
                            'BGTextureName': 'bg_water',
                            'minimum': 0x32,
                            'frequency': 0xbb8,
                            'enemies': [_0x5a2ce2['default']['MOON_JELLYFISH']],
                            'bosses': []
                        }, {
                            'minute': 0x1,
                            'minimum': 0x50,
                            'frequency': 0xbb8,
                            'enemies': [_0x5a2ce2['default']['MOON_MEDUSA1']]
                        }, {
                            'minute': 0x2,
                            'minimum': 0x5a,
                            'frequency': 0xfa0,
                            'enemies': [_0x5a2ce2['default']['MOON_SNEK']]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x78,
                            'frequency': 0xfa0,
                            'enemies': [_0x5a2ce2['default']['MOON_MEDUSA1']],
                            'bosses': [_0x5a2ce2['default']['MOON_BOSS_CRABBINO']],
                            'treasure': {
                                'chances': [0.1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x78,
                            'frequency': 0xfa0,
                            'enemies': [_0x5a2ce2['default']['MOON_JELLYFISH'], _0x5a2ce2['default']['MOON_MEDUSA1']]
                        }, {
                            'minute': 0x5,
                            'minimum': 0x78,
                            'frequency': 0xfa0,
                            'enemies': [_0x5a2ce2['default']['MOON_SNEK']],
                            'bosses': [_0x5a2ce2['default']['MOON_BOSS_CRABBINO']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['EXISTING_WEAPON'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x50,
                            'frequency': 0x7d0,
                            'enemies': [_0x5a2ce2['default']['MOON_GHOST']]
                        }, {
                            'minute': 0x7,
                            'minimum': 0x50,
                            'frequency': 0x7d0,
                            'enemies': [_0x5a2ce2['default']['MOON_GHOST'], _0x5a2ce2['default']['MOON_SHADEBLUE']]
                        }, {
                            'minute': 0x8,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x5a2ce2['default']['MOON_FISHMAN']],
                            'bosses': [_0x5a2ce2['default']['MOON_BOSS_CRABBINO']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x2,
                                'prizeTypes': [_0x93d421['default']['EXISTING_WEAPON'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x9,
                            'minimum': 0xc8,
                            'frequency': 0x1f4,
                            'enemies': [_0x5a2ce2['default']['MOON_SNEK_GREEN']]
                        }, {
                            'minute': 0xa,
                            'minimum': 0x78,
                            'frequency': 0x1f4,
                            'enemies': [_0x5a2ce2['default']['MOON_CRABBINO']],
                            'bosses': [_0x5a2ce2['default']['MOON_BOSS_CRABBINO']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['EVOLUTION'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_WEAPON'], _0x93d421['default']['EXISTING_WEAPON']]
                            }
                        }, {
                            'minute': 0xb,
                            'minimum': 0x78,
                            'frequency': 0x7d0,
                            'enemies': [_0x5a2ce2['default']['MOON_NIGHTSHADE'], _0x5a2ce2['default']['MOON_GARLIC']],
                            'bosses': [_0x5a2ce2['default']['MOON_BOSS_NIGHTSHADE']],
                            'treasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['EVOLUTION'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_WEAPON'], _0x93d421['default']['EXISTING_WEAPON']]
                            },
                            'arcanaHolder': _0x5a2ce2['default']['MOON_BOSS_GARLIC'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['ARCANA'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY'], _0x93d421['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0xc8,
                            'frequency': 0x3e8,
                            'enemies': [_0x5a2ce2['default']['MOON_EYE1']],
                            'bosses': [_0x5a2ce2['default']['MOON_EYE2'], _0x5a2ce2['default']['MOON_EYE2']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0x78,
                            'frequency': 0x1f4,
                            'enemies': [_0x5a2ce2['default']['MOON_EYE2'], _0x5a2ce2['default']['MOON_EYE1']],
                            'bosses': [_0x5a2ce2['default']['MOON_EYE3'], _0x5a2ce2['default']['MOON_EYE3']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION'], _0x93d421['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0xe,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x5a2ce2['default']['MOON_SNEK_RED']]
                        }, {
                            'minute': 0xf,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x5a2ce2['default']['BOSS_XLDEATH']],
                            'events': [{
                                'eventType': _0x137475['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0x5a1be6['default'] = _0x39a31f;
            };
