import React, { useState, useEffect,useRef } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme, setTheme] = useState('light-theme')
  const mounted=useRef(false);

  const changeThemeHandler=()=>{
    setTheme(pr=>pr==='light-theme'?'dark-theme':'light-theme');
  }

  useEffect(()=>{
    if(!mounted.current){
      mounted.current=true;
      return;
    }
    document.documentElement.className=theme;
    if(localStorage.getItem('theme')){
      localStorage.removeItem('theme');
      localStorage.setItem('theme',theme);
    }else{
      localStorage.setItem('theme',theme);
    }
  },[theme]);

  useEffect(()=>{
    let storageTheme=localStorage.getItem('theme');
    if(storageTheme){
      setTheme(storageTheme.replaceAll('\'',''));
    }
  },[])
  

  return <main>
    <nav>
    <div className="nav-center">
      <h1>
      Overreacted
      </h1>
      <button className="btn" onClick={changeThemeHandler}>
        toggle
      </button>
    </div>
    </nav>
      <section className="articles">
        {data.map(el=><Article key={el.id} {...el}/>)}
      </section>
  </main>
}

export default App
