import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import StudentLogin from './components/StudentLogin'
import StudentLogout from "./components/StudentLogout";
import TutorLogout from "./components/TutorLogout";
import TutorLogin from "./components/TutorLogin";
import StudentSignup from './components/StudentSignup'
import TutorSignup from "./components/TutorSignup";
import Navbar from './components/Navbar'
import NewMeeting from './components/NewMeeting'
import MeetingList from './components/MeetingList'
import Sidebar from './components/Sidebar'
// import Main from './components/Main'
import Search from './components/Search'
import ProtectedRoute from "./components/ProtectedRoute";

function Main({tutors, setTutors, searchTerm, setSearchTerm}) {
  console.log( "hello");
  return (
    <>
      <Navbar />
      <Search
        tutors={tutors}
        setTutors={setTutors}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Sidebar tutors={tutors} setTutors={setTutors} />
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tutors, setTutors] = useState([]);

  // const [homeTutor, setHomeTutor] = useState(null);
  // const [homeStudent, setHomeStudent] = useState(null);
    /* <Home homestudent={homeStudent} homeTutor={homeTutor}/> */
  

  useEffect(() => {
    // auto-login
    fetch("/mestudent").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          setUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/metutor").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          setUser(user);
        });
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
        console.log(tutors);
        setTutors(tutors);
      });
  }, []);

  function handleAddMeeting(newMeeting) {
    const updatedMeetingsArray = [...meetings, newMeeting];
    setMeetings(updatedMeetingsArray);
  }

  function handleDeleteMeeting(id) {
    const updatedMeetingsArray = meetings.filter(
      (meeting) => meeting.id !== id
    );
    console.log(updatedMeetingsArray, id);
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
      <Routes>
        <Route
          path="/main"
          element={
            <ProtectedRoute user={user}>
              <Home user={user} />

              <Main
                tutors={displayedTutors}
                setTutors={setTutors}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              <MeetingList
                onDeleteMeeting={handleDeleteMeeting}
                onUpdateMeeting={handleUpdateMeeting}
                meetings={meetings}
              />
              <NewMeeting onAddMeeting={handleAddMeeting} />
            </ProtectedRoute>
          }
        />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentlogout" element={<StudentLogout />} />
        <Route
          path="/studentsignup"
          element={<StudentSignup setUser={setUser} />}
        />

        <Route path="/tutorlogin" element={<TutorLogin />} />
        <Route path="/tutorlogout" element={<TutorLogout />} />
        <Route
          path="/tutorsignup"
          element={<TutorSignup setUser={setUser} />}
        />

        <Route path="/newmeeting" element={<NewMeeting />} />
        <Route
          path="/meetinglist"
          element={
            <MeetingList
              onDeleteMeeting={handleDeleteMeeting}
              onUpdateMeeting={handleUpdateMeeting}
              meetings={meetings}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;