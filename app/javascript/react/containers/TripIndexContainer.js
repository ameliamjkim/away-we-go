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
      <br/>
      <h2> Your Upcoming Trips </h2>
      <br/>
        <div className="grid-x">
          <div className="cell medium-6 small-11">
            {upcoming_trips}
          </div>
        </div>
      <h3> {title} </h3>
      <br/>
        <div className="row">
          {past_trips}
        </div>
      </div>
      )
  }
}

export default TripIndexContainer
