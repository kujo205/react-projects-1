import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = ({movies}) => {
  const{state,sendRequest}=useGlobalContext();


  return<>
    {state.loading&&<div className='loading'></div>}
    {!state.loading&&state.data&&<section className="movies">
      {movies&&movies.map(e=>
      
      <Link to={`/movies/${e.imdbID}`}
       className="movie" 
       key={e.imdbID}>
      
        <article>
          <img src={e.Poster==='N/A'?url:e.Poster}  alt={e.Title}/>
          <div className="movie-info">
            <h4 className="title">
            {e.Title}
            </h4>
            <p>
            {e.Year}
            </p>
          </div>
        </article>
      </Link>
      
      
      
      
      )}
    </section>}

    
  
  </> 
}

export default Movies
