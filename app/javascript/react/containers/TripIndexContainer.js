import React, { Component } from 'react'
import TripIndexTile from '../components/TripIndexTile'
import TripFormContainer from '../containers/TripFormContainer'
class TripIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upcomingTrips: [],
      pastTrips: [],
      isHidden: true
    }
    this.addNewTrip = this.addNewTrip.bind(this);
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
        this.setState({
          upcomingTrips: data.trips.upcoming_trips,
          pastTrips: data.trips.past_trips,
         })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  addNewTrip(formPayLoad) {
   fetch(`/api/v1/trips`, {
     method: 'POST',
     body: JSON.stringify(formPayLoad),
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json' },
     credentials: 'same-origin'
    })
    .then(response => {
     if (response.ok) {
       return response
     }
     else {
       let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage)
       throw error
     }
    })
    .then(response => response.json())
    .then(body => {
     let newTrips = this.state.upcomingTrips.concat(body.trip)
     this.setState( { upcomingTrips: newTrips } )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    let upcomingTrips = this.state.upcomingTrips.map((trip) => {
      return (
        <TripIndexTile
          key={trip.id}
          id={trip.id}
          name={trip.name}
          country={trip.country}
          startDay={trip.start_date}
          endDay={trip.end_date}
        />
      )
    })

    let pastTrips = this.state.pastTrips.map((trip) => {
      return (
        <TripIndexTile
          key={trip.id}
          id={trip.id}
          name={trip.name}
          country={trip.country}
          startDay={trip.start_date}
          endDay={trip.end_date}
        />
      )
    })

    let title
    if(this.state.pastTrips.length != 0 ) {
      title = "Your Past Trips"
    }

    return(
      <div>
      <h2 className="heading">Your Upcoming Trips</h2>
        <div className="grid-x">
          {upcomingTrips}
        </div>
        <div className="grid-x form-button">
          <button className="panel cell small-6 small-offset-3 medium-4 medium-offset-4 large-2 large-offset-5" onClick={this.toggleHidden.bind(this)}>
            <span> Add New Trip </span>
          </button>
            {!this.state.isHidden && <TripFormContainer
              addNewTrip={this.addNewTrip}
              />}
        </div>
        <h2 className="heading"> {title} </h2>
      <br/>
        <div className="grid-x">
          {pastTrips}
        </div>
      </div>
      )
  }
}

export default TripIndexContainer
