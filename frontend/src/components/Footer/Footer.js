import React from "react"
import { Link } from "react-router-dom"

import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__container">
        <li className="footer__item">
          <Link to="/about">About</Link>
        </li>
        <li className="footer__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
