import React, { useState, useEffect } from "react"
import backend from '../../api'
import "./Profile.css"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import { Link } from "react-router-dom";

const Profile = ({userId}) => {

  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState("")
  const [interests, setInterests] = useState("")

  useEffect(() => {
    const getUser= async () => {
      const res = await backend.get(`api/user/${userId}`)
      console.log(res.data)
      setUserData(res.data)
    }
    getUser()
  }, [])

  const useStyles = makeStyles({
    button: {
      height: 48,
      width: 200,
      padding: '0 30px',
    },
    input: {
      width: 200,
      margin: '10px 0 0 0'
    }
  });

  const handleUpdate = (e) => {
    e.preventDefault()

    setMessage("")
    setSuccessful(false)

    backend.register(
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

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangeInterests = (e) => {
    setInterests(e.target.value)
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



  return (
    <div className="userdata-container">
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '85vh' }}
    >
      <ValidatorForm className="signup__form" onSubmit={handleUpdate}>
        {message && (
          successful ? (
            <>
              <Alert severity="success" role="alert">
                {message}
              </Alert>
              <Link to="/login">
                <Button variant="contained" color="primary" type="submit">Login</Button>
              </Link>
            </>
          ) : (
              <Alert severity="error" role="alert">
                {message}
              </Alert>
            )
        )}
        {!successful && (
          <div className="test">
            <label className="edit-label">First name</label>
            <TextValidator
              onChange={onChangeFirstName}
              name="first name"
              value={userData.firstName}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Last name</label>
            <TextValidator
              onChange={onChangelastName}
              name="first name"
              value={userData.lastName}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Username</label>
            <TextValidator
              onChange={onChangeUsername}
              name="username"
              value={userData.username}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Email</label>
            <TextValidator
              onChange={onChangeEmail}
              name="email"
              value={userData.email}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', 'Not a valid email']}
            />
            <label className="edit-label">Password</label>
            <TextValidator
            label="Change password"
              onChange={onChangePassword}
              type="password"
              name="password"
              value={password}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Interests</label>
            <TextValidator
            label="Add interests"
              onChange={onChangeInterests}
              type="interests"
              name="interests"
              value={interests}
            />
            <br />
            <Button color="primary" variant="contained" type="submit">Submit changes</Button>
          </div>
        )}
        {/* <Button style={{ display: "none" }} /> */}
      </ValidatorForm>
    </Grid>
    </div>
  )
}

export default Profile
