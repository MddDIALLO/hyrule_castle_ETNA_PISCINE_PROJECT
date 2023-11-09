export interface Classe {
    id: number,
    name: string,
    strengths: number[],
    weaknesses: number[],
    attack_type: string,
    alignment: string,
    rarity: number
}

export interface Player {
    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number
}

export interface Race  {
    id: number,
    name: string,
    strength: number[],
    weakness: number[],
    rarity: number
}

export interface Spell {
    id: number,
    name: string,
    cost: number,
    dmg: number,
    effect: string,
    cooldown: number,
    race: number
    class: number,
    rarity: number
}

export interface Trap { 
    id: number, 
    name: string, 
    requirement: string, 
    rarity: number 
}