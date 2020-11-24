import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

import "./Nav.css"

const Nav = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <h1>Logo</h1>
        </div>
        <ul
          className={`nav__menu ${click && "nav_menu active"}`}
          onClick={handleClick}
          role="presentation"
        >
          <li className="nav__item">Home</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Contact</li>
        </ul>
        <div className="mobile__icon" onClick={handleClick} role="presentation">
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
