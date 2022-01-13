import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-redux';
import uiSlice from './ui';

// with configureStore we can combine reducers in one object
const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});

export default store;
