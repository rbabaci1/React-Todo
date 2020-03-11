import React from 'react';

const Todo = ({ todo, toggleTodo, num }) => {
  const testDecoration = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    cursor: 'pointer'
  };

  return (
    <p onClick={() => toggleTodo(todo.id)} style={testDecoration}>
      {num + 1}) {todo.task}
    </p>
  );
};

export default Todo;
