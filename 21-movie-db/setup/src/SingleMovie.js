import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import { useGlobalContext } from './context'

const SingleMovie = () => {
  const {state,sendRequest}=useGlobalContext();
  const id=useParams().id;
  
  
  useEffect(()=>{
    sendRequest(null,id);
  },[])


  console.log(state);
  return <>
  
{!state.loading&&state.data&&
<section className="single-movie">
    <img src={state.data.Poster} alt="" />
    <div className="single-movie-info">
      <h2>{state.data.Title}</h2>
      <p>{state.data.Plot}</p>
      <h4>{state.data.Year}</h4>
      <Link className='btn' to='/'>Back to movies</Link>
    </div>
  </section>}
  {state.loading&&<div className="loading"></div>

  }
  </>
}

export default SingleMovie
