import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, Thunk } from "../../redux/types";
import { Cart } from "./types";
import { Product } from "../product/types";

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

const removeProductFromCart =
  (product: Product): Thunk<void> =>
  async (dispatch, getState) => {
    const { cart } = getState();

    const newCart = cart.reduce<Cart>((acc, current) => {
      if (current.product.id !== product.id) {
        acc.push(current);
      }

      return acc;
    }, []);

    dispatch(setCart(newCart));
  };

const incrementProductCount =
  (product: Product): Thunk<void> =>
  async (dispatch, getState) => {
    const { cart } = getState();

    const newCart = cart.reduce<Cart>((acc, current) => {
      if (current.product.id === product.id) {
        acc.push({ ...current, count: current.count + 1 });
      } else {
        acc.push(current);
      }

      return acc;
    }, []);

    dispatch(setCart(newCart));
  };

const decrementProductCount =
  (product: Product): Thunk<void> =>
  async (dispatch, getState) => {
    const { cart } = getState();

    const newCart = cart.reduce<Cart>((acc, current) => {
      if (current.product.id === product.id) {
        if (current.count !== 1) {
          acc.push({ ...current, count: current.count - 1 });
        }
      } else {
        acc.push(current);
      }

      return acc;
    }, []);

    dispatch(setCart(newCart));
  };

type UpdateProductCount = {
  product: Product;
  value: number;
};

const updateProductCount =
  ({ product, value }: UpdateProductCount): Thunk<void> =>
  async (dispatch, getState) => {
    const { cart } = getState();

    const newCart = cart.reduce<Cart>((acc, current) => {
      if (current.product.id === product.id) {
        acc.push({ ...current, count: value });
      } else {
        acc.push(current);
      }

      return acc;
    }, []);

    dispatch(setCart(newCart));
  };

const getCartState =
  () =>
  ({ cart }: RootState): Cart =>
    cart;

export {
  cartReducer,
  addProductToCart,
  removeProductFromCart,
  incrementProductCount,
  decrementProductCount,
  updateProductCount,
  getCartState,
};
