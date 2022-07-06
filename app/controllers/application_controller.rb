class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  
    before_action :authorized

   
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    def authorized
        return render json:{error: "Not authorized"}, status: :unauthorized 
      end
      
      def render_not_found
          render json: { error: "Not found" }, status: :not_found
      end
      
      def render_invalid(exception)
          render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
      end

end