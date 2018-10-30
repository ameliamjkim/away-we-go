import React from 'react'
import { Link } from 'react-router'

 const TripShowTile = (props) => {
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
          <p><Link to={'/'}>Go Back to All Trips</Link></p>
        </div>
      </div>
    </div>
  )
}

export default TripShowTile
