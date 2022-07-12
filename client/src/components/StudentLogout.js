import React from "react";

function StudentLogout({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/studentlogout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
     
      <div className="studentlogout">
       
      </div>
      <div>
          <button onClick={handleLogoutClick}>Student Logout</button>
    
      </div>
    </header>
  );
}
export default StudentLogout;
