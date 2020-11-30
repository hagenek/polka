import React, { useState, useEffect } from "react"
import backend from '../../api'
import Button from '@material-ui/core/Button'

const Profile = ({userId}) => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    const getUser= async () => {
      const res = await backend.get(`api/user/${userId}`)
      console.log(res.data)
      setUserData(res.data)
    }
    getUser()
  }, [])

  return (
    <div>
      <form type="submit">
      <h3> Your first name: 
        <input type="text" value={userData.firstName}></input>
      </h3>
      <h3> Your last name: 
        <input type="text" value={userData.lastName}></input>
      </h3>
      <h3> Your email: 
        <input type="text" value={userData.email}></input>
      </h3>
      <Button />
      </form>
    </div>
  )
}

export default Profile
