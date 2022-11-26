import axios from 'axios'
import React, { useState, useContext, useEffect, useCallback } from 'react'
import reducer from './reducer'

const initialState={

}


const table = {
  sports: 21,
  history: 23,
  politics: 24,
  'general knowledge':9
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

let url = API_ENDPOINT;

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [toStart,setToStart]=useState(false);
  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState([]);
  const [showModal,setShowModal]=useState(false);


  const fetchHandler=useCallback(async ()=>{
    setLoading(true);
    try {
      let resp=await fetch(url);
      resp=await resp.json();
      setQuestions(resp.results);
    } catch (error) {
        console.error(error);
    }
    setLoading(false)



  },[])

  const startQuiz=useCallback((quiz)=>{
    Object.entries(quiz).forEach((el,i) => {
      if(i===0)url+=`${el[0]}=${el[1]}`;
      else url+=`&${el[0]}=${el[1]}`;
    });
    setToStart(true);
    fetchHandler();
    console.log(url);
    url=API_ENDPOINT;
  },[]);


  // useEffect(()=>{



  // },[state.difficulty,state.category,state.amount])




  return <AppContext.Provider value={{table,setToStart,questions,startQuiz,toStart,showModal,setShowModal,loading}}>{children}</AppContext.Provider>
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
