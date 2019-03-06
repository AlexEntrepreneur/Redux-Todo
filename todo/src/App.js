import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

class App extends Component {
  componentDidUpdate() {
    const todosString = JSON.stringify(this.props.todos);
    localStorage.setItem('ReactReduxTodo', todosString);
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos} />
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todosState
  }
};

export default connect(mapStateToProps)(App);
