import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  clearCompletedTodos
} from '../../actions/action-creators';
import './TodoForm.css';

class TodoForm extends Component {
  taskInputBox = React.createRef();

  onTaskInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.addTodo({ value: this.taskInputBox.current.value });
      this.taskInputBox.current.value = '';
      this.taskInputBox.current.focus();
    }
  };

  render () {
    return (
      <div className="task-box-container full-width">
        <div className="task-box">
          <p className="task-box-tip">Press Enter To Submit A Task</p>
          <input
            onKeyDown={this.onTaskInputKeyDown}
            className="task-input-box full-width"
            placeholder="Enter A To-do"
            type="text"
            ref={this.taskInputBox}
          />
        </div>
        <button
          onClick={this.props.clearCompletedTodos}
        >
        Clear Complete Todos
      </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
    clearCompletedTodos
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoForm);
