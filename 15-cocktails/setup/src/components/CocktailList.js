import React, { Fragment } from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  
  const {cocktails,isLoading}=useGlobalContext();
  

  return (

    <section className='section'>
      {!isLoading&&cocktails.length!==0&&<Fragment><h2 className='section-title'>
        cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail=><Cocktail key={cocktail.id} cocktail={cocktail}/>)}
      </div></Fragment>}
      {!isLoading&&cocktails.length==0&&
      <h2 className='section-title'>No Cocktails Matched Your Search Criteria</h2>}
      {isLoading&&<Loading/>}
    </section>
  )
}

export default CocktailList
