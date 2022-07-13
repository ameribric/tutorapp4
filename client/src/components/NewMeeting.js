import React, { useState } from "react";
import './NewMeeting.css';

function NewMeeting({ onAddMeeting }) {
  const [time, setTime] = useState("");
  const [meeting_name, setMeeting_name] = useState("");
  const [location, setLocation] = useState("");
  const [student_id, setStudent_id] = useState(null)
  const [tutor_id, setTutor_id] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/meetings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: time,
        meeting_name: meeting_name,
        location: location,
        student_id: student_id,
        tutor_id: tutor_id,
      }),
    })
      .then((r) => r.json())
      .then((newMeeting) => onAddMeeting(newMeeting));
  }

  return (
    <div className="new-meeting-form">
      <u>
        <h2>Add a New Meeting:</h2>
      </u>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="time"
          placeholder="Time of meeting"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          name="meeting name"
          placeholder="Meeting name"
          value={meeting_name ||''}
          onChange={(e) => setMeeting_name(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          name="meeting location"
          placeholder="Meeting location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          name="student_id"
          placeholder="student_id"
          value={student_id}
          onChange={(e) => setStudent_id(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          name="tutor_id"
          placeholder="tutor_id"
          value={tutor_id}
          onChange={(e) => setTutor_id(e.target.value)}
        />
        <br></br>
        <button type="submit">Add Meeting</button>
      </form>
    </div>
  );
}

export default NewMeeting;