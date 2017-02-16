class WelcomeController < ApplicationController
	before_action :authenticate_admin!, only: [:dashboard]

	def dashboard
		user = params[:user_search]
		category = params[:category_search]

		@articles = Article..search(params[:article_search])
		@users = User.search(user)
		@categories = Category.search(category)
		@article = Article.new
	end
end