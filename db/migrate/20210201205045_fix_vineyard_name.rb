class FixVineyardName < ActiveRecord::Migration[6.1]
  def change

    change_table :vineyards do |t|
      t.remove :name
      t.string :vineyard_name
    end
  end
end
