import React from 'react';

import Todo from './Todo';

const TodoList = ({ todoList, toggleTodo }) => {
  return (
    <div className='list-items'>
      {todoList.map((todo, index) => (
        <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id} num={index} />
      ))}
    </div>
  );
};

export default TodoList;
