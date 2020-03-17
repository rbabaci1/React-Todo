import React from 'react';

const Todo = ({ todo, toggleTodo, num }) => {
  return (
    <div>
      <p
        onClick={() => toggleTodo(todo.id)}
        className={todo.completed ? 'todo-completed' : ''}
      >
        {num + 1}) {todo.task}
      </p>
    </div>
  );
};
export default Todo;
