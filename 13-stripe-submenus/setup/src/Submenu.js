import React, { useState } from 'react'
import {useGlobalContext} from './context';

const Submenu = () => {
  const {coord,curMenuItem,setCurMenuItem}=useGlobalContext();
  const[isHovered,setIsHovered]=useState(true);
  
  
  
  function hide(){
    setCurMenuItem(null);
    setIsHovered(false);
  }
  

  const len=curMenuItem.links.length;
  const colNumb=len>4?4:len;
  console.log(colNumb);

  return(
  <aside style={{left:`${coord.x}px`}} className={`submenu ${isHovered&&'show'} col-3`}
   onMouseLeave={hide}>
    <section>
      <h4>developers</h4>
      <div className={`submenu-center col-${colNumb}`}>
          {curMenuItem.links.map((link,i)=>
            <a key={i} 
            href={link.url}>
            {link.icon}{link.label}
            </a>)}
      </div>
    </section>
  </aside>)
}

export default Submenu
