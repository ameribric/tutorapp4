import React, { useState } from "react";

function TutorSignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [subject, setSubject] = useState("");
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/tutors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        email,
        password,
        subject,
        price,
        rating
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
        <h1>Tutor Sign Up</h1>
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
          id="email4"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="">Password</label>
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
          type="text"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br></br>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <br></br>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default TutorSignUp;
