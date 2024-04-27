import React from "react"
import './Footer.css'
import kenny from '../pic/kenny_img.jpeg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='footer_img'>
            <img src={kenny} alt='' />
          </div>
          <p>© 2024. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
