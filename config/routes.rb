Rails.application.routes.draw do
  devise_for :users
  root to: 'tweets#index'
  resources :tweets do
    resources :comments, only: :create
    collection do
      get 'search'
    end
  end
  resources :users, only: [:show, :index]
  resources :tweets, only: [:index, :show, :create] do
    resources :likes, only: [:create, :destroy]
  end
end