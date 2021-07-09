// (application) dependencies imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// (application) tools imports
import { RootState, Thunk } from "../../redux/types";

// (local) context imports
import { StateCopy } from "./types";

// utils
const initialStateCopy: StateCopy = {
  string: "",
  int: 0,
  boolean: false,
};

// reducer and internal actions
const {
  actions: { setStateCopy },
  reducer: exampleReducer,
} = createSlice({
  name: "example",
  initialState: initialStateCopy,
  reducers: {
    setStateCopy: (state, { payload }: PayloadAction<StateCopy>) => payload,
  },
});

// selector
const selectExampleStateCopy =
  () =>
  ({ example }: RootState): StateCopy =>
    example;

// external actions
const updateExampleStateCopy =
  (state: StateCopy): Thunk<void> =>
  async (dispatch) => {
    dispatch(setStateCopy(state));
  };

const resetExampleStateCopy = (): Thunk<void> => async (dispatch) => {
  dispatch(setStateCopy(initialStateCopy));
};

// exports
export {
  exampleReducer,
  selectExampleStateCopy,
  resetExampleStateCopy,
  updateExampleStateCopy,
};
