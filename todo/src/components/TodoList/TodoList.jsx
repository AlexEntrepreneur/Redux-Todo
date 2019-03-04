import React, { Component } from 'react';
import './TodoList.css'

class TodoList extends Component {
  render () {
    return (
      <div className="todo-list-container">
        {/*
          this.props.todos.map(todo => {
            return (
              <div
                key={todo.id}
                className={`todo completed-${todo.completed}`}>
                { todo.task }
                <input type="checkbox" onChange={(event) => this.onCheckboxChange(todo.id, event)} checked={todo.completed} />
                </div>
            )
          })
        */}
      </div>
    );
  }
}

export default TodoList;
