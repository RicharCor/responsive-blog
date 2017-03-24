class UsersController < ApplicationController
	before_action :set_user, only: [:show, :private, :unprivate]
	before_action :authenticate_user!, except: [:show, :index]
  
  	def index
        user = params[:user_search]
        @users = User.search(user)
        @onlines = User.where('last_seen > ?', 5.minutes.ago) 
 	end

    def show
        @articles = @user.articles
        @artiicles= Article.all
        @comments = @user.comments
        @chatrooms = @user.chatrooms
	end

	def destroy
	    User.friendly.find(params[:id]).destroy
	    flash[:notice] = "User deleted successfully"
	    redirect_to users_url
  	end

    def private
        @user.private!
        flash[:notice] = "Tu perfíl el privado haora"
        redirect_to :back     
    end 

    def unprivate
        @user.unprivate!   
        flash[:notice] = "Tu perfíl es público haora"
        redirect_to :back  
    end

   	private

    def set_user
        @user = User.friendly.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:avatar, :first_name, :last_name, :username, :email, :password, :password_confirmation, :remember_me, :slug)
    end
end
