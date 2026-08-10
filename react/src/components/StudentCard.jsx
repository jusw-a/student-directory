import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isDeansLister = student.gwa <= 1.75;
  const isOnProbation = student.status === 'On Probation';

  const cardClassName = `${styles.card} ${isOnProbation ? styles.probation : ''}`.trim();

  return (
    <div className={cardClassName}>
      <h3>
        {student.name}
        {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
      </h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> {student.yearLevel}</p>
      <p><strong>Status:</strong> {student.status}</p>
      <p><strong>GWA:</strong> {student.gwa}</p>
    </div>
  );
}