import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actionsTypes';

const initialState = {
  todos: [{
    id: 0,
    title: "testing",
    completed: false
  }
    
  ]
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, title, text, date } = action.payload;
      return {
        todos: [
          ...state.todos,
          { title, text, date, completed: false, id }
        ]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.filter((obj) => obj.id !== id)
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todos;