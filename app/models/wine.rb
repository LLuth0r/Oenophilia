class Wine < ApplicationRecord
    belongs_to :user
    belongs_to :vineyard
    accepts_nested_attributes_for :vineyard
end
