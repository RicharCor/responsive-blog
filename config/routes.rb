Rails.application.routes.draw do

	root 'chatrooms#index'

  	resources :chatrooms do
  		resource :chatroom_users
  		resources :messages
  	end

	resources :categories

	resources :articles do
  		resources :comments, only: [:create, :destroy]
	end

	devise_for :users 
	resources :users, only: [:index, :show, :destroy]

	get "/dashboard", to: "welcome#dashboard"

	put "/articles/:id/publish", to: "articles#publish"
	put "/articles/:id/unpublish", to: "articles#unpublish"

	mount ActionCable.server => '/cable'
end
