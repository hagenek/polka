import React, { useState, useEffect } from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from '@material-ui/core/styles'

import "./GroupPage.css"

const useStyles = makeStyles({
  icon: {
    color: '#ffffff',
  },
});

/* eslint-disable react/prop-types */
function GroupPage({ setClickedGroup, groupName, addMember, deleteMember, userId }) {
  const [memberExist, setMemberExist] = useState(false);
  const [membersNum, setMembersNum] = useState(0)

  const emptyGroupArrray = () => {
    setClickedGroup([])
  }

  useEffect(() => {
    const same = (member) => member === userId;
    const boolean = groupName.members.some(same);
    if (boolean === true) {
      setMemberExist(true)
      setMembersNum(groupName.members.length)
    }
  }, [groupName])

  const handleAddClick = () => {
    addMember()
    setMemberExist(true)
    setMembersNum(membersNum + 1)
  }
  const handleRemoveClick = () => {
    deleteMember()
    setMemberExist(false)
    setMembersNum(membersNum - 1)
  }

  const classes = useStyles();

  return (
    <li className="groupPage">
      <div className="checkBox" onClick={() => emptyGroupArrray()}>
        <IconButton className="checkBoxIcon">
          <ArrowBackIosIcon className={classes.icon} role="presentation" />
        </IconButton>
      </div>
      <div className="groupPage__frame">
        <h2 className="groupPage__header">{groupName.name} </h2>
        <img
          className="groupPage__photo"
          src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg"
          alt="generic group"
        />
        <div className="groupPage__info">
          <p className="groupPage__description">Description: {groupName.description} </p>
          <p className="groupPage__members">Members: {membersNum} </p>
        </div>
      </div>
      <div className="icons">
        {memberExist === true ? (
          <ul onClick={(() => handleRemoveClick())}>
            <IconButton className="checkBoxIcon" >
              <CheckBoxIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </ul>
        ) : (
            <ul onClick={(() => handleAddClick())}>
              <IconButton className="CheckBoxOutlineBlankIcon">
                <CheckBoxOutlineBlankIcon className={classes.icon} fontSize="large" />
              </IconButton>
            </ul>
          )}
      </div>
    </li>
  )
}

export default GroupPage
