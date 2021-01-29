class AddVarietal < ActiveRecord::Migration[6.1]
  def change

    change_table :wines do |t|
      t.string :varietal

    end
  end
end
