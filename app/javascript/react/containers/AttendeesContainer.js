import React, { Component } from 'react'
import AttendeeFormContainer from '../containers/AttendeeFormContainer'

class AttendeesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendees: this.props.attendees,
      isHidden: true,
      followers: []
    }
    this.addAttendee = this.addAttendee.bind(this)
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.currentUserId}`,
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
          followers: data.followers
         } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  addAttendee(formPayLoad) {
   fetch(`/api/v1/usertrips`, {
     method: 'post',
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
      console.log(body)
     let newAttendees = this.state.attendees.concat(body)
     this.setState( {
       attendees: newAttendees,
      } )
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let attendees = this.state.attendees.map((attendee) => {
      return(
        <li key={attendee.id}> {attendee.first_name} {attendee.last_name}</li>
      )
    })

    return(
      <div className="tile cell small-10 small-offset-1 large-6 large-offset-3">
        <div className="callout">
          <div>
            <h3>Attendees: </h3>
            <ul>
              {attendees}
            </ul>
          </div>
          <button className="panel" onClick={this.toggleHidden.bind(this)}>
            <span> Invite a Friend</span>
          </button>
            {!this.state.isHidden &&
              <AttendeeFormContainer
                addAttendee={this.addAttendee}
                followers={this.state.followers}
                tripId={this.props.tripId}
              />}

        </div>
      </div>
      )
  }
}

export default AttendeesContainer
