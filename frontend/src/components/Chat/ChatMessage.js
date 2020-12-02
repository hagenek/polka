import React from 'react'

import './ChatMessage.css'

const Message = ({ userId, message }) => {
  return (
    <>
      {userId === message.sender._id ? 
        <div className="message__container message__container--sender">
          <img
            src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          />
          <div className="message message--sender arrow arrow--sender">
            <p>{message.text}</p>
          </div>
        </div>
      : <div className="message__container message__container--receiver">
          <div className="message message--receiver arrow arrow--receiver">
            <p>{message.text}</p>
          </div>
          <img
            src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          />
        </div>
      }
    </>
  )
}

export default Message;
