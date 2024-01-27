import { useState } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import './App.css'
import AllCats from './components/AllCats'

function App() {

  return (
    <>
      
      <Routes>
        
        <Route path='/' element={<AllCats/>}/>
      
      </Routes>
    </>
  )
}

export default App
