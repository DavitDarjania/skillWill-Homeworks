import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../types/Cart";
import { getCart } from "../cartThunk/cart.thunk";

const initialState: {
  cart: Cart[];
  loading: boolean;
  error: null | Error | string;
} = {
  cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default cartSlice.reducer;
