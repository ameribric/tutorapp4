class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    def create
      student = Student.find_by(email: params[:email])
      tutor = Tutor.find_by(email: params[:email])
  
      if student&.authenticate(params[:password])
          session[:user_id] = student.id
          render json: student, status: 200
        elsif tutor&.authenticate(params[:password])
          session[:user_id] = tutor.id
          render json: tutor, status: 200
        else
          render json: { error: 'Invalid email or password' }, status: 401
      end
    end

      def destroy
        session.delete :user_id
        head :no_content
      end
end
