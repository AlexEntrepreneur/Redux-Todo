import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodoComplete } from '../../actions/action-creators';
import './TodoList.css'

class TodoList extends Component {
  render () {
    return (
      <div className="todo-list-container">
        {
          this.props.todos.map(todo => {
            return (
              <div
                key={todo.id}
                className={`todo completed-${todo.completed}`}
              >
                { todo.value }
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.props.toggleTodoComplete(todo.id)}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleTodoComplete
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoList);
