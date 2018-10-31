class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :user, :users, :current_user_id
  has_many :users

  def current_user_id
    if scope
      scope.id
    else
      nil
    end
  end
end
