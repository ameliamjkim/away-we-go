import React, {Component} from 'react'
import TripIndexTile from '../components/TripIndexTile'
class TripIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: [],
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
        this.setState( { trips: data } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let trips = this.state.trips.map((trip) => {
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
    }
  )
    return(
      <div>
      <br/>
      <h3> Your Upcoming Trips </h3>
      <br/>
        <div className="row">
          {trips}
        </div>
      </div>
      )
  }
}

export default TripIndexContainer
