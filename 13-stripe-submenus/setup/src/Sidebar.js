import React, { Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context';
import SubmenuItem from './SubmenuItem';

const Sidebar = () => {

  const {sidebarOpen,setSidebarOpen}=useGlobalContext();

  console.log(sidebarOpen)
  return (<Fragment>
  <div className={`sidebar-wrapper ${sidebarOpen&&'show'}`}>
    <aside className="sidebar">
      <button className="close-btn" onClick={()=>setSidebarOpen(false)}>
        <FaTimes/>
      </button>
      <div className="sidebar-links">
        {sublinks.map(e=><SubmenuItem item={e}/>)
        }
      </div>
    </aside>
  </div>
  </Fragment>
  )
}
export default Sidebar;
