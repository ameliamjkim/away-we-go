class Api::V1::UsertripsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	before_action :authenticate_user!, except: [:index, :show]

	def index
    usertrips = []
    Usertrip.all.each do |usertrip|
      if usertrip.user == current_user
        usertrips << usertrip
      end
    end
    render json: usertrips
	end

	def show
    if Usertrip.find(params[:id]).trip.users.include?(current_user)
      render json: Usertrip.find(params[:id])
    else
      render json: "You're not authorized"
    end
	end

  def create
    usertrip = Usertrip.new(user: User.find_by(email: user_params[:user]), trip: Trip.find(user_params[:tripId].to_i))
    if usertrip.save
      render json: usertrip.user
    end
  end

  private
  def user_params
    params.require(:user).permit(:user, :tripId)
  end

end
