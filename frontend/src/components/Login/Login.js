import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

function Login() {
  const [nameInput, setNameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  const handleNameInputChange = (e) => {
    const inputText = e.target.value
    setNameInput(inputText)
  }

  const handlePasswordInputChange = (e) => {
    const inputText = e.target.value
    setPasswordInput(inputText)
  }

  const logInSubmit = () => {
    if (!nameInput || !passwordInput) {
      console.log("Please fill in fields")
    }
    // else LOG IN!!!?
  }

  return (
    <div>
      <form className="namefield" onSubmit={logInSubmit}>
        <TextField
          required
          type="text"
          className="namefield"
          id="filled-required"
          label="Enter name"
          variant="outlined"
          value={nameInput}
          onChange={handleNameInputChange}
        />
      </form>
      <form className="passwordfield" onSubmit={logInSubmit}>
        <TextField
          required
          type="text"
          className="namefield"
          id="filled-required"
          label="Enter password"
          variant="outlined"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
      </form>
      <Button variant="contained" onClick={logInSubmit}>
        LOG IN
      </Button>
    </div>
  )
}

export default Login
