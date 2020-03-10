import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      task: '',
      completed: false
    };
    this.initialState = this.state;
  }
  handleChange = event =>
    this.setState({ task: event.target.value, id: Date.now() });

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='...todo'
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button type='submit'>Add Todo</button>
        <button type='button'>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
