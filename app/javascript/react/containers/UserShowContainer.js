import React, { Component } from 'react'
import UserShowTile from '../components/UserShowTile'

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: [],
      followeds: [],
      firstName: "",
      lastName: "",
      email: "",
      currentUserId: ""
    }
  }

  componentDidMount() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`,
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
          followers: data.followers,
          followeds: data.followeds,
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          currentUserId: data.current_user_id
         })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    return(
      <div>
        <div className="grid-x">
          <UserShowTile
            followers={this.state.followers}
            followeds={this.state.followeds}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            currentUserId={this.state.currentUserId}
          />
        </div>
      </div>
      )
  }
}

export default UserShowContainer
