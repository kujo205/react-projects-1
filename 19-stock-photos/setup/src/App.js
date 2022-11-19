import React, { useState, useEffect,useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query,setQuery]=useState('');
  const mounted = useRef(false);
  const [page,setPage]=useState(1);
  const [newImages, setNewImages] = useState(false);
console.log(photos)
  

  const eventf=()=>{
    const event=(window.scrollY+window.innerHeight+2)>document.body.scrollHeight; 
    if(event)setNewImages(true); 
  }

  useEffect(()=>{
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if(!newImages||loading)return;

    setPage(pr=>pr+1);

  },[newImages]);

  const fetchHandlder = async function () {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    console.log(url);

    try {
      let resp = await fetch(url);
      resp = await resp.json();
      resp=query?resp.results:resp;
      resp=resp.map(e =>
        { return { 
          id: e.id,
          likes: e.likes,
          img: e.urls.regular,
          authorName:(`${e.user.first_name} ${e.user.last_name?e.user.last_name:''}`).trim(),
          authorImg:e.user.profile_image.medium,
          authorUrl:e.user.links.html
        } })
        setPhotos(pr=>{
          if (query && page === 1) {
            return resp;
          } else if(newImages){
            return [...pr, ...resp];
          }else return resp
        });
        setLoading(false);
        setNewImages(false);

    } catch (mis) {
      console.error(mis);
    }

  }

  useEffect(()=>{
    window.addEventListener('scroll',eventf);
    
  },[])

  useEffect(() => {
    fetchHandlder();
  }, [page])

  const submitHandler=(e)=>{
    e.preventDefault();
    if(!query)return;
    if (page === 1) {
      fetchHandlder();
    }
    setPage(1);
  }
  return <main>
    <section className="search">
      <form action="" className="search-form">
        <input type="text" className="form-input" placeholder='search' value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button type="submit" className='submit-btn' onClick={submitHandler}><FaSearch /> </button>
      </form>
    </section>
    <section className="photos">
      
      <div className="photos-center">
        {photos.map((e,i)=><Photo key={i}
        {...e}
        />)}
      </div>
      {loading && <h2 className='loading'>Loading...</h2>}
    </section>
  </main>
}

export default App
