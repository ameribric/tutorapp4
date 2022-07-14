class Tutor < ApplicationRecord
    has_many :meetings
    has_many :students, through: :meetings
    has_secure_password

    validates :full_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :password, presence: true
    validates :subject, presence: true
    validates :price, presence: true
    validates :rating, presence: true

end
