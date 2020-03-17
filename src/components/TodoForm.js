import React from 'react';
import { useInput } from './useInput';

export default function TodoForm({ addTodo, clearCompleted }) {
  const [task, setTask, handleChange] = useInput('task', '');

  const handleSubmit = event => {
    event.preventDefault();

    task.length > 0 && addTodo(task);
    setTask('');
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Enter a Todo</p>
          <input
            onChange={e => handleChange(e.target.value)}
            type='text'
            placeholder='...todo'
            value={task}
          />

          <button type='submit'>Add Todo</button>
        </label>

        <button onClick={clearCompleted} type='button' className='addTodo-btn'>
          Clear Completed
        </button>
      </form>
    </div>
  );
}
