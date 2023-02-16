import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IGame } from "interfaces";

export interface ICartState {
    cart: IGame[]
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