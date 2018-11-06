import React from 'react'
import { Link } from 'react-router'

const TripIndexTile = (props) => {
  let country
  if(props.country){
    country = <img className="text-right" src={`https://www.countryflags.io/${props.country}/flat/48.png`}/>

  }

  return(
    <div className="tile small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3">
      <div className="callout">
        <div>
          <div>
            <h4><Link to={`/trips/${props.id}`}>{props.name}<span className="weather">{country}</span></Link></h4>
          </div>
          <div className="grid-x">
            <span className="cell small-8"> From {props.startDay} </span>
            <br/>
            <span className="cell small-8"> to {props.endDay} </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripIndexTile
