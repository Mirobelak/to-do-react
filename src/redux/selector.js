import { STATUS_FILTER } from "../utils/STATUS_FILTER"; 

export const getTodosByStatusFilter = (store, statusFiler) => {
  switch(statusFiler) {
    case STATUS_FILTER.COMPLETED:
      return store.todos.filter(todo => todo.completed);
    case STATUS_FILTER.INCOMPLETED:
      return store.todos.filter(todo => !todo.completed);
    default:
      return store.todos;
  }
}