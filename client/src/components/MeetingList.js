import React, { useState } from "react";
import "./MeetingList.css"

function MeetingList({ meetings, onDeleteMeeting, onUpdateMeeting, id }) {
  const [updatedTime, setUpdatedTime] = useState("");

  function handleDeleteClick(id) {
    return () => {
      fetch(`meetings/${id}`, {
        method: "DELETE",
      });
      onDeleteMeeting(id);
    };
  }

  function handleUpdateTimeClick(id) {
    return () => {
      fetch(`meetings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ time: updatedTime }),
      });
      onUpdateMeeting(id)
    }
  }

  function handleTimeFormSubmit(e, id) {
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
    <ul className="meeting-list-header">
      <u>
        <strong>List of Meetings:</strong>
      </u>
      {meetings.map((meeting) => {
        return (
          <li className="card" key={meeting.id}>
            <h4>{meeting.time}</h4>
            <h4>{meeting.meeting_name}</h4>
            <h4>{meeting.location}</h4>
            <h4>{meeting.student_id}</h4>
            <h4>{meeting.tutor_id}</h4>

            <button onClick={handleDeleteClick(meeting.id)}>Delete</button>
            <form onSubmit={handleTimeFormSubmit}>
        <input
          type="text"
          placeholder="New time..."
          value={updatedTime}
          onChange={(e) => setUpdatedTime(e.target.value)}
        />
        <button type="submit" onClick={handleUpdateTimeClick(meeting.id)}>Update Time</button>
      </form>
          </li>
        );
      })}
    </ul>
  );
}

export default MeetingList;