
import React, { useEffect } from "react";
function TutorList({allTutors, tutors, setTutors}) {
    // const { id, full_name, subject, price, rating } = tutor;


  useEffect(() => {
    fetch("/tutors")
      .then((r) => r.json())
      .then((tutors) => {
        setTutors(tutors);
      });
  }, [setTutors]);



 
  return (
    <section>
      <h1>List of tutors:</h1>
      <ul>{allTutors}</ul>
    </section>
  );
}




export default TutorList;