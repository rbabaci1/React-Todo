import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          id: 1,
          task: 'Finish React-Todo MVP!',
          completed: false
        }
      ],
      newTodo: {
        id: Date.now(),
        task: '',
        completed: false
      }
    };
  }

  addTodo = event => {
    event.preventDefault();

    this.setState({
      todoList: [...this.state.todoList, this.state.newTodo]
    });
    this.setState({ newTodo: { id: Date.now(), task: '', completed: false } });
  };

  handleChange = event => {
    this.setState({
      newTodo: { ...this.state.newTodo, task: event.target.value }
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList todoList={this.state.todoList} />

        <TodoForm
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          value={this.state.newTodo.task}
        />
      </div>
    );
  }
}

export default App;
