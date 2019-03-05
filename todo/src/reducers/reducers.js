import {
  CLEAR_COMPLETED_TODOS,
  ADD_TODO,
  TOGGLE_TODO_COMPLETE
} from '../actions/action-constants';

const initialState = {
  todos: []
};

export function todosState(state = initialState, action) {
  switch (action.type) {
  case ADD_TODO:
    return state.todos.concat(action.payload);
  case TOGGLE_TODO_COMPLETE:
    return state.todos.map(todo => {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
  case CLEAR_COMPLETED_TODOS:
    return state.todos.filter(todo => todo.completed === false);
  default:
    return state;
  }
}
