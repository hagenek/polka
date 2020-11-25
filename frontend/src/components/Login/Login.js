/* eslint-disable */
import React, { useState } from "react"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from "@material-ui/core/Button"


import AuthService from "../../services/auth-service"

const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = e => {
    e.preventDefault();

    setMessage("");

    AuthService.login(username, password).then(
      () => {
        props.history.push("/");
        // window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  }
  return (
    <div>
      <ValidatorForm onSubmit={handleLogin} >
        <TextValidator
          label="Username"
          onChange={onChangeUsername}
          name="username"
          value={username}
          validators={['required']}
          errorMessages={['This field is required']}
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
        <Button
          variant="contained"
          color="primary"
          type="submit">
          Login
          </Button>
        {message && (
          <div >
            {message}
          </div>
        )}
        <Button style={{ display: "none" }} />
      </ValidatorForm>
    </div>
  )
}

export default Login
