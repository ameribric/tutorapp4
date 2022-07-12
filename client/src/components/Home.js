function Home({user}) {
    if (user) {
        return <h1>Welcome, {user.full_name}!</h1>;
        
      } else {
        return (
          <u>
            <h1>Please Login or Sign Up:</h1>
          </u>
        );
      }
    }
    
export default Home;

// function Home({homeStudent, homeTutor}) {
//     if (student) {
//        <h1>Welcome, {homeStudent.full_name}!</h1>;
//      } else if (tutor){
//       <h1>Welcome, {homeTutor.full_name} </h1>
//         }
//       } else {
//             <h1>Please Login or Sign Up:</h1>
//         );
//       }
    