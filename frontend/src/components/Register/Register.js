import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import AuthService from "../../services/auth-service"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [token, setToken] = useState("")
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState("")

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const onChangelastName = (e) => {
    setLastName(e.target.value)
  }

  const onChangeToken = (e) => {
    setToken(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    setMessage("")
    setSuccessful(false)

    AuthService.register(
      username,
      email,
      password,
      firstName,
      lastName,
      token
    ).then(
      (response) => {
        setMessage(response.data.message)
        setSuccessful(true)
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        setMessage(resMessage)
        setSuccessful(false)
      }
    )
  }

  return (
    <ValidatorForm onSubmit={handleRegister}>
      {!successful && (
        <>
          <TextValidator
            label="First Name"
            onChange={onChangeFirstName}
            name="first name"
            value={firstName}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <TextValidator
            label="First Name"
            onChange={onChangelastName}
            name="first name"
            value={lastName}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <TextValidator
            label="Username"
            onChange={onChangeUsername}
            name="username"
            value={username}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <TextValidator
            label="Email"
            onChange={onChangeEmail}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['This field is required', 'Not a valid email']}
          />
          <TextValidator
            label="Password"
            onChange={onChangePassword}
            type="password"
            name="password"
            value={password}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <TextValidator
            label="Token"
            onChange={onChangeToken}
            name="token"
            value={token}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <Button variant="contained" color="primary" type="submit">Sign Up</Button>
        </>
      )}
      {message && (
        <div className="form-group">
          <div role="alert">
            {message}
          </div>
        </div>
      )}
      <Button style={{ display: "none" }} />
    </ValidatorForm>
  )
}

export default Register
