class RemoveType < ActiveRecord::Migration[6.1]
  def change

    change_table :wines do |t|
      t.remove :type

    end
  end
end
