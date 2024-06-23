
import { Route, Routes } from 'react-router-dom'
import GamePage from './GamePage'
import GameRoom from './GameRoom'



const GamesRoutes = () => {
  return (
   <Routes>
    <Route path='' element={<GamePage/>}/>
    <Route path=':id/*' element={<GameRoom/>}/>
   </Routes>
  )
}

export default GamesRoutes