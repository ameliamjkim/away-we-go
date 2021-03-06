import React, { Component } from 'react'
import TripShowTile from '../components/TripShowTile'
import AttendeesContainer from '../containers/AttendeesContainer'
import ChatContainer from '../containers/ChatContainer'
import WeatherContainer from '../containers/WeatherContainer'
import { browserHistory } from 'react-router'
import swal from 'sweetalert';


class TripShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trip: "",
      user: "",
      country: "",
      attendees: [],
      currentUserId: ""
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.removeTrip = this.removeTrip.bind(this);
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
          trip: data.trip.info[0],
          user: data.trip.info[0].user,
          attendees: data.trip.info[0].users,
          currentUserId: data.current_user_id,
          country: data.trip.info[0].country
         })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleDelete(){
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' } ,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        swal("Trip was deleted!")
        return browserHistory.push(`/trips`)
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => {
      console.error(`Error in Fetch: ${error}`)
    })
  }

  removeTrip(){
    let tripId = this.props.params.id
    fetch(`/api/v1/usertrips/${tripId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' } ,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        swal("You've left the trip!")
        return browserHistory.push(`/trips`)
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => {
      console.error(`Error in Fetch: ${error}`)
    })
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
            currentUserId={this.state.currentUserId}
            ownerId={this.state.user.id}
            country={this.state.country}
            handleDelete={this.handleDelete}
            removeTrip={this.removeTrip}
          />
        </div>
        <div className="grid-x">
          <WeatherContainer
            name={this.state.trip.name}
          />
        </div>
        <div className="grid-x">
          <AttendeesContainer
            key={this.state.trip.id}
            id={this.state.trip.id}
            attendees={this.state.attendees}
            tripId={this.props.params.id}
            currentUserId={this.state.currentUserId}
          />
        </div>

      </div>

      )
  }
}

export default TripShowContainer
