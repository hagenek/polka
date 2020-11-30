import './ChatContacts.css'
import { removeSelfFromMembers } from '../../services/chat-service'

const ChatContacts = ({ userId, chat, handleClick }) => {
  const members = removeSelfFromMembers(userId, chat)

  return (
    <section onClick={() => handleClick(chat)}>
      <section className="contacts__container">
        <img className="contact__image"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        {members.length === 1
          ? <h1>{members[0].firstName} {members[0].lastName}</h1>
          : members.map(user => (
            <h1>{user.firstName} {user.lastName}</h1>
          ))
        }
      </section>
    </section>
  )
}

export default ChatContacts;