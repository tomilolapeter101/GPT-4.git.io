import React, {useState} from 'react'
import './Navbar.css'





const Menu = () =>{
  <>
  <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whatGPT3">What is GPT?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#possibilty">Open AI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feature">Case study</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Library</a>
              </li>
            </ul>
          

        <div>
          <a href="#" className='sign-in'>Sign in</a>
          <button type='button' className='btn btn-danger'>Sign up</button>
        </div>
        </>
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu]= useState(true);

  const handleNavCollapse = () => setToggleMenu(!toggleMenu);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark gradient-bg">
        <div className="container">
          <a className="navbar-brand text-white fw-bold text-brand" href="#">GPT-4</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!toggleMenu ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={`${toggleMenu ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav mx-auto my-2">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whatGPT3">What is GPT?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#possibilty">Open AI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feature">Case study</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Library</a>
              </li>
            </ul>
          

        <div>
          <button type='button' className='btn-sign'>Sign in</button>
          <button type='button' className='btn btn-danger'>Sign up</button>
        </div>
        </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar