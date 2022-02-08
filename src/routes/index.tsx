import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pokedex from '../pages/pokedex'
import PokemonStatus from '../components/PokemonStatus'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/status/:name' element={<PokemonStatus />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router