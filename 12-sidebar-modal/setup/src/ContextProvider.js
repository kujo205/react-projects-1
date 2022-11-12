import React, { useState, useContext, createContext } from 'react'


export const context=createContext({
    showNav:false,
    setShowBar:()=>{},
    showModal:false,
    setShowModal:()=>{},
});



export default function ContextProvider({children}) {
  const [showNav,setShowNav]=useState(false);
  const [showModal,setShowModal]=useState(false);

  
  return (
    <context.Provider value={{showNav,setShowNav,showModal,setShowModal}}>
    {children}
    </context.Provider>
  )
}

