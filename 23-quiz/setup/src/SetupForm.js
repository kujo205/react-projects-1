import React,{useRef, useState} from 'react'
import { useGlobalContext } from './context'





const SetupForm = () => {
  
  const{table,startQuiz}=useGlobalContext();

  const[amount,setAmount]=useState(10);
  const[category,setCategory]=useState(table.sports);
  const[difficulty,setDifficulty]=useState('easy');


  const form=useRef();
  
  
  const submitHandler=(e)=>{
    e.preventDefault();
    const quiz={
      amount,
      difficulty,
      category,
      type:'multiple'
    }
    
    startQuiz(quiz);
  
  }


  return <section className='quiz quiz-small'>
    <form className="setup-form" ref={form} onSubmit={submitHandler}>
      <h2>setup quiz</h2>
      <div className="form-control">
      <label forhtml="number">number of questions</label>
        <input type="number"
                id='number'
                className='form-input'
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
                />
      </div>

      <div className="form-control">
        <label forhtml="category">category</label>
        <select name="category" 
          onChange={(e)=>{setCategory(+e.target.value)}}
          value={category}
          id="category" className='form-input'>

          {Object
          .entries(table)
          .map(e=>
          <option key={e[1]} value={e[1]}>
            {e[0]}
          </option>)
          };
        </select>
      </div>

      <div className="form-control">
      <label forhtml="difficulty">select difficulty</label>
      <select name="difficulty"
              id="difficulty"
              className='form-input'
              onChange={(e)=>{setDifficulty(e.target.value)}}
              value={difficulty}
              
              >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
      <div className="form-control">
        <button type="submit"
                className='submit-btn'
                onClick={submitHandler}
                >
          start
        </button>
      </div>

    </form>


  </section>
}

export default SetupForm
