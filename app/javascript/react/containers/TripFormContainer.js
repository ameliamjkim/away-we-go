import React, { Component } from 'react'
import { countriesShort, countriesLong } from '../helpers/flags'
import swal from 'sweetalert';


class TripFormContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     name: "",
     country: "",
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
    country: this.state.country,
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
     country: "",
     startDate: "",
     endDate: ""
    })
  } else {
    swal('Please fill out the form correctly before submitting!')
  }
 }

 render() {

    let countries = countriesLong.map((country, index) => {
      return (
        <option key= {countriesShort[index]} value={countriesShort[index]}> {country}</option>
      )
    })
   return (
     <div className=" tile cell small-10 small-offset-1 medium-6 medium-offset-3">
       <form className="callout tile" onSubmit={this.handleSubmit}>
        <h3 className="text-center"> Add a New Destination </h3>
          <label> Name:
           <input name="name" type="text" onChange={this.handleChange} value={this.state.name} placeholder="City, State" />
           </label>
           <label> Optional Country:
             <select name="country" onChange={this.handleChange} >
             <option value="">Country</option>
             {countries}
            </select>
          </label>
          <label> Start Day:
           <input name="startDate" type="date" onChange={this.handleChange} value={this.state.startDate} />
           </label>
          <label> End Day:
           <input name="endDate" type="date" onChange={this.handleChange} value={this.state.endDate} />
           </label>
         <input className="panel" type="submit" value="Submit"/>
       </form>
     </div>
   );
 }
}

export default TripFormContainer
