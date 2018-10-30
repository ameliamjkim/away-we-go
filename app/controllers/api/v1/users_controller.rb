class Api::V1::UsersController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	before_action :authenticate_user!, except: [:index, :show]

	def index
    if current_user
      render json: User.where(id: current_user)
    else
      render json: "You are not authorized"
    end
	end
end
