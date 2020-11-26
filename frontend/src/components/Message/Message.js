import React from 'react'

const Message = ({ message }) => {
  return (
    <div>
      <h1>{message.sender.firstName}: {message.text}</h1>
    </div>
  )
}

export default Message;
