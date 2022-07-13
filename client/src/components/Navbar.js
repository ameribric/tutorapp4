import React from "react";
import { Link, useNavigate} from "react-router-dom";
import './Navbar.css';

function NavBar({ user, setUser}) {
const navigate = useNavigate()
  function handleLogoutClick() {
    console.log(user)
    user.rating ?
    (fetch("/tutorlogout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null); 
        window.localStorage.removeItem("user");
        setUser(null);
        navigate("/login/tutor");
      }
    }))
    :
    (fetch("/studentlogout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
         window.localStorage.removeItem("user");
         setUser(null);
         navigate("/login/student");
      }
    }))
  }

  return (
    <header>
      <strong className="app-header">Welcome to Tutor App!</strong>
      <br></br>
      <br></br>

      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link className="studentsignup" to="/studentsignup">
              Student Signup
            </Link>
            <br></br>
            <Link className="studentlogin" to="/studentlogin">
              Student Login
            </Link>
            <br></br>
            <Link className="studentlogout" to="/studentlogout">
              Student Logout
            </Link>
            <br></br>
            <br></br>
            <Link className="tutorsignup" to="/tutorsignup">
              Tutor Signup
            </Link>
            <br></br>
            <Link className="tutorlogin" to="/tutorlogin">
              Tutor Login
            </Link>
            <br></br>
            <Link className="tutorlogout" to="/tutorlogout">
              Tutor Logout
            </Link>
            <br></br>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;