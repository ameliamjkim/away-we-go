class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :description
      t.belongs_to :trip
      t.belongs_to :user
      t.boolean :completed, default: false, null: false
      t.timestamps null: false
    end
  end
end
