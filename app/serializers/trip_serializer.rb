class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :start_date, :end_date, :user, :users
end
