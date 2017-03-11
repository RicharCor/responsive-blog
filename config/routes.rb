Rails.application.routes.draw do

	root 'messages#index'

	resources :categories

	resources :articles do
  		resources :comments, only: [:create, :destroy]
	end

	devise_for :users 
	resources :users, only: [:index, :show, :destroy]

	resources :messages

	get "/dashboard", to: "welcome#dashboard"

	put "/articles/:id/publish", to: "articles#publish"
	put "/articles/:id/unpublish", to: "articles#unpublish"

	mount ActionCable.server => '/cable'
end
