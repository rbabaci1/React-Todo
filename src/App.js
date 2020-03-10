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
      ]
    };
  }
  addTodo = todo => {
    this.setState({
      todoList: [...this.state.todoList, todo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoList todoList={this.state.todoList} />

        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
