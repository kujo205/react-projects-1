import React,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import {context} from './ContextProvider'

const Modal = () => {
  const {showModal,setShowModal} = useContext(context);
  
  return <div className={`modal-overlay ${showModal?'show-modal':''}`}>
    <div className={`modal-container ${showModal?'show-modal':''}`}>
      <h3>Modal content</h3>
      <button className="close-modal-btn" onClick={()=>setShowModal(false)}>
      <FaTimes/>
      </button>
    </div>

  </div>
}

export default Modal
