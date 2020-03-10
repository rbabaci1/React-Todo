import React from 'react';

const Todo = ({ todo }) => {
  return <p style={{ textDecoration: 'line-through' }}>{todo.task}</p>;
};

export default Todo;
