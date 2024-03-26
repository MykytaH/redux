import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItem(state, action) {
      state.changed = true;
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex === -1) {
        state.items.push(newItem);
      } else {
        state.items[existingItemIndex].quantity++;
      }
    },
    removeItem(state, action) {
      state.changed = true;
      state.totalQuantity--;
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId.id
      );
      state.items[existingItemIndex].quantity--;

      if (state.items[existingItemIndex].quantity === 0) {
        state.items.splice(existingItemIndex, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
