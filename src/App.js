import React, { useState, useEffect, useMemo, useCallback } from 'react';

import { GlobalStyles, Container, Tasks } from './styles';

function App() {
  const [taks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = useCallback(() => {
    setTasks([...taks, newTask]);
    setNewTask('');
  }, [newTask, taks]);

  const handleRemove = useCallback(
    task => {
      const filteredTasks = taks.filter(item => item !== task);

      setTasks([...filteredTasks]);
    },
    [taks]
  );

  useEffect(() => {
    const storedTasks = localStorage.getItem('task');

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taks));
  }, [taks]);

  const taksAmount = useMemo(() => taks.length, [taks]);

  return (
    <Container>
      <GlobalStyles />
      <h1>Task fisherman</h1>

      <Tasks>
        {taks.map(task => (
          <li key={task}>
            {task}

            <button
              className="button button--danger"
              type="button"
              onClick={() => handleRemove(task)}
            >
              Remove
            </button>
          </li>
        ))}
      </Tasks>

      <p>
        <strong>You have {taksAmount} taks</strong>
      </p>

      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />

        <button className="button" type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
    </Container>
  );
}

export default App;
