import React from 'react'

import './ChatMessage.css'

const Message = ({ message }) => {
  return (
    <div className="message__container">
      <img
        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
      />
      <div className="message arrow">
        <p>{message.sender.firstName}: {message.text}</p>
      </div>
    </div>
  )
}

export default Message;
