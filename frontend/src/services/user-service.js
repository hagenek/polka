import backend from "../api"
import authHeader from "./auth-header"

const getUserBoard = async () => {
  return backend.get("/api/test/user", { headers: authHeader() })
}

export default getUserBoard;
