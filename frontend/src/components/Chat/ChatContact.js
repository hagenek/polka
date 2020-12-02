import './ChatContact.css'
import RemoveIcon from '@material-ui/icons/HighlightOff'

const ChatContact = ({ name, id, handleClickCard, handleClickDelete }) => {
  return (
    <>
    <section className="contacts__container" onClick={() => handleClickCard(id)}>
        <img className="contact__image"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        <h1>{name}</h1>
    </section>
    <section>
      {handleClickDelete && <RemoveIcon onClick={() => handleClickDelete(id)} />}
    </section>
    </>
  )
}

export default ChatContact;