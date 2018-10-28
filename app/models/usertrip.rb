class Usertrip < ApplicationRecord
  belongs_to :user
  belongs_to :trip

  validates_presence_of :user_id, :trip_id
end
