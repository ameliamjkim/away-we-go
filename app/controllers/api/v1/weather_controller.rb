class Api::V1::WeatherController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	before_action :authenticate_user!, except: [:index, :show]

	def index
    weather = WeatherParser.new
    weather_search = weather.weather(params[:location])
    render json: weather_search
	end
end
