import React, { useState } from "react";

function MeetingList({ meeting, onDeleteMeeting, onUpdateMeeting }) {
  const { id, time, meeting_name, location, student_id, tutor_id } = meeting;

  const [updatedTime, setUpdatedTime] = useState(time);



  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });

    onDeleteMeeting(id);
  }

  function handleTimeFormSubmit(e) {
    e.preventDefault();
    fetch(`meetings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time: updatedTime }),
    })
      .then((r) => r.json())
      .then((updatedMeeting) => {
        onUpdateMeeting(updatedMeeting);
      });
  }

  return (
    <li className="card">
      <h4>{time}</h4>
      <h4>{meeting_name}</h4>
      <h4>{location}</h4>
      <h4>{student_id}</h4>
      <h4>{tutor_id}</h4>
 
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handleTimeFormSubmit}>
        <input
          type="text"
          placeholder="New time..."
          value={updatedTime}
          onChange={(e) => setUpdatedTime(e.target.value)}
        />
        <button type="submit">Update Time</button>
      </form>
    </li>
  );
}

export default MeetingList;