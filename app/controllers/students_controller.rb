class StudentsController < ApplicationController
     # skip_before_action :authorized, only: [:studentlogin]

    def index
        students = Student.all
        render json: students
    end

    def show
        student = Student.find(params[:id])
        render json: student
    end

    def create
        student = Student.create!(student_params)
        if student
            render json: student
        else
            render json: {message: "Failed to create student"}
        end
    end

    def update
        student = Student.find(params[:id])
        student.update!(student_params)
        render json: student
    end

    def destroy
        student = Student.find(params[:id])
        student.destroy
        head :no_content
    end

    def showingstudent
        student = Student.find_by(id: session[:user_id])
        render json: student
    end

    def studentlogin 
        student = Student.find_by(email: params[:email])
      if student&.authenticate(params[:password])
          session[:user_id] = student.id
          render json: student, status: 200
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
      end    
    end

    def studentlogout
        session.delete :user_id
        head :no_content
    end

    private

    def student_params
        params.permit(:full_name, :email, :password)
    end

end
