import './ChatContact.css'

const ChatContact = ({ name, id, handleClick }) => {
  return (
    <section className="chatcard__section" onClick={() => handleClick(id)}>
      <section className="chatcard__name">
        <img className="chatcard__image"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        <h1>{name}</h1>
      </section>
    </section>
  )
}

export default ChatContact;