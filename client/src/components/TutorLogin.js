import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TutorLogin.css";

function TutorLogin({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/tutorlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);

          window.localStorage.setItem("user", JSON.stringify(user));
          navigate("/main");
        });
      } else {
        r.json().then((user) => {
          setError(user.error);
          console.log(user.error);
        });
      }
    });
  }

  return (
    <div className="tutor-login-container">
      <form onSubmit={handleSubmit}>
        <h1>Tutor Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email2"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password2"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">Login</button>
        <br></br>
        Not a tutor? Login in as a <Link to="/login/student">student</Link>
      </form>
      <br></br>
      <em>{error}</em>
    </div>
  );
}

export default TutorLogin;
