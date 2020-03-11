import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoList: []
    };
  }

  addTodo = todoTask => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { id: Date.now(), task: todoTask, completed: false }
      ]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todoList: this.state.todoList.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  clearCompleted = () => {
    const notCompletedList = this.state.todoList.filter(
      todo => !todo.completed
    );

    this.setState({ todoList: notCompletedList });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to just do it App!</h2>
        </div>

        <div className='todoList-wrapper'>
          <TodoList
            todoList={this.state.todoList}
            toggleTodo={this.toggleTodo}
          />

          <TodoForm
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
