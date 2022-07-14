import React, { useState } from "react";
import "./MeetingList.css";

function MeetingItem(props) {
  console.log(props.meeting);
  const [updatedTime, setUpdatedTime] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { meeting, onDeleteMeeting, onUpdateMeeting } = props;
  function handleDeleteClick(id) {
    return () => {
      fetch(`meetings/${id}`, {
        method: "DELETE",
      });
      onDeleteMeeting(id);
    };
  }

  function handleUpdateTimeSubmit(id) {
    return (e) => {
      e.preventDefault();
      setIsSubmiting(true);
      fetch(`meetings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ time: updatedTime }),
      }).then(() => {
        setIsSubmiting(false);
        onUpdateMeeting();
      });
    };
  }

  return (
    <li className="card" key={meeting.id}>
      <h4>{meeting.time}</h4>
      <h4>{meeting.meeting_name}</h4>
      <h4>{meeting.location}</h4>
      <h4>{meeting.student_id}</h4>
      <h4>{meeting.tutor_id}</h4>

      <button onClick={handleDeleteClick(meeting.id)}>Delete</button>
      <form onSubmit={handleUpdateTimeSubmit(meeting.id)}>
        <input
          min="00:00"
          max="24:00"
          type="time"
          placeholder="New time..."
          value={updatedTime}
          onChange={(e) => setUpdatedTime(e.target.value)}
        />
        <button type="submit" disable={isSubmiting}>
          {isSubmiting ? "Submitting..." : "Update Time"}
        </button>
      </form>
    </li>
  );
}

function MeetingList({ meetings, onDeleteMeeting, onUpdateMeeting }) {
  return (
    <ul className="meeting-list-header">
      <u>
        <strong>List of Meetings:</strong>
      </u>
      {meetings.map((meeting) => (
        <MeetingItem
          key={meeting.id}
          meeting={meeting}
          onDeleteMeeting={onDeleteMeeting}
          onUpdateMeeting={onUpdateMeeting}
        />
      ))}
    </ul>
  );
}

export default MeetingList;
