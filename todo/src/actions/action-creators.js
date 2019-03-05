import uuid from 'uuid';
import {
  CLEAR_COMPLETED_TODOS,
  ADD_TODO,
  TOGGLE_TODO_COMPLETE
} from '../actions/action-constants';

export const addTodo = ({ value, id }) => {
  return {
    type: ADD_TODO,
    payload: {
      value,
      id: uuid(),
      completed: false
    }
  }
};

export const toggleTodoComplete = (id) => {
  return {
    type: TOGGLE_TODO_COMPLETE,
    payload: id
  }
};

export const clearCompletedTodos = () => {
  return {
    type: CLEAR_COMPLETED_TODOS
  }
};
