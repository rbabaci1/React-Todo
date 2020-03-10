import React from 'react';

const TodoForm = () => {
  let newTodo = {
    id: 0,
    task: '',
    completed: false
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
