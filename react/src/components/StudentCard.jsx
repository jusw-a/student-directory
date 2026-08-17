import StudentCard from './StudentCard';

export default function StudentDirectory({ students = [] }) {
  // Use optional chaining (?.) or default array fallback
  if (!students || students.length === 0) {
    return <p className="no-students">No students match your search or filter.</p>;
  }

  return (
    <div className="student-directory">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}