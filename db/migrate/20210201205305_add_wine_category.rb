class AddWineCategory < ActiveRecord::Migration[6.1]
  def change

    change_table :wines do |t|
      t.string :category
    end
  end
end
