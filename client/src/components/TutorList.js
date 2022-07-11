import './TutorList.css';

function TutorItem ({ tutor }) {
    return (
      <div className="tutor-item">
        <p> Tutor ID: {tutor.id} </p>
        <p> Tutor Name: {tutor.full_name} </p>
        <p> Subject: {tutor.subject} </p>
        <p> Price: ${tutor.price} </p>
        <p> Rating: {tutor.rating} </p>
        <br></br>
      </div>
    );
}
function TutorList({ tutors }) {
    // const { id, full_name, subject, price, rating } = tutor;






 
  return (
    <section>
      <u>
        <h1>List of tutors:</h1>
      </u>
      <ul>
        {tutors.map((tutor) => (
          <TutorItem key={tutor.id} tutor={tutor} />
        ))}
      </ul>
    </section>
  );
}




export default TutorList;