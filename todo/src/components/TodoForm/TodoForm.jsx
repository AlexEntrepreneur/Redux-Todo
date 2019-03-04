import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  render () {
    return (
      <div className="task-box-container full-width">
        <div className="task-box">
          <p className="task-box-tip">Press Enter To Submit A Task</p>
          <input
            className="task-input-box full-width"
            placeholder="Enter A To-do"
            type="text"
          />
        </div>
        <button>Clear Complete Todos</button>
      </div>
    );
  }
}

export default TodoForm;
