import React from 'react'
import base64js from 'base64-js'

import './ChatMessage.css'

const Message = ({ userId, message }) => {
  const image = base64js.fromByteArray(message.sender.avatar.data)
  return (
    <>
      {userId === message.sender._id ? 
        <div className="message__container message__container--sender">
          <img src={'data:image/png;base64,' + image} />
          <div className="message message--sender arrow arrow--sender">
            <p>{message.text}</p>
          </div>
        </div>
      : <div className="message__container message__container--receiver">
          <div className="message message--receiver arrow arrow--receiver">
            <p>{message.text}</p>
          </div>
          <img src={'data:image/png;base64,' + image} />
        </div>
      }
    </>
  )
}

export default Message;
