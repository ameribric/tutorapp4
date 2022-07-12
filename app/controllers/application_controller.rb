class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  
    # before_action :authorized

   
 
    # def authorized
    #     return render json:{error: "Not authorized"}, status: :unauthorized 
    # end

    # IF I UNCOMMENT ABOVE, I AND DO AN INDEX GET REQUEST FOR ANY OF THE 
    # THINGS IN MY DATABASE, I GET AN ERROR THAT SAYS {error: "Not authorized"}
      
      def render_not_found
          render json: { error: "Not found" }, status: :not_found
      end
      
      def render_invalid(exception)
          render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
      end

end