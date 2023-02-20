import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IGame, IGameCart } from "interfaces";
import { toast } from "react-toastify";

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

      toast.success("Item adicionado ao carrinho");
    },
    removeGameToCart(state, { payload }: PayloadAction<number>) {
      const gameIndex = state.cart.findIndex((game) => game.id === payload);
      if (state.cart[gameIndex].amount === 1) {
        state.cart = [
          ...state.cart.slice(0, gameIndex),
          ...state.cart.slice(gameIndex + 1),
        ];
      } else {
        state.cart = state.cart.map((game) =>
          game.id === payload ? { ...game, amount: game.amount - 1 } : game
        );
      }
      toast.success("Item removido do carrinho!")
    },
    clearCart(state) {
      state.cart = [] as IGameCart[];
    },
  },
});

export const { addGameToCart, removeGameToCart, clearCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
