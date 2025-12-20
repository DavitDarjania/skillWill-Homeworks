import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Cart } from "../../types/Cart";

export const getCart = createAsyncThunk<
  Cart[], // return type
  void, // argument type
  { rejectValue: string } // type of rejected payload
>("/cart/Get", async (_, ThunkApi) => {
  try {
    const res = await fetch("http://localhost:3000/cart");
    const data: Cart[] = await res.json();
    return data;
  } catch (error) {
    return ThunkApi.rejectWithValue("Unknown error");
  }
});

export const postCart = createAsyncThunk(
  "/cart/Post",
  async (payload: Cart, ThunkApi) => {
    try {
      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data: Cart[] = await res.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return ThunkApi.rejectWithValue(error.message);
      }
      return ThunkApi.rejectWithValue("Unknown error");
    }
  }
);

export const updateCart = createAsyncThunk(
  "/cart/Put",
  async (payload: Cart, ThunkApi) => {
    try {
      const res = await fetch(`http://localhost:3000/cart/${payload.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data: Cart[] = await res.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return ThunkApi.rejectWithValue(error.message);
      }
      return ThunkApi.rejectWithValue("Unknown error");
    }
  }
);

export const deleteCart = createAsyncThunk(
  "/cart/Delete",
  async (payload: Cart, ThunkApi) => {
    try {
      const res = await fetch(`http://localhost:3000/cart/${payload.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data: Cart[] = await res.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return ThunkApi.rejectWithValue(error.message);
      }
      return ThunkApi.rejectWithValue("Unknown error");
    }
  }
);
