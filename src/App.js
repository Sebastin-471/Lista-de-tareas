// App.js
import React, { useState } from 'react';
import './App.css';
import TaskDetails from './Component/TaskDetails';

function useTasks() {
  const [tasks, setTasks] = useState([]);
  return [tasks, setTasks];
}

function App() {
  const [tasks, setTasks] = useTasks();
  const [newTask, setNewTask] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false, details: '' }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleShowDetails = (index) => {
    setSelectedTask(tasks[index]);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div className="task-container">
              <p>{task.text}</p>
              <div>
                <button onClick={() => handleRemoveTask(index)}>Eliminar</button>
                <button onClick={() => handleToggleCompletion(index)}>
                  {task.completed ? 'Desmarcar' : 'Completo'}
                </button>
                <button onClick={() => handleShowDetails(index)}>Detalles</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <TaskDetails task={selectedTask} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default App;
