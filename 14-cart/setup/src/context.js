import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import useCustomReducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  const {dispatchCart,cartState}=useCustomReducer(cart);

  useEffect(()=>{
    setCart(cartState);
  },[cartState]);

  console.log(cart);
  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        dispatchCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }
