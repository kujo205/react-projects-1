import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  return (<Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
