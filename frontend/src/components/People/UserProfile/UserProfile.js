import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import Loader from '../../Loader/Loader'
import backend from "../../../api";
import base64js from 'base64-js'
import Button from "@material-ui/core/Button"
import './UserProfile.css'

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true)
  const { user } = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get(`api/user/profile/${user}`)
      setUserProfile(request.data)
      setLoading(false)
      return request
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (userProfile[0]?.avatar) {
      const avatar = base64js.fromByteArray(userProfile[0].avatar.data)
      setAvatar('data:image/png;base64,' + avatar);
    } else {
      setAvatar('https://images.vexels.com/media/users/3/140800/isolated/preview/86b482aaf1fec78a3c9c86b242c6ada8-man-profile-avatar-by-vexels.png')
    }
  }, [userProfile])

  if(loading) return (
    <Loader />
  )

  return (
    <div className="bg-container">
    <section>
      <div className="userprofile__header-container">
        <img src={avatar} alt={userProfile.firstName} />
        <h3>{userProfile[0]?.firstName} {userProfile[0]?.lastName}</h3>
        {userProfile[0] &&
          userId !== userProfile[0]._id &&
          <Link to="/chat">
            <Button className="msg__btn" variant="contained">Message</Button>
          </Link>}
        {userProfile[0] &&
          userId === userProfile[0]._id &&
          <Link to="/profile">
            <Button className="edit__btn" variant="contained">Edit Profile</Button>
          </Link>}
      </div>
      <main className="main__container">
        <section className="events__container">
          <h1 className="heading">{userProfile[0]?.firstName}'s Upcoming Events</h1>
          <div className="event__container">
            <div className="date__container">
              <h1>14</h1>
              <p>DEC</p>
            </div>
            <div className="event__description">
              <h1>Christmas choir</h1>
              <p>Christmas choir at 8pm - everyone welcome</p>
            </div>
          </div>
          <div className="event__container">
            <div className="date__container">
              <h1>20</h1>
              <p>DEC</p>
            </div>
            <div className="event__description">
              <h1>Walk in the park</h1>
              <p>Group walk activity</p>
            </div>
          </div>
          <div className="event__container">
            <div className="date__container">
              <h1>31</h1>
              <p>OCT</p>
            </div>
            <div className="event__description">
              <h1>Halloween party 2021</h1>
              <p>Dress as you please - Costume-Competition</p>
            </div>
          </div>
        </section>
        <section className="groups__container">
          <h1 className="heading">Groups</h1>
          <div className="group__container">
            <div className="group">
              <div className="group__text">
                <h1>Coffe Club</h1>
                <p>For people who can't wake up without a good cup of coffee</p>
              </div>
              <div className="group__actions">
                <Button variant="contained" color="primary">Join</Button>
              </div>
            </div>
            <div className="group">
              <div className="group__text">
                <h1>Football</h1>
                <p>Football group</p>
              </div>
              <div className="group__actions">
                <Button variant="contained" color="primary">Join</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="profile__info">
          <h1 className="heading">Profile Information</h1>
          <ul className="profile__container">
            <li>Age: 30</li>
            <li>Description: Cool guy who never lies, I like sausage</li>
            <li>Gender: Dyadic</li>
            <li>City: Bergen</li>
            <li>Disability: Missing one leg</li>
            <li>Gender Intrest: Not picky</li>
            <li>Hobbies: Reading, Basketball, Netflix & Chill</li>
            <li>Intrests: Going for walks in the park</li>
          </ul>
        </section>
        <section className="friends__main-container">
          <h1 className="heading">Friends</h1>
          <div className="friends__container">
            <div className="friend__container">
              <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="" />
              <div className="friend__text">
                <h1>Joakim Anderson</h1>
                <p>10 mutual friends</p>
              </div>
            </div>
            <div className="friend__container">
              <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="" />
              <div className="friend__text">
                <h1>Georg Ekeberg</h1>
                <p>101 mutual friends</p>
              </div>
            </div>
            <div className="friend__container">
              <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="" />
              <div className="friend__text">
                <h1>Alex Zagame</h1>
                <p>101 mutual friends</p>
              </div>
            </div>
            <div className="friend__container">
              <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="" />
              <div className="friend__text">
                <h1>Stefan Löfven</h1>
                <p>101 mutual friends</p>
              </div>
            </div>
            <div className="friend__container">
              <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="" />
              <div className="friend__text">
                <h1>Marcus Hammarberg</h1>
                <p>101 mutual friends</p>
              </div>
            </div>
            <div className="friend__container">
              <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="" />
              <div className="friend__text">
                <h1>Simon Says</h1>
                <p>101 mutual friends</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
    </div>
  )
}

export default UserProfile
