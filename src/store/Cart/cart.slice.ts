import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IGameCart } from "interfaces";

export interface ICartState {
    cart: {
        isOpen: boolean,
        items: IGameCart[]
    }
}

const initialState = {
    cart: {
        isOpen: false,
        items: [{
            "id": 312,
            "name": "Super Mario Odyssey",
            "price": 197.88,
            "score": 100,
            "image": "super-mario-odyssey.png",
            "amount": 1
          },
          {
            "id": 201,
            "name": "Call Of Duty Infinite Warfare",
            "price": 49.99,
            "score": 80,
            "image": "call-of-duty-infinite-warfare.png",
            "amount": 1
          }]
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart (state) {
            if(state.cart.isOpen){
                state.cart.isOpen = false
                return;
            }
            state.cart.isOpen = true
        }
    }
})

export const { toggleCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer;