// import { students } from './data/students'; 
// import StudentDirectory from './components/StudentDirectory'; 
// export default function App() { 
//  return <StudentDirectory students={students} />; 
// } 

import { useState } from 'react';
import { students } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(students);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'deansLister' | 'probation'

  // TODO 1: handleAddStudent(newStudent)
  const handleAddStudent = (newStudent) => {
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents((prev) => [...prev, studentWithId]);
  };

  // TODO 2: visibleStudents
  const visibleStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesStatus = true;
    if (statusFilter === 'deansLister') {
      matchesStatus = student.gwa <= 1.75;
    } else if (statusFilter === 'probation') {
      matchesStatus = student.status === 'On Probation';
    }

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h1>Student Directory</h1>
      {/* TODO 3: pass handleAddStudent */}
      <StudentForm onAdd={handleAddStudent} />
      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />
      {/* TODO 4: pass visibleStudents, NOT students */}
      <StudentDirectory students={visibleStudents} />
    </div>
  );
}