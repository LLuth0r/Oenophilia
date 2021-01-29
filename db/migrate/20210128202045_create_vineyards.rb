class CreateVineyards < ActiveRecord::Migration[6.1]
  def change
    create_table :vineyards do |t|
      t.string :wine_region
      t.string :location
      t.string :name

      t.timestamps
    end
  end
end
