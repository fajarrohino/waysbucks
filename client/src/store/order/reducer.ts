import { createSlice } from "@reduxjs/toolkit";
import { getOrder } from "./action";
import { IOrder } from "../../libs/interface/order";

interface IOrderState {
  loading: boolean;
  data: IOrder[] | undefined;
}

const initialState: IOrderState = {
  loading: false,
  data: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload);
    });
    builder.addCase(getOrder.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default orderSlice.reducer;
