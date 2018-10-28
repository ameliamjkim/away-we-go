class Trip < ApplicationRecord
  has_many :usertrips
  has_many :users, through: :usertrips

  validates_presence_of :name
end
