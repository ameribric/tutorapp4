
student1 = Student.create!(full_name: "Amer Ibric", email: "ameribric@yahoo.com", password: "hehe")
student1 = Student.create!(full_name: "Roger Cornfield", email: "rogerc@yahoo.com", password: "haha")

tutor1 = Tutor.create!(full_name: "Dr.Albert Einstein", subject: "Physics", price: 80, rating: 5, email: "alberteinstein@aol.com", password: "Iamagenius1")
tutor2 = Tutor.create!(full_name: "Robin Williams", subject: "Psycology", price: 70, rating: 5, email: "rwilliams@gmail.com", password: "Ilovepsych1")

meeting1 = Meeting.create!(time: "11:30AM", meeting_name: "Chemistry Session", location: "Times Square", student_id: 1, tutor_id: 1)
meeting2 = Meeting.create!(time: "9:30AM", meeting_name: "Biology Session", location: "Koreatown", student_id: 2, tutor_id: 2)
