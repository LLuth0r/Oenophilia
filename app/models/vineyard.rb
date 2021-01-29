class Vineyard < ApplicationRecord
    has_many :wines
    belongs_to :user
end
