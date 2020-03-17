import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {
  setLocalStorage,
  getClearedStorage,
  setToggleTodo
} from './components/setLocalStorage';

import './components/Todo.css';

class App extends React.Component {
  state = {
    todoList: setLocalStorage('todoList')
  };

  addTodo = todoTask => {
    this.setState({
      todoList: setLocalStorage('todoList', todoTask)
    });
  };

  toggleTodo = todoId => {
    this.setState({ todoList: setToggleTodo('todoList', todoId) });
  };

  clearCompleted = () =>
    this.setState({ todoList: getClearedStorage('todoList') });

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
