import {
    Container,
    Content,
    Info,
    Name,
    TypesContainer,
    Type,
    PokemonImage,
    PokedexNumber,
    PokemonImageContainer
} from './styles'
import { useEffect, useMemo, useState } from 'react'
import api from '../../service/api'
import { spritesTypesTheme } from '../../utils/spritesTypeTheme'
interface IPokemon {
    id: number;
    name: string;
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
    }
}
interface ICardProps {
    name: string
}

const Card: React.FC<ICardProps> = ({ name }) => {
    const [pokemonInfo, setPokemonInfo] = useState<IPokemon>()

    const pokemon = useMemo(() => {
        if (!pokemonInfo) return null
        return pokemonInfo
    }, [pokemonInfo]) as IPokemon

    useEffect(() => {
        api.get<IPokemon>(`/pokemon/${name}`)
            .then(response => {
                setPokemonInfo(response.data)
            })

    }, [name])

    if (!pokemonInfo) {
        return <h1>no data</h1>
    }
    return (
        <Container type={pokemon.types[0].type.name}>
            <Content>
                <Info>
                    <Name>{pokemon.name.toLocaleUpperCase()}</Name>
                    <TypesContainer>
                        {pokemon.types.map(t => (
                            <Type key={t.slot} src={spritesTypesTheme(t.type.name)} />
                        ))}
                    </TypesContainer>
                </Info>
                <PokemonImageContainer>
                    <PokemonImage src={pokemon.sprites.other.home.front_default} />
                </PokemonImageContainer>
                <PokedexNumber>
                    #{pokemon.id}
                </PokedexNumber>
            </Content>
        </Container>
    )
}

export default Card