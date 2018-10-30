class Api::V1::TripsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	before_action :authenticate_user!, except: [:index, :show]

	def index
		upcoming_trips = []
		past_trips = []
    ordered = Trip.order(:start_date)
    ordered.each do |trip|
      if trip.start_date > Date.today && trip.users.include?(current_user)
        upcoming_trips << trip
      elsif trip.start_date < Date.today && trip.users.include?(current_user)
				past_trips << trip
			end
    end
		render json: { upcoming_trips: upcoming_trips, past_trips: past_trips }
	end

	def show
    if Trip.find(params[:id]).users.include?(current_user)
      render json: Trip.find(params[:id])
    else
      render json: "You are not authorized to view this trip!"
    end
	end

	def create
		trip = Trip.new(trip_params)
		trip.user = current_user
		if trip.save
			usertrip = Usertrip.create(trip: trip, user: current_user)
			render json: trip
			else
			render json: {error: review.errors.full_messages.join(', ') }, status: :unprocessable_entity
		end
	end

	def update
	end

	def destroy
	end


	private
	def authorize_delete?
		current_user == Trip.find(params[:id]).user || current_user.admin?
	end

	def trip_params
		params.require(:trip).permit(:name, :start_date, :end_date, user: current_user)
	end
end
