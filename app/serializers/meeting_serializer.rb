class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :time, :meeting_name, :location, :student_id, :tutor_id
end
