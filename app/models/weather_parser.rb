require 'httparty'

class WeatherParser
  attr_reader :data

  def initialize
    @data = []
  end

  def weather(query)
    response = HTTParty.get("https://api.weatherbit.io/v2.0/current?city=#{query}&key=#{ENV["WEATHER_API_KEY"]}")

    weather_data = {
      temp: response["data"][0]["temp"],
      app_temp: response["data"][0]["app_temp"],
      icon: response["data"][0]["weather"]["icon"],
      sunrise: response["data"][0]["sunrise"],
      sunset: response["data"][0]["sunset"],
      description: response["data"][0]["weather"]["description"],
      uv: response["data"][0]["uv"],
      timezone: response["data"][0]["timezone"].gsub(/_/, " ")
    }
    @data << weather_data
  end
end
