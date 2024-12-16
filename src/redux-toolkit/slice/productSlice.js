import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: []
  },
  reducers: {
    add_to_cart(state, action) {
      const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].qty += 1;
      } else {
        state.cartItem.push({ ...action.payload, qty: 1 });
      }
    },
    remove_cart(state, action) {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
    },
    update_cart(state, action) {
      const { id, qty } = action.payload;
      const itemIndex = state.cartItem.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].qty = qty;
      }
    }
  },
});

export const { add_to_cart, remove_cart, update_cart } = productSlice.actions;
export default productSlice.reducer;
