class UsersController < ApplicationController
    # before_action :authorize, only: [:show]

    def show
      tutor = Tutor.find_by(id: session[:user_id])
      student = Student.find_by(id: session[:user_id])
      if tutor
        render json: tutor
      elsif student
        render json: student
      end
    end

end
