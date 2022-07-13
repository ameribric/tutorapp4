import TutorList from './TutorList'
import './Sidebar.css';

function Sidebar({ tutors, setTutors }) {

 
return (
    <>
    <TutorList tutors={tutors} setTutors={setTutors}/>


    <div className="sidebar">
        {/* Hello, from Sidebar! */}
    </div>
    
    </>
);
}

export default Sidebar;