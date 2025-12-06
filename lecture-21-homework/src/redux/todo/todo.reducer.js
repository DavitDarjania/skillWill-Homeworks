const initialState = {
  todoList: [{ name: "do this or this", status: false, id: 1 }],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((el) =>
          el.id == action.payload ? { ...el, status: !el.status } : el
        ),
      };
    case "DELETE_TODO":
      const filteredArr = state.todoList.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        todoList: filteredArr,
      };
    default: {
      return state;
    }
  }
};
