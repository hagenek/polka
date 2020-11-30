import React, { useState, useEffect } from "react"
import backend from '../../api'
import Button from '@material-ui/core/Button'
import "./Profile.css"

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
    <div className="userdata-container">
      <form type="submit">
      <table>
        <tbody>
      <label className="edit-label"> Your first name: 
        <input type="text" value={userData.firstName}></input>
      </label>
      <label className="edit-label"> Your last name: 
        <input type="text" value={userData.lastName}></input>
      </label>
      <label className="edit-label"> Your email: 
        <input type="text" value={userData.email}></input>
      </label>
      <label className="edit-label"> Your interests: 
        <input type="text"></input>
      </label >
      <label className="edit-label"> Your sex: 
        <input type="text"></input>
      </label>
      <label className="edit-label"> Your city: 
        <input type="text"></input>
      </label>
      <br />
      <Button className="submit-btn" variant="contained" color="primary">
          Submit changes
      </Button>
        </tbody>
      </table>
      </form>
    </div>
  )
}

export default Profile
