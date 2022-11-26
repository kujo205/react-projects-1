import React, { useState } from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Modal from './Modal'
import { useEffect } from 'react'
const shuffle=(arr)=>{
  arr.sort(()=>Math.random()-.5);
  return arr;
}


function App() {
  const{setToStart,toStart,loading,questions,showModal,setShowModal}=useGlobalContext();
  const[curNumber,setCurNumber]=useState(0);
  const[corAnswers,setCorAnswers]=useState(0);
  const [listOfAnswers,setListOfAnswers]=useState(null);
  


  function refresh(){
    setToStart(false);setCurNumber(0);setCorAnswers(0);setListOfAnswers(null);
    setToStart(false);setShowModal(false)
  }

  useEffect(()=>{
    if(questions.length){
      setListOfAnswers(shuffle([...questions[curNumber].incorrect_answers,questions[curNumber].correct_answer]));
    }
    
  },[curNumber,questions.length])

  const checkIfCorrect=(answer)=>{
    console.log(answer,questions[curNumber].correct_answer);
    if(answer===questions[curNumber].correct_answer)setCorAnswers(pr=>pr+1);
    console.log(questions.length,curNumber+1);
    if(curNumber+1===questions.length){
      console.log('stop')
      setShowModal(true);
      return
    }
    setCurNumber(pr=>pr+1);
  }
  

  return <main>
    {showModal&&<Modal 
      showModal={showModal}
      corAnswers={corAnswers}
      questionsAmount={questions.length}
      refresh={refresh}
    
    />}
    {!toStart&&<SetupForm/>}
    {loading&&<div className='loading'></div>}
    {!loading&&toStart&&<section className="quiz">
      <p className="correct-answers">
      Correct Answers : {corAnswers}/{curNumber}
      </p>
      {<article className="container">
        <h2 dangerouslySetInnerHTML={{ __html:questions[curNumber].question  }}></h2>
        
        <div className="btn-container">
          {listOfAnswers.map((e)=><button
          key={e}
          className="answer-btn"
          dangerouslySetInnerHTML={{ __html: e }}
          onClick={()=>checkIfCorrect(e)}>
          </button>)}
        </div>
      </article>}
      <button className="next-question"
      
      onClick={()=>setCurNumber(pr=>pr+1)}>
        next question
      </button>




    </section>
          
      }
  </main>
}

export default App
