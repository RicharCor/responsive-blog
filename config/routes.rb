Rails.application.routes.draw do

  resources :friendships
	resources :categories
		resources :articles do
  			resources :comments, only: [:create, :destroy]
	end

	devise_for :users 
	resources :users, only: [:index, :show, :destroy]

	root 'welcome#index'

	get "/dashboard", to: "welcome#dashboard"

	put "/articles/:id/publish", to: "articles#publish"
	put "/articles/:id/unpublish", to: "articles#unpublish"

end
