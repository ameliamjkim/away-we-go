import React from 'react'

const PastMessagesTile = (props) => {

  let pastMessages
  if(props.pastMessage != [] ) {
    pastMessages = props.pastMessages.map((message) => {
      return(
        <p className="tile callout">{message.body}</p>
      )
    })
  }

  return(
    <div> {pastMessages} </div>
  );
};

export default PastMessagesTile
