import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <h2 className='error-container'>404 error </h2>
      <p>page is missing, check if the url is correct</p>
      <Link to='/' className='btn btn-primary'>Back to safety</Link>
    </div>
  )
}

export default Error
