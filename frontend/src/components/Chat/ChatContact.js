import React, { useState } from 'react'
import './ChatContact.css'
import RemoveIcon from '@material-ui/icons/HighlightOff'

const ChatContact = ({ name, id, handleClickCard, handleClickDelete }) => {
  const [hovering, setHovering] = useState(true)

  return (
    <section className="contact__container" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <section className="contact__info" onClick={() => handleClickCard(id)}>
          <img className="contact__image"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <h1>{name}</h1>
      </section>
      <section>
        {handleClickDelete && hovering && 
          <RemoveIcon 
            onClick={() => handleClickDelete(id)}
            className="contact__delete"
            style={{
              color: '#f44336',
            }}
          />
        }
      </section>
    </section>
  )
}

export default ChatContact;