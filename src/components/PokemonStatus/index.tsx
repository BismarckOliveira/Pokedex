
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPokemon } from '../../DTO/IPokemonDTO'
import api from '../../service/api'
import RadarChart from '../RadarChart/RadarChart'
import {
    Container,
    PokemonSpriteContainer,
    PokemonSprite,
    StatusContainer
} from './styles'

const PokemonStatus: React.FC = () => {
    const [pokemonStats, setPokemonStats] = useState<IPokemon>()
    let params = useParams()

    useEffect(() => {
        api.get<IPokemon>(`/pokemon/${params.name}`)
            .then(response => {
                setPokemonStats(response.data)
            })
    }, [params])

    if (!pokemonStats) {
        return <h1>nodata</h1>
    }

    return (
        <Container>
            <PokemonSpriteContainer>
                <PokemonSprite src={pokemonStats.sprites.other.home.front_default} />
            </PokemonSpriteContainer>
            <StatusContainer>
                <RadarChart stats={pokemonStats.stats} />
            </StatusContainer>
        </Container>
    )
}

export default PokemonStatus