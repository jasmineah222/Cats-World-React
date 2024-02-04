import { Link, Route, Routes} from 'react-router-dom'
import './index.css'
import './App.css'
import './assets/icon.png' //just in case b/c app is top level
import AllCats from './components/AllCats'
import SingleCat from './components/SingleCat'
import Compare from './components/Compare'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="app">
      
      <NavBar/>

      <Routes>
        
        <Route path='/' element={<AllCats/>}/>
        <Route path='/Compare' element={<Compare/>}/>
        <Route path='/details/:id' element={<SingleCat/>}/>
        
      </Routes>

      <div className='name'>
        <h6>@JH Organization</h6>
      </div>

    </div>
  )
}

export default App
