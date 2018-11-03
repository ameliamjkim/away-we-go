class Api::V1::FollowsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	before_action :authenticate_user!

	private

	def trip_params
		params.require(:trip).permit(:name, :start_date, :end_date, user: current_user)
	end
end
