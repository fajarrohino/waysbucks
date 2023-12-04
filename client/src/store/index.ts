import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./order/reducer";
import orderByIdReducer from "./order/reducerById";
import topingReducer from "./toping/reducer";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    orderById: orderByIdReducer,
    toping: topingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
