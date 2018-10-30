import React, { Component } from 'react'

class AttendeeFormContainer extends Component {
  constructor(props) {
   super(props);
   this.state = {
     user: ""
    }

   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event) {
    this.setState({ user: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()

    let formPayLoad = {
      user: this.state.user
    }

    if(this.state.user.trim() != "") {
      this.props.addAttendee(formPayLoad)
      this.setState({
        user: ""
      })
    } else {
      alert('Please select a friend!')
    }
  }

 render() {
   return (
     <div className="tile cell">
       <form onSubmit={this.handleSubmit}>
        <label>
          Select a friend:
          <select value={this.state.value} onChange={this.handleOnChange}>
            <option value="">Choose a Friend</option>
            <option value="Lemon">Lemon</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
       </form>
     </div>
   );
 }
}

export default AttendeeFormContainer
