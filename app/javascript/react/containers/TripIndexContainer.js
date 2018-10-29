import React, {Component} from 'react'
import TripIndexTile from '../components/TripIndexTile'
class TripIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upcoming_trips: [],
      past_trips: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/trips',
    {
      credentials: 'same-origin',
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState( {
          upcoming_trips: data.upcoming_trips,
          past_trips: data.past_trips
         } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let upcoming_trips = this.state.upcoming_trips.map((trip) => {
      return (
        <TripIndexTile
          key={trip.id}
          id={trip.id}
          name={trip.name}
          owner={trip.user}
          startDay={trip.start_date}
          endDay={trip.end_date}
        />
      )
    })

    let past_trips = this.state.past_trips.map((trip) => {
      return (
        <TripIndexTile
          key={trip.id}
          id={trip.id}
          name={trip.name}
          owner={trip.user}
          startDay={trip.start_date}
          endDay={trip.end_date}
        />
      )
    })

    let title
    if(this.state.past_trips.length != 0 ) {
      title = "Your Past Trips"
    }

    return(
      <div>
      <h2 className="heading"> Your Upcoming Trips </h2>
        <div className="grid-x">
          {upcoming_trips}
        </div>
      <h2 className="heading"> {title} </h2>
      <br/>
        <div className="grid-x">
          {past_trips}
        </div>
      </div>
      )
  }
}

export default TripIndexContainer
