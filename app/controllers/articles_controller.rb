class ArticlesController < ApplicationController
	before_action :authenticate_user!, except: [:show, :index]
	before_action :set_article, except: [:index, :new, :create]
	#before_action :authenticate_editor!, only: [:new, :create, :update]
	before_action :authenticate_admin!, only: [:destroy, :publish]

	#En Index se muestran todos los articulos
	def index
		article = params[:article_search]

		@articles = Article.publisheds.search(article).paginate(page: params[:page], per_page: 9) #.lastest (para más recientes primero)
		@article = Article.new
	end

	def show
	 	@article.update_visits_count
	 	@comment = Comment.new
	end

	 def new
	 	@article = Article.new
	end

	def edit
	end

	def create
	 	@article = current_user.articles.new(article_params)
	 	@article.categories = params[:categories]
		 	if @article.save
	 		flash[:notice] = "Article created successfully"
	 		redirect_to @article
	 	else
	 		render :new
	 	end
	end

	def destroy
	 	@article.destroy
	 	flash[:notice] = "Article deleted successfully"
	 	redirect_to articles_path
	end

	def update
	 	if @article.update(article_params)
	 		flash[:notice] = "Article updated successfully"
	 		redirect_to @article
	 	else
	 		render :edit
	 	end		
	end

	def publish
		@article.publish!
		flash[:notice] = "Published successfully"
		redirect_to :dashboard	
	end

	def unpublish
		@article.unpublish!
		flash[:notice] = "Unpublished successfully"
		redirect_to :dashboard	
	end

	private
	def set_article
	 	@article = Article.find(params[:id])		
	end

 	def article_params
 		params.require(:article).permit(:title, :body, :cover, :categories)
 	end

end