class AddColumnStateToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :state, :string, default: "in_public"
  end
end
