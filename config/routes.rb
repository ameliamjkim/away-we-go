Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :homepages, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :show, :create]
      resources :users, only: [:index]
      resources :usertrips, only: [:index, :show, :create]
    end
  end

  get "/", to: "homes#index"
  get "/trips/:id", to: "homes#index"
end
