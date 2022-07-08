// import React, { useState } from "react";

function MeetingList({ meetings, onDeleteMeeting, id}) {
  // const [updatedTime, setUpdatedTime] = useState("");


  //THIS WORKS!!! But not dynamically, racheal said to make sure this below is connected to the backend 
  //by making sure that the get request for meetings is linked to the backend
  
  function handleDeleteClick() {
    fetch(`meetings/${meetings.id}`, {
      method: "DELETE",
    });
    onDeleteMeeting(meetings.id);
  }

  // function handleTimeFormSubmit(e) {
  //   e.preventDefault();
  //   fetch(`meetings/${meeting.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ time: updatedTime }),
  //   })
  //     .then((r) => r.json())
  //     .then((updatedMeeting) => {
  //       onUpdateMeeting(updatedMeeting);
  //     });
  // }

  return (
    <li className="card">
      {/* <h4>{meeting.time}</h4>
      <h4>{meeting.meeting_name}</h4>
      <h4>{meeting.location}</h4>
      <h4>{meeting.student_id}</h4>
      <h4>{meeting.tutor_id}</h4>
  */}
      <button onClick={handleDeleteClick}>Delete</button>
      {/* <form onSubmit={handleTimeFormSubmit}>
        <input
          type="text"
          placeholder="New time..."
          value={updatedTime}
          onChange={(e) => setUpdatedTime(e.target.value)}
        />
        <button type="submit">Update Time</button>
      </form> */}
    </li>
  );
}

export default MeetingList;