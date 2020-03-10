import React from 'react';

const TodoForm = ({ addTodo, handleChange, clearCompleted, value }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        onChange={handleChange}
        type='text'
        placeholder='...todo'
        value={value}
      />
      <button type='submit'>Add Todo</button>
      <button onClick={clearCompleted} type='button'>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
