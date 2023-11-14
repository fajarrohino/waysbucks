import { createSlice } from "@reduxjs/toolkit";
import { getToping } from "./action";
import { IToping } from "../../libs/interface/order";

interface ITopingState {
  data: IToping[] | undefined;
}
const initialState: ITopingState = {
  data: undefined,
};
const topingSlice = createSlice({
  name: "toping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToping.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default topingSlice.reducer;
