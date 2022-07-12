class Meeting < ApplicationRecord
    belongs_to :student
    belongs_to :tutor

    # validates :time, presence: true
    # validates :location, presence: true
end
