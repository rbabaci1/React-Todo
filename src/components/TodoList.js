import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      listResult: []
    };
  }

  render() {
    return (
      <div className='list-items'>
        {this.props.todoList.map((todo, index) => (
          <Todo
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            key={todo.id}
            num={index}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
