class StudentSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest
end
