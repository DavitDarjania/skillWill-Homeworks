import { todoReducer } from "./todo/todo.reducer";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
