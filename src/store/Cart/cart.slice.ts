import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IGame, IGameCart } from "interfaces";
import { showToast } from "helpers";

export interface ICartState {
  cart: IGameCart[];
  CartIsOpen: boolean;
}

const initialState = {
  cart: [] as IGameCart[],
  cartIsOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGameToCart(state, { payload }: PayloadAction<IGameCart | IGame>) {
      const existingGameInCart = state.cart.find(
        (game: IGameCart) => game.id === payload.id
      );

      if (existingGameInCart) {
        state.cart = state.cart.map((game: IGameCart) =>
          game.id === payload.id ? { ...game, amount: game.amount + 1 } : game
        );
      } else {
        state.cart = [...state.cart, { ...payload, amount: 1 }];
      }
      state.cartIsOpen = true;
      showToast("success", "Item adicionado ao carrinho!");
    },
    removeGameToCart(state, { payload }: PayloadAction<number>) {
      const gameIndex = state.cart.findIndex((game) => game.id === payload);
      if (state.cart[gameIndex].amount === 1) {
        state.cart = state.cart.filter((game) => game.id !== payload);
      } else {
        state.cart = state.cart.map((game) =>
          game.id === payload ? { ...game, amount: game.amount - 1 } : game
        );
      }
      showToast("success", "Item removido do carrinho!!");
    },
    clearCart(state) {
      state.cart = [] as IGameCart[];
    },
    togglecart(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
  },
});

export const { addGameToCart, removeGameToCart, clearCart, togglecart } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state;

export default cartSlice.reducer;
