import React,{useReducer} from "react";
import { useGlobalContext } from "./context";

function reducerFunc(state,{type,id}){
    let data=[...state];
    const cartItemNum=data.findIndex(e=>e.id===id);
    let cartItem=data[cartItemNum];
    switch(type){
        case 'INCREMENT':{
            cartItem.amount++;
        }
        break;
        case 'DECREMENT':{
            if(cartItem.amount===1)cartItem=null;
            else{
                cartItem.amount--;
            }
        }
        break;
        case 'REMOVAL':{
            cartItem=null;

        }
        break;
        case 'CLEAR':{
            return [];

        }
        break;
    
    }

    if(cartItem)data.splice(cartItemNum,1,cartItem);
    else data.splice(cartItemNum,1);
    console.log(data);
    return data;

}

const useCustomReducer=(cart)=>{
   
    const [cartState, dispatchCart] = useReducer(reducerFunc, cart);
    return {dispatchCart,cartState};
}

export default useCustomReducer;