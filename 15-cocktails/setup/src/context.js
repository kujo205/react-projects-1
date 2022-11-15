import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading,setIsLoading]=useState(false);
  const [cocktails,setCocktails]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  console.log(cocktails,searchTerm);
  useEffect(()=>{
    setIsLoading(true);
    (async ()=>{
      console.log('entered')
      let resp
      try {
        resp=await fetch(`${url}${searchTerm}`,{
        // headers:{
        //   'Content-Type':'application/json'
        // }
      });
      } catch (error) {
        // alert('failed to load cocktail');  
      }
      
      resp = await resp.json();
      console.log(resp);
      resp=resp.drinks?resp.drinks.map(e=>{return {
        name:e.strDrink,
        id:e.idDrink,
        glass:e.strGlass,
        alcoholic:e.strAlcoholic,
        img:e.strDrinkThumb
      }}):[];
      setCocktails(resp);
      setIsLoading(false);
    
    


      

    })()


  },[searchTerm])


  return <AppContext.Provider value={{cocktails,isLoading,setSearchTerm}}>
    {children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
