import React from "react";

function TutorLogout({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/tutorlogout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div className="tutorlogout">
       
      </div>

      <div>
        <button onClick={handleLogoutClick}>Tutor Logout</button>
      </div>
    </header>
  );
}
export default TutorLogout;
