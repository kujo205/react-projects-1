import React, { Fragment, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {context} from './ContextProvider'

const Home = () => {
  const {showNav,setShowNav,setShowModal} = useContext(context);
  return (
  <Fragment>

    <main>
    <button onClick={()=>setShowNav(true)} className="sidebar-toggle"><FaBars/></button>
    <button className="btn" onClick={()=>setShowModal(true)}>Show modal</button>
  </main>
  
  
  </Fragment>)
}

export default Home
