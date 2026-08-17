import { useState } from 'react';
import styles from './StudentForm.module.css';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name,
      course,
      yearLevel,
      status,
      gwa: Number(gwa)
    };

    onAdd(newStudent);

    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>Name</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label>Course</label>
        <input
          className={styles.input}
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label>Year Level</label>
        <input
          className={styles.input}
          type="text"
          value={yearLevel}
          onChange={(e) => setYearLevel(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label>Status</label>
        <select
          className={styles.input}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Regular">Regular</option>
          <option value="Irregular">Irregular</option>
          <option value="On Probation">On Probation</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>GWA</label>
        <input
          className={styles.input}
          type="number"
          step="0.01"
          value={gwa}
          onChange={(e) => setGwa(e.target.value)}
          required
        />
      </div>

      <button className={styles.submitButton} type="submit">
        Add Student
      </button>
    </form>
  );
}