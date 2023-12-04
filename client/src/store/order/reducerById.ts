import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../libs/interface/order";
import { getOrderById } from "./action";

const orderByIdSlice = createSlice({
  name: "orderById",
  initialState: {
    loading: false,
    data: [] as IOrder,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getOrderById.rejected, (state) => {
      state.loading = false;
    });
  },
});

const reducerById = orderByIdSlice.reducer;
export default reducerById;
