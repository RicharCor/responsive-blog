class WelcomeController < ApplicationController
	before_action :authenticate_admin!, only: [:dashboard]

	def dashboard
		user = params[:user_search]
		category = params[:category_search]

		@articls = Article.paginate(page: params[:articles_page], per_page: 5).search(params[:article_search])
		@useres = User.paginate(page: params[:users_page], per_page: 1).search(user)
		@categoris = Category.paginate(page: params[:categories_page], per_page: 5).search(category)
		@article = Article.new
	end
end