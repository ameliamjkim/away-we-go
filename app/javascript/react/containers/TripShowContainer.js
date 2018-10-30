import React, { Component } from 'react'
import TripShowTile from '../components/TripShowTile'
import AttendeesContainer from '../containers/AttendeesContainer'

class TripShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trip: [],
      user: [],
      attendees: []
    }
  }

  componentDidMount() {
    let trip_id = this.props.params.id
    fetch(`/api/v1/trips/${trip_id}`,
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
          trip: data,
          user: data.user,
          attendees: data.users
         })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    return(
      <div>
        <div className="grid-x">
          <TripShowTile
            key={this.state.trip.id}
            id={this.state.trip.id}
            name={this.state.trip.name}
            startDay={this.state.trip.start_date}
            endDay={this.state.trip.end_date}
            firstName={this.state.user.first_name}
            lastName={this.state.user.last_name}
          />
        </div>
        <div className="grid-x">
          <AttendeesContainer
            key={this.state.trip.id}
            id={this.state.trip.id}
            attendees={this.state.attendees}
          />
        </div>
      </div>

      )
  }
}

export default TripShowContainer
