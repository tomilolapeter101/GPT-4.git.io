import React from 'react'

import {Footer,Possibilty,Features,WhatGPT4,Header} from './container';
import {Cta,Navbar} from './components';
import './app.css'

 const App = () => {
  return (
   <>
    <div>
      <Navbar/>
      <Header/>
    </div>
    <WhatGPT4/>
    <Features/>
    <Possibilty/>
    <Cta/>
    <Footer/>
   </>
  )
}

 
export default App