class UsersController < ApplicationController
  def show
  end

  def search
    query = "%#{params[:query]}%"
    @users = User.where('first_name ilike ? or last_name ilike ? or email ilike ?', query, query, query)
  end
end
