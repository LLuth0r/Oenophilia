class ChangeVineyards < ActiveRecord::Migration[6.1]
  def change
    change_table :vineyards do |t|
      t.remove :wine_region
      t.remove :location
    end
  end
end
