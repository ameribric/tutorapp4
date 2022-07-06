class Tutor < ApplicationRecord
    has_many :meetings
    has_many :students, through: :meetings

    validates :email, presence: true
    validates :email, uniqueness: true
    # validates :password_digest
end
