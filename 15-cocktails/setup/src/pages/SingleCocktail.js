import React, { useEffect,useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id}=useParams();
  const [cocktail,setCocktail]=useState(null);
  const [isLoading,setIsLoading]=useState(false);

  const fetchHandler=async()=>{
    setIsLoading(true);
    let data;
    try{
      data = await fetch(`${url}${id}`);
      data = await data.json();
      data=data.drinks[0];
      data={
        info:{name:data.strDrink,
        category:data.strCategory,
        info:data.strAlcoholic,
        glass:data.strGlass,
        ingredients:Object.entries(data)
        .flatMap(e=>{
          if(e[0].includes('strIngredient')&&e[1]){
            return e[1]
          }else{
            return []
          }
        }).join(' , '),
        instructions:data.strInstructions},
        img:data.strDrinkThumb
      }

      console.log(data);
    }catch(err){
      console.error('unable to fetch')
      setIsLoading(false);
      setCocktail(null);
      return
    }
    setCocktail(data);
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchHandler();
  },[])
  return (<>
  {isLoading&&<Loading/>}
  {!isLoading&&cocktail&&<section className='section cocktail-section'>
    <Link to='/' className='btn btn-primary'>Back home</Link>
    <h2 className="section-title">{cocktail.info.name}</h2>
    <div className="drink">
    <img src={cocktail.img} alt={cocktail.info.name} />
    <div className="drink-info">
    {Object.entries(cocktail.info).map(e=><p><span className='drink-data'>{e[0]}</span>{e[1]}</p>)}
    </div>
    </div>
  </section>}
  {!isLoading&&!cocktail&&<h2 className='section-title'>no cocktails to display</h2>}
    </>
  )
}

export default SingleCocktail
