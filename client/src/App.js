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


function App() {
  const [user, setUser] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
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

  function handleAddMeeting(newMeeting) {
    const updatedMeetingsArray = [...meetings, newMeeting];
    setMeetings(updatedMeetingsArray);
  }

  function handleDeleteMeeting(id) {
    const updatedMeetingsArray = meetings.filter((meeting) => meeting.id !== id);
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

  const displayedMeetings = meetings.filter((meeting) => {
    return meeting.meeting_name.toLowerCase().includes(searchTerm.toLowerCase());
  });



  // if (user) return <Login onLogin={setUser} />

  return (
    <>
      <Navbar user={user} setUser={setUser} /> 
      <Sidebar />
      <Main />
      <Home user={user} /> 
      <Login />
      <Signup setUser={setUser} />
      <NewMeeting onAddMeeting={handleAddMeeting}/>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <MeetingList 
      meetings={displayedMeetings} 
      onDeleteMeeting={handleDeleteMeeting} 
      onUpdateMeeting={handleUpdateMeeting}
      />

      <div>
       <Switch>
          <Route path="/new">
            <NewMeeting user={user} handleAddMeeting={handleAddMeeting}/>
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