import React from 'react'
import './WhatGPT4.css'
import Feature from '../../components/feature/Feature'
const WhatGPT4 = () => {
  return (
    <div >
      <section className='section-padding' id='whatGPT3' >
        <div className='container gradient-bg2'>
          <div className='row '>
            <div className='col-12' id='top'>
              <Feature title="What is GPT4" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti quam voluptates, aut officiis sed dolorum tempora non minima blanditiis, ea labore eius nostrum perspiciatis, nesciunt praesentium consequatur cupiditate aspernatur." />
            </div>
          </div>
          <div className='row'>
            <div id='library' className='col-12'>
              <h1 className='gradient-text '>The possibilities are beyond your imagination</h1>
              <p >Explore the Library</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 features'>
              <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque." />
              
              <Feature title="Popularity" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque."   />
              <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque."  />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatGPT4