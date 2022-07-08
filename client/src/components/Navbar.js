import Search from './Search'
import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar({ user, setUser, searchTerm, onSearchChange }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
        <Search searchTerm={searchTerm} onSearchChange={onSearchChange}/>
      <div>
        <NavLink to="/logout" exact>Logout</NavLink>
        <NavLink to="/search" exact>Search</NavLink>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;