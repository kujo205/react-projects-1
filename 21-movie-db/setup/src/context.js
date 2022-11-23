import React, { useState, useContext, useEffect, } from 'react'
import useHttps from './hooks/useHttps' 

// make sure to use https

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext({
  state:{
    loading:true,
    data:null,
    mistake:false
  }
})





const AppProvider = ({ children }) => {
  
  const {state,sendRequest}=useHttps(API_ENDPOINT);



  return <AppContext.Provider value={{state,sendRequest}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
