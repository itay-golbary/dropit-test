import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, Thunk } from "../../redux/types";
import { Product } from "../product/types";

import { Cart } from "./types";

const initialState: Cart = [];

const {
  actions: { setCart },
  reducer: cartReducer,
} = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<Cart>) => payload,
  },
});

const selectCartState =
  () =>
  ({ cart }: RootState): Cart =>
    cart;

const addProductToCart =
  (product: Product): Thunk<void> =>
  async (dispatch, getState) => {
    const { cart } = getState();

    const isExists = cart
      .reduce<number[]>((acc, current) => {
        acc.push(current.product.id);

        return acc;
      }, [])
      .includes(product.id);

    const newCart = isExists
      ? cart.reduce<Cart>((acc, current) => {
          if (current.product.id === product.id) {
            acc.push({ ...current, count: current.count + 1 });
          } else {
            acc.push(current);
          }

          return acc;
        }, [])
      : [...cart, { product, count: 1 }];

    dispatch(setCart(newCart));
  };

const resetCartState = (): Thunk<void> => async (dispatch) => {
  dispatch(setCart([]));
};

export { cartReducer, addProductToCart, selectCartState, resetCartState };
