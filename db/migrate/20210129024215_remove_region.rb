class RemoveRegion < ActiveRecord::Migration[6.1]
  def change

    change_table :wines do |t|
      t.remove :region
    
    end
  end
end
