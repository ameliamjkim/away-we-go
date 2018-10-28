class CreateUsertrips < ActiveRecord::Migration[5.2]
  def change
    create_table :usertrips do |t|
      t.belongs_to :trip, null: false
      t.belongs_to :user, null: false
    end
  end
end
