import backend from "../api"
import authHeader from "./auth-header"

const getUserBoard = async () => {
  return backend.get("/api/user", { headers: authHeader() })
}

const updateUser = async (id, obj) => {
  console.log(obj)
  return backend.patch(`/api/user/${id}`, obj)
}

export default { 
  getUserBoard,
  updateUser,
}
