class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :start_date, :end_date, :user, :users, :current_user_id

  belongs_to :user

  def current_user_id
    if scope
      scope.id
    else
      nil
    end
  end
end
