import React, { useState } from "react";


function StudentLogin({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        r.json().then((user) => setUser(user));
       window.location.replace("http://localhost:4000/main");
      }
    });
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
      </form>
    </div>
  );
}

export default StudentLogin;