// import React, { useState, useEffect } from "react"
import React from "react"
import IconButton from "@material-ui/core/IconButton"
import sportImage from "../../assets/cherry-paralympic-basketball.png"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./Groupitem.css"

/* eslint-disable react/prop-types */
function GroupItem({ getGroup, groupName, addMember}) {
  // const [click, setClick] = useState(false)

  return (
    <li className="groupItem" role="presentation" onClick={() => getGroup(groupName.name)}>
      <img
        src={sportImage}
        alt="generic group"
      />
      <div className="group__info">
        <h2 className="groupItem__header">{groupName.name} </h2>
        <p className="groupItem__description">{groupName.description} </p>
      </div>
      <div className="groupItem__seeMore">
        <IconButton className="ArrowForwardIosIcon">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </li>
  )
}

export default GroupItem
