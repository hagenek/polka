import backend from "../api"
import authHeader from "./auth-header"

const getUserBoard = async () => {
  return backend.get("/api/user", { headers: authHeader() })
}

const updateUser = (id, username, email, password, firstName, lastName) => {
  return backend.patch("/api/user/:id", {
    username,
    email,
    password,
    firstName,
    lastName,
    token,
  })
}

export default getUserBoard;
