import React, { Component } from 'react'

class WeatherContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      icon: "",
      sunrise: "",
      sunset: "",
      temp: ""
    }
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather() {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${this.props.name}&key=d4b9c5cd60974b07b3cfdb5ae714d0da`,
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
          description: data.data[0].weather.description,
          icon: data.data[0].weather.icon,
          sunrise: data.data[0].sunrise,
          sunset: data.data[0].sunset,
          temp: data.data[0].app_temp
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))

  }


  render() {
    let icon
    let temp
    let sunset
    let sunrise

    if(this.state.description != "" && this.state.temp != "" && this.state.sunrise != "" && this.state.sunset != "" || this.state.icon != "") {
      icon = <img className="text-right" src={`https://www.weatherbit.io/static/img/icons/${this.state.icon}.png`} height="75" width="75"/>
      temp = <span><strong>Temperature:</strong> {this.state.temp}°C with {this.state.description} <br/> </span>
      sunrise = <span> <strong>Today's sunrise:</strong> {this.state.sunrise} <br/> </span>
      sunset = <span><strong>Today's sunset:</strong> {this.state.sunset}</span>
    }
    return(
      <div className="tile cell small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3">
       <div className="callout">
        <h5> Today's Weather in {this.props.name} <span className="weather"> {icon} </span> </h5>
        <div>
          <div>
            {temp}
            {sunrise}
            {sunset}
          </div>
        </div>
        <button className="panel tile" onClick={this.getWeather}> Get Weather </button>
       </div>
      </div>
      )
  }
}

export default WeatherContainer
