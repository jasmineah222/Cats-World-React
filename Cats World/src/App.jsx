import { useState } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import './App.css'
import AllCats from './components/AllCats'
import SingleCat from './components/SingleCat'

function App() {

  return (
    <>
      
      <Routes>
        
        <Route path='/' element={<AllCats/>}/>
        <Route path='/details/:id' element={<SingleCat/>}/>
        
      </Routes>
    </>
  )
}

export default App
