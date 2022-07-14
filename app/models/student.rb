class Student < ApplicationRecord
    has_many :meetings
    has_many :tutors, through: :meetings
    has_secure_password
    
    validates :email, presence: true
    validates :email, uniqueness: true
    # validates :password_digest
end
