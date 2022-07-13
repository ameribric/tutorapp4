import "./StudentList.css";

function StudentItem({ student }) {
  return (
    <div className="student-item">
      <p> Student ID: {student.id} </p>
      <p> Student Name: {student.full_name} </p>
      <br></br>
    </div>
  );
}

function StudentList({ students }) {
    console.log(students);
  // const { id, full_name, subject, price, rating } = tutor;

  return (
    <section>
      <u>
        <h1>List of students:</h1>
      </u>
      <ul>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </ul>
    </section>
  );
}

export default StudentList;
