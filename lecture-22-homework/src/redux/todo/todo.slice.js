import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTask,
  editTask,
  getTasks,
  postTasks,
  toggleCompletion,
} from "./todo.thunk";

const initialState = {
  todoList: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList(state, action) {
      state.todoList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // getTasks
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // postTasks
      .addCase(postTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(postTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList.push(action.payload);
      })
      .addCase(postTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // deleteTask
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = state.todoList.filter(
          (el) => el.id !== action.payload
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // editTask
      .addCase(editTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = state.todoList.map((el) =>
          el.id == action.payload.id ? action.payload : el
        );
      })
      .addCase(editTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //toggleCompletion
      .addCase(toggleCompletion.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(toggleCompletion.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = state.todoList.map((el) =>
          el.id == action.payload.id ? action.payload : el
        );
      })
      .addCase(toggleCompletion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
