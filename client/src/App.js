import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import StudentLogin from "./components/StudentLogin";
import TutorLogin from "./components/TutorLogin";
import StudentSignup from "./components/StudentSignup";
import TutorSignup from "./components/TutorSignup";
import Navbar from "./components/Navbar";
import NewMeeting from "./components/NewMeeting";
import MeetingList from "./components/MeetingList";
import Sidebar from "./components/Sidebar";
// import Main from './components/Main'
import Search from "./components/Search";
import ProtectedRoute from "./components/ProtectedRoute";

function Main({
  tutors,
  setTutors,
  students,
  setStudents,
  searchTerm,
  setSearchTerm,
  user,
  setUser,
}) {
  console.log("hello");
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Search
        tutors={tutors}
        setTutors={setTutors}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Sidebar
        tutors={tutors}
        setTutors={setTutors}
        students={students}
        setStudents={setStudents}
      />
    </>
  );
}

function fetchMeetings() {
  return fetch("/meetings").then((r) => r.json());
}

function App() {
  const [user, setUser] = useState(() =>
    JSON.parse(window.localStorage.getItem("user"))
  );
  const [meetings, setMeetings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);
  const [isUserLoading, setIsUserLoading] = useState(true);
  console.log(user, "user");

  useEffect(() => {
    if (!user) {
      const user = JSON.parse(window.localStorage.getItem("user"));
      setUser(user);
      setIsUserLoading(false);
    }
  }, [user, setUser]);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/mestudent").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         console.log(user);
  //         if(!user){
  //           setUser(user);
  //         }
  //       });
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/metutor").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         console.log(user);
  //         setUser(user);
  //         if (!user) {
  //           setUser(user);
  //         }
  //       });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    fetchMeetings().then((meetingsArray) => {
      const sortedMeetings = meetingsArray.sort((meetingA, meetingB) => {
        return new Date(meetingB.time) - new Date(meetingA.time);
      });
      setMeetings(sortedMeetings);
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

  useEffect(() => {
    fetch("/students")
      .then((r) => r.json())
      .then((students) => {
        console.log("students", students);
        setStudents(students);
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

  function handleUpdateMeeting() {
    fetchMeetings().then((meetingsArray) => {
      const sortedMeetings = meetingsArray.sort((meetingA, meetingB) => {
        return new Date(meetingB.time) - new Date(meetingA.time);
      });
      setMeetings(sortedMeetings);
    });
  }

  const displayedTutors = tutors.filter((tutor) => {
    return tutor.full_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (isUserLoading && !user) return <div>Loading...</div>;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute user={user}>
              <Home user={user} />

              <Main
                tutors={displayedTutors}
                setTutors={setTutors}
                students={students}
                setStudents={setStudents}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                user={user}
                setUser={setUser}
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
        <Route path="/login">
          <Route
            index
            element={<StudentLogin user={user} setUser={setUser} />}
          />
          <Route
            path="student"
            element={<StudentLogin user={user} setUser={setUser} />}
          />
          <Route path="tutor" element={<TutorLogin setUser={setUser} />} />
        </Route>
        <Route path="/signup">
          <Route path="student" element={<StudentSignup setUser={setUser} />} />
          <Route path="tutor" element={<TutorSignup setUser={setUser} />} />
        </Route>

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
