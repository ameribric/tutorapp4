import React, { useState } from "react";

function StudentSignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        email,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Student Sign Up</h1>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullname1"
          autoComplete="off"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br></br>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email1"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br></br>
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default StudentSignUp;