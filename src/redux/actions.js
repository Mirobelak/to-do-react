import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO, SEARCH_TODO } from './actionsTypes';

let nextTodoId = 0;

export const addTodo = (title,text,date)  => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    title,
    text,
    date,
  }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

export const searchTodo = searchValue => ({
  type: SEARCH_TODO,
  payload: { searchValue }
});