import React, { useState, useContext } from 'react'




const AppContext=React.createContext({
    sidebarOpen:true,
    setSidebarOpen:()=>{},
    submenuOpen:false,
    setSubmenuOpen:()=>{},
    coord:{x:0},
    setCoord:()=>{},
    curMenuItem:null,
    setCurMenuItem:()=>{}

}) 
const AppContextProvider=({children})=>{
    const [sidebarOpen,setSidebarOpen]=useState(true);
    const [submenuOpen,setSubmenuOpen]=useState(false);
    const [coord,setCoord]=useState({x:0})
    const [curMenuItem,setCurMenuItem]=useState(null);
    return (
        <AppContext.Provider value={{sidebarOpen,setSidebarOpen,submenuOpen,setSubmenuOpen,coord,setCoord,curMenuItem,setCurMenuItem}}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext=()=>useContext(AppContext);

export {
    useGlobalContext,
    AppContextProvider,
}
