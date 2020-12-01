import React, {useState, useEffect}from "react"
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import CardHeader from '@material-ui/core/CardHeader'
import base64js from 'base64-js'

import "./Person.css"

/* eslint-disable react/prop-types */
function Person({ User }) {

  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (User.avatar) {
      const avatar = base64js.fromByteArray(User.avatar.data)
      setAvatar('data:image/png;base64,' + avatar);
    } else {
      setAvatar('https://images.vexels.com/media/users/3/140800/isolated/preview/86b482aaf1fec78a3c9c86b242c6ada8-man-profile-avatar-by-vexels.png')
    }
  }, [])
  
  return (
    <li className="person">
      <div className="userinfo">
        <img
          src={avatar}
          alt="generic profile"
        />
        <h2 className="person__username">{User.username} </h2>
        <p className="person__names">
          {User.firstName} {User.lastName}{" "}
        </p>
      </div>
      <br />
      <h4>Interests:</h4>
      <div>
      <List >
          <ListItemIcon>
            {User.interests ?? "golf"}
          </ListItemIcon>
          <ListItemIcon>
            {User.interests ?? "tennis"}
          </ListItemIcon>
      </List>
      <Divider />
      <CardHeader text="LOL"/ >
    </div>
    </li>
  )
}

export default Person
