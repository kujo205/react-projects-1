import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import {useGlobalContext} from './context'
function App() {
  const {curMenuItem}=useGlobalContext();

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      {curMenuItem&&<Submenu/>}
    </>
  )
}

export default App
