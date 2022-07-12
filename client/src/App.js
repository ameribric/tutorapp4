import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import StudentSignup from './components/StudentSignup'
import TutorSignup from "./components/TutorSignup";
import Navbar from './components/Navbar'
import NewMeeting from './components/NewMeeting'
import MeetingList from './components/MeetingList'
import Sidebar from './components/Sidebar'
// import Main from './components/Main'
import Search from './components/Search'
import ProtectedRoute from "./components/ProtectedRoute";

function Main(props) {
  console.log(props, "hello");
  return (
    <>
      <Navbar />
      <Search
        tutors={props.tutors}
        setTutors={props.setTutors}
        searchTerm={props.searchTerm}
        onSearchChange={props.setSearchTerm}
      />
      <Sidebar tutors={props.tutors} setTutors={props.setTutors} />
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tutors, setTutors] = useState([]);




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
          setUser(user)
        })
      }
    });
  }, []);

 
  useEffect(() => {
    fetch("/meetings")
      .then((r) => r.json())
      .then((meetingsArray) => {
        setMeetings(meetingsArray);
      });
  }, []);

  useEffect(() => {
    fetch("/tutors")
      .then((r) => r.json())
      .then((tutors) => {
        console.log(tutors)
        setTutors(tutors);
      });
  }, []);

  function handleAddMeeting(newMeeting) {
    const updatedMeetingsArray = [...meetings, newMeeting];
    setMeetings(updatedMeetingsArray);
  }

  function handleDeleteMeeting(id) {
    const updatedMeetingsArray = meetings.filter((meeting) => meeting.id !== id);
    console.log(updatedMeetingsArray, id)
    setMeetings(updatedMeetingsArray);
  }

  function handleUpdateMeeting(updatedMeeting) {
    const updatedMeetingsArray = meetings.map((meeting) => {
      if (meeting.id === updatedMeeting.id) {
        return updatedMeeting;
      } else {
        return meeting;
      }
    });
    setMeetings(updatedMeetingsArray);
  }

  const displayedTutors = tutors.filter((tutor) => {
    return tutor.full_name.toLowerCase().includes(searchTerm.toLowerCase());
  });



  // if (!user) return null

  return (
    <div>
      {/* <Navbar />
      <Search
        tutors={displayedTutors}
        setTutors={setTutors}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Sidebar tutors={displayedTutors} setTutors={setTutors} />

      <Main />
      <Home user={user} />
      <Login />
      <StudentSignup setUser={setUser} />
      <TutorSignup setUser={setUser} />
      <NewMeeting onAddMeeting={handleAddMeeting} />
      <Navbar />
      <MeetingList
        onDeleteMeeting={handleDeleteMeeting}
        onUpdateMeeting={handleUpdateMeeting}
        meetings={meetings}
      /> */}
      <div>
        <Routes>
          {/* <Route path="/new">
            <NewMeeting user={user} handleAddMeeting={handleAddMeeting} />
          </Route>
          <Route path="/meetinglist">
            <MeetingList /> */}
          {/* </Route> */}

          <Route
            path="/main"
            element={
              <ProtectedRoute user={user}>
                <Main
                  tutors={displayedTutors}
                  setTutors={setTutors}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </ProtectedRoute >
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;