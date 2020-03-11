import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: ''
    };
    this.initialState = this.state;
  }

  handleChange = event =>
    this.setState({
      task: event.target.value
    });

  handleSubmit = event => {
    event.preventDefault();

    this.state.task.length > 0 && this.props.addTodo(this.state.task);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Enter a Todo</p>
            <input
              onChange={this.handleChange}
              type='text'
              placeholder='...todo'
              value={this.state.task}
            />

            <button type='submit'>Add Todo</button>
          </label>

          <button
            onClick={this.props.clearCompleted}
            type='button'
            className='addTodo-btn'
          >
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
