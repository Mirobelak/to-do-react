import { STATUS_FILTER } from "../utils/STATUS_FILTER"; 

export const getTodosByStatusFilter = (store:any, statusFiler:any) => {
  switch(statusFiler) {
    case STATUS_FILTER.COMPLETED:
      return store.todos.filter((todo:any) => todo.completed);
    case STATUS_FILTER.INCOMPLETED:
      return store.todos.filter((todo:any) => !todo.completed);
    default:
      return store.todos;
  }
}