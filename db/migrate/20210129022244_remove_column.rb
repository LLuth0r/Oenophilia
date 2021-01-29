class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
     change_table :wines do |t|
    t.remove :varietal

     end
  end
end
