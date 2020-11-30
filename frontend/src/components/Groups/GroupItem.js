// import React, { useState, useEffect } from "react"
import React from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import IconButton from "@material-ui/core/IconButton"
import sportImage from "../../assets/cherry-paralympic-basketball.png"

import "./Groupitem.css"

/* eslint-disable react/prop-types */
function GroupItem({ getGroup, groupName, addMember}) {
  // const [click, setClick] = useState(false)

  return (
    <li className="groupItem">
      <img
        src={sportImage}
        alt="generic group"
      />
      <div role="presentation" onClick={() => getGroup(groupName.name)} className="group__info">
        <h2 className="groupItem__header">{groupName.name} </h2>
        <p className="groupItem__description">{groupName.description} </p>
      </div>
    </li>
  )
}

export default GroupItem
