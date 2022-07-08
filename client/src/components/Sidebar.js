import TutorList from './TutorList'
import { useState } from 'react'

function Sidebar() {
const [tutors, setTutors] = useState([]);

    const allTutors = tutors.map((t) => (
        <TutorList
          key={t.id}
          tutor={t}
        />
      ));

return (
    <>

    <TutorList 
    allTutors={allTutors}
    tutors={tutors}
    setTutors={setTutors}
    />
    <div>
        Hello, from Sidebar!
    </div>
    
    </>
);
}

export default Sidebar;