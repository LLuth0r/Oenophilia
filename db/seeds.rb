# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Wine.destroy_all
Vineyard.destroy_all
Message.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@message_1 = Message.create!(subject: 'Dom Perignon', body: 'Interested in your 2001 bottle of Dom', user: @admin)
puts "#{Message.count} messages created"

@willamette_valley = Vineyard.create!(wine_region: 'Willamette Valley', location: 'New York', vineyard_name: 'Ridgecrest Estate')
@finger_lakes = Vineyard.create!(wine_region: 'Finger Lakes', location: 'New York', vineyard_name: 'Treleaven')
puts "#{Vineyard.count} vineyards created"

@loveblock_marlborough = Wine.create!(vintage: 2019, name: 'Loveblock Marlborough', category: 'Red', varietal: 'Savignon Blanc', price_min: 50, price_max: 100, size: 750, user: @admin, vineyard: @willamette_valley)
@treleaven = Wine.create!(vintage: 2019, name: 'Treleaven', category: 'Red', varietal: 'Cabernet', price_min: 100, price_max: 200, size: 500, user: @admin, vineyard: @finger_lakes)
@ridgecrest_estate = Wine.create!(vintage: 2010, name: 'Ridgecrest Estate Veltliner', category: 'Red', varietal: 'Riesling', price_min: 15, price_max: 45, size: 750, user: @admin, vineyard: @willamette_valley)
puts "#{Wine.count} wines created"

@admin.wines.push(@loveblock_marlborough, @treleaven, @ridgecrest_estate)
@admin.messages.push(@message_1)
