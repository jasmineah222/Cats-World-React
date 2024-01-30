import { Link, Route, Routes} from 'react-router-dom'
import './App.css'
import AllCats from './components/AllCats'
import SingleCat from './components/SingleCat'
import Compare from './components/Compare'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      
      <NavBar/>

      <Routes>
        
        <Route path='/' element={<AllCats/>}/>
        <Route path='/Compare' element={<Compare/>}/>
        <Route path='/details/:id' element={<SingleCat/>}/>
        
      </Routes>
    </>
  )
}

export default App
