import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "../modules/cart";
import { exampleReducer } from "../modules/example/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
  cart: cartReducer,
});

export { rootReducer };
