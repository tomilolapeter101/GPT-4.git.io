import React from 'react'
import './Possibilty.css'
import possibility from '../../assets/possibility.jpg'

const Possibilty = () => {
  return (
    <div>
      <section className='section-padding'>
        <div className='container' id='possibility-container'>

            <div className=' possibility-img'>
              <img src={possibility} alt="possibility" />
            </div>
            <div className='possibility-content'>
              <h1 className='gradient-text'>The possibilities are beyond our imagination</h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis possimus quaerat commodi aliquam architecto delectus natus cum impedit. Obcaecati?</p>
              <h4>Request early access to get started</h4>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Possibilty