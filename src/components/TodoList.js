import React from 'react';

import Todo from './Todo';

const TodoList = ({ todoList, toggleTodo }) => {
  return (
    <div className='list-items'>
      {todoList.map(todo => (
        <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
