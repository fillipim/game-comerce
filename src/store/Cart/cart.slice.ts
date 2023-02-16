import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IProduct } from "interfaces";

export interface ICartState {
    cart: IProduct[]
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

export const selectCount = (state: RootState) => state.cart

export default cartSlice.reducer;