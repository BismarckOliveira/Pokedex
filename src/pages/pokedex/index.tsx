import { Container, CardsContainer } from './style'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import { useEffect, useMemo, useState } from 'react'
import api from '../../service/api'

interface IResquest {
    results: [{ name: string }]
}

interface IPokemon {
    name: string
}

const Pokedex: React.FC = () => {
    const NUMBER_POKEMONS = 1
    const [pokemons, setPokemons] = useState<IPokemon[]>(() => {
        const loadPokemons = localStorage.getItem('@Pokemons')

        if (loadPokemons && loadPokemons.length) {
            return JSON.parse(loadPokemons)
        }
        return []
    })

    const pokemonsInMemory = useMemo(() => {
        if (!pokemons) return null

        return pokemons

    }, [pokemons]) as IPokemon[]

    useEffect(() => {
        api.get<IResquest>('pokemon/', {
            params: {
                limit: NUMBER_POKEMONS
            }
        })
            .then((response) => {
                const { results } = response.data

                setPokemons(results)
                localStorage.setItem('@Pokemons', JSON.stringify(results))
            }
            )
            .catch((error) => console.error(error));

    }, [])


    return (
        <Container>
            <SearchBar />
            <CardsContainer>
                {pokemonsInMemory.map(pokemon => (
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