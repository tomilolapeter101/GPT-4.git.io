import React from 'react'
import './Header.css'
import header from '../../assets/header.png'


const Header = () => {
  return (
    <div className='container section-header header  '>
      <div className='row '>
        <div className='col-lg-7 col-md-7 hero'>

        <h1 className='gradient-text '>
          We will help you build something amazing with GPT-4 Open AI
        </h1>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nisi incidunt non quasi cumque nam excepturi natus velit maiores magnam?</p>
        <div className='my-5'>
          <input type="email" placeholder='Your email' className='input' />
          <button className='button1'>Get started</button>
        </div>
        </div>
        <div className='col-lg-5 col-md-5 p-0 m-0'>
          <img src={header} alt="ai" className='header-img ' />
        </div>
      </div>

    </div>
  )
}

export default Header