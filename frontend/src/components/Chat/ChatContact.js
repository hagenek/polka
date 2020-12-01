import './ChatContact.css'

const ChatContact = ({ name, id, handleClick }) => {
  return (
    <section className="contacts__container" onClick={() => handleClick(id)}>
        <img className="contact__image"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        <h1>{name}</h1>
    </section>
  )
}

export default ChatContact;