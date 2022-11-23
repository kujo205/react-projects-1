import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'
import NoPage from './NoPage'


function App() {
  return <Routes>
      <Route index element={<Home/>}></Route>      
      <Route path='/movies/:id' element={<Movie/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>


    </Routes>
}

export default App
