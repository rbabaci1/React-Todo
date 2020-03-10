import React from 'react';

const TodoForm = () => {
  let newTodo = {
    id: Date.now(),
    task: '',
    completed: false
  };

  const handleChange = event => {
    newTodo.task = event.target.value;
  };

  return (
    <form>
      <input type='text' placeholder='...todo' />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
