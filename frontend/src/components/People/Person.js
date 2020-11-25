import React from "react"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import "./Person.css"

/* eslint-disable react/prop-types */
function Person({ User }) {
  return (
    <div>
      <li className="person">
        <div className="userinfo">
          <h2 className="person__username">{User.username} </h2>
          <p className="person__names">
            {User.firstName} {User.lastName}{" "}
          </p>
        </div>
        <div className="icons">
          <MailOutlineIcon />
          <PersonAddIcon />
        </div>
      </li>
    </div>
  )
}

export default Person
