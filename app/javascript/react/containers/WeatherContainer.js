import React, { Component } from 'react'

class WeatherContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      icon: "",
      appTemp: "",
      sunrise: "",
      sunset: "",
      temp: "",
      timezone: "",
      uv: ""
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
          appTemp: data.data[0].app_temp,
          icon: data.data[0].weather.icon,
          sunrise: data.data[0].sunrise,
          sunset: data.data[0].sunset,
          temp: data.data[0].temp,
          timezone: data.data[0].timezone,
          uv: data.data[0].uv
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let icon
    let temp
    let appTemp
    let relativeHumidity
    let sunset
    let sunrise
    let timezone
    let uv

    if(this.state.description != "" && this.state.temp != "" && this.state.sunrise != "" && this.state.sunset != "" && this.state.appTemp != "" && this.state.timezone != "" && this.state.uv != "" || this.state.icon != "") {
      icon = <img className="text-right" src={`https://www.weatherbit.io/static/img/icons/${this.state.icon}.png`} height="75" width="75"/>
      temp = <h5>{this.state.temp}°C with {this.state.description} <br/> </h5>
      appTemp = <span><strong>Feels like</strong> {this.state.appTemp}°C <br/> </span>
      uv = <span><strong>UV Index is </strong> {this.state.uv} <br/></span>
      timezone = <span><strong>Timezone</strong> {this.state.timezone} <br/> </span>
      sunrise = <span><strong>Today's sunrise is at</strong> {this.state.sunrise} <br/> </span>
      sunset = <span><strong>Today's sunset is at</strong> {this.state.sunset}</span>
    }
    return(
      <div className="tile cell small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3">
       <div className="callout">
        <h5> Today's Weather in {this.props.name} <span className="weather"> {icon} </span> </h5>
        <div>
          <div>
            {temp}
            {appTemp}
            {timezone}
            {uv}
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
