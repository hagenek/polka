import React from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"

import "./Groupitem.css"

/* eslint-disable react/prop-types */
function GroupItem({ getGroup, groupName }) {
  return (
    <div>
      <li className="groupItem">
        <img
          src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg"
          alt="generic group"
        />
        <div role="presentation" onClick={() => getGroup(groupName.name)} className="group__info">
          <h2 className="groupItem__header">{groupName.name} </h2>
          <p className="groupItem__description">{groupName.description} </p>
        </div>
        <div className="icons">
          <CheckBoxIcon />
          <CheckBoxOutlineBlankIcon />
        </div>
      </li>
    </div>
  )
}

export default GroupItem
