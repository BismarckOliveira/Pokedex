import { Container, CardsContainer } from './style'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCache, getData } from '../../store/requestSlice'
import api from '../../service/api'

interface IResquest {
    results: [{ name: string }]
}

interface IPokemon {
    name: string
}

const Pokedex: React.FC = () => {

    const dispatch = useDispatch()

    const pokemonsList = useSelector(getData('/pokemon')) as IPokemon[]
    console.log('pokemonsList', pokemonsList)

    const pokemons = useMemo(() => {
        if (!pokemonsList) return []

        return pokemonsList

    }, [pokemonsList]) as IPokemon[]

    useEffect(() => {
        api.get<IResquest>('pokemon/', {
            params: {
                limit: 2000
            }
        })
            .then((response) => {
                const { results } = response.data
                const PokemonNames = results.reduce((acc, crr) => {
                    acc.push(crr)

                    return acc
                }, [] as IPokemon[])

                dispatch(addCache({
                    endpoint: 'pokemon/',
                    data: PokemonNames
                }))
            }
            )
            .catch((error) => console.error(error));

    }, [dispatch])


    return (
        <Container>
            <SearchBar />
            <CardsContainer>
                {pokemons.map(pokemon => (
                    <Card
                        name={pokemon.name}
                        key={pokemon.name}
                    />
                ))}
            </CardsContainer>
        </Container>
    )
}
export default Pokedex