import React from 'react'
import "../styles/footer.css"
import logo from '../img/logodark.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer_left">
            <ul>
              <li>Shop all</li>
              <li>Rings</li>
              <li>Bracelets</li>
              <li>Earrings</li>
              <li>Necklaces</li>
            </ul>
          </div>
          <div className="middle">
            <div className="top">
              <img src={logo} alt="" />
            </div>
            <div className="bottom">
              <p>1234 Placeholder St. New York, NY</p>
              <p>Privacy Policy</p>
              <p>© 2022 D.Gregory</p>
            </div>
          </div>
          <div className="footer_right">
            <ul>
              <li>Archive</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
