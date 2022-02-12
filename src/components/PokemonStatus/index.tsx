
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPokemon } from '../../DTO/IPokemonDTO'
import api from '../../service/api'
import { spritesTypesTheme } from '../../utils/spritesTypeTheme'
import RadarChart from '../RadarChart/RadarChart'
import {
    Container,
    PokemonSpriteContainer,
    PokemonSprite,
    StatusContainer,
    Type,
    SumaryHeader,
    TableNature,
    TableSkills,
    SectionSprite,
    SectionDescription
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
        <>
            <SumaryHeader>
                <h1>{pokemonStats.name}</h1>
            </SumaryHeader>
            <Container>
                <StatusContainer>
                    <RadarChart stats={pokemonStats.stats} />
                    <TableNature>
                        <tbody>
                            <tr>
                                <td>Nature</td>
                                <td>Hardy</td>
                            </tr>
                            <tr>
                                <td>Ability</td>
                                <td>{pokemonStats.abilities[0].ability.name}</td>
                            </tr>
                            <tr>
                                <td>Held Item</td>
                                <td>None</td>
                            </tr>
                        </tbody>
                    </TableNature>
                </StatusContainer>
                <PokemonSpriteContainer>
                    <SectionSprite>
                        <TableSkills>
                            <thead>
                                <tr>
                                    <th>
                                        <td>#{pokemonStats.id}</td>
                                        <td>{pokemonStats.name}</td>
                                        <td> {pokemonStats.types.map(t => (
                                            <Type key={t.slot} src={spritesTypesTheme(t.type.name)} />
                                        ))}</td>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemonStats.moves.map(m => (
                                    <tr>
                                        <td>{m.move.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </TableSkills>
                        <PokemonSprite src={pokemonStats.sprites.other.home.front_default} />
                    </SectionSprite>
                    <SectionDescription>
                        <table>
                            <thead>
                                <th>
                                    <td>Description</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pokemon orignal da região de palete</td>
                                </tr>
                            </tbody>
                        </table>
                    </SectionDescription>
                </PokemonSpriteContainer>
            </Container>
        </>
    )
}

export default PokemonStatus