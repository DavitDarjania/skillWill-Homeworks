const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todoList: [...state.todoList, action.payload],
      };
    default: {
      return state;
    }
  }
};
