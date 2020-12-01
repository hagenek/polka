import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import backend from "../../../api";
import base64js from 'base64-js'



const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const { user } = useParams();
  console.log(userId)

  // console.log(avatar)
  console.log(userProfile)

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get(`api/user/profile/${user}`)
      setUserProfile(request.data)
      return request
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (userProfile[0]?.avatar) {
      const avatar = base64js.fromByteArray(userProfile[0].avatar.data)
      setAvatar('data:image/png;base64,' + avatar);
    } else {
      setAvatar('https://images.vexels.com/media/users/3/140800/isolated/preview/86b482aaf1fec78a3c9c86b242c6ada8-man-profile-avatar-by-vexels.png')
    }
  }, [userProfile])

  return (
    <section>
      {userProfile.map(user => (
        <>
          <h1>{user.firstName} {user.lastName}</h1>
          <img src={avatar} alt="" />
          <p>{user?.interests}</p>
        </>
      ))}
    </section>
  )
}

export default UserProfile
