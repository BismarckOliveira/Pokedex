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
import Chimchar from '../../assets/chimchar.png'
import fire from '../../assets/fire.png'

const Card: React.FC = () => {
  return (
     <Container>
         <Content>
             <Info>
                 <Name>Chimchar</Name>
                 <TypesContainer>
                    <Type src={fire}/>
                    <Type src={fire}/>
                 </TypesContainer>
             </Info>
             <PokemonImageContainer>
             <PokemonImage src={Chimchar}/>
             </PokemonImageContainer>
             <PokedexNumber>
                 #350
             </PokedexNumber>
         </Content>
     </Container>
  )
}

export default Card