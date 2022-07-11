class UsersController < ApplicationController
    # before_action :authorize, only: [:create]

    def show
      tutor = Tutor.find_by(id: session[:user_id])
      student = Student.find_by(id: session[:user_id])
      if tutor
        render json: tutor
      elsif student
        render json: student
      end
    end

    # def show
    #  render json: @current_user
    # end


    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

end
