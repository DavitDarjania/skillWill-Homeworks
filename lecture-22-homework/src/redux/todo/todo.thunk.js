import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk("/tasks/GET", async (_, ThunkAPI) => {
  try {
    const res = await fetch(
      "https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks"
    );
    const data = await res.json();
    // if (data) return ThunkAPI.fulfillWithValue(data);
    if (data) return data;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});
export const postTasks = createAsyncThunk(
  "/tasks/POST",
  async (payload, ThunkAPI) => {
    console.log(payload);
    try {
      const res = await fetch(
        "https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "/tasks/DELETE",
  async (payload, ThunkAPI) => {
    try {
      await fetch(
        `https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks/${payload}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return payload;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTask = createAsyncThunk(
  "/tasks/UPDATE",
  async ({ id, input }, ThunkAPI) => {
    console.log(id, input);
    try {
      const res = await fetch(
        `https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: input }),
        }
      );
      const data = res.json();
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCompletion = createAsyncThunk(
  "/tasks/TOGGLE",
  async ({ id, isCompleted }, ThunkAPI) => {
    try {
      const res = await fetch(
        `https://691e0824bb52a1db22bcd3fd.mockapi.io/todo/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isCompleted: !isCompleted }),
        }
      );
      const data = res.json();
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
