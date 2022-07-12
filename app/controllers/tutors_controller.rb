class TutorsController < ApplicationController
        # skip_before_action :authorized, only: [:tutorlogin]

    def index
        tutors = Tutor.all
        render json: tutors
    end

    def show
        tutor = Tutor.find(params[:id])
        render json: tutor
    end

    def create
        tutor = Tutor.create!(tutor_params)
        if tutor
            render json: tutor
        else
            render json: {message: "Falied to create tutor"}
        end
    end

    def update
        tutor = Tutor.find(params[:id])
        tutor.update!(tutor_params)
        render json: tutor
    end

    def destroy
        tutor = Tutor.find(params[:id])
        tutor.destroy
        head :no_content
    end

    def showingtutor
        tutor = Tutor.find_by(id: session[:user_id])
        render json: tutor
    end

     def tutorlogin 
        tutor = Tutor.find_by(email: params[:email])
      if tutor&.authenticate(params[:password])
          session[:user_id] = tutor.id
          render json: tutor, status: 200
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
      end    
    end

    def tutorlogout
         session.delete :user_id
        head :no_content
    end

  
    private
    def tutor_params
        params.permit(:full_name, :subject, :price, :rating, :email, :password, :password_confirmation)
    end

end
