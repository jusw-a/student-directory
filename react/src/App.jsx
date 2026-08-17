import { useState } from 'react';
import { initialStudents } from './data/students';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';

export default function App() {
  const [students, setStudents] = useState(initialStudents || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // TODO 1: Immutably add new student with unique ID
  const handleAddStudent = (newStudent) => {
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents((prev) => [...prev, studentWithId]);
  };

  // TODO 2: Compute visibleStudents using safe property access
  const visibleStudents = students.filter((student) => {
    // Fallback to empty string if student.name is missing/null
    const studentName = student?.name ?? '';
    const matchesSearch = studentName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesStatus = true;
    if (statusFilter === 'deansLister') {
      matchesStatus = Number(student?.gwa) <= 1.75;
    } else if (statusFilter === 'probation') {
      matchesStatus = student?.status === 'On Probation';
    }

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h1>Student Directory</h1>
      {/* TODO 3: Pass handleAddStudent prop */}
      <StudentForm onAdd={handleAddStudent} />

      <DirectoryControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      {/* TODO 4: Pass derived visibleStudents array */}
      <StudentDirectory students={visibleStudents} />
    </div>
  );
}