import React from 'react'

const PastMessagesTile = (props) => {

  let pastMessages
  if(props.pastMessage != [] ) {
    pastMessages = props.pastMessages.map((message) => {
      return(
        <p key={message.id} className="tile callout"><strong> {message.user.email}:</strong> {message.body}</p>
      )
    })
  }

  return(
    <div> {pastMessages} </div>
  );
};

export default PastMessagesTile
