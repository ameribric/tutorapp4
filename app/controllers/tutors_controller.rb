class TutorsController < ApplicationController
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
        render json: tutor
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

    private
    def tutor_params
        params.permit(:full_name, :subject, :price, :rating, :email, :password_digest)
    end

end
