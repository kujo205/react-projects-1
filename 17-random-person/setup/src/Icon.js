import React,{Fragment} from 'react'

export default function Icon({e,setCurItem}) {
    const{icon}=e;
  
  return (
    <Fragment>
       <button className='icon' onMouseEnter={()=>setCurItem(e)}>{icon()}</button> 
    </Fragment>
  )
}
