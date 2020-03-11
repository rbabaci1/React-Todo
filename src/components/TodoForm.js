import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: ''
    };
  }

  handleChange = event =>
    this.setState({
      task: event.target.value
    });

  handleSubmit = event => {
    event.preventDefault();

    this.state.task.length > 0 && this.props.addTodo(this.state.task);
    this.setState({
      task: ''
    });
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
          </label>

          <div className='buttons'>
            <button type='submit'>Add Todo</button>
            <button onClick={this.props.clearCompleted} type='button'>
              Clear Completed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// const TodoForm = ({ addTodo, handleChange, clearCompleted, value }) => {
// return (
//   <div className='form-wrapper'>
//     <form onSubmit={addTodo}>
//       <label>
//         <p>Enter a Todo</p>
//         <input
//           onChange={handleChange}
//           type='text'
//           placeholder='...todo'
//           value={value}
//         />
//       </label>

//       <div className='buttons'>
//         <button type='submit'>Add Todo</button>
//         <button onClick={clearCompleted} type='button'>
//           Clear Completed
//         </button>
//       </div>
//     </form>
//   </div>
// );
// };

export default TodoForm;
