class Api::V1::UsersController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	before_action :authenticate_user!, except: [:index, :show]

	def index
		render json: {users: User.all, current_user_id: current_user.id}
	end

	def show
		render json: User.find(params[:id])
	end
end
