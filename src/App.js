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

    if (this.state.newTodo.task.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, this.state.newTodo]
      });

      this.setState({
        newTodo: { id: Date.now(), task: '', completed: false }
      });
    }
  };

  handleChange = event =>
    this.setState({
      newTodo: { ...this.state.newTodo, task: event.target.value }
    });

  toggleTodo = id => {
    const todoIndex = this.state.todoList.findIndex(todo => todo.id === id);
    const oldState = this.state.todoList;

    oldState[todoIndex].completed = !oldState[todoIndex].completed;

    this.setState({ todoList: oldState });
  };

  clearCompleted = () => {
    const notCompletedList = this.state.todoList.filter(
      todo => !todo.completed
    );

    this.setState({ todoList: notCompletedList });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div className='todoList-wrapper'>
          <TodoList
            todoList={this.state.todoList}
            toggleTodo={this.toggleTodo}
          />

          <TodoForm
            addTodo={this.addTodo}
            handleChange={this.handleChange}
            value={this.state.newTodo.task}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
