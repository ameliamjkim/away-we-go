import React, { Component } from 'react'

class TripFormContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     name: "",
     startDate: "",
     endDate: ""
   }
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event) {
   this.setState({ [event.target.name]: event.target.value })
 }

 handleSubmit(event) {
  event.preventDefault()

  let formPayLoad = {
    name: this.state.name,
    start_date: this.state.startDate,
    end_date: this.state.endDate
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  if((this.state.startDate < this.state.endDate) && (today < this.state.startDate) && (this.state.name.trim() != "")) {
    this.props.addNewTrip(formPayLoad)
    this.setState({
     name: "",
     startDate: "",
     endDate: ""
    })
  } else {
    alert('Please fill form correctly before submitting!')
  }
 }

 render() {
   return (
     <div className=" tile cell small-10 small-offset-1 medium-8 medium-offset-2">
       <form className="callout tile" onSubmit={this.handleSubmit}>
        <h3 className="text-center"> Add a New Destination </h3>
          <label> Name:
           <input name="name" type="text" onChange={this.handleChange} value={this.state.name} placeholder="Your Next Destination" />
           </label>
          <label> Start Day:
           <input name="startDate" type="date" onChange={this.handleChange} value={this.state.startDate} />
           </label>
          <label> End Day:
           <input name="endDate" type="date" onChange={this.handleChange} value={this.state.endDate} />
           </label>
         <input type="submit" value="Submit"/>
       </form>
     </div>
   );
 }
}

export default TripFormContainer
