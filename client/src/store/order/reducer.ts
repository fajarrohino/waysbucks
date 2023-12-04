import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../libs/interface/order";
import { getOrder } from "./action";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    data: [] as IOrder[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getOrder.rejected, (state) => {
      state.loading = false;
    });
  },
});

const reducer = orderSlice.reducer;
export default reducer;
