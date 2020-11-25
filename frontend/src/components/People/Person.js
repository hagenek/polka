import React from "react"

import "./Person.css"

/* eslint-disable react/prop-types */
function Person({ User }) {
  return (
    <div>
      <li className="person">
        <h2 className="person__username">{User.username} </h2>
        <p className="person__names">
          {User.firstName} {User.lastName}{" "}
        </p>
      </li>
    </div>
  )
}

export default Person
