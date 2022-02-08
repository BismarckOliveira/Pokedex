import {
    Container,
    Content,
    Info,
    Name,
    TypesContainer,
    Type,
    PokemonImage,
    PokedexNumber,
    PokemonImageContainer,
    Button
} from './styles'
import { useEffect, useMemo, useState } from 'react'
import api from '../../service/api'
import { spritesTypesTheme } from '../../utils/spritesTypeTheme'
import { useNavigate } from 'react-router-dom'
import { IPokemon } from '../../DTO/IPokemonDTO'

interface ICardProps {
    name: string
}

const Card: React.FC<ICardProps> = ({ name }) => {
    const [pokemonInfo, setPokemonInfo] = useState<IPokemon>()
    let navigate = useNavigate();

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
                    <Button onClick={() => navigate(`/status/${pokemon.name}`)}>
                        <PokemonImage src={pokemon.sprites.other.home.front_default} />
                    </Button>
                </PokemonImageContainer>
                <PokedexNumber>
                    #{pokemon.id}
                </PokedexNumber>
            </Content>
        </Container>
    )
}

export default Card