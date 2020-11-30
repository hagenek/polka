import React, { useState, useEffect } from "react"
import backend from '../../api'
import "./Profile.css"
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import { Link } from "react-router-dom"
import userService from "../../services/user-service"
import base64js from 'base64-js'

const Profile = ({userId}) => {

  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState("")
  const [interests, setInterests] = useState("")
  const [gender, setGender] = useState("")
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const getUser= async () => {
      const res = await backend.get(`api/user/${userId}`)
      setUserData(res.data)
      setFirstName(res.data.firstName)
      setEmail(res.data.email)
      setLastName(res.data.lastName)
      setUsername(res.data.username)
      setInterests(res.data.interests ?? null)
      setGender(res.data.gender ?? null)
      setAvatar(base64js.fromByteArray(res.data.avatar.data))
      // ... do something else with 'buffer'
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

    userService.updateUser(userId, {
      username,
      email,
      firstName,
      lastName,
      interests,
      gender,
    }
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

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const onChangelastName = (e) => {
    setLastName(e.target.value)
  }
  const onChangeGender = (e) => {
    setGender(e.target.value)
  }



  return (
    <div className="userdata-container">
    <img src={'data:image/png;base64,' + avatar}/>
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
            <label className="edit-label">First name: </label>
            <TextValidator
              onChange={onChangeFirstName}
              name="first name"
              value={firstName}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Last name</label>
            <TextValidator
              onChange={onChangelastName}
              name="first name"
              value={lastName}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Username</label>
            <TextValidator
              onChange={onChangeUsername}
              name="username"
              value={username}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <label className="edit-label">Email</label>
            <TextValidator
              onChange={onChangeEmail}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', 'Not a valid email']}
            />
            <label className="edit-label">Interests</label>
            <TextValidator
            label="Add interests"
              onChange={onChangeInterests}
              type="interests"
              name="interests"
              value={interests}
            />
            <label className="edit-label">Gender</label>
            <TextValidator
            label="Add gender"
              onChange={onChangeGender}
              type="gender"
              name="gender"
              value={gender}
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
