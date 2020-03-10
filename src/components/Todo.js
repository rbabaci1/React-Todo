import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const testDecoration = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    cursor: 'pointer'
  };

  return (
    <p
      onClick={() => {
        toggleTodo(todo.id);
      }}
      style={testDecoration}
    >
      {todo.task}
    </p>
  );
};

export default Todo;
