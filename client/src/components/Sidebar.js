import TutorList from './TutorList'
import StudentList from './StudentList'
import './Sidebar.css';

function Sidebar({ tutors, setTutors, students, setStudents}) {

 
return (
    <>
    <TutorList tutors={tutors} setTutors={setTutors}/>
    <StudentList students={students} setStudents={setStudents} />

    <div className="sidebar">
        {/* Hello, from Sidebar! */}
    </div>
    
    </>
);
}

export default Sidebar;