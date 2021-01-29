class CreateWines < ActiveRecord::Migration[6.1]
  def change
    create_table :wines do |t|
      t.integer :vintage
      t.string :type
      t.string :varietal
      t.integer :price_min
      t.integer :price_max
      t.string :region
      t.integer :size
      t.references :user, null: false, foreign_key: true
      t.references :vineyard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
