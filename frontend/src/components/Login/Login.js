/* eslint-disable */
import React, { useState } from "react"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import AuthService from "../../services/auth-service"
import Alert from '@material-ui/lab/Alert';

import "./Login.css";

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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '80vh' }}
    >
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
          <Alert severity="error">
            {message}
          </Alert>
        )}
        <Button style={{ display: "none" }} />
      </ValidatorForm>
    </Grid>
  )
}

export default Login


{/* <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
    <LoginForm />
  </Grid>   

</Grid>  */}
