Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :wines
resources :vineyards
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :users


end
