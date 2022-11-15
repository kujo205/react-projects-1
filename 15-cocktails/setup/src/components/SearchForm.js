import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext();
  const inp=useRef();
  const changeHandler=(e)=>{
    setSearchTerm(inp.current.value.trim());
  }

  useEffect(()=>{
   inp.current.focus(); 
  })

  return (
    <section className='section search'>
    <form className='search-form'>
      <div className='form-control'>
        <label htmlFor="cocktail">Search Your Favorite Cocktail</label>
        <input type='text' ref={inp} id='cocktail' onChange={changeHandler}></input>
      </div>
    </form>
    </section>
  )
}

export default SearchForm
