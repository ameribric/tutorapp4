import TutorList from './TutorList'

function Sidebar({ tutors, setTutors }) {

 
return (
    <>
    <TutorList tutors={tutors} setTutors={setTutors}/>


    <div>
        Hello, from Sidebar!
    </div>
    
    </>
);
}

export default Sidebar;