import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import backend from "../../../api";


const UserProfile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const { user } = useParams();
  console.log(userProfile);

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get(`api/user/profile/${user}`)
      setUserProfile(request.data)
      return request
    }
    fetchData()
  }, [user])

  return (
    <section>
      {userProfile.map(user => (
        <>
          <h1>{user.firstName} {user.lastName}</h1>
          <img src={user.avatar} alt="" />
        </>
      ))}
    </section>
  )
}

export default UserProfile
