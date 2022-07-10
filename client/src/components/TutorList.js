
function TutorItem ({ tutor }) {
    return (
        <div >
           <p> {tutor.full_name} </p>
          <p> {tutor.price} </p> 
        </div>
    )
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