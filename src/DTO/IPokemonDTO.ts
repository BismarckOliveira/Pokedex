export interface IPokemon {
    id: number;
    name: string;
    abilities: {
        ability: {
            name: string,
        },
    }[]
    types:
    {
        slot: number
        type: { name: string; }
    }[]
    ,
    sprites: {
        other: {
            home: {
                front_default: string;
            }
        };
    },
    stats: {
        base_stat: number
        stat: { name: string }
    }[],
    moves: {
        move: {
            name: string,
        },
    }[]

}