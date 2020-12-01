import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AuthService from "../../services/auth-service"

import "./Nav.css"

const Nav = ({ userId, setUserId }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const handleLogOut = () => {
    AuthService.logout();
    setUserId(undefined);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to="/">
            <h1>Polka Meet</h1>
          </Link>
        </div>
        {userId ? (
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
                <Link to="/profile">Profile</Link>
              </li>
              <li className="nav__item">
                <Link to="/upload">Avatar</Link>
              </li>
              <li className="nav__item">
                <Link to="/snake">Games</Link>
              </li>
              <li className="nav__item">
                <Link to="/people">People</Link>
              </li>
              <li className="nav__item">
                <Link to="/events">Events</Link>
              </li>
              <li className="nav__item">
                <Link to="/groups">Groups</Link>
              </li>
              <li className="nav__item">
                <Link to="/chat">Chat</Link>
              </li>
              <li className="nav__item">
                <Link to="/" onClick={handleLogOut}>Log Out</Link>
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
          <>
          <ul
              className={`nav__menu ${click && "nav_menu active"}`}
              onClick={handleClick}
              role="presentation"
            >
              <li className="nav__item">
                <Link to="/events">Events</Link>
              </li>
              <li className="nav__item">
                <Link to="/groups">Groups</Link>
              </li>
              <li className="nav__item login__logo" >
              <AccountCircleIcon fontSize="large" className="AccountCircleIcon" />
                <Link to="/login">Log In</Link>
              </li>
              {/* <li className="nav__item">
                <Link to="/register">Sign Up</Link>
              </li> */}
            </ul>
            <div className="mobile__icon" onClick={handleClick} role="presentation">
              {click ? <FaTimes /> : <FaBars />}
            </div>
            </>
          )}
      </div>
    </nav>
  )
}

export default Nav
