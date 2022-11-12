import React,{useContext} from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { context } from './ContextProvider';

const Sidebar = () => {
  const {showNav,setShowNav} = useContext(context);




  return  <aside className={`sidebar ${showNav?'show-sidebar':''}`}>
    <div className="sidebar-header">
      <img src={logo} alt="coding addict" className='logo' />
      <button className='close-btn' onClick={()=>setShowNav(false)}>
        <FaTimes/>
      </button>
    </div>
    <ul className="links">
      {links.map(e=>{
        const {id,url,text,icon}=e;
        return <li key={id}><a href={url}>{icon}{text}</a></li>
        
        })}
    </ul>
    <ul className="social-icons">
      {social.map(e=>{
        const {id,url,icon}=e;
        return <li key={id}><a href={url}>{icon}</a></li>
      })}
    </ul>
  </aside>
}

export default Sidebar
