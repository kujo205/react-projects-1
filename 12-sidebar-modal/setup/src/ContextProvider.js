import React, { useState, useContext, createContext } from 'react'


export const context=createContext({
    showNav:false,
    setShowBar:()=>{}
});



export default function ContextProvider({children}) {
  const [showNav,setShowNav]=useState(false);

  
  return (
    <context.Provider value={{showNav,setShowNav}}>
    {children}
    </context.Provider>
  )
}

