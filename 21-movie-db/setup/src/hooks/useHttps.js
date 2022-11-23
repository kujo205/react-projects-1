import React,{useEffect,useReducer,useRef, useState} from "react"


const httpsReducer=(state,action)=>{ 
    
        switch(action.type){
            case 'FETCH':
            return{loading:true,data:state.data,mistake:null}
            case 'RECIEVED':
            return{loading:false,data:action.data,mistake:null}
            case 'MISTAKE':
            return {loading:false,data:state.data,mistake:action.mistake}
            case 'CLEAR':
            if(state.data.Actors)return {loading:false,data:null,mistake:null}
            else{return {loading:false,data:state.data,mistake:null}}
            
        }

        
        
}

export default function useHttps(url){
    const [state,httpsDispatch]=useReducer(httpsReducer,{loading:false,data:null,mistake:null});
    
    
    
    const sendRequest=(params,id,method='GET')=>{
        const fetchUrl=id?`${url}&i=${id}`:params?`${url}&s=${params}`:url
        
        httpsDispatch({type:'FETCH'})
        fetch(fetchUrl,{
            method
        }).then(data=>data.json())
        .then(data=>{
            if(data.Response==='False'){
                httpsDispatch({type:'MISTAKE',mistake:data.Error})
            }
            else{
                httpsDispatch({data,type:'RECIEVED'})
                if(params){
                    httpsDispatch({type:'CLEAR'});
                    console.log(id,params)
                
                }
            
            }})
        .catch(m=>httpsDispatch({type:'MISTAKE',mistake:'something went wrong...'}))
        
    }

    
    
    





    return {state,sendRequest};
}