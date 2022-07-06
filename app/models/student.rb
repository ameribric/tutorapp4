class Student < ApplicationRecord
    has_many :meetings
    has_many :tutors, through: :meetings

    validates :email, presence: true
    validates :email, uniqueness: true
    # validates :password_digest
end
