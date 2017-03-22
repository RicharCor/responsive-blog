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

	devise_for :users, :controllers => { :registrations => :registrations }
	resources :users, only: [:index, :show, :destroy]

	# Con esto se puede acceder a la vista del usuario. Ej: http://localhost:3000/1 (Id del primer usuario)
		#get '/:id', to: 'users#show'

	get "/dashboard", to: "welcome#dashboard"

	put "/articles/:id/publish", to: "articles#publish"
	put "/articles/:id/unpublish", to: "articles#unpublish"

	mount ActionCable.server => '/cable'
end
