import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "UI",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    togle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
