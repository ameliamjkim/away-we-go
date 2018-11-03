import React, { Component } from 'react'
import TripShowTile from '../components/TripShowTile'
import AttendeesContainer from '../containers/AttendeesContainer'
import ChatContainer from '../containers/ChatContainer'
import { browserHistory } from 'react-router'

class TripShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trip: [],
      user: [],
      attendees: [],
      currentUserId: ""
    }
    this.handleDelete = this.handleDelete.bind(this);
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
          attendees: data.users,
          currentUserId: data.current_user_id
         })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleDelete(id){
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' } ,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        alert("Trip was deleted!")
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
            handleDelete={this.handleDelete}
            deleteTrip={this.deleteTrip}
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
