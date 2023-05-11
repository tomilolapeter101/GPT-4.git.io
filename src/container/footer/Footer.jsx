import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className=' section-padding  footer'>
          <div className='container '>
            <div className='row '>
              <div className="col-12 footer-links p-0 ">
              <div className='footer-1 text-white '>
              <h1 href="#" className='text-white fw-bold text-brand'>GPT-4</h1>
              <p>Sutherland streest, K13, <br /> Finland</p>
              </div>

              <div className=' text-white'>
                <h4>Links</h4>
                <a href="#">Social media</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
              </div>
              <div className=' text-white'>
                <h4>Company</h4>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact</a>
                <a href="#">Values</a>
                <a href="#">Aim</a>
              </div>
              <div className=' text-white'>
                <h4>Learn more</h4>
                <a href="#">Open AI</a>
                <a href="#">GPT-4</a>
                <a href="#">API</a>
                <a href="#">Virtual Reality</a>
              </div>
            </div>
            </div>

            <div className='row text-white footer-copy'>
              <div className='col-auto '>
                <p>All rights reserved</p>
              </div>
              <div class="col-auto">
          <p >Designed By <a href="#" >Peter</a></p>
        </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer