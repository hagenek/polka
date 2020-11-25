import React, { useEffect } from "react"
import Profile from "./Profile/Profile"
import backend from "../../api"

const Profiles = () => {
  // const [ users, setUsers ] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await backend.get("/users")
      console.log(users.data)
    }
    getUsers()
  }, [])

  const makeProfileArr = () => <Profile />

  return <div>{makeProfileArr()}</div>
}

export default Profiles
