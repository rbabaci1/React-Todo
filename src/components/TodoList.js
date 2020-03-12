import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      listResult: [],
      searchTerm: ''
    };
  }

  changeHandler = event =>
    this.setState({
      searchTerm: event.target.value
    });

  render() {
    const filteredTodoList = this.props.todoList.filter(todo =>
      todo.task.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className='list-items'>
        <section className='search-input'>
          <label>
            <span role='img' aria-label='search icon'>
              🔍
            </span>
            <input
              onChange={this.changeHandler}
              type='text'
              value={this.state.searchTerm}
              placeholder='...search'
            />
          </label>
        </section>
        {filteredTodoList.map((todo, index) => (
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
