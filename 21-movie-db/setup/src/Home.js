import React, { useContext,useState,useEffect } from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import{useGlobalContext} from './context'

const Home = () => {

  const{state,sendRequest}=useGlobalContext();

  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    if(state.data&&state.data.Search)setMovies(state.data.Search);
  },[state])

  return <main>
    <Form/>
    
    <Movies movies={movies}/>
    
  </main>
}

export default Home
