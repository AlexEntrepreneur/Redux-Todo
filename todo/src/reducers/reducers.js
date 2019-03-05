import {
  CLEAR_COMPLETED_TODOS,
  ADD_TODO,
  TOGGLE_TODO_COMPLETE
} from '../actions/action-constants';

const storedTodos = JSON.parse(localStorage.getItem('ReactReduxTodo'));
const initialTodosState = storedTodos || [];

export function todosState(state = initialTodosState, action) {
  switch (action.type) {
  case ADD_TODO:
    return state.concat(action.payload)
  case TOGGLE_TODO_COMPLETE:
    return state.map(todo => {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
  case CLEAR_COMPLETED_TODOS:
    return state.filter(todo => todo.completed === false);
  default:
    return state;
  }
}
