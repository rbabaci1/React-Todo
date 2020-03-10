import React from 'react';

import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return (
    <div className='todos-wrapper'>
      {todoList.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
