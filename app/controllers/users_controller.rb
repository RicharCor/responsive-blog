class UsersController < ApplicationController
	before_action :set_user, only: [:show]
	before_action :authenticate_user!, except: [:show, :index]
  
  	def index
      user = params[:user_search]

  	  @users = User.search(user)
 	 end

  	def show
 	    @articles = @user.articles
      @comments = @user.comments
	end	

	def destroy
	    User.find(params[:id]).destroy
	    flash[:notice] = "User deleted successfully"
	    redirect_to users_url
  	end

   	private

    def set_user
      @user = User.find(params[:id])
    end
end
