
class Dungeon {
    enemys = {}
    constructor(levl) {
        this.level = levl
        enemy = [this.scale(this.statScale(100, 4), this.statScale(20, 2), this.statScale(10, 2)),
            this.scale(this.statScale(100, 6), this.statScale(30, 3), this.statScale(5, 3)),
            this.scale(this.statScale(200, 6), this.statScale(50, 4), this.statScale(15, 4)),
            this.scale(this.statScale(250, 8), this.statScale(100, 5), this.statScale(30, 5))]
        boss = [this.scale(this.statScale(1000, 12), this.statScale(100, 8), this.statScale(100, 5)),
           this.scale(this.statScale(1500, 15), this.statScale(200, 9), this.statScale(150, 6)),
           this.scale(this.statScale(2100, 20), this.statScale(300, 13), this.statScale(500, 8))]
        this.enemies = {
            "Flame": {
                'Flame Goblin': enemy[0],
                'Flame Thrower': enemy[1],
                'Fire Bear': enemy[2],
                'Flame Follower': enemy[3]
            },
            'Ice': {
                'Frozen Goblin': enemy[0],
                'Icicle Thrower': enemy[1],
                'Frozen Wolf': enemy[2],
                'Ice Follower': enemy[3]
            },
            'Lightning': {
                'Electric Goblin': enemy[0],
                'Lightning Bolt Thrower': enemy[1],
                'Thunderstruck Serpent': enemy[2],
                'Lightning Follower': enemy[3]
            },
            'Terra': {
                'Terra Goblin': enemy[0],
                'Rock Thrower': enemy[1],
                'Earthen Boar': enemy[2],
                'Terra Follower': enemy[3]
            },
            'Light': {
                'Light Goblin': enemy[0],
                'Ray Thrower': enemy[1],
                'Illuminated Falcon': enemy[2],
                'Light Follower': enemy[3]
            },
            'Dark': {
                'Dark Goblin': enemy[0],
                'Darkness Thrower': enemy[1],
                'Shadowed Tiger': enemy[2],
                'Dark Follower': enemy[3]
            }
        }
        this.bosses = {
            'Flame': {
                'Blazing Berserker': boss[0],
                'Fire Dragon': boss[1],
                'Flaming Emperor': boss[2]
            },
            'Ice': {
                'Frozen Warrior': boss[0],
                'Ice Griffin': boss[1],
                'Freezing Emperor': boss[2]
            },
            'Lightning': {
                'Thundering Knight': boss[0],
                'Electric Demon': boss[1],
                'Lightning Emperor': boss[2]
            },
            'Terra': {
                'Earthquaking Goliath': boss[0],
                'Wrath of Nature': boss[1],
                'Terra Emperor': boss[2]
            },
            'Light': {
                'Blinding Behemoth': boss[0],
                'Revenge of Light': boss[1],
                'Light Emperor': boss[2]
            },
            'Dark': {
                'Consuming Reaper': boss[0],
                'Void Breaker': boss[1],
                'Dark Emperor': boss[2]
            },
            'Special': {
                'Retlaw, Destroyer of All Life': self.scale(500_000, 500_000, 500_000)
            }
        }
        
    }
    scale(hp,dmg,blk) {
        return {'hp': hp, 'dmg': dmg, 'blk': blk}
    }
    statScale(stat,scalar) {
        return stat+Math.floor(scalar * this.level**2)
    }

}