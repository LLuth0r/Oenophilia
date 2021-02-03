class Vineyard < ApplicationRecord
    has_many :wines
    # accepts_nested_attributes_for :wines

    # def wines_attributes=(wine_attributes)
    #     wine_attributes.values.each do |wine_attribute|
    #         wine = Wine.find_or_create_by(wine_attribute)
    #         self.wines << wine
    #     end
    # end
end
