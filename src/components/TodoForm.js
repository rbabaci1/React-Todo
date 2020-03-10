import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      task: '',
      completed: false
    };
  }
  handleChange = event => this.setState({ task: event.target.value });

  render() {
    return (
      <form>
        <input type='text' placeholder='...todo' onChange={this.handleChange} />
        <button>Add Todo</button>
        {console.log(this.state.task)}
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
