import React from 'react'
import { Link } from 'react-router'

 const TripIndexTile = (props) => {
  return(
    <div className="callout">
      <h4> <Link to={`/trips/${props.id}`}>{props.name}</Link> </h4>
      <p> From {props.startDay} to {props.endDay}</p>
    </div>
  )
}

 export default TripIndexTile
