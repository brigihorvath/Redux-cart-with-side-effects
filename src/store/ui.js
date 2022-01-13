import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { isCartVisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
