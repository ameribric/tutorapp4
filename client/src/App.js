import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import NewMeeting from './components/NewMeeting'
import MeetingList from './components/MeetingList'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Search from './components/Search'


function App() {
  const [user, setUser] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tutors, setTutors] = useState([]);




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // useEffect(() => {
  //   // fetch("/signup").then((r) => {
  //   //   if (r.ok) {
  //   //     r.json().then((user) => setUser(user));
  //   //   }
  //   // });
  // }, []);

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



  // if (user) return <Login onLogin={setUser} />

  return (
    <>
      <Navbar />
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
      <Signup setUser={setUser} />
      <NewMeeting onAddMeeting={handleAddMeeting} />
      <Navbar />
      <MeetingList
        onDeleteMeeting={handleDeleteMeeting}
        onUpdateMeeting={handleUpdateMeeting}
        meetings={meetings}
      />

      <div>
        <Switch>
          <Route path="/new">
            <NewMeeting user={user} handleAddMeeting={handleAddMeeting} />
          </Route>
          <Route path="/meetinglist">
            <MeetingList />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default App;