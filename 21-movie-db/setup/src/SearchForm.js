import React,{useEffect, useState} from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const [input,setInput]=useState('batman');

  const {state,sendRequest}=useGlobalContext();

  useEffect(()=>{
    sendRequest(input,null);   
  },[input])
  
  
  const {mistake}=state;

  return <form className="search-form">
    <h2>Search Movies</h2>
    <input type="text" className='form-input' value={input} onChange={(e)=>setInput(e.target.value)}/>
    {mistake && <div className='error'>{mistake}</div>}
  </form>
}

export default SearchForm
