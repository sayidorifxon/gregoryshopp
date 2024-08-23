import React from 'react'
import "../styles/header.css"
import rasm from "../img/Logo.svg"
import { NavLink, useLocation } from 'react-router-dom'
function Header() {
  let location = useLocation()

  return (
    <header className={location.pathname === "/" ? 'header': "otherheader"}>
      <div className="header_container">
        <div className="header__wrapper">
          <nav>
            <ul>
              <li><NavLink to="/plp">Shop</NavLink></li>
              <li>About</li>
              <li>Contact</li>
              <li>Archive</li>
            </ul>
            <img src={rasm} alt="" />
            <ul>
              <li>Search</li>
              <li>Account</li>
              <li>Cart</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
