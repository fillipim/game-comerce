import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IGameCart } from "interfaces";

export interface ICartState {
    cart: IGameCart[]
}

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      
    }
})

export const {  } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer;