class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_categories

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def authenticate_editor!
      redirect_to root_path unless user_signed_in? && current_user.is_editor?
    end

    def authenticate_admin!
      redirect_to root_path unless user_signed_in? && current_user.is_admin?
    end

	  def configure_permitted_parameters
	  	devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:avatar, :first_name, :last_name, :username, :email, :password, :remember_me)}
	  	devise_parameter_sanitizer.permit(:sign_in) { |u| u.permit(:email, :password, :remember_me)}
	  	devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:avatar, :first_name, :last_name, :username, :email, :password, :password_confirmation, :current_password, :remember_me, :slug)}
	  end

    private

    	def set_categories
    		@categories = Category.all
    	end

end
