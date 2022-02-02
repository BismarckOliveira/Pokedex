import { Container, Search, Image } from './styles'
import pokeballSprite from '../../assets/pokeballSprite.png'

const SearchBar: React.FC = () => {
    return (
        <Container>
            <Search>
                <input type="text" />
                <button><Image src={pokeballSprite} alt='Pesquisa' /></button>
            </Search>
        </Container>
    )
}

export default SearchBar