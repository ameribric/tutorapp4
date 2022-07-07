import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import NewMeeting from './components/NewMeeting'
import MeetingList from './components/MeetingList'
import Sidebar from './components/Sidebar'
import Main from './components/Main'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Sidebar />
      <Main />
      <Home user={user} />
      <Login user={user} setUser={setUser} />

      <main>
        <Switch>
          <Route path="/new">
            <NewMeeting user={user.full_name} />
          </Route>
          <Route path="/">
            <MeetingList />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;