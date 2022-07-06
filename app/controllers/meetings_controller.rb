class MeetingsController < ApplicationController

    def index
        meetings = Meeting.all
        render json: meetings
    end

    def show
        meeting = Meeting.find(params[:id])
        render json: meeting
    end

    def create
        meeting = Meeting.create!(meeting_params)
        render json: meeting
    end

    def update
        meeting = Meeting.find(params[:id])
        meeting.update!(meeting_params)
        render json: meeting
    end

    def destroy
        meeting = Meeting.find(params[:id])
        meeting.destroy
        head :no_content
    end
    
    private 
    
    def meeting_params
        params.permit(:time, :meeting_name, :location, :student_id, :tutor_id)
    end

end
