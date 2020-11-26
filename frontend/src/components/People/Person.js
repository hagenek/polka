import React from "react"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import IconButton from "@material-ui/core/IconButton"

import "./Person.css"

/* eslint-disable react/prop-types */
function Person({ User }) {
  return (
    <li className="person">
      <div className="userinfo">
        <img
          src=" https://images.vexels.com/media/users/3/140800/isolated/preview/86b482aaf1fec78a3c9c86b242c6ada8-man-profile-avatar-by-vexels.png"
          alt="generic profile"
        />
        <h2 className="person__username">{User.username} </h2>
        <p className="person__names">
          {User.firstName} {User.lastName}{" "}
        </p>
      </div>
      <div className="icons">
        <IconButton className="MailOutlineIcon">
          <MailOutlineIcon />
        </IconButton>
        <IconButton className="PersonAddIcon">
          <PersonAddIcon />
        </IconButton>
      </div>
    </li>
  )
}

export default Person
