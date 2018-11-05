class HomesController < ApplicationController
  before_action :authenticate_user!

  def index

    if params[:id]
      if Trip.exists?(params[:id]) && !Trip.find(params[:id]).users.include?(current_user)
        redirect_to root_path
      else
        redirect_to root_path
      end
    end
  end
end
