import React from 'react';
import '../CSS/styleTask.css'

const TaskDetails = ({ task, onClose }) => (
  <div className="overlay">
    <div className="details-dialog">
      <h2>Detalles de la Tarea</h2>
      <p>{task.text}</p>
      <p>{task.details}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  </div>
);

export default TaskDetails;
