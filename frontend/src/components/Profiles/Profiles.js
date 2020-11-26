import React, { useEffect, useState } from "react"
import Profile from "./Profile/Profile"
import backend from "../../api"

import "./Profile/Profile.css"

const Profiles = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const userdata = await backend.get("/users")
      setUsers(userdata.data)
    }
    getUsers()
  }, [])

  const makeProfileArr = (userArr) =>
    userArr.map((u) => (
      <Profile firstName={u.firstName} lastName={u.lastName} username={u.username} />
    ))

  return <div className="profiles__container">{makeProfileArr(users)}</div>
}

export default Profiles
