import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader'

import "./Person.css"



/* eslint-disable react/prop-types */
function Person({ User }) {

  console.log(User);
  
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
      <br />
      <h4>Interests:</h4>
      <div>
      <List >
        <ListItem button>
          <ListItemIcon>
            Golf
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            Tennis
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <CardHeader text="LOL"/ >
    </div>
    </li>
  )
}

export default Person
