import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail}) => {
  const {name,id,glass,alcoholic,img}=cocktail;

  return (
    <article className='cocktail'>
      <div className="img-container">
          <img src={img} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link className="btn btn-primary btn-details" to={`cocktail/${id}`}>details</Link>
      </div>
    </article>
  )
}

export default Cocktail
