class Trip < ApplicationRecord
  belongs_to :user
  has_many :usertrips
  has_many :users, through: :usertrips

  validates_presence_of :name, :user_id, :start_date, :end_date

end
