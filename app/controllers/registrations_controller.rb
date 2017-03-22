class RegistrationsController < Devise::RegistrationsController

  	protected

    def after_update_path_for(resource)
    	flash[:notice] = "Tu cuenta se actualizó exitosamente"
      	user_path(resource)
    end
end