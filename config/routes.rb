Rails.application.routes.draw do

  resources :tutors
  resources :students
  resources :meetings

  # Student signup is in the form of create in students_controller
  get "/me", to: "students#showingstudent"
  post "/studentlogin", to: "students#studentlogin"
  delete "/studentlogout", to: "students#studentlogout"


  # Tutor signup is in the form of create in tutors_controller
  get "/me", to: "tutors#showingtutor"
  post "/tutorlogin", to: "tutors#tutorlogin"
  delete "/tutorlogout", to: "tutors#tutorlogout"



  get "/meetings", to: "meetings#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
