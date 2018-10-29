import React from 'react'
import { Link } from 'react-router'

 const TripIndexTile = (props) => {
  return(
    <div className="tile small-10 small-offset-1 large-6 large-offset-3">
      <div className="callout">
        <h4>
          <Link to={`/trips/${props.id}`}>{props.name}</Link>
        </h4>
        <p>From {props.startDay} to {props.endDay}</p>
      </div>
    </div>
  )
}

 export default TripIndexTile
