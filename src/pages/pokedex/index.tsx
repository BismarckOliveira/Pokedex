import { Container, Content} from './style'
import Card from '../../components/Card'

const Pokedex: React.FC = () => {
  return (
      <Container>
          <Content>
              <h1>POKEDEX</h1>
              <Card />
          </Content>
      </Container>
  )
}
export default Pokedex