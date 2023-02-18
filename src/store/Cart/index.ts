import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "store/Cart/cart.slice";

export const store = configureStore({
  reducer: cartReducer,
});

export type RootState = ReturnType<typeof store.getState>;
