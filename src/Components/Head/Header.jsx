import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import kenny from '../pic/kenny_img.jpeg'

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={kenny} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <Link to="/"> home</Link>
              </li>
              <li>
                <Link to="features">Features</Link>
              </li>
              <li>
              <Link to="resume">Resume</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <button className='home-btn'>CONTACT ME</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
