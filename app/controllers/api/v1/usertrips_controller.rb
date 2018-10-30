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

  def create
    binding.pry

    usertrip = Usertrip.new(usertrip_params)
    usertrip.trip
    usertrip.user

    if usertrip.save
      render json: usertrip
    end
  end

  def usertrip_params
    params.require(:usertrip).permit(:user, user: current_user)
  end

end
