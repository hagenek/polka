import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import AuthService from "../../services/auth-service"

import "./Nav.css"

const Nav = () => {
  const [click, setClick] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  const handleClick = () => setClick(!click)

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <h1>Polka</h1>
          </Link>
        </div>
        {currentUser ? (
          <>
            <ul
              className={`nav__menu ${click && "nav_menu active"}`}
              onClick={handleClick}
              role="presentation"
            >
              {/* <li className="nav__item">
                <Link to="/home">Home</Link>
              </li> */}
              <li className="nav__item">
                <Link to="/profile">{currentUser.username}</Link>
              </li>
              <li className="nav__item">
                <Link to="/people">People</Link>
              </li>
              <li className="nav__item">
                <Link to="/groups">Groups</Link>
              </li>
              <li className="nav__item">
                <Link to="/chat">Chat</Link>
              </li>
              <li className="nav__item">
                <Link to="/login" onClick={logOut}>Log Out</Link>
              </li>
              {/* {currentUser && (
            <li className="nav__item">
              <Link to="/profile">Profile</Link>
            </li>
          )} */}
            </ul>
            <div className="mobile__icon" onClick={handleClick} role="presentation">
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </>
        ) : (
            <ul className="nav__menu1">
              <li className="nav__item">
                <Link to="/login">Log In</Link>
              </li>
              <li className="nav__item">
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          )}
      </div>
    </nav>
  )
}

export default Nav
