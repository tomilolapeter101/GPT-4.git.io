import React from 'react'
import './Feature.css'
const Feature = ({title,text}) => {
  return (
    <div className='title-container'>
      <div className='title'>
        <div/>
        <h1>{title}</h1>
        </div> 
        <div className='text'>
          {text}
        </div>
  </div>
  )
}

export default Feature