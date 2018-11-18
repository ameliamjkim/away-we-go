Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :homepages, only: [:index]

  resources :users, only: [:search] do
    get 'search', on: :collection
  end

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :show, :create, :destroy]
      resources :users, only: [:index, :show, :create, :destroy]
      resources :todos, only: [:index, :show, :create, :update]
      resources :usertrips, only: [:index, :show, :create, :destroy]
      resources :messages, only: [:show]
      resources :weather, only: [:index]
    end
  end

  get "/", to: "homes#index"
  get "/trips", to: "homes#index"
  get "/trips/:id", to: "homes#index"
  get "/users/:id", to: "homes#index"
  get "/trips/:id/chats", to: "homes#index"
  get "/trips/:id/todos", to: "homes#index"

end
