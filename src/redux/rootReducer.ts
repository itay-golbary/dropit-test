import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "../modules/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export { rootReducer };
