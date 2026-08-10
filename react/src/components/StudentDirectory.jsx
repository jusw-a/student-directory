import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <div className="student-directory">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}