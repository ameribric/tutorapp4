import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function StudentLogin({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/studentlogin", {
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
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Student Login</h1>
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
        Don't have an account? <Link to="/signup/tutor">Signup</Link>
        <br></br>
        Not a student? Login in as a <Link to="/login/tutor">tutor</Link>
      </form>
    </div>
  );
}

export default StudentLogin;
