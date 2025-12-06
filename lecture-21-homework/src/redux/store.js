import { todoReducer } from "./todo/todo.reducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
