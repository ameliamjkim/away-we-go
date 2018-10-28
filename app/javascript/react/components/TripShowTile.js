import React from 'react'
import { Link } from 'react-router'

 const TripShowTile = (props) => {
  return(
    <div>
    <br/>
      <div className="grid-x">
        <div className="callout cell medium-6 small-8">
          <h4> Location: {props.name}</h4>
          <p> Owner - {props.firstName} {props.lastName}</p>
          <p> Start Day: {props.startDate} </p>
          <p> End Day: {props.endDate} </p>
          <p> <Link to={'/'}>All Your Trips</Link> </p>
        </div>
      </div>
    </div>
  )
}

 export default TripShowTile
