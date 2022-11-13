import React,{useRef} from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data';
import {useGlobalContext} from './context';


function NavItem({e}) {
  const item=useRef();
  const{setCoord,setCurMenuItem}=useGlobalContext();

  function hoverHandler(){

    const dimen=item.current.getBoundingClientRect();
    const x=dimen.x+dimen.width/2;

    setCurMenuItem(e);
    setCoord({x});

}
  return (
    <li ref={item}
    onMouseOver={hoverHandler}>
        <button className="link-btn">{e.page}</button>
      </li>
  )
}


const Navbar = () => {
  const {setSidebarOpen}=useGlobalContext();

  return( <nav className="nav">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt=""/>
          <button className="btn toggle-btn" onClick={()=>{setSidebarOpen(true);
            }}>
            <FaBars/>
          </button>
      </div>
    <ul className="nav-links">
      {sublinks.map((e,i)=><NavItem e={e} key={i}/>
      
      )}
    </ul>
      <button className="btn signin-btn">Sign in</button></div>
        </nav>)
}

export default Navbar
