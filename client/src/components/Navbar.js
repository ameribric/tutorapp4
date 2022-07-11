import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function NavBar({ user, setUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null); 
        
      }
    });
  }

  return (
    <header>
      <strong>Welcome to Tutor App!</strong>
      <br></br>
      <div className="logout">
        <Link to="/logout" exact>
          Logout
        </Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link className="signup" to="/signup">
              Signup
            </Link>
            <br></br>
            <Link className="login" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;