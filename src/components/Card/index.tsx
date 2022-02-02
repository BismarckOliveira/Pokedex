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
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../service/api'
import { addCache, getData } from '../../store/requestSlice'

interface IPokemon {
    id: number;
    name: string;
    types: [
        type: { name: string; }
    ]
    sprites: {
        other: {
            home: {
                front_default: string;
            }
        };
    }
}
interface ICard extends Omit<IPokemon, 'sprites'> {
    sprite: string
}

interface ICardProps {
    name: string
}

const Card: React.FC<ICardProps> = ({ name }) => {
    const dispatch = useDispatch()

    const storePokemon = useSelector(getData(`/pokemon/${name}`)) as ICard

    const pokemon = useMemo(() => {
        if (!storePokemon) return {} as IPokemon
        return storePokemon
    }, [storePokemon]) as IPokemon

    useEffect(() => {
        api.get<IPokemon>(`/pokemon/${name}`)
            .then(response => {
                console.log('response', response)

                dispatch(addCache({
                    endpoint: `/pokemon/${name}`,
                    data: response.data
                }))
            })

    }, [dispatch, name])

    return (
        <Container>
            <Content>
                <Info>
                    <Name>{pokemon.name}</Name>
                    <TypesContainer>
                        {pokemon.types.map(t => (
                            <Type src={t.name} />
                        ))}
                    </TypesContainer>
                </Info>
                <PokemonImageContainer>
                    <PokemonImage src={pokemon.sprites.other.home.front_default} />
                </PokemonImageContainer>
                <PokedexNumber>
                    {pokemon.id}
                </PokedexNumber>
            </Content>
        </Container>
    )
}

export default Card