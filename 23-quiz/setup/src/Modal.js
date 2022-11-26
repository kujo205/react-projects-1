import React from 'react'
import { useGlobalContext } from './context'

const Modal = ({showModal,corAnswers,questionsAmount,refresh}) => {
const {setToStart,setShowModal}=useGlobalContext();
  return <div className={`modal-container ${showModal&&'isOpen'}`}>
    <div className="modal-content">
      <h2>Congrats</h2>
      <p>You answered {(corAnswers/questionsAmount*100).toFixed(2)}% of questions correctly</p>
      <button className="close-btn"
      onClick={()=>{refresh()}}
      
      >play again</button>
    </div>

  </div>
}

export default Modal
