import React from 'react'
import './Features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Lorem, ipsum dolor.',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis impedit veritatis"
  },

  {
    title: 'Lorem, ipsum dolor.',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis impedit veritatis"
  },

  {
    title: 'Lorem, ipsum dolor.',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis impedit veritatis"
  },

  {
    title: 'Lorem, ipsum dolor.',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis impedit veritatis"
  }
]

const Features = () => {
  return (
    <div>
      <section className='section-padding'>
              <div className='container' id='features'>
          <div className='row features-heading'>
            <h1 className='gradient-text'>
              The future is now and just have to embrass it. Walk into the future now and make it happen
            </h1>
            <a href="#">Request early access</a>
          </div>
          <div className='feature-container'>
            {featuresData.map((item,index) =>(
              <Feature title={item.title} text={item.text} key={item.title+index}/>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Features



