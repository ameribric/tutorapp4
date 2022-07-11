
function TutorItem ({ tutor }) {
    return (
      <div>
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
      <h1>List of tutors:</h1>
      <ul>{tutors.map((tutor) => (
        <TutorItem key={tutor.id} tutor={tutor}/>
      ))}</ul>
    </section>
  );
}




export default TutorList;