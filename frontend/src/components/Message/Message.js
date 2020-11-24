import React from 'react'

const Message = ({ message }) => {
  return (
    <div>
      <h1>{message.sender}</h1>
      <p>{message.text}</p>
    </div>
  )
}

export default Message;
