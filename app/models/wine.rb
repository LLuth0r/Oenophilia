class Wine < ApplicationRecord
    belongs_to :user
    belongs_to :vineyard
    # accepts_nested_attributes_for :vineyard

    # def vineyards_attributes=(vineyard_attributes)
    #     vineyard_attributes.values.each do |vineyard_attribute|
    #         vineyard = Vineyard.find_or_create_by(vineyard_attribute)
    #         self.vineyards << vineyard
    #     end
    # end
end
