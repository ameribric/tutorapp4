import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function StudentLogout({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
     
      <div className="studentlogout">
        <Link to="/studentlogout" exact>
          Student Logout
        </Link>
      </div>
      <div>
          <button onClick={handleLogoutClick}>Logout</button>
    
      </div>
    </header>
  );
}
export default StudentLogout;
