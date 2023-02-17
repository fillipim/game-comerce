import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IGame, IGameCart } from "interfaces";

export interface ICartState {
  cart: IGameCart[];
}

const initialState = {
  cart: [] as IGameCart[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGameToCart(state, payload: PayloadAction<IGameCart | IGame>) {
      const game = state.cart.find(
        (game: IGameCart) => game.id === payload.payload.id
      );
      if (game) {
        state.cart = state.cart.map((game: IGameCart) => {
          if (game.id === payload.payload.id) {
            game.amount = game.amount + 1;
          }
          return game;
        });
        return;
      }
      state.cart = [...state.cart, { ...payload.payload, amount: 1 }];
    },
  },
});

export const { addGameToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
