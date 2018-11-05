import React from 'react'

const Message = (props) => {
  return(
    <p className="callout">
      <strong> {props.email}: </strong>
      {props.message}
    </p>
  );
};

export default Message
