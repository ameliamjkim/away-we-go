import React from 'react'
import { Link } from 'react-router'

 const TripShowTile = (props) => {
    let deleteReview = () => {
      props.handleDelete(props.id)
    }

    let deleteButton

    if(props.currentUserId == props.ownerId) {
    deleteButton = <button className="panel" onClick={deleteReview}>Delete the Trip</button>
    }

  return(
    <div className="tile cell small-10 small-offset-1 large-6 large-offset-3">
      <div className="callout">
        <div>
          <h3>Location: {props.name}</h3>
          <ul>
            <li>Created by {props.firstName} {props.lastName}</li>
            <li>Begins: {props.startDay}</li>
            <li>Ends: {props.endDay}</li>
          </ul>
          <Link to={`/trips/${props.id}/chats`}>Chatroom</Link>
          <br/>
          <Link to={'/'}>Go Back to All Trips</Link>
          <br/>
          {deleteButton}
        </div>
      </div>
    </div>
  )
}

export default TripShowTile
