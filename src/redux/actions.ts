import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO } from './actionsTypes';

let nextTodoId = 0;

export const addTodo = (title:string,text:string,date:string)  => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    title,
    text,
    date,
  }
});

export const removeTodo =  (id:number) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});

export const toggleTodo =  (id:number) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter:any)=> ({
  type: SET_FILTER,
  payload: { filter }
});
