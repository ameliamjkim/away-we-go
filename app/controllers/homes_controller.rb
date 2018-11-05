class HomesController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user_for_trip

  def index

  end

  private
  def authorize_user_for_trip
    if params[:id] && request.original_url.include?("trip")
      if Trip.exists?(params[:id]) && !Trip.find(params[:id]).users.include?(current_user)
        redirect_to root_path
      else
        redirect_to root_path
      end
    end
  end
end
