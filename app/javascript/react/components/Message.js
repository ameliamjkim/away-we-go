import React from 'react'

const Message = ({ handle, message, icon }) => {
  return(
    <p>
      <strong> {handle}: </strong>
      {message}
    </p>
  );
};

export default Message
