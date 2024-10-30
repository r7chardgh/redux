import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterSlice } from "./slice";

export const makeStore = () => {
  return configureStore({
    reducer: { counter: counterSlice.reducer, },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>