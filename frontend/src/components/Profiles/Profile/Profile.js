import React from "react"
import "./Profile.css"
/* eslint-disable react/prop-types */

const Profile = ({ firstName, lastName, username }) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="generic profile"
      />
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>Username: {username}</h3>
    </div>
  )
}

export default Profile
