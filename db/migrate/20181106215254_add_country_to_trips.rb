class AddCountryToTrips < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :country, :string
  end
end
