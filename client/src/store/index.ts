import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./order/reducer";
import topingReducer from "./toping/reducer";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    toping: topingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
