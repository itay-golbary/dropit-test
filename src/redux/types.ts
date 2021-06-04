import { rootReducer } from "./rootReducer";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof rootReducer>;

export type Thunk<T> = ThunkAction<T, RootState, void, AnyAction>;
