class UsertripSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :trip
end
