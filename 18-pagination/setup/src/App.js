import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'


function App() {
  const [page,setPage] = useState(1);
  const{loading,data}=useFetch();
  
  function prevPageHandler(){
    setPage((pr)=>(pr-1)%data.length===0?data.length:(pr-1)%data.length)
  }
  function nextPageHandler(){
    setPage((pr)=>(pr+1)%data.length===0?data.length:(pr+1)%data.length)
  }



  return <main>
    <div className="section-title">
        <h1>{loading?'loading...':'pagination'}</h1>
        <div className="underline"></div>
    </div>
    {!loading&&
    <section className="followers">
      <div className="container">
        {data[page-1].map(e=><Follower
         key={e.login}
         {...e}

         />)} 
      </div>
      <div className="btn-container">
        <button className="prev-btn"
        onClick={prevPageHandler}
        >prev</button>
        {data.map((e,i)=><button 
        className={`page-btn ${(i+1)===page?'active-btn':null}`}
        key={i}
        onClick={()=>setPage(i+1)}
        >{i+1}</button>)}
        
        <button className="next-btn"
        onClick={nextPageHandler}
        >next</button>
      </div>
    </section>}
  </main>
}

export default App
