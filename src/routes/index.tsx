import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Pokedex from '../pages/pokedex'

const Router: React.FC = () => {
 return (
   <BrowserRouter>
    <Routes>
         <Route path='/pokedex' element={<Pokedex/>}/>
    </Routes>
   </BrowserRouter>
 )
}

export default Router