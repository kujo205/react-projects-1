import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
import Icon from './Icon'


const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const[curItem,setCurItem]=useState({name:'name',data:'loading...'});
  const[data,setData]=useState([
    {name:'name',data:'',icon:FaUser},
    {name:'email',data:'',icon:FaEnvelopeOpen},
    {name:'age',data:'',icon:FaCalendarTimes},
    {name:'street',data:'',icon:FaMap},
    {name:'phone',data:'',icon:FaPhone},
    {name:'password',data:'',icon:FaLock}
  ]);
  const[isLoading,setIsLoading]=useState(false);
  const[img,setImg]=useState(defaultImage);

  async function fetchHandler(){
    setIsLoading(true)
    let data;
    try{
      data=await fetch(url);
      data=await data.json();
      data=data.results[0];
      
      const person=[
        {name:'name',data:data.name.first+' '+data.name.last,icon:FaUser},
        {name:'email',data:data.email,icon:FaEnvelopeOpen},
        {name:'age',data:new Date().getFullYear()-new Date(data.dob.date).getFullYear(),icon:FaCalendarTimes},
        {name:'street',data:data.location.street.number+' '+data.location.street.name,icon:FaMap},
        {name:'phone',data:data.phone,icon:FaPhone},
        {name:'password',data:data.login.password,icon:FaLock}
      ];
      setCurItem(person[0]);
      setData(person);
      setImg(data.picture.large);

      console.log(person);
    }catch(mis){            //name,email,age,street,phone,password
      console.log(mis);
    }
    setIsLoading(false)


  }

  useEffect(()=>{
    fetchHandler();
  },[])


  return(
  <main>
    <div className="block bcg-black">

    </div>
    <div className="block">
    
      <div className="container">
        <img src={img} alt=""/>
        <p className="user-title">{`My ${curItem.name} is`}</p>
        <p className="user-value">{curItem.data}</p>
        <div className="values-list">
          {data&&data.map(e=><Icon setCurItem={setCurItem} key={Math.random()}e={e}/>)}
        </div>
        <button onClick={fetchHandler} className="btn">{isLoading?'loading...':'random user'}</button>
      </div>
    </div>

  </main>)
}
export default App
