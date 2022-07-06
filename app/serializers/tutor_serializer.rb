class TutorSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :subject, :price, :rating, :email, :password_digest
end
